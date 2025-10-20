'use client';

import { InputTextUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { timelineItems } from '@/components/briefPage/briefPage.constants';

type Values = { timeline: string; budget: string };
type Handlers = { timeline: (v: string[] | string) => void; budget: (v: string) => void };
type Props = { values: Values; onChange: Handlers; errorTimeline?: string };

export default function TimelineBudget({ values, onChange, errorTimeline }: Props) {
	return (
		<BlockContainer title="Timeline & budget" number={10}>
			<div className="w-full">
				<BlockChips
					title={errorTimeline ? `project timeline — ${errorTimeline}` : 'project timeline'}
					items={timelineItems}
					selected={values.timeline}
					onChange={onChange.timeline}
				/>
				{errorTimeline && <p className="text-sm text-red-400 mt-1">{errorTimeline}</p>}
			</div>
			<ScrollAnimation className="w-full">
				<InputTextUi id="budget" label="Your budget" value={values.budget} onChange={onChange.budget} isModal={false} />
			</ScrollAnimation>
		</BlockContainer>
	);
}
