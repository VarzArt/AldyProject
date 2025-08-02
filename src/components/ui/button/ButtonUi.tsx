import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'subPrimary' | 'subSecondary';
}

type Variants = {
	primary: string;
	subPrimary: string;
	secondary: string;
	subSecondary: string;
};

export default function ButtonUi({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
	const baseStyles =
		'font-[Satoshi] uppercase rounded-[100px] duration-150 ease-in-out cursor-pointer text-xs xl:text-sm';

	const variants: Variants = {
		primary: 'border border-(--pinkPrimary) hover:bg-(--pinkPrimary) px-[28px] py-[11px]',
		subPrimary:
			'border border-(--backPrimary) hover:bg-(--pinkPrimary) hover:border-transparent xl:px-[33px] px-[36px] xl:py-[22px] py-5',
		secondary:
			'bg-(--pinkPrimary) text-black hover:bg-(--backPrimary) hover:text-white xl:px-[42px] px-[36px] xl:py-[24px] py-5',
		subSecondary: 'bg-(--pinkPrimary) text-black hover:bg-(--backSecondary) px-[41px] py-[24px]',
	};

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
}
