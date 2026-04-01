/**
 * Brand logos — all inlined to eliminate HTTP requests.
 * SVG logos are inline React SVG components.
 * Raster logos are base64 data URLs (48x48 WebP, ~1-2KB each).
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
		<svg viewBox="0 0 268 274" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="gl-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ff4541" /><stop offset="1" stopColor="#ff8c18" /></linearGradient>
				<linearGradient id="gl-e" x1="0" y1="0" x2="1" y2="0"><stop offset=".37" stopColor="#ff4e3a" /><stop offset="1" stopColor="#fdcd01" /></linearGradient>
			</defs>
			<path d="M236.9 78.8c-31.7 0-60.9 9.8-84.9 26.4-19 13.1-34.5 30.6-45 51-9.8 18.9-15.1 39.8-15.1 62.3 0 22.5 5.3 43.6 15.1 62.3v.1c10.3 19.9 25.4 37 43.7 50 16 11.4 44.7 26.6 84 26.6 22.6 0 42.7-4.1 60.4-11.6 12.8-5.5 24.1-12.6 34.3-21.8 13.5-12.1 24.1-27.1 31.3-44.4 7.2-17.3 11.1-36.8 11.1-58 0-9.9-1-19.9-2.7-29h-134.3v53.4h77.2c-1.2 7.6-4 15-8.1 21.8-4.7 7.8-10.5 13.7-16.4 18.2-17.7 13.5-38.4 16.3-52.8 16.3-36.3 0-67.3-23.3-79.3-54.9-.5-1.1-.8-2.3-1.2-3.5-2.7-8.1-4.1-16.6-4.1-25.4 0-9.2 1.6-18.1 4.4-26.4 11.3-32.9 43-57.5 80.2-57.5 7.5 0 14.7.9 21.5 2.6 15.6 4 26.7 12 33.4 18.2l40.8-39.7c-24.8-22.6-57.2-36.3-95.8-36.3z" transform="translate(-91.9,-78.8)" fill="#4285F4" />
			<path d="M236.9 78.8c-31.7 0-60.9 9.8-84.9 26.4-19 13.1-34.5 30.6-45 51 9.8-18.9 39.8-39.8 62.3-39.8 15.5 0 38.5 11.6 64.1 11.6l-1-49.2z" transform="translate(-91.9,-78.8)" fill="#EA4335" />
			<path d="M152.1 155.2c18.9 6.1 28.5-7 43.2-13l-15.6-52.7c-9.4 3.9-18.3 8.8-26.5 14.5-12.3 8.5-23.2 18.9-32.2 30.7z" transform="translate(-91.9,-78.8)" fill="#EA4335" />
			<path d="M341.5 226.4l-28.3 19.3c-1.2 7.6-4 15-8.1 21.8-4.7 7.8-10.5 13.7-16.4 18.2-17.7 13.5-38.3 16.2-52.7 16.3 22.9.0 43.2-4.1 61-11.8 12.9-5.6 24.4-12.8 34.8-22.1 13.7-12.3 24.4-27.5 31.8-45 7.3-17.5 11.2-37.3 11.2-58.7z" transform="translate(-91.9,-78.8)" fill="#4285F4" />
			<path d="M171.1 290.2c-29.7 10.6-34.3 11-37.1 29.3 5.2 5.1 10.8 9.7 16.8 14 16 11.4 46.8 26.6 86.1 26.6l.1-.0v-59.2c-.0.0-.1.0-.1.0-14.7.0-26.5-3.8-38.6-10.5z" transform="translate(-91.9,-78.8)" fill="#34A853" />
			<path d="M92.1 220c.1 22.1 6.5 45 16.1 63.4v.1c7 13.4 16.4 24 27.3 34.5l65.3-23.7c-12.4-6.2-14.2-10.1-23.1-17-9.1-9.1-15.8-19.5-20-31.7z" transform="translate(-91.9,-78.8)" fill="#34A853" />
			<path d="M128.4 124.3c-8.4 9.1-15.6 19.3-21.2 30.4-9.8 18.9-15.1 41.8-15.1 64.3 0 .3.0.6.0.9 4.3 8.2 59.7 6.6 62.5.0-.0-.3-.0-.6-.0-.9 0-9.2 1.6-16 4.4-24.4 3.5-10.3 9.1-19.8 16.1-27.9z" transform="translate(-91.9,-78.8)" fill="#FBBC05" />
			<path d="M235 191.2v57.5h136c1.2-7.9 5.2-18.1 5.2-26.5 0-9.9-1-21.9-2.7-31z" transform="translate(-91.9,-78.8)" fill="#4285F4" />
		</svg>
	);
}

export function PostgreSQLLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="data:image/webp;base64,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"
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
			src="data:image/webp;base64,UklGRuAEAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSD0BAAABgFvbthvlvERV4H0myvGUMDaE6cEtykHp2BZEByx94a1eMsjcCiJiAqwicHw9TB5f3V/SZHR9BFiDsNmdfXjp92lvE+qCvfGT15hN9qEWotvMaw53EdUgnnuDi1OoAOfBGw1nUArahTdctKAEtF2wDSXO/hT+zv8jDi4ZYtYQrVx0GbFm4LIDMGMv1wm7GNy78ATYzJWyDei7dB9mWnOOP7Q+T25c/HqsNn5QS1K1x2e110Kt0HtRe0nV0kQtGauNr9Vujj+1Po6Za82hp9WHjUwp3wQmSvdg7AadfA8zGOgMMDMjWqqsojVGHDRCjK3n/E/h7wz7j7ZCmxIGraKpog1WFs7yZsI5WHk4XTQxj8EqE92FurLbCKsT9idZHU/jPbCSVNzsTd/Lfcy6GzR9dD1K0mf3l/RheHVMdQBWUDggfAMAAFATAJ0BKjAAMAA+bS6TRyQiIaEnOA2wgA2JaQAV4B2Efyvnw+2HtL5gG0M+pX3P8sOQHaf/xWSg/Nv1Y1DP87/zvG30APyr/yfuA+I7/Q8o/zf/rvcD/lX9E/0v50fEl67/Q1/YY8kH5qDjScvcJfBcEKyMo+sR3sHl0ZZLtdC43HhRH3vuKaCj1z82GNUQWhmaUwTkMlZ6fuHqdY5aXaweeAAA/vthSGn//efR5UlQCXV+bVoKNRuH7Et5H+Wza3vxtfn0YECLrnpIeRDihnvU+x84/d0OIKw6uxep7vvJ13t2CIFEy81DP2xsnJnCCuN67szL5hPyfrzMd5+1PKBI4luk6sxLftz9Cz3T/C717wHyrrC6ptj/4Fo4VakGqKL+yT0jVCqyYUVlZ054Nn10FmRgu6nbiSkpCPp3g+0Vf6oazLKl/zyEM+LKHLb8j4WOLD8/UbY6Mn+DS53P8UYDDyQwF5JFAcsTrH/EWxyXozsUTwQLQA1hb3F694FwpM3daxEi07vw6H50EvNS3f5Jwv3lpfGRdj1oUZAstOO6aPefvcP/fmc4noAHohSXxPj/Jmt7kpv/rT7MhiuOI+MJXGrBiv65ei4LY//47ZkfmiAdJPSZb+hZLNr8GE4Hjqpgo6/V0ZPh5KqW/8RnR9Hl8dBJp8yezGMn+nMeF81WS1NN/9IBhearwpWjGsKjw1bJSIclo1fudjPpyyc040CN49I/KopUS1QB0GQ+i+9Taurf4SbBv5qzHV1+79m7PlsS3702l8bYaNaG17n+MIstNB3PHgpn/7RnHuGcUv+nf/jmBgMHXwEaf16+oM2LjFecikjAYA9AOmAg/wUM/k4lEuGDhYAP4lYOzOuF+6+1M1hrzpLSB+oOppCjP4lhyjTJB5a1x//yij1heYXr5IMnbIl+RfRW8fImP2Nfy9QaZPwKvS/Qr3wYPY79NV+7d35YY+C3/8qukDRA/oV3aogKm7K7hyoNiaa9jzL0Cx1O/mnehjHeKCIqTnwP4mHVZjHQE962xfH6U5MFs45c9etRg8conVdUR23gPdZ37FJWLxnEDuJYv8J52igTt5VP/xhza4ct2QGHu/vzCbNFSJkba6+PkceT316PCF/nagNPK6uy/gyi6r08DDkbM2sXsEgaJkiLbP+JUpj8MYE3c++rSXMANKxlASwAAAA="
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
			src="data:image/webp;base64,UklGRvgBAABXRUJQVlA4IOwBAABQCQCdASowADAAPm0wlUekIqIhKrqoAIANiWUAxY5sCVBDGfFZ9N+i91UEyRJnmUfMEqqMJ7noZiS/b3UF5aNi80VA+Xu+GFxyzMh5ZFdu7JGZ6AD+/3YlJ0hra3eL+1pOxkxdhCH7297KE45LIYp5huBX6ZZB3oPwjWF8S992TnAnrn4aOg+GPK0fpe0ASWEmajN2E5m+uZBf9ADmKphTyB4e8vAsU05Xbn9Rl8ruEAf8LqcL5J3LQn5whTX2PcenH0jGODxd/LqtdlJ/75cpU0tz2htHqswH8bAXdtjTojDLb3M9QR17CtUlbBdbyDThljSgw3dG8Y9w3cdmVWfdVPst6eezx9A+fXHTXDO5gsZWfAyf8GwWNh//h+V5EZ7drYYQNyYf2y5/kkuuiG/P2iGZJEztwuRzkQkvJEmjgv/kuJsrbmPvpeEOz3y2nW8WnVR9BTd/22qabPVJ8Fq+ahuYR1SoLP/6vbV/gr8/AKs9ZBHP1TdXL/Upqzzz8h97uy8QeehuzGun68XB4TC842DP09QKnGw62BhqVl5RMdsq0YY0mbrsv+umpIAksy1FGdlfTOyR5ccJEErBl4fym7KFQu490ZZM3akhOB5gNdTXyPGR+4iMFWgPpVC3KTU9uYUSdKpO3OAAAAA="
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
			src="data:image/webp;base64,UklGRtQCAABXRUJQVlA4IMgCAABQDwCdASowADAAPm00lUikIqIhI4oAgA2JZADNziAN4k8ma509AT5nj5kb5hjdCOG/0DiA+SDwgOZviy/4fpTZrPn7/r+4L/Hf61/vuwd6Ev7HKFZJDD/KDzFWq6vtLtzCdPxSVCtiE6yu7hi+EAXCZ6NNOqM1MlJoP0pWYf7ooYZAAAD+/zLJaDhPEpksgXj1wqHseKs50n/+Rvy5HTl1VA8WWxc2lm0M1F+szFf5dli79C4TxF4x7jOSzuY1sLjXTeCgr9bFzWksgShmf/e69VhxNu3aHRz/+unq41B+u4wmAeQxwkLpt9BkCJl7mMbVjYhbnz0lx1Eo8JPPpJXiXZcXfrie38qjvhW3YwFVCodW0KYRf3ZDfU/o4QjfaOzBffv8eAcRT5HtOIf2OL/67zOqRG95THmlYPpzIlzjoRH7+idT20LedEdjyI53d+tI/rKHDr3eiCAdpow0d9nywuNP+ZvqNE+KXIFgglP+GR8is5jCVtp0UD/LzZ8WRxjFaszZtIvUuk8414kLfCJNy2ry7Xsuo2uej/Tn1jNaZ0a9+57sC5EaB/+/7Rb8TC34Dt3rbX/pCQc1JPs4C2yY/9XeKH2JmSdE2xfwC67k3msxRLey7GJoqWRWlc8uHwLylCcd0UdETqhytszJ+qJ8IX6XKM4UFfVma0qpNqtrnvpTqEEuAUB8G94b1c2wTMJrWeoZ+DB8ki+/NlKioz6i0VBtChW/B3ejdDwWqRb2sJpKOQaN0Sfgv2P4/txof5NY8NhzqFTDb8F6fjeVheI/d+/79aE4S7M54q7t19BdTmmzAhyKtGNDh+br8a3ZPJ3nfSCAQkGBYr/3CWUxuWXV9z26gXu6vjF3JI8hUVYeuCUyfONFdD/A3bTRvYcd1yNl7uX7hQcaWaaUjSmJlLUWFuJXyhuDj/8SfBAYmZ5quoaW2NwoAAAA"
			alt="Puppeteer"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}

export function ComposioLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<svg viewBox="0 0 31.797 36.774" width={size} height={size} className={`object-contain ${className}`} xmlns="http://www.w3.org/2000/svg">
			<path d="M 31.152 10.36 L 10.432 6.123 C 9.786 5.992 9.116 6.158 8.605 6.574 C 8.095 6.991 7.798 7.614 7.797 8.273 L 7.797 28.426 C 7.798 29.085 8.095 29.709 8.606 30.125 C 9.116 30.542 9.787 30.707 10.433 30.576 L 31.152 26.339" fill="transparent" strokeWidth="1.05" stroke="rgb(0,0,0)" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M 15.15 2.716 C 15.15 0.769 17.14 -0.532 18.922 0.213 L 19.007 0.25 L 19.008 0.25 L 30.092 5.37 C 31.058 5.809 31.678 6.774 31.675 7.835 L 31.675 12.171 C 31.676 12.927 31.361 13.65 30.806 14.164 C 30.251 14.679 29.507 14.938 28.753 14.881 L 16.201 13.944 L 16.201 22.76 L 28.751 21.823 L 28.899 21.815 C 29.628 21.797 30.333 22.075 30.854 22.585 C 31.375 23.096 31.668 23.795 31.666 24.524 L 31.666 28.86 C 31.666 29.923 31.04 30.88 30.085 31.324 L 30.083 31.324 L 19.009 36.434 C 17.203 37.271 15.15 35.954 15.15 33.97 L 15.15 29.838 C 15.067 29.871 14.979 29.891 14.89 29.898 L 8.765 30.338 C 8.52 30.356 8.279 30.271 8.099 30.104 C 7.919 29.937 7.817 29.702 7.817 29.457 L 7.817 24.909 C 7.817 24.733 7.87 24.567 7.961 24.428 L 2.921 24.804 L 2.92 24.804 C 2.167 24.857 1.425 24.596 0.872 24.083 C 0.319 23.569 0.003 22.849 0 22.094 L 0 14.61 C 0 13.853 0.315 13.131 0.87 12.617 C 1.425 12.102 2.169 11.843 2.923 11.9 L 7.851 12.268 C 7.829 12.191 7.817 12.111 7.817 12.03 L 7.817 7.24 C 7.817 6.54 8.443 6.006 9.134 6.117 L 14.967 7.05 C 15.031 7.06 15.092 7.078 15.15 7.1 L 15.15 2.717 Z M 28.834 22.87 L 28.832 22.87 L 16.202 23.813 L 16.202 29.294 L 30.617 26.281 L 30.617 24.52 L 30.615 24.43 C 30.591 23.985 30.389 23.568 30.054 23.275 C 29.719 22.981 29.279 22.835 28.835 22.87 Z M 7.615 13.303 C 7.703 13.441 7.755 13.603 7.755 13.778 L 7.755 23.088 C 7.754 23.193 7.735 23.296 7.698 23.394 L 15.15 22.838 L 15.15 13.865 Z M 16.201 12.891 L 28.831 13.834 L 28.833 13.834 L 28.923 13.839 C 29.371 13.848 29.805 13.677 30.125 13.363 C 30.445 13.049 30.625 12.619 30.625 12.171 L 30.625 10.348 L 16.2 7.333 L 16.2 12.891 Z" fill="rgb(0,0,0)" />
		</svg>
	);
}

export function KimiLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="data:image/webp;base64,UklGRmoDAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSM8AAAABcFtr29K82Ca2VjxZgVk4dLqEzMChjWsJcXd/06WKCIZt24aR2m4P2MkNyk0ZMBp2nHYm8/35rfv5pJPGdsMAZOVREbq7On/tytUhPiCgkJ0pZgUID//mmaYJUZFQPBMtQoKWM8k1wD9TDaBtuGy0xplsw2ZjR2yihE3SYtMashlO2Uy3bLZHNsfz39Mj/fJzyu8Bfs/we4zfk/we5vc8f47w5xQCLj74c5Y/x+l7wg/2ENxVneX3LB0VL1VrVpg0R/n2+D5n+aiZhFbt6Q8AVlA4IHQCAADQDACdASowADAAPm0wlEckIqIhJypIgA2JZwDTo1EvWEfhzqeoCyNzw/GBxi94NBm9TDN39V+wJ+sP+79ar2Oegsrz+BF85kryU6DhOhdT9qv1PzbsCBR5UxfvoZXo5nUZuP1EHhwLlACRuw197AAA/v+SvyZOR+bpd/9DdfudTpcuWkxyk/baef818q5X6cDCryvCh/N3+Of/jks85iO4MmmWSz/Y5Lv/qjlQCuaVOPf0bFIXg7fvkY9kN6imefA6BSPTUef/c2OkfyAD2lfvBGMtd0u6vze+E3ZizUQh/98/6jif/J3X/fxAfx9hFikTHEs/+b+/F/1/0yf8wH84B24GdbRhpoxap53EvQRni+/pz8o3u67esq+yilD0SaSPMwkDfUj5Jerq3Bt06ojc44/ZEzMzl3z1Eu7SMhf3RCzATPB5dLaP3Uvndf6iuPFa2+EvjwnRvzGIkXr1GkHsJk+73q+YZM8HgovN3/49JWy+dOQZMldCBYLJz+xrbJb/+F+3zODt1MfnUehLZscmt8MW2rDYHkFcM+rZh3xbnlE/tTSYuxJ+voydGhtMkjgreEi9isW9ZUQ5NOMjKTCGv3XDL6XKfsNzl69MEYEjVj9sblPKDc8zOMQnSzh6DIOq7o17IXHhZkVzPgJTnltn86874KMDZa4QLV8cBIAqvu1NNhe1fj1aY5Mg7SDQ/by1pjE212aHJBzXkg/bZyouFK4L1NYj743oka/cJQ/IbCdHZwqbz6c5rP1ZiZ8KRJ2DBhJ7QAk6GCZ2nSodus6wfj3S2oXDY0I/oTC67G49zyeY+gqBWvmiEWcuT7kgCLAkAAAA"
			alt="Kimi"
			width={size}
			height={size}
			className={`object-contain rounded-md ${className}`}
		/>
	);
}

export function GLMLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<svg viewBox="0 0 30 30" width={size} height={size} className={`object-contain ${className}`} xmlns="http://www.w3.org/2000/svg">
			<rect x="1.49" y="1.49" width="27.03" height="27.03" rx="4" fill="#2D2D2D" stroke="#fff" strokeWidth="0.34" />
			<path d="M15.47,7.1l-1.3,1.85c-0.2,0.29-0.54,0.47-0.9,0.47h-7.1V7.09C6.16,7.1,15.47,7.1,15.47,7.1z" fill="#fff" />
			<polygon points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1" fill="#fff" />
			<path d="M14.53,22.91l1.31-1.86c0.2-0.29,0.54-0.47,0.9-0.47h7.09v2.33H14.53z" fill="#fff" />
		</svg>
	);
}

export function MiniMaxLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} className={`object-contain ${className}`} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="mm-fill" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#E2167E" /><stop offset="100%" stopColor="#FE603C" /></linearGradient>
			</defs>
			<path d="M16.278 2c1.156 0 2.093.927 2.093 2.07v12.501a.74.74 0 00.744.709.74.74 0 00.743-.709V9.099a2.06 2.06 0 012.071-2.049A2.06 2.06 0 0124 9.1v6.561a.649.649 0 01-.652.645.649.649 0 01-.653-.645V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v7.472a2.037 2.037 0 01-2.048 2.026 2.037 2.037 0 01-2.048-2.026v-12.5a.785.785 0 00-.788-.753.785.785 0 00-.789.752l-.001 15.904A2.037 2.037 0 0113.441 22a2.037 2.037 0 01-2.048-2.026V18.04c0-.356.292-.645.652-.645.36 0 .652.289.652.645v1.934c0 .263.142.506.372.638.23.131.514.131.744 0a.734.734 0 00.372-.638V4.07c0-1.143.937-2.07 2.093-2.07zm-5.674 0c1.156 0 2.093.927 2.093 2.07v11.523a.648.648 0 01-.652.645.648.648 0 01-.652-.645V4.07a.785.785 0 00-.789-.78.785.785 0 00-.789.78v14.013a2.06 2.06 0 01-2.07 2.048 2.06 2.06 0 01-2.071-2.048V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v3.8a2.06 2.06 0 01-2.071 2.049A2.06 2.06 0 010 12.9v-1.378c0-.357.292-.646.652-.646.36 0 .653.29.653.646V12.9c0 .418.343.757.766.757s.766-.339.766-.757V9.099a2.06 2.06 0 012.07-2.048 2.06 2.06 0 012.071 2.048v8.984c0 .419.343.758.767.758.423 0 .766-.339.766-.758V4.07c0-1.143.937-2.07 2.093-2.07z" fill="url(#mm-fill)" fillRule="nonzero" />
		</svg>
	);
}

export function QwenLogo({ className = '', size = 24 }: LogoProps) {
	return (
		<img
			src="data:image/webp;base64,UklGRrgEAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSJABAAABkGvblmlb8+DaNp5tG5n9Itu2babObNu2bfvaXkHVrtq1viAiJgDaTc/cu3Pnzp27G73AM/gZWY5kspysP0YzcKBqigKtZADsIdWMOgzaFynR4Tr16ls3qGCL+zZpFuTlWxf86WHHMDL6NlzHgfBPZmieDrCGDKdVkzksauSaoh0yVJg8derUqeOukPHijhLPa8R2j2Qk8Z0sRH7k89hfWE9sizsCQPV0PscgniC2KbUk6XzuQrqYT0FfSegzNvTKX0AfPjRH4j7NJ6UCAAcaF7GhXZBu4lPUBg4ACb/Z0E0nxKkaZaUGaLDE95lGiYkvEQK6FigZXivBXT5/JXVSdIoM7JCcIrbp1YUeJXzmA4DfE2L7IUyYQXz7wQFgjx1lNp1wQeyQb0ORzoXxU6dOnTY2Cg4Bm/VKSDO7KuQOSCv/MbUQ2lO1dN+GwaET+MxIWX/Y2P17WopiapnGJZcdSKhW1bpKpX1qBS1hvnKq0nZwXKKSUg4OBuEfFOaC51Cr535MMPvMqZMnT57e2wzaVlA4IAIDAACwDwCdASowADAAPm0qkkakIiGhKrqsAIANiWwAuznAvm4qPXfvxky/O1+c+27eGtwB55noA9AD9dusA9ADywvZO+2Zzuw2e5PM1VizLPHK+MOZcnvKzXgFAZNAV5YkVYtOWHAPJIslfQbO8h0Utf6uKhskFP5H3qO136dUS+OMrFioFqxdAAD+/zpBT6laFPB3cDwcEw3U3de/fXMxQhnPSL2dK87+fPxsZB2IN3z6s2TXG54IacmO8vix86F/8/r+4ntJPCdoYK2TA8lQ6xe2kj0oqVJeSzL0m6Fl/wXfC9l7cuUK6cfFtaiNsWJrXn9K02EHuYGJRmLIlRv9jQpEvttB5bIHJy8TzimL+Aa+zoZmmKgrjzdDuhuf3lqLhv2rBrJWPgoQX4TL2nNmlr71XD1G5jl4Lt9hr2FPf4zGdPXLYrikIbT/DXp7M78W6pb5RcpN59CoGo9nyAA88vqOAu+rimboFBZH3A5MqSK63N6gxsaq7O7f9hDfzw5bWKM0oTXckyosRjtM99D+tyP7H+qcLfBKa4ZPPb3eX7vzLIeTeeHc0VJc65WQhD0gs45W7yeF6Yyuc9xjsd9IJBKwYDcWG31OduwkNkJKG47q0VyE532IM1/yd/dbkod/5//32ckLtQUBxWDcooBWDLFAI03pmZPiNMWNwNXYc/FjgFR7OMih2jU9DwZG2FhwJ0voRm6XP4TVrb9HnffVTUIUw3fLjK3hLqnyGSL3i4JGXlj/boN8+oasm39ayGcJgOksB8dH8k4RKC/+z7VQMv6gw/EIDG5P+3fuHJ/3AGSEZK8xf9jP+XzeaP6mGznDxf1Vreyr2v/w0rRxmFkhibCsHilZCBI7i9JlikDrr5Op9Qn3VI6vEQ6kWPDqN1LV86maUOmZnuRZInNjo8QrVEJd8Zx5v3+Az1OdeEOQVULRjJ5hsHdn6BNzTq07bw94o3AE/R6nueVqS/2OAJKuTkQzmmicmzlPxhnuIpntLIiyFsdRbVBC3nWyc2oEt9HSVIAAAA=="
			alt="Qwen"
			width={size}
			height={size}
			className={`object-contain ${className}`}
		/>
	);
}
