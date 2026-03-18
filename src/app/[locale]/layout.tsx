import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { locales } from '@/i18n/config';
import { Nav } from '@/components/layout/nav';
import '@/styles/globals.css';

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: {
		default: 'CapiBot — AI Agent Orchestration Platform',
		template: '%s | CapiBot',
	},
	description: 'From a single AI assistant to a full autonomous company — 36 tools, 8 skills, 6 AI providers. Self-hosted. Open source. Private.',
	metadataBase: new URL('https://capibot.io'),
	openGraph: {
		type: 'website',
		siteName: 'CapiBot',
		title: 'CapiBot — AI Agent Orchestration Platform',
		description: 'From a single AI assistant to a full autonomous company — 36 tools, 8 skills, 6 AI providers.',
		images: [{ url: '/capybara-mascot.png', width: 1200, height: 630 }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'CapiBot — AI Agent Orchestration Platform',
		description: 'From a single AI assistant to a full autonomous company. Self-hosted. Open source.',
	},
	icons: {
		icon: '/capybara-icon.png',
		apple: '/capybara-icon.png',
	},
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
			</head>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-V950RCCZZG" strategy="afterInteractive" />
			<Script id="gtag-init" strategy="afterInteractive">{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-V950RCCZZG');
			`}</Script>
			<body>
				<NextIntlClientProvider messages={messages}>
					<div className="min-h-screen relative overflow-x-hidden">
						<div className="noise-overlay" />
						<Nav />
						{children}
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
