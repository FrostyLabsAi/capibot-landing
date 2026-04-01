import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';
import { NextRequest } from 'next/server';

const routing = defineRouting({
	locales: ['en', 'es', 'pt', 'fr', 'ko', 'zh'],
	defaultLocale: 'en',
	localePrefix: 'as-needed',
	localeDetection: true,
});

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
	const response = intlMiddleware(request);

	// Remove NEXT_LOCALE Set-Cookie for the default locale so Cloudflare can cache the response.
	// Cloudflare bypasses cache whenever Set-Cookie is present.
	const setCookie = response.headers.get('set-cookie');
	if (setCookie && setCookie.includes('NEXT_LOCALE=en')) {
		response.headers.delete('set-cookie');
	}

	return response;
}

export const config = {
	matcher: [
		'/((?!api|_next|.*\\..*).*)',
	],
};
