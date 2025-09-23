import { Heading } from '@/components/ui';
import { Variants, motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import ImageUI from '@/components/ui/image/ImageUI';
import VideoUI from '@/components/ui/video/VideoUI';

type PortfolioModalContentProps = {
	title: string;
	desc: string;
	services: string[];
	year: number;
	srcs?: {
		mob: string;
		desc: string;
		type: 'photo' | 'video';
	}[];
};

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.12,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
	},
};

const fadeInVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function PortfolioModalContent({ title, desc, services, year, srcs }: PortfolioModalContentProps) {
	return (
		<motion.section
			className="py-15 px-5 sm:px-10 lg:px-30 lg:py-30 flex flex-col items-center"
			variants={containerVariants}
		>
			<motion.div variants={itemVariants} className="w-full flex justify-center items-center text-center">
				<Heading
					text={title as string}
					className="text-[40px] sm:text-[70px] lg:text-[98px] uppercase font-bold leading-[100%] lg:w-[85%] xl:max-w-[1000px]"
				/>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="font-[Satoshi] text-[16px] lg:text-[18px] w-[90%] sm:w-[70%] lg:w-[48%]  text-center opacity-80 mt-5 sm:mt-8 lg:mt-12"
			>
				{desc}
			</motion.div>

			<motion.div variants={itemVariants} className="mt-10 sm:mt-20 lg:mt-25 w-full">
				<div className="w-full flex justify-between items-center">
					<div className="text-xs sm:text-sm lg:text-[16px] flex justify-start gap-2">
						<p className="opacity-60">Services:</p>
						<span>{services?.join(', ')}</span>
					</div>
				</div>
				<motion.div variants={fadeInVariants} className="border-t-white/10 border-t w-full mt-3" />
			</motion.div>

			{Array.isArray(srcs) && srcs.length > 0 && (
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-[50%_50%] lg:[&>*:nth-child(3n+1)]:col-span-2 gap-1 sm:gap-2 lg:gap-3 w-full py-7"
					variants={containerVariants}
				>
					{srcs?.map((img, i) => (
						<motion.figure
							key={i}
							variants={itemVariants}
							className="relative w-full overflow-hidden h-100 sm:h-205 lg:h-180 xl:h-auto xl:min-h-[950px] rounded-md"
						>
							{img.type === 'photo' ? (
								<ImageUI
									aspect={{ mobile: '3 / 4', desktop: '16 / 9' }}
									mobile={{
										fallback: img.mob,
										srcset: [{ url: img.mob, w: 350 }],
										sizes: '(max-width: 1024px) 100vw, 100vw',
									}}
									desktop={{
										fallback: img.desc,
										srcset: [{ url: img.desc, w: 1200 }],
										sizes: '(min-width: 1024px) 100vw',
										media: '(min-width: 1024px)',
									}}
									alt={`case-${i}`}
									className="w-full h-full object-cover"
								/>
							) : (
								<VideoUI
									label="Axis showreel"
									className="overflow-hidden rounded-md h-full"
									videoClassName="rounded-md object-cover"
									aspect={{ mobile: '4 / 5', desktop: '16 / 9' }}
									mobile={{
										sources: [{ src: img.mob, type: 'video/mp4' }],
									}}
									desktop={{
										sources: [{ src: img.desc, type: 'video/webm' }],
									}}
									controls={false}
									autoPlay
									muted
									loop
									playsInline
									preload="none"
									autoPlayOnVisible
								/>
							)}
						</motion.figure>
					))}
				</motion.div>
			)}
		</motion.section>
	);
}
