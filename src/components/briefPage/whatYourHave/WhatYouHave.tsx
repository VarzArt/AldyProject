'use client';

import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { projectGoalsAlreadyItems } from '@/components/briefPage/briefPage.constants';

type Props = {
	selected: string[];
	onChange: (v: string[] | string) => void;
};

export default function WhatYouHave({ selected, onChange }: Props) {
	return (
		<BlockContainer title="What You Already Have" number={9}>
			<BlockChips items={projectGoalsAlreadyItems} multiselect selected={selected} onChange={onChange} />
		</BlockContainer>
	);
}
