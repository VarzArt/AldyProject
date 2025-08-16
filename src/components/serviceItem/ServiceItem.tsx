import React from 'react';

type ServiceItemProps = {
	name: string;
	desc: string;
	isUserHere: boolean;
};

export default function ServiceItem({ name, desc, isUserHere }: ServiceItemProps) {
	return (
		<div
			className={`xl:max-w-[300px] max-w-[275px] w-full relative text-black after:absolute md:after:left-0 after:top-[5px] md:after:top-[-42px] sm:after:left-[-30px] after:left-[-36px] after:w-3 after:h-3 after:rounded-full ${
				isUserHere ? 'after:bg-(--pinkPrimary)' : 'after:bg-[#D4D4DB]'
			} before:absolute md:before:left-[-6px] before:top-[-1px] md:before:top-[-48px] before:left-[-52px] sm:before:left-[-36px] before:w-6 before:h-6 before:rounded-full ${
				isUserHere ? 'before:bg-(--pinkPrimary)' : 'before:bg-[#D4D4DB]'
			} before:opacity-20`}
		>
			<div className="xl:text-3xl lg:text-2xl text-xl font-medium">{name}</div>
			<div className="xl:text-[20px] lg:text-[18px] text-base font-medium opacity-40 xl:pt-[18px] pt-3 leading-[110%] xl:w-[90%] w-full">
				{desc}
			</div>
		</div>
	);
}
