'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black"
		>
			<div className="flex flex-col items-center">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						repeat: Infinity,
						duration: 1.5,
						ease: 'easeInOut',
					}}
					className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
				/>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mt-4 text-white"
				>
					Загрузка...
				</motion.p>
			</div>
		</motion.div>
	);
}
