import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../tokens/theme.css";

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

// Hidden native checkbox
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

// Custom checkbox box base
const checkboxBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	border: "2px solid",
	transition: "all 0.2s ease-in-out",
	backgroundColor: "transparent",
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

		variant: {
			circle: {
				borderRadius: "50%",
			},
			square: {
				borderRadius: themeContract.radius.small,
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

		rounded: {
			small: {
				borderRadius: themeContract.radius.small,
			},
			medium: {
				borderRadius: themeContract.radius.medium,
			},
			large: {
				borderRadius: themeContract.radius.large,
			},
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
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.primary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "primary", checked: true },
			style: {
				borderColor: themeContract.color.primary.surface,
				backgroundColor: themeContract.color.primary.surface,
			},
		},

		// Secondary
		{
			variants: { intent: "secondary", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.secondary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "secondary", checked: true },
			style: {
				borderColor: themeContract.color.secondary.surface,
				backgroundColor: themeContract.color.secondary.surface,
			},
		},

		// Success
		{
			variants: { intent: "success", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.success.surface,
					},
				},
			},
		},
		{
			variants: { intent: "success", checked: true },
			style: {
				borderColor: themeContract.color.success.surface,
				backgroundColor: themeContract.color.success.surface,
			},
		},

		// Warning
		{
			variants: { intent: "warning", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.warning.surface,
					},
				},
			},
		},
		{
			variants: { intent: "warning", checked: true },
			style: {
				borderColor: themeContract.color.warning.surface,
				backgroundColor: themeContract.color.warning.surface,
			},
		},

		// Danger
		{
			variants: { intent: "danger", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.danger.surface,
					},
				},
			},
		},
		{
			variants: { intent: "danger", checked: true },
			style: {
				borderColor: themeContract.color.danger.surface,
				backgroundColor: themeContract.color.danger.surface,
			},
		},

		// Neutral
		{
			variants: { intent: "neutral", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
		{
			variants: { intent: "neutral", checked: true },
			style: {
				borderColor: themeContract.color.neutral.surface,
				backgroundColor: themeContract.color.neutral.surface,
			},
		},

		// Weak variants - Primary
		{
			variants: { variant: "square", intent: "primary", checked: false },
			style: {
				borderColor: themeContract.color.primary.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.primary.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "primary", checked: true },
			style: {
				borderColor: themeContract.color.primary.weak,
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
			},
		},

		// Weak variants - Secondary
		{
			variants: { variant: "square", intent: "secondary", checked: false },
			style: {
				borderColor: themeContract.color.secondary.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.secondary.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "secondary", checked: true },
			style: {
				borderColor: themeContract.color.secondary.weak,
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
			},
		},

		// Weak variants - Success
		{
			variants: { variant: "square", intent: "success", checked: false },
			style: {
				borderColor: themeContract.color.success.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.success.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "success", checked: true },
			style: {
				borderColor: themeContract.color.success.weak,
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
			},
		},

		// Weak variants - Warning
		{
			variants: { variant: "square", intent: "warning", checked: false },
			style: {
				borderColor: themeContract.color.warning.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.warning.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "warning", checked: true },
			style: {
				borderColor: themeContract.color.warning.weak,
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
			},
		},

		// Weak variants - Danger
		{
			variants: { variant: "square", intent: "danger", checked: false },
			style: {
				borderColor: themeContract.color.danger.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.danger.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "danger", checked: true },
			style: {
				borderColor: themeContract.color.danger.weak,
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
			},
		},

		// Weak variants - Neutral
		{
			variants: { variant: "square", intent: "neutral", checked: false },
			style: {
				borderColor: themeContract.color.neutral.weak,
				selectors: {
					"input:hover:not(:disabled) + &": {
						borderColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "neutral", checked: true },
			style: {
				borderColor: themeContract.color.neutral.weak,
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
			},
		},
	],

	defaultVariants: {
		size: "medium",
		variant: "square",
		intent: "primary",
		rounded: "medium",
		checked: false,
	},
});

// Checkmark icon (SVG)
export const checkmarkIcon = style({
	display: "none",
	width: "100%",
	height: "100%",
	color: "white",
	selectors: {
		"input:checked + * > &": {
			display: "block",
			animation: `${checkmark} 0.2s ease-in-out`,
		},
	},
});
