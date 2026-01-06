import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import * as styles from "./Dialog.css";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";
import { Button } from "../Button";
import type { ButtonVariant, ButtonIntent } from "../Button";

export type DialogSize = "small" | "medium" | "large" | "xlarge" | "full";
export type DialogRounded = "small" | "medium" | "large";

export interface DialogAction {
	label: string;
	onClick: () => void;
	variant?: ButtonVariant;
	intent?: ButtonIntent;
	disabled?: boolean;
}

export interface DialogProps {
	open: boolean;
	onOpenChange?: (open: boolean) => void;
	onClose?: () => void;
	size?: DialogSize;
	rounded?: DialogRounded;
	title?: string;
	description?: string;
	children: React.ReactNode;
	actions?: DialogAction[];
	footer?: React.ReactNode;
	showCloseButton?: boolean;
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
	className?: string;
}

/**
 * Dialog component built on Base UI
 * 
 * @example
 * ```tsx
 * <Dialog 
 *   open={isOpen} 
 *   onOpenChange={setIsOpen}
 *   title="Confirm Action"
 *   description="Are you sure you want to proceed?"
 *   actions={[
 *     { label: "Cancel", variant: "outline", onClick: () => setIsOpen(false) },
 *     { label: "Confirm", variant: "solid", intent: "primary", onClick: handleConfirm }
 *   ]}
 * >
 *   <p>This action cannot be undone.</p>
 * </Dialog>
 * ```
 */
export const Dialog = ({
	open,
	onOpenChange,
	onClose,
	size = "medium",
	rounded = "medium",
	title,
	description,
	children,
	actions,
	footer,
	showCloseButton = true,
	closeOnOverlayClick = true,
	closeOnEscape = true,
	className,
}: DialogProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const handleOpenChange = (newOpen: boolean) => {
		onOpenChange?.(newOpen);
		if (!newOpen) {
			onClose?.();
		}
	};

	return (
		<BaseDialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			disablePointerDismissal={!closeOnOverlayClick}
			modal={closeOnEscape}
		>
			<BaseDialog.Portal>
				<BaseDialog.Backdrop className={styles.overlay} />
				<BaseDialog.Popup
					className={clsx(
						themeClass,
						styles.container,
						styles.sizeVariants[size],
						styles.roundedVariants[rounded],
						className
					)}
				>
				{(title || showCloseButton) && (
					<div className={styles.header}>
						<div style={{ flex: 1 }}>
							{title && (
								<BaseDialog.Title className={styles.title}>
									{title}
								</BaseDialog.Title>
							)}
							{description && (
								<BaseDialog.Description className={styles.description}>
									{description}
								</BaseDialog.Description>
							)}
						</div>
						{showCloseButton && (
							<BaseDialog.Close className={styles.closeButton}>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M15 5L5 15M5 5L15 15"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</BaseDialog.Close>
						)}
					</div>
				)}

				<div className={styles.body}>{children}</div>

				{(actions || footer) && (
					<div className={styles.footer}>
						{actions
							? actions.map((action, index) => (
									<Button
										key={index}
										variant={action.variant ?? "solid"}
										intent={action.intent ?? "primary"}
										onClick={action.onClick}
										disabled={action.disabled}
									>
										{action.label}
									</Button>
								))
							: footer}
					</div>
				)}
				</BaseDialog.Popup>
			</BaseDialog.Portal>
		</BaseDialog.Root>
	);
};
