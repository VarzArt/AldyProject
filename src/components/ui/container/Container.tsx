import React from 'react';

type ContainerProps = {
	maxWidth?: number;
	className?: string;
	children: React.ReactNode;
	id?: string;
};

export default function Container({ maxWidth = 1920, className, children, id }: ContainerProps) {
	return (
		<div id={id} className={`max-w-[${maxWidth}px] w-full ${className}`}>
			{children}
		</div>
	);
}
