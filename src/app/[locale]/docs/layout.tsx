import { setRequestLocale } from 'next-intl/server';
import { DocsLayout } from '@/components/docs-layout';

export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <DocsLayout>{children}</DocsLayout>;
}
