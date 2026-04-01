'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';
import { MessageSquare, Mic, Image, FileText, Hash, Phone } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ImageLightbox } from '@/components/shared/ImageLightbox';

const channelColors = ['#0088CC', '#25D366', '#4A154B', 'var(--terracotta)'];
const channelMockupClasses = ['chat-mockup-telegram', 'chat-mockup-whatsapp', 'chat-mockup-slack', 'chat-mockup-web'];
const channelScreenshots = [null, null, null, '/img/company_chat.webp'];

const channelFeatureIcons = [
	[<Mic key="0" className="w-4 h-4" />, <Image key="1" className="w-4 h-4" />, <FileText key="2" className="w-4 h-4" />, <MessageSquare key="3" className="w-4 h-4" />],
	[<Phone key="0" className="w-4 h-4" />, <Image key="1" className="w-4 h-4" />, <MessageSquare key="2" className="w-4 h-4" />, <FileText key="3" className="w-4 h-4" />],
	[<Hash key="0" className="w-4 h-4" />, <FileText key="1" className="w-4 h-4" />, <MessageSquare key="2" className="w-4 h-4" />, <Image key="3" className="w-4 h-4" />],
	[<MessageSquare key="0" className="w-4 h-4" />, <FileText key="1" className="w-4 h-4" />, <Mic key="2" className="w-4 h-4" />, <Image key="3" className="w-4 h-4" />],
];

const channelMessages: { role: 'user' | 'bot'; text: string }[][] = [
	[
		{ role: 'user', text: '\uD83C\uDFA4 Voice message (0:12)' },
		{ role: 'bot', text: 'Transcribed: "Schedule a meeting with the design team for Thursday at 2pm." Done \u2014 I\'ve created the event and notified the team.' },
		{ role: 'user', text: 'Perfect, also send them the brief from Drive' },
		{ role: 'bot', text: 'Found "Design Brief Q1.pdf" in Drive. Sent to #design-team on Slack and forwarded via email to 3 team members.' },
	],
	[
		{ role: 'user', text: "What's on my calendar today?" },
		{ role: 'bot', text: "You have 3 events:\n\n10:00 \u2014 Standup (30min)\n14:00 \u2014 Design Review\n16:30 \u2014 Client Call with Acme Corp\n\nWant me to prepare notes for the client call?" },
		{ role: 'user', text: 'Yes please, pull from the last 3 emails with them' },
		{ role: 'bot', text: "Done. I've compiled key points from your recent Acme correspondence and saved them to a doc. Sharing link now..." },
	],
	[
		{ role: 'user', text: '@capibot give me a status update on all active tasks' },
		{ role: 'bot', text: "Active Tasks (4):\n\n\u2705 API refactor \u2014 90% done\n\uD83D\uDD04 Dashboard redesign \u2014 in progress\n\u23F3 Payment integration \u2014 blocked\n\uD83D\uDCCB Docs update \u2014 assigned to Editor\n\nThe payment integration is blocked on API keys. Want me to notify the team lead?" },
	],
	[
		{ role: 'user', text: 'Research the top 5 competitors in the AI agent space and summarize their pricing' },
		{ role: 'bot', text: "I'll spawn a Researcher agent for this. Searching now...\n\nFound 5 key competitors. Writing summary to /workspace/research/competitors.md. I'll notify you when the full report is ready." },
	],
];

export function MessagingShowcase() {
	const [activeChannel, setActiveChannel] = useState(0);
	const t = useTranslations('messaging');

	const color = channelColors[activeChannel];

	return (
		<section id="channels" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<SectionHeader
					tag={{ icon: <MessageSquare className="w-3.5 h-3.5 text-[var(--terracotta)]" />, label: t('tag') }}
					heading={t('heading')}
					subheading={t('subheading')}
					centered
				/>

				{/* Channel Tabs */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{[0, 1, 2, 3].map((idx) => (
						<button
							key={idx}
							onClick={() => setActiveChannel(idx)}
							className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
								activeChannel === idx
									? 'text-white shadow-lg'
									: 'bg-white/70 text-[var(--charcoal)] hover:bg-white hover:shadow-md'
							}`}
							style={activeChannel === idx ? { backgroundColor: channelColors[idx] } : undefined}
						>
							{t(`channels.${idx}.name`)}
						</button>
					))}
				</div>

				{/* Channel Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left: Features */}
					<div>
						<h3
							className="text-2xl font-semibold text-[var(--espresso)] mb-6"
							style={{ fontFamily: 'Cormorant Garamond, serif' }}
						>
							{t(`channels.${activeChannel}.name`)} Integration
						</h3>
						<div className="space-y-4 mb-8">
							{[0, 1, 2, 3].map((fIdx) => (
								<div key={fIdx} className="flex items-start gap-3">
									<div
										className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
										style={{ backgroundColor: color }}
									>
										{channelFeatureIcons[activeChannel][fIdx]}
									</div>
									<span className="text-base text-[var(--charcoal)] leading-relaxed pt-1">
										{t(`channels.${activeChannel}.features.${fIdx}`)}
									</span>
								</div>
							))}
						</div>

						{/* Screenshot if available */}
						{channelScreenshots[activeChannel] && (
							<ImageLightbox src={channelScreenshots[activeChannel]!} alt={`${t(`channels.${activeChannel}.name`)} in Mission Control`} className="rounded-2xl overflow-hidden border border-[var(--sand-dark)]/20 shadow-lg">
														<NextImage
									src={channelScreenshots[activeChannel]!}
									alt={`${t(`channels.${activeChannel}.name`)} in Mission Control`}
									width={1200}
									height={800}
									loading="lazy"
									className="w-full h-auto"
								/>
							</ImageLightbox>
						)}
					</div>

					{/* Right: Chat Mockup */}
					<div>
						<div className={`chat-mockup ${channelMockupClasses[activeChannel]}`}>
							<div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/10">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
									style={{ backgroundColor: color }}
								>
									C
								</div>
								<div>
									<div className="text-sm font-semibold text-[var(--espresso)]">{t('chatHeader')}</div>
									<div className="text-xs text-[var(--charcoal)]/60">{t('online')}</div>
								</div>
							</div>
							<div className="space-y-3">
								{channelMessages[activeChannel].map((msg, idx) => (
									<div
										key={idx}
										className={`chat-msg ${msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}`}
										style={{ whiteSpace: 'pre-line' }}
									>
										{msg.text}
									</div>
								))}
								{/* Typing indicator */}
								<div className="chat-msg chat-msg-bot inline-flex items-center gap-1.5 py-3">
									<span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '0ms' }} />
									<span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '200ms' }} />
									<span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '400ms' }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
