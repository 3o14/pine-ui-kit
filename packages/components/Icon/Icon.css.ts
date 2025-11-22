import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../tokens/theme.css";

// Base icon styles
export const base = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	userSelect: "none",
	lineHeight: 1,
	fill: "none",
});

// Icon recipe with size and color variants
export const icon = recipe({
	base,
	variants: {
		size: {
			xs: {
				width: "12px",
				height: "12px",
			},
			sm: {
				width: "16px",
				height: "16px",
			},
			md: {
				width: "20px",
				height: "20px",
			},
			lg: {
				width: "24px",
				height: "24px",
			},
			xl: {
				width: "32px",
				height: "32px",
			},
		},
		intent: {
			primary: {
				color: themeContract.color.primary.surface,
				stroke: themeContract.color.primary.surface,
			},
			secondary: {
				color: themeContract.color.secondary.surface,
				stroke: themeContract.color.secondary.surface,
			},
			success: {
				color: themeContract.color.success.surface,
				stroke: themeContract.color.success.surface,
			},
			warning: {
				color: themeContract.color.warning.surface,
				stroke: themeContract.color.warning.surface,
			},
			danger: {
				color: themeContract.color.danger.surface,
				stroke: themeContract.color.danger.surface,
			},
			neutral: {
				color: themeContract.color.neutral.surface,
				stroke: themeContract.color.neutral.surface,
			},
			current: {
				color: "currentColor",
				stroke: "currentColor",
			},
		},
	},
	defaultVariants: {
		size: "md",
		intent: "current",
	},
});

