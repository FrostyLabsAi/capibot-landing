'use client';

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
			{trustBar}
			<AICompanySection onJoinWaitlist={scrollToWaitlist} />
			{statsBar}
			<MessagingShowcase />
			<MissionControlShowcase />
			<MultiAgentSection />
			{toolsCapabilities}
			<SkillsIntegrations onJoinWaitlist={scrollToWaitlist} />
			{memoryIntelligence}
			{providersSection}
			<PricingSection onJoinWaitlist={scrollToWaitlist} />
			<FAQSection />
			<InstallCTA />
			<Footer />
		</>
	);
}
