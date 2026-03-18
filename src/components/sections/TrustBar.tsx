'use client';

import { useTranslations } from 'next-intl';
import {
	AnthropicLogo,
	GoogleLogo,
	PostgreSQLLogo,
	PuppeteerLogo,
	LangChainLogo,
	OllamaLogo,
	ComposioLogo,
} from '@/components/shared/BrandLogos';

const techLogos = [
	{ key: 'anthropic', logo: <AnthropicLogo size={24} /> },
	{ key: 'google', logo: <GoogleLogo size={24} /> },
	{ key: 'postgresql', logo: <PostgreSQLLogo size={28} /> },
	{ key: 'puppeteer', logo: <PuppeteerLogo size={24} /> },
	{ key: 'langchain', logo: <LangChainLogo size={24} /> },
	{ key: 'ollama', logo: <OllamaLogo size={24} /> },
	{ key: 'composio', logo: <ComposioLogo size={24} /> },
] as const;

export function TrustBar() {
	const t = useTranslations('trustBar');

	return (
		<section className="py-12 lg:py-16 border-y border-[var(--sand-dark)]/20">
			<p className="text-xs uppercase tracking-[0.2em] text-[var(--charcoal)]/40 text-center mb-8 font-medium">
				{t('builtWith')}
			</p>
			<div className="trust-marquee-container overflow-hidden">
				<div className="trust-marquee-track flex items-center w-max">
					{[...techLogos, ...techLogos].map((tech, idx) => (
						<div
							key={`${tech.key}-${idx}`}
							className="flex items-center gap-3 text-[var(--charcoal)]/50 hover:text-[var(--charcoal)]/80 transition-colors cursor-default mx-10"
						>
							{tech.logo}
							<span
								className="text-base font-bold whitespace-nowrap"
								style={{ fontFamily: 'DM Sans, sans-serif' }}
							>
								{t(`tech.${tech.key}`)}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
