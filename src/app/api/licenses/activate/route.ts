import { NextRequest, NextResponse } from 'next/server';

const PROVISIONER_URL = process.env.PROVISIONER_URL || 'http://localhost:4000';

export async function POST(request: NextRequest) {
	try {
		const body = await request.text();

		const res = await fetch(`${PROVISIONER_URL}/api/licenses/activate`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body,
		});

		const data = await res.json();
		return NextResponse.json(data, { status: res.status });
	} catch (err) {
		console.error('[licenses/activate] Proxy error:', err);
		return NextResponse.json({ error: 'License server unavailable' }, { status: 502 });
	}
}
