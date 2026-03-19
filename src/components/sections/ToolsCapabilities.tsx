import { getTranslations } from 'next-intl/server';
import { FileText, Terminal, Globe, Search, Clock, Users, Zap, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const categoryIcons = [
	<FileText key="0" className="w-6 h-6" />,
	<Globe key="1" className="w-6 h-6" />,
	<Terminal key="2" className="w-6 h-6" />,
	<Search key="3" className="w-6 h-6" />,
	<Clock key="4" className="w-6 h-6" />,
	<Users key="5" className="w-6 h-6" />,
];

const categoryColors = ['var(--sage)', '#4285F4', 'var(--terracotta)', 'var(--gold)', '#6366F1', 'var(--charcoal)'];

// Featured indices (take col-span-2 in 3-col grid), compact take col-span-1
// Row 1: [0 featured: span-2] [1 compact: span-1]
// Row 2: [2 compact: span-1] [3 featured: span-2]
// Row 3: [4 compact: span-1] [5 featured: span-2]
const featuredIndices = new Set([0, 3, 5]);

export async function ToolsCapabilities() {
	const t = await getTranslations('tools');

	return (
		<section id="tools" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Zap className="w-3.5 h-3.5 text-[var(--terracotta)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[0, 1, 2, 3, 4, 5].map((idx) => {
						const count = Number(t(`categories.${idx}.count`));
						const isFeatured = featuredIndices.has(idx);
						return (
							<div
								key={idx}
								className={`card-editorial p-6 group cursor-default ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'}`}
							>
								<div className="flex items-center justify-between mb-4">
									<div
										className={`rounded-2xl flex items-center justify-center text-white ${isFeatured ? 'w-14 h-14' : 'w-12 h-12'}`}
										style={{ backgroundColor: categoryColors[idx] }}
									>
										{categoryIcons[idx]}
									</div>
									<span className="text-xs font-bold px-2 py-1 rounded-full bg-[var(--sand-light)] text-[var(--charcoal)]">
										{count} {count === 1 ? t('toolSingular') : t('toolPlural')}
									</span>
								</div>
								<h3
									className={`font-semibold text-[var(--espresso)] mb-3 ${isFeatured ? 'text-xl' : 'text-lg'}`}
									style={{ fontFamily: 'Cormorant Garamond, serif' }}
								>
									{t(`categories.${idx}.title`)}
								</h3>
								<ul className="space-y-2">
									{[0, 1, 2, 3].map((tIdx) => (
										<li key={tIdx} className="text-sm text-[var(--charcoal)] leading-relaxed flex items-start gap-2">
											<span className="text-[var(--terracotta)] mt-0.5">&#8250;</span>
											<span>{t(`categories.${idx}.tools.${tIdx}`)}</span>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>

				<div className="mt-12 text-center">
					<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--espresso)] text-white">
						<ShieldCheck className="w-5 h-5 text-[var(--sage)]" />
						<span className="text-sm font-medium">{t('securityBanner')}</span>
					</div>
				</div>
			</div>
		</section>
	);
}
