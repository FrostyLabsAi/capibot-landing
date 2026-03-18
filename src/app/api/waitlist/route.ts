import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
	const now = Date.now();
	const entry = rateLimitMap.get(ip);

	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
		return false;
	}

	entry.count++;
	return entry.count > RATE_LIMIT_MAX;
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
	const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
		|| request.headers.get('x-real-ip')
		|| 'unknown';

	if (rateLimit(ip)) {
		return NextResponse.json(
			{ error: 'Too many requests. Please try again later.' },
			{ status: 429 }
		);
	}

	let body: { email?: string; source?: string };
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
	}

	const { email, source } = body;

	if (!email || typeof email !== 'string') {
		return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
	}

	const normalizedEmail = email.trim().toLowerCase();

	if (!isValidEmail(normalizedEmail)) {
		return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { error } = await resend.contacts.create({
			email: normalizedEmail,
			unsubscribed: false,
		});

		if (error) {
			console.error('[waitlist] Resend API error:', error);
			return NextResponse.json({ error: 'Failed to join waitlist. Please try again.' }, { status: 500 });
		}

		const src = typeof source === 'string' ? source.slice(0, 50) : 'hero';
		console.log(`[waitlist] New signup: ${normalizedEmail} (source: ${src})`);
	} catch (err) {
		console.error('[waitlist] Resend API error:', err);
		return NextResponse.json({ error: 'Failed to join waitlist. Please try again.' }, { status: 500 });
	}

	return NextResponse.json({ ok: true, message: "You're on the list!" });
}

export async function GET(request: NextRequest) {
	const adminKey = process.env.WAITLIST_ADMIN_KEY;

	if (!adminKey) {
		return NextResponse.json({ error: 'Admin access not configured.' }, { status: 403 });
	}

	const providedKey = request.headers.get('authorization')?.replace('Bearer ', '');

	if (providedKey !== adminKey) {
		return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
	}

	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data, error } = await resend.contacts.list();

		if (error) {
			console.error('[waitlist] Resend API error:', error);
			return NextResponse.json({ error: 'Failed to retrieve contacts.' }, { status: 500 });
		}

		const contacts = data?.data ?? [];
		return NextResponse.json({ count: contacts.length, contacts });
	} catch (err) {
		console.error('[waitlist] Resend API error:', err);
		return NextResponse.json({ error: 'Failed to retrieve contacts.' }, { status: 500 });
	}
}
