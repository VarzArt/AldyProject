import React from 'react';

type SubHeaderProps = {
	text: string;
	className?: string;
};

export default function SubHeader({ text, className }: SubHeaderProps) {
	return (
		<span className={`uppercase xl:text-sm sm:text-[10px] md:text-xs text-xs font-medium opacity-60 ${className}`}>
			/{text}
		</span>
	);
}
