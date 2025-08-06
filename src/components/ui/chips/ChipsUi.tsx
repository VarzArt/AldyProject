'use client';

import { useState } from 'react';
import type { FC } from 'react';
import ScrollAnimation from '../scrollAnimation/ScrollAnimation';

interface ChipItem {
	id: string | number;
	label: string;
	value: string;
}

interface ChipsRadioProps {
	items: ChipItem[];
	onChange: (selectedValue: string | string[]) => void;
	defaultSelected?: string | string[];
	className?: string;
	multiselect?: boolean;
}

const ChipsUi: FC<ChipsRadioProps> = ({
	items,
	onChange,
	defaultSelected = '',
	className = '',
	multiselect = false,
}) => {
	const [selectedValues, setSelectedValues] = useState<string | string[]>(
		multiselect
			? Array.isArray(defaultSelected)
				? defaultSelected
				: defaultSelected
				? [defaultSelected]
				: []
			: defaultSelected
	);

	const handleSelect = (value: string) => {
		if (multiselect) {
			const currentValues = Array.isArray(selectedValues) ? selectedValues : [];
			const newValues = currentValues.includes(value)
				? currentValues.filter((v) => v !== value) // Удаляем если уже выбран
				: [...currentValues, value]; // Добавляем если не выбран

			setSelectedValues(newValues);
			onChange(newValues);
		} else {
			const newValue = selectedValues === value ? '' : value;
			setSelectedValues(newValue);
			onChange(newValue);
		}
	};

	const isSelected = (value: string) => {
		return multiselect ? Array.isArray(selectedValues) && selectedValues.includes(value) : selectedValues === value;
	};

	return (
		<div className={`flex flex-wrap gap-2 ${className}`}>
			{items.map((item, index) => (
				<ScrollAnimation key={item.id} delay={index * 0.5}>
					<button
						type="button"
						onClick={() => handleSelect(item.value)}
						className={`
              px-[28px] xl:py-[11px] py-[9px] rounded-full border transition-all xl:text-[19px] text-[18px]
              ${
								isSelected(item.value)
									? 'bg-(--pinkPrimary) text-white border-transparent'
									: 'bg-transparent text-white border-[#46464A] hover:bg-(--pinkPrimary)/50'
							}
            `}
					>
						{item.label}
					</button>
				</ScrollAnimation>
			))}
		</div>
	);
};

export default ChipsUi;
