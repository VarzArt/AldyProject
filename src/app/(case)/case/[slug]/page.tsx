import { ButtonUi, Heading } from '@/components';
import { portfolioItemsConst } from '@/components/pages/portfolio/portfolio.constants';
import React from 'react';
import Image from 'next/image';

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const targetItem = portfolioItemsConst.find((u) => u.short_name === slug);
	const nextItem = portfolioItemsConst.find((u) => u.id === targetItem?.id! + 1);

	return (
		<section className="pt-15 px-5 pb-[104px] flex flex-col items-center">
			<Heading text={targetItem?.name!} className="text-[40px] uppercase font-bold"></Heading>
			<div className="font-[Satoshi] text-[15px] text-center opacity-80 mt-10">{targetItem?.description}</div>
			<div className="mt-20 w-full">
				<div className="w-full flex justify-between items-center">
					<div className="text-xs flex justify-start gap-2">
						<p className="opacity-60">Services:</p>
						<span>{targetItem?.services?.join(', ')}</span>
					</div>
					<span className="text-xs opacity-60">{targetItem?.year}</span>
				</div>
				<div className="border-t-white/10 border-t w-full py-7 mt-3"></div>
				<div className="flex flex-col items-center gap-4">
					<div className="flex justify-start gap-4 items-center">
						<div className="xl:w-3 xl:h-3 w-2 h-2 rounded-full bg-(--pinkPrimary) relative after:w-5 after:h-5 after:absolute after:bg-(--pinkPrimary) after:opacity-30 after:rounded-full after:left-[-6px] after:top-[-6px]"></div>
						<div className="uppercase opacity-60 xl:text-sm text-[12px]">we are free for projects</div>
					</div>
					<Heading
						className="text-[40px] uppercase font-bold text-center leading-[100%]"
						text="Let’s create something new together"
					/>
					<div className="flex justify-center gap-4 max-w-[450px] relative">
						<ButtonUi variant={'mobile'}>Start a project</ButtonUi>
						<ButtonUi variant={'mobile'} className="bg-transparent border border-(--pinkPrimary) text-white">
							View next case
						</ButtonUi>
						<div className="absolute w-[60px] h-[60px] rounded-full bg-white bottom-[-65px] right-[-30px]">
							<Image
								src={nextItem?.src!}
								alt={nextItem?.name!}
								className="object-contain rounded-full w-full h-full"
							></Image>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
