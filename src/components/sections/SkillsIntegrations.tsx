'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Layers, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageLightbox } from '@/components/shared/ImageLightbox';

const composioApps = [
	'Gmail', 'Google Docs', 'Notion', 'Linear', 'Jira', 'Salesforce',
	'HubSpot', 'Trello', 'Asana', 'Airtable', 'Discord', 'Zendesk',
	'GitHub', 'GitLab', 'Figma', 'Stripe', 'Intercom', 'Mailchimp',
	'Todoist', 'ClickUp', 'Monday', 'Freshdesk', 'Zoho', 'Pipedrive',
];

interface SkillsIntegrationsProps {
	onJoinWaitlist: () => void;
}

export function SkillsIntegrations({ onJoinWaitlist }: SkillsIntegrationsProps) {
	const t = useTranslations('skills');

	return (
		<section id="integrations" className="py-24 lg:py-32 bg-[var(--sand-light)]/50">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Layers className="w-3.5 h-3.5 text-[var(--gold)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Composio */}
					<div className="card-editorial p-8">
						<div className="flex items-center gap-3 mb-2">
							<div className="w-10 h-10 rounded-xl bg-[var(--espresso)] flex items-center justify-center shadow-sm">
								<span className="text-lg font-bold text-white">C</span>
							</div>
							<h3 className="text-xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								{t('composioTitle')}
							</h3>
						</div>
						<p className="text-sm text-[var(--charcoal)]/60 mb-6">{t('composioDesc')}</p>

						{/* Integrations Screenshot */}
						<ImageLightbox src="/img/integrations.png" alt="CapiBot Integrations — Connected apps, Composio, and OAuth management" className="rounded-xl overflow-hidden border border-[var(--sand-dark)]/20 shadow-sm mb-6">
							<Image
								src="/img/integrations.png"
								alt="CapiBot Integrations — Connected apps, Composio, and OAuth management"
								width={1200}
								height={800}
								className="w-full h-auto"
							/>
						</ImageLightbox>

						<div className="flex flex-wrap gap-2 mb-6">
							{composioApps.map((app) => (
								<span
									key={app}
									className="px-3 py-1.5 bg-white/60 hover:bg-white text-xs font-medium text-[var(--charcoal)] rounded-lg transition-colors cursor-default"
								>
									{app}
								</span>
							))}
							<span className="px-3 py-1.5 bg-[var(--terracotta)]/10 text-xs font-semibold text-[var(--terracotta)] rounded-lg">
								{t('composioMore')}
							</span>
						</div>

						<div className="code-block text-xs">
							<code className="text-[var(--sage-light)]">
								<span className="text-[var(--gold-light)]">agent</span>: &quot;Creating a Jira ticket for the bug report...&quot;{'\n'}
								<span className="text-[var(--gold-light)]">composio</span>: execute(app=&quot;jira&quot;, action=&quot;create_issue&quot;){'\n'}
								<span className="text-[var(--gold-light)]">result</span>: JIRA-1234 created successfully
							</code>
						</div>

						<button
							onClick={onJoinWaitlist}
							className="mt-6 text-sm font-semibold text-[var(--terracotta)] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
						>
							{t('composioCtaText')} <ArrowRight className="w-4 h-4" />
						</button>
					</div>

					{/* Skills Ecosystem */}
					<div className="card-editorial p-8">
						<div className="flex items-center gap-3 mb-2">
							<div className="w-10 h-10 rounded-xl bg-[var(--sage)]/10 flex items-center justify-center">
								<BookOpen className="w-5 h-5 text-[var(--sage)]" />
							</div>
							<div className="flex items-center gap-2">
								<h3 className="text-xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
									{t('skillsTitle')}
								</h3>
								<div className="tag text-xs py-0.5 px-2">
									<Sparkles className="w-3 h-3 text-[var(--gold)]" />
									<span>{t('skillsGrowing')}</span>
								</div>
							</div>
						</div>
						<p className="text-sm text-[var(--charcoal)]/60 mb-6">
							{t('skillsDesc')}
						</p>

						<div className="space-y-3 mb-6">
							{[0, 1, 2, 3, 4, 5, 6].map((idx) => (
								<div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
									<div className="w-2 h-2 rounded-full bg-[var(--sage)] flex-shrink-0" />
									<div>
										<span className="text-sm font-semibold text-[var(--espresso)]">{t(`skillsList.${idx}.name`)}</span>
										<span className="text-sm text-[var(--charcoal)]/50 ml-2">{t(`skillsList.${idx}.desc`)}</span>
									</div>
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 bg-[var(--terracotta)]/10 text-xs font-semibold text-[var(--terracotta)] rounded-lg">
								{t('skillsMore')}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
