'use client';

import { InputTextUi, ScrollAnimation } from '@/components/ui';
import React from 'react';
import { BlockContainer } from '@/components/briefPage/blockContainer';
import { BlockChips } from '@/components/briefPage/blockChips';
import { contactMethodItems } from '@/components/briefPage/briefPage.constants';

type Values = {
	name: string;
	email: string;
	phone: string;
	preferredContact: string;
};

type Handlers = {
	name: (v: string) => void;
	email: (v: string) => void;
	phone: (v: string) => void;
	preferredContact: (v: string | string[]) => void;
};

type Props = {
	values: Values;
	onChange: Handlers;
	errorName?: string;
};

export default function ContactInformation({ values, onChange, errorName }: Props) {
	return (
		<BlockContainer number={1} title="Contact Information">
			<ScrollAnimation className="w-full">
				<div className="flex flex-col w-full">
					<InputTextUi id="name" label="Name / Company" value={values.name} onChange={onChange.name} isModal={false} />
					{errorName && <p className="text-sm text-red-400 mt-1">{errorName}</p>}
				</div>
			</ScrollAnimation>
			<ScrollAnimation className="w-full">
				<InputTextUi id="email" label="Email" value={values.email} onChange={onChange.email} isModal={false} />
			</ScrollAnimation>
			<ScrollAnimation className="w-full">
				<InputTextUi
					id="phone"
					label="Phone / Telegram"
					value={values.phone}
					onChange={onChange.phone}
					isModal={false}
				/>
			</ScrollAnimation>
			<BlockChips
				items={contactMethodItems}
				title="Preferred contact method"
				selected={values.preferredContact}
				onChange={onChange.preferredContact}
			/>
		</BlockContainer>
	);
}
