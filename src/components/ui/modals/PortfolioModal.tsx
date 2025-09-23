'use client';

import { Variants, AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type PortfolioModalProps = {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	className?: string;
};

export type PortfolioModalOpenProps = {
	content?: React.ReactNode;
	className?: string;
};

const backdropVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.25, ease: 'easeOut', when: 'beforeChildren' },
	},
	exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const panelVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
	exit: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
};

const contentVariants = (delay: number): Variants => ({
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
	},
	exit: { opacity: 0, y: 16, transition: { duration: 0.2, ease: 'easeIn' } },
});

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ open, onClose, children, className }) => {
	const panelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!open) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = original;
		};
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open, onClose]);

	const portalTarget =
		typeof window !== 'undefined'
			? (document.getElementById('modal-root') as HTMLElement) ||
			  (() => {
					const el = document.createElement('div');
					el.id = 'modal-root';
					document.body.appendChild(el);
					return el;
			  })()
			: null;

	if (!portalTarget) return null;

	const renderCloseButton = () => {
		return (
			<button
				type="button"
				aria-label="Закрыть модальное окно"
				onClick={onClose}
				className="fixed right-2 sm:right-5 top-2 sm:top-5 inline-flex h-9 w-9 items-center justify-center rounded-full cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out z-100"
			>
				<X className="w-4 h-4 sm:w-6 sm:h-6" />
			</button>
		);
	};

	return createPortal(
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed inset-0 z-[1000]"
					role="dialog"
					aria-modal
					aria-label="Модальное окно кейса портфолио"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<motion.div className="fixed inset-0 bg-(--backPrimary)/90" aria-hidden onClick={onClose} />

					<motion.div
						ref={panelRef}
						className={
							'relative h-full w-full overflow-y-auto bg-(--backPrimary) ml-auto mr-auto max-w-[1920px]' +
							(className ?? '')
						}
						variants={panelVariants}
					>
						<div className="min-h-full">
							{renderCloseButton()}
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		portalTarget
	);
};

export default PortfolioModal;
