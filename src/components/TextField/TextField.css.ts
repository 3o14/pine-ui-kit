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

// 크레용 테마 스타일
// 크레용 TextField 외곽선 효과 (::after)
export const crayonTextFieldAfter = style({
	selectors: {
		"[class*='crayonLightTheme'] &::after, [class*='crayonDarkTheme'] &::after":
			{
				content: '""',
				position: "absolute",
				top: "-1px",
				left: "-1px",
				right: "-1px",
				bottom: "-1px",
				borderRadius: "inherit",
				border: "1px solid currentColor",
				opacity: 0.4,
				filter: "url(#crayon-edge)",
				pointerEvents: "none",
				zIndex: -1,
			},
	},
});

// 크레용 TextField 스타일
export const crayonTextFieldStyle = style({
	position: "relative",
	selectors: {
		"[class*='crayonLightTheme'] &, [class*='crayonDarkTheme'] &": {
			filter: "url(#crayon-edge)",
			border: "3px solid currentColor !important",
			boxShadow: `
				0 1px 0 0 rgba(0, 0, 0, 0.05),
				inset 0 1px 0 rgba(255, 255, 255, 0.8)
			`,
		},
		"[class*='crayonLightTheme'] &:focus, [class*='crayonDarkTheme'] &:focus":
			{
				filter: "url(#crayon-edge) brightness(1.05)",
				boxShadow: `
					0 2px 0 0 rgba(0, 0, 0, 0.08),
					inset 0 1px 0 rgba(255, 255, 255, 0.9)
				`,
			},
		"[class*='crayonLightTheme'] &:disabled, [class*='crayonDarkTheme'] &:disabled":
			{
				opacity: "0.4 !important",
				filter: "grayscale(0.5) url(#crayon-edge) !important",
			},
	},
});

// 크레용 TextField 텍스처 (::before)
export const crayonTextFieldBefore = style({
	selectors: {
		"[class*='crayonLightTheme'] &::before, [class*='crayonDarkTheme'] &::before":
			{
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: "inherit",
				backgroundImage: `
				repeating-linear-gradient(
					45deg,
					transparent,
					transparent 3px,
					rgba(0, 0, 0, 0.02) 3px,
					rgba(0, 0, 0, 0.02) 4px
				)
			`,
				pointerEvents: "none",
			},
	},
});
