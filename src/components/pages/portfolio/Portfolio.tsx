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
			<Container className="xl:pt-[160px] lg:pt-[120px] sm:pt-20 pt-15 xl:px-[120px] lg:px-[100px] sm:px-20 px-5 xl:pb-[236px] lg:pb-[216px] sm:pb-[176px] pb-[104px]">
				<ScrollAnimation>
					<Heading
						text="recent projects"
						className="xl:text-[64px] lg:text-[54px] sm:text-[42px] text-4xl w-[300px] font-black text-black max-w-[470px] uppercase leading-[110%] [text-shadow:_-0.5px_-0.5px_0_#000,_0.5px_-0.5px_0_#000,_-0.5px_0.5px_0_#000,_0.5px_0.5px_0_#000]"
					></Heading>
				</ScrollAnimation>

				<div className="sm:grid xl:grid-cols-[480px_50%] lg:grid-cols-[400px_50%] sm:grid-cols-[320px_50%] flex flex-col justify-between text-black sm:pt-[60px] pt-5 gap-10">
					{portfolioItemsConst.map((item, index) => (
						<ScrollAnimation
							key={item.id}
							delay={index * 0.3 + 1}
							className='className="xl:even:mt-[270px] lg:even:mt-[240px] sm:even:mt-[210px]'
						>
							<PortfolioItem name={item.name} type={item.type} year={item.year} src={item.src} />
						</ScrollAnimation>
					))}
					<ScrollAnimation delay={portfolioItemsConst.length * 0.5}>
						<div className="xl:mt-[280px] lg:mt-[240px] sm:mt-[210px] mt-10 xl:text-xl lg:text-[18px] text-base font-medium xl:w-[65%] w-full opacity-80">
							Our portfolio includes landing pages, corporate sites, e-commerce, and full branding for clients across
							Europe. Each project reflects a thoughtful process and close collaboration.
						</div>
					</ScrollAnimation>
				</div>
			</Container>
		</section>
	);
}
