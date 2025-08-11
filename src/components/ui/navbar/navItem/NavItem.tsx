'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type NavItemProps = {
	label: string;
	href: string;
};

export default function NavItem({ label, href }: NavItemProps) {
	const pathname = usePathname();
	const router = useRouter();

	const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const url = new URL(href, window.location.origin);
		const hash = url.hash?.slice(1);
		const isSamePath = url.pathname === pathname;

		if (hash && isSamePath) {
			e.preventDefault();
			const el = document.getElementById(hash);
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			return;
		}
	};

	return (
		<Link
			href={href}
			onClick={onClick}
			scroll={false}
			className="font-medium text-xs xl:text-sm uppercase text-(--textPrimary) hover:text-(--pinkPrimary) duration-150 ease-in-out cursor-pointer font-[Satoshi]"
		>
			{label}
		</Link>
	);
}
