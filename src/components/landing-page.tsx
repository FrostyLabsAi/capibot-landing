'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { AICompanySection } from '@/components/sections/AICompanySection';
import { StatsBar } from '@/components/sections/StatsBar';
import { MessagingShowcase } from '@/components/sections/MessagingShowcase';
import { MissionControlShowcase } from '@/components/sections/MissionControlShowcase';
import { MultiAgentSection } from '@/components/sections/MultiAgentSection';
import { ToolsCapabilities } from '@/components/sections/ToolsCapabilities';
import { SkillsIntegrations } from '@/components/sections/SkillsIntegrations';
import { MemoryIntelligence } from '@/components/sections/MemoryIntelligence';
import { ProvidersSection } from '@/components/sections/ProvidersSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { InstallCTA } from '@/components/sections/InstallCTA';
import { Footer } from '@/components/layout/footer';

export function LandingPage() {
	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToWaitlist = () => scrollToSection('waitlist');

	return (
		<>
			<HeroSection onScrollTo={scrollToSection} />
			<TrustBar />
			<AICompanySection onJoinWaitlist={scrollToWaitlist} />
			<StatsBar />
			<MessagingShowcase />
			<MissionControlShowcase />
			<MultiAgentSection />
			<ToolsCapabilities />
			<SkillsIntegrations onJoinWaitlist={scrollToWaitlist} />
			<MemoryIntelligence />
			<ProvidersSection />
			<PricingSection onJoinWaitlist={scrollToWaitlist} />
			<FAQSection />
			<InstallCTA />
			<Footer />
		</>
	);
}
