import { getTranslations } from 'next-intl/server';
import { Radio, Settings, ArrowRight, Check, X, RefreshCw } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
	AnthropicLogo,
	GoogleLogo,
	OllamaLogo,
	KimiLogo,
	GLMLogo,
	MiniMaxLogo,
} from '@/components/shared/BrandLogos';

const providers = [
	{
		color: '#D4A574',
		bgColor: '#D4A574',
		logo: <AnthropicLogo size={28} className="text-white" />,
	},
	{
		color: '#4285F4',
		bgColor: '#ffffff',
		logo: <GoogleLogo size={32} />,
	},
	{
		color: '#FF6B35',
		bgColor: '#ffffff',
		logo: <OllamaLogo size={36} />,
	},
	{
		color: '#1E90FF',
		bgColor: '#ffffff',
		logo: <KimiLogo size={36} />,
	},
	{
		color: '#10A37F',
		bgColor: '#ffffff',
		logo: <GLMLogo size={36} />,
	},
	{
		color: '#6366F1',
		bgColor: '#ffffff',
		logo: <MiniMaxLogo size={36} />,
	},
];

export async function ProvidersSection() {
	const t = await getTranslations('providers');

	return (
		<section id="providers" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <Radio className="w-3.5 h-3.5 text-[var(--terracotta)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				{/* Provider Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
					{providers.map((provider, idx) => (
						<div
							key={idx}
							className="card-editorial text-center p-8 group cursor-pointer"
						>
							<div
								className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 overflow-hidden"
								style={{ backgroundColor: provider.bgColor }}
							>
								{provider.logo}
							</div>
							<h3 className="font-semibold text-[var(--espresso)] mb-1">{t(`providers.${idx}.name`)}</h3>
							<span
								className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
								style={{ backgroundColor: provider.color }}
							>
								{t(`providers.${idx}.status`)}
							</span>
						</div>
					))}
				</div>

				{/* Failover Visualization */}
				<div className="card-editorial max-w-3xl mx-auto p-8">
					<div className="flex items-center gap-3 mb-6">
						<RefreshCw className="w-5 h-5 text-[var(--terracotta)]" />
						<h3 className="font-semibold text-[var(--espresso)]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem' }}>
							{t('failoverTitle')}
						</h3>
					</div>

					{/* Failover diagram */}
					<div className="flex flex-wrap items-center justify-center gap-3 mb-6">
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4A574]/10 border border-[#D4A574]/30">
							<div className="w-4 h-4 rounded-full bg-[var(--sage)]" />
							<AnthropicLogo size={16} className="text-[var(--espresso)]" />
							<span className="text-sm font-medium text-[var(--espresso)]">Anthropic</span>
						</div>
						<ArrowRight className="w-4 h-4 text-[var(--charcoal)]/30" />
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200">
							<X className="w-4 h-4 text-red-400" />
							<GoogleLogo size={16} />
							<span className="text-sm font-medium text-[var(--charcoal)]/50 line-through">Gemini</span>
						</div>
						<ArrowRight className="w-4 h-4 text-[var(--charcoal)]/30" />
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E90FF]/10 border border-[#1E90FF]/30">
							<div className="w-4 h-4 rounded-full bg-[var(--sage)]" />
							<KimiLogo size={18} />
							<span className="text-sm font-medium text-[var(--espresso)]">Kimi</span>
						</div>
						<span className="text-xs text-[var(--charcoal)]/40 ml-2">
							<Check className="w-4 h-4 inline text-[var(--sage)]" /> {t('failoverZeroDowntime')}
						</span>
					</div>

					<div className="flex items-center gap-3 mb-4">
						<Settings className="w-4 h-4 text-[var(--charcoal)]/40" />
						<h4 className="text-sm font-semibold text-[var(--espresso)]">{t('configTitle')}</h4>
					</div>
					<div className="code-block">
						<code className="text-[var(--gold-light)] text-sm">
							CAPIBOT_PROVIDER_PRIORITY=anthropic,gemini,kimi,glm,minimax,ollama
						</code>
					</div>
					<p className="text-sm text-[var(--charcoal)]/60 mt-4">
						{t('configDesc')}
					</p>
				</div>
			</div>
		</section>
	);
}
