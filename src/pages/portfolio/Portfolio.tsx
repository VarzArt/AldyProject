import React from 'react';
import { portfolioItemsConst } from './portfolio.constants';
import PortfolioItem from '@/components/portfolioItem/PortfolioItem';
import Heading from '@/components/ui/heading/Heading';

type Props = {};

export default function Portfolio({}: Props) {
	return (
		<section className="xl:pt-[160px] pt-[120px] xl:px-[120px] px-[100px] xl:pb-[236px] pb-[216px] rounded-t-[56px] bg-(--backSecondary) font-[Satoshi]">
			<Heading
				text="recent projects"
				className="xl:text-[64px] text-[54px] font-black text-black max-w-[470px] uppercase leading-[110%] [text-shadow:_-0.5px_-0.5px_0_#000,_0.5px_-0.5px_0_#000,_-0.5px_0.5px_0_#000,_0.5px_0.5px_0_#000]"
			></Heading>
			<div className="grid xl:grid-cols-[480px_50%] grid-cols-[400px_50%] justify-between text-black pt-[60px]">
				{portfolioItemsConst.map((item) => (
					<PortfolioItem key={item.id} name={item.name} type={item.type} year={item.year} />
				))}
				<div className="xl:mt-[280px] mt-[240px] xl:text-xl text-[18px] font-medium xl:w-[65%] w-[73%] opacity-80">
					Our portfolio includes landing pages, corporate sites, e-commerce, and full branding for clients across
					Europe. Each project reflects a thoughtful process and close collaboration.
				</div>
			</div>
		</section>
	);
}
