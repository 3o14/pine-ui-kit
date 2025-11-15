import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import * as styles from "./Dialog.css";
import { lightTheme, darkTheme } from "../../tokens/theme.css";

export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";

export interface DialogProps {
	open: boolean;
	onClose: () => void;
	size?: DialogSize;
	title?: string;
	description?: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
	showCloseButton?: boolean;
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
	mode?: "light" | "dark";
	className?: string;
}

export const Dialog = ({
	open,
	onClose,
	size = "md",
	title,
	description,
	children,
	footer,
	showCloseButton = true,
	closeOnOverlayClick = true,
	closeOnEscape = true,
	mode = "light",
	className,
}: DialogProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [mounted, setMounted] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const themeClass = mode === "dark" ? darkTheme : lightTheme;

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
					className
				)}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? "dialog-title" : undefined}
				aria-describedby={description ? "dialog-description" : undefined}
			>
				{/* Header */}
				{(title || showCloseButton) && (
					<div className={styles.header}>
						<div style={{ flex: 1 }}>
							{title && (
								<h2 id="dialog-title" className={styles.title}>
									{title}
								</h2>
							)}
							{description && (
								<p id="dialog-description" className={styles.description}>
									{description}
								</p>
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

				{/* Body */}
				<div className={styles.body}>{children}</div>

				{/* Footer */}
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</div>
	);

	return createPortal(dialogContent, document.body);
};
