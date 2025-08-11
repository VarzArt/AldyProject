// app/scroll-reset.tsx  (или components/ScrollReset.tsx)
'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		const onBeforeUnload = () => window.scrollTo(0, 0);
		window.addEventListener('beforeunload', onBeforeUnload);

		const onPageShow = (e: PageTransitionEvent) => {
			if ((e as any).persisted) window.scrollTo(0, 0);
		};
		window.addEventListener('pageshow', onPageShow);

		return () => {
			window.removeEventListener('beforeunload', onBeforeUnload);
			window.removeEventListener('pageshow', onPageShow);
		};
	}, []);

	return null;
}
