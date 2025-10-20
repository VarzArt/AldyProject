'use client';

import { InputTextUi } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { colorItems, visualItems } from '@/components/briefPage/briefPage.constants';

type Values = { directions: string[]; colorMood: string; references: string };
type Handlers = {
	directions: (v: string[] | string) => void;
	colorMood: (v: string | string[]) => void;
	references: (v: string) => void;
};

type Props = { values: Values; onChange: Handlers };

export default function VisualStyle({ values, onChange }: Props) {
	return (
		<BlockContainer title="Visual Style" number={6}>
			<BlockChips
				title="preferred visual direction"
				items={visualItems}
				multiselect
				selected={values.directions}
				onChange={onChange.directions}
			/>
			<BlockChips title="color mood" items={colorItems} selected={values.colorMood} onChange={onChange.colorMood} />
			<InputTextUi
				id="references"
				label="References (Behance, Pinterest, websites)"
				value={values.references}
				onChange={onChange.references}
				isModal={false}
			/>
		</BlockContainer>
	);
}
