import { NextRequest, NextResponse } from 'next/server';

const PROVISIONER_URL = process.env.PROVISIONER_URL || 'http://localhost:4000';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const key = searchParams.get('key') || '';
		const fingerprint = searchParams.get('fingerprint') || '';

		const url = new URL(`${PROVISIONER_URL}/api/licenses/validate`);
		url.searchParams.set('key', key);
		url.searchParams.set('fingerprint', fingerprint);

		const res = await fetch(url.toString());

		const data = await res.json();
		return NextResponse.json(data, { status: res.status });
	} catch (err) {
		console.error('[licenses/validate] Proxy error:', err);
		return NextResponse.json({ error: 'License server unavailable' }, { status: 502 });
	}
}
