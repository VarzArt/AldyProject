import React from 'react';
import Heading from '../ui/heading/Heading';

type ExpertiseItemProps = {
	number: number;
	name: string;
	qualities: string[];
};

export default function ExpertiseItem({ number, name, qualities }: ExpertiseItemProps) {
	return (
		<div className=" flex justify-start">
			<div className="xl:text-sm text-xs font-medium opacity-60 pr-[24%]">/0{number}</div>
			<div>
				<Heading className="font-black xl:text-[64px] text-[54px] uppercase leading-[80%]" text={name}></Heading>
				<div className="pt-5 flex items-center gap-[13px] opacity-60 text-xs font-medium uppercase">
					{qualities.map((item, index) => (
						<div key={index} className="flex items-center">
							{item}
							{index < qualities.length - 1 && <div className="ml-[13px] w-1.5 h-1.5 rounded-full bg-white"></div>}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
