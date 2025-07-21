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
		<div className="px-[120px] py-[36px] flex justify-between items-center">
			<Image src={logo} alt={'mainLogo'}></Image>
			<div className="flex justify-between items-center gap-[60px]">
				<Navbar />
				<ButtonUi variant="primary">Let's talk</ButtonUi>
			</div>
		</div>
	);
}
