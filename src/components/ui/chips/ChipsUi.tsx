'use client';

import type { FC } from 'react';
import ScrollAnimation from '../scrollAnimation/ScrollAnimation';
import clsx from 'clsx';

interface ChipItem {
	id: string | number;
	label: string;
	value: string;
}

interface ChipsUiProps {
	items: ChipItem[];
	selected: string | string[];
	onChange: (selectedValue: string | string[]) => void;
	className?: string;
	multiselect?: boolean;
	isModal: boolean;
}

const ChipsUi: FC<ChipsUiProps> = ({ items, selected, onChange, className = '', multiselect = false, isModal }) => {
	const isSelected = (value: string) => {
		return multiselect ? Array.isArray(selected) && selected.includes(value) : selected === value;
	};

	const handleSelect = (value: string) => {
		if (multiselect) {
			const currentValues = Array.isArray(selected) ? selected : [];
			const newValues = currentValues.includes(value)
				? currentValues.filter((v) => v !== value)
				: [...currentValues, value];
			onChange(newValues);
		} else {
			const newValue = selected === value ? '' : value;
			onChange(newValue);
		}
	};

	return (
		<div className={clsx('flex flex-wrap gap-2', className)}>
			{items.map((item, index) => (
				<ScrollAnimation key={item.id} delay={index * 0.5}>
					<button
						type="button"
						onClick={() => handleSelect(item.value)}
						className={clsx(
							'rounded-full border transition-all',
							!isModal &&
								'lg:px-[28px] sm:px-5 px-[24px] xl:py-[11px] sm:py-[9px] py-[13px] xl:text-[19px] lg:text-[18px] sm:text-base text-[18px]',
							isModal && 'px-4 sm:px-5 py-2 lg:px-7 lg:py-2 text-[14px] sm:text-base lg:text-[18px] xl:text-[19px]',
							isSelected(item.value)
								? 'bg-(--pinkPrimary) text-white border-transparent'
								: 'bg-transparent text-white border-[#46464A] hover:bg-(--pinkPrimary)/50'
						)}
					>
						{item.label}
					</button>
				</ScrollAnimation>
			))}
		</div>
	);
};

export default ChipsUi;
