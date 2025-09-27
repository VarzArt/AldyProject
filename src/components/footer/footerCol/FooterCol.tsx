import { ScrollAnimation, SubHeader } from '@/components/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type FooterColProps = {
	name: string;
	tabs: {
		id: number;
		label: string;
		href: string;
	}[];
	color: string;
};

function isExternalHref(href: string) {
	if (/^https?:\/\//i.test(href)) return true;
	if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return true;
	return false;
}

export default function FooterCol({ name, tabs, color }: FooterColProps) {
	const pathname = usePathname();

	const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith('#')) {
			e.preventDefault();
			const hash = href.slice(1);
			const el = document.getElementById(hash);
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			return;
		}

		try {
			const url = new URL(href, window.location.origin);
			const isSamePath = url.pathname === pathname;
			const hash = url.hash?.slice(1);

			if (hash && isSamePath) {
				e.preventDefault();
				const el = document.getElementById(hash);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				return;
			}
		} catch {}
	};

	return (
		<div className="flex flex-col items-start xl:gap-10 md:gap-6 gap-3">
			<ScrollAnimation>
				<SubHeader text={name} />
			</ScrollAnimation>

			<div className="flex flex-col xl:gap-4 gap-3">
				{tabs.map((tab) => {
					const external = isExternalHref(tab.href);
					const cls =
						`lg:text-xl sm:text-base text-xl font-medium ` +
						(color === 'pink' ? 'hover:text-(--pinkPrimary)' : 'hover:text-(--backSecondary)') +
						' duration-150 ease-in-out cursor-pointer';

					return (
						<ScrollAnimation key={tab.id}>
							{external ? (
								<a href={tab.href} target="_blank" rel="noopener noreferrer" className={cls}>
									{tab.label}
								</a>
							) : (
								<Link href={tab.href} onClick={(e) => onLinkClick(e, tab.href)} className={cls}>
									{tab.label}
								</Link>
							)}
						</ScrollAnimation>
					);
				})}
			</div>
		</div>
	);
}
