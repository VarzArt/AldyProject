import { ScrollAnimation } from '@/components';
import React from 'react';

type AboutItemProps = {
	name: string;
	desc: string;
};

export default function AboutItem({ name, desc }: AboutItemProps) {
	return (
		<div className="flex flex-col xl:gap-[28px] lg:gap-[20px] gap-4">
			<ScrollAnimation>
				<div className="opacity-40 uppercase xl:text-sm md:text-xs sm:text-[10px] text-xs">{name}</div>
			</ScrollAnimation>
			<ScrollAnimation>
				<div className="xl:text-[32px] lg:text-[26px] text-xl font-medium leading-[140%]">{desc}</div>
			</ScrollAnimation>
		</div>
	);
}
