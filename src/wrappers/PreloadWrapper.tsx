'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/ui/preloader/Preloader';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({
	children,
	minTimeToShow = 3000,
}: {
	children: React.ReactNode;
	minTimeToShow?: number;
}) {
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		// Минимальное время показа прелоадера (1 секунда)
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, minTimeToShow);

		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<>
			<AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
			{!isLoading && children}
		</>
	);
}
