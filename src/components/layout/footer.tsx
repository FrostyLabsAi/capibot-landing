'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export function Footer() {
	const t = useTranslations('footer');
	const locale = useLocale();
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (!email || status === 'loading') return;

		setStatus('loading');
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			if (res.ok) {
				setStatus('success');
				setEmail('');
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	};

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className="bg-[var(--espresso)] text-[var(--sand)]">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<Image src="/capybara-icon.png" alt="CapiBot" width={32} height={32} className="w-8 h-8 rounded-full" />
							<span className="font-semibold text-lg text-white" style={{ fontFamily: 'var(--font-heading)' }}>
								{t('brand')}
							</span>
						</div>
						<p className="text-sm text-[var(--sand-dark)] max-w-sm">
							{t('brandDesc')}
						</p>
					</div>

					{/* Product Links */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4">{t('productTitle')}</h4>
						<ul className="space-y-3">
							<li>
								<button onClick={() => scrollToSection('ai-company')} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors cursor-pointer">
									{t('productLinks.aiCompanies')}
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('features')} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors cursor-pointer">
									{t('productLinks.features')}
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('pricing')} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors cursor-pointer">
									{t('productLinks.pricing')}
								</button>
							</li>
							<li>
								<button onClick={() => scrollToSection('faq')} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors cursor-pointer">
									{t('productLinks.faq')}
								</button>
							</li>
						</ul>
					</div>

					{/* Resources Links */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4">{t('resourcesTitle')}</h4>
						<ul className="space-y-3">
							<li>
								<a href="https://github.com/capibot" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('resourceLinks.github')}
								</a>
							</li>
							<li>
								<button onClick={() => scrollToSection('waitlist')} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors cursor-pointer">
									{t('resourceLinks.joinWaitlist')}
								</button>
							</li>
							<li>
								<Link href={`/${locale}/vs/openclaw`} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('resourceLinks.compare')}
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4">{t('companyTitle')}</h4>
						<ul className="space-y-3">
							<li>
								<a href="mailto:hello@capibot.io" className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('companyLinks.contact')}
								</a>
							</li>
							<li>
								<Link href={`/${locale}/privacy`} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('companyLinks.privacy')}
								</Link>
							</li>
							<li>
								<Link href={`/${locale}/terms`} className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('companyLinks.terms')}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Waitlist */}
				<div className="mt-16 pt-8 border-t border-white/10">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
						<div>
							<h4 className="font-semibold text-white mb-1">{t('waitlistTitle')}</h4>
							<p className="text-sm text-[var(--sand-dark)]">{t('waitlistDesc')}</p>
						</div>
						{status === 'success' ? (
							<div className="flex items-center gap-2 text-green-400 text-sm">
								<Check className="w-4 h-4" />
								<span>{t('waitlistSuccess')}</span>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="flex gap-2">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="you@company.com"
									required
									className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)] w-64"
								/>
								<button
									type="submit"
									disabled={status === 'loading'}
									className="btn-savannah btn-savannah-primary text-sm cursor-pointer disabled:opacity-50"
								>
									{t('joinButton')}
									<ArrowRight className="w-3.5 h-3.5" />
								</button>
							</form>
						)}
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<p className="text-xs text-[var(--sand-dark)]">
						{t('copyright')} {t('madeIn')}
					</p>
				</div>
			</div>
		</footer>
	);
}
