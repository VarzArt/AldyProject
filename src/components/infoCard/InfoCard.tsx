import React from 'react';

type InfoCardProps = {
	number: number;
	infoNumber: string;
	desc: string;
};

export default function InfoCard({ number, infoNumber, desc }: InfoCardProps) {
	return (
		<div className="px-8 xl:pt-6 pt-5 xl:pb-8 pb-5 bg-[#191919]/70 rounded-xl max-w-[550px] w-[32.8%] xl:h-[270px] h-[235px] flex flex-col justify-between items-start relative">
			<div className="opacity-40 font-medium xl:text-sm text-xs">/0{number}</div>
			<div className="xl:text-[78px] text-[70px] font-bold absolute top-1/2 transform -translate-y-1/2">
				{infoNumber}
			</div>
			<div className="xl:text-[20px] text-base opacity-40 font-[300] xl:w-[195px] w-[170px] h-[45px] flex flex-col justify-center leading-[110%]">
				{desc}
			</div>
		</div>
	);
}
