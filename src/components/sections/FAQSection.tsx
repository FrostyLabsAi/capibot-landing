'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const FAQ_COUNT = 10;

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const t = useTranslations('faq');

	return (
		<section id="faq" className="py-24 lg:py-32">
			<div className="max-w-3xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <HelpCircle className="w-3.5 h-3.5 text-[var(--sage)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				<div className="overflow-hidden rounded-[32px] border border-[rgba(44,24,16,0.08)] bg-gradient-to-br from-white/95 to-[var(--sand-light)]/90 shadow-md">
					{Array.from({ length: FAQ_COUNT }, (_, idx) => (
						<div
							key={idx}
							className={`border-b border-[rgba(44,24,16,0.08)] ${idx === FAQ_COUNT - 1 ? 'border-b-0' : ''}`}
						>
							<button
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-[var(--sand-light)]/30 transition-colors"
							>
								<span className="font-semibold text-[var(--espresso)] pr-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
									{t(`items.${idx}.q`)}
								</span>
								<ChevronDown
									className={`w-5 h-5 text-[var(--charcoal)] flex-shrink-0 transition-transform duration-200 ${
										openIndex === idx ? 'rotate-180' : ''
									}`}
								/>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
								}`}
							>
								<p className="px-6 pb-6 text-sm text-[var(--charcoal)] leading-relaxed">
									{t(`items.${idx}.a`)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
