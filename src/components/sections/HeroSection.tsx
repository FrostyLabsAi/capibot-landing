'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight, Check, Sparkles, Zap, Bot, Layers, MessageSquare } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { scrollToSection } from '@/components/shared/scroll-to';

const heroBadgeIcons = [
	<Zap key="skills" className="w-4 h-4" />,
	<Bot key="tools" className="w-4 h-4" />,
	<Layers key="providers" className="w-4 h-4" />,
	<MessageSquare key="channels" className="w-4 h-4" />,
];

const heroBadgeTargets = [604, 43, 7, 4];
const heroBadgeKeys = ['skills', 'tools', 'providers', 'channels'] as const;
const trustPillKeys = ['quickSetup', 'privateData', 'noVendorLock'] as const;
const floatingBadgeKeys = ['agents', 'telegram', 'missionControl', 'aiCompanies'] as const;

export function HeroSection() {
	const t = useTranslations('hero');

	return (
		<section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
			{/* Gradient Mesh Background */}
			<div className="gradient-mesh">
				<div className="gradient-blob blob-1" />
				<div className="gradient-blob blob-2" />
				<div className="gradient-blob blob-3" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Column */}
					<div className="order-2 lg:order-1">
						<div className="tag mb-6 hero-animate" style={{ '--index': 0 } as React.CSSProperties}>
							<Sparkles className="w-3.5 h-3.5 text-[var(--terracotta)]" />
							<span>{t('tag')}</span>
						</div>

						<h1 className="display-heading text-[var(--espresso)] mb-6 hero-animate" style={{ '--index': 1 } as React.CSSProperties}>
							{t('heading')}<span className="italic text-[var(--terracotta)]">{t('headingAccent')}</span>
						</h1>

						<p className="text-lg text-[var(--charcoal)] mb-8 leading-relaxed max-w-lg hero-animate" style={{ '--index': 2 } as React.CSSProperties}>
							{t('description')}
						</p>

						{/* Stat Badges */}
						<div className="flex flex-wrap gap-3 mb-8 hero-animate" style={{ '--index': 3 } as React.CSSProperties}>
							{heroBadgeKeys.map((key, idx) => (
								<div key={key} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-[var(--sand-dark)]/30">
									<span className="text-[var(--terracotta)]">{heroBadgeIcons[idx]}</span>
									<span className="text-sm font-bold text-[var(--espresso)]">
										<AnimatedCounter target={heroBadgeTargets[idx]} suffix="" duration={1200} />
									</span>
									<span className="text-xs text-[var(--charcoal)]">{t(`badges.${key}`)}</span>
								</div>
							))}
						</div>

						{/* CTAs */}
						<div className="flex flex-wrap gap-4 mb-8 hero-animate" style={{ '--index': 4 } as React.CSSProperties}>
							<button
								onClick={() => scrollToSection('waitlist')}
								className="btn-savannah btn-savannah-primary cursor-pointer"
							>
								{t('ctaPrimary')}
								<ArrowRight className="w-4 h-4" />
							</button>
							<button
								onClick={() => scrollToSection('features')}
								className="btn-savannah btn-savannah-secondary cursor-pointer"
							>
								{t('ctaSecondary')}
							</button>
						</div>

						{/* Trust Pills */}
						<div className="flex flex-wrap gap-3 hero-animate" style={{ '--index': 5 } as React.CSSProperties}>
							{trustPillKeys.map((key) => (
								<span key={key} className="tag">
									<Check className="w-3.5 h-3.5 text-[var(--sage)]" />
									{t(`trustPills.${key}`)}
								</span>
							))}
						</div>
					</div>

					{/* Right Column */}
					<div className="order-1 lg:order-2 relative">
						<div className="relative">
							<div className="relative z-10 glass-morphism-hero p-8 lg:p-12">
								<Image
									src="/capybara-mascot.png"
									alt="CapiBot AI Agent Platform"
									width={1200}
									height={800}
									priority
									className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
								/>
							</div>

							{/* Floating Tech Badges */}
							<div className="absolute -top-4 -right-4 z-20 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-semibold text-[var(--espresso)] animate-bounce" style={{ animationDuration: '3s' }}>
								{t('floatingBadges.agents')}
							</div>
							<div className="absolute top-1/4 -left-6 z-20 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-semibold text-[var(--espresso)] animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
								{t('floatingBadges.telegram')}
							</div>
							<div className="absolute bottom-1/4 -right-6 z-20 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-semibold text-[var(--espresso)] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
								{t('floatingBadges.missionControl')}
							</div>
							<div className="absolute -bottom-4 left-1/4 z-20 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-semibold text-[var(--espresso)] animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '1.5s' }}>
								{t('floatingBadges.aiCompanies')}
							</div>

							{/* Decorative Blurs */}
							<div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--terracotta)]/15 rounded-full blur-3xl animate-pulse" />
							<div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[var(--sage)]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
