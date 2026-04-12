'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { scrollToSection } from '@/components/shared/scroll-to';

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

	return (
		<footer className="bg-[var(--espresso)] text-[var(--sand)]">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<Image src="/capybara-icon.webp" alt="CapiBot" width={32} height={32} className="w-8 h-8 rounded-full" />
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
								<a href="https://github.com/FrostLabsAi" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('resourceLinks.github')}
								</a>
							</li>
							<li>
								<a href="https://x.com/CapiBotai" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sand-dark)] hover:text-white transition-colors">
									{t('resourceLinks.twitter')}
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
					<div className="flex items-center gap-4">
						<a href="https://aiagentsdirectory.com/agent/capibot?utm_source=badge&utm_medium=referral&utm_campaign=free_listing&utm_content=capibot" target="_blank" rel="noopener noreferrer">
							<img src="https://aiagentsdirectory.com/featured-badge.svg?v=2024" alt="CapiBot - Featured AI Agent on AI Agents Directory" width={200} height={50} />
						</a>
						<a
							href="https://www.agenthunter.io?utm_source=badge&utm_medium=embed&utm_campaign=CapiBot"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg border border-amber-400 bg-amber-50 px-3 py-2 no-underline transition-all hover:brightness-105"
						>
							<img src="https://www.agenthunter.io/logo-light.svg" alt="AgentHunter Badge" className="h-10 w-10" />
							<div className="flex flex-col">
								<p className="m-0 text-xs text-amber-800">AgentHunter</p>
								<p className="m-0 text-sm font-semibold text-amber-950">Featured AI Agent</p>
							</div>
						</a>
						<a href="https://x.com/CapiBotai" target="_blank" rel="noopener noreferrer" className="text-[var(--sand-dark)] hover:text-white transition-colors" aria-label="Follow us on X">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
						<a href="https://github.com/capibot" target="_blank" rel="noopener noreferrer" className="text-[var(--sand-dark)] hover:text-white transition-colors" aria-label="GitHub">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
