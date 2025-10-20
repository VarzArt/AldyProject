'use client';

import { InputTextUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { preferendInteriorStyleItems, scopeItems, typeItems } from '@/components/briefPage/briefPage.constants';

type Values = { projectType: string; area: string; required: string[]; styles: string[] };
type Handlers = {
	projectType: (v: string | string[]) => void;
	area: (v: string) => void;
	required: (v: string[] | string) => void;
	styles: (v: string[] | string) => void;
};

type Props = { values: Values; onChange: Handlers };

export default function InteriorProjects({ values, onChange }: Props) {
	return (
		<BlockContainer title="For Interior Projects" number={8}>
			<BlockChips
				title="project type"
				items={typeItems}
				selected={values.projectType}
				onChange={onChange.projectType}
			/>
			<ScrollAnimation className="w-full">
				<InputTextUi id="area" label="Area (m²)" value={values.area} onChange={onChange.area} isModal={false} />
			</ScrollAnimation>
			<BlockChips
				title="required functionality"
				items={scopeItems}
				multiselect
				selected={values.required}
				onChange={onChange.required}
			/>
			<BlockChips
				title="content"
				items={preferendInteriorStyleItems}
				multiselect
				selected={values.styles}
				onChange={onChange.styles}
			/>
		</BlockContainer>
	);
}
