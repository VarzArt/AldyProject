// components/ui/Checkbox.tsx
'use client';

import React, { forwardRef, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'> {
	label?: React.ReactNode;
	description?: React.ReactNode;
	size?: Size;
	error?: string;
	indeterminate?: boolean;
	onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeMap: Record<Size, { box: string; icon: string; gap: string; text: string; desc: string }> = {
	sm: { box: 'h-4 w-4', icon: 'h-3 w-3', gap: 'gap-2', text: 'text-sm', desc: 'text-xs' },
	md: { box: 'h-5 w-5', icon: 'h-3.5 w-3.5', gap: 'gap-2.5', text: 'xl:text-xl text-base', desc: 'text-sm' },
	lg: { box: 'h-6 w-6', icon: 'h-4 w-4', gap: 'gap-3', text: 'text-lg', desc: 'text-sm' },
};

export const CheckboxUi = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
	{
		id,
		label,
		description,
		size = 'md',
		className,
		error,
		indeterminate,
		onChange,
		disabled,
		checked,
		defaultChecked,
		...rest
	},
	ref
) {
	const innerId = useId();
	const inputId = id ?? innerId;
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!ref) return;
		if (typeof ref === 'function') ref(inputRef.current!);
		else (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
	}, [ref]);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.indeterminate = !!indeterminate && !(checked ?? inputRef.current.checked);
		}
	}, [indeterminate, checked]);

	const s = sizeMap[size];

	return (
		<label
			htmlFor={inputId}
			className={clsx(
				'flex items-center cursor-pointer select-none gap-4',
				s.gap,
				disabled && 'cursor-not-allowed opacity-60'
			)}
		>
			<span className="relative inline-flex">
				<input
					id={inputId}
					ref={inputRef}
					type="checkbox"
					className="peer sr-only"
					disabled={disabled}
					checked={checked}
					defaultChecked={defaultChecked}
					onChange={(e) => onChange?.(e.target.checked, e)}
					{...rest}
				/>

				<span
					aria-hidden
					className={clsx(
						'box-border rounded-md border transition-colors',
						'border-(--pinkPrimary) bg-transparent',
						'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--pinkPrimary)',
						'peer-checked:border-(--pinkPrimary) peer-checked:bg-(--pinkPrimary)',
						'peer-indeterminate:border-(--pinkPrimary) peer-indeterminate:bg-(--pinkPrimary)',
						s.box
					)}
				/>

				<svg
					viewBox="0 0 24 24"
					className={clsx(
						'pointer-events-none absolute inset-0 m-auto transition-opacity',
						'opacity-0 peer-checked:opacity-100',
						s.icon,
						'text-white'
					)}
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M5 13l4 4L19 7" />
				</svg>

				<svg
					viewBox="0 0 24 24"
					className={clsx(
						'pointer-events-none absolute inset-0 m-auto transition-opacity',
						'opacity-0 peer-[data-indeterminate=true]:opacity-100',
						'peer-[aria-checked=mixed]:opacity-100',
						s.icon,
						'text-white'
					)}
					fill="currentColor"
				>
					<rect x="5" y="11" width="14" height="2" rx="1" />
				</svg>
			</span>

			{(label || description || error) && (
				<span className="flex flex-col">
					{label && <span className={clsx('font-[Satoshi] text-[#9595A0]', s.text)}>{label}</span>}
					{description && <span className={clsx('text-gray-500', s.desc)}>{description}</span>}
					{error && <span className="text-red-600 text-sm">{error}</span>}
				</span>
			)}
		</label>
	);
});
