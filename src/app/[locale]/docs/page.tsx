import { setRequestLocale } from 'next-intl/server';

export default async function DocsIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	// Try locale-specific first, fall back to English
	let Content: React.ComponentType;
	try {
		const mod = await import(`@/content/docs/${locale}/index.mdx`);
		Content = mod.default;
	} catch {
		const mod = await import('@/content/docs/en/index.mdx');
		Content = mod.default;
	}

	return <Content />;
}
