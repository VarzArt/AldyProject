import { Footer, Header, ToasterClient } from '@/components';
import ScrollReset from '@/components/ui/scrollReset/ScrollReset';
import Providers from '../providers';

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
		<Providers>
			<ToasterClient />
			{/* <LayoutWrapper> */}
			<ScrollReset />
			<Header></Header>
			{children}
			<Footer></Footer>
			{/* </LayoutWrapper> */}
		</Providers>
	);
}
