import React from "react";
import {
	type ColorIntent,
	lightColors,
	darkColors,
	spacing,
	fontFamily,
	fontWeight,
	fontSize,
	lineHeight,
	radius,
	shadow,
} from "../../tokens";

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
	mode?: "light" | "dark";
}

const getButtonStyles = (
	variant: ButtonVariant,
	intent: ButtonIntent,
	size: ButtonSize,
	fullWidth: boolean,
	disabled: boolean,
	mode: "light" | "dark"
): React.CSSProperties => {
	const colors = mode === "dark" ? darkColors : lightColors;
	const intentColors = colors.palette[intent];

	// Size styles
	const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
		sm: {
			padding: `${spacing.xs} ${spacing.sm}`,
			fontSize: fontSize.sm,
			lineHeight: lineHeight.sm,
		},
		md: {
			padding: `${spacing.sm} ${spacing.md}`,
			fontSize: fontSize.md,
			lineHeight: lineHeight.md,
		},
		lg: {
			padding: `${spacing.md} ${spacing.lg}`,
			fontSize: fontSize.lg,
			lineHeight: lineHeight.lg,
		},
	};

	// Variant styles
	const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
		solid: {
			backgroundColor: intentColors.surface,
			color: intentColors.text,
			border: "none",
			boxShadow: shadow.sm,
		},
		outline: {
			backgroundColor: "transparent",
			color: intentColors.surface,
			border: `1px solid ${intentColors.border}`,
			boxShadow: "none",
		},
		ghost: {
			backgroundColor: "transparent",
			color: intentColors.surface,
			border: "none",
			boxShadow: "none",
		},
	};

	const baseStyles: React.CSSProperties = {
		fontFamily: fontFamily.sans,
		fontWeight: fontWeight.semibold,
		borderRadius: radius.md,
		cursor: disabled ? "not-allowed" : "pointer",
		transition: "all 0.2s ease-in-out",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.xs,
		width: fullWidth ? "100%" : "auto",
		opacity: disabled ? 0.5 : 1,
		outline: "none",
		position: "relative",
		...sizeStyles[size],
		...variantStyles[variant],
	};

	return baseStyles;
};

export const Button = ({
	variant = "solid",
	size = "md",
	intent = "primary",
	fullWidth = false,
	disabled = false,
	mode = "light",
	children,
	className,
	style,
	onMouseEnter,
	onMouseLeave,
	onMouseDown,
	onMouseUp,
	...props
}: ButtonProps) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [isActive, setIsActive] = React.useState(false);

	const colors = mode === "dark" ? darkColors : lightColors;
	const intentColors = colors.palette[intent];

	const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			setIsHovered(true);
			onMouseEnter?.(e);
		}
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			setIsHovered(false);
			setIsActive(false);
			onMouseLeave?.(e);
		}
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			setIsActive(true);
			onMouseDown?.(e);
		}
	};

	const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			setIsActive(false);
			onMouseUp?.(e);
		}
	};

	const getInteractionStyles = (): React.CSSProperties => {
		if (disabled) return {};

		if (isActive) {
			if (variant === "solid") {
				return {
					backgroundColor: intentColors.surfaceActive,
					transform: "scale(0.98)",
				};
			}
			if (variant === "outline") {
				return {
					backgroundColor: `${intentColors.surface}10`,
					borderColor: intentColors.surfaceActive,
				};
			}
			if (variant === "ghost") {
				return {
					backgroundColor: `${intentColors.surface}15`,
				};
			}
		}

		if (isHovered) {
			if (variant === "solid") {
				return {
					backgroundColor: intentColors.surfaceHover,
					boxShadow: shadow.md,
				};
			}
			if (variant === "outline") {
				return {
					backgroundColor: `${intentColors.surface}05`,
					borderColor: intentColors.surfaceHover,
				};
			}
			if (variant === "ghost") {
				return {
					backgroundColor: `${intentColors.surface}10`,
				};
			}
		}

		return {};
	};

	const buttonStyles = {
		...getButtonStyles(variant, intent, size, fullWidth, disabled, mode),
		...getInteractionStyles(),
		...style,
	};

	return (
		<button
			className={className}
			style={buttonStyles}
			disabled={disabled}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			{...props}
		>
			{children}
		</button>
	);
};
