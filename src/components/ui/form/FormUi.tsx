'use client';

import React, { useState } from 'react';
import ChipsUi from '../chips/ChipsUi';
import { InputTextUi } from '../inputText/InputTextUi';
import { InputTextareaUi } from '../textarea/InputTextareaUi';
import SubHeader from '../subheader/SubHeader';
import ButtonUi from '../button/ButtonUi';
import ScrollAnimation from '../scrollAnimation/ScrollAnimation';
import clsx from 'clsx';

type FormUiProps = {
	variant?: 'page' | 'modal';
};

const items = [
	{
		id: 1,
		label: 'Web design',
		value: 'webdesign',
	},
	{
		id: 2,
		label: 'Branding',
		value: 'branding',
	},
	{
		id: 3,
		label: 'Mobile App',
		value: 'mobileApp',
	},
	{
		id: 5,
		label: 'Social nets design',
		value: 'socialNetsDesign',
	},
	{
		id: 4,
		label: 'Interior Design',
		value: 'interiorDesign',
	},

	{
		id: 6,
		label: 'Product design',
		value: 'productDesign',
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

export default function FormUi({ variant = 'page' }: FormUiProps) {
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
		<form className="w-full font-[Satoshi]">
			<div
				data-variant={variant}
				className={clsx(
					'w-full flex flex-col',
					'data-[variant=page]:lg:w-[620px] data-[variant=page]:xl:gap-8 data-[variant=page]:md:gap-6 data-[variant=page]:sm:w-[320px] data-[variant=page]:sm:gap-4 data-[variant=page]:gap-[22px] data-[variant=page]:xl:mb-[60px] data-[variant=page]:lg:mb-[45px] data-[variant=page]:sm:mb-[30px] data-[variant=page]:mb-8',
					'data-[variant=modal]:gap-2 data-[variant=modal]:sm:gap-3 data-[variant=modal]:mb-4 data-[variant=modal]:xl:mb-6 data-[variant=page]:mb-6'
				)}
			>
				<ScrollAnimation>
					<SubHeader text="service"></SubHeader>
				</ScrollAnimation>
				<ChipsUi
					items={items}
					onChange={handleChange}
					defaultSelected={['webdesign']}
					multiselect
					isModal={variant === 'modal'}
				></ChipsUi>
			</div>
			<div
				data-variant={variant}
				className={clsx(
					'w-full flex flex-col',
					'data-[variant=page]:lg:w-[620px] data-[variant=page]:xl:gap-8 data-[variant=page]:md:gap-6 data-[variant=page]:sm:w-[320px] data-[variant=page]:sm:gap-4 data-[variant=page]:gap-[22px] data-[variant=page]:xl:mb-[60px] data-[variant=page]:lg:mb-[45px] data-[variant=page]:sm:mb-[30px] data-[variant=page]:mb-10',
					'data-[variant=modal]:gap-2 data-[variant=modal]:sm:gap-3 data-[variant=modal]:mb-4 data-[variant=modal]:xl:mb-6 data-[variant=page]:mb-6'
				)}
			>
				<ScrollAnimation>
					<SubHeader text="Budget in USD"></SubHeader>
				</ScrollAnimation>
				<ChipsUi
					items={budjetItems}
					onChange={handleChange}
					defaultSelected="1-5"
					isModal={variant === 'modal'}
				></ChipsUi>
			</div>
			<div
				data-variant={variant}
				className={clsx(
					'flex flex-col xl:gap-3 gap-0 w-full sm:w-unset',
					'data-[variant=page]:xl:mb-[40px] data-[variant=page]:sm:mb-0 data-[variant=page]:mb-2',
					'data-[variant=modal]:mb-1 data-[variant=modal]:xl:mb-6'
				)}
			>
				<ScrollAnimation>
					<InputTextUi
						id="name"
						label="Name"
						value={formData.name}
						onChange={handleChangeInput('name')}
						isModal={variant === 'modal'}
					></InputTextUi>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextUi
						id="email"
						label="Email"
						value={formData.email}
						onChange={handleChangeInput('email')}
						isModal={variant === 'modal'}
					></InputTextUi>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextareaUi
						id="details"
						label="Project details"
						value={formData.projectDetails}
						onChange={handleChangeInput('projectDetails')}
						rows={variant !== 'modal' ? 3 : 1}
						isModal={variant === 'modal'}
					></InputTextareaUi>
				</ScrollAnimation>
			</div>
			<ScrollAnimation>
				<div
					data-variant={variant}
					className={clsx('w-full', 'data-[variant=modal]:flex data-[variant=modal]:justify-start')}
				>
					<ButtonUi variant={variant !== 'modal' ? 'subSecondary' : 'mobile'}>discuss project</ButtonUi>
				</div>
			</ScrollAnimation>
		</form>
	);
}
