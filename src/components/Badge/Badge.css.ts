import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

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
	boxShadow: themeContract.shadow.pixelBox,
	margin: themeContract.shadow.pixelBoxMargin,
});

export const badge = recipe({
	base: badgeBase,

	variants: {
		size: {
			small: {
				fontSize: themeContract.typography.fontSize.xsmall,
				lineHeight: themeContract.typography.lineHeight.xsmall,
				padding: `${themeContract.spacing.xxxs} ${themeContract.spacing.xs}`,
				minHeight: "20px",
			},
			medium: {
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
				padding: `${themeContract.spacing.xxs} ${themeContract.spacing.sm}`,
				minHeight: "24px",
			},
			large: {
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.md}`,
				minHeight: "28px",
			},
			xlarge: {
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.lg}`,
				minHeight: "32px",
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
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
				borderColor: "transparent",
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
				borderColor: "transparent",
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
				borderColor: "transparent",
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
				borderColor: "transparent",
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				borderColor: themeContract.color.primary.border,
				color: themeContract.color.primary.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.primary.border}, 4px 0 0 0 ${themeContract.color.primary.border}, 0 4px 0 0 ${themeContract.color.primary.border}, 0 calc(-4px) 0 0 ${themeContract.color.primary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				borderColor: themeContract.color.secondary.border,
				color: themeContract.color.secondary.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.secondary.border}, 4px 0 0 0 ${themeContract.color.secondary.border}, 0 4px 0 0 ${themeContract.color.secondary.border}, 0 calc(-4px) 0 0 ${themeContract.color.secondary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				borderColor: themeContract.color.success.border,
				color: themeContract.color.success.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				borderColor: themeContract.color.warning.border,
				color: themeContract.color.warning.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.warning.border}, 4px 0 0 0 ${themeContract.color.warning.border}, 0 4px 0 0 ${themeContract.color.warning.border}, 0 calc(-4px) 0 0 ${themeContract.color.warning.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				borderColor: themeContract.color.danger.border,
				color: themeContract.color.danger.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				borderColor: themeContract.color.neutral.border,
				color: themeContract.color.neutral.surface,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.neutral.border}, 4px 0 0 0 ${themeContract.color.neutral.border}, 0 4px 0 0 ${themeContract.color.neutral.border}, 0 calc(-4px) 0 0 ${themeContract.color.neutral.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},

		// Subtle variants
		{
			variants: { variant: "subtle", intent: "primary" },
			style: {
				backgroundColor: `${themeContract.color.primary.surface}20`,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},
		{
			variants: { variant: "subtle", intent: "secondary" },
			style: {
				backgroundColor: `${themeContract.color.secondary.surface}20`,
				color: themeContract.color.secondary.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},
		{
			variants: { variant: "subtle", intent: "success" },
			style: {
				backgroundColor: `${themeContract.color.success.surface}20`,
				color: themeContract.color.success.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},
		{
			variants: { variant: "subtle", intent: "warning" },
			style: {
				backgroundColor: `${themeContract.color.warning.surface}20`,
				color: themeContract.color.warning.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},
		{
			variants: { variant: "subtle", intent: "danger" },
			style: {
				backgroundColor: `${themeContract.color.danger.surface}20`,
				color: themeContract.color.danger.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},
		{
			variants: { variant: "subtle", intent: "neutral" },
			style: {
				backgroundColor: `${themeContract.color.neutral.surface}20`,
				color: themeContract.color.neutral.surface,
				borderColor: "transparent",
				boxShadow: "none",
				margin: "0",
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.primary.border}, 4px 0 0 0 ${themeContract.color.primary.border}, 0 4px 0 0 ${themeContract.color.primary.border}, 0 calc(-4px) 0 0 ${themeContract.color.primary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.secondary.border}, 4px 0 0 0 ${themeContract.color.secondary.border}, 0 4px 0 0 ${themeContract.color.secondary.border}, 0 calc(-4px) 0 0 ${themeContract.color.secondary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.warning.border}, 4px 0 0 0 ${themeContract.color.warning.border}, 0 4px 0 0 ${themeContract.color.warning.border}, 0 calc(-4px) 0 0 ${themeContract.color.warning.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.neutral.border}, 4px 0 0 0 ${themeContract.color.neutral.border}, 0 4px 0 0 ${themeContract.color.neutral.border}, 0 calc(-4px) 0 0 ${themeContract.color.neutral.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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

// Dot indicator (optional)
export const dot = style({
	width: "6px",
	height: "6px",
	borderRadius: themeContract.radius.full,
	backgroundColor: "currentColor",
});
