'use client';

import React, { useState } from 'react';
import { footerBarTabs, socialMedia } from '@/components/component.constants';
import { ButtonUi, Container, ScrollAnimation, SubHeader } from '@/components/ui';
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

			setTimeout(() => {
				setAnimationPhase('idle');
			}, 450);
		}, 700);
	};

	const backToTop = () => {
		document.getElementById('main')?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<section
			className={`w-full flex flex-col items-center ${
				activeColor === 'pink' ? 'bg-(--backSecondary)' : 'bg-(--pinkPrimary)'
			} sm:rounded-t-[56px] rounded-t-[24px] sm:mt-[-56px] mt-[-24px] overflow-hidden`}
		>
			<Container
				className={`
    relative isolate font-[Satoshi] text-black overflow-visible
  `}
				id="contacts"
			>
				<div className="pointer-events-none absolute inset-0 z-0 overflow-visible sm:rounded-t-[56px] rounded-t-[24px]">
					<div
						className={`absolute rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 ${
							activeColor === 'pink' ? 'bg-(--pinkPrimary)' : 'bg-(--backSecondary)'
						} ${
							animationPhase === 'expanding'
								? 'xl:scale-[200] sm:scale-[150] scale-[75] opacity-100'
								: animationPhase === 'done'
								? 'xl:scale-[200] sm:scale-[150] scale-[75] opacity-0'
								: 'scale-0 opacity-0'
						}
				md:right-[80px] lg:right-[100px] xl:right-[120px] md:bottom-[14.5%] right-4 bottom-[100px] z-[1] pointer-events-none will-change-transform transform-gpu`}
						style={{
							transformOrigin: 'center',
							width: '40px',
							height: '40px',
							WebkitBackfaceVisibility: 'hidden',
						}}
					/>
				</div>

				<div
					className={`
      relative z-[2]
      xl:pt-[160px] lg:pt-[120px] sm:pt-[80px] pt-[60px]
      xl:pb-0 lg:pb-0 sm:pb-0 pb-0
      xl:px-[120px] lg:px-[100px] sm:px-[28px] px-5
    `}
					style={{ transform: 'translateZ(0)', willChange: 'transform', contain: 'paint' }}
				>
					<div className="flex sm:justify-start md:justify-center justify-center sm:flex-row flex-col">
						<div className="flex-col gap-6 items-start md:mr-auto sm:mr-14 mr-auto">
							<ScrollAnimation>
								<SubHeader text="let's work"></SubHeader>
							</ScrollAnimation>
							<ScrollAnimation>
								<div className={`border-b-2 pb-1 w-max border-b-black`}>
									<div className="xl:text-[48px] lg:text-[40px] sm:text-[28px] md:text-[32px] text-[32px] font-medium z-20">
										hello@aldystudio.com
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="md:w-[50%] w-full flex justify-between items-start sm:flex-row flex-col mt-15 sm:mt-0">
							<div className="flex justify-between sm:w-[50%] w-[73%] sm:mb-0 mb-15">
								<FooterCol name="sitemap" color={activeColor} tabs={footerBarTabs}></FooterCol>
								<FooterCol name="socials" color={activeColor} tabs={socialMedia}></FooterCol>
							</div>
							<ScrollAnimation>
								<ButtonUi variant={activeColor === 'pink' ? 'subPrimary' : 'subPrimaryHover'} onClick={backToTop}>
									Back to top
								</ButtonUi>
							</ScrollAnimation>
						</div>
					</div>

					<div className="flex justify-end xl:mt-[200px] sm:mt-[120px] mt-[80px] relative">
						<ScrollAnimation className="flex justify-end w-full">
							<div
								className={`xl:text-[295px] lg:text-[240px] sm:text-[140px] text-[135px] font-black uppercase leading-[80%] pr-2 transition-all duration-700 ${
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
									className={`absolute rounded-full right-0  bottom-0 xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 animate-bounce ${
										activeColor === 'pink' ? 'bg-(--pinkPrimary)' : 'bg-(--backSecondary)'
									} after:absolute after:rounded-full lg:after:right-[-19px] lg:after:bottom-[-19px] after:right-[-14px] after:bottom-[-14px] xl:after:w-[78px] lg:after:w-[70px] after:w-[48px] xl:after:h-[78px] lg:after:h-[70px] after:h-[48px] ${
										activeColor === 'pink' ? 'after:bg-(--pinkPrimary)' : 'after:bg-(--backSecondary)'
									} after:opacity-20 cursor-pointer focus:outline-none`}
									aria-label="Change color theme"
								/>
							</ScrollAnimation>
						)}
					</div>
					<ScrollAnimation>
						<div className="border-t border-t-[#9595a0]/10 w-full sm:mt-14 mt-10 xl:py-7 py-5 flex justify-between font-normal xl:text-[16px] sm:text-[12px] md:text-[14px] text-[14px]">
							<div className="opacity-50">Privacy Policy</div>
							<div className="opacity-50 xl:text-sm sm:text-[10px] md:text-[13px] text-[13px]">©ALDY2024</div>
						</div>
					</ScrollAnimation>
				</div>
			</Container>
		</section>
	);
}
