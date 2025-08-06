'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import arrow from '@/assets/images/arrow.png';
import { FormUi, Heading, ScrollAnimation } from '@/components';

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
		<section className="xl:pt-[160px] pt-[120px] xl:pb-[236px] pb-[216px] xl:px-[120px] px-[100px] bg-(--backPrimary) rounded-t-[56px] mt-[-56px] overflow-hidden relative font-[Satoshi] flex justify-center">
			<div className="w-[50%]">
				<ScrollAnimation>
					<Heading
						text="please tell us about your project"
						className="xl:text-[64px] text-[54px] font-black uppercase text-white leading-[110%] w-[80%]"
					></Heading>
				</ScrollAnimation>
			</div>
			<div className="z-10 relative w-[50%]">
				<FormUi></FormUi>
			</div>

			<div
				ref={arrowRef}
				className="absolute xl:-left-40 -left-35 xl:top-[330px] top-[267.5px] z-0 w-[50%] xl:h-[1161px] h-[1000px] cursor-pointer"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<ScrollAnimation>
					<Image
						src={arrow}
						alt="pink bubble arrow picture"
						className="transition-transform duration-300 ease-out w-full h-[65%]"
						style={{
							transform: `translate(${position.x}px, ${position.y}px)`,
						}}
					/>
				</ScrollAnimation>
			</div>
		</section>
	);
}
