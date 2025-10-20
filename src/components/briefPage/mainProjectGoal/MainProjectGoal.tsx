'use client';

import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { projectGoalsItems } from '@/components/briefPage/briefPage.constants';

type Props = {
	selected: string[];
	onChange: (v: string[] | string) => void;
};

export default function MainProjectGoal({ selected, onChange }: Props) {
	return (
		<BlockContainer title="Main Project Goal" number={3}>
			<BlockChips items={projectGoalsItems} multiselect selected={selected} onChange={onChange} />
		</BlockContainer>
	);
}
