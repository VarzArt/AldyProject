import LayoutWrapper from '@/wrappers/PreloadWrapper';
import './globals.css';
import { Footer, Header } from '@/components';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <LayoutWrapper> */}
				<Header></Header>
				{children}
				<Footer></Footer>
				{/* </LayoutWrapper> */}
			</body>
		</html>
	);
}
