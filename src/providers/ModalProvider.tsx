'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { BriefOpenOptions, FormUi, Modal, PortfolioModalOpenProps, PortfolioModal } from '@/components';
import clsx from 'clsx';

type Ctx = {
	openBreif: (opts?: BriefOpenOptions) => void;
	closeBreif: () => void;
	isOpenBreif: boolean;

	openPortfolio: (props?: PortfolioModalOpenProps) => void;
	closePortfolio: () => void;
	isPortfolioOpen: boolean;
};

const ModalCtx = createContext<Ctx | null>(null);

export function BriefModalProvider({ children }: { children: React.ReactNode }) {
	const [isOpenBreif, setOpen] = useState(false);
	const [opts, setOpts] = useState<BriefOpenOptions | undefined>(undefined);

	const [isPortfolioOpen, setPortfolioOpen] = useState(false);
	const [portfolioProps, setPortfolioProps] = useState<PortfolioModalOpenProps | undefined>(undefined);

	const openBreif = useCallback((o?: BriefOpenOptions) => {
		setOpts(o);
		setOpen(true);
	}, []);

	const closeBreif = useCallback(() => setOpen(false), []);

	const openPortfolio = useCallback((p?: PortfolioModalOpenProps) => {
		setPortfolioProps(p);
		setPortfolioOpen(true);
	}, []);

	const closePortfolio = useCallback(() => setPortfolioOpen(false), []);

	const value = useMemo(
		() => ({ openBreif, closeBreif, isOpenBreif, openPortfolio, closePortfolio, isPortfolioOpen }),
		[openBreif, closeBreif, isOpenBreif, openPortfolio, closePortfolio, isPortfolioOpen]
	);

	return (
		<ModalCtx.Provider value={value}>
			{children}

			<Modal
				open={isOpenBreif}
				onClose={closeBreif}
				className={clsx('font-[Satoshi]', opts?.modalClassName)}
				closeOnOverlayClick={opts?.closeOnOverlayClick}
				closeOnEsc={opts?.closeOnEsc}
				showCloseButton={opts?.showCloseButton}
			>
				<FormUi variant="modal" />
			</Modal>

			<PortfolioModal open={isPortfolioOpen} onClose={closePortfolio} className={portfolioProps?.className}>
				{portfolioProps?.content}
			</PortfolioModal>
		</ModalCtx.Provider>
	);
}

export function useBriefModal() {
	const ctx = useContext(ModalCtx);
	if (!ctx) throw new Error('useBriefModal must be used within <BriefModalProvider>');

	const { openBreif, closeBreif, isOpenBreif } = ctx;
	return { open: openBreif, close: closeBreif, isOpen: isOpenBreif };
}

export function usePortfolioModal() {
	const ctx = useContext(ModalCtx);
	if (!ctx) throw new Error('usePortfolioModal must be used within <BriefModalProvider>');

	const { openPortfolio, closePortfolio, isPortfolioOpen } = ctx;
	return { open: openPortfolio, close: closePortfolio, isOpen: isPortfolioOpen };
}
