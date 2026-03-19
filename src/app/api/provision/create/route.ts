import { NextRequest, NextResponse } from 'next/server';

const PROVISIONER_URL = process.env.PROVISIONER_URL || 'http://localhost:4000';
const PROVISIONER_ADMIN_KEY = process.env.PROVISIONER_ADMIN_KEY || '';

export async function POST(request: NextRequest) {
	let body: { slug?: string; password?: string; checkoutId?: string };
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
	}

	const { slug, password, checkoutId } = body;

	if (!slug || !password || !checkoutId) {
		return NextResponse.json(
			{ error: 'Username, password, and checkout ID are required.' },
			{ status: 400 },
		);
	}

	if (password.length < 8) {
		return NextResponse.json(
			{ error: 'Password must be at least 8 characters.' },
			{ status: 400 },
		);
	}

	// TODO: Verify checkoutId against LemonSqueezy API to confirm payment
	// For now, we trust the checkout_id exists (the webhook will have already fired)

	try {
		const res = await fetch(`${PROVISIONER_URL}/api/tenants`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PROVISIONER_ADMIN_KEY}`,
			},
			body: JSON.stringify({
				slug,
				email: '', // Will be filled by LemonSqueezy webhook
				password,
			}),
		});

		if (!res.ok) {
			const data = await res.json();
			return NextResponse.json(
				{ error: data.error || 'Failed to create instance.' },
				{ status: res.status },
			);
		}

		const data = await res.json();
		return NextResponse.json({
			ok: true,
			dashboardUrl: data.tenant.dashboardUrl,
		});
	} catch (err) {
		console.error('[provision] Error creating tenant:', err);
		return NextResponse.json(
			{ error: 'Service temporarily unavailable. Please try again.' },
			{ status: 503 },
		);
	}
}
