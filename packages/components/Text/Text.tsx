import React from "react";
import clsx from "clsx";
import * as styles from "./Text.css";
import type { ColorIntent } from "../../tokens";
import type { FontSizeToken, FontWeightToken } from "../../tokens/typography";

export type TextSize = FontSizeToken;
export type TextWeight = FontWeightToken;
export type TextIntent = ColorIntent | "inherit";
export type TextAlign = "left" | "center" | "right";
export type TextElement =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"
	| "div"
	| "label";

export interface TextProps {
	as?: TextElement;
	size?: TextSize;
	weight?: TextWeight;
	intent?: TextIntent;
	align?: TextAlign;
	truncate?: boolean;
	children?: React.ReactNode;
	className?: string;
}

export const Text = ({
	as: Component = "p",
	size = "medium",
	weight = "regular",
	intent = "inherit",
	align = "left",
	truncate = false,
	children,
	className,
	...props
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
	return (
		<Component
			className={clsx(
				styles.base,
				styles.sizeVariants[size],
				styles.weightVariants[weight],
				styles.intentVariants[intent],
				styles.alignVariants[align],
				truncate && styles.truncate,
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
};
