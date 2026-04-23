'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
	ArrowRight,
	Check,
	X,
	Shield,
	DollarSign,
	Users,
	LayoutDashboard,
	Settings,
	Eye,
	Bot,
	Building2,
	Brain,
	Lock,
	Menu,
	ChevronRight,
} from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { locales, localeNames, type Locale } from '@/i18n/config';

const comparisonData: { capibot: boolean | string; openclaw: boolean | string }[] = [
	// 0. Open source
	{ capibot: true, openclaw: true },
	// 1. Self-hosted
	{ capibot: true, openclaw: true },
	// 2. Intended user
	{ capibot: 'Founders, solopreneurs, small teams', openclaw: 'Technical personal use' },
	// 3. Primary interface
	{ capibot: 'Web app', openclaw: 'CLI + Gateway daemon' },
	// 4. Installation
	{ capibot: 'Sign up in a browser', openclaw: 'npm install -g + daemon setup' },
	// 5. Runtime required
	{ capibot: 'None (runs in browser)', openclaw: 'Node 22.16+ or 24' },
	// 6. Initial setup time
	{ capibot: 'Minutes', openclaw: 'Hours (per official docs)' },
	// 7. Configuration
	{ capibot: 'Web UI', openclaw: 'Config files + openclaw doctor' },
	// 8. Agent model
	{ capibot: 'Team of 281 across 18 categories', openclaw: 'Single personal assistant' },
	// 9. Agent hierarchy
	{ capibot: 'CEO / Specialist / Intern', openclaw: 'Flat (single agent)' },
	// 10. Pre-built company templates
	{ capibot: '16 one-click templates', openclaw: false },
	// 11. AI Companies
	{ capibot: 'Full lifecycle', openclaw: false },
	// 12. Task approval workflow
	{ capibot: 'Plans, hires, budgets', openclaw: 'Per-action DM confirmation' },
	// 13. Managed mode
	{ capibot: 'Every task reviewed', openclaw: false },
	// 14. Mission Control dashboard
	{ capibot: '28-panel web dashboard', openclaw: 'Gateway Web UI' },
	// 15. Kanban task board
	{ capibot: true, openclaw: false },
	// 16. Quality review agent
	{ capibot: 'Sentinel auditor', openclaw: false },
	// 17. Task states
	{ capibot: '6 statuses', openclaw: false },
	// 18. Messaging channels
	{ capibot: 'Telegram, WhatsApp, Slack, Web', openclaw: '20+ (OpenClaw wins here)' },
	// 19. Voice
	{ capibot: 'Groq transcription', openclaw: 'Voice Wake + Talk Mode' },
	// 20. LLM providers
	{ capibot: '6 with automatic failover', openclaw: 'Multiple with model failover' },
	// 21. Memory system
	{ capibot: 'PostgreSQL + pgvector', openclaw: 'Markdown files' },
	// 22. Semantic memory search
	{ capibot: 'Hybrid vector + text', openclaw: false },
	// 23. Agent personalities
	{ capibot: 'SOUL.md per agent', openclaw: 'N/A (single agent)' },
	// 24. Skills ecosystem
	{ capibot: '605 curated, built-in', openclaw: 'Bundled + community store' },
	// 25. Cron scheduling
	{ capibot: true, openclaw: true },
	// 26. Webhook support
	{ capibot: 'Incoming & outgoing, HMAC verified', openclaw: true },
	// 27. Audit trail
	{ capibot: '90-day retention', openclaw: 'Logging' },
	// 28. API key management
	{ capibot: 'Encrypted vault', openclaw: 'Config files' },
	// 29. Shell sandboxing
	{ capibot: '80+ patterns (runtime filter)', openclaw: 'Docker sandbox (container isolation)' },
];

const advantageIcons = [Shield, DollarSign, Eye, Users, LayoutDashboard, Settings];
const tldrIcons = [Lock, Brain, Building2];

function CellValue({ value }: { value: boolean | string }) {
	if (value === true) {
		return (
			<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
				<Check className="w-4 h-4" />
			</span>
		);
	}
	if (value === false) {
		return (
			<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
				<X className="w-4 h-4" />
			</span>
		);
	}
	return <span className="text-sm text-[var(--charcoal)]">{value}</span>;
}

export function OpenClawComparison() {
	const t = useTranslations('openClaw');
	const tNav = useTranslations('nav');
	const locale = useLocale();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToComparison = () => {
		const el = document.getElementById('comparison-table');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToWaitlist = () => {
		const el = document.getElementById('cta');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="min-h-screen bg-[var(--warm-white)]">
			{/* Nav */}
			<nav className="nav-glass fixed top-0 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 lg:h-20">
						<Link href={`/${locale}`} className="flex items-center gap-3">
							<Image src="/capybara-icon.webp" alt="CapiBot" width={40} height={40} className="w-10 h-10 rounded-full" />
							<span className="font-semibold text-xl text-[var(--espresso)]" style={{ fontFamily: 'var(--font-heading)' }}>CapiBot</span>
						</Link>

						<div className="hidden md:flex items-center gap-6">
							<Link
								href={`/${locale}`}
								className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors flex items-center gap-1"
							>
								<ChevronRight className="w-3.5 h-3.5 rotate-180" />
								{t('backToHome')}
							</Link>

							<select
								value={locale}
								onChange={(e) => {
									const newLocale = e.target.value;
									window.location.pathname = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
								}}
								className="text-xs bg-transparent border border-[var(--sand-dark)]/30 rounded-full px-3 py-1.5 text-[var(--charcoal)] cursor-pointer"
							>
								{locales.map((l) => (
									<option key={l} value={l}>{localeNames[l as Locale]}</option>
								))}
							</select>

							<button
								onClick={scrollToWaitlist}
								className="btn-savannah btn-savannah-primary text-sm cursor-pointer"
							>
								{tNav('joinWaitlist')}
								<ArrowRight className="w-3.5 h-3.5" />
							</button>
						</div>

						<button
							className="md:hidden p-2 rounded-lg hover:bg-[var(--sand)] transition-colors cursor-pointer"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="w-6 h-6 text-[var(--espresso)]" /> : <Menu className="w-6 h-6 text-[var(--espresso)]" />}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden bg-[var(--warm-white)] border-t border-[var(--sand)] p-6">
						<div className="flex flex-col gap-4">
							<Link
								href={`/${locale}`}
								className="text-lg font-medium text-[var(--espresso)] flex items-center gap-2"
							>
								<ChevronRight className="w-4 h-4 rotate-180" />
								{t('backToHome')}
							</Link>
							<select
								value={locale}
								onChange={(e) => {
									const newLocale = e.target.value;
									window.location.pathname = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
								}}
								className="text-sm bg-transparent border border-[var(--sand-dark)]/30 rounded-lg px-3 py-2 text-[var(--charcoal)] cursor-pointer"
							>
								{locales.map((l) => (
									<option key={l} value={l}>{localeNames[l as Locale]}</option>
								))}
							</select>
							<button
								onClick={() => {
									setMobileMenuOpen(false);
									scrollToWaitlist();
								}}
								className="btn-savannah btn-savannah-primary text-sm w-full cursor-pointer mt-2"
							>
								{tNav('joinWaitlist')} <ArrowRight className="w-3.5 h-3.5" />
							</button>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
				<div className="gradient-mesh">
					<div className="gradient-blob blob-1" />
					<div className="gradient-blob blob-2" />
					<div className="gradient-blob blob-3" />
				</div>

				<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<div className="tag mb-6 inline-flex">
						<Bot className="w-3.5 h-3.5 text-[var(--terracotta)]" />
						<span>{t('tag')}</span>
					</div>

					<h1 className="display-heading text-[var(--espresso)] mb-6">
						{t('heading')}
					</h1>

					<p className="text-lg text-[var(--charcoal)] mb-8 leading-relaxed max-w-2xl mx-auto">
						{t('description')}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={scrollToWaitlist}
							className="btn-savannah btn-savannah-primary cursor-pointer"
						>
							{t('ctaPrimary')}
							<ArrowRight className="w-4 h-4" />
						</button>
						<button
							onClick={scrollToComparison}
							className="btn-savannah btn-savannah-outline cursor-pointer"
						>
							{t('ctaSecondary')}
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</section>

			{/* TLDR Section */}
			<section className="bg-[var(--espresso)] py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
						{t('shortVersionTitle')}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{tldrIcons.map((Icon, i) => (
							<div key={i} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--terracotta)]/20 text-[var(--terracotta)] mb-5">
									<Icon className="w-6 h-6" />
								</div>
								<h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
									{t(`shortVersion.${i}.title`)}
								</h3>
								<p className="text-sm text-[var(--sand-dark)] leading-relaxed">
									{t(`shortVersion.${i}.desc`)}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Teams Choose CapiBot */}
			<section className="py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-[var(--espresso)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
							{t('whyTitle')}
						</h2>
						<p className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto">
							{t('whySubtitle')}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{advantageIcons.map((Icon, i) => (
							<div
								key={i}
								className="card-savannah p-8 rounded-2xl hover:shadow-lg transition-shadow"
							>
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--terracotta)]/10 text-[var(--terracotta)] mb-5">
									<Icon className="w-6 h-6" />
								</div>
								<h3 className="text-lg font-semibold text-[var(--espresso)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
									{t(`advantages.${i}.title`)}
								</h3>
								<p className="text-sm text-[var(--charcoal)] leading-relaxed">
									{t(`advantages.${i}.description`)}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Feature Comparison Table */}
			<section id="comparison-table" className="py-20 lg:py-28 bg-[var(--sand)]/30">
				<div className="max-w-5xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-bold text-[var(--espresso)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
							{t('comparisonTitle')}
						</h2>
						<p className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto">
							{t('comparisonSubtitle')}
						</p>
					</div>

					<div className="overflow-x-auto rounded-2xl border border-[var(--sand-dark)]/20 bg-white shadow-sm">
						<table className="w-full">
							<thead>
								<tr className="border-b border-[var(--sand-dark)]/20">
									<th className="text-left text-sm font-semibold text-[var(--espresso)] px-6 py-4 w-2/5">
										Feature
									</th>
									<th className="text-center text-sm font-semibold text-[var(--terracotta)] px-6 py-4 w-[30%]">
										CapiBot
									</th>
									<th className="text-center text-sm font-semibold text-[var(--charcoal)] px-6 py-4 w-[30%]">
										OpenClaw
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisonData.map((row, i) => (
									<tr
										key={i}
										className={`border-b border-[var(--sand-dark)]/10 ${i % 2 === 0 ? 'bg-[var(--sand)]/20' : ''}`}
									>
										<td className="text-sm text-[var(--espresso)] font-medium px-6 py-3.5">
											{t(`comparisonRows.${i}.feature`)}
										</td>
										<td className="text-center px-6 py-3.5">
											<CellValue value={row.capibot} />
										</td>
										<td className="text-center px-6 py-3.5">
											<CellValue value={row.openclaw} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* CapiBot Is For You If... */}
			<section className="py-20 lg:py-28">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl lg:text-4xl font-bold text-[var(--espresso)] mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
						{t('forYouTitle')}
					</h2>

					<div className="space-y-4">
						{Array.from({ length: 7 }, (_, i) => (
							<div
								key={i}
								className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[var(--sand-dark)]/15 shadow-sm"
							>
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mt-0.5 shrink-0">
									<Check className="w-4 h-4" />
								</span>
								<span className="text-[var(--charcoal)] leading-relaxed">
									{t(`forYouItems.${i}`)}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="cta" className="py-20 lg:py-28 bg-[var(--espresso)]">
				<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
						{t('ctaTitle')}
					</h2>
					<p className="text-lg text-[var(--sand-dark)] mb-8 leading-relaxed">
						{t('ctaDesc')}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href={`/${locale}`}
							className="btn-savannah btn-savannah-primary cursor-pointer"
						>
							{t('ctaPrimary')}
							<ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href={`/${locale}`}
							className="btn-savannah border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
						>
							{t('backToHome')}
							<ChevronRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
