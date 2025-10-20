'use client';

import { InputTextUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import {
	brandingItems,
	interiorDesignItems,
	productDesignItems,
	smmItems,
	webDesignItems,
	webDevelopmentItems,
} from '@/components/briefPage/briefPage.constants';

type Values = {
	webDesign: string[];
	productDesign: string[];
	webDevelopment: string[];
	interiorDesign: string[];
	branding: string[];
	smm: string[];
	other: string;
};

type Handlers = {
	webDesign: (v: string[] | string) => void;
	productDesign: (v: string[] | string) => void;
	webDevelopment: (v: string[] | string) => void;
	interiorDesign: (v: string[] | string) => void;
	branding: (v: string[] | string) => void;
	smm: (v: string[] | string) => void;
	other: (v: string) => void;
};

type Props = { values: Values; onChange: Handlers };

export default function ProjectType({ values, onChange }: Props) {
	return (
		<BlockContainer number={2} title="Project Type">
			<BlockChips
				title="web design"
				items={webDesignItems}
				multiselect
				selected={values.webDesign}
				onChange={onChange.webDesign}
			/>
			<BlockChips
				title="product design"
				items={productDesignItems}
				multiselect
				selected={values.productDesign}
				onChange={onChange.productDesign}
			/>
			<BlockChips
				title="web development"
				items={webDevelopmentItems}
				multiselect
				selected={values.webDevelopment}
				onChange={onChange.webDevelopment}
			/>
			<BlockChips
				title="interior design"
				items={interiorDesignItems}
				multiselect
				selected={values.interiorDesign}
				onChange={onChange.interiorDesign}
			/>
			<BlockChips
				title="branding"
				items={brandingItems}
				multiselect
				selected={values.branding}
				onChange={onChange.branding}
			/>
			<BlockChips title="smm" items={smmItems} multiselect selected={values.smm} onChange={onChange.smm} />
			<ScrollAnimation className="w-full">
				<InputTextUi id="other" label="Other" value={values.other} onChange={onChange.other} isModal={false} />
			</ScrollAnimation>
		</BlockContainer>
	);
}
