import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || 'cc2b9e12-4514-4528-b974-f46cae3b6bbe';

export async function GET() {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data } = await resend.contacts.list({ audienceId: AUDIENCE_ID });
		return NextResponse.json({ count: data?.data?.length ?? 0 });
	} catch {
		return NextResponse.json({ count: 0 });
	}
}
