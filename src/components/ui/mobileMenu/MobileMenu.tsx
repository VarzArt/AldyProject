'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navBarTabs } from '@/components/component.constants';
import { Heading } from '../heading';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Варианты анимации контейнера меню
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { when: 'beforeChildren', staggerChildren: 0.1 },
		},
		exit: { opacity: 0, transition: { when: 'afterChildren' } },
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	};

	const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
		const url = new URL(href, window.location.origin);
		const hash = url.hash?.slice(1);
		const isSamePath = url.pathname === pathname;

		if (hash && isSamePath) {
			e.preventDefault();
			const el = document.getElementById(hash);
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setIsOpen(false);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<div>
			{/* Кнопка-бургер / крестик */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
				className="relative z-50 p-3 rounded-full bg-(--backSecondary) pointer-events-auto"
			>
				{isOpen ? <X size={16} color="black" /> : <Menu size={16} color="black" />}
			</button>

			{/* Анимированное меню на весь экран */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						key="mobile-menu"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={containerVariants}
						className="fixed inset-0 z-40 bg-(--backPrimary) flex flex-col items-center justify-center pointer-events-auto"
					>
						<motion.ul className="flex flex-col items-center space-y-6 text-2xl">
							{navBarTabs.map((item) => (
								<motion.li key={item.href} variants={itemVariants}>
									<Link
										href={item.href}
										scroll={false}
										onClick={(e) => handleAnchorClick(e, item.href)}
										className="block"
									>
										<Heading
											text={item.label}
											className="text-[28px] text-white uppercase font-bold focus:text-(--pinkPrimary)"
										></Heading>
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</div>
	);
}
