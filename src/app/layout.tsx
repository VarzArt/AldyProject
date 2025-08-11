import LayoutWrapper from '@/wrappers/PreloadWrapper';
import './globals.css';
import { Footer, Header } from '@/components';
import ScrollReset from '@/components/ui/scrollReset/ScrollReset';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <LayoutWrapper> */}
				<ScrollReset />
				<Header></Header>
				{children}
				<Footer></Footer>
				{/* </LayoutWrapper> */}
			</body>
		</html>
	);
}
