import React from "react";
import clsx from "clsx";
import * as styles from "./Badge.css";
import { lightTheme, darkTheme } from "../../tokens/theme.css";
import type { ColorIntent } from "../../tokens";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeVariant = "solid" | "outline" | "subtle";
export type BadgeIntent = ColorIntent;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: BadgeSize;
	variant?: BadgeVariant;
	intent?: BadgeIntent;
	rounded?: boolean;
	showDot?: boolean;
	mode?: "light" | "dark";
	children: React.ReactNode;
}

export const Badge = ({
	size = "md",
	variant = "solid",
	intent = "primary",
	rounded = false,
	showDot = false,
	mode = "light",
	children,
	className,
	...props
}: BadgeProps) => {
	const themeClass = mode === "dark" ? darkTheme : lightTheme;

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
