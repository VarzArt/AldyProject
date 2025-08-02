import React from 'react';

type ServiceItemProps = {
	name: string;
	desc: string;
	isUserHere: boolean;
};

export default function ServiceItem({ name, desc, isUserHere }: ServiceItemProps) {
	return (
		<div
			className={`xl:w-[275px] w-[300px] relative text-black after:absolute after:left-0 after:top-[-42px] after:w-3 after:h-3 after:rounded-full ${
				isUserHere ? 'after:bg-(--pinkPrimary)' : 'after:bg-[#D4D4DB]'
			} before:absolute before:left-[-6px] before:top-[-48px] before:w-6 before:h-6 before:rounded-full ${
				isUserHere ? 'before:bg-(--pinkPrimary)' : 'before:bg-[#D4D4DB]'
			} before:opacity-20`}
		>
			<div className="xl:text-3xl text-2xl font-medium">{name}</div>
			<div className="xl:text-[20px] text-[18px] font-medium opacity-40 xl:pt-[18px] pt-3 leading-[110%] xl:w-[90%] w-full">
				{desc}
			</div>
		</div>
	);
}
