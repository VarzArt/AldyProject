import React from 'react';

type HeadingProps = {
	text: string;
	className: string;
};

export default function Heading({ text, className }: HeadingProps) {
	const result = [];
	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		if (char === 'O' || char === 'o') {
			result.push(
				<span key={i} className={`font-[Bosca] font-black italic ${className}`}>
					{char}
				</span>
			);
		} else {
			result.push(char);
		}
	}

	return <div className={className}>{result}</div>;
}
