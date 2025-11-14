import { style, styleVariants, keyframes } from "@vanilla-extract/css";
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
	borderRadius: themeContract.radius.sm,
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
	],

	defaultVariants: {
		size: "md",
		intent: "primary",
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

// Label text
export const label = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.regular,
	color: themeContract.color.surface.text,
});

export const labelSize = styleVariants({
	sm: {
		fontSize: themeContract.typography.fontSize.sm,
		lineHeight: themeContract.typography.lineHeight.sm,
	},
	md: {
		fontSize: themeContract.typography.fontSize.md,
		lineHeight: themeContract.typography.lineHeight.md,
	},
	lg: {
		fontSize: themeContract.typography.fontSize.lg,
		lineHeight: themeContract.typography.lineHeight.lg,
	},
});
