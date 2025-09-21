'use client';

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/LogoMain.png';
import { ButtonUi, MobileMenu, Navbar } from '@/components/ui';
import { useBriefModal } from '@/providers/ModalProvider';

type Props = {
	className?: string;
};

export default function Header({ className }: Props) {
	const { open } = useBriefModal();

	return (
		<div
			className="xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5 xl:py-9 sm:py-8 py-5 flex justify-between items-center"
			id="main"
		>
			<Image
				src={logo}
				alt={'mainLogo'}
				className="xl:w-[90px] xl:h-[36px] md:w-[64px] md:h-[26px] w-[80px] h-[30px]"
			></Image>
			<div className="flex justify-between items-center lg:gap-[60px] md:gap-10 gap-5">
				<div className="lg:block hidden">
					<Navbar />
				</div>
				<ButtonUi variant="primary" onClick={() => open({ source: 'header' })}>
					Let's talk
				</ButtonUi>
				<div className="lg:hidden">
					<MobileMenu />
				</div>
			</div>
		</div>
	);
}
