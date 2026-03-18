import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		table: ({ children }) => (
			<div className="overflow-x-auto my-6">
				<table className="w-full border-collapse border border-[var(--sand-dark)]">
					{children}
				</table>
			</div>
		),
		thead: ({ children }) => (
			<thead className="bg-[var(--sand-light)]">{children}</thead>
		),
		tbody: ({ children }) => <tbody>{children}</tbody>,
		tr: ({ children }) => (
			<tr className="border-b border-[var(--sand-dark)] hover:bg-[rgba(198,93,59,0.05)]">{children}</tr>
		),
		th: ({ children }) => (
			<th className="border border-[var(--sand-dark)] px-4 py-3 text-left font-semibold text-[var(--espresso)]">
				{children}
			</th>
		),
		td: ({ children }) => (
			<td className="border border-[var(--sand-dark)] px-4 py-3 text-[var(--charcoal)]">
				{children}
			</td>
		),
	};
}
