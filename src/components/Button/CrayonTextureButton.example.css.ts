/**
 * 순수 CSS로 표현한 크레용 질감 예시
 * - 질감: 그라디언트·블렌드·노이즈 패턴
 * - 테두리: SVG 필터(feTurbulence + feDisplacementMap)로 울퉁불퉁 표현, border-radius는 prop 제어
 */
import { style } from "@vanilla-extract/css";

export const root = style({
	position: "relative",
	overflow: "hidden",
	border: "none",
	cursor: "pointer",
	padding: "16px 32px",
	fontWeight: 700,
	fontSize: "1.5rem",
	transition: "transform 0.2s ease",
	backgroundColor: "var(--crayon-fill, #b9a7ff)",
	color: "var(--crayon-text, #ffffff)",
	selectors: {
		"&:active:not(:disabled)": {
			transform: "scale(0.98)",
		},
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});

/** 배경+테두리만 울퉁불퉁하게 만드는 레이어 (필터 적용) – 텍스트는 이 레이어 밖에 둠 */
export const bumpyShell = style({
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
});

/** 크레용 왁스 반사 + 종이질감 (가로·세로 섬유 + 하이라이트/그림자) */
export const textureLayer = style({
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
	backgroundImage: `
		repeating-linear-gradient(
			90deg,
			transparent 0,
			transparent 1px,
			rgba(255, 255, 255, 0.07) 1px,
			rgba(255, 255, 255, 0.07) 2px
		),
		repeating-linear-gradient(
			0deg,
			transparent 0,
			transparent 1px,
			rgba(0, 0, 0, 0.05) 1px,
			rgba(0, 0, 0, 0.05) 2px
		),
		radial-gradient(
			ellipse 80% 50% at 28% 25%,
			rgba(255, 255, 255, 0.25) 0%,
			transparent 50%
		),
		radial-gradient(
			ellipse 60% 40% at 75% 80%,
			rgba(0, 0, 0, 0.15) 0%,
			transparent 50%
		)
	`,
	mixBlendMode: "overlay",
});

/** 입자감(그레인) – 작은 점 패턴으로 크레용 마감 느낌 */
export const grainLayer = style({
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
	backgroundImage: `radial-gradient(
		circle at center,
		rgba(0, 0, 0, 0.12) 1px,
		transparent 1px
	)`,
	backgroundSize: "3px 3px",
	mixBlendMode: "multiply",
	opacity: 0.8,
});

/** 왁스 가장자리 (얇은 하이라이트로 입체감) */
export const edgeHighlight = style({
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
	boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)",
});

/** 텍스트 레이어 – 필터 적용 제외, 다른 글씨체 적용 가능 */
export const label = style({
	position: "relative",
	zIndex: 1,
	filter: "none",
});
