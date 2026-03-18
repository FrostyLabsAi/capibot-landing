'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Star, Check, X, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const comparisonGrid: Array<{ starter: boolean | string; pro: boolean | string; scale: boolean | string }> = [
	{ starter: true, pro: true, scale: true },           // Agent Orchestration
	{ starter: true, pro: true, scale: true },           // All Built-in Tools
	{ starter: true, pro: true, scale: true },           // Mission Control Dashboard
	{ starter: '2', pro: '4', scale: '4' },              // Messaging Channels
	{ starter: true, pro: true, scale: true },           // Memory & pgvector
	{ starter: true, pro: true, scale: true },           // Composio Integration
	{ starter: true, pro: true, scale: true },           // Skills Ecosystem
	{ starter: false, pro: true, scale: true },          // AI Companies
	{ starter: true, pro: true, scale: true },           // Cron Scheduling
	{ starter: false, pro: true, scale: true },          // Webhook Support
	{ starter: true, pro: true, scale: true },           // Multi-Provider LLM
	{ starter: false, pro: true, scale: true },          // Automatic Failover
	{ starter: false, pro: true, scale: true },          // Priority Support
	{ starter: false, pro: false, scale: true },         // Dedicated Infrastructure
	{ starter: false, pro: false, scale: true },         // Custom SLA
];

function FeatureCell({ value }: { value: boolean | string }) {
	if (value === true) return <Check className="w-5 h-5 text-[var(--sage)] mx-auto" />;
	if (value === false) return <X className="w-4 h-4 text-[var(--charcoal)]/20 mx-auto" />;
	return <span className="text-xs font-medium text-[var(--gold)]">{value}</span>;
}

interface PricingSectionProps {
	onJoinWaitlist: () => void;
}

export function PricingSection({ onJoinWaitlist }: PricingSectionProps) {
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

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 items-stretch mb-16">
					{[0, 1, 2].map((idx) => {
						const isMiddle = idx === 1;
						return (
							<div
								key={idx}
								className={`${isMiddle ? 'card-editorial relative ring-2 ring-[var(--terracotta)]' : 'card-glass'} p-8 flex flex-col`}
							>
								{isMiddle && (
									<div className="absolute -top-4 right-8 bg-[var(--terracotta)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
										Most Popular
									</div>
								)}
								<div className="mb-6">
									<h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
										{t(`tiers.${idx}.name`)}
									</h3>
									<p className="text-sm text-[var(--charcoal)]">{t(`tiers.${idx}.description`)}</p>
								</div>
								<div className="mb-6">
									<span className="text-4xl font-bold">{annual ? t(`tiers.${idx}.priceAnnual`) : t(`tiers.${idx}.price`)}</span>
									<span className="text-[var(--charcoal)]"> {t(`tiers.${idx}.priceDetail`)}</span>
								</div>
								<ul className="space-y-4 mb-10 flex-1">
									{[0, 1, 2, 3, 4, 5].map((fIdx) => (
										<li key={fIdx} className="flex items-center gap-3">
											<Check className={`w-5 h-5 ${isMiddle && fIdx === 0 ? 'text-[var(--gold)]' : 'text-[var(--terracotta)]'}`} />
											<span className={`text-sm ${isMiddle && fIdx === 0 ? 'font-semibold' : ''}`}>
												{t(`tiers.${idx}.features.${fIdx}`)}
											</span>
										</li>
									))}
								</ul>
								<button
									onClick={onJoinWaitlist}
									className={`${isMiddle ? 'btn-savannah btn-savannah-primary' : idx === 2 ? 'btn-savannah bg-black text-white hover:bg-[var(--espresso)]' : 'btn-savannah btn-savannah-secondary'} w-full cursor-pointer`}
								>
									{tNav('joinWaitlist')}
									{isMiddle && <ArrowRight className="w-4 h-4" />}
								</button>
							</div>
						);
					})}
				</div>

				{/* Comparison Table */}
				<div className="card-editorial p-6 lg:p-8 overflow-x-auto">
					<h3 className="text-xl font-semibold text-[var(--espresso)] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
						{t('comparisonTitle')}
					</h3>
					<table className="comparison-table">
						<thead>
							<tr>
								<th className="text-left">Feature</th>
								<th>{t('tiers.0.name')}</th>
								<th>{t('tiers.1.name')}</th>
								<th>{t('tiers.2.name')}</th>
							</tr>
						</thead>
						<tbody>
							{comparisonGrid.map((row, idx) => (
								<tr key={idx}>
									<td>{t(`comparisonFeatures.${idx}`)}</td>
									<td><FeatureCell value={row.starter} /></td>
									<td><FeatureCell value={row.pro} /></td>
									<td><FeatureCell value={row.scale} /></td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="mt-10 text-center space-y-3">
					<p className="text-[var(--charcoal)]/60 text-sm font-medium">
						{t('openSourceNote')}{' '}
						<span className="text-[var(--terracotta)] font-semibold">
							{t('starOnGithub')}
						</span>
					</p>
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
