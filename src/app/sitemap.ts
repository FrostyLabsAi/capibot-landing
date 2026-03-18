import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://capibot.io';

const pages = [
	'',
	'/vs/openclaw',
	'/docs/getting-started',
	'/docs/configuration',
];

export default function sitemap(): MetadataRoute.Sitemap {
	const entries: MetadataRoute.Sitemap = [];

	for (const page of pages) {
		for (const locale of locales) {
			entries.push({
				url: `${baseUrl}/${locale}${page}`,
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority: page === '' ? 1 : 0.8,
				alternates: {
					languages: Object.fromEntries(
						locales.map((l) => [l, `${baseUrl}/${l}${page}`])
					),
				},
			});
		}
	}

	return entries;
}
