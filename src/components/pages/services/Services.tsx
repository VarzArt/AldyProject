'use client';

import React from 'react';
import { servicesConsts } from './services.constants';
import { ButtonUi, Container, ScrollAnimation, ServiceItem } from '@/components';
import { useBriefModal } from '@/providers/ModalProvider';

type Props = {};

export default function Services({}: Props) {
	const { open } = useBriefModal();

	return (
		<section
			className=" bg-(--backSecondary) sm:rounded-t-[56px] rounded-t-[24px] flex justify-center sm:mt-[-56px] mt-[-24px]"
			id="services"
		>
			<Container className="xl:pt-[180px] lg:pt-[120px] sm:pt-[80px] pt-15 xl:pb-[236px] lg:pb-[216px] sm:pb-[124px] pb-[104px] xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5">
				<div className="flex justify-between items-start lg:flex-row flex-col-reverse">
					<ScrollAnimation>
						<ButtonUi
							variant={'secondary'}
							className="sm:inline-flex hidden"
							onClick={() => open({ source: 'services' })}
						>
							Become a client
						</ButtonUi>
						<ButtonUi
							variant={'mobilePrimary'}
							className="sm:hidden inline-flex"
							onClick={() => open({ source: 'services' })}
						>
							Become a client
						</ButtonUi>
					</ScrollAnimation>
					<ScrollAnimation delay={1} className="lg:w-[67%] w-full">
						<div className=" xl:text-3xl lg:text-2xl text-xl font-medium text-black flex flex-col sm:block mb-10 lg:mb-0">
							<span className="xl:text-sm md:text-xs sm:text-[10px] text-xs opacity-60 uppercase lg:mr-[17%] sm:mr-[16%] mb-4 sm:mb-0 align-middle">
								/services
							</span>{' '}
							In our design studio, we adhere to a comprehensive approach to each project based on a deep understanding
							of your needs and goals. We believe that a successful project is the result of close cooperation, so we
							actively involve you at every stage, ensuring transparency and openness in your work.
						</div>
					</ScrollAnimation>
				</div>
				<div className="xl:pt-[140px] pt-[40px] ml-0 sm:ml-[37%] md:ml-0">
					<div className="md:mt-6 mt-3 border-t border-t-[#9595a0]/10 w-full pt-10 flex lg:flex lg:flex-row flex-col justify-between items-center gap-y-3 lg:gap-y-10 sm:grid sm:grid-cols-[50%_50%] sm:gap-x-3 lg:gap-x-3">
						{servicesConsts.map((item, index) => (
							<ScrollAnimation key={item.id} delay={index * 0.5} className="lg:w-[24.5%] w-full">
								<ServiceItem
									name={item.name}
									desc={item.desc}
									explanation={item.explanation}
									isUserHere={item.isUserHere}
								/>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
