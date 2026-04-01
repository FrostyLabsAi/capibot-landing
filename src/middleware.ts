import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
	locales: ['en', 'es', 'pt', 'fr', 'ko', 'zh'],
	defaultLocale: 'en',
	localePrefix: 'as-needed',
	localeDetection: true,
});

export default createMiddleware(routing);

export const config = {
	matcher: [
		'/((?!api|_next|.*\\..*).*)',
	],
};
