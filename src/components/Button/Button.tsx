import React from "react";
import clsx from "clsx";
import * as styles from "./Button.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type ButtonVariant = "solid" | "outline" | "ghost" | "weak";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonIntent = ColorIntent;
export type ButtonRounded = "small" | "medium" | "large";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	intent?: ButtonIntent;
	rounded?: ButtonRounded;
	fullWidth?: boolean;
	disabled?: boolean;
}

export const Button = ({
	variant = "solid",
	size = "medium",
	intent = "primary",
	rounded = "medium",
	fullWidth = false,
	disabled = false,
	children,
	className,
	...props
}: ButtonProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<button
			className={clsx(
				themeClass,
				styles.button({
					variant,
					intent,
					size,
					rounded,
				}),
				fullWidth && styles.fullWidth,
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
