import React from 'react';
import { navBarTabs, socialMedia } from '../header/header.constants';
import ButtonUi from '../ui/button/ButtonUi';
import SubHeader from '../ui/subheader/SubHeader';

type Props = {};

export default function Footer({}: Props) {
	return (
		<section className="xl:pt-[160px] pt-[120px] xl:px-[120px] px-[100px] bg-(--backSecondary) rounded-t-[56px] mt-[-56px] overflow-hidden relative font-[Satoshi] text-black">
			<div className="flex justify-center">
				<div className="flex-col gap-6 items-start mr-auto">
					<SubHeader text="let's work"></SubHeader>
					<div className="border-b-black border-b-2 pb-1 w-max">
						<div className="xl:text-[48px] text-[40px] font-medium">hello@aldy.com</div>
					</div>
				</div>
				<div className="w-[50%] flex justify-between items-start">
					<div className="flex flex-col items-start xl:gap-10 gap-6">
						<SubHeader text="sitemap"></SubHeader>
						<div className="flex flex-col xl:gap-4 gap-3">
							{navBarTabs.map((tab) => (
								<div key={tab.id} className="text-xl font-medium">
									{tab.label}
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col items-start xl:gap-10 gap-6">
						<SubHeader text="socials"></SubHeader>
						<div className="flex flex-col xl:gap-4 gap-3">
							{socialMedia.map((tab) => (
								<div key={tab.id} className="text-xl font-medium">
									{tab.label}
								</div>
							))}
						</div>
					</div>
					<ButtonUi variant="subPrimary">Back to top</ButtonUi>
				</div>
			</div>
			<div className="flex justify-end xl:mt-[200px] mt-[120px] relative">
				<div className="xl:text-[295px] text-[245px] font-black uppercase leading-[80%] pr-2">ALDY</div>
				<div className="absolute rounded-full right-0 bottom-0 xl:w-10 xl:h-10 w-8 h-8 bg-(--pinkPrimary) after:absolute after:rounded-full after:right-[-19px] after:bottom-[-19px] xl:after:w-[78px] after:w-[70px] xl:after:h-[78px] after:h-[70px] after:bg-(--pinkPrimary) after:opacity-20"></div>
			</div>
			<div className="border-t border-t-cyan-950/10 w-full mt-14 xl:py-7 py-5 flex justify-between font-normal xl:text-[16px] text-[14px]">
				<div className="opacity-50">Privacy Policy</div>
				<div className="opacity-50 pl-21">Cookies Policy</div>
				<div className="opacity-50 xl:text-sm text-[13px]">©ALDY2024</div>
			</div>
		</section>
	);
}
