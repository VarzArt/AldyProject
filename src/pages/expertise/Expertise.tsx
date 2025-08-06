import React from 'react';
import { expertiseConsts } from './expertise.constants';
import { ExpertiseItem, ScrollAnimation, SubHeader } from '@/components';

type Props = {};

export default function Expertise({}: Props) {
	return (
		<section
			className="bg-(--backPrimary) pt-[160px] xl:pb-[236px] pb-[216px] xl:px-[120px] px-[100px] rounded-t-[56px] mt-[-56px] flex justify-between font-[Satoshi]"
			id="expertise"
		>
			<div className="flex-col">
				<ScrollAnimation>
					<SubHeader text={'expertise'}></SubHeader>
				</ScrollAnimation>
				<ScrollAnimation>
					<div className="w-[280px] h-[360px] mt-12">
						<video
							height={'100%'}
							width={'100%'}
							controls={false}
							autoPlay
							loop
							playsInline
							muted
							disablePictureInPicture
							className="rounded-xl"
						>
							<source src="/video/expertise.mp4" type="video/mp4" />
						</video>
					</div>
				</ScrollAnimation>
			</div>
			<div className="w-[67%] flex-col justify-center">
				{expertiseConsts.map((item, index) => (
					<ScrollAnimation key={item.id} className="py-10 first:pt-0 w-full border-b-cyan-50/10 border-b">
						<ExpertiseItem name={item.name} number={item.id} qualities={item.qualities} />
					</ScrollAnimation>
				))}
				<ScrollAnimation>
					<div className="xl:text-xl text-[18px] font-normal opacity-80 mt-[86px] xl:w-[53%] w-[59%] justify-self-start ml-[26%]">
						We are a creative design studio dedicated to transforming ideas into stunning visual experiences. We are a
						creative design studio dedicated to transforming ideas into stunning visual experiences.
					</div>
				</ScrollAnimation>
			</div>
		</section>
	);
}
