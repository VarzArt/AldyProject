'use client';

import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { contentItems, projectTypeItems, requiredFunctionalityItems } from '@/components/briefPage/briefPage.constants';

type Values = { projectType: string; required: string[]; content: string };
type Handlers = {
	projectType: (v: string | string[]) => void;
	required: (v: string[] | string) => void;
	content: (v: string | string[]) => void;
};

type Props = { values: Values; onChange: Handlers };

export default function ForWebAndDigital({ values, onChange }: Props) {
	return (
		<BlockContainer title="For Web & Digital Projects" number={7}>
			<BlockChips
				title="project type"
				items={projectTypeItems}
				selected={values.projectType}
				onChange={onChange.projectType}
			/>
			<BlockChips
				title="required functionality"
				items={requiredFunctionalityItems}
				multiselect
				selected={values.required}
				onChange={onChange.required}
			/>
			<BlockChips title="content" items={contentItems} selected={values.content} onChange={onChange.content} />
		</BlockContainer>
	);
}
