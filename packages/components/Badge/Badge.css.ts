import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../tokens/theme.css";

// Base badge style
const badgeBase = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: themeContract.spacing.xxs,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.medium,
	border: "1px solid transparent",
	transition: "all 0.2s ease-in-out",
	whiteSpace: "nowrap",
	verticalAlign: "middle",
});

// Badge recipe
export const badge = recipe({
	base: badgeBase,

	variants: {
		size: {
			small: {
				fontSize: themeContract.typography.fontSize.xs,
				lineHeight: themeContract.typography.lineHeight.xs,
				padding: `${themeContract.spacing.xxxs} ${themeContract.spacing.xs}`,
				minHeight: "20px",
			},
			medium: {
				fontSize: themeContract.typography.fontSize.sm,
				lineHeight: themeContract.typography.lineHeight.sm,
				padding: `${themeContract.spacing.xxs} ${themeContract.spacing.sm}`,
				minHeight: "24px",
			},
			large: {
				fontSize: themeContract.typography.fontSize.md,
				lineHeight: themeContract.typography.lineHeight.md,
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.md}`,
				minHeight: "28px",
			},
		},

		variant: {
			solid: {},
			outline: {
				backgroundColor: "transparent",
			},
			subtle: {},
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
				borderRadius: themeContract.radius.sm,
			},
			medium: {
				borderRadius: themeContract.radius.md,
			},
			large: {
				borderRadius: themeContract.radius.lg,
			},
			xlarge: {
				borderRadius: themeContract.radius.xl,
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
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				borderColor: themeContract.color.primary.border,
				color: themeContract.color.primary.surface,
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				borderColor: themeContract.color.secondary.border,
				color: themeContract.color.secondary.surface,
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				borderColor: themeContract.color.success.border,
				color: themeContract.color.success.surface,
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				borderColor: themeContract.color.warning.border,
				color: themeContract.color.warning.surface,
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				borderColor: themeContract.color.danger.border,
				color: themeContract.color.danger.surface,
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				borderColor: themeContract.color.neutral.border,
				color: themeContract.color.neutral.surface,
			},
		},

		// Subtle variants
		{
			variants: { variant: "subtle", intent: "primary" },
			style: {
				backgroundColor: `${themeContract.color.primary.surface}20`,
				color: themeContract.color.primary.surface,
			},
		},
		{
			variants: { variant: "subtle", intent: "secondary" },
			style: {
				backgroundColor: `${themeContract.color.secondary.surface}20`,
				color: themeContract.color.secondary.surface,
			},
		},
		{
			variants: { variant: "subtle", intent: "success" },
			style: {
				backgroundColor: `${themeContract.color.success.surface}20`,
				color: themeContract.color.success.surface,
			},
		},
		{
			variants: { variant: "subtle", intent: "warning" },
			style: {
				backgroundColor: `${themeContract.color.warning.surface}20`,
				color: themeContract.color.warning.surface,
			},
		},
		{
			variants: { variant: "subtle", intent: "danger" },
			style: {
				backgroundColor: `${themeContract.color.danger.surface}20`,
				color: themeContract.color.danger.surface,
			},
		},
		{
			variants: { variant: "subtle", intent: "neutral" },
			style: {
				backgroundColor: `${themeContract.color.neutral.surface}20`,
				color: themeContract.color.neutral.surface,
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
			},
		},
		{
			variants: { variant: "weak", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
			},
		},
		{
			variants: { variant: "weak", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
			},
		},
		{
			variants: { variant: "weak", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
			},
		},
		{
			variants: { variant: "weak", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
			},
		},
		{
			variants: { variant: "weak", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
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

// Dot indicator (optional)
export const dot = style({
	width: "6px",
	height: "6px",
	borderRadius: themeContract.radius.full,
	backgroundColor: "currentColor",
});
