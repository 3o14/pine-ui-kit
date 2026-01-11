import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// CrayonButton 기본 스타일
export const crayonButton = recipe({
	base: {
		position: "relative",
		overflow: "hidden",
		cursor: "pointer",
		transition: "transform 0.15s ease",
		border: "none",
		padding: 0,
		selectors: {
			"&:active:not(:disabled)": {
				transform: "scale(0.95)",
			},
			"&:disabled": {
				opacity: 0.5,
				cursor: "not-allowed",
			},
		},
	},
	variants: {
		size: {
			sm: {
				minHeight: "40px",
			},
			md: {
				minHeight: "56px",
			},
			lg: {
				minHeight: "72px",
			},
		},
		fullWidth: {
			true: {
				width: "100%",
			},
			false: {},
		},
	},
	defaultVariants: {
		size: "md",
		fullWidth: false,
	},
});

// SVG 스타일
export const crayonButtonSvg = style({
	position: "absolute",
	inset: 0,
	width: "100%",
	height: "100%",
	pointerEvents: "none",
	borderRadius: "20px",
});

// SVG rect 스타일
export const crayonButtonRect = style({
	transition: "all 0.2s ease",
});

// 텍스트 레이어
export const crayonButtonText = recipe({
	base: {
		position: "relative",
		zIndex: 10,
		display: "block",
		fontWeight: 700,
		letterSpacing: "0.3px",
	},
	variants: {
		size: {
			sm: {
				padding: "8px 24px",
				fontSize: "16px",
			},
			md: {
				padding: "14px 32px",
				fontSize: "24px",
			},
			lg: {
				padding: "18px 40px",
				fontSize: "32px",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

// CSS 기반 노이즈 오버레이
export const crayonButtonNoise = style({
	position: "absolute",
	inset: 0,
	pointerEvents: "none",
	opacity: 0.1,
	borderRadius: "25px",
	backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
	mixBlendMode: "multiply",
});
