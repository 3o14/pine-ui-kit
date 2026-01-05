import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

// Base button style
const buttonBase = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: themeContract.spacing.xs,
	outline: "none",
	position: "relative",
	border: "1px solid transparent",
	boxSizing: "border-box",
	selectors: {
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});

// Button recipe
export const button = recipe({
	base: buttonBase,

	variants: {
		size: {
			small: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
			},
			xlarge: {
				padding: `${themeContract.spacing.lg} ${themeContract.spacing.xl}`,
				fontSize: themeContract.typography.fontSize.xlarge,
				lineHeight: themeContract.typography.lineHeight.xlarge,
			},
		},

		variant: {
			solid: {},
			outline: {
				backgroundColor: "transparent",
			},
			ghost: {
				backgroundColor: "transparent",
				borderColor: "transparent",
				boxShadow: "none",
			},
			weak: {},
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
	},

	compoundVariants: [
		// Solid variants
		{
			variants: { variant: "solid", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.surface,
				color: themeContract.color.primary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				borderColor: themeContract.color.primary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}05`,
						borderColor: themeContract.color.primary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}10`,
						borderColor: themeContract.color.primary.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				borderColor: themeContract.color.secondary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}05`,
						borderColor: themeContract.color.secondary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}10`,
						borderColor: themeContract.color.secondary.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				borderColor: themeContract.color.success.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}05`,
						borderColor: themeContract.color.success.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}10`,
						borderColor: themeContract.color.success.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				borderColor: themeContract.color.warning.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}05`,
						borderColor: themeContract.color.warning.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}10`,
						borderColor: themeContract.color.warning.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				borderColor: themeContract.color.danger.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}05`,
						borderColor: themeContract.color.danger.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}10`,
						borderColor: themeContract.color.danger.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.surface,
				borderColor: themeContract.color.neutral.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}05`,
						borderColor: themeContract.color.neutral.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}10`,
						borderColor: themeContract.color.neutral.surfaceActive,
					},
				},
			},
		},

		// Ghost variants
		{
			variants: { variant: "ghost", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}15`,
					},
				},
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
	],

	defaultVariants: {
		size: "medium",
		variant: "solid",
		intent: "primary",
		rounded: "medium",
	},
});

export const fullWidth = style({
	width: "100%",
});
