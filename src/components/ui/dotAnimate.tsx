'use client';
import { useState } from 'react';

const ColorDotAnimation = () => {
	// Цвета для цикла
	const colorCycle = [
		{ dot: 'bg-pink-500', bg: 'bg-pink-100', text: 'text-pink-600', button: 'bg-pink-600 hover:bg-pink-700' },
		{ dot: 'bg-white', bg: 'bg-white', text: 'text-gray-800', button: 'bg-gray-800 hover:bg-gray-900' },
		{ dot: 'bg-blue-500', bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const currentColor = colorCycle[currentIndex % colorCycle.length];
	const nextColor = colorCycle[(currentIndex + 1) % colorCycle.length];

	const handleDotClick = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setCurrentIndex(currentIndex + 1);

		// Сброс состояния анимации после завершения
		setTimeout(() => setIsAnimating(false), 500);
	};

	return (
		<div className={`relative h-64 w-full overflow-hidden transition-colors duration-500 ${currentColor.bg}`}>
			{/* Логотип */}
			<div className={`absolute top-4 left-4 text-2xl font-bold transition-colors duration-500 ${currentColor.text}`}>
				Logo
			</div>

			{/* Кнопка */}
			<button
				className={`absolute top-4 right-4 px-4 py-2 text-white rounded-md transition-colors duration-500 ${currentColor.button}`}
			>
				Button
			</button>

			{/* Анимированная точка */}
			<div className="absolute inset-0 flex items-center justify-center">
				{/* Расширяющийся фон */}
				<div
					className={`absolute rounded-full transition-all duration-500 ease-in-out 
            ${isAnimating ? 'scale-[100]' : 'scale-0'} 
            ${currentColor.dot}
            w-4 h-4`}
				/>

				{/* Новая точка (следующего цвета) */}
				{!isAnimating && (
					<button
						onClick={handleDotClick}
						className={`relative z-10 w-4 h-4 rounded-full transition-all duration-300 ${nextColor.dot} 
              hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current`}
						aria-label="Change color"
					/>
				)}
			</div>
		</div>
	);
};

export default ColorDotAnimation;
