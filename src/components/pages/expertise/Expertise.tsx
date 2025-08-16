import React from 'react';
import { expertiseConsts } from './expertise.constants';
import { Container, ExpertiseItem, ScrollAnimation, SubHeader } from '@/components';

type Props = {};

export default function Expertise({}: Props) {
	return (
		<section
			className="bg-(--backPrimary) sm:rounded-t-[56px] rounded-t-[24px] flex justify-center font-[Satoshi] sm:mt-[-56px] mt-[-24px]"
			id="expertise"
		>
			<Container className="lg:pt-[160px] sm:pt-[80px] pt-15 xl:pb-[236px] lg:pb-[216px] sm:pb-[176px] pb-[104px] xl:px-[120px] lg:px-[100px] md:px-[80px] sm:px-[28px] px-5 flex md:flex-row flex-col justify-between">
				<div className="flex-col">
					<ScrollAnimation>
						<SubHeader text={'expertise'}></SubHeader>
					</ScrollAnimation>
					<ScrollAnimation>
						<div className="lg:w-[280px] md:w-[240px] w-full lg:h-[360px] md:h-[320px] sm:mt-12 mt-5">
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
				<div className="md:w-[67%] w-full flex-col justify-center mt-10 md:mt-0">
					{expertiseConsts.map((item, index) => (
						<ScrollAnimation key={item.id} className="lg:py-10 py-7 first:pt-0 w-full border-b-cyan-50/10 border-b">
							<ExpertiseItem name={item.name} number={item.id} qualities={item.qualities} />
						</ScrollAnimation>
					))}
					<ScrollAnimation>
						<div className="xl:text-xl lg:text-[18px] text-base font-normal opacity-80 lg:mt-[86px] mt-[60px] xl:w-[53%] md:w-[59%] sm:w-[50%] w-full justify-self-start sm:ml-[37%] md:ml-[26%]">
							We transform ideas into vibrant digital projects — from branding to creating modern websites. Combining
							creativity and technology, we create solutions that enhance your brand and deliver results.
						</div>
					</ScrollAnimation>
				</div>
			</Container>
		</section>
	);
}
