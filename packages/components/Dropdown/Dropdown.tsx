import { useEffect, useRef, useState, useCallback, useContext } from "react";
import clsx from "clsx";
import * as styles from "./Dropdown.css";
import { lightTheme } from "@/tokens";
import type { ColorIntent } from "@/tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type DropdownSize = "small" | "medium" | "large";
export type DropdownRounded = "small" | "medium" | "large";
export type DropdownIntent = ColorIntent;

export interface DropdownOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface DropdownProps {
	options: DropdownOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	size?: DropdownSize;
	rounded?: DropdownRounded;
	intent?: DropdownIntent;
	fullWidth?: boolean;
	disabled?: boolean;
	className?: string;
}

export const Dropdown = ({
	options,
	value,
	onChange,
	placeholder = "Select an option",
	size = "medium",
	rounded = "medium",
	intent = "primary",
	fullWidth = false,
	disabled = false,
	className,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);
	const containerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const selectedOption = options.find((opt) => opt.value === value);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			setIsOpen(false);
			setFocusedIndex(-1);
		}, 150);
	}, []);

	const handleToggle = useCallback(() => {
		if (disabled) return;
		if (isOpen) {
			handleClose();
		} else {
			setIsOpen(true);
			setFocusedIndex(-1);
		}
	}, [isOpen, disabled, handleClose]);

	const handleSelect = useCallback(
		(optionValue: string) => {
			onChange?.(optionValue);
			handleClose();
		},
		[onChange, handleClose]
	);

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				handleClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, handleClose]);

	useEffect(() => {
		if (!isOpen) return;

		const enabledOptions = options.filter((opt) => !opt.disabled);

		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "Escape":
					event.preventDefault();
					handleClose();
					break;

				case "ArrowDown":
					event.preventDefault();
					setFocusedIndex((prev) => {
						const nextIndex = prev + 1;
						return nextIndex >= enabledOptions.length ? 0 : nextIndex;
					});
					break;

				case "ArrowUp":
					event.preventDefault();
					setFocusedIndex((prev) => {
						const nextIndex = prev - 1;
						return nextIndex < 0 ? enabledOptions.length - 1 : nextIndex;
					});
					break;

				case "Enter":
					event.preventDefault();
					if (focusedIndex >= 0 && focusedIndex < enabledOptions.length) {
						handleSelect(enabledOptions[focusedIndex].value);
					}
					break;

				case "Home":
					event.preventDefault();
					setFocusedIndex(0);
					break;

				case "End":
					event.preventDefault();
					setFocusedIndex(enabledOptions.length - 1);
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, focusedIndex, options, handleSelect, handleClose]);

	useEffect(() => {
		if (!isOpen || focusedIndex < 0 || !menuRef.current) return;

		const focusedElement = menuRef.current.children[
			focusedIndex
		] as HTMLElement | null;
		if (focusedElement?.scrollIntoView) {
			focusedElement.scrollIntoView({
				block: "nearest",
			});
		}
	}, [focusedIndex, isOpen]);

	return (
		<div
			ref={containerRef}
			className={clsx(
				themeClass,
				styles.container,
				fullWidth && styles.triggerFullWidth,
				className
			)}
		>
			<button
				type="button"
				className={clsx(
					styles.trigger({
						size,
						rounded,
						intent,
					}),
					fullWidth && styles.triggerFullWidth
				)}
				onClick={handleToggle}
				disabled={disabled}
				data-state={isOpen ? "open" : "closed"}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-label={selectedOption?.label || placeholder}
			>
				<span>{selectedOption?.label || placeholder}</span>
				<span className={styles.triggerIcon}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 6L8 10L12 6"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</button>

			{(isOpen || isClosing) && (
				<div
					ref={menuRef}
					className={styles.menu}
					data-state={isClosing ? "closing" : "open"}
					data-intent={intent}
					role="listbox"
				>
					{options.map((option, index) => (
						<button
							key={option.value}
							type="button"
							className={styles.menuItem({ intent })}
							onClick={() => handleSelect(option.value)}
							disabled={option.disabled}
							data-selected={option.value === value}
							role="option"
							aria-selected={option.value === value}
							tabIndex={focusedIndex === index ? 0 : -1}
							onMouseEnter={() => setFocusedIndex(index)}
						>
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
