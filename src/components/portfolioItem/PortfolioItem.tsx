import React from 'react';

type PortfolioItemProps = {
	name: string;
	type: string;
	year: number;
};

export default function PortfolioItem({ name, type, year }: PortfolioItemProps) {
	return (
		<div className="xl:even:mt-[270px] even:mt-[240px]">
			<div className="w-full xl:h-[540px] h-[480px] bg-[#E4E4EA] rounded-xl"></div>
			<div className="flex justify-between items-center xl:pt-4 pt-2 relative">
				<div className="font-medium xl:text-sm text-xs uppercase">{name}</div>
				<div className="font-medium xl:text-base text-sm opacity-40 absolute left-1/2 transform -translate-x-1/2 -bottom-[2px]">
					{type}
				</div>
				<div className="font-medium xl:text-sm text-xs opacity-40">{year}</div>
			</div>
		</div>
	);
}
