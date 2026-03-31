'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	BookOpen,
	Settings,
	ChevronRight,
	Layers,
	Building2,
	Users,
	ListTodo,
	LayoutGrid,
	Database,
	Activity,
	Clock,
	Puzzle,
	Shield,
	BarChart3,
	MessageSquare,
	Target,
	Sparkles,
	Server
} from 'lucide-react';
import { Footer } from '@/components/layout/footer';

const docsNavGroups = [
	{
		id: 'getting-started',
		label: 'Getting Started',
		items: [
			{ slug: '', icon: <BookOpen className="w-4 h-4" />, label: 'Introduction' },
		],
	},
	{
		id: 'core-concepts',
		label: 'Core Concepts',
		items: [
			{ slug: 'architecture', icon: <Layers className="w-4 h-4" />, label: 'Architecture' },
			{ slug: 'ai-companies', icon: <Building2 className="w-4 h-4" />, label: 'AI Companies' },
			{ slug: 'agent-hierarchy', icon: <Users className="w-4 h-4" />, label: 'Agent Hierarchy' },
			{ slug: 'task-workflow', icon: <ListTodo className="w-4 h-4" />, label: 'Task Workflow' },
		],
	},
	{
		id: 'mission-control',
		label: 'Mission Control',
		items: [
			{ slug: 'dashboard-overview', icon: <LayoutGrid className="w-4 h-4" />, label: 'Dashboard' },
			{ slug: 'managing-agents', icon: <Users className="w-4 h-4" />, label: 'Managing Agents' },
			{ slug: 'company-operations', icon: <Building2 className="w-4 h-4" />, label: 'Company Ops' },
			{ slug: 'task-management', icon: <ListTodo className="w-4 h-4" />, label: 'Task Management' },
			{ slug: 'knowledge-memory', icon: <Database className="w-4 h-4" />, label: 'Knowledge' },
			{ slug: 'monitoring', icon: <Activity className="w-4 h-4" />, label: 'Monitoring' },
			{ slug: 'automation', icon: <Clock className="w-4 h-4" />, label: 'Automation' },
			{ slug: 'integrations', icon: <Puzzle className="w-4 h-4" />, label: 'Integrations' },
			{ slug: 'administration', icon: <Settings className="w-4 h-4" />, label: 'Administration' },
		],
	},
	{
		id: 'agent-tools',
		label: 'Agent Tools',
		items: [
			{ slug: 'skills', icon: <Sparkles className="w-4 h-4" />, label: 'Skills' },
			{ slug: 'tool-categories', icon: <Target className="w-4 h-4" />, label: 'Tool Categories' },
			{ slug: 'company-tools', icon: <Building2 className="w-4 h-4" />, label: 'Company Tools' },
			{ slug: 'communication-tools', icon: <MessageSquare className="w-4 h-4" />, label: 'Communication' },
		],
	},
	{
		id: 'deployment',
		label: 'Deployment',
		items: [
			{ slug: 'self-hosted', icon: <Server className="w-4 h-4" />, label: 'Self-Hosted' },
		],
	},
	{
		id: 'advanced',
		label: 'Advanced',
		items: [
			{ slug: 'working-with-companies', icon: <Building2 className="w-4 h-4" />, label: 'Working with Companies' },
			{ slug: 'agent-performance', icon: <BarChart3 className="w-4 h-4" />, label: 'Performance' },
			{ slug: 'security', icon: <Shield className="w-4 h-4" />, label: 'Security' },
		],
	},
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	let currentGroup: (typeof docsNavGroups)[0] | null = null;
	let currentItem: (typeof docsNavGroups)[0]['items'][0] | null = null;
	for (const group of docsNavGroups) {
		for (const item of group.items) {
			const isActive = pathname.includes(`/docs/${item.slug}`) ||
				(item.slug === '' && pathname.endsWith('/docs'));
			if (isActive) {
				currentGroup = group;
				currentItem = item;
			}
		}
	}

	return (
		<>
			<div className="pt-24 pb-16 min-h-screen">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 xl:gap-10">

						{/* Sidebar */}
						<aside className="lg:sticky lg:top-24 lg:self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
							<div className="rounded-2xl border border-[rgba(44,24,16,0.08)] bg-white/60 backdrop-blur-sm shadow-[0_2px_16px_-4px_rgba(44,24,16,0.07),inset_0_1px_0_rgba(255,255,255,0.8)] p-3">
								<nav className="space-y-4">
									{docsNavGroups.map((group) => (
										<div key={group.id}>
											<h3 className="text-[10px] font-semibold text-[var(--espresso)]/40 mb-1 uppercase tracking-widest px-3 pt-1">
												{group.label}
											</h3>
											<div className="space-y-0.5">
												{group.items.map((item) => {
													const isActive = pathname.includes(`/docs/${item.slug}`) ||
														(item.slug === '' && pathname.endsWith('/docs'));
													return (
														<Link
															key={item.slug}
															href={`/docs/${item.slug}`}
															className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all ${
																isActive
																	? 'bg-[var(--terracotta)]/10 text-[var(--terracotta)] font-medium'
																	: 'text-[var(--charcoal)] hover:bg-[var(--sand-light)]/70 hover:text-[var(--espresso)]'
															}`}
														>
															<span className={isActive ? 'text-[var(--terracotta)]' : 'text-[var(--charcoal)]/40'}>
																{item.icon}
															</span>
															<span>{item.label}</span>
															{isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-50" />}
														</Link>
													);
												})}
											</div>
										</div>
									))}
								</nav>
							</div>
						</aside>

						{/* Content */}
						<main className="min-w-0">
							{/* Breadcrumb */}
							{currentGroup && currentItem && (
								<div className="flex items-center gap-1.5 text-xs text-[var(--charcoal)]/40 mb-4 px-1">
									<span>Docs</span>
									<ChevronRight className="w-3 h-3" />
									<span>{currentGroup.label}</span>
									<ChevronRight className="w-3 h-3" />
									<span className="text-[var(--terracotta)] font-medium">{currentItem.label}</span>
								</div>
							)}

							{/* Article card */}
							<div className="rounded-2xl border border-[rgba(44,24,16,0.07)] bg-white/70 backdrop-blur-sm shadow-[0_4px_32px_-8px_rgba(44,24,16,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] px-7 py-9 sm:px-10 sm:py-11">
								<article className="
									prose prose-base max-w-none
									prose-headings:font-semibold
									prose-headings:text-[var(--espresso)]
									prose-headings:tracking-tight
									prose-h1:text-2xl prose-h1:sm:text-3xl prose-h1:leading-tight prose-h1:mb-3
									prose-h2:text-lg prose-h2:sm:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:pb-2.5 prose-h2:border-b prose-h2:border-[rgba(44,24,16,0.08)]
									prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-[var(--charcoal)]
									prose-p:text-[var(--charcoal)] prose-p:leading-relaxed prose-p:text-[0.9375rem]
									prose-a:text-[var(--terracotta)] prose-a:no-underline prose-a:font-medium hover:prose-a:underline
									prose-strong:text-[var(--espresso)] prose-strong:font-semibold
									prose-code:text-[var(--terracotta-dark)] prose-code:bg-[var(--sand-light)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[0.82em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
									prose-pre:bg-[var(--espresso)] prose-pre:text-[var(--sand-light)] prose-pre:rounded-xl prose-pre:shadow-[0_8px_32px_-8px_rgba(44,24,16,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] prose-pre:border prose-pre:border-white/5
									prose-blockquote:border-l-2 prose-blockquote:border-[var(--terracotta)] prose-blockquote:bg-[var(--sand-light)]/50 prose-blockquote:rounded-r-xl prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:text-[var(--charcoal)]
									prose-ul:text-[var(--charcoal)] prose-ol:text-[var(--charcoal)]
									prose-li:text-[0.9375rem] prose-li:leading-relaxed
									prose-hr:border-[rgba(44,24,16,0.08)] prose-hr:my-8
								">
									{children}
								</article>
							</div>
						</main>

					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
