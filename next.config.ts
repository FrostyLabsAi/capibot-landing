import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import remarkGfm from 'remark-gfm';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
	},
});

const nextConfig: NextConfig = {
	output: 'standalone',
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 31536000,
	},
	async headers() {
		const securityHeaders = [
			{
				key: 'Strict-Transport-Security',
				value: 'max-age=63072000; includeSubDomains; preload',
			},
			{
				key: 'X-Content-Type-Options',
				value: 'nosniff',
			},
			{
				key: 'X-Frame-Options',
				value: 'SAMEORIGIN',
			},
			{
				key: 'Referrer-Policy',
				value: 'strict-origin-when-cross-origin',
			},
		];

		return [
			{
				// Static pages (landing, docs, legal) — cache at CDN for 1h, stale-while-revalidate for 1d
				source: '/:locale(en|es|pt|fr|ko|zh)/:path(docs|privacy|terms|vs)?/:rest*',
				headers: [
					...securityHeaders,
					{
						key: 'Cache-Control',
						value: 'public, s-maxage=3600, stale-while-revalidate=86400',
					},
				],
			},
			{
				// Landing page root (with locale prefix)
				source: '/:locale(en|es|pt|fr|ko|zh)',
				headers: [
					...securityHeaders,
					{
						key: 'Cache-Control',
						value: 'public, s-maxage=3600, stale-while-revalidate=86400',
					},
				],
			},
			{
				// Static assets (JS, CSS, images)
				source: '/_next/static/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				// Everything else (API routes, welcome/provisioning) — security headers only
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
};

export default withNextIntl(withMDX(nextConfig));
