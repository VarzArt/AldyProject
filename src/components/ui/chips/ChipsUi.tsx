'use client';

import { useState } from 'react';
import type { FC } from 'react';

interface ChipItem {
	id: string | number;
	label: string;
	value: string;
}

interface ChipsRadioProps {
	items: ChipItem[];
	onChange: (selectedValue: string) => void;
	defaultSelected?: string;
	className?: string;
}

const ChipsUi: FC<ChipsRadioProps> = ({ items, onChange, defaultSelected = '', className = '' }) => {
	const [selectedValue, setSelectedValue] = useState<string>(defaultSelected);

	const handleSelect = (value: string) => {
		setSelectedValue(value);
		onChange(value);
	};

	return (
		<div className={`flex flex-wrap gap-2 ${className}`}>
			{items.map((item) => (
				<button
					key={item.id}
					type="button"
					onClick={() => handleSelect(item.value)}
					className={`
            px-[28px] xl:py-[11px] py-[9px] rounded-full border transition-all xl:text-[19px] text-[18px]
            ${
							selectedValue === item.value
								? 'bg-(--pinkPrimary) text-white border-transparent'
								: 'bg-transparent text-white border-[#46464A] hover:bg-(--pinkPrimary)/50'
						}
          `}
				>
					{item.label}
				</button>
			))}
		</div>
	);
};

export default ChipsUi;
