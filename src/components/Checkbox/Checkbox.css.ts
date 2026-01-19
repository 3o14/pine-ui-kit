import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

// Animations
const checkmark = keyframes({
	"0%": {
		strokeDashoffset: 16,
	},
	"100%": {
		strokeDashoffset: 0,
	},
});

// Container (wrapper)
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

// Checkbox root (Base UI)
export const checkboxRoot = style({
	all: "unset",
});

// Custom checkbox box base
const checkboxBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	border: "2px solid",
	borderRadius: themeContract.radius.small,
	transition: "all 0.2s ease-in-out",
	backgroundColor: "transparent",
	selectors: {
		"&:focus-visible": {
			outline: `2px solid ${themeContract.color.primary.surface}`,
			outlineOffset: "2px",
		},
		"&:disabled": {
			cursor: "not-allowed",
		},
	},
});

// Checkbox recipe with size and intent variants
export const checkbox = recipe({
	base: checkboxBase,

	variants: {
		size: {
			small: {
				width: "16px",
				height: "16px",
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

		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},

	},

	compoundVariants: [
		// Primary
		{
			variants: { intent: "primary" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.primary.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.primary.surface,
						backgroundColor: themeContract.color.primary.surface,
					},
				},
			},
		},

		// Secondary
		{
			variants: { intent: "secondary" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.secondary.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.secondary.surface,
						backgroundColor: themeContract.color.secondary.surface,
					},
				},
			},
		},

		// Success
		{
			variants: { intent: "success" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.success.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.success.surface,
						backgroundColor: themeContract.color.success.surface,
					},
				},
			},
		},

		// Warning
		{
			variants: { intent: "warning" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.warning.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.warning.surface,
						backgroundColor: themeContract.color.warning.surface,
					},
				},
			},
		},

		// Danger
		{
			variants: { intent: "danger" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.danger.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.danger.surface,
						backgroundColor: themeContract.color.danger.surface,
					},
				},
			},
		},

		// Neutral
		{
			variants: { intent: "neutral" },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.neutral.surface,
					},
					"&[data-checked]": {
						borderColor: themeContract.color.neutral.surface,
						backgroundColor: themeContract.color.neutral.surface,
					},
				},
			},
		},

	],

	defaultVariants: {
		size: "medium",
		intent: "primary",
	},
});

// Indicator container
export const indicatorContainer = style({
	display: "none",
	width: "100%",
	height: "100%",
	alignItems: "center",
	justifyContent: "center",
	selectors: {
		"&[data-checked]": {
			display: "flex",
		},
	},
});

// Checkmark icon (SVG)
export const checkmarkIcon = style({
	width: "100%",
	height: "100%",
	color: "white",
	animation: `${checkmark} 0.2s ease-in-out`,
});


