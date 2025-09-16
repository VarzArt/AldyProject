import React from 'react';
import { Heading } from '@/components/ui';

type ExpertiseItemProps = {
	number: number;
	name: string;
	qualities: string[];
};

export default function ExpertiseItem({ number, name, qualities }: ExpertiseItemProps) {
	return (
		<div className="flex justify-start">
			<div className="xl:text-sm md:text-xs text-[10px] mt-1 sm:mt-0 font-medium opacity-60 sm:pr-[34%] md:pr-[24%] pr-5 hidden sm:block">
				/0{number}
			</div>
			<div>
				<Heading
					className="font-black xl:text-[64px] lg:text-[54px] sm:text-[42px] text-[34px] uppercase sm:leading-[80%] leading-[110%]"
					text={name}
				></Heading>
				<div className="pt-5 flex items-center gap-[8px] opacity-60 sm:text-xs text-[12px] font-medium uppercase flex-wrap leading-[10px]">
					{qualities.map((item, index) => (
						<div key={index} className="flex sm:items-center items-center w-max">
							{item}
							{index < qualities.length - 1 && (
								<div className="ml-[13px] sm:w-1.5 w-1 sm:h-1.5 h-1 rounded-full bg-white"></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
