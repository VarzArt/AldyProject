import React from 'react';

type YearItemProps = {
	year: string;
};

export default function YearItem({ year }: YearItemProps) {
	return <div className="opacity-60 text-xs xl:text-sm pb-9 sm:block hidden">{year}</div>;
}
