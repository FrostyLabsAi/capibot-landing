'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';

const navLinks = [
	{ labelKey: 'features', id: 'features' },
	{ labelKey: 'agents', id: 'agents' },
	{ labelKey: 'integrations', id: 'integrations' },
	{ labelKey: 'pricing', id: 'pricing' },
];

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => {
	const baseClasses = mobile
		? 'text-left text-lg font-medium text-[var(--espresso)] cursor-pointer'
		: 'text-sm font-medium text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors cursor-pointer';
	
	if (href.startsWith('/')) {
		return (
			<Link href={href} className={baseClasses}>
				{children}
			</Link>
		);
	}
	
	return (
		<button onClick={() => {
			const el = document.getElementById(href);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}} className={baseClasses}>
			{children}
		</button>
	);
};

export function Nav() {
	const t = useTranslations('nav');
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Check if we're on the landing page (just /{locale} or /{locale}/)
	const isLandingPage = pathname === `/${locale}` || pathname === `/${locale}/`;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToSection = (id: string) => {
		if (isLandingPage) {
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
				setMobileMenuOpen(false);
			}
		} else {
			// Navigate to landing page with hash
			router.push(`/${locale}#${id}`);
			setMobileMenuOpen(false);
		}
	};

	const scrollToWaitlist = () => scrollToSection('waitlist');

	return (
		<nav className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					<Link href={`/${locale}`} className="flex items-center gap-3">
						<Image src="/capybara-icon.webp" alt="CapiBot" width={40} height={40} className="w-10 h-10 rounded-full" />
						<span className="font-semibold text-xl text-[var(--espresso)]" style={{ fontFamily: 'var(--font-heading)' }}>CapiBot</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<button
								key={link.id}
								onClick={() => scrollToSection(link.id)}
								className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors cursor-pointer"
							>
								{t(link.labelKey)}
							</button>
						))}
						<NavLink href={`/${locale}/docs`}>{t('docs')}</NavLink>

						{/* Locale Switcher */}
						<select
							value={locale}
							onChange={(e) => {
								const newLocale = e.target.value;
								window.location.pathname = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
							}}
							className="text-xs bg-transparent border border-[var(--sand-dark)]/30 rounded-full px-3 py-1.5 text-[var(--charcoal)] cursor-pointer"
						>
							{locales.map((l) => (
								<option key={l} value={l}>{localeNames[l as Locale]}</option>
							))}
						</select>

						<button
							onClick={scrollToWaitlist}
							className="btn-savannah btn-savannah-primary text-sm cursor-pointer"
						>
							{t('joinWaitlist')}
							<ArrowRight className="w-3.5 h-3.5" />
						</button>
					</div>

					<button
						className="md:hidden p-2 rounded-lg hover:bg-[var(--sand)] transition-colors cursor-pointer"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X className="w-6 h-6 text-[var(--espresso)]" /> : <Menu className="w-6 h-6 text-[var(--espresso)]" />}
					</button>
				</div>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden bg-[var(--warm-white)] border-t border-[var(--sand)] p-6">
					<div className="flex flex-col gap-4">
						{navLinks.map((link) => (
							<button
								key={link.id}
								onClick={() => scrollToSection(link.id)}
								className="text-left text-lg font-medium text-[var(--espresso)] cursor-pointer"
							>
								{t(link.labelKey)}
							</button>
						))}
						<NavLink href={`/${locale}/docs`} mobile>{t('docs')}</NavLink>
						<select
							value={locale}
							onChange={(e) => {
								const newLocale = e.target.value;
								window.location.pathname = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
							}}
							className="text-sm bg-transparent border border-[var(--sand-dark)]/30 rounded-lg px-3 py-2 text-[var(--charcoal)] cursor-pointer"
						>
							{locales.map((l) => (
								<option key={l} value={l}>{localeNames[l as Locale]}</option>
							))}
						</select>
						<button
							onClick={scrollToWaitlist}
							className="btn-savannah btn-savannah-primary text-sm w-full cursor-pointer mt-2"
						>
							{t('joinWaitlist')} <ArrowRight className="w-3.5 h-3.5" />
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
