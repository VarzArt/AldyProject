'use client';

import React, { useState } from 'react';
import ChipsUi from '../chips/ChipsUi';
import { InputTextUi } from '../inputText/InputTextUi';
import { InputTextareaUi } from '../textarea/InputTextareaUi';
import SubHeader from '../subheader/SubHeader';
import ButtonUi from '../button/ButtonUi';
import ScrollAnimation from '../scrollAnimation/ScrollAnimation';

type Props = {};

const items = [
	{
		id: 1,
		label: 'Web design',
		value: 'webdesign',
	},
	{
		id: 2,
		label: 'Product design',
		value: 'productdesign',
	},
	{
		id: 3,
		label: 'Web development',
		value: 'webdevelopment',
	},
	{
		id: 4,
		label: 'Bradning',
		value: 'branding',
	},
	{
		id: 5,
		label: 'Graphics',
		value: 'graphics',
	},
];

const budjetItems = [
	{
		id: 1,
		label: '1K - 5K',
		value: '1-5',
	},
	{
		id: 2,
		label: '5K - 10K',
		value: '5-10',
	},
	{
		id: 3,
		label: '10K - 50K',
		value: '10-50',
	},
	{
		id: 4,
		label: 'more than 50K',
		value: '50+',
	},
];

export default function FormUi({}: Props) {
	const handleChange = (selectedItem: string | string[]) => {
		console.log(selectedItem);
	};

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		projectDetails: '',
	});

	const handleChangeInput = (field: string) => (value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<form className="w-full">
			<div className="w-[620px] flex flex-col xl:gap-8 gap-6 xl:mb-[60px] mb-[45px]">
				<ScrollAnimation>
					<SubHeader text="service"></SubHeader>
				</ScrollAnimation>
				<ChipsUi items={items} onChange={handleChange} defaultSelected={['webdesign']} multiselect></ChipsUi>
			</div>
			<div className="w-[640px] flex flex-col xl:gap-8 gap-6 xl:mb-[60px] mb-[30px]">
				<ScrollAnimation>
					<SubHeader text="Budget in USD"></SubHeader>
				</ScrollAnimation>
				<ChipsUi items={budjetItems} onChange={handleChange} defaultSelected="1-5"></ChipsUi>
			</div>
			<div className="flex flex-col xl:gap-3 gap-0 xl:mb-[40px] mb-[20px]">
				<ScrollAnimation>
					<InputTextUi id="name" label="Name" value={formData.name} onChange={handleChangeInput('name')}></InputTextUi>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextUi
						id="email"
						label="Email"
						value={formData.email}
						onChange={handleChangeInput('email')}
					></InputTextUi>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextareaUi
						id="details"
						label="Project details"
						value={formData.projectDetails}
						onChange={handleChangeInput('projectDetails')}
						rows={3}
					></InputTextareaUi>
				</ScrollAnimation>
			</div>
			<ScrollAnimation>
				<ButtonUi variant={'subSecondary'}>discuss project</ButtonUi>
			</ScrollAnimation>
		</form>
	);
}
