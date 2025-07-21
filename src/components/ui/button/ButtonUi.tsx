import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary';
}

type Variants = {
	primary: string;
	secondary: string;
};

export default function ButtonUi({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
	const baseStyles =
		'px-[28px] py-[11px] font-[Satoshi] uppercase border rounded-[100px] duration-150 ease-in-out cursor-pointer';

	const variants: Variants = {
		primary: 'border-(--pinkPrimary) hover:bg-(--pinkPrimary)',
		secondary: '',
	};

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
}
