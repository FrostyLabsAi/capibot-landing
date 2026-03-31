/**
 * Brand logos using actual icon files from /public/img/.
 * AnthropicLogo keeps inline SVG since there's no icon file for it.
 */

interface LogoProps {
	className?: string;
	size?: number;
}

export function AnthropicLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
			<path d="M13.827 3.52h3.603L24 20.48h-3.603l-1.406-3.672H11.01l-1.406 3.672H6L13.827 3.52zm4.009 10.164-2.853-7.545-2.853 7.545h5.706z" />
		</svg>
	);
}

export function GoogleLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/google.svg"
			alt="Google"
			width={size}
			height={size}
			className={className}
		/>
	);
}

export function PostgreSQLLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/PostgreSQL_idG_UafUz7_0.png"
			alt="PostgreSQL"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function OllamaLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/ollama.png"
			alt="Ollama"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function LangChainLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/langchain-icon.png"
			alt="LangChain"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function PuppeteerLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/puppeteer.png"
			alt="Puppeteer"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function ComposioLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/Composio_Symbol_0.svg"
			alt="Composio"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function KimiLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/kimi-icon-rounded-corner.png"
			alt="Kimi"
			width={size}
			height={size}
			className={`object-contain rounded-md ${className}`}
		/>
	);
}

export function GLMLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/glm-icon.svg"
			alt="GLM"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function MiniMaxLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/minimax-color.svg"
			alt="MiniMax"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function QwenLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="/img/qwen-icon.png"
			alt="Qwen"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}
