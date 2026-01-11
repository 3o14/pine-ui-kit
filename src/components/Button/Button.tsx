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
 * Button component for user interactions.
 *
 * @param ButtonProps
 * @param variant - Visual style variant (solid, outline, ghost, weak)
 * @param size - Size of the button (small, medium, large, xlarge)
 * @param intent - Color intent (primary, secondary, success, warning, danger, neutral)
 * @param rounded - Border radius size (small, medium, large)
 * @param disabled - Whether the button is disabled
 * @param fullWidth - Whether the button should take full width
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

		const isCrayonTheme = themeContext?.theme === "crayon";

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
					isCrayonTheme && styles.crayonButtonStyle, // 크레용 테마 기본 스타일
					isCrayonTheme && styles.crayonButtonAfter, // 크레용 외곽선 효과
					isCrayonTheme && variant === "solid" && styles.crayonSolidStyle, // 크레용 Solid 스타일
					isCrayonTheme &&
						variant === "solid" &&
						styles.crayonSolidBefore, // 크레용 Solid 텍스처 오버레이
					isCrayonTheme &&
						(variant === "outline" || variant === "ghost") &&
						styles.crayonOutlineStyle, // 크레용 Outline/Ghost 스타일
					isCrayonTheme &&
						(variant === "outline" || variant === "ghost") &&
						styles.crayonOutlineBefore, // 크레용 Outline/Ghost 텍스처
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
