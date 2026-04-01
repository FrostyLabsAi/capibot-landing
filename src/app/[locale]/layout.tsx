import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { locales } from '@/i18n/config';
import { Nav } from '@/components/layout/nav';
import '@/styles/globals.css';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-dm-sans',
	display: 'swap',
});

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: {
		default: 'CapiBot — AI Agent Orchestration Platform',
		template: '%s | CapiBot',
	},
	description: 'From a single AI assistant to a full autonomous company — 43+ tools, 600+ skills, 280+ agents. Private. Secure. Yours.',
	metadataBase: new URL('https://capibot.io'),
	openGraph: {
		type: 'website',
		siteName: 'CapiBot',
		title: 'CapiBot — AI Agent Orchestration Platform',
		description: 'From a single AI assistant to a full autonomous company — 43+ tools, 600+ skills, 280+ agents across 18 categories.',
		images: [{ url: '/og-banner.png', width: 1200, height: 630, alt: 'CapiBot — AI Agent Orchestration Platform' }],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@CapiBotai',
		title: 'CapiBot — AI Agent Orchestration Platform',
		description: 'From a single AI assistant to a full autonomous company — 43+ tools, 600+ skills, 280+ agents. Private. Secure. Yours.',
		images: [{ url: '/og-banner.png', width: 1200, height: 630, alt: 'CapiBot — AI Agent Orchestration Platform' }],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
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
		<html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
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
