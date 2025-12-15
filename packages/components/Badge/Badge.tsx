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
	// ThemeProvider의 테마를 자동으로 감지 (없으면 기본값 사용)
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
				className
			)}
			{...props}
		>
			{showDot && <span className={styles.dot} />}
			{children}
		</span>
	);
};
