'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { ButtonUi, Heading, ScrollAnimation } from '@/components';
import {
	AboutYourBusiness,
	AdditionalNotes,
	ContactInformation,
	FinalStep,
	ForWebAndDigital,
	InteriorProjects,
	MainProjectGoal,
	ProjectType,
	TargetAudience,
	TimelineBudget,
	VisualStyle,
	WhatYouHave,
} from '@/components/briefPage';
import { toast } from 'react-hot-toast';

type BriefForm = {
	contact: {
		name: string;
		email: string;
		phone: string;
		preferredContact: string;
	};
	projectType: {
		webDesign: string[];
		productDesign: string[];
		webDevelopment: string[];
		interiorDesign: string[];
		branding: string[];
		smm: string[];
		other: string;
	};
	mainGoals: string[];
	about: string;
	audience: {
		segments: string[];
		other: string;
	};
	visual: {
		directions: string[];
		colorMood: string;
		references: string;
	};
	webDigital: {
		projectType: string;
		required: string[];
		content: string;
	};
	interior: {
		projectType: string;
		area: string;
		required: string[];
		styles: string[];
	};
	have: string[];
	timelineBudget: {
		timeline: string;
		budget: string;
	};
	notes: string;
	agree: boolean;
};

const initialForm: BriefForm = {
	contact: { name: '', email: '', phone: '', preferredContact: '' },
	projectType: {
		webDesign: [],
		productDesign: [],
		webDevelopment: [],
		interiorDesign: [],
		branding: [],
		smm: [],
		other: '',
	},
	mainGoals: [],
	about: '',
	audience: { segments: [], other: '' },
	visual: { directions: [], colorMood: '', references: '' },
	webDigital: { projectType: '', required: [], content: '' },
	interior: { projectType: '', area: '', required: [], styles: [] },
	have: [],
	timelineBudget: { timeline: '', budget: '' },
	notes: '',
	agree: false,
};

export default function Brief() {
	const [form, setForm] = useState<BriefForm>(initialForm);
	const [errors, setErrors] = useState<{ name?: string; timeline?: string; agree?: string }>({});
	const [loading, setLoading] = useState(false);

	const validate = useCallback(() => {
		const next: typeof errors = {};
		if (!form.contact.name.trim()) next.name = 'Please enter your name';
		if (!form.timelineBudget.timeline.length) next.timeline = 'Please select at least one timeline option';
		if (!form.agree) next.agree = 'Please agree to the data processing terms';
		setErrors(next);
		return Object.keys(next).length === 0;
	}, [form]);

	const handleSubmit = useCallback(async () => {
		if (!validate()) {
			toast.error('Please fix the errors');
			return;
		}

		setLoading(true);

		await toast
			.promise(
				(async () => {
					const res = await fetch('/api/brief-extended', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(form),
					});

					const data = await res.json().catch(() => ({}));
					if (!res.ok) {
						throw new Error(data?.error || 'Sending error');
					}
					return data;
				})(),
				{
					loading: 'Sending...',
					success: 'Thanks! Your brief has been sent ✅',
					error: (err) => (err instanceof Error ? err.message : 'Sending error'),
				}
			)
			.then(() => {
				setForm(initialForm);
				setErrors({});
			})
			.finally(() => setLoading(false));
	}, [form, validate]);

	const update = useMemo(
		() => ({
			contact: {
				name: (v: string) => setForm((s) => ({ ...s, contact: { ...s.contact, name: v } })),
				email: (v: string) => setForm((s) => ({ ...s, contact: { ...s.contact, email: v } })),
				phone: (v: string) => setForm((s) => ({ ...s, contact: { ...s.contact, phone: v } })),
				preferredContact: (v: string | string[]) =>
					setForm((s) => ({ ...s, contact: { ...s.contact, preferredContact: String(v) } })),
			},
			projectType: {
				webDesign: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, webDesign: v as string[] } })),
				productDesign: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, productDesign: v as string[] } })),
				webDevelopment: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, webDevelopment: v as string[] } })),
				interiorDesign: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, interiorDesign: v as string[] } })),
				branding: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, branding: v as string[] } })),
				smm: (v: string[] | string) =>
					setForm((s) => ({ ...s, projectType: { ...s.projectType, smm: v as string[] } })),
				other: (v: string) => setForm((s) => ({ ...s, projectType: { ...s.projectType, other: v } })),
			},
			mainGoals: (v: string[] | string) => setForm((s) => ({ ...s, mainGoals: v as string[] })),
			about: (v: string) => setForm((s) => ({ ...s, about: v })),
			audience: {
				segments: (v: string[] | string) =>
					setForm((s) => ({ ...s, audience: { ...s.audience, segments: v as string[] } })),
				other: (v: string) => setForm((s) => ({ ...s, audience: { ...s.audience, other: v } })),
			},
			visual: {
				directions: (v: string[] | string) =>
					setForm((s) => ({ ...s, visual: { ...s.visual, directions: v as string[] } })),
				colorMood: (v: string | string[]) => setForm((s) => ({ ...s, visual: { ...s.visual, colorMood: String(v) } })),
				references: (v: string) => setForm((s) => ({ ...s, visual: { ...s.visual, references: v } })),
			},
			webDigital: {
				projectType: (v: string | string[]) =>
					setForm((s) => ({ ...s, webDigital: { ...s.webDigital, projectType: String(v) } })),
				required: (v: string[] | string) =>
					setForm((s) => ({ ...s, webDigital: { ...s.webDigital, required: v as string[] } })),
				content: (v: string | string[]) =>
					setForm((s) => ({ ...s, webDigital: { ...s.webDigital, content: String(v) } })),
			},
			interior: {
				projectType: (v: string | string[]) =>
					setForm((s) => ({ ...s, interior: { ...s.interior, projectType: String(v) } })),
				area: (v: string) => setForm((s) => ({ ...s, interior: { ...s.interior, area: v } })),
				required: (v: string[] | string) =>
					setForm((s) => ({ ...s, interior: { ...s.interior, required: v as string[] } })),
				styles: (v: string[] | string) =>
					setForm((s) => ({ ...s, interior: { ...s.interior, styles: v as string[] } })),
			},
			have: (v: string[] | string) => setForm((s) => ({ ...s, have: v as string[] })),
			timelineBudget: {
				timeline: (v: string[] | string) =>
					setForm((s) => ({ ...s, timelineBudget: { ...s.timelineBudget, timeline: v as string } })),
				budget: (v: string) => setForm((s) => ({ ...s, timelineBudget: { ...s.timelineBudget, budget: v } })),
			},
			notes: (v: string) => setForm((s) => ({ ...s, notes: v })),
			agree: (v: boolean) => setForm((s) => ({ ...s, agree: v })),
		}),
		[]
	);

	const canSubmit = form.agree && !loading;

	return (
		<section className="flex flex-col justify-center items-center lg:pb-[180px] pb-[80px]">
			<ScrollAnimation className="max-w-[920px]">
				<Heading
					text={'project brief'}
					className={
						'uppercase xl:text-[112px] lg:text-[98px] md:text-[78px] text-[60px] text w-full font-bold leading-[100%] tracking-[-2%] text-center whitespace-pre-line xl:pb-[120px] pb-[40px] lg:pt-0 pt-[20px]'
					}
				/>
			</ScrollAnimation>

			<div className="max-w-[920px] flex flex-col justify-center items-start w-full lg:gap-[80px] gap-[40px] px-[20px] lg:px-0">
				<ContactInformation values={form.contact} onChange={update.contact} errorName={errors.name} />
				<ProjectType values={form.projectType} onChange={update.projectType} />
				<MainProjectGoal selected={form.mainGoals} onChange={update.mainGoals} />
				<AboutYourBusiness value={form.about} onChange={update.about} />
				<TargetAudience values={form.audience} onChange={update.audience} />
				<VisualStyle values={form.visual} onChange={update.visual} />
				<ForWebAndDigital values={form.webDigital} onChange={update.webDigital} />
				<InteriorProjects values={form.interior} onChange={update.interior} />
				<WhatYouHave selected={form.have} onChange={update.have} />
				<TimelineBudget values={form.timelineBudget} onChange={update.timelineBudget} errorTimeline={errors.timeline} />
				<AdditionalNotes value={form.notes} onChange={update.notes} />
				<FinalStep checked={form.agree} onChange={update.agree} errorAgree={errors.agree} />

				<ScrollAnimation className="font-[Satoshi] xl:text-xl text-base">
					After submission, our team will contact you within 24 hours to discuss the details and next steps.
				</ScrollAnimation>

				<ScrollAnimation>
					<ButtonUi
						variant="subSecondary"
						className={`px-[90px] ${!canSubmit ? 'opacity-50 pointer-events-none' : ''}`}
						disabled={!canSubmit}
						onClick={handleSubmit}
					>
						{loading ? 'sending...' : 'Send'}
					</ButtonUi>
				</ScrollAnimation>
			</div>
		</section>
	);
}
