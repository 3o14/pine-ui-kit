import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

export const label = recipe({
	base: {
		display: "block",
		marginBottom: "4px",
		fontFamily: themeContract.typography.fontFamily.sans,
		fontWeight: themeContract.typography.fontWeight.medium,
		color: themeContract.color.surface.text,
	},
	variants: {
		size: {
			small: {
				fontSize: themeContract.typography.fontSize.xsmall,
				lineHeight: themeContract.typography.lineHeight.xsmall,
			},
			medium: {
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
			},
			large: {
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
			},
			xlarge: {
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
			},
		},
	},
	defaultVariants: {
		size: "medium",
	},
});

export const helperText = recipe({
	base: {
		display: "block",
		marginTop: "4px",
		fontFamily: themeContract.typography.fontFamily.sans,
	},
	variants: {
		size: {
			small: {
				fontSize: themeContract.typography.fontSize.xsmall,
				lineHeight: themeContract.typography.lineHeight.xsmall,
			},
			medium: {
				fontSize: themeContract.typography.fontSize.xsmall,
				lineHeight: themeContract.typography.lineHeight.xsmall,
			},
			large: {
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
			},
			xlarge: {
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
			},
		},
		status: {
			default: {
				color: themeContract.color.surface.textMuted,
			},
			error: {
				color: themeContract.color.danger.surface,
			},
			success: {
				color: themeContract.color.success.surface,
			},
		},
	},
	defaultVariants: {
		size: "medium",
		status: "default",
	},
});

export const container = style({
	display: "flex",
	flexDirection: "column",
});

export const containerVariants = styleVariants({
	default: {
		width: "auto",
	},
	fullWidth: {
		width: "100%",
	},
});

export const inputBase = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.regular,
	color: themeContract.color.surface.text,
	outline: "none",
	transition: "all 0.2s ease-in-out",
	width: "100%",
	boxSizing: "border-box",
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
});

export const input = recipe({
	base: inputBase,

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

		rounded: {
			small: {},
			medium: {},
			large: {},
		},

		variant: {
			outline: {
				backgroundColor: "transparent",
			},
			filled: {
				backgroundColor: themeContract.color.surface.backgroundElevated,
			},
		},

		status: {
			default: {},
			error: {},
			success: {},
		},
	},

	compoundVariants: [
		// Outline - Default
		{
			variants: { variant: "outline", status: "default" },
			style: {
				border: `1px solid ${themeContract.color.surface.outline}`,
				":focus": {
					borderColor: themeContract.color.primary.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.primary.surface}20`,
				},
			},
		},
		// Outline - Error
		{
			variants: { variant: "outline", status: "error" },
			style: {
				border: `1px solid ${themeContract.color.danger.border}`,
				":focus": {
					borderColor: themeContract.color.danger.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.danger.surface}20`,
				},
			},
		},
		// Outline - Success
		{
			variants: { variant: "outline", status: "success" },
			style: {
				border: `1px solid ${themeContract.color.success.border}`,
				":focus": {
					borderColor: themeContract.color.success.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.success.surface}20`,
				},
			},
		},

		// Filled - Default
		{
			variants: { variant: "filled", status: "default" },
			style: {
				border: "1px solid transparent",
				borderBottom: `2px solid ${themeContract.color.surface.outline}`,
				":focus": {
					borderBottomColor: themeContract.color.primary.surface,
					backgroundColor: themeContract.color.surface.background,
				},
			},
		},
		// Filled - Error
		{
			variants: { variant: "filled", status: "error" },
			style: {
				border: "1px solid transparent",
				borderBottom: `2px solid ${themeContract.color.danger.border}`,
				":focus": {
					borderBottomColor: themeContract.color.danger.surface,
					backgroundColor: themeContract.color.surface.background,
				},
			},
		},
		// Filled - Success
		{
			variants: { variant: "filled", status: "success" },
			style: {
				border: "1px solid transparent",
				borderBottom: `2px solid ${themeContract.color.success.border}`,
				":focus": {
					borderBottomColor: themeContract.color.success.surface,
					backgroundColor: themeContract.color.surface.background,
				},
			},
		},

		// Rounded variants for outline
		{
			variants: { variant: "outline", rounded: "small" },
			style: {
				borderRadius: themeContract.radius.small,
			},
		},
		{
			variants: { variant: "outline", rounded: "medium" },
			style: {
				borderRadius: themeContract.radius.medium,
			},
		},
		{
			variants: { variant: "outline", rounded: "large" },
			style: {
				borderRadius: themeContract.radius.large,
			},
		},

		// Rounded variants for filled
		{
			variants: { variant: "filled", rounded: "small" },
			style: {
				borderRadius: `${themeContract.radius.small} ${themeContract.radius.small} 0 0`,
			},
		},
		{
			variants: { variant: "filled", rounded: "medium" },
			style: {
				borderRadius: `${themeContract.radius.medium} ${themeContract.radius.medium} 0 0`,
			},
		},
		{
			variants: { variant: "filled", rounded: "large" },
			style: {
				borderRadius: `${themeContract.radius.large} ${themeContract.radius.large} 0 0`,
			},
		},
	],

	defaultVariants: {
		size: "medium",
		rounded: "medium",
		variant: "outline",
		status: "default",
	},
});



