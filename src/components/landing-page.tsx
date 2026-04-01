import { type ReactNode } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AICompanySection } from '@/components/sections/AICompanySection';
import { MessagingShowcase } from '@/components/sections/MessagingShowcase';
import { MissionControlShowcase } from '@/components/sections/MissionControlShowcase';
import { MultiAgentSection } from '@/components/sections/MultiAgentSection';
import { SkillsIntegrations } from '@/components/sections/SkillsIntegrations';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { InstallCTA } from '@/components/sections/InstallCTA';
import { Footer } from '@/components/layout/footer';

interface LandingPageProps {
	trustBar: ReactNode;
	statsBar: ReactNode;
	toolsCapabilities: ReactNode;
	memoryIntelligence: ReactNode;
	providersSection: ReactNode;
}

export function LandingPage({
	trustBar,
	statsBar,
	toolsCapabilities,
	memoryIntelligence,
	providersSection,
}: LandingPageProps) {
	return (
		<>
			<HeroSection />
			{trustBar}
			<AICompanySection />
			{statsBar}
			<MessagingShowcase />
			<MissionControlShowcase />
			<MultiAgentSection />
			{toolsCapabilities}
			<SkillsIntegrations />
			{memoryIntelligence}
			{providersSection}
			<PricingSection />
			<FAQSection />
			<InstallCTA />
			<Footer />
		</>
	);
}
