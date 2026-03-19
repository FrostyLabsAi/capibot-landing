import { setRequestLocale } from 'next-intl/server';
import { LandingPage } from '@/components/landing-page';
import { TrustBar } from '@/components/sections/TrustBar';
import { StatsBar } from '@/components/sections/StatsBar';
import { ToolsCapabilities } from '@/components/sections/ToolsCapabilities';
import { MemoryIntelligence } from '@/components/sections/MemoryIntelligence';
import { ProvidersSection } from '@/components/sections/ProvidersSection';

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LandingPage
			trustBar={<TrustBar />}
			statsBar={<StatsBar />}
			toolsCapabilities={<ToolsCapabilities />}
			memoryIntelligence={<MemoryIntelligence />}
			providersSection={<ProvidersSection />}
		/>
	);
}
