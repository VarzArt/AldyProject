import React from 'react';
import { Container } from '@/components/ui';
import Image from 'next/image';
import logo from '@/assets/images/LogoMain.png';

type Props = {};

export default function HeaderS({}: Props) {
	return (
		<section className="w-full flex items-center flex-col">
			<Container className="xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5 xl:py-9 sm:py-8 py-5">
				<div className="flex justify-between items-center" id="main">
					<Image
						src={logo}
						alt={'mainLogo'}
						className="xl:w-[90px] xl:h-[36px] md:w-[64px] md:h-[26px] w-[80px] h-[30px]"
					></Image>
				</div>
			</Container>
		</section>
	);
}
