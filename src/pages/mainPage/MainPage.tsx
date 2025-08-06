'use client';

import React from 'react';
import { aboutConstants, infoCardsConstants } from './mainPage.constants';
import AboutItem from './about/aboutItem/AboutItem';
import YearItem from './yearItem/YearItem';
import { Heading, InfoCard, ScrollAnimation } from '@/components';

type Props = {};

export default function MainPage({}: Props) {
	return (
		<section className="xl:pt-[60px] pt-10 xl:pb-[180px] pb-[160px] xl:px-[120px] px-[100px] flex flex-col items-center font-[Satoshi]">
			<div className="flex items-center xl:gap-[22px] gap-[14px] z-1 relative before:absolute before:rounded-full xl:before:w-6 before:w-4 xl:before:h-6 before:h-4 before:opacity-20 before:bg-(--pinkPrimary) xl:before:left-[-6px] before:left-[-4px] pb-7">
				<div className="xl:w-3 xl:h-3 w-2 h-2 rounded-full bg-(--pinkPrimary)"></div>
				<div className="uppercase opacity-60 xl:text-sm text-[13px]">we are free for projects</div>
			</div>
			<div className="flex items-center justify-between w-full">
				<YearItem year="2019"></YearItem>
				<Heading
					text={`digital design \n studio`}
					className="uppercase xl:text-[112px] text-[98px] font-black leading-[100%] tracking-[-2%] max-w-[1168px] text-center whitespace-pre-line"
				></Heading>
				<YearItem year="2025"></YearItem>
			</div>
			<div className="text-center w-[780px] xl:py-[60px] py-10 opacity-60 xl:text-xl text-[18px] font-normal">
				Welcome to our design studio, where creativity meets innovation. <br /> We specialize in transforming ideas into
				stunning visual experiences <br /> that resonate with your audience.
			</div>
			<div className=" border-t border-t-gray-300/10 border-b border-b-gray-300/10 xl:py-15 py-12 w-full">
				<div className="max-w-[1680] w-[100%] xl:h-[700px] h-[560px]">
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
						<source src="/video/mainVideo.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div className="xl:mt-[180px] mt-[140px] flex justify-center w-full">
				<div className="w-[50%]">
					<ScrollAnimation>
						<Heading
							text="about our company"
							className="uppercase font-extrabold text-[54px] xl:text-[64px] w-[510px] leading-[110%] xl:mt-15 mt-12"
						></Heading>
					</ScrollAnimation>
				</div>
				<div className="w-[50%] flex flex-col xl:gap-[80px] gap-15" id="about">
					{aboutConstants.map((aboutItem) => (
						<AboutItem key={aboutItem.id} name={aboutItem.name} desc={aboutItem.desc}></AboutItem>
					))}
				</div>
			</div>
			<div className="xl:pt-[140px] pt-[100px] flex justify-between items-center w-full font-[Satoshi]">
				{infoCardsConstants.map((infoCard, index) => (
					<div key={infoCard.id} className="w-[32.8%]">
						<InfoCard number={infoCard.id} info={infoCard.info} desc={infoCard.desc} appearDelay={index * 0.3} />
					</div>
				))}
			</div>
		</section>
	);
}
