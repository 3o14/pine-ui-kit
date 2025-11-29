import React, { useContext } from "react";
import clsx from "clsx";
import * as styles from "./Badge.css";
import { lightTheme } from "../../tokens/theme.css";
import type { ColorIntent } from "../../tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeVariant = "solid" | "outline" | "subtle" | "weak";
export type BadgeIntent = ColorIntent;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: BadgeSize;
	variant?: BadgeVariant;
	intent?: BadgeIntent;
	rounded?: boolean;
	showDot?: boolean;
	children: React.ReactNode;
}

export const Badge = ({
	size = "md",
	variant = "solid",
	intent = "primary",
	rounded = false,
	showDot = false,
	children,
	className,
	...props
}: BadgeProps) => {
	// ThemeProvider의 테마를 자동으로 감지 (없으면 기본값 사용)
	// useContext는 항상 최상위에서 호출되어야 하므로 조건부 호출 문제 없음
	const themeContext = useContext(ThemeContext);

	// 항상 ThemeProvider의 테마를 사용 (없으면 기본값 light 사용)
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
