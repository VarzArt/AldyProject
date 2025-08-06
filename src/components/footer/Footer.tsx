'use client';

import React, { useState } from 'react';
import { navBarTabs, socialMedia } from '@/components/component.constants';
import { ButtonUi, ScrollAnimation, SubHeader } from '@/components/ui';
import FooterCol from './footerCol/FooterCol';

type Props = {};

export default function Footer({}: Props) {
	const [activeColor, setActiveColor] = useState<'pink' | 'white'>('pink');
	const [animationPhase, setAnimationPhase] = useState<'idle' | 'expanding' | 'done'>('idle');

	const handleDotClick = () => {
		if (animationPhase !== 'idle') return;
		setAnimationPhase('expanding');

		setTimeout(() => {
			setActiveColor(activeColor === 'pink' ? 'white' : 'pink');
			setAnimationPhase('done');

			// Возвращаем в исходное состояние после завершения анимации
			setTimeout(() => {
				setAnimationPhase('idle');
			}, 450); // Минимальная задержка для сброса
		}, 700);
	};

	const backToTop = () => {
		document.getElementById('main')?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<section
			className={`xl:pt-[160px] pt-[120px] xl:px-[120px] px-[100px] ${
				activeColor === 'pink' ? 'bg-(--backSecondary)' : 'bg-(--pinkPrimary)'
			} rounded-t-[56px] mt-[-56px] overflow-hidden relative font-[Satoshi] text-black`}
			id="contacts"
		>
			<div
				className={`absolute rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 ${
					activeColor === 'pink' ? 'bg-(--pinkPrimary)' : 'bg-(--backSecondary)'
				} ${
					animationPhase === 'expanding'
						? 'scale-[100] opacity-100'
						: animationPhase === 'done'
						? 'scale-[100] opacity-0'
						: 'scale-0 opacity-0'
				}
				`}
				style={{
					transformOrigin: 'center',
					right: '119px',
					bottom: '137px',
					width: '40px',
					height: '40px',
					zIndex: 10,
				}}
			/>
			<div className="flex justify-center relative z-10">
				<div className="flex-col gap-6 items-start mr-auto">
					<ScrollAnimation>
						<SubHeader text="let's work"></SubHeader>
					</ScrollAnimation>
					<ScrollAnimation>
						<div className={`border-b-2 pb-1 w-max border-b-black`}>
							<div className="xl:text-[48px] text-[40px] font-medium">hello@aldy.com</div>
						</div>
					</ScrollAnimation>
				</div>
				<div className="w-[50%] flex justify-between items-start">
					<FooterCol name="sitemap" color={activeColor} tabs={navBarTabs}></FooterCol>
					<FooterCol name="socials" color={activeColor} tabs={socialMedia}></FooterCol>
					<ScrollAnimation>
						<ButtonUi variant={activeColor === 'pink' ? 'subPrimary' : 'subPrimaryHover'} onClick={backToTop}>
							Back to top
						</ButtonUi>
					</ScrollAnimation>
				</div>
			</div>

			<div className="flex justify-end xl:mt-[200px] mt-[120px] relative z-20">
				<ScrollAnimation>
					<div
						className={`xl:text-[295px] text-[245px] font-black uppercase leading-[80%] pr-2 transition-all duration-700 ${
							activeColor === 'pink' ? 'text-black' : 'text-(--backSecondary)'
						}`}
					>
						ALDY
					</div>
				</ScrollAnimation>

				{animationPhase === 'idle' && (
					<ScrollAnimation>
						<button
							onClick={handleDotClick}
							className={`absolute rounded-full right-0  bottom-0 xl:w-10 xl:h-10 w-8 h-8 animate-bounce ${
								activeColor === 'pink' ? 'bg-(--pinkPrimary)' : 'bg-(--backSecondary)'
							} after:absolute after:rounded-full after:right-[-19px] after:bottom-[-19px] xl:after:w-[78px] after:w-[70px] xl:after:h-[78px] after:h-[70px] ${
								activeColor === 'pink' ? 'after:bg-(--pinkPrimary)' : 'after:bg-(--backSecondary)'
							} after:opacity-20 cursor-pointer focus:outline-none`}
							aria-label="Change color theme"
						/>
					</ScrollAnimation>
				)}
			</div>
			<ScrollAnimation>
				<div className="border-t border-t-cyan-950/10 w-full mt-14 xl:py-7 py-5 flex justify-between font-normal xl:text-[16px] text-[14px]">
					<div className="opacity-50">Privacy Policy</div>
					<div className="opacity-50 pl-21">Cookies Policy</div>
					<div className="opacity-50 xl:text-sm text-[13px]">©ALDY2024</div>
				</div>
			</ScrollAnimation>
		</section>
	);
}
