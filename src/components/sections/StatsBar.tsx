'use client';

import { useTranslations } from 'next-intl';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

const statTargets = [36, 8, 6, 4];
const statSuffixes = ['', '', '', ''];

export function StatsBar() {
	const t = useTranslations('statsBar');

	return (
		<section className="py-16 lg:py-20 bg-[var(--espresso)] relative overflow-hidden">
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-pattern-dots" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{statTargets.map((target, idx) => (
						<div key={idx} className="stat-card">
							<div className="stat-number">
								<AnimatedCounter target={target} suffix={statSuffixes[idx]} />
							</div>
							<div className="stat-label">{t(`items.${idx}.label`)}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
