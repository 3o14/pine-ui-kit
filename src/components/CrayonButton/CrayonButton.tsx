"use client";

import React from "react";
import { ButtonHTMLAttributes } from "react";
import * as styles from "./CrayonButton.css";

export type CrayonButtonVariant =
	| "purple"
	| "pink"
	| "blue"
	| "yellow"
	| "green"
	| "cream"
	| "dark";

export interface CrayonButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
	/**
	 * 크레용 버튼 색상 variant
	 * @default "purple"
	 */
	variant?: CrayonButtonVariant;
	/**
	 * 텍스트 색상 (기본값: variant에 따라 자동 설정)
	 */
	textColor?: string;
	/**
	 * 버튼 크기
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * 전체 너비 버튼
	 * @default false
	 */
	fullWidth?: boolean;
}

const colorMap: Record<CrayonButtonVariant, string> = {
	purple: "#B9A7FF",
	pink: "#FFB4D4",
	blue: "#A7D7FF",
	yellow: "#FFE5A7",
	green: "#B4F4C4",
	cream: "#FAF3EC",
	dark: "#4B4B4B",
} as const;

/**
 * CrayonButton - 크레용 스타일의 버튼 컴포넌트
 *
 * SVG 필터를 사용한 크레용 질감 효과가 적용된 버튼입니다.
 * 크레용 테마의 일부로 사용되며, 독립적으로도 사용할 수 있습니다.
 *
 * @example
 * ```tsx
 * <CrayonButton variant="purple">Click me</CrayonButton>
 * ```
 */
export const CrayonButton = React.forwardRef<
	HTMLButtonElement,
	CrayonButtonProps
>(
	(
		{
			children,
			variant = "purple",
			textColor,
			size = "md",
			fullWidth = false,
			className = "",
			disabled,
			...props
		},
		ref
	) => {
		const fillColor = colorMap[variant];
		const defaultTextColor = variant === "dark" ? "#FAF3EC" : "#ffffff";
		const finalTextColor = textColor || defaultTextColor;

		return (
			<button
				ref={ref}
				className={styles.crayonButton({
					size,
					fullWidth,
				})}
				style={{
					border: "none",
					padding: 0,
					...props.style,
				}}
				disabled={disabled}
				{...props}
			>
				{/* SVG 배경 (크레파스 질감) */}
				<svg
					className={styles.crayonButtonSvg}
					viewBox="0 0 300 80"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						{/* 크레파스 질감 필터 */}
						<filter
							id={`crayon-${variant}`}
							x="-5%"
							y="-5%"
							width="110%"
							height="110%"
						>
							{/* 노이즈 생성 (입자감) */}
							<feTurbulence
								type="fractalNoise"
								baseFrequency="0.9"
								numOctaves="4"
								seed="15"
								result="noise"
							/>

							{/* 가장자리 흔들림 효과 */}
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="3"
								xChannelSelector="R"
								yChannelSelector="G"
								result="displacement"
							/>

							{/* 약간의 번짐 효과 */}
							<feGaussianBlur stdDeviation="0.5" result="blur" />

							{/* 명암 조절로 입체감 */}
							<feComponentTransfer result="contrast">
								<feFuncR type="linear" slope="1.2" intercept="-0.1" />
								<feFuncG type="linear" slope="1.2" intercept="-0.1" />
								<feFuncB type="linear" slope="1.2" intercept="-0.1" />
							</feComponentTransfer>
						</filter>

						{/* 내부 텍스처용 추가 필터 */}
						<filter id={`texture-${variant}`}>
							<feTurbulence
								type="turbulence"
								baseFrequency="1.5"
								numOctaves="2"
								seed="10"
								result="texture"
							/>
							<feColorMatrix
								in="texture"
								type="saturate"
								values="0"
								result="grayscale"
							/>
							<feBlend in="SourceGraphic" in2="grayscale" mode="multiply" />
						</filter>
					</defs>

					{/* 메인 버튼 shape */}
					<rect
						x="2"
						y="2"
						width="296"
						height="76"
						rx="25"
						fill={fillColor}
						stroke={variant === "dark" ? "#FAF3EC" : "none"}
						strokeWidth={variant === "dark" ? "2" : "0"}
						filter={`url(#crayon-${variant})`}
						className={styles.crayonButtonRect}
					/>

					{/* 텍스처 오버레이 */}
					<rect
						x="2"
						y="2"
						width="296"
						height="76"
						rx="25"
						fill={fillColor}
						opacity="0.3"
						filter={`url(#texture-${variant})`}
					/>
				</svg>

				{/* 텍스트 레이어 */}
				<span
					className={styles.crayonButtonText({ size })}
					style={{ color: finalTextColor }}
				>
					{children}
				</span>

				{/* CSS 기반 노이즈 오버레이 (보강용) */}
				<div className={styles.crayonButtonNoise} />
			</button>
		);
	}
);

CrayonButton.displayName = "CrayonButton";
