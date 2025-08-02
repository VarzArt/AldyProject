import React from 'react';
import Navbar from '../ui/navbar/Navbar';
import Image from 'next/image';
import logo from '@/assets/images/LogoMain.png';
import { navBarTabs } from './header.constants';
import NavItem from '../ui/navbar/navItem/NavItem';
import ButtonUi from '../ui/button/ButtonUi';

type Props = {
	className?: string;
};

export default function Header({ className }: Props) {
	return (
		<div className="xl:px-[120px] px-[100px] xl:pt-9 xl:pb-9 pt-8 pb-8 flex justify-between items-center">
			<Image src={logo} alt={'mainLogo'} className="xl:w-[86px] xl:h-[22px] w-[80px] h-[20px]"></Image>
			<div className="flex justify-between items-center gap-[60px]">
				<Navbar />
				<ButtonUi variant="primary">Let's talk</ButtonUi>
			</div>
		</div>
	);
}
