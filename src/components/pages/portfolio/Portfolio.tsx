'use client';

import React from 'react';
import { portfolioItemsConst } from './portfolio.constants';
import { Container, Heading, PortfolioItem, ScrollAnimation } from '@/components';

type Props = {};

export default function Portfolio({}: Props) {
	return (
		<section
			className="sm:rounded-t-[56px] rounded-t-[24px] bg-(--backSecondary) font-[Satoshi] flex justify-center"
			id="portfolio"
		>
			<Container className="xl:pt-[160px] lg:pt-[120px] sm:pt-[80px] pt-15 xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5 xl:pb-[236px] lg:pb-[216px] sm:pb-[176px] pb-[104px]">
				<ScrollAnimation>
					<Heading
						text="recent projects"
						className="xl:text-[64px] lg:text-[54px] sm:text-[42px] text-4xl w-[300px] font-black text-black max-w-[470px] uppercase leading-[110%] [text-shadow:_-0.5px_-0.5px_0_#000,_0.5px_-0.5px_0_#000,_-0.5px_0.5px_0_#000,_0.5px_0.5px_0_#000]"
					></Heading>
				</ScrollAnimation>

				<div className="lg:grid lg:grid-cols-[50%_50%] flex flex-col justify-between text-black lg:pt-[60px] pt-5 gap-2 lg:gap-y-25 gap-y-10">
					{portfolioItemsConst.map((item, index) => (
						<ScrollAnimation key={item.id} delay={index * 0.3} className="">
							<PortfolioItem name={item.name} type={item.type} year={item.year} src={item.src} />
						</ScrollAnimation>
					))}
					<hr className="col-span-2 border-[#9595A0] opacity-10" />
					<ScrollAnimation className="lg:mt-[-40px]">
						<div className="flex justify-start items-center">
							<div className="bg-(--pinkPrimary) w-2 h-2 rounded-full mr-2"></div>
							<div className="uppercase xl:text-sm lg:text-xs sm:text-base text-sm font-medium">ABOUT</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation className="lg:mt-[-40px] mt-[-20px]">
						<div className="xl:text-xl lg:text-[18px] sm:text-2xl text-[18px] font-medium lg:w-[65%] w-full opacity-80 sm:ml-[50%] md:ml-0">
							Our portfolio includes landing pages, corporate sites, e-commerce, and full branding for clients across
							Europe. Each project reflects a thoughtful process and close collaboration.
						</div>
					</ScrollAnimation>
				</div>
			</Container>
		</section>
	);
}
