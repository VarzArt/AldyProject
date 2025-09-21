'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import ImageUI from '../ui/image/ImageUI';

type PortfolioItemProps = {
	name: string;
	type: string;
	year: number;
	src: string;
	shortName: string;
	srcDesc: string;
	onClick?: () => void;
};

export default function PortfolioItem({ name, type, year, src, srcDesc, shortName, onClick }: PortfolioItemProps) {
	return (
		<div onClick={onClick}>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7 }}
				className="w-full xl:h-[580px] lg:h-[480px] sm:h-[520px] overflow-hidden rounded-md h-[400px] relative"
			>
				<ImageUI
					alt={`${name} company project`}
					aspect={{ mobile: '3 / 4', desktop: '16 / 9' }}
					mobile={{
						fallback: src,
						srcset: [{ url: src, w: 350 }],
						sizes: '(max-width: 680px) 100vw, 100vw',
					}}
					desktop={{
						fallback: srcDesc,
						srcset: [{ url: srcDesc, w: 1200 }],
						sizes: '(min-width: 680px) 100vw',
						media: '(min-width: 680px)',
					}}
					className="w-full h-full rounded-md transition-all duration-500 hover:scale-110 ease-in-out object-cover"
				></ImageUI>
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
