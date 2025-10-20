import React from 'react';

type SubHeaderProps = {
	text: string;
	className?: string;
	needSlash?: boolean;
};

export default function SubHeader({ text, className, needSlash = true }: SubHeaderProps) {
	return (
		<span className={`uppercase xl:text-sm sm:text-[10px] md:text-xs text-xs font-medium opacity-60 ${className}`}>
			{needSlash ? `/${text}` : `${text}`}
		</span>
	);
}
