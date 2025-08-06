'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollAnimationProps = {
	children: React.ReactNode;
	delay?: number;
	className?: string;
};

export default function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 2,
				delay: delay * 0.15,
				ease: [0.16, 0.77, 0.47, 0.97],
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
