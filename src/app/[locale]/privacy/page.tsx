import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Privacy Policy',
};

export default async function PrivacyPage({
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

			<h1 className="section-heading text-[var(--espresso)] mb-4">Privacy Policy</h1>
			<p className="text-sm text-[var(--charcoal)]/50 mb-12">Last updated: March 2026</p>

			<div className="space-y-8 text-[var(--charcoal)]">
				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">What We Collect</h2>
					<p className="leading-relaxed">
						When you sign up or use CapiBot, we collect your email address, account credentials, and
						usage data necessary to operate the service. We do not sell your data to third parties.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Your Data</h2>
					<p className="leading-relaxed">
						Your agents, memories, tasks, and conversations are private and belong to you. We store
						this data securely to provide the service and do not access it except as required to
						resolve support issues you report to us.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Waitlist</h2>
					<p className="leading-relaxed">
						If you submitted your email to the waitlist, we use it solely to notify you about CapiBot.
						You can unsubscribe at any time by emailing{' '}
						<a href="mailto:hello@capibot.io" className="text-[var(--terracotta)] underline decoration-dotted">
							hello@capibot.io
						</a>.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Third-Party AI Providers</h2>
					<p className="leading-relaxed">
						CapiBot integrates with AI providers (Anthropic, Google, Kimi, etc.) that you configure.
						Messages sent to those providers are governed by their privacy policies. CapiBot passes
						only the content you explicitly send.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-[var(--espresso)] mb-3">Contact</h2>
					<p className="leading-relaxed">
						Questions about privacy?{' '}
						<a href="mailto:hello@capibot.io" className="text-[var(--terracotta)] underline decoration-dotted">
							hello@capibot.io
						</a>
					</p>
				</section>
			</div>
		</main>
	);
}
