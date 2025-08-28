'use client';

import React from 'react';
import { aboutConstants, infoCardsConstants } from './mainPage.constants';
import AboutItem from './about/aboutItem/AboutItem';
import YearItem from './yearItem/YearItem';
import { Container, Heading, InfoCard, ScrollAnimation } from '@/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

type Props = {};

export default function MainPage({}: Props) {
	const isDesktop = useIsDesktop();

	return (
		<section className="font-[Satoshi] flex justify-center">
			<Container className="flex flex-col items-center xl:pt-[60px] pt-10 xl:pb-[180px] lg:pb-[160px] sm:pb-[120px] pb-[80px] xl:px-[120px] lg:px-[100px] md:px-[80] sm:px-[28px] px-5 ">
				<div className="flex items-center xl:gap-[22px] gap-[14px] z-1 relative before:absolute before:rounded-full xl:before:w-6 before:w-4 xl:before:h-6 before:h-4 before:opacity-20 before:bg-(--pinkPrimary) xl:before:left-[-6px] before:left-[-4px] pb-7">
					<div className="xl:w-3 xl:h-3 w-2 h-2 rounded-full bg-(--pinkPrimary)"></div>
					<div className="uppercase opacity-60 xl:text-sm text-[13px]">we are free for projects</div>
				</div>
				<div className="flex items-center justify-between w-full">
					<YearItem year="2019"></YearItem>
					<Heading
						text={`digital design \n studio`}
						className="uppercase xl:text-[112px] lg:text-[98px] md:text-[78px] sm:text-[68px] text-[40px] w-full font-black leading-[100%] tracking-[-2%] max-w-[1168px] text-center whitespace-pre-line"
					></Heading>
					<YearItem year="2025"></YearItem>
				</div>
				<div className="text-center xl:w-[580px] md:w-[540px] sm:w-[480px] w-full xl:py-[60px] sm:pb-10 md:pb-8 py-8 opacity-60 xl:text-xl lg:text-[18px] text-base font-normal">
					Welcome to our design studio, where creativity meets innovation. We specialize in transforming ideas into
					stunning visual experiences that resonate with your audience.
				</div>
				<div className=" border-t border-t-gray-300/10 border-b border-b-gray-300/10 xl:py-15 py-8 w-full flex justify-center">
					<div className="max-w-[1680] w-[100%] h-max">
						<video
							height={'100%'}
							width={'100%'}
							controls={false}
							autoPlay
							loop
							playsInline
							muted
							disablePictureInPicture
							className="rounded-xl md:block hidden"
						>
							<source src="/video/mainVideo.mp4" type="video/mp4" />
						</video>
						<video
							height={'100%'}
							width={'100%'}
							controls={false}
							autoPlay
							loop
							playsInline
							muted
							disablePictureInPicture
							className="rounded-xl block md:hidden"
						>
							<source src="/video/VIDEOMOBILE.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
				<div className="xl:mt-[180px] lg:mt-[140px] sm:mt-[100px] mt-[64px] flex justify-center w-full sm:flex-row flex-col">
					<div className="sm:w-[50%] w-full">
						<ScrollAnimation>
							<Heading
								text="about our company"
								className="uppercase font-extrabold lg:text-[54px] xl:text-[64px] sm:text-[42px] text-4xl lg:w-[510px] w-[360px] leading-[110%] xl:mt-15 md:mt-12 sm:mt-8 mt-0"
							></Heading>
						</ScrollAnimation>
					</div>
					<div className="sm:w-[50%] w-full flex flex-col xl:gap-[80px] lg:gap-15 gap-10 mt-10 sm:mt-0" id="about">
						{aboutConstants.map((aboutItem) => (
							<AboutItem key={aboutItem.id} name={aboutItem.name} desc={aboutItem.desc}></AboutItem>
						))}
					</div>
				</div>
				<div className="xl:pt-[140px] sm:pt-[100px] pt-20 md:flex justify-between items-center w-full font-[Satoshi] md:flex-row flex-col md:gap-0 gap-2 sm:grid sm:grid-cols-2">
					{infoCardsConstants.map((infoCard, index) => (
						<div key={infoCard.id} className="md:w-[32.8%] w-full">
							<InfoCard number={infoCard.id} info={infoCard.info} desc={infoCard.desc} appearDelay={index * 0.3} />
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
