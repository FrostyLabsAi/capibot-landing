'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
	Bot, Code, Search, FileText, Zap, ChevronRight, Layers,
	Heart, MessageCircle, GitBranch, Shield, Crown, Users, Briefcase,
	Palette, Megaphone, Gamepad2, TestTube, Headphones, Package, Cpu,
} from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageLightbox } from '@/components/shared/ImageLightbox';

const agentIcons = [
	<Crown key="0" className="w-5 h-5" />,
	<Code key="1" className="w-5 h-5" />,
	<Palette key="2" className="w-5 h-5" />,
	<FileText key="3" className="w-5 h-5" />,
	<Search key="4" className="w-5 h-5" />,
];

const agentColors = ['var(--terracotta)', '#1E90FF', 'var(--sage)', 'var(--charcoal)', 'var(--gold)'];

const tierColorClasses: Record<string, string> = {
	Lead: 'bg-[var(--terracotta)] text-white',
	Specialist: 'bg-[var(--sage)] text-white',
	Intern: 'bg-[var(--gold)] text-white',
};

const rosterCategoryIcons = [
	<Crown key="0" className="w-3.5 h-3.5" />,
	<Code key="1" className="w-3.5 h-3.5" />,
	<Palette key="2" className="w-3.5 h-3.5" />,
	<Megaphone key="3" className="w-3.5 h-3.5" />,
	<Briefcase key="4" className="w-3.5 h-3.5" />,
	<Headphones key="5" className="w-3.5 h-3.5" />,
	<Package key="6" className="w-3.5 h-3.5" />,
	<Gamepad2 key="7" className="w-3.5 h-3.5" />,
	<Cpu key="8" className="w-3.5 h-3.5" />,
	<TestTube key="9" className="w-3.5 h-3.5" />,
	<Users key="10" className="w-3.5 h-3.5" />,
	<Bot key="11" className="w-3.5 h-3.5" />,
];

const rosterCategoryCounts = [3, 20, 8, 28, 8, 6, 4, 17, 6, 8, 7, 26];

const systemFeatureIcons = [
	<Heart key="0" className="w-4 h-4" />,
	<GitBranch key="1" className="w-4 h-4" />,
	<MessageCircle key="2" className="w-4 h-4" />,
];



export function MultiAgentSection() {
	const [selectedIdx, setSelectedIdx] = useState(0);
	const t = useTranslations('multiAgent');

	const agentTier = t(`agents.${selectedIdx}.tier`);

	return (
		<section id="agents" className="py-24 lg:py-32 relative">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Layers className="w-3.5 h-3.5 text-[var(--sage)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
				/>

				{/* Tier Hierarchy Visual */}
				<div className="flex flex-wrap items-center gap-3 mb-8">
					<span className="text-xs font-semibold text-[var(--charcoal)]/60 uppercase tracking-wider">{t('hierarchy')}</span>
					<span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColorClasses.Lead}`}>{t('tiers.lead')}</span>
					<ChevronRight className="w-4 h-4 text-[var(--charcoal)]/30" />
					<span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColorClasses.Specialist}`}>{t('tiers.specialist')}</span>
					<ChevronRight className="w-4 h-4 text-[var(--charcoal)]/30" />
					<span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColorClasses.Intern}`}>Intern</span>
					<span className="text-xs text-[var(--charcoal)]/40 ml-2">{t('tierSpawned')}</span>
				</div>

				{/* Roster Categories */}
				<div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="p-6 rounded-2xl bg-[var(--sand-light)]/50 border border-[var(--sand-dark)]/20">
						<div className="flex items-center gap-2 mb-4">
							<Users className="w-4 h-4 text-[var(--terracotta)]" />
							<h3 className="text-sm font-semibold text-[var(--espresso)]">{t('rosterTitle')}</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{rosterCategoryIcons.map((icon, idx) => (
								<div
									key={idx}
									className="flex items-center gap-2 px-3 py-1.5 bg-white/70 rounded-lg border border-[var(--sand-dark)]/15 text-xs"
								>
									<span className="text-[var(--terracotta)]">{icon}</span>
									<span className="font-medium text-[var(--espresso)]">{t(`categories.${idx}`)}</span>
									<span className="text-[var(--charcoal)]/40">{rosterCategoryCounts[idx]}</span>
								</div>
							))}
						</div>
					</div>
					<ImageLightbox src="/img/150agents.webp" alt="CapiBot Agent Roster \u2014 Browse and hire from 150 agents across 12+ categories" className="rounded-2xl overflow-hidden border border-[var(--sand-dark)]/20 shadow-lg">
						<Image
							src="/img/150agents.webp"
							alt="CapiBot Agent Roster \u2014 Browse and hire from 150 agents across 12+ categories"
							width={1200}
							height={800}
							loading="lazy"
							className="w-full h-auto"
						/>
					</ImageLightbox>
				</div>

				{/* Agent Selector — Horizontal Tab Strip */}
				<div className="flex flex-wrap gap-2 mb-8">
					{[0, 1, 2, 3, 4].map((idx) => (
						<button
							key={idx}
							onClick={() => setSelectedIdx(idx)}
							className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
								selectedIdx === idx
									? 'text-white shadow-md'
									: 'bg-[var(--sand-light)]/60 text-[var(--charcoal)] hover:bg-white hover:shadow-sm'
							}`}
							style={selectedIdx === idx ? { backgroundColor: agentColors[idx] } : undefined}
						>
							<span style={{ color: selectedIdx === idx ? 'white' : agentColors[idx] }}>
								{agentIcons[idx]}
							</span>
							{t(`agents.${idx}.name`)}
						</button>
					))}
				</div>

				{/* Agent Detail Panel */}
				<div className="card-editorial p-8 mb-16">
					<div className="flex items-start gap-4 mb-6">
						<div
							className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
							style={{ backgroundColor: agentColors[selectedIdx] }}
						>
							{agentIcons[selectedIdx]}
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								{t(`agents.${selectedIdx}.name`)}
							</h3>
							<div className="flex items-center gap-2 mt-1">
								<span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${tierColorClasses[agentTier] || tierColorClasses.Specialist}`}>
									{agentTier}
								</span>
								<span className="text-sm text-[var(--charcoal)]">{t(`agents.${selectedIdx}.role`)}</span>
							</div>
						</div>
					</div>

					<p className="text-[var(--charcoal)] mb-6 leading-relaxed">
						{t(`agents.${selectedIdx}.description`)}
					</p>

					<div>
						<h4 className="text-sm font-semibold text-[var(--espresso)] mb-3 flex items-center gap-2">
							<Zap className="w-4 h-4 text-[var(--terracotta)]" />
							{t('capabilitiesLabel')}
						</h4>
						<div className="flex flex-wrap gap-2">
							{[0, 1, 2, 3].map((capIdx) => (
								<span
									key={capIdx}
									className="px-3 py-1.5 bg-[var(--sand-light)] text-[var(--espresso)] rounded-lg text-sm font-medium"
								>
									{t(`agents.${selectedIdx}.capabilities.${capIdx}`)}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* System Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[0, 1, 2].map((idx) => (
						<div key={idx} className="flex items-start gap-3 p-5 rounded-2xl bg-[var(--sand-light)]/50 border border-[var(--sand-dark)]/20">
							<div className="w-10 h-10 rounded-xl bg-[var(--terracotta)]/10 flex items-center justify-center text-[var(--terracotta)] flex-shrink-0">
								{systemFeatureIcons[idx]}
							</div>
							<div>
								<h4 className="font-semibold text-sm text-[var(--espresso)] mb-0.5">{t(`systemFeatures.${idx}.title`)}</h4>
								<p className="text-sm text-[var(--charcoal)]/70">{t(`systemFeatures.${idx}.description`)}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
