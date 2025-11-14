import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "../../tokens/theme.css";

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

export const label = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.medium,
	color: themeContract.color.surface.text,
	display: "block",
});

export const labelSize = styleVariants({
	sm: {
		fontSize: themeContract.typography.fontSize.xs,
		marginBottom: themeContract.spacing.xxs,
	},
	md: {
		fontSize: themeContract.typography.fontSize.sm,
		marginBottom: themeContract.spacing.xs,
	},
	lg: {
		fontSize: themeContract.typography.fontSize.md,
		marginBottom: themeContract.spacing.xs,
	},
});

export const helperText = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.xs,
	marginTop: themeContract.spacing.xxs,
});

export const helperTextStatus = styleVariants({
	default: {
		color: themeContract.color.surface.textMuted,
	},
	error: {
		color: themeContract.color.danger.surface,
	},
	success: {
		color: themeContract.color.success.surface,
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
			sm: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.sm,
				lineHeight: themeContract.typography.lineHeight.sm,
			},
			md: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.md,
				lineHeight: themeContract.typography.lineHeight.md,
			},
			lg: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.lg,
				lineHeight: themeContract.typography.lineHeight.lg,
			},
		},

		variant: {
			outline: {
				backgroundColor: "transparent",
				borderRadius: themeContract.radius.md,
			},
			filled: {
				backgroundColor: themeContract.color.surface.backgroundElevated,
				borderRadius: `${themeContract.radius.md} ${themeContract.radius.md} 0 0`,
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
	],

	defaultVariants: {
		size: "md",
		variant: "outline",
		status: "default",
	},
});
