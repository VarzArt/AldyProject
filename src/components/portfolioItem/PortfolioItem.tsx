'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useIsDesktop } from '@/hooks/useIsDesktop';

type PortfolioItemProps = {
	name: string;
	type: string;
	year: number;
	src: StaticImageData;
};

export default function PortfolioItem({ name, type, year, src }: PortfolioItemProps) {
	const isDesktop = useIsDesktop();

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7 }}
				className="w-full xl:h-[580px] lg:h-[480px] sm:h-[520px] overflow-hidden rounded-md h-[400px]"
			>
				<Image
					src={src}
					alt={`${name} company project`}
					className="w-full h-full rounded-md transition-all duration-500 hover:scale-110 ease-in-out object-cover"
				></Image>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="flex justify-between items-center xl:pt-4 pt-2 relative"
			>
				<div className="font-medium xl:text-sm lg:text-xs sm:text-[16px] text-[14px] uppercase">{name}</div>
				<div className="font-medium xl:text-base lg:text-sm sm:text-[16px] text-[14px] opacity-40 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:-bottom-[2px] sm:-bottom-[0]">
					{type}
				</div>
				<div className="font-medium xl:text-sm lg:text-xs sm:text-sm text-[10px] opacity-40 sm:block hidden">
					{year}
				</div>
			</motion.div>
		</div>
	);
}
