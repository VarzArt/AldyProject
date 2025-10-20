'use client';

import { InputTextareaUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';

type Props = {
	value: string;
	onChange: (v: string) => void;
};

export default function AboutYourBusiness({ value, onChange }: Props) {
	return (
		<BlockContainer title="About Your Business" number={4}>
			<ScrollAnimation className="w-full">
				<InputTextareaUi
					id="companyBrief"
					label="Briefly describe what you do (1-2 sentences)"
					value={value}
					onChange={onChange}
					isModal={false}
				/>
			</ScrollAnimation>
		</BlockContainer>
	);
}
