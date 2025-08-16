'use client';

import React from 'react';
import { servicesConsts } from './services.constants';
import { ButtonUi, Container, ScrollAnimation, ServiceItem } from '@/components';

type Props = {};

export default function Services({}: Props) {
	return (
		<section
			className=" bg-(--backSecondary) sm:rounded-t-[56px] rounded-t-[24px] flex justify-center sm:mt-[-56px] mt-[-24px]"
			id="services"
		>
			<Container className="xl:pt-[180px] lg:pt-[120px] sm:pt-[80px] pt-15 xl:pb-[236px] lg:pb-[216px] sm:pb-[176px] pb-[104px] xl:px-[120px] lg:px-[100px] md:px-[80px] sm:px-[28px] px-5">
				<div className="flex justify-between items-start sm:flex-row flex-col-reverse">
					<ScrollAnimation>
						<ButtonUi variant={'secondary'} className="sm:inline-flex hidden">
							Become a client
						</ButtonUi>
						<ButtonUi variant={'mobilePrimary'} className="sm:hidden inline-flex">
							Become a client
						</ButtonUi>
					</ScrollAnimation>
					<ScrollAnimation delay={1} className="md:w-[67%] sm:w-[63%] w-full">
						<div className=" xl:text-3xl lg:text-2xl text-xl font-medium text-black flex flex-col sm:block mb-10 sm:mb-0">
							<span className="xl:text-sm md:text-xs sm:text-[10px] text-xs opacity-60 uppercase lg:mr-[17%] sm:mr-[13.5%] mb-4 sm:mb-0 align-middle">
								/services
							</span>{' '}
							In our design studio, we adhere to a comprehensive approach to each project based on a deep understanding
							of your needs and goals. We believe that a successful project is the result of close cooperation, so we
							actively involve you at every stage, ensuring transparency and openness in your work.
						</div>
					</ScrollAnimation>
				</div>
				<div className="xl:pt-[140px] md:pt-[100px] sm:pt-[60px] pt-[80px] ml-0 sm:ml-[37%] md:ml-0">
					<ScrollAnimation>
						<div className="uppercase xl:text-sm text-xs font-medium text-(--pinkSecondary) opacity-60 ml-10 sm:ml-0">
							You can be here now
						</div>
					</ScrollAnimation>
					<div className="md:mt-6 mt-3 md:border-t md:border-l-0 border-l border-l-cyan-950/10 md:border-t-cyan-950/10 w-full md:pt-9 pt-0 flex md:flex-row flex-col justify-between items-start xl:gap-10 md:gap-8 gap-10">
						{servicesConsts.map((item, index) => (
							<ScrollAnimation
								key={item.id}
								delay={index * 0.5}
								className="md:w-[22.5%] sm:w-full w-[80%] md:ml-0 sm:ml-6 ml-10"
							>
								<ServiceItem name={item.name} desc={item.desc} isUserHere={item.isUserHere} />
							</ScrollAnimation>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
