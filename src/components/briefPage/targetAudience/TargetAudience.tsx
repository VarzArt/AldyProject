'use client';

import { InputTextareaUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { targetAudienceItems } from '@/components/briefPage/briefPage.constants';

type Values = { segments: string[]; other: string };
type Handlers = { segments: (v: string[] | string) => void; other: (v: string) => void };

type Props = { values: Values; onChange: Handlers };

export default function TargetAudience({ values, onChange }: Props) {
	return (
		<BlockContainer title="Target Audience" number={5}>
			<BlockChips items={targetAudienceItems} multiselect selected={values.segments} onChange={onChange.segments} />
			<ScrollAnimation className="w-full">
				<InputTextareaUi
					id="otherTarget"
					label="Other"
					value={values.other}
					onChange={onChange.other}
					isModal={false}
				/>
			</ScrollAnimation>
		</BlockContainer>
	);
}
