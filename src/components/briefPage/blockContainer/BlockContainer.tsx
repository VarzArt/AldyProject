import { ScrollAnimation } from '@/components/ui';
import React, { ReactNode } from 'react';

type Props = {
	number: number;
	title: string;
	children: ReactNode;
	delay?: number;
};

export default function BlockContainer({ children, number, title, delay }: Props) {
	return (
		<div className="w-full flex flex-col justify-center items-start lg:gap-[20px] gap-[16px]">
			<ScrollAnimation className="font-[Satoshi] lg:text-[32px] text-[24px] text-white font-medium" delay={delay}>
				{number}. {title}
			</ScrollAnimation>
			<div className="flex flex-col justify-center items-start lg:gap-[40px] gap-[28px] w-full">{children}</div>
		</div>
	);
}
