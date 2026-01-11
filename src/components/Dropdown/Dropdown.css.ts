import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

const slideDown = keyframes({
	from: {
		opacity: 0,
		transform: "translateY(-8px)",
	},
	to: {
		opacity: 1,
		transform: "translateY(0)",
	},
});

const slideUp = keyframes({
	from: {
		opacity: 1,
		transform: "translateY(0)",
	},
	to: {
		opacity: 0,
		transform: "translateY(-8px)",
	},
});

export const container = style({
	position: "relative",
	display: "inline-block",
});

const triggerBase = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: themeContract.spacing.sm,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.medium,
	border: `1px solid ${themeContract.color.surface.outline}`,
	backgroundColor: themeContract.color.surface.background,
	color: themeContract.color.surface.text,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	":hover": {
		backgroundColor: themeContract.color.surface.backgroundElevated,
	},
	":focus-visible": {
		outline: `2px solid ${themeContract.color.primary.surface}`,
		outlineOffset: "2px",
	},
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
});

export const trigger = recipe({
	base: triggerBase,

	variants: {
		size: {
			small: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
				minHeight: "32px",
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
				minHeight: "40px",
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
				minHeight: "48px",
			},
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

		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},
	},

	compoundVariants: [
		{
			variants: { intent: "primary" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.primary.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.primary.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.primary.surface}`,
					},
				},
			},
		},
		{
			variants: { intent: "secondary" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.secondary.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.secondary.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.secondary.surface}`,
					},
				},
			},
		},
		{
			variants: { intent: "success" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.success.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.success.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.success.surface}`,
					},
				},
			},
		},
		{
			variants: { intent: "warning" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.warning.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.warning.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.warning.surface}`,
					},
				},
			},
		},
		{
			variants: { intent: "danger" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.danger.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.danger.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.danger.surface}`,
					},
				},
			},
		},
		{
			variants: { intent: "neutral" },
			style: {
				selectors: {
					"&:hover:not(:disabled)": {
						borderColor: themeContract.color.neutral.surface,
					},
					"&[data-state='open']": {
						borderColor: themeContract.color.neutral.surface,
					},
					"&:focus-visible": {
						outline: `2px solid ${themeContract.color.neutral.surface}`,
					},
				},
			},
		},
	],

	defaultVariants: {
		size: "medium",
		rounded: "medium",
		intent: "primary",
	},
});

export const triggerFullWidth = style({
	width: "100%",
});

export const triggerIcon = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "transform 0.2s ease-in-out",
	selectors: {
		"[data-state='open'] &": {
			transform: "rotate(180deg)",
		},
	},
});

export const menu = style({
	position: "absolute",
	top: "calc(100% + 4px)",
	left: 0,
	minWidth: "100%",
	backgroundColor: themeContract.color.surface.background,
	borderRadius: themeContract.radius.medium,
	border: `1px solid ${themeContract.color.surface.outline}`,
	boxShadow: themeContract.shadow.large,
	padding: themeContract.spacing.xxs,
	zIndex: 1000,
	animation: `${slideDown} 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)`,
	maxHeight: "300px",
	overflowY: "auto",
	selectors: {
		"&[data-state='closing']": {
			animation: `${slideUp} 0.15s ease-in`,
		},
	},
});

const menuItemBase = style({
	display: "flex",
	alignItems: "center",
	gap: themeContract.spacing.sm,
	padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
	fontSize: themeContract.typography.fontSize.medium,
	fontFamily: themeContract.typography.fontFamily.sans,
	color: themeContract.color.surface.text,
	borderRadius: themeContract.radius.small,
	cursor: "pointer",
	transition: "all 0.15s ease-in-out",
	border: "none",
	backgroundColor: "transparent",
	width: "100%",
	textAlign: "left",
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
});

export const menuItem = recipe({
	base: menuItemBase,

	variants: {
		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},
	},

	compoundVariants: [
		{
			variants: { intent: "primary" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.primary.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.primary.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.primary.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.primary.surfaceHover,
					},
				},
			},
		},
		{
			variants: { intent: "secondary" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.secondary.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.secondary.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.secondary.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
					},
				},
			},
		},
		{
			variants: { intent: "success" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.success.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.success.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.success.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.success.surfaceHover,
					},
				},
			},
		},
		{
			variants: { intent: "warning" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.warning.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.warning.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.warning.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.warning.surfaceHover,
					},
				},
			},
		},
		{
			variants: { intent: "danger" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.danger.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.danger.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.danger.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.danger.surfaceHover,
					},
				},
			},
		},
		{
			variants: { intent: "neutral" },
			style: {
				":hover": {
					backgroundColor: themeContract.color.surface.backgroundElevated,
					color: themeContract.color.neutral.surface,
				},
				":focus-visible": {
					outline: "none",
					backgroundColor: themeContract.color.surface.backgroundElevated,
					boxShadow: `inset 0 0 0 2px ${themeContract.color.neutral.surface}`,
				},
				selectors: {
					"&[data-selected='true']": {
						backgroundColor: themeContract.color.neutral.surface,
						color: "white",
					},
					"&[data-selected='true']:hover": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
					},
				},
			},
		},
	],

	defaultVariants: {
		intent: "primary",
	},
});

export const divider = style({
	height: "1px",
	backgroundColor: themeContract.color.surface.divider,
	margin: `${themeContract.spacing.xxs} 0`,
});

// Label (for grouped items)
export const groupLabel = style({
	padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
	fontSize: themeContract.typography.fontSize.xsmall,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	color: themeContract.color.surface.textMuted,
	textTransform: "uppercase",
	letterSpacing: "0.05em",
});

// 크레용 테마 스타일
// 크레용 Dropdown trigger 외곽선 효과 (::after)
export const crayonDropdownTriggerAfter = style({
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

// 크레용 Dropdown trigger 스타일
export const crayonDropdownTriggerStyle = style({
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
		"[class*='crayonLightTheme'] &:hover:not(:disabled), [class*='crayonDarkTheme'] &:hover:not(:disabled)":
			{
				filter: "url(#crayon-edge) brightness(1.05)",
				boxShadow: `
					0 2px 0 0 rgba(0, 0, 0, 0.08),
					inset 0 1px 0 rgba(255, 255, 255, 0.9)
				`,
			},
		"[class*='crayonLightTheme'] &[data-state='open'], [class*='crayonDarkTheme'] &[data-state='open']":
			{
				filter: "url(#crayon-edge) brightness(1.05)",
			},
		"[class*='crayonLightTheme'] &:disabled, [class*='crayonDarkTheme'] &:disabled":
			{
				opacity: "0.4 !important",
				filter: "grayscale(0.5) url(#crayon-edge) !important",
			},
	},
});

// 크레용 Dropdown trigger 텍스처 (::before)
export const crayonDropdownTriggerBefore = style({
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

// 크레용 Dropdown menu 스타일
export const crayonDropdownMenuStyle = style({
	position: "relative",
	selectors: {
		"[class*='crayonLightTheme'] &, [class*='crayonDarkTheme'] &": {
			filter: "url(#crayon-edge)",
			border: "3px solid currentColor !important",
			boxShadow: `
				0 2px 0 0 rgba(0, 0, 0, 0.1),
				0 3px 8px rgba(0, 0, 0, 0.12)
			`,
		},
	},
});

// 크레용 Dropdown menu 텍스처 (::before)
export const crayonDropdownMenuBefore = style({
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
