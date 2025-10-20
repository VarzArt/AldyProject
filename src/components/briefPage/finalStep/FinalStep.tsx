'use client';

import { CheckboxUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '../blockContainer';

type Props = {
	checked: boolean;
	onChange: (v: boolean) => void;
	errorAgree?: string;
};

export default function FinalStep({ checked, onChange, errorAgree }: Props) {
	return (
		<BlockContainer title="Final Step" number={12}>
			<ScrollAnimation className="w-full">
				<div className="flex flex-col gap-2">
					<CheckboxUi label="I agree to the processing of my personal data" checked={checked} onChange={onChange} />
					{errorAgree && <p className="text-sm text-red-400">{errorAgree}</p>}
				</div>
			</ScrollAnimation>
		</BlockContainer>
	);
}
