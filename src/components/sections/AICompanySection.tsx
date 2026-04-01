'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Building2, Users, ClipboardCheck, Brain, Shield, Target, ArrowRight, ChevronRight, Bot, MessageSquare } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageLightbox } from '@/components/shared/ImageLightbox';
import { scrollToWaitlist } from '@/components/shared/scroll-to';

const phaseKeys = ['briefing', 'planning', 'approved', 'operating'] as const;
const phaseColors = ['var(--sand-dark)', 'var(--gold)', 'var(--terracotta)', 'var(--sage)'];

const useCaseIcons = [
	<MessageSquare key="0" className="w-5 h-5" />,
	<Bot key="1" className="w-5 h-5" />,
	<Building2 key="2" className="w-5 h-5" />,
];

const featureIcons = [
	<Brain key="0" className="w-4 h-4" />,
	<ClipboardCheck key="1" className="w-4 h-4" />,
	<Users key="2" className="w-4 h-4" />,
	<Target key="3" className="w-4 h-4" />,
	<Shield key="4" className="w-4 h-4" />,
	<Building2 key="5" className="w-4 h-4" />,
];

export function AICompanySection() {
	const t = useTranslations('aiCompany');

	return (
		<section id="features" className="py-24 lg:py-32 bg-[var(--sand-light)]/50">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Bot className="w-3.5 h-3.5 text-[var(--terracotta)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				{/* Use Case Spectrum */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
					{[0, 1, 2].map((idx) => (
						<div
							key={idx}
							className={`card-editorial p-8 relative ${idx === 2 ? 'ring-2 ring-[var(--terracotta)]' : ''}`}
						>
							{idx === 2 && (
								<div className="absolute -top-3 right-6 bg-[var(--terracotta)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
									{t('flagship')}
								</div>
							)}
							<div className="flex items-center gap-3 mb-4">
								<div className="w-12 h-12 rounded-2xl bg-[var(--terracotta)]/10 flex items-center justify-center text-[var(--terracotta)]">
									{useCaseIcons[idx]}
								</div>
								<span className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)]/40">{t(`useCases.${idx}.level`)}</span>
							</div>
							<h3 className="text-xl font-semibold text-[var(--espresso)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								{t(`useCases.${idx}.title`)}
							</h3>
							<p className="text-sm text-[var(--charcoal)] leading-relaxed">
								{t(`useCases.${idx}.description`)}
							</p>
						</div>
					))}
				</div>

				{/* AI Company Deep Dive */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
					<div>
						<div className="flex items-center gap-3 mb-6">
							<Building2 className="w-5 h-5 text-[var(--terracotta)]" />
							<h3 className="text-2xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								{t('lifecycleTitle')}
							</h3>
						</div>

						{/* Phase Lifecycle */}
						<div className="flex flex-wrap items-center gap-2 mb-8">
							{phaseKeys.map((key, idx) => (
								<div key={key} className="flex items-center gap-2">
									<span
										className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
										style={{ backgroundColor: phaseColors[idx] }}
									>
										{t(`phases.${key}`)}
									</span>
									{idx < phaseKeys.length - 1 && (
										<ChevronRight className="w-4 h-4 text-[var(--charcoal)]/30" />
									)}
								</div>
							))}
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{[0, 1, 2, 3, 4, 5].map((idx) => (
								<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[var(--sand-dark)]/15">
									<div className="w-9 h-9 rounded-lg bg-[var(--terracotta)]/10 flex items-center justify-center text-[var(--terracotta)] flex-shrink-0">
										{featureIcons[idx]}
									</div>
									<div>
										<h4 className="text-sm font-semibold text-[var(--espresso)]">{t(`features.${idx}.title`)}</h4>
										<p className="text-sm text-[var(--charcoal)]/60">{t(`features.${idx}.description`)}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Screenshot */}
					<ImageLightbox src="/img/company.png" alt={t('companyImgAlt')} className="rounded-2xl overflow-hidden border border-[var(--sand-dark)]/20 shadow-lg">
						<Image
							src="/img/company.png"
							alt={t('companyImgAlt')}
							width={1200}
							height={800}
							className="w-full h-auto"
						/>
					</ImageLightbox>
				</div>

				<div className="text-center">
					<button
						onClick={scrollToWaitlist}
						className="btn-savannah btn-savannah-primary cursor-pointer"
					>
						{t('cta')}
						<ArrowRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</section>
	);
}
