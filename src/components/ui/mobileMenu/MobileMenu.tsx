'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, MoveUpRight, X } from 'lucide-react';
import { navBarTabs } from '@/components/component.constants';
import { Heading } from '../heading';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SubHeader } from '@/components';

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

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
			<button
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
				className={clsx(
					'relative z-50 p-3 rounded-full pointer-events-auto',
					isOpen ? 'bg-transparent border border-white' : 'bg-(--backSecondary) border border-transparent'
				)}
			>
				{isOpen ? <X size={16} color="white" /> : <Menu size={16} color="black" />}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="mobile-menu"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={containerVariants}
						className="fixed inset-0 z-40 bg-(--backPrimary) flex flex-col items-center justify-end h-full"
					>
						<nav className="flex flex-col items-center justify-center pointer-events-auto absolute top-1/2 transform translate-y-[-50%]">
							<motion.ul className="flex flex-col items-center space-y-6 text-2xl">
								{navBarTabs.map((item) => (
									<motion.li key={item.href} variants={itemVariants}>
										<Link
											href={item.href}
											scroll={false}
											onClick={(e) => handleAnchorClick(e, item.href)}
											className="block relative"
										>
											{item.subheader && (
												<SubHeader text="04" className="absolute bottom-[5px] left-[-25px]"></SubHeader>
											)}
											<Heading
												text={item.label}
												className="text-[28px] text-white uppercase font-bold focus:text-(--pinkPrimary)"
											></Heading>
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</nav>
						<motion.div className="flex justify-center items-center gap-5">
							<motion.a
								href="https://www.linkedin.com/company/aldystudio/"
								className="p-3 rounded-full border border-white/20"
								variants={itemVariants}
							>
								<svg width="18" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.285156 4.5H3.625V16.875H0.285156V4.5ZM10.4805 4.5C9.85938 4.5 9.37598 4.61426 9.03027 4.84277C8.68457 5.07129 8.38281 5.28516 8.125 5.48438V4.5H4.76758V16.875H8.125V9.08789C8.125 9.08789 8.18066 8.83008 8.29199 8.31445C8.40332 7.79883 8.92773 7.54102 9.86523 7.54102C10.4277 7.54102 10.8408 7.68457 11.1045 7.97168C11.3682 8.25879 11.5 8.63086 11.5 9.08789V16.875H15.0332V9.19336C15.0332 8.13867 14.8516 7.30078 14.4883 6.67969C14.125 6.05859 13.6943 5.58691 13.1963 5.26465C12.6982 4.94238 12.1914 4.73438 11.6758 4.64062C11.1602 4.54688 10.7617 4.5 10.4805 4.5ZM0.25 1.6875C0.25 2.15625 0.414063 2.55469 0.742188 2.88281C1.07031 3.21094 1.46875 3.375 1.9375 3.375C2.40625 3.375 2.80469 3.21094 3.13281 2.88281C3.46094 2.55469 3.625 2.15625 3.625 1.6875C3.625 1.21875 3.46094 0.820312 3.13281 0.492188C2.80469 0.164062 2.40625 0 1.9375 0C1.46875 0 1.07031 0.164062 0.742188 0.492188C0.414063 0.820312 0.25 1.21875 0.25 1.6875Z"
										fill="white"
									/>
								</svg>
							</motion.a>
							<motion.a
								href="https://www.instagram.com/studioaldy/"
								className="p-3 rounded-full border border-white/20"
								variants={itemVariants}
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.3577 0H4.65032C1.73687 0 0 1.736 0 4.648V11.344C0 14.264 1.73687 16 4.65032 16H11.3497C14.2631 16 16 14.264 16 11.352V4.648C16.008 1.736 14.2711 0 11.3577 0ZM8.00399 11.104C6.29113 11.104 4.89844 9.712 4.89844 8C4.89844 6.288 6.29113 4.896 8.00399 4.896C9.71684 4.896 11.1095 6.288 11.1095 8C11.1095 9.712 9.71684 11.104 8.00399 11.104ZM12.7423 3.904C12.7023 4 12.6463 4.088 12.5743 4.168C12.4942 4.24 12.4062 4.296 12.3101 4.336C12.2141 4.376 12.11 4.4 12.006 4.4C11.7899 4.4 11.5898 4.32 11.4377 4.168C11.3657 4.088 11.3096 4 11.2696 3.904C11.2296 3.808 11.2056 3.704 11.2056 3.6C11.2056 3.496 11.2296 3.392 11.2696 3.296C11.3096 3.192 11.3657 3.112 11.4377 3.032C11.6218 2.848 11.9019 2.76 12.1581 2.816C12.2141 2.824 12.2621 2.84 12.3101 2.864C12.3582 2.88 12.4062 2.904 12.4542 2.936C12.4942 2.96 12.5342 3 12.5743 3.032C12.6463 3.112 12.7023 3.192 12.7423 3.296C12.7824 3.392 12.8064 3.496 12.8064 3.6C12.8064 3.704 12.7824 3.808 12.7423 3.904Z"
										fill="white"
									/>
								</svg>
							</motion.a>
						</motion.div>
						<motion.div className="flex justify-center items-center gap-5 mb-15 mt-15">
							<motion.a
								className="flex gap-1 items-center justify-center"
								variants={itemVariants}
								href="mailto:hello@aldystudio.com?subject=Бриф%20по%20проекту&body=Здравствуйте%2C%0AХочу%20обсудить%20проект."
							>
								<span className="text-[#9595A0] uppercase text-[13px]">hello@aldystudio.com</span>
								<MoveUpRight size={14} color="white" />
							</motion.a>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
