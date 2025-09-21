// components/ui/VideoUI.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

type VideoSource = { src: string; type?: string };

type VideoSet = {
	/** Массив источников: webm/mp4 и т.п. (порядок важен: от предпочтительного к fallback) */
	sources: VideoSource[];
	/** Постер */
	poster?: string;
};

export type VideoUIProps = {
	/** Описание для a11y */
	label: string;

	/** Мобильная (портрет) версия */
	mobile: VideoSet;

	/** Десктопная (ландшафт) версия */
	desktop?: VideoSet;

	/** Принудительный режим (рендер только одного видео) */
	force?: 'mobile' | 'desktop';

	/** Соотношение сторон контейнера (для стабильного лэйаута) */
	aspect?: {
		mobile?: `${number} / ${number}` | string; // по умолчанию '3 / 4'
		desktop?: `${number} / ${number}` | string; // по умолчанию '16 / 9'
	};

	/** Управление плеером */
	controls?: boolean; // по умолчанию true
	autoPlay?: boolean; // по умолчанию true
	loop?: boolean; // по умолчанию true
	muted?: boolean; // по умолчанию true (для автоплея на мобильных)
	playsInline?: boolean; // по умолчанию true
	preload?: 'none' | 'metadata' | 'auto'; // по умолчанию 'none'

	/** Если true — попробуем вызвать .play() на видимом видео после маунта */
	autoPlayOnVisible?: boolean;

	/** Классы-обёртки (можно дать `lg:col-span-2`) */
	className?: string;
	/** Классы самого <video> (object-cover/rounded и т.п.) */
	videoClassName?: string;
};

export default function VideoUI({
	label,
	mobile,
	desktop,
	force,
	aspect,
	controls = true,
	autoPlay = true,
	loop = true,
	muted = true,
	playsInline = true,
	preload = 'none',
	autoPlayOnVisible = false,
	className,
	videoClassName,
}: VideoUIProps) {
	const mobileAspect = aspect?.mobile ?? '3 / 4';
	const desktopAspect = aspect?.desktop ?? '16 / 9';

	const mobileRef = useRef<HTMLVideoElement | null>(null);
	const desktopRef = useRef<HTMLVideoElement | null>(null);

	// Опционально: автозапуск видимого видео после маунта, без влияния на SSR
	useEffect(() => {
		if (!autoPlayOnVisible) return;

		const mm = window.matchMedia('(min-width: 1024px)');
		const playVisible = () => {
			const el = force === 'desktop' || (mm.matches && desktop) ? desktopRef.current : mobileRef.current;
			el?.play().catch(() => {});
		};

		// первый запуск и на ресайз
		playVisible();
		mm.addEventListener?.('change', playVisible);
		return () => mm.removeEventListener?.('change', playVisible);
	}, [autoPlayOnVisible, force, desktop]);

	// инлайновый стиль с aspect-ratio
	const styleVars = {
		['--aspect-mobile' as any]: mobileAspect,
		['--aspect-desktop' as any]: desktopAspect,
	} as React.CSSProperties;

	// Рендер одного видео (форс-режим)
	if (force === 'mobile' || !desktop) {
		return (
			<div className={clsx('relative w-full', className)} style={styleVars}>
				<style jsx>{`
					div {
						aspect-ratio: var(--aspect-mobile);
					}
					@media (min-width: 1024px) {
						div {
							aspect-ratio: var(--aspect-desktop);
						}
					}
				`}</style>

				<video
					ref={mobileRef}
					aria-label={label}
					className={clsx('h-full w-full object-cover', videoClassName)}
					controls={controls}
					autoPlay={autoPlay}
					loop={loop}
					muted={muted}
					playsInline={playsInline}
					preload={preload}
					poster={mobile.poster}
				>
					{mobile.sources.map((s, i) => (
						<source key={i} src={s.src} type={s.type} />
					))}
				</video>
			</div>
		);
	}
	if (force === 'desktop' && desktop) {
		return (
			<div className={clsx('relative w-full', className)} style={styleVars}>
				<style jsx>{`
					div {
						aspect-ratio: var(--aspect-mobile);
					}
					@media (min-width: 1024px) {
						div {
							aspect-ratio: var(--aspect-desktop);
						}
					}
				`}</style>

				<video
					ref={desktopRef}
					aria-label={label}
					className={clsx('h-full w-full object-cover', videoClassName)}
					controls={controls}
					autoPlay={autoPlay}
					loop={loop}
					muted={muted}
					playsInline={playsInline}
					preload={preload}
					poster={desktop.poster}
				>
					{desktop.sources.map((s, i) => (
						<source key={i} src={s.src} type={s.type} />
					))}
				</video>
			</div>
		);
	}

	// Обычный режим: два <video>, показываем один через media-query
	return (
		<div className={clsx('relative w-full', className)} style={styleVars}>
			<style jsx>{`
				div {
					aspect-ratio: var(--aspect-mobile);
				}
				@media (min-width: 1024px) {
					div {
						aspect-ratio: var(--aspect-desktop);
					}
				}
				.mob {
					display: block;
				}
				.desk {
					display: none;
				}
				@media (min-width: 1024px) {
					.mob {
						display: none;
					}
					.desk {
						display: block;
					}
				}
			`}</style>

			{/* Мобильная версия */}
			<video
				ref={mobileRef}
				aria-label={label}
				className={clsx('mob h-full w-full object-cover', videoClassName)}
				controls={controls}
				autoPlay={autoPlay}
				loop={loop}
				muted={muted}
				playsInline={playsInline}
				preload={preload} // важно: чтобы скрытая версия не грузилась
				poster={mobile.poster}
				aria-hidden={false}
			>
				{mobile.sources.map((s, i) => (
					<source key={i} src={s.src} type={s.type} />
				))}
			</video>

			{/* Десктопная версия */}
			<video
				ref={desktopRef}
				aria-label={label}
				className={clsx('desk h-full w-full object-cover', videoClassName)}
				controls={controls}
				autoPlay={autoPlay}
				loop={loop}
				muted={muted}
				playsInline={playsInline}
				preload={preload} // скрытая не будет качать при preload="none"
				poster={desktop.poster}
				aria-hidden={false}
			>
				{desktop.sources.map((s, i) => (
					<source key={i} src={s.src} type={s.type} />
				))}
			</video>
		</div>
	);
}
