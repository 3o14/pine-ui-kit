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

// 크레용 테마 스타일
// 크레용 Tab 외곽선 효과 (::after)
export const crayonTabAfter = style({
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

// 크레용 Tab 스타일 (selected 상태)
export const crayonTabStyle = style({
	position: "relative",
	selectors: {
		"[class*='crayonLightTheme'] &[data-selected], [class*='crayonDarkTheme'] &[data-selected]":
			{
				filter: "url(#crayon-texture)",
				border: "3px solid currentColor !important",
				boxShadow: `
					0 2px 0 0 rgba(0, 0, 0, 0.1),
					0 3px 8px rgba(0, 0, 0, 0.12)
				`,
			},
		"[class*='crayonLightTheme'] &:not([data-selected]), [class*='crayonDarkTheme'] &:not([data-selected])":
			{
				filter: "url(#crayon-edge)",
				border: "3px solid transparent !important",
			},
	},
});

// 크레용 Tab 텍스처 오버레이 (::before)
export const crayonTabBefore = style({
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
					90deg,
					transparent,
					transparent 1px,
					rgba(255, 255, 255, 0.08) 1px,
					rgba(255, 255, 255, 0.08) 2px
				),
				repeating-linear-gradient(
					0deg,
					transparent,
					transparent 1px,
					rgba(0, 0, 0, 0.04) 1px,
					rgba(0, 0, 0, 0.04) 2px
				),
				radial-gradient(
					circle at 20% 30%,
					rgba(255, 255, 255, 0.15) 0%,
					transparent 50%
				),
				radial-gradient(
					circle at 80% 70%,
					rgba(0, 0, 0, 0.08) 0%,
					transparent 50%
				)
			`,
				pointerEvents: "none",
				mixBlendMode: "overlay",
			},
	},
});
