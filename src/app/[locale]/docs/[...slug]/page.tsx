import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const docs: Record<string, () => Promise<{ default: React.ComponentType }>> = {
	// Core Concepts
	'index': () => import('@/content/docs/en/index.mdx'),
	'architecture': () => import('@/content/docs/en/architecture.mdx'),
	'ai-companies': () => import('@/content/docs/en/ai-companies.mdx'),
	'agent-hierarchy': () => import('@/content/docs/en/agent-hierarchy.mdx'),
	'task-workflow': () => import('@/content/docs/en/task-workflow.mdx'),
	
	// Mission Control Guide
	'dashboard-overview': () => import('@/content/docs/en/dashboard-overview.mdx'),
	'managing-agents': () => import('@/content/docs/en/managing-agents.mdx'),
	'company-operations': () => import('@/content/docs/en/company-operations.mdx'),
	'task-management': () => import('@/content/docs/en/task-management.mdx'),
	'knowledge-memory': () => import('@/content/docs/en/knowledge-memory.mdx'),
	'monitoring': () => import('@/content/docs/en/monitoring.mdx'),
	'automation': () => import('@/content/docs/en/automation.mdx'),
	'integrations': () => import('@/content/docs/en/integrations.mdx'),
	'administration': () => import('@/content/docs/en/administration.mdx'),
	
	// Agent Tools Reference
	'skills': () => import('@/content/docs/en/skills.mdx'),
	'tool-categories': () => import('@/content/docs/en/tool-categories.mdx'),
	'company-tools': () => import('@/content/docs/en/company-tools.mdx'),
	'communication-tools': () => import('@/content/docs/en/communication-tools.mdx'),
	
	// Advanced Topics
	'working-with-companies': () => import('@/content/docs/en/working-with-companies.mdx'),
	'agent-performance': () => import('@/content/docs/en/agent-performance.mdx'),
	'security': () => import('@/content/docs/en/security.mdx'),
	
	// Deployment
	'self-hosted': () => import('@/content/docs/en/self-hosted.mdx'),

	// Legacy (for backwards compatibility)
	'getting-started': () => import('@/content/docs/en/getting-started.mdx'),
	'configuration': () => import('@/content/docs/en/configuration.mdx'),
};

export function generateStaticParams() {
	return Object.keys(docs).map((slug) => ({ slug: [slug] }));
}

export default async function DocPage({
	params,
}: {
	params: Promise<{ locale: string; slug: string[] }>;
}) {
	const { locale, slug } = await params;
	setRequestLocale(locale);

	const slugStr = slug.join('/');
	const loader = docs[slugStr];

	if (!loader) {
		notFound();
	}

	// Try locale-specific first, fall back to English
	let Content: React.ComponentType;
	try {
		const mod = await import(`@/content/docs/${locale}/${slugStr}.mdx`);
		Content = mod.default;
	} catch {
		try {
			const mod = await loader();
			Content = mod.default;
		} catch {
			notFound();
		}
	}

	return <Content />;
}
