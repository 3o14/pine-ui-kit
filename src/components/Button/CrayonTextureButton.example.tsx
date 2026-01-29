/**
 * 순수 CSS만으로 표현한 크레용 질감 예시 버튼
 * - 질감: 그라디언트·블렌드·노이즈 패턴
 * - 테두리: SVG 필터(feTurbulence + feDisplacementMap)로 울퉁불퉁 표현, border-radius는 prop 제어 (1번 방식)
 */
import { useId } from "react";
import type { ButtonHTMLAttributes } from "react";
import * as styles from "./CrayonTextureButton.example.css";

export type CrayonTextureVariant =
	| "purple"
	| "pink"
	| "blue"
	| "yellow"
	| "green"
	| "cream"
	| "dark";

const colorMap: Record<CrayonTextureVariant, { fill: string; text: string }> = {
	purple: { fill: "#B9A7FF", text: "#ffffff" },
	pink: { fill: "#FFB4D4", text: "#ffffff" },
	blue: { fill: "#A7D7FF", text: "#ffffff" },
	yellow: { fill: "#FFE5A7", text: "#1a1a1a" },
	green: { fill: "#B4F4C4", text: "#1a1a1a" },
	cream: { fill: "#FAF3EC", text: "#1a1a1a" },
	dark: { fill: "#4B4B4B", text: "#FAF3EC" },
};

/** variant에 따른 테두리 기본색 (어두운 채우기 → 밝은 테두리, 밝은 채우기 → 어두운 테두리) */
function getDefaultBorderColor(variant: CrayonTextureVariant): string {
	return variant === "dark" ? "#E8E8E8" : "rgba(0,0,0,0.18)";
}

export interface CrayonTextureButtonExampleProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: CrayonTextureVariant;
	/** 테두리 둥근 정도 – prop으로 제어 (1번 조건) */
	borderRadius?: number | string;
	/** 테두리 두께 (px) */
	borderWidth?: number;
	/** 테두리 색 (미지정 시 variant 기준 기본값) */
	borderColor?: string;
}

export const CrayonTextureButtonExample = ({
	children,
	variant = "purple",
	disabled,
	className,
	style,
	borderRadius = 20,
	borderWidth = 2,
	borderColor,
	...props
}: CrayonTextureButtonExampleProps) => {
	const filterId = `bumpy-${useId().replace(/:/g, "")}`;
	const { fill, text } = colorMap[variant];
	const effectiveBorderColor = borderColor ?? getDefaultBorderColor(variant);
	const radius =
		typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

	return (
		<span style={{ display: "inline-block", position: "relative" }}>
			<svg
				aria-hidden
				style={{
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden",
					pointerEvents: "none",
				}}
			>
				<defs>
					<filter
						id={filterId}
						x="-10%"
						y="-10%"
						width="120%"
						height="120%"
					>
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.08"
							numOctaves="3"
							seed="2"
							result="noise"
						/>
						<feDisplacementMap
							in="SourceGraphic"
							in2="noise"
							scale="2.5"
							xChannelSelector="R"
							yChannelSelector="G"
							result="displacement"
						/>
					</filter>
				</defs>
			</svg>
			<button
				type="button"
				className={`${styles.root} ${className ?? ""}`.trim()}
				style={
					{
						"--crayon-fill": fill,
						"--crayon-text": text,
						borderRadius: radius,
						background: "transparent",
						overflow: "visible",
						...style,
					} as React.CSSProperties
				}
				disabled={disabled}
				{...props}
			>
				<span
					className={styles.bumpyShell}
					style={{
						background: fill,
						boxShadow: `inset 0 0 0 ${borderWidth}px ${effectiveBorderColor}`,
						filter: `url(#${filterId})`,
					}}
					aria-hidden
				/>
				<span className={styles.textureLayer} aria-hidden />
				{/* <span className={styles.grainLayer} aria-hidden /> */}
				<span className={styles.edgeHighlight} aria-hidden />
				<span className={styles.label}>{children}</span>
			</button>
		</span>
	);
};
