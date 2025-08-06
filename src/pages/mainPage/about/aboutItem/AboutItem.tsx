import { ScrollAnimation } from '@/components';
import React from 'react';

type AboutItemProps = {
	name: string;
	desc: string;
};

export default function AboutItem({ name, desc }: AboutItemProps) {
	return (
		<div className="flex flex-col xl:gap-[28px] gap-[20px]">
			<ScrollAnimation>
				<div className="opacity-40 uppercase xl:text-sm text-xs">{name}</div>
			</ScrollAnimation>
			<ScrollAnimation>
				<div className="xl:text-[32px] text-[26px] font-medium leading-[140%]">{desc}</div>
			</ScrollAnimation>
		</div>
	);
}
