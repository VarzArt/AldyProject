'use client';

import React, { useState } from 'react';
import ChipsUi from '../chips/ChipsUi';
import { InputTextUi } from '../inputText/InputTextUi';
import { InputTextareaUi } from '../textarea/InputTextareaUi';
import SubHeader from '../subheader/SubHeader';
import ButtonUi from '../button/ButtonUi';
import ScrollAnimation from '../scrollAnimation/ScrollAnimation';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';

type FormUiProps = {
	variant?: 'page' | 'modal';
};

const items = [
	{ id: 1, label: 'Web design', value: 'webdesign' },
	{ id: 2, label: 'Branding', value: 'branding' },
	{ id: 3, label: 'Mobile App', value: 'mobileApp' },
	{ id: 5, label: 'Social nets design', value: 'socialNetsDesign' },
	{ id: 4, label: 'Interior Design', value: 'interiorDesign' },
	{ id: 6, label: 'Product design', value: 'productDesign' },
];

const budgetItems = [
	{ id: 1, label: '1K - 5K', value: '1-5' },
	{ id: 2, label: '5K - 10K', value: '5-10' },
	{ id: 3, label: '10K - 50K', value: '10-50' },
	{ id: 4, label: 'more than 50K', value: '50+' },
];

export default function FormUi({ variant = 'page' }: FormUiProps) {
	const [selectedServices, setSelectedServices] = useState<string[]>(['webdesign']);
	const [budget, setBudget] = useState<string>('1-5');
	const [formData, setFormData] = useState({ name: '', email: '', projectDetails: '' });
	const [loading, setLoading] = useState(false);

	const handleChangeInput = (field: 'name' | 'email' | 'projectDetails') => (value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleChangeServices = (val: string | string[]) => {
		setSelectedServices(Array.isArray(val) ? val : val ? [val] : []);
	};

	const handleChangeBudget = (val: string | string[]) => {
		setBudget(Array.isArray(val) ? (val[0] ?? '') : val);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (selectedServices.length === 0) return toast.error('Please select at least one service');
		if (!budget) return toast.error('Specify the budget');
		if (!formData.name.trim()) return toast.error('Enter your name');
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return toast.error('Incorrect email');

		setLoading(true);

		await toast
			.promise(
				(async () => {
					const res = await fetch('/api/brief', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							services: selectedServices,
							budget,
							name: formData.name.trim(),
							email: formData.email.trim(),
							projectDetails: formData.projectDetails.trim(),
						}),
					});

					const data = await res.json().catch(() => ({}));
					if (!res.ok) {
						throw new Error(data?.error || 'Sending error');
					}
					return data;
				})(),
				{
					loading: 'Sending...',
					success: 'Thanks! Your request has been sent ✅',
					error: (err) => (err instanceof Error ? err.message : 'Sending error'),
				}
			)
			.then(() => {
				setSelectedServices(['webdesign']);
				setBudget('1-5');
				setFormData({ name: '', email: '', projectDetails: '' });
			})
			.finally(() => setLoading(false));
	};

	return (
		<form className="w-full font-[Satoshi]" onSubmit={onSubmit} noValidate>
			<div
				data-variant={variant}
				className={clsx(
					'w-full flex flex-col',
					'data-[variant=page]:lg:w-[620px] data-[variant=page]:xl:gap-8 data-[variant=page]:md:gap-6 data-[variant=page]:sm:w-[320px] data-[variant=page]:sm:gap-4 data-[variant=page]:gap-[22px] data-[variant=page]:xl:mb-[60px] data-[variant=page]:lg:mb-[45px] data-[variant=page]:sm:mb-[30px] data-[variant=page]:mb-8',
					'data-[variant=modal]:gap-2 data-[variant=modal]:sm:gap-3 data-[variant=modal]:mb-4 data-[variant=modal]:xl:mb-6 data-[variant=page]:mb-6'
				)}
			>
				<ScrollAnimation>
					<SubHeader text="service" />
				</ScrollAnimation>
				<ChipsUi
					items={items}
					selected={selectedServices}
					onChange={(val) => setSelectedServices(Array.isArray(val) ? val : val ? [val] : [])}
					multiselect
					isModal={variant === 'modal'}
				/>
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
					<SubHeader text="Budget in USD" />
				</ScrollAnimation>
				<ChipsUi
					items={budgetItems}
					selected={budget}
					onChange={(val) => setBudget(Array.isArray(val) ? (val[0] ?? '') : val)}
					isModal={variant === 'modal'}
				/>
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
						required
					/>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextUi
						id="email"
						label="Email"
						value={formData.email}
						onChange={handleChangeInput('email')}
						isModal={variant === 'modal'}
						type="email"
						required
					/>
				</ScrollAnimation>
				<ScrollAnimation>
					<InputTextareaUi
						id="details"
						label="Project details"
						value={formData.projectDetails}
						onChange={handleChangeInput('projectDetails')}
						rows={variant !== 'modal' ? 3 : 1}
						isModal={variant === 'modal'}
						required
					/>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div
					data-variant={variant}
					className={clsx('w-full', 'data-[variant=modal]:flex data-[variant=modal]:justify-start')}
				>
					<ButtonUi
						variant={variant !== 'modal' ? 'subSecondary' : 'mobile'}
						type="submit"
						disabled={loading}
						onClick={(e) => onSubmit(e)}
					>
						{loading ? 'sending...' : 'discuss project'}
					</ButtonUi>
				</div>
			</ScrollAnimation>
		</form>
	);
}
