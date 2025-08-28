'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export type ModalProps = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
	closeOnOverlayClick?: boolean;
	closeOnEsc?: boolean;
	showCloseButton?: boolean;
	className?: string;
};

export default function Modal({
	open,
	onClose,
	children,
	closeOnOverlayClick = true,
	closeOnEsc = true,
	showCloseButton = true,
	className = '',
}: ModalProps) {
	const [mounted, setMounted] = useState(false);
	const prevFocusRef = useRef<HTMLElement | null>(null);
	const dialogRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		if (!open) return;
		prevFocusRef.current = document.activeElement as HTMLElement;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const t = setTimeout(() => dialogRef.current?.focus(), 0);
		const onKeyDown = (e: KeyboardEvent) => {
			if (closeOnEsc && e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = prevOverflow;
			document.removeEventListener('keydown', onKeyDown);
			clearTimeout(t);
			prevFocusRef.current?.focus?.();
		};
	}, [open, closeOnEsc, onClose]);

	if (!mounted) return null;

	const overlayCls = 'fixed inset-0 z-50 flex justify-center p-4 overflow-y-auto';
	const dialogCls =
		'relative w-full max-w-lg rounded-2xl bg-(--backPrimary) px-5 sm:px-[28px] pt-3 xl:pt-6 pb-4 xl:pb-8 shadow-xl outline-none h-max my-auto ' +
		className;

	const overlayClick = () => {
		if (closeOnOverlayClick) onClose();
	};

	return createPortal(
		<AnimatePresence>
			{open && (
				<motion.div
					className={overlayCls}
					onClick={overlayClick}
					aria-hidden
					initial={{ opacity: 0, backgroundColor: 'rgba(0,0,0,0)' }}
					animate={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0.9)' }}
					exit={{ opacity: 0, backgroundColor: 'rgba(0,0,0,0)' }}
					transition={{ duration: 0.18, ease: 'easeOut' }}
				>
					<motion.div
						role="dialog"
						aria-modal="true"
						className={dialogCls}
						onClick={(e) => e.stopPropagation()}
						ref={dialogRef}
						tabIndex={-1}
						initial={{ y: 8, opacity: 0, scale: 0.98 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 8, opacity: 0, scale: 0.98 }}
						transition={{ duration: 0.18, ease: 'easeOut' }}
					>
						{showCloseButton && (
							<button
								type="button"
								aria-label="Закрыть модальное окно"
								onClick={onClose}
								className="absolute right-2 sm:right-5 top-2 sm:top-5 inline-flex h-9 w-9 items-center justify-center rounded-full cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out"
							>
								<X size={16} />
							</button>
						)}
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	);
}
