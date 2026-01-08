import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

export const root = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
});

export const tabList = recipe({
	base: {
		display: "flex",
		gap: themeContract.spacing.xs,
		borderBottom: `2px solid ${themeContract.color.surface.divider}`,
	},

	variants: {
		orientation: {
			horizontal: {
				flexDirection: "row",
			},
			vertical: {
				flexDirection: "column",
				borderBottom: "none",
				borderRight: `2px solid ${themeContract.color.surface.divider}`,
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
			"&:hover:not([data-disabled])": {
				color: themeContract.color.surface.text,
			},
			"&[data-disabled]": {
				opacity: 0.5,
				cursor: "not-allowed",
			},
			"&[data-focus-visible]": {
				outline: `2px solid ${themeContract.color.primary.surface}`,
				outlineOffset: "2px",
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
						borderBottomColor: themeContract.color.primary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "primary", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.primary.surface,
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
						borderBottomColor: themeContract.color.secondary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "secondary", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.secondary.surface,
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
						borderBottomColor: themeContract.color.success.surface,
					},
				},
			},
		},
		{
			variants: { intent: "success", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.success.surface,
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
						borderBottomColor: themeContract.color.warning.surface,
					},
				},
			},
		},
		{
			variants: { intent: "warning", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.warning.surface,
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
						borderBottomColor: themeContract.color.danger.surface,
					},
				},
			},
		},
		{
			variants: { intent: "danger", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.danger.surface,
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
						borderBottomColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
		{
			variants: { intent: "neutral", orientation: "vertical" },
			style: {
				selectors: {
					"&[data-selected]": {
						borderBottomColor: "transparent",
						borderRightColor: themeContract.color.neutral.surface,
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

export const panel = style({
	padding: themeContract.spacing.md,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	color: themeContract.color.surface.text,
});

