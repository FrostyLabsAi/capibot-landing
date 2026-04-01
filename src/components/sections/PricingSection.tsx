'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Star, Check, ArrowRight, Coins, Server } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { scrollToWaitlist } from '@/components/shared/scroll-to';

// LemonSqueezy checkout URLs per tier (monthly / annual)
const CHECKOUT_URLS: Record<string, { monthly: string; annual: string }> = {
	starter: {
		monthly: process.env.NEXT_PUBLIC_LS_STARTER_MONTHLY || '',
		annual: process.env.NEXT_PUBLIC_LS_STARTER_ANNUAL || '',
	},
	pro: {
		monthly: process.env.NEXT_PUBLIC_LS_PRO_MONTHLY || '',
		annual: process.env.NEXT_PUBLIC_LS_PRO_ANNUAL || '',
	},
	scale: {
		monthly: process.env.NEXT_PUBLIC_LS_SCALE_MONTHLY || '',
		annual: process.env.NEXT_PUBLIC_LS_SCALE_ANNUAL || '',
	},
	enterprise: {
		monthly: process.env.NEXT_PUBLIC_LS_ENTERPRISE_MONTHLY || '',
		annual: process.env.NEXT_PUBLIC_LS_ENTERPRISE_ANNUAL || '',
	},
};

const TIER_KEYS = ['starter', 'pro', 'scale', 'enterprise'] as const;

export function PricingSection() {
	const [annual, setAnnual] = useState(false);
	const t = useTranslations('pricing');
	const tNav = useTranslations('nav');

	return (
		<section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Star className="w-3.5 h-3.5 text-[var(--gold)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				{/* Pre-launch banner */}
				<div className="mb-10 p-4 rounded-2xl bg-[var(--terracotta)]/5 border border-[var(--terracotta)]/20 text-center">
					<p className="text-sm text-[var(--espresso)]">
						<span className="font-semibold">{t('preLaunch')}</span>{' '}
						{t('preLaunchDesc')}
					</p>
				</div>

				{/* Annual Toggle */}
				<div className="flex items-center justify-center gap-3 mb-12">
					<span className={`text-sm font-medium ${!annual ? 'text-[var(--espresso)]' : 'text-[var(--charcoal)]/50'}`}>{t('monthly')}</span>
					<button
						onClick={() => setAnnual(!annual)}
						className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${annual ? 'bg-[var(--terracotta)]' : 'bg-[var(--sand-dark)]'}`}
					>
						<div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-6' : 'translate-x-0.5'}`} />
					</button>
					<span className={`text-sm font-medium ${annual ? 'text-[var(--espresso)]' : 'text-[var(--charcoal)]/50'}`}>
						{t('annual')}
						<span className="ml-1.5 text-xs font-bold text-[var(--sage)] bg-[var(--sage)]/10 px-2 py-0.5 rounded-full">{t('save')}</span>
					</span>
				</div>

				{/* Pricing Cards — 4 tiers */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
					{[0, 1, 2, 3].map((idx) => {
						const isPopular = idx === 1;
						const tierKey = TIER_KEYS[idx];
						const checkoutUrl = annual ? CHECKOUT_URLS[tierKey].annual : CHECKOUT_URLS[tierKey].monthly;
						const hasCheckout = !!checkoutUrl;

						return (
							<div
								key={idx}
								className={`${isPopular ? 'card-editorial relative ring-2 ring-[var(--terracotta)]' : 'card-glass'} p-6 flex flex-col`}
							>
								{isPopular && (
									<div className="absolute -top-4 right-6 bg-[var(--terracotta)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
										Most Popular
									</div>
								)}

								<div className="mb-4">
									<h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
										{t(`tiers.${idx}.name`)}
									</h3>
									<p className="text-xs text-[var(--charcoal)]">{t(`tiers.${idx}.description`)}</p>
								</div>

								<div className="mb-2">
									<span className="text-3xl font-bold">{annual ? t(`tiers.${idx}.priceAnnual`) : t(`tiers.${idx}.price`)}</span>
									<span className="text-[var(--charcoal)] text-sm"> {t(`tiers.${idx}.priceDetail`)}</span>
								</div>

								{/* Credits highlight */}
								<div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-[var(--gold)]/5 border border-[var(--gold)]/15">
									<Coins className="w-4 h-4 text-[var(--gold)] shrink-0" />
									<span className="text-sm font-semibold text-[var(--espresso)]">
										{t(`tiers.${idx}.credits`)}
									</span>
									<span className="text-xs text-[var(--charcoal)]">
										{t('creditsLabel')}
									</span>
								</div>

								<ul className="space-y-3 mb-8 flex-1">
									{[0, 1, 2, 3, 4, 5].map((fIdx) => (
										<li key={fIdx} className="flex items-start gap-2.5">
											<Check className={`w-4 h-4 mt-0.5 shrink-0 ${fIdx === 0 ? 'text-[var(--gold)]' : 'text-[var(--terracotta)]'}`} />
											<span className={`text-sm ${fIdx === 0 ? 'font-semibold' : ''}`}>
												{t(`tiers.${idx}.features.${fIdx}`)}
											</span>
										</li>
									))}
								</ul>

								{hasCheckout ? (
									<a
										href={checkoutUrl}
										className={`${isPopular ? 'btn-savannah btn-savannah-primary' : idx === 3 ? 'btn-savannah bg-black text-white hover:bg-[var(--espresso)]' : 'btn-savannah btn-savannah-secondary'} w-full cursor-pointer inline-flex items-center justify-center gap-2`}
									>
										{t('getStarted')}
										{isPopular && <ArrowRight className="w-4 h-4" />}
									</a>
								) : (
									<button
										onClick={scrollToWaitlist}
										className={`${isPopular ? 'btn-savannah btn-savannah-primary' : idx === 3 ? 'btn-savannah bg-black text-white hover:bg-[var(--espresso)]' : 'btn-savannah btn-savannah-secondary'} w-full cursor-pointer`}
									>
										{tNav('joinWaitlist')}
										{isPopular && <ArrowRight className="w-4 h-4" />}
									</button>
								)}
							</div>
						);
					})}
				</div>

				{/* Credit explainer */}
				<div className="text-center mb-16">
					<p className="text-sm text-[var(--charcoal)]/60">
						{t('creditExplainer')}
					</p>
				</div>

				{/* What's Included — all checkmarks (no more X's) */}
				<div className="card-editorial p-6 lg:p-8">
					<h3 className="text-xl font-semibold text-[var(--espresso)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
						{t('comparisonTitle')}
					</h3>
					<p className="text-sm text-[var(--charcoal)] mb-6">
						{t('allPlansNote')} {t('allPlansDesc')}
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{Array.from({ length: 14 }).map((_, idx) => (
							<div key={idx} className="flex items-center gap-2.5 py-1.5">
								<Check className="w-4 h-4 text-[var(--sage)] shrink-0" />
								<span className="text-sm text-[var(--espresso)]">
									{t(`comparisonFeatures.${idx}`)}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Self-Hosted Section */}
				<div className="mt-16 card-editorial p-6 lg:p-8">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-3">
								<Server className="w-5 h-5 text-[var(--terracotta)]" />
								<span className="text-sm font-medium text-[var(--terracotta)]">{t('selfHostedTag')}</span>
							</div>
							<div className="flex items-baseline gap-3 mb-2">
								<h3 className="text-2xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
									{t('selfHostedName')}
								</h3>
								<span className="text-3xl font-bold text-[var(--espresso)]">{t('selfHostedPrice')}</span>
								<span className="text-sm text-[var(--charcoal)]/60">{t('selfHostedPriceDetail')}</span>
							</div>
							<p className="text-sm text-[var(--charcoal)] mb-4 max-w-lg">
								{t('selfHostedDescription')}
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{Array.from({ length: 6 }).map((_, idx) => (
									<div key={idx} className="flex items-center gap-2.5">
										<Check className="w-4 h-4 text-[var(--sage)] shrink-0" />
										<span className="text-sm text-[var(--espresso)]">
											{t(`selfHostedFeatures.${idx}`)}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className="shrink-0">
							<a
								href={process.env.NEXT_PUBLIC_LS_SELFHOSTED || '/en/docs/self-hosted'}
								className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold bg-[var(--terracotta)] text-white hover:opacity-90 transition-opacity"
							>
								{t('selfHostedCta')} <ArrowRight className="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-10 text-center space-y-3">
					<p className="text-[var(--charcoal)]/40 text-sm">
						{t('enterpriseNote')}{' '}
						<a href="mailto:hello@capibot.io" className="text-[var(--terracotta)] underline">
							{t('enterpriseCta')}
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
