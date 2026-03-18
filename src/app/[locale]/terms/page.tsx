import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Terms of Service',
};

export default async function TermsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<main className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
			<Link
				href={`/${locale}`}
				className="inline-flex items-center gap-2 text-sm text-[var(--charcoal)]/60 hover:text-[var(--terracotta)] transition-colors mb-12"
			>
				← Back to CapiBot
			</Link>

			<h1 className="section-heading text-[var(--espresso)] mb-4">Terms of Service</h1>
			<p className="text-sm text-[var(--charcoal)]/50 mb-12">Last updated: March 2026</p>

			<div className="space-y-8 text-[var(--charcoal)]">
				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Subscription</h2>
					<p className="leading-relaxed">
						CapiBot is a paid subscription service. Your subscription begins when you complete payment
						and continues on a monthly or annual basis until cancelled. You may cancel at any time and
						retain access through the end of your billing period.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Free Trial</h2>
					<p className="leading-relaxed">
						New accounts include a 14-day free trial with full access. No credit card is required to
						start a trial. At the end of the trial, you will be prompted to choose a plan to continue.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Acceptable Use</h2>
					<p className="leading-relaxed">
						You may use CapiBot for any lawful purpose. You may not use it to violate applicable laws,
						harm others, generate spam, or bypass rate limits or terms of third-party AI providers
						you connect to the platform.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Service & Uptime</h2>
					<p className="leading-relaxed">
						We aim for high availability but do not guarantee uninterrupted service except where
						specified in your plan&apos;s SLA. Scale plan customers receive a 99.9% uptime SLA.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Liability</h2>
					<p className="leading-relaxed">
						CapiBot is provided without warranty beyond what is stated in your plan. To the maximum
						extent permitted by law, our liability is limited to the amount you paid in the 30 days
						prior to the claim.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Contact</h2>
					<p className="leading-relaxed">
						Questions about these terms?{' '}
						<a href="mailto:hello@capibot.io" className="text-[var(--terracotta)] underline decoration-dotted">
							hello@capibot.io
						</a>
					</p>
				</section>
			</div>
		</main>
	);
}
