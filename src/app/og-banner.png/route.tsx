import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%)',
					fontFamily: 'system-ui, sans-serif',
				}}
			>
				{/* Capybara icon */}
				<img
					src="https://capibot.io/android-chrome-192x192.png"
					width={120}
					height={120}
					style={{ borderRadius: '50%', marginBottom: 24 }}
				/>

				{/* Title */}
				<div
					style={{
						fontSize: 56,
						fontWeight: 700,
						color: '#ffffff',
						marginBottom: 12,
						letterSpacing: '-1px',
					}}
				>
					CapiBot
				</div>

				{/* Subtitle */}
				<div
					style={{
						fontSize: 24,
						color: '#60a5fa',
						marginBottom: 32,
					}}
				>
					AI Agent Orchestration Platform
				</div>

				{/* Stats row */}
				<div
					style={{
						display: 'flex',
						gap: 48,
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div style={{ fontSize: 36, fontWeight: 700, color: '#34d399' }}>280+</div>
						<div style={{ fontSize: 16, color: '#9ca3af' }}>Agents</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div style={{ fontSize: 36, fontWeight: 700, color: '#34d399' }}>600+</div>
						<div style={{ fontSize: 16, color: '#9ca3af' }}>Skills</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div style={{ fontSize: 36, fontWeight: 700, color: '#34d399' }}>43+</div>
						<div style={{ fontSize: 16, color: '#9ca3af' }}>Tools</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<div style={{ fontSize: 36, fontWeight: 700, color: '#34d399' }}>16</div>
						<div style={{ fontSize: 16, color: '#9ca3af' }}>Templates</div>
					</div>
				</div>

				{/* Tagline */}
				<div
					style={{
						fontSize: 18,
						color: '#6b7280',
						marginTop: 32,
					}}
				>
					Private. Secure. Yours.
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
