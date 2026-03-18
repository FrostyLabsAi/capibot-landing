interface SectionHeaderProps {
	tag: { icon: React.ReactNode; label: string };
	heading: string;
	subheading?: string;
	centered?: boolean;
}

export function SectionHeader({ tag, heading, subheading, centered = false }: SectionHeaderProps) {
	return (
		<div className={`mb-16 lg:mb-24 ${centered ? 'text-center' : ''}`}>
			<div className={`tag mb-4 ${centered ? 'mx-auto w-fit' : ''}`}>
				{tag.icon}
				<span>{tag.label}</span>
			</div>
			<h2 className={`section-heading text-[var(--espresso)] mb-4 ${centered ? '' : 'max-w-2xl'}`}>
				{heading}
			</h2>
			{subheading && (
				<p className={`text-lg text-[var(--charcoal)] ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
					{subheading}
				</p>
			)}
		</div>
	);
}
