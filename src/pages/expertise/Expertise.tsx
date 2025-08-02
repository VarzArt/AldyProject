import React from 'react';
import { expertiseConsts } from './expertise.constants';
import ExpertiseItem from '@/components/expertiseItem/ExpertiseItem';

type Props = {};

export default function Expertise({}: Props) {
	return (
		<section className="bg-(--backPrimary) pt-[160px] xl:pb-[236px] pb-[216px] xl:px-[120px] px-[100px] rounded-t-[56px] mt-[-56px] flex justify-between font-[Satoshi]">
			<div className="flex-col">
				<div className="uppercase xl:text-sm text-xs font-medium opacity-60">/expertise</div>
				<div className="w-[280px] h-[360px] rounded-xl bg-black mt-16"></div>
			</div>
			<div className="w-[67%] flex-col justify-center">
				{expertiseConsts.map((item) => (
					<ExpertiseItem key={item.id} name={item.name} number={item.id} qualities={item.qualities} />
				))}
				<div className="xl:text-xl text-[18px] font-normal opacity-80 mt-[86px] xl:w-[53%] w-[59%] justify-self-start ml-[26%]">
					We are a creative design studio dedicated to transforming ideas into stunning visual experiences. We are a
					creative design studio dedicated to transforming ideas into stunning visual experiences.
				</div>
			</div>
		</section>
	);
}
