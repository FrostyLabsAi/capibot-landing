'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Loader2, AlertCircle, ArrowRight } from 'lucide-react';

type Step = 'loading' | 'setup' | 'provisioning' | 'ready' | 'error';

export default function WelcomePage() {
	return (
		<Suspense fallback={
			<div className="min-h-screen bg-[var(--sand-light)] flex items-center justify-center">
				<Loader2 className="w-8 h-8 animate-spin text-[var(--terracotta)]" />
			</div>
		}>
			<WelcomeContent />
		</Suspense>
	);
}

function WelcomeContent() {
	const searchParams = useSearchParams();
	const [step, setStep] = useState<Step>('loading');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
	const [checkingUsername, setCheckingUsername] = useState(false);
	const [error, setError] = useState('');
	const [provisionProgress, setProvisionProgress] = useState('');
	const [dashboardUrl, setDashboardUrl] = useState('');

	// Validate checkout came from LemonSqueezy
	useEffect(() => {
		const checkoutId = searchParams.get('checkout_id');
		if (!checkoutId) {
			setStep('error');
			setError('Invalid checkout session. Please complete payment first.');
			return;
		}
		setStep('setup');
	}, [searchParams]);

	// Debounced username availability check
	useEffect(() => {
		if (username.length < 3) {
			setUsernameAvailable(null);
			return;
		}

		if (!/^[a-z][a-z0-9-]{2,29}$/.test(username) || username.includes('--')) {
			setUsernameAvailable(false);
			return;
		}

		setCheckingUsername(true);
		const timer = setTimeout(async () => {
			try {
				const res = await fetch(`/api/provision/check-username?slug=${username}`);
				const data = await res.json();
				setUsernameAvailable(data.available);
			} catch {
				setUsernameAvailable(null);
			} finally {
				setCheckingUsername(false);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [username]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!usernameAvailable || password.length < 8) return;

		setStep('provisioning');
		setProvisionProgress('Creating your private instance...');

		try {
			const checkoutId = searchParams.get('checkout_id');

			const res = await fetch('/api/provision/create', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					slug: username,
					password,
					checkoutId,
				}),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || 'Provisioning failed');
			}

			const data = await res.json();
			setDashboardUrl(data.dashboardUrl);

			setProvisionProgress('Setting up your database...');
			await new Promise(r => setTimeout(r, 2000));

			setProvisionProgress('Configuring your dashboard...');
			await new Promise(r => setTimeout(r, 2000));

			setProvisionProgress('Almost ready...');
			await new Promise(r => setTimeout(r, 1000));

			setStep('ready');
		} catch (err) {
			setStep('error');
			setError((err as Error).message);
		}
	}

	return (
		<div className="min-h-screen bg-[var(--sand-light)] flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				{/* Logo */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
						CapiBot
					</h1>
				</div>

				{step === 'loading' && (
					<div className="card-editorial p-8 text-center">
						<Loader2 className="w-8 h-8 animate-spin text-[var(--terracotta)] mx-auto mb-4" />
						<p className="text-[var(--charcoal)]">Verifying your purchase...</p>
					</div>
				)}

				{step === 'setup' && (
					<div className="card-editorial p-8">
						<div className="text-center mb-6">
							<CheckCircle className="w-12 h-12 text-[var(--sage)] mx-auto mb-3" />
							<h2 className="text-2xl font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
								Payment confirmed!
							</h2>
							<p className="text-sm text-[var(--charcoal)] mt-2">
								Set up your private CapiBot instance.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-5">
							{/* Username */}
							<div>
								<label className="block text-sm font-medium text-[var(--espresso)] mb-1.5">
									Choose your username
								</label>
								<div className="relative">
									<input
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
										placeholder="your-name"
										maxLength={30}
										className="w-full px-4 py-3 rounded-xl border border-[var(--sand-dark)] bg-white text-[var(--espresso)] placeholder:text-[var(--charcoal)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/30 focus:border-[var(--terracotta)]"
									/>
									<div className="absolute right-3 top-1/2 -translate-y-1/2">
										{checkingUsername && <Loader2 className="w-4 h-4 animate-spin text-[var(--charcoal)]/40" />}
										{!checkingUsername && usernameAvailable === true && <CheckCircle className="w-4 h-4 text-[var(--sage)]" />}
										{!checkingUsername && usernameAvailable === false && <AlertCircle className="w-4 h-4 text-red-400" />}
									</div>
								</div>
								{username.length > 0 && (
									<p className="text-xs mt-1.5 text-[var(--charcoal)]/60">
										Your dashboard: <span className="font-medium text-[var(--terracotta)]">{username}.capibot.io</span>
									</p>
								)}
								{usernameAvailable === false && username.length >= 3 && (
									<p className="text-xs mt-1 text-red-400">
										Username unavailable or invalid. Use 3-30 lowercase letters, numbers, and hyphens.
									</p>
								)}
							</div>

							{/* Password */}
							<div>
								<label className="block text-sm font-medium text-[var(--espresso)] mb-1.5">
									Set your password
								</label>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="At least 8 characters"
									minLength={8}
									className="w-full px-4 py-3 rounded-xl border border-[var(--sand-dark)] bg-white text-[var(--espresso)] placeholder:text-[var(--charcoal)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/30 focus:border-[var(--terracotta)]"
								/>
								{password.length > 0 && password.length < 8 && (
									<p className="text-xs mt-1 text-red-400">
										Password must be at least 8 characters.
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={!usernameAvailable || password.length < 8}
								className="btn-savannah btn-savannah-primary w-full cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
							>
								Launch My CapiBot
								<ArrowRight className="w-4 h-4" />
							</button>
						</form>
					</div>
				)}

				{step === 'provisioning' && (
					<div className="card-editorial p-8 text-center">
						<Loader2 className="w-10 h-10 animate-spin text-[var(--terracotta)] mx-auto mb-4" />
						<h2 className="text-xl font-semibold text-[var(--espresso)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
							Setting up your instance
						</h2>
						<p className="text-sm text-[var(--charcoal)]">{provisionProgress}</p>
						<p className="text-xs text-[var(--charcoal)]/40 mt-4">
							This usually takes about 30-60 seconds.
						</p>
					</div>
				)}

				{step === 'ready' && (
					<div className="card-editorial p-8 text-center">
						<CheckCircle className="w-14 h-14 text-[var(--sage)] mx-auto mb-4" />
						<h2 className="text-2xl font-semibold text-[var(--espresso)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
							You&apos;re all set!
						</h2>
						<p className="text-sm text-[var(--charcoal)] mb-6">
							Your private CapiBot instance is live.
						</p>
						<a
							href={dashboardUrl}
							className="btn-savannah btn-savannah-primary w-full inline-flex items-center justify-center gap-2"
						>
							Open My Dashboard
							<ArrowRight className="w-4 h-4" />
						</a>
						<p className="text-xs text-[var(--charcoal)]/40 mt-4">
							Bookmark <span className="font-medium">{dashboardUrl}</span> — that&apos;s your private URL.
						</p>
					</div>
				)}

				{step === 'error' && (
					<div className="card-editorial p-8 text-center">
						<AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
						<h2 className="text-xl font-semibold text-[var(--espresso)] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
							Something went wrong
						</h2>
						<p className="text-sm text-[var(--charcoal)] mb-4">{error}</p>
						<a href="mailto:hello@capibot.io" className="text-sm text-[var(--terracotta)] underline">
							Contact support
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
