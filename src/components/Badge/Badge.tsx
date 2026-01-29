import React from "react";
import clsx from "clsx";
import * as styles from "./Badge.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type BadgeSize = "small" | "medium" | "large" | "xlarge";
export type BadgeVariant = "solid" | "outline" | "subtle" | "weak";
export type BadgeIntent = ColorIntent;
export type BadgeRounded = "small" | "medium" | "large";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: BadgeSize;
	variant?: BadgeVariant;
	intent?: BadgeIntent;
	rounded?: BadgeRounded;
	showDot?: boolean;
	children: React.ReactNode;
}

/**
 * Badge component for displaying labels, tags, or status indicators.
 *
 * @param BadgeProps
 * @param variant - Visual style variant (solid, outline, subtle, weak)
 * @param size - Size of the badge (small, medium, large, xlarge)
 * @param intent - Color intent (primary, secondary, success, warning, danger, neutral)
 * @param rounded - Border radius size (small, medium, large)
 * @param showDot - Whether to show a dot indicator
 * @param children - Badge content
 */
export const Badge = ({
	size = "medium",
	variant = "solid",
	intent = "primary",
	rounded = "medium",
	showDot = false,
	children,
	className,
	...props
}: BadgeProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<span
			className={clsx(
				themeClass,
				styles.badge({
					size,
					variant,
					intent,
					rounded,
				}),
				className,
			)}
			{...props}
		>
			{showDot && <span className={styles.dot} />}
			<span className={styles.content}>{children}</span>
		</span>
	);
};
