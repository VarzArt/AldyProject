import { HeaderS, ToasterClient } from '@/components';

export const metadata = {
	title: 'AldyStudio',
	description: 'Design studio',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			<ToasterClient />
			<HeaderS></HeaderS>
			{children}
		</section>
	);
}
