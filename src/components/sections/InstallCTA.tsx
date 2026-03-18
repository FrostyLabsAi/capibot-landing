'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check, ArrowRight, Sparkles, Mail } from 'lucide-react';

const BENEFITS_COUNT = 3;

interface InstallCTAProps {
	onJoinWaitlist?: () => void;
}

export function InstallCTA({ onJoinWaitlist }: InstallCTAProps) {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations('installCta');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setStatus('submitting');
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
				const data = await res.json().catch(() => ({}));
				setErrorMessage(data.error || t('genericError'));
				setStatus('error');
			}
		} catch {
			setErrorMessage(t('connectError'));
			setStatus('error');
		}
	};

	// Also allow parent to handle scroll
	void onJoinWaitlist;

	return (
		<section id="waitlist" className="py-24 lg:py-32 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* CTA Card */}
				<div
					className="text-white p-8 lg:p-16 relative overflow-hidden rounded-[32px]"
					style={{
						background: 'linear-gradient(135deg, var(--espresso) 0%, var(--charcoal) 100%)',
						boxShadow: '0 20px 50px rgba(26,13,8,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
					}}
				>
					{/* Background Accents */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-[var(--terracotta)]/20 rounded-full blur-[100px]" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--sage)]/20 rounded-full blur-[100px]" />

					<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="tag mb-6 bg-white/10 text-white border-white/20">
								<Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
								<span>{t('tag')}</span>
							</div>
							<h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								{t('heading')}
							</h2>
							<p className="text-white/70 mb-6 max-w-md">
								{t('description')}
							</p>
							<div className="space-y-3 mb-6">
								{Array.from({ length: BENEFITS_COUNT }, (_, idx) => (
									<div key={idx} className="flex items-center gap-3">
										<Check className="w-5 h-5 text-[var(--sage)]" />
										<span className="text-sm">{t(`benefits.${idx}`)}</span>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-6">
							{status === 'success' ? (
								<div className="p-8 rounded-2xl bg-[var(--sage)]/20 border border-[var(--sage)]/30 text-center">
									<Check className="w-12 h-12 text-[var(--sage)] mx-auto mb-4" />
									<h3 className="text-xl font-semibold mb-2">{t('successTitle')}</h3>
									<p className="text-white/70 text-sm">
										{t('successDesc')}
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label htmlFor="waitlist-email" className="block text-xs text-white/50 mb-2 font-medium">
											{t('emailLabel')}
										</label>
										<div className="flex gap-3">
											<div className="relative flex-1">
												<Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
												<input
													id="waitlist-email"
													type="email"
													required
													value={email}
													onChange={(e) => {
														setEmail(e.target.value);
														if (status === 'error') setStatus('idle');
													}}
													placeholder={t('emailPlaceholder')}
													className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
												/>
											</div>
											<button
												type="submit"
												disabled={status === 'submitting'}
												className="btn-savannah btn-savannah-primary px-6 cursor-pointer disabled:opacity-50"
											>
												{status === 'submitting' ? (
													<span className="animate-pulse">...</span>
												) : (
													<>
														{t('joinButton')}
														<ArrowRight className="w-4 h-4" />
													</>
												)}
											</button>
										</div>
									</div>

									{status === 'error' && (
										<p className="text-xs text-red-400">{errorMessage}</p>
									)}

									<p className="text-xs text-white/30">
										{t('noSpam')}
									</p>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
