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
		return [
			{
				source: '/(.*)',
				headers: [
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
				],
			},
		];
	},
};

export default withNextIntl(withMDX(nextConfig));
