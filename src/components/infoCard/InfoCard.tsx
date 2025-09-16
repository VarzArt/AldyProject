'use client';

import React from 'react';
import { motion, useAnimation, useInView, UseInViewOptions } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useIsDesktop } from '@/hooks/useIsDesktop';

type InfoCardProps = {
	number: number;
	duration?: number;
	appearDelay?: number;
	appearDuration?: number;
	scrollOptions?: {
		once?: boolean;
		margin?: string;
	};
	info: {
		number: number;
		measure: string;
	};
	desc: string;
};

export default function ScrollTriggeredCounter({
	number,
	desc,
	info,
	duration = 1.5,
	scrollOptions = { once: true, margin: '0px 0px -50px 0px' },
	appearDelay = 0.3,
	appearDuration = 0.5,
}: InfoCardProps) {
	const isDesktop = useIsDesktop();
	const controls = useAnimation();
	const [count, setCount] = useState(0);
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, scrollOptions as UseInViewOptions);
	const animationRef = useRef<number | null>(null);

	const effectiveDelay = isDesktop ? appearDelay : 0;

	// Обработка появления элемента с задержкой
	useEffect(() => {
		if (!isInView) return;

		const timer = setTimeout(() => {
			setShouldAnimate(true);
		}, effectiveDelay * 1000);

		return () => clearTimeout(timer);
	}, [isInView, effectiveDelay]);

	useEffect(() => {
		if (!shouldAnimate) return;

		let start = 0;
		const increment = info.number / (duration * 60);

		const animate = () => {
			start += increment;
			if (start >= info.number) {
				setCount(info.number);

				controls.start({
					scale: [1, 1.1, 1],
					transition: { duration: 0.3 },
				});
				return;
			}
			setCount(Math.floor(start));
			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [shouldAnimate, info.number, duration, controls]);

	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={{
				opacity: isInView ? 1 : 0,
				y: isInView ? 0 : 20,
				transition: {
					duration: appearDuration,
					delay: isInView ? effectiveDelay : 0,
				},
			}}
			className="lg:px-8 px-5 xl:pt-6 lg:pt-5 pt-4 xl:pb-8 lg:pb-5 pb-3 bg-[#191919]/70 rounded-md xl:h-[270px] lg:h-[235px] md:h-[213px] h-[190px] flex flex-col justify-between items-start relative"
		>
			<div className="opacity-40 font-medium xl:text-sm md:text-xs text-[10px]">/0{number}</div>
			<div className="xl:text-[78px] lg:text-[70px] sm:text-[56px] text-[68px] font-bold absolute top-1/2 transform -translate-y-1/2">
				{count}
				{info.measure}
			</div>
			<div className="xl:text-[20px] text-base opacity-40 font-[300] xl:w-[195px] w-[150px] h-[45px] flex flex-col justify-center leading-[110%]">
				{desc}
			</div>
		</motion.span>
	);
}
