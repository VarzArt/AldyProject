import './globals.css';
import LayoutWrapper from '@/wrappers/PreloadWrapper';
import { Footer, Header, ToasterClient } from '@/components';
import ScrollReset from '@/components/ui/scrollReset/ScrollReset';
import Providers from './providers';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<ToasterClient />
					{/* <LayoutWrapper> */}
					<ScrollReset />
					<Header></Header>
					{children}
					<Footer></Footer>
					{/* </LayoutWrapper> */}
				</Providers>
			</body>
		</html>
	);
}
