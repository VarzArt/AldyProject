'use client';
import { useState, useEffect } from 'react';

export function useIsDesktop(breakpoint = 1024) {
	const [isDesktop, setIsDesktop] = useState<boolean>(() => {
		if (typeof window === 'undefined') return false;
		return window.innerWidth >= breakpoint;
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

		const handler = (event: MediaQueryListEvent) => {
			setIsDesktop(event.matches);
		};

		mediaQuery.addEventListener('change', handler);

		setIsDesktop(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handler);
		};
	}, [breakpoint]);

	return isDesktop;
}
