import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data } = await resend.contacts.list();
		return NextResponse.json({ count: data?.data?.length ?? 0 });
	} catch {
		return NextResponse.json({ count: 0 });
	}
}
