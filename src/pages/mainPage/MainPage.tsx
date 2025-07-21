import React from 'react';

type Props = {};

export default function MainPage({}: Props) {
	return (
		<section className="py-[100px] px-[120px] flex flex-col items-center font-[Satoshi]">
			<div className="flex items-center gap-[22px] z-1 relative before:absolute before:rounded-full before:w-6 before:h-6 before:opacity-20 before:bg-(--pinkPrimary) before:left-[-6px] pb-7">
				<div className="w-3 h-3 rounded-full bg-(--pinkPrimary)"></div>
				<div className="uppercase opacity-60">we are free for projects</div>
			</div>
			<div className="flex items-center justify-between w-full">
				<div className="opacity-80">2019</div>
				<div className="uppercase text-[128px] font-extrabold leading-[100%] tracking-[-2%] max-w-[1168px] text-center">
					digital design studi<span className="font-[Bosca]">o</span>
				</div>
				<div className="opacity-80">2025</div>
			</div>
			<div className="text-center w-[780px] pt-[60px] opacity-80 text-2xl font-normal">
				Welcome to our design studio, where creativity meets innovation. <br /> We specialize in transforming ideas into
				stunning visual experiences that resonate with your audience.
			</div>
			<div className="w-[1680] rounded-xl bg-(--pinkPrimary) h-[700px] mt-[135px]"></div>
			<div className="mt-[242px] flex justify-between w-full">
				<div className="uppercase font-extrabold text-[68px] w-[510px]">
					AB<span className="font-[Bosca]">o</span>UT <span className="font-[Bosca]">o</span>UR C
					<span className="font-[Bosca]">o</span>MPaNY
				</div>
				<div className="w-[840px] flex flex-col gap-[100px]">
					<div className="flex flex-col gap-[32px]">
						<div className="opacity-60">Who we are?</div>
						<div className="text-[36px] font-medium leading-[140%]">
							We are a design studio specializing in website development and branding. Our team of talented designers
							and developers creates unique visual solutions that reflect the individuality of each client.
						</div>
					</div>
					<div className="flex flex-col gap-[32px]">
						<div className="opacity-60">How we help?</div>
						<div className="text-[36px] font-medium leading-[140%]">
							We help companies stand out and communicate effectively with the audience. We develop functional websites
							and vivid visual identities that contribute to the growth of trust and loyalty to your brand. Our goal is
							to make your business more visible and successful in the digital space.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
