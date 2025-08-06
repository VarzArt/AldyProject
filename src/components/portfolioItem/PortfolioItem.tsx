'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type PortfolioItemProps = {
	name: string;
	type: string;
	year: number;
	src: StaticImageData;
};

export default function PortfolioItem({ name, type, year, src }: PortfolioItemProps) {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7 }}
				className="w-full xl:h-[540px] h-[480px] overflow-hidden"
			>
				<Image
					src={src}
					alt={`${name} company project`}
					className="w-full h-full rounded-xl transition-all duration-500 hover:scale-110 ease-in-out"
				></Image>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="flex justify-between items-center xl:pt-4 pt-2 relative"
			>
				<div className="font-medium xl:text-sm text-xs uppercase">{name}</div>
				<div className="font-medium xl:text-base text-sm opacity-40 absolute left-1/2 transform -translate-x-1/2 -bottom-[2px]">
					{type}
				</div>
				<div className="font-medium xl:text-sm text-xs opacity-40">{year}</div>
			</motion.div>
		</div>
	);
}
