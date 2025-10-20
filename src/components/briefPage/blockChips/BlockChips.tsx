import { ChipsUi, ScrollAnimation, SubHeader } from '@/components/ui';
import React from 'react';

type ChipItem = { id: number; label: string; value: string };

type Props = {
	title?: string;
	items: ChipItem[];
	multiselect?: boolean;
	selected: string | string[];
	onChange: (selectedValue: string | string[]) => void;
};

export default function BlockChips({ title, items, multiselect = false, selected, onChange }: Props) {
	return (
		<div className="flex flex-col lg:gap-[24px] gap-[20px] justify-center items-start">
			{title && (
				<ScrollAnimation>
					<SubHeader text={title} needSlash={false} />
				</ScrollAnimation>
			)}
			<ChipsUi items={items} selected={selected} multiselect={multiselect} onChange={onChange} isModal={false} />
		</div>
	);
}
