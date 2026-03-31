import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';
import { selfHostedLicenseEmail } from '@/lib/email-templates';

const WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';
const PROVISIONER_URL = process.env.PROVISIONER_URL || 'http://localhost:4000';
const PROVISIONER_ADMIN_KEY = process.env.PROVISIONER_ADMIN_KEY || '';
const SELFHOSTED_PRODUCT_ID = process.env.LEMONSQUEEZY_SELFHOSTED_PRODUCT_ID || '';

function verifySignature(payload: string, signature: string): boolean {
	if (!WEBHOOK_SECRET) return false;
	const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
	hmac.update(payload);
	const digest = hmac.digest('hex');
	try {
		return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
	} catch {
		return false;
	}
}

async function callProvisioner(path: string, method = 'POST', body?: Record<string, unknown>) {
	const res = await fetch(`${PROVISIONER_URL}${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${PROVISIONER_ADMIN_KEY}`,
		},
		body: body ? JSON.stringify(body) : undefined,
	});
	return res;
}

export async function POST(request: NextRequest) {
	const rawBody = await request.text();
	const signature = request.headers.get('x-signature') || '';

	if (!verifySignature(rawBody, signature)) {
		console.error('[webhook/ls] Invalid signature');
		return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
	}

	const event = JSON.parse(rawBody);
	const eventName: string = event.meta?.event_name || '';
	const customData = event.meta?.custom_data || {};
	const subscriptionId = String(event.data?.id || '');
	const customerEmail = event.data?.attributes?.user_email || '';

	console.log(`[webhook/ls] Event: ${eventName}`, { subscriptionId, customerEmail });

	try {
		switch (eventName) {
			case 'subscription_created': {
				const productId = String(event.data?.attributes?.product_id || '');
				const isSelfHosted = SELFHOSTED_PRODUCT_ID && productId === SELFHOSTED_PRODUCT_ID;

				if (isSelfHosted) {
					// Self-hosted BYOK — create license, email key to user
					const licRes = await callProvisioner('/api/licenses', 'POST', {
						email: customerEmail,
						subscription_id: subscriptionId,
						plan_tier: 'self-hosted-byok',
					});

					if (!licRes.ok) {
						console.error('[webhook/ls] Failed to create self-hosted license');
						return NextResponse.json({ error: 'License creation failed' }, { status: 500 });
					}

					const { license } = await licRes.json();

					// Email the license key + install instructions to the customer
					if (process.env.RESEND_API_KEY) {
						const resend = new Resend(process.env.RESEND_API_KEY);
						const email = selfHostedLicenseEmail(license.key);
						await resend.emails.send({
							from: 'CapiBot <noreply@capibot.io>',
							to: customerEmail,
							subject: email.subject,
							html: email.html,
						});
					}

					console.log(`[webhook/ls] Self-hosted license created for ${customerEmail}: ${license.key}`);
				} else {
					// Hosted tenant — existing provisioning flow
					const slug = customData.tenant_slug;
					if (slug) {
						await callProvisioner('/api/tenants', 'POST', {
							slug,
							email: customerEmail,
							subscriptionId,
							customerId: event.data?.attributes?.customer_id?.toString(),
						});
						console.log(`[webhook/ls] Auto-provisioned tenant: ${slug}`);
					} else {
						console.log(`[webhook/ls] Subscription created, awaiting welcome page setup`);
					}
				}
				break;
			}

			case 'subscription_cancelled':
			case 'subscription_expired':
			case 'subscription_payment_failed': {
				// Stop hosted tenant if exists
				const tenantsRes = await callProvisioner('/api/tenants', 'GET');
				if (tenantsRes.ok) {
					const { tenants } = await tenantsRes.json();
					const tenant = tenants.find((t: any) => t.subscriptionId === subscriptionId);
					if (tenant) {
						await callProvisioner(`/api/tenants/${tenant.slug}/stop`, 'POST');
						console.log(`[webhook/ls] Stopped tenant: ${tenant.slug} (${eventName})`);
					}
				}

				// Suspend self-hosted license if exists
				await callProvisioner(`/api/licenses/by-subscription/${subscriptionId}/suspend`, 'POST');
				console.log(`[webhook/ls] Suspended license for subscription ${subscriptionId} (${eventName})`);
				break;
			}

			case 'subscription_resumed':
			case 'subscription_payment_success': {
				// Resume hosted tenant if exists
				const tenantsRes = await callProvisioner('/api/tenants', 'GET');
				if (tenantsRes.ok) {
					const { tenants } = await tenantsRes.json();
					const tenant = tenants.find((t: any) => t.subscriptionId === subscriptionId);
					if (tenant) {
						await callProvisioner(`/api/tenants/${tenant.slug}/start`, 'POST');
						console.log(`[webhook/ls] Resumed tenant: ${tenant.slug} (${eventName})`);
					}
				}

				// Reactivate self-hosted license if exists
				await callProvisioner(`/api/licenses/by-subscription/${subscriptionId}/reactivate`, 'POST');
				console.log(`[webhook/ls] Reactivated license for subscription ${subscriptionId} (${eventName})`);
				break;
			}

			default:
				console.log(`[webhook/ls] Unhandled event: ${eventName}`);
		}

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error(`[webhook/ls] Error handling ${eventName}:`, err);
		return NextResponse.json({ error: 'Internal error' }, { status: 500 });
	}
}
