import React from 'react';
import { servicesConsts } from './services.constants';
import { ButtonUi, ScrollAnimation, ServiceItem } from '@/components';

type Props = {};

export default function Services({}: Props) {
	return (
		<section
			className="xl:pt-[180px] pt-[120px] xl:pb-[236px] pb-[216px] xl:px-[120px] px-[100px] bg-(--backSecondary) rounded-t-[56px] mt-[-56px]"
			id="services"
		>
			<div className="flex justify-between items-start">
				<ScrollAnimation>
					<ButtonUi variant="secondary">Become a client</ButtonUi>
				</ScrollAnimation>
				<ScrollAnimation delay={1} className="w-[67%]">
					<div className=" xl:text-3xl text-2xl font-medium text-black">
						<span className="xl:text-sm text-xs opacity-60 uppercase mr-[17%] align-top">/services</span> In our design
						studio, we adhere to a comprehensive approach to each project based on a deep understanding of your needs
						and goals. We believe that a successful project is the result of close cooperation, so we actively involve
						you at every stage, ensuring transparency and openness in your work.
					</div>
				</ScrollAnimation>
			</div>
			<div className="xl:pt-[140px] pt-[100px]">
				<ScrollAnimation>
					<div className="uppercase xl:text-sm text-xs font-medium text-(--pinkSecondary) opacity-60">
						You can be here now
					</div>
				</ScrollAnimation>
				<div className="mt-6 border-t border-t-cyan-950/10 w-full pt-9 flex justify-between items-start xl:gap-10 gap-8">
					{servicesConsts.map((item, index) => (
						<ScrollAnimation key={item.id} delay={index * 0.5} className="w-[22.5%]">
							<ServiceItem name={item.name} desc={item.desc} isUserHere={item.isUserHere} />
						</ScrollAnimation>
					))}
				</div>
			</div>
		</section>
	);
}
