'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import arrow from '@/assets/images/arrow.png';
import { Container, FormUi, Heading, ScrollAnimation } from '@/components';

type Props = {};

export default function Brief({}: Props) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const arrowRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!arrowRef.current) return;

		const rect = arrowRef.current.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const mouseX = e.clientX - rect.left - centerX;
		const mouseY = e.clientY - rect.top - centerY;

		const maxDistance = 15;

		const moveX = -(mouseX / centerX) * maxDistance;
		const moveY = -(mouseY / centerY) * maxDistance;

		setPosition({
			x: Math.min(moveX, maxDistance),
			y: Math.max(Math.min(moveY, maxDistance), -maxDistance),
		});
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<section className=" bg-(--backPrimary) rounded-t-[24px] sm:rounded-t-[56px] overflow-hidden font-[Satoshi] flex justify-center mt-[-24px] sm:mt-[-56px]">
			<Container className="relative flex sm:flex-row flex-col justify-center xl:pt-[160px] lg:pt-[120px] sm:pt-[80px] pt-15 xl:pb-[236px] lg:pb-[216px] sm:pb-[124px] pb-[104px] xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5">
				<div className="sm:w-[50%] w-full h-[600px] sm:h-unset">
					<ScrollAnimation>
						<Heading
							text="please tell us about your project"
							className="xl:text-[64px] lg:text-[54px] sm:text-[42px] text-[36px] font-black uppercase text-white leading-[110%] w-[80%]"
						></Heading>
					</ScrollAnimation>
				</div>
				<div className="z-10 relative md:w-[50%] sm:w-[63%] w-full">
					<FormUi variant="page"></FormUi>
				</div>

				<div
					ref={arrowRef}
					className="absolute xl:-left-40 md:-left-35 sm:-left-55 right-25 xl:top-[330px] lg:top-[267.5px] sm:top-[240px] top-[155px] z-0 md:w-[50%] sm:w-[550px] w-[500px] xl:h-[1161px] h-[1000px] cursor-pointer"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					<ScrollAnimation>
						<Image
							src={arrow}
							alt="pink bubble arrow picture"
							className="transition-transform duration-300 ease-out sm:w-full sm:h-[65%] max-h-[620px] max-w-[710px] w-[600px] h-[500px]"
							style={{
								transform: `translate(${position.x}px, ${position.y}px)`,
							}}
						/>
					</ScrollAnimation>
				</div>
			</Container>
		</section>
	);
}
