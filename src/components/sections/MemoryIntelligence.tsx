import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Database, Search, Brain, Trash2, Sparkles, Terminal } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageLightbox } from '@/components/shared/ImageLightbox';

const featureIcons = [
	<Search key="search" className="w-5 h-5" />,
	<Brain key="brain" className="w-5 h-5" />,
	<Database key="database" className="w-5 h-5" />,
	<Trash2 key="trash" className="w-5 h-5" />,
];

const searchModeKeys = ['hybrid', 'vector', 'text'] as const;

export async function MemoryIntelligence() {
	const t = await getTranslations('memory');

	return (
		<section id="memory" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Sparkles className="w-3.5 h-3.5 text-[var(--sage)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left: Features */}
					<div className="space-y-6">
						{[0, 1, 2, 3].map((idx) => (
							<div key={idx} className="flex gap-4">
								<div className="w-12 h-12 rounded-2xl bg-[var(--sage)]/10 flex items-center justify-center text-[var(--sage)] flex-shrink-0">
									{featureIcons[idx]}
								</div>
								<div>
									<h4 className="font-semibold text-[var(--espresso)] mb-1">{t(`features.${idx}.title`)}</h4>
									<p className="text-sm text-[var(--charcoal)] leading-relaxed">{t(`features.${idx}.description`)}</p>
								</div>
							</div>
						))}

						{/* Code Example */}
						<div className="code-block">
							<div className="flex items-center gap-2 mb-3 text-[var(--sand-dark)] text-xs">
								<Terminal className="w-3 h-3" />
								<span>{t('codeTitle')}</span>
							</div>
							<code className="text-[var(--sage-light)] whitespace-pre text-xs">
{`> search "client meeting notes from last week"

Results (hybrid mode, 3 matches):
  0.91  Meeting with Acme Corp — discussed Q2 roadmap
  0.87  Design review notes — approved new dashboard
  0.79  Sprint planning — prioritized auth module`}
							</code>
						</div>
					</div>

					{/* Right: Screenshot */}
					<div>
						<ImageLightbox src="/img/memory.webp" alt="CapiBot Memory Browser — Knowledge Base with semantic search" className="rounded-2xl overflow-hidden border border-[var(--sand-dark)]/20 shadow-lg mb-6">
							<Image
								src="/img/memory.webp"
								alt="CapiBot Memory Browser — Knowledge Base with semantic search"
								width={1200}
								height={800}
								loading="lazy"
								className="w-full h-auto"
							/>
						</ImageLightbox>
						<div className="grid grid-cols-3 gap-3">
							{searchModeKeys.map((mode) => (
								<div key={mode} className="text-center p-3 rounded-xl bg-[var(--sand-light)]/50 border border-[var(--sand-dark)]/20">
									<div className="text-xs font-semibold text-[var(--espresso)]">{t(`searchModes.${mode}`)}</div>
									<div className="text-sm text-[var(--charcoal)]/60">{t('searchModeLabel')}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
