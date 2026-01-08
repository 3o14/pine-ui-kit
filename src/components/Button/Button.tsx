import React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import * as styles from "./Button.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type ButtonVariant = "solid" | "outline" | "ghost" | "weak";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonIntent = ColorIntent;
export type ButtonRounded = "small" | "medium" | "large";

export interface ButtonProps extends Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"color"
> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	intent?: ButtonIntent;
	rounded?: ButtonRounded;
	fullWidth?: boolean;
	disabled?: boolean;
}

/**
 * Button component built on Base UI
 *
 * @example
 * ```tsx
 * <Button intent="primary" size="medium">
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "solid",
			size = "medium",
			intent = "primary",
			rounded = "medium",
			fullWidth = false,
			disabled = false,
			children,
			className,
			...props
		},
		ref
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;

		return (
			<BaseButton
				ref={ref}
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
			</BaseButton>
		);
	}
);

Button.displayName = "Button";
