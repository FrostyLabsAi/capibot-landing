import { NextRequest, NextResponse } from 'next/server';

const PROVISIONER_URL = process.env.PROVISIONER_URL || 'http://localhost:4000';
const PROVISIONER_ADMIN_KEY = process.env.PROVISIONER_ADMIN_KEY || '';

export async function GET(request: NextRequest) {
	const slug = request.nextUrl.searchParams.get('slug');

	if (!slug || typeof slug !== 'string') {
		return NextResponse.json({ available: false, reason: 'Missing slug' });
	}

	try {
		const res = await fetch(`${PROVISIONER_URL}/api/tenants/${slug}/check`, {
			headers: { Authorization: `Bearer ${PROVISIONER_ADMIN_KEY}` },
		});

		if (!res.ok) {
			return NextResponse.json({ available: false, reason: 'Check failed' });
		}

		const data = await res.json();
		return NextResponse.json({ available: data.available });
	} catch {
		return NextResponse.json({ available: false, reason: 'Service unavailable' });
	}
}
