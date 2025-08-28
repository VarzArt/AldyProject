'use client';

import { BriefModalProvider } from '@/providers/ModalProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return <BriefModalProvider>{children}</BriefModalProvider>;
}
