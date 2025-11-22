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
	| "div";

export interface TextProps {
	/** HTML 요소 타입 (다형성 지원) */
	as?: TextElement;
	/** 텍스트 크기 */
	size?: TextSize;
	/** 텍스트 굵기 */
	weight?: TextWeight;
	/** 텍스트 색상/의도 */
	intent?: TextIntent;
	/** 텍스트 정렬 */
	align?: TextAlign;
	/** 텍스트 말줄임 */
	truncate?: boolean;
	/** 자식 요소 */
	children?: React.ReactNode;
	/** 추가 클래스명 */
	className?: string;
}

export const Text = ({
	as: Component = "p",
	size = "md",
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

