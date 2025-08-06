import Link from 'next/link';
import React from 'react';

type NavItemProps = {
	label: string;
	href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
	return (
		<Link
			scroll={true}
			href={href}
			className="font-medium text-xs xl:text-sm uppercase text-(--textPrimary) hover:text-(--pinkPrimary) duration-150 ease-in-out cursor-pointer font-[Satoshi]"
		>
			{label}
		</Link>
	);
}
