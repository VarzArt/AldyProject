'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterClient() {
	return (
		<Toaster
			position="top-center"
			toastOptions={{
				duration: 4000,
				style: {
					background: '#1f2937',
					color: '#f9fafb',
					border: '1px solid #374151',
					borderRadius: '0.75rem',
					padding: '12px 16px',
					fontSize: '0.95rem',
					whiteSpace: 'nowrap',
				},
				success: {
					iconTheme: {
						primary: '#10B981',
						secondary: '#1f2937',
					},
				},
				error: {
					iconTheme: {
						primary: '#EF4444',
						secondary: '#1f2937',
					},
				},
				loading: {
					iconTheme: {
						primary: '#3B82F6',
						secondary: '#1f2937',
					},
				},
			}}
		/>
	);
}
