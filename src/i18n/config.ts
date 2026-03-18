export const locales = ['en', 'es', 'pt', 'fr', 'ko', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	ko: '한국어',
	zh: '中文',
};
