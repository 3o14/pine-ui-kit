import React, {
	useEffect,
	useRef,
	useState,
	useCallback,
	useContext,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import * as styles from "./Dialog.css";
import { lightTheme } from "@/tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";
import { Text } from "../Text";
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
	onClose: () => void;
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

export const Dialog = ({
	open,
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
	const [isClosing, setIsClosing] = useState(false);
	const [mounted, setMounted] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, 200);
	}, [onClose]);

	useEffect(() => {
		if (!open || !closeOnEscape) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [open, closeOnEscape, handleClose]);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (closeOnOverlayClick && e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!open && !isClosing) return null;
	if (!mounted) return null;

	const dialogContent = (
		<div
			className={styles.overlay}
			onClick={handleOverlayClick}
			data-state={isClosing ? "closing" : "open"}
			role="presentation"
		>
			<div
				ref={dialogRef}
				className={clsx(
					themeClass,
					styles.container,
					styles.sizeVariants[size],
					styles.roundedVariants[rounded],
					className
				)}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? "dialog-title" : undefined}
				aria-describedby={description ? "dialog-description" : undefined}
			>
				{(title || showCloseButton) && (
					<div className={styles.header}>
						<div style={{ flex: 1 }}>
							{title && (
								<Text
									as="h2"
									id="dialog-title"
									size="large"
									weight="semibold"
									className={styles.title}
								>
									{title}
								</Text>
							)}
							{description && (
								<Text
									as="p"
									id="dialog-description"
									size="small"
									className={styles.description}
								>
									{description}
								</Text>
							)}
						</div>
						{showCloseButton && (
							<button
								type="button"
								className={styles.closeButton}
								onClick={handleClose}
								aria-label="Close dialog"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 5L5 15M5 5L15 15"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
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
			</div>
		</div>
	);

	return createPortal(dialogContent, document.body);
};
