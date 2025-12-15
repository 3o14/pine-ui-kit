import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens/theme.css";

export const container = style({
	display: "inline-flex",
	alignItems: "center",
	gap: themeContract.spacing.xs,
	cursor: "pointer",
	userSelect: "none",
	selectors: {
		"&:has(input:disabled)": {
			cursor: "not-allowed",
			opacity: 0.5,
		},
	},
});

export const hiddenInput = style({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0,
});

const trackBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	flexShrink: 0,
	borderRadius: themeContract.radius.xlarge,
	transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	selectors: {
		"input:focus-visible + &": {
			outline: `2px solid ${themeContract.color.primary.surface}`,
			outlineOffset: "2px",
		},
		"input:disabled + &": {
			cursor: "not-allowed",
		},
	},
});

export const track = recipe({
	base: trackBase,

	variants: {
		size: {
			small: {
				width: "30px",
				height: "18px",
				padding: "2px 4px",
			},
			medium: {
				width: "43px",
				height: "24px",
				padding: "2px 3px",
			},
			large: {
				width: "54px",
				height: "30px",
				padding: "2px 4px",
			},
			xlarge: {
				width: "66px",
				height: "36px",
				padding: "2px 4px",
			},
		},

		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},

		checked: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		// Primary
		{
			variants: { intent: "primary", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "primary", checked: true },
			style: {
				backgroundColor: themeContract.color.primary.surface,
			},
		},

		// Secondary
		{
			variants: { intent: "secondary", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "secondary", checked: true },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
			},
		},

		// Success
		{
			variants: { intent: "success", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "success", checked: true },
			style: {
				backgroundColor: themeContract.color.success.surface,
			},
		},

		// Warning
		{
			variants: { intent: "warning", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "warning", checked: true },
			style: {
				backgroundColor: themeContract.color.warning.surface,
			},
		},

		// Danger
		{
			variants: { intent: "danger", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "danger", checked: true },
			style: {
				backgroundColor: themeContract.color.danger.surface,
			},
		},

		// Neutral
		{
			variants: { intent: "neutral", checked: false },
			style: {
				backgroundColor: themeContract.color.surface.outline,
			},
		},
		{
			variants: { intent: "neutral", checked: true },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
			},
		},
	],

	defaultVariants: {
		size: "medium",
		intent: "primary",
		checked: false,
	},
});

// Switch thumb (sliding circle)
const thumbBase = style({
	backgroundColor: "white",
	borderRadius: themeContract.radius.xlarge,
	transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
	boxShadow: themeContract.shadow.small,
});

export const thumb = recipe({
	base: thumbBase,

	variants: {
		size: {
			small: {
				width: "14px",
				height: "14px",
			},
			medium: {
				width: "20px",
				height: "20px",
			},
			large: {
				width: "24px",
				height: "24px",
			},
			xlarge: {
				width: "28px",
				height: "28px",
			},
		},

		checked: {
			true: {},
			false: {
				transform: "translateX(0)",
			},
		},
	},

	compoundVariants: [
		// Checked state - move thumb to right based on size
		{
			variants: { size: "small", checked: true },
			style: {
				transform: "translateX(16px)",
			},
		},
		{
			variants: { size: "medium", checked: true },
			style: {
				transform: "translateX(22px)",
			},
		},
		{
			variants: { size: "large", checked: true },
			style: {
				transform: "translateX(28px)",
			},
		},
		{
			variants: { size: "xlarge", checked: true },
			style: {
				transform: "translateX(34px)",
			},
		},
	],

	defaultVariants: {
		size: "medium",
		checked: false,
	},
});
