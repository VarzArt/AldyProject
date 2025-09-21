// components/ui/ImageUI.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type WidthSrc = { url: string; w: number };

type ArtDir = {
	fallback: string;
	srcset?: WidthSrc[];
	sizes?: string;
	type?: string;
	media?: string;
};

export type ImageUIProps = {
	alt: string;
	mobile: ArtDir;
	desktop?: ArtDir;
	force?: 'mobile' | 'desktop';
	aspect?: {
		mobile?: `${number} / ${number}` | string;
		desktop?: `${number} / ${number}` | string;
	};
	priority?: boolean;
	className?: string;
	imgClassName?: string;
};

function buildSrcSet(list?: WidthSrc[]) {
	return list?.map((s) => `${s.url} ${s.w}w`).join(', ');
}

export default function ImageUI({
	alt,
	mobile,
	desktop,
	force,
	aspect,
	priority,
	className,
	imgClassName,
}: ImageUIProps) {
	const mobileAspect = aspect?.mobile ?? '3 / 4';
	const desktopAspect = aspect?.desktop ?? '16 / 9';
	const media = desktop?.media ?? '(min-width: 1024px)';

	const styleVars = {
		['--aspect-mobile' as any]: mobileAspect,
		['--aspect-desktop' as any]: desktopAspect,
	} as React.CSSProperties;

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
				<Image
					src={desktop.fallback}
					alt={alt}
					fill
					sizes={desktop.sizes ?? '100vw'}
					priority={priority}
					className={clsx('object-cover', imgClassName)}
				/>
			</div>
		);
	}
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
				<Image
					src={mobile.fallback}
					alt={alt}
					fill
					sizes={mobile.sizes ?? '100vw'}
					priority={priority}
					className={clsx('object-cover', imgClassName)}
				/>
			</div>
		);
	}

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

			<picture>
				<source
					media={media}
					srcSet={buildSrcSet(desktop.srcset) ?? desktop.fallback}
					sizes={desktop.sizes ?? '100vw'}
					{...(desktop.type ? { type: desktop.type } : {})}
				/>
				<Image
					src={mobile.fallback}
					alt={alt}
					fill
					sizes={mobile.sizes ?? '100vw'}
					priority={priority}
					className={clsx('object-cover', imgClassName)}
				/>
			</picture>
		</div>
	);
}
