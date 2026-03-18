'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageLightboxProps {
	src: string;
	alt: string;
	className?: string;
	children?: React.ReactNode;
}

function LightboxOverlay({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	return createPortal(
		<div
			className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center"
			onClick={onClose}
		>
			<button
				onClick={(e) => { e.stopPropagation(); onClose(); }}
				className="absolute top-4 right-4 z-[10001] w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors cursor-pointer shadow-lg border border-white/20"
			>
				<X className="w-6 h-6" />
			</button>

			<img
				src={src}
				alt={alt}
				style={{ maxWidth: '85vw', maxHeight: '80vh' }}
				className="object-contain rounded-lg shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			/>
		</div>,
		document.body,
	);
}

export function ImageLightbox({ src, alt, className = '', children }: ImageLightboxProps) {
	const [open, setOpen] = useState(false);
	const close = useCallback(() => setOpen(false), []);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className={`cursor-zoom-in block ${className}`}
			>
				{children}
			</button>

			{open && <LightboxOverlay src={src} alt={alt} onClose={close} />}
		</>
	);
}
