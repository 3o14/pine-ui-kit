import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

export const root = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
});

export const tabListWrapper = style({
	position: "relative",
});

export const tabList = recipe({
	base: {
		display: "flex",
		gap: themeContract.spacing.xs,
		borderBottom: `1px solid ${themeContract.color.surface.divider}`,
		position: "relative",
		selectors: {
			[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
				borderBottom: "1px solid transparent",
				boxShadow: `0 4px 0 0 ${themeContract.color.surface.divider}`,
				margin: themeContract.shadow.pixelBoxMargin,
			},
		},
	},

	variants: {
		orientation: {
			horizontal: {
				flexDirection: "row",
			},
			vertical: {
				flexDirection: "column",
				borderBottom: "none",
				borderRight: `1px solid ${themeContract.color.surface.divider}`,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderRight: "1px solid transparent",
						borderBottom: "none",
						boxShadow: `4px 0 0 0 ${themeContract.color.surface.divider}`,
					},
				},
			},
		},
	},

	defaultVariants: {
		orientation: "horizontal",
	},
});

export const tab = recipe({
	base: {
		padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
		fontSize: themeContract.typography.fontSize.medium,
		fontFamily: themeContract.typography.fontFamily.sans,
		fontWeight: themeContract.typography.fontWeight.medium,
		color: themeContract.color.surface.textMuted,
		backgroundColor: "transparent",
		border: "none",
		borderBottom: "2px solid transparent",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		whiteSpace: "nowrap",

		selectors: {
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed",
			},
			"&[data-focus-visible]": {
				outline: `2px solid ${themeContract.color.primary.surface}`,
				outlineOffset: "2px",
			},
			[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
				borderRadius: 0,
				boxShadow: themeContract.shadow.pixelBox,
				margin: themeContract.shadow.pixelBoxMargin,
			},
		},
	},

	variants: {
		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},
		orientation: {
			horizontal: {},
			vertical: {
				borderBottom: "none",
				borderRight: "2px solid transparent",
			},
		},
	},

	compoundVariants: [
		// Primary
		{
			variants: { intent: "primary" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.primary.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
		// Secondary
		{
			variants: { intent: "secondary" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.secondary.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
		// Success
		{
			variants: { intent: "success" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.success.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
		// Warning
		{
			variants: { intent: "warning" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.warning.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
		// Danger
		{
			variants: { intent: "danger" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.danger.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
		// Neutral
		{
			variants: { intent: "neutral" },
			style: {
				selectors: {
					"&[data-selected]": {
						color: themeContract.color.neutral.surface,
						fontWeight: themeContract.typography.fontWeight.bold,
					},
				},
			},
		},
	],

	defaultVariants: {
		intent: "primary",
		orientation: "horizontal",
	},
});

export const tabSelected = recipe({
	variants: {
		intent: {
			primary: {
				color: themeContract.color.primary.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
			secondary: {
				color: themeContract.color.secondary.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
			success: {
				color: themeContract.color.success.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
			warning: {
				color: themeContract.color.warning.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
			danger: {
				color: themeContract.color.danger.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
			neutral: {
				color: themeContract.color.neutral.surface,
				fontWeight: themeContract.typography.fontWeight.bold,
			},
		},
	},
	defaultVariants: {
		intent: "primary",
	},
});

export const indicator = recipe({
	base: {
		position: "absolute",
		backgroundColor: themeContract.color.primary.surface,
		transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out",
		zIndex: 2,
	},
	variants: {
		intent: {
			primary: {
				backgroundColor: themeContract.color.primary.surface,
			},
			secondary: {
				backgroundColor: themeContract.color.secondary.surface,
			},
			success: {
				backgroundColor: themeContract.color.success.surface,
			},
			warning: {
				backgroundColor: themeContract.color.warning.surface,
			},
			danger: {
				backgroundColor: themeContract.color.danger.surface,
			},
			neutral: {
				backgroundColor: themeContract.color.neutral.surface,
			},
		},
		orientation: {
			horizontal: {
				bottom: "-1px",
				height: "2px",
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						bottom: "-4px",
					},
				},
			},
			vertical: {
				right: "-1px",
				width: "2px",
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						right: "-4px",
					},
				},
			},
		},
	},
	defaultVariants: {
		intent: "primary",
		orientation: "horizontal",
	},
});

export const panel = style({
	padding: themeContract.spacing.md,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	color: themeContract.color.surface.text,
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderRadius: 0,
		},
	},
});



