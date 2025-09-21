import React from 'react';

type ServiceItemProps = {
	name: string;
	desc: string;
	explanation?: string;
	isUserHere: boolean;
};

export default function ServiceItem({ name, desc, explanation }: ServiceItemProps) {
	return (
		<div
			className={`py-10 xl:px-8 px-5 bg-white xl:h-[380px] h-[300px] w-full flex flex-col justify-start items-start xl:gap-5 gap-3`}
		>
			<div className="xl:text-[36px] lg:text-2xl text-4xl text-(--backPrimary) font-bold">{name.toUpperCase()}</div>
			<div className="xl:text-[22px] text-base text-(--pinkPrimary)">{`(${explanation})`}</div>
			<div className="xl:text-[24px] lg:text-[18px] text-xl font-medium leading-[110%] lg:w-full w-[280px] text-black mt-auto">
				{desc}
			</div>
		</div>
	);
}
