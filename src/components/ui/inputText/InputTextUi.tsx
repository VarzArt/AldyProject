'use client';

import { useState, useRef } from 'react';

interface FloatingLabelInputProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	type?: string;
	required?: boolean;
	className?: string;
}

export const InputTextUi = ({
	id,
	label,
	value,
	onChange,
	type = 'text',
	required = false,
	className = '',
}: FloatingLabelInputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(value !== '');

	return (
		<div className={`relative mb-6 w-full ${className}`}>
			<input
				ref={inputRef}
				id={id}
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={`
          w-full px-1 py-3 xl:text-2xl text-xl border-b border-b-gray-300/10 hover:border-b-(--pinkPrimary)/50
          outline-none focus:border-b-(--pinkPrimary)
          transition-all duration-200 bg-transparent peer
        `}
				required={required}
			/>
			<label
				htmlFor={id}
				className={`
          absolute left-0 px-1 text-[#9595A0] transition-all duration-200 xl:text-xl text-base
          pointer-events-none bg-transparent
          ${isFocused || value ? '-top-3 xl:text-base text-sm opacity-60' : 'top-3 xl:text-xl text-base opacity-100'}
          peer-focus:-top-3 xl:peer-focus:text-base peer-focus:text-sm peer-focus:opacity-60
        `}
			>
				{label}
			</label>
		</div>
	);
};
