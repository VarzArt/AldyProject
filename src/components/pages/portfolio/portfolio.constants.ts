import Axis from '@/assets/photos/Axis.png';
import Bravo from '@/assets/photos/Bravo.png';
import Damas from '@/assets/photos/Damas.png';
import Langustin from '@/assets/photos/Langustin.png';
import { StaticImageData } from 'next/image';
import axis1 from '@/assets/images/axis/axis1.png';
import axis2 from '@/assets/images/axis/axis2.png';
import axis3 from '@/assets/images/axis/axis3.png';
import axis4 from '@/assets/images/axis/axis4.png';
import axis5 from '@/assets/images/axis/axis5.png';
import axis6 from '@/assets/images/axis/axis6.png';
import axis7 from '@/assets/images/axis/axis7.png';

type Image = string;
export interface portfolioItemType {
	id: number;
	short_name: string;
	name: string;
	type: string;
	description?: string;
	year: number;
	services?: string[];
	src: Image;
	srcDesc?: Image;
	srcs?: {
		mob: Image;
		desc: Image;
		type: 'photo' | 'video';
	}[];
}

const MAIN_SRC = process.env.NEXT_PUBLIC_IMAGE_CDN;

export const portfolioItemsConst: portfolioItemType[] = [
	{
		id: 1,
		short_name: 'axis',
		name: 'Axis studio',
		type: 'Logo & Visual identity',
		description:
			'AXIS STUDIO is an interior design company creating modern, sophisticated spaces. The task was to build a digital presence with a strong, aesthetic visual language that reflects the studio’s style.',
		year: 2024,
		services: ['Web design', 'Logo design', 'Visual identity'],
		src: `${MAIN_SRC}/images/axis/axis1.png`,
		srcDesc: `${MAIN_SRC}/images/axis/axis1.png`,
		srcs: [
			{
				mob: `${MAIN_SRC}/images/axis/axis1.png`,
				desc: `${MAIN_SRC}/images/axis/axis1.png`,
				type: 'photo',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis2v.mp4`,
				desc: `${MAIN_SRC}/images/axis/axis2v.mp4`,
				type: 'video',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis2.png`,
				desc: `${MAIN_SRC}/images/axis/axis2.png`,
				type: 'photo',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis4v.mp4`,
				desc: `${MAIN_SRC}/images/axis/axis4descv.mp4`,
				type: 'video',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis3.png`,
				desc: `${MAIN_SRC}/images/axis/axis3.png`,
				type: 'photo',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis4.png`,
				desc: `${MAIN_SRC}/images/axis/axis4.png`,
				type: 'photo',
			},
			{
				mob: `${MAIN_SRC}/images/axis/axis5.png`,
				desc: `${MAIN_SRC}/images/axis/axis5desc.png`,
				type: 'photo',
			},
		],
	},
	{
		id: 2,
		short_name: 'damas',
		name: 'Damas engineering',
		type: 'Design & Development',
		description:
			'Damas Engineering is a global partner in managed services, team augmentation, and advanced testing, helping businesses scale and bring products to market with confidence.',
		year: 2024,
		services: ['Web design', 'UI/UX', 'Development', 'Visual identity'],
		src: `${MAIN_SRC}/images/damas/damas1.png`,
		srcDesc: `${MAIN_SRC}/images/damas/damas1desc.png`,

		srcs: [
			{ mob: `${MAIN_SRC}/images/damas/damas1.png`, desc: `${MAIN_SRC}/images/damas/damas1desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/damas/damas2.png`, desc: `${MAIN_SRC}/images/damas/damas2.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/damas/damas3v.mp4`, desc: `${MAIN_SRC}/images/damas/damas3v.mp4`, type: 'video' },
			{ mob: `${MAIN_SRC}/images/damas/damas3.png`, desc: `${MAIN_SRC}/images/damas/damas3desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/damas/damas4.png`, desc: `${MAIN_SRC}/images/damas/damas4.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/damas/damas5v.mp4`, desc: `${MAIN_SRC}/images/damas/damas5v.mp4`, type: 'video' },
			{ mob: `${MAIN_SRC}/images/damas/damas5.png`, desc: `${MAIN_SRC}/images/damas/damas5desc.png`, type: 'photo' },
		],
	},
	{
		id: 3,
		name: 'GRAFT AI',
		short_name: 'graft',
		type: 'UI design (Web & Mobile)',
		year: 2024,
		services: ['App design', 'UI/UX', 'Development'],
		description:
			'Graft AI is a web application designed for hair transplant clinics. It automates the calculation of grafts after procedures, helping doctors increase accuracy, save time, and improve patient experience.',
		src: `${MAIN_SRC}/images/graft/graft1.png`,
		srcDesc: `${MAIN_SRC}/images/graft/graft1desc.png`,
		srcs: [
			{ mob: `${MAIN_SRC}/images/graft/graft1.png`, desc: `${MAIN_SRC}/images/graft/graft1desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/graft/graft2v.mp4`, desc: `${MAIN_SRC}/images/graft/graft2v.mp4`, type: 'video' },
			{ mob: `${MAIN_SRC}/images/graft/graft2.png`, desc: `${MAIN_SRC}/images/graft/graft2.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/graft/graft3.png`, desc: `${MAIN_SRC}/images/graft/graft3desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/graft/graft4.png`, desc: `${MAIN_SRC}/images/graft/graft4.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/graft/graft5.png`, desc: `${MAIN_SRC}/images/graft/graft5desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/graft/graft6.png`, desc: `${MAIN_SRC}/images/graft/graft6.png`, type: 'photo' },
		],
	},
	{
		id: 4,
		short_name: 'bravo',
		name: 'Bravo Integrated Solutions',
		type: 'Branding',
		year: 2024,
		services: ['Web design', 'UI/UX', 'Development', 'Visual identity'],
		description:
			'A leading industrial group of companies specializing in the development of solutions for the renewable energy sector, industry, shipbuilding, offshore projects and IT.',
		src: `${MAIN_SRC}/images/bravo/bravo1.png`,
		srcDesc: `${MAIN_SRC}/images/bravo/bravo1desc.png`,
		srcs: [
			{ mob: `${MAIN_SRC}/images/bravo/bravo1.png`, desc: `${MAIN_SRC}/images/bravo/bravo1desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo2.png`, desc: `${MAIN_SRC}/images/bravo/bravo2.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo3v.mp4`, desc: `${MAIN_SRC}/images/bravo/bravo3v.mp4`, type: 'video' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo3.png`, desc: `${MAIN_SRC}/images/bravo/bravo3desc.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo4.png`, desc: `${MAIN_SRC}/images/bravo/bravo4.png`, type: 'photo' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo5v.mp4`, desc: `${MAIN_SRC}/images/bravo/bravo5v.mp4`, type: 'video' },
			{ mob: `${MAIN_SRC}/images/bravo/bravo5.png`, desc: `${MAIN_SRC}/images/bravo/bravo5desc.png`, type: 'photo' },
		],
	},
];
