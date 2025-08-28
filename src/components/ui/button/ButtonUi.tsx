import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'subPrimary' | 'subSecondary' | 'subPrimaryHover' | 'mobilePrimary' | 'mobile';
}

type Variants = {
	primary: string;
	subPrimary: string;
	subPrimaryHover: string;
	secondary: string;
	subSecondary: string;
	mobilePrimary: string;
	mobile: string;
};

export default function ButtonUi({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
	const baseStyles =
		'font-[Satoshi] uppercase rounded-[100px] duration-150 ease-in-out cursor-pointer sm:text-[10px] md:text-xs text-xs xl:text-sm';

	const variants: Variants = {
		primary: 'border border-(--pinkPrimary) hover:bg-(--pinkPrimary) px-[28px] py-[11px]',
		mobilePrimary: 'border border-(--pinkPrimary) hover:bg-(--pinkPrimary) py-[20px] px-[32px] text-black',
		subPrimary: 'border border-(--backPrimary) hover:bg-(--pinkPrimary) hover:border-transparent py-[20px] px-[32px]',
		subPrimaryHover:
			'border border-(--backPrimary) hover:bg-(--backSecondary) hover:border-transparent py-[20px] px-[32px]',
		secondary: 'bg-(--pinkPrimary) text-black hover:bg-(--backPrimary) hover:text-white py-[20px] px-[32px]',
		subSecondary: 'bg-(--pinkPrimary) text-black hover:bg-(--backSecondary) py-[20px] px-[32px]',
		mobile: 'bg-(--pinkPrimary) text-black hover:bg-(--backSecondary) py-4 px-5 sm:py-[20px] sm:px-[32px]',
	};

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
}
