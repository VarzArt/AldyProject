'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useIsDesktop } from '@/hooks/useIsDesktop';
// опционально:
import { useReducedMotion } from 'framer-motion';

type ScrollAnimationProps = {
	children: React.ReactNode;
	delay?: number; // порядковый номер/множитель
	className?: string;
	delayDesktop?: number; // базовая единица задержки на десктопе
	delayMobile?: number; // базовая единица задержки на мобилке
};

export default function ScrollAnimation({
	children,
	delay = 0,
	className = '',
	delayDesktop = 0.15,
	delayMobile = 0.06,
}: ScrollAnimationProps) {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const isDesktop = useIsDesktop(1024);
	const prefersReduced = useReducedMotion();

	const unit = isDesktop ? delayDesktop : delayMobile;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: prefersReduced ? 0 : isDesktop ? 1.1 : 0.9,
				delay: prefersReduced ? 0 : delay * unit,
				ease: [0.16, 0.77, 0.47, 0.97],
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
