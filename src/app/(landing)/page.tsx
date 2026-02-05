import '@/app/globals.css';

import { Breif } from '@/components/pages/breif';
import { Expertise } from '@/components/pages/expertise';
import { MainPage } from '@/components/pages/mainPage';
import { Portfolio } from '@/components/pages/portfolio';
import { Services } from '@/components/pages/services';

export const metadata = {
	title: 'AldyStudio',
	description:
		'We are a design studio specializing in web development and branding. Our team of talented designers and developers creates unique visual solutions that reflect the individuality of your brand and ensures revenue growth.',
	keywords: ['aldy', 'digital design', 'web design', 'UI/UX', 'aldy studio', 'branding', 'motion design', 'frontend'],
	openGraph: {
		title: 'Aldy Studio — Digital Design Studio',
		description:
			'We are a design studio specializing in web development and branding. Our team of talented designers and developers creates unique visual solutions that reflect the individuality of your brand and ensures revenue growth.',
		url: 'https://aldystudio.com',
		siteName: 'Aldy Studio',
		locale: 'en_EN',
		type: 'website',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
};

export default function Home() {
	return (
		<section>
			<MainPage></MainPage>
			<Portfolio></Portfolio>
			<Expertise></Expertise>
			<Services></Services>
			<Breif></Breif>
		</section>
	);
}
