import LayoutWrapper from '@/wrappers/PreloadWrapper';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <LayoutWrapper> */}
				{children}
				{/* </LayoutWrapper> */}
			</body>
		</html>
	);
}
