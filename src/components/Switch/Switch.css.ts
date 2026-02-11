import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";
import {
	crayonBumpyShellBefore,
	createCrayonBaseStyle,
	createCrayonBeforeBaseStyle,
	createCrayonAfterStyle,
} from "@/tokens/themes/crayonTexture.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

const crayonLightThemeClass = String(crayonLightTheme);
const crayonDarkThemeClass = String(crayonDarkTheme);

/**
 * Creates crayon theme ::before pseudo-element style
 */
const createCrayonBeforeStyle = (
	background: string,
	borderColor: string,
	hasBorder = true
) => ({
	...crayonBumpyShellBefore,
	background,
	...(hasBorder && { boxShadow: `inset 0 0 0 2px ${borderColor}` }),
});

export const container = style({
	display: "inline-flex",
	alignItems: "center",
	gap: themeContract.spacing.xs,
	cursor: "pointer",
	userSelect: "none",
	selectors: {
		"&:has(input:disabled)": {
			cursor: "not-allowed",
			opacity: 0.5,
		},
	},
});

export const switchRoot = style({
	all: "unset",
	display: "inline-block",
});

const trackBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	flexShrink: 0,
	borderRadius: themeContract.radius.xlarge,
	transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	selectors: {
		"button:focus-visible &": {
			outline: `2px solid ${themeContract.color.primary.surface}`,
			outlineOffset: "2px",
		},
		"button:disabled &": {
			cursor: "not-allowed",
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
			borderRadius: 0,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			...createCrayonBaseStyle(),
			boxShadow: "none",
			margin: themeContract.shadow.pixelBoxMargin,
		},
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]: {
			...createCrayonBeforeBaseStyle(),
		},
		[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]: {
			...createCrayonAfterStyle(),
		},
	},
});

export const track = recipe({
	base: trackBase,

	variants: {
		size: {
			small: {
				width: "30px",
				height: "18px",
				padding: "2px 4px",
			},
			medium: {
				width: "43px",
				height: "24px",
				padding: "2px 3px",
			},
			large: {
				width: "54px",
				height: "30px",
				padding: "2px 4px",
			},
			xlarge: {
				width: "66px",
				height: "36px",
				padding: "2px 4px",
			},
		},

		intent: {
			primary: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.primary.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.primary.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.primary.weak,
							themeContract.color.primary.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.primary.surface,
							themeContract.color.primary.border
						),
				},
			},
			secondary: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.secondary.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.secondary.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.secondary.weak,
							themeContract.color.secondary.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.secondary.surface,
							themeContract.color.secondary.border
						),
				},
			},
			success: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.success.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.success.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.success.weak,
							themeContract.color.success.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.success.surface,
							themeContract.color.success.border
						),
			},
			},
			warning: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.warning.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.warning.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.warning.weak,
							themeContract.color.warning.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.warning.surface,
							themeContract.color.warning.border
						),
			},
			},
			danger: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.danger.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.danger.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.danger.weak,
							themeContract.color.danger.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.danger.surface,
							themeContract.color.danger.border
						),
			},
			},
			neutral: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.neutral.weak,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.neutral.surface,
					},
					[`.${crayonLightThemeClass} [role='switch'][data-unchecked] &::before, .${crayonDarkThemeClass} [role='switch'][data-unchecked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.neutral.weak,
							themeContract.color.neutral.border
						),
					[`.${crayonLightThemeClass} [role='switch'][data-checked] &::before, .${crayonDarkThemeClass} [role='switch'][data-checked] &::before`]:
						createCrayonBeforeStyle(
							themeContract.color.neutral.surface,
							themeContract.color.neutral.border
						),
			},
			},
		},
	},

	defaultVariants: {
		size: "medium",
		intent: "primary",
	},
});

const thumbBase = style({
	backgroundColor: "white",
	borderRadius: themeContract.radius.xlarge,
	transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
	boxShadow: themeContract.shadow.small,
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
			borderRadius: 0,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			...createCrayonBaseStyle(),
			backgroundColor: "white",
			boxShadow: "none",
			margin: themeContract.shadow.pixelBoxMargin,
		},
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]: {
			...createCrayonBeforeStyle(
				"white",
				themeContract.color.surface.outline
			),
			...createCrayonBeforeBaseStyle(),
		},
		[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]: {
			...createCrayonAfterStyle(),
		},
	},
});

export const thumb = recipe({
	base: thumbBase,

	variants: {
		size: {
			small: {
				width: "14px",
				height: "14px",
				selectors: {
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(12px)",
					},
				},
			},
			medium: {
				width: "20px",
				height: "20px",
				selectors: {
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(20px)",
					},
				},
			},
			large: {
				width: "24px",
				height: "24px",
				selectors: {
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(26px)",
					},
				},
			},
			xlarge: {
				width: "28px",
				height: "28px",
				selectors: {
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(34px)",
					},
				},
			},
		},
	},

	defaultVariants: {
		size: "medium",
	},
});
