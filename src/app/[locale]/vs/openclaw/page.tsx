import { setRequestLocale } from 'next-intl/server';
import { OpenClawComparison } from '@/components/openclaw-comparison';

export default async function OpenClawPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <OpenClawComparison />;
}
