'use client';

import { InputTextareaUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '../blockContainer';

type Props = {
	value: string;
	onChange: (v: string) => void;
};

export default function AdditionalNotes({ value, onChange }: Props) {
	return (
		<BlockContainer title="Additional Notes" number={11}>
			<ScrollAnimation className="w-full">
				<InputTextareaUi
					id="comment"
					label={'Any ideas or competitors you’re inspired by?'}
					value={value}
					onChange={onChange}
					isModal={false}
				/>
			</ScrollAnimation>
		</BlockContainer>
	);
}
