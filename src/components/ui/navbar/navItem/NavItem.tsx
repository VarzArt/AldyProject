import React from 'react';

type NavItemProps = {
	label: string;
};

export default function NavItem({ label }: NavItemProps) {
	return (
		<div className="font-medium text-xs xl:text-sm uppercase text-(--textPrimary) hover:text-(--pinkPrimary) duration-150 ease-in-out cursor-pointer font-[Satoshi]">
			{label}
		</div>
	);
}
