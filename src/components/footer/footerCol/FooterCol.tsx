import { ScrollAnimation, SubHeader } from '@/components/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type FooterColProps = {
	name: string;
	tabs: {
		id: number;
		label: string;
		href?: string;
	}[];
	color: string;
};

export default function FooterCol({ name, tabs, color }: FooterColProps) {
	const pathname = usePathname();

	const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
		<div className="flex flex-col items-start xl:gap-10 md:gap-6 gap-3">
			<ScrollAnimation>
				<SubHeader text={name}></SubHeader>
			</ScrollAnimation>
			<div className="flex flex-col xl:gap-4 gap-3">
				{tabs.map((tab) => (
					<ScrollAnimation key={tab.id}>
						{tab.href ? (
							<Link
								href={tab.href}
								onClick={(e) => onLinkClick(e, tab.href as string)}
								className={`lg:text-xl sm:text-base text-xl font-medium ${
									color === 'pink' ? 'hover:text-(--pinkPrimary)' : 'hover:text-(--backSecondary)'
								} duration-150 ease-in-out cursor-pointer`}
							>
								{tab.label}
							</Link>
						) : (
							<div
								className={`lg:text-xl sm:text-base text-xl font-medium ${
									color === 'pink' ? 'hover:text-(--pinkPrimary)' : 'hover:text-(--backSecondary)'
								} duration-150 ease-in-out cursor-pointer`}
							>
								{tab.label}
							</div>
						)}
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
}
