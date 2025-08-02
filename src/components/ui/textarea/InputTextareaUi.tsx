import { useState, useRef } from 'react';

interface FloatingLabelTextareaProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	rows?: number;
	required?: boolean;
	className?: string;
}

export const InputTextareaUi = ({
	id,
	label,
	value,
	onChange,
	rows = 3,
	required = false,
	className = '',
}: FloatingLabelTextareaProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(value !== '');

	return (
		<div className={`relative mb-6 w-full ${className}`}>
			<textarea
				ref={textareaRef}
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={`
          w-full px-1 py-3 xl:text-2xl text-xl border-b border-b-gray-300/10 resize-none
          outline-none focus:border-b-(--pinkPrimary) hover:border-b-(--pinkPrimary)/50
          transition-all duration-200 bg-transparent min-h-[100px] peer
        `}
				rows={rows}
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
