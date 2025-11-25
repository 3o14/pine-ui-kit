import React, { useContext } from "react";
import clsx from "clsx";
import * as styles from "./Button.css";
import { lightTheme } from "../../tokens/theme.css";
import type { ColorIntent } from "../../tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonIntent = ColorIntent;

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	intent?: ButtonIntent;
	fullWidth?: boolean;
	disabled?: boolean;
}

export const Button = ({
	variant = "solid",
	size = "md",
	intent = "primary",
	fullWidth = false,
	disabled = false,
	children,
	className,
	...props
}: ButtonProps) => {
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<button
			className={clsx(
				themeClass,
				styles.base,
				styles[variant][intent],
				styles.size[size],
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
