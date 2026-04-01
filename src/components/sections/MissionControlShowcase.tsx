'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
	Zap, Activity, HardDrive, Shield, Bell, Settings,
	LayoutDashboard, KanbanSquare, Clock, Globe, GitBranch, Users,
} from 'lucide-react';
import { ImageLightbox } from '@/components/shared/ImageLightbox';

const tabIds = ['overview', 'agents', 'tasks', 'memory', 'skills', 'cron'] as const;

const tabIcons = [
	<LayoutDashboard key="overview" className="w-4 h-4" />,
	<Users key="agents" className="w-4 h-4" />,
	<KanbanSquare key="tasks" className="w-4 h-4" />,
	<HardDrive key="memory" className="w-4 h-4" />,
	<GitBranch key="skills" className="w-4 h-4" />,
	<Clock key="cron" className="w-4 h-4" />,
];

const tabImages = [
	'/img/main_overview.webp',
	'/img/150agents.webp',
	'/img/taskboard.webp',
	'/img/memory.webp',
	'/img/skills.webp',
	'/img/tasks.webp',
];

const featureIcons = [
	<Activity key="0" className="w-5 h-5" />,
	<KanbanSquare key="1" className="w-5 h-5" />,
	<HardDrive key="2" className="w-5 h-5" />,
	<Shield key="3" className="w-5 h-5" />,
	<Bell key="4" className="w-5 h-5" />,
	<Clock key="5" className="w-5 h-5" />,
	<Globe key="6" className="w-5 h-5" />,
	<Settings key="7" className="w-5 h-5" />,
];

export function MissionControlShowcase() {
	const [activeTab, setActiveTab] = useState(0);
	const t = useTranslations('missionControl');
	const tabId = tabIds[activeTab];

	return (
		<section id="mission-control" className="py-24 lg:py-32 bg-[var(--espresso)] relative overflow-hidden">
			{/* Decorative Background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-pattern-dots" />
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="mb-16 lg:mb-20">
					<div className="tag mb-6 bg-white/10 text-white border-white/20">
						<LayoutDashboard className="w-3.5 h-3.5 text-[var(--gold)]" />
						<span>{t('tag')}</span>
					</div>
					<h2 className="section-heading text-white mb-6">
						{t('heading')}<span className="text-gradient-sunset italic">{t('headingAccent')}</span>
					</h2>
					<p className="text-lg text-white/70 leading-relaxed max-w-xl">
						{t('subheading')}
					</p>
				</div>

				{/* Dashboard Tabs + Preview */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
					{/* Left: Tabs */}
					<div>
						<div className="flex flex-wrap gap-2 mb-6">
							{tabIds.map((id, idx) => (
								<button
									key={id}
									onClick={() => setActiveTab(idx)}
									className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
										activeTab === idx
											? 'bg-[var(--terracotta)] text-white shadow-lg'
											: 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
									}`}
								>
									{tabIcons[idx]}
									{t(`tabs.${id}`)}
								</button>
							))}
						</div>

						<h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
							{t(`tabs.${tabId}`)} {t('panelSuffix')}
						</h3>
						<ul className="space-y-3 mb-6">
							{[0, 1, 2].map((fIdx) => (
								<li key={fIdx} className="flex items-start gap-3">
									<Zap className="w-4 h-4 text-[var(--gold)] mt-0.5 flex-shrink-0" />
									<span className="text-sm text-white/70">{t(`tabFeatures.${tabId}.${fIdx}`)}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Right: Screenshot */}
					<div className="relative">
						<ImageLightbox src={tabImages[activeTab]} alt={`Mission Control \u2014 ${t(`tabs.${tabId}`)}`} className="rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
							<Image
								src={tabImages[activeTab]}
								alt={`Mission Control \u2014 ${t(`tabs.${tabId}`)}`}
								width={1200}
								height={800}
								className="w-full h-auto"
							/>
						</ImageLightbox>
						{/* Decorative Blurs */}
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--terracotta)] rounded-full blur-[80px] opacity-20" />
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--sage)] rounded-full blur-[80px] opacity-15" />
					</div>
				</div>

				{/* Feature Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
						<div key={idx} className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
							<div className="w-10 h-10 rounded-xl bg-[var(--terracotta)]/20 flex items-center justify-center text-[var(--terracotta-light)] flex-shrink-0">
								{featureIcons[idx]}
							</div>
							<div>
								<h4 className="font-semibold text-white text-sm mb-0.5">{t(`features.${idx}.title`)}</h4>
								<p className="text-sm text-white/50 leading-relaxed">{t(`features.${idx}.description`)}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
