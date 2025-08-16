import { ScrollAnimation, SubHeader } from '@/components/ui';
import React from 'react';

type FooterColProps = {
	name: string;
	tabs: {
		id: number;
		label: string;
	}[];
	color: string;
};

export default function FooterCol({ name, tabs, color }: FooterColProps) {
	return (
		<div className="flex flex-col items-start xl:gap-10 md:gap-6 gap-3">
			<ScrollAnimation>
				<SubHeader text={name}></SubHeader>
			</ScrollAnimation>
			<div className="flex flex-col xl:gap-4 gap-3">
				{tabs.map((tab) => (
					<ScrollAnimation key={tab.id}>
						<div
							className={`lg:text-xl sm:text-base text-xl font-medium ${
								color === 'pink' ? 'hover:text-(--pinkPrimary)' : 'hover:text-(--backSecondary)'
							} duration-150 ease-in-out cursor-pointer`}
						>
							{tab.label}
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
}
