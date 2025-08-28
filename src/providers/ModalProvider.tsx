'use client';

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	ReactNode,
	ReactElement,
	cloneElement,
} from 'react';
import { FormUi, Heading, Modal } from '@/components';
import clsx from 'clsx';

export type BriefOpenOptions = {
	source?: string;
	modalClassName?: string;
	closeOnOverlayClick?: boolean;
	closeOnEsc?: boolean;
	showCloseButton?: boolean;
};

type Ctx = {
	open: (opts?: BriefOpenOptions) => void;
	close: () => void;
	isOpen: boolean;
};

const BriefCtx = createContext<Ctx | null>(null);

export function BriefModalProvider({ children }: { children: ReactNode }) {
	const [isOpen, setOpen] = useState(false);
	const [opts, setOpts] = useState<BriefOpenOptions | undefined>(undefined);

	const open = useCallback((o?: BriefOpenOptions) => {
		setOpts(o);
		setOpen(true);
	}, []);

	const close = useCallback(() => setOpen(false), []);

	const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

	return (
		<BriefCtx.Provider value={value}>
			{children}
			<Modal
				open={isOpen}
				onClose={close}
				className={clsx('font-[Satoshi]', opts?.modalClassName)}
				closeOnOverlayClick={opts?.closeOnOverlayClick}
				closeOnEsc={opts?.closeOnEsc}
				showCloseButton={opts?.showCloseButton}
			>
				{/* <Heading
					className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6 opacity-60 w-max"
					text="Maybe we can discuss it?!"
				></Heading> */}
				<FormUi variant="modal" />
			</Modal>
		</BriefCtx.Provider>
	);
}

export function useBriefModal() {
	const ctx = useContext(BriefCtx);
	if (!ctx) throw new Error('useBriefModal must be used within <BriefModalProvider>');
	return ctx;
}

type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;

type TriggerProps<P extends { onClick?: ClickHandler }> = {
	children: ReactElement<P>;
	source?: string;
	options?: Omit<BriefOpenOptions, 'source'>;
};

export function BriefModalTrigger<P extends { onClick?: ClickHandler }>({
	children,
	source,
	options,
}: TriggerProps<P>) {
	const { open } = useBriefModal();

	return cloneElement(children, {
		onClick: (e: React.MouseEvent<HTMLElement>) => {
			children.props.onClick?.(e);
			if (!e.defaultPrevented) {
				open({ source, ...options });
			}
		},
	} as Partial<P>);
}
