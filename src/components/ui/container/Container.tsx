import React from 'react';

type ContainerProps = {
	maxWidth?: number;
	className?: string;
	children: React.ReactNode;
};

export default function Container({ maxWidth = 1920, className, children }: ContainerProps) {
	return <div className={`max-w-[${maxWidth}px] w-full ${className}`}>{children}</div>;
}
