import React from 'react';
import { infoCardsConstants } from './mainPage.constants';
import InfoCard from '@/components/infoCard/InfoCard';
import Heading from '@/components/ui/heading/Heading';

type Props = {};

export default function MainPage({}: Props) {
	return (
		<section className="xl:pt-[60px] pt-10 xl:pb-[180px] pb-[160px] xl:px-[120px] px-[100px] flex flex-col items-center font-[Satoshi]">
			<div className="flex items-center xl:gap-[22px] gap-[14px] z-1 relative before:absolute before:rounded-full xl:before:w-6 before:w-4 xl:before:h-6 before:h-4 before:opacity-20 before:bg-(--pinkPrimary) xl:before:left-[-6px] before:left-[-4px] pb-7">
				<div className="xl:w-3 xl:h-3 w-2 h-2 rounded-full bg-(--pinkPrimary)"></div>
				<div className="uppercase opacity-60 xl:text-sm text-[13px]">we are free for projects</div>
			</div>
			<div className="flex items-center justify-between w-full">
				<div className="opacity-60 text-xs xl:text-sm pb-9">2019</div>
				<Heading
					text={`digital design \n studio`}
					className="uppercase xl:text-[112px] text-[98px] font-black leading-[100%] tracking-[-2%] max-w-[1168px] text-center whitespace-pre-line"
				></Heading>
				<div className="opacity-60 text-xs xl:text-sm pb-9">2025</div>
			</div>
			<div className="text-center w-[780px] xl:py-[60px] py-10 opacity-60 xl:text-xl text-[18px] font-normal">
				Welcome to our design studio, where creativity meets innovation. <br /> We specialize in transforming ideas into
				stunning visual experiences <br /> that resonate with your audience.
			</div>
			<div className=" border-t border-t-gray-300/10 border-b border-b-gray-300/10 xl:py-15 py-12 w-full">
				<div className="max-w-[1680] w-[100%] rounded-xl bg-(--pinkPrimary) xl:h-[700px] h-[560px]"></div>
			</div>
			<div className="xl:mt-[180px] mt-[140px] flex justify-center w-full">
				<div className="w-[50%]">
					<Heading
						text="about our company"
						className="uppercase font-extrabold text-[54px] xl:text-[64px] w-[510px] leading-[110%] xl:mt-15 mt-12"
					></Heading>
				</div>
				<div className="w-[50%] flex flex-col xl:gap-[80px] gap-15">
					<div className="flex flex-col xl:gap-[28px] gap-[20px]">
						<div className="opacity-40 uppercase xl:text-sm text-xs">Who we are?</div>
						<div className="xl:text-[32px] text-[26px] font-medium leading-[140%]">
							We are a design studio specializing in website development and branding. Our team of talented designers
							and developers creates unique visual solutions that reflect the individuality of each client.
						</div>
					</div>
					<div className="flex flex-col xl:gap-[28px] gap-[20px]">
						<div className="opacity-40 uppercase xl:text-sm text-xs">How we help?</div>
						<div className="xl:text-[32px] text-[26px] font-medium leading-[140%]">
							We help companies stand out and communicate effectively with the audience. We develop functional websites
							and vivid visual identities that contribute to the growth of trust and loyalty to your brand. Our goal is
							to make your business more visible and successful in the digital space.
						</div>
					</div>
				</div>
			</div>
			<div className="xl:pt-[140px] pt-[100px] flex justify-between items-center w-full font-[Satoshi]">
				{infoCardsConstants.map((infoCard) => (
					<InfoCard number={infoCard.id} infoNumber={infoCard.info} desc={infoCard.desc} key={infoCard.id}></InfoCard>
				))}
			</div>
		</section>
	);
}
