import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent, type SelectorMap } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";
import {
	crayonBumpyShellBefore,
	crayonTextureBackgroundImage,
	crayonGrainBackgroundImage,
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
	hasBorder = true,
) => ({
	...crayonBumpyShellBefore,
	background,
	...(hasBorder && { boxShadow: `inset 0 0 0 2px ${borderColor}` }),
});

/**
 * Creates crayon theme selectors with optional transition
 */
const createCrayonSelectors = (addTransition = false): SelectorMap => {
	const selectors: SelectorMap = {};

	selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
		background: "transparent",
		borderColor: "transparent",
		overflow: "visible",
		isolation: "isolate",
	};

	const beforeStyle = {
		...createCrayonBeforeStyle(
			themeContract.color.surface.background,
			themeContract.color.surface.outline,
		),
		zIndex: 0,
		...(addTransition && { transition: "background 0.2s ease-in-out" }),
	};

	selectors[
		`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
	] = beforeStyle;

	selectors[
		`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`
	] = {
		content: '""',
		position: "absolute",
		inset: 0,
		borderRadius: "inherit",
		pointerEvents: "none",
		backgroundImage: `${crayonTextureBackgroundImage}, ${crayonGrainBackgroundImage}`,
		backgroundSize: "auto, 3px 3px",
		mixBlendMode: "overlay",
		opacity: 0.8,
		zIndex: 0,
	};

	return selectors;
};

const createCrayonTriggerSelectors = () => createCrayonSelectors(true);
const createCrayonMenuSelectors = () => createCrayonSelectors(false);

/**
 * Creates trigger compound variant selectors for a given intent.
 * Returns selectors object for use in compound variants.
 */
const createTriggerIntentSelectors = (intent: ColorIntent): SelectorMap => {
	const color = themeContract.color[intent];
	const pixelBoxShadow = `calc(-4px) 0 0 0 ${color.border}, 4px 0 0 0 ${color.border}, 0 4px 0 0 ${color.border}, 0 calc(-4px) 0 0 ${color.border}`;

	const selectors: SelectorMap = {};

	// Basic theme: show intent border color
	selectors["&"] = {
		borderColor: color.border,
	};

	selectors["&:focus-visible"] = {
		outline: `2px solid ${color.surface}`,
	};

	// Game theme: pixel-box shadow with intent color
	selectors[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`] = {
		border: "1px solid transparent",
		boxShadow: pixelBoxShadow,
		margin: themeContract.shadow.pixelBoxMargin,
	};

	// Crayon theme: bumpy border with intent color
	selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
		border: "none",
	};

	selectors[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`] = {
		boxShadow: `inset 0 0 0 3px ${color.border}`,
	};

	return selectors;
};

/**
 * Creates menu intent compound variant style for all themes.
 */
const createMenuIntentStyle = (intent: ColorIntent) => {
	const color = themeContract.color[intent];
	const pixelBoxShadow = `calc(-4px) 0 0 0 ${color.border}, 4px 0 0 0 ${color.border}, 0 4px 0 0 ${color.border}, 0 calc(-4px) 0 0 ${color.border} !important`;

	return {
		// Basic theme: show intent border color
		borderColor: color.border,
		borderWidth: "1.5px",
		selectors: {
			// Game theme: pixel-box shadow with intent color
			[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
				border: "1px solid transparent",
				boxShadow: pixelBoxShadow,
			},
			// Crayon theme: bumpy border with intent color
			[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
				border: "none",
			},
			[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
				{
					boxShadow: `inset 0 0 0 3px ${color.border}`,
				},
		},
	};
};

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
	position: "relative",
	margin: themeContract.shadow.pixelBoxMargin,
	":focus-visible": {
		outline: `2px solid ${themeContract.color.primary.surface}`,
		outlineOffset: "2px",
	},
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			border: "1px solid transparent",
			boxShadow: themeContract.shadow.pixelBox,
			borderRadius: 0,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			border: "none",
		},
		...createCrayonTriggerSelectors(),
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xxxs} ${themeContract.spacing.xs}`,
					},
				},
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
				minHeight: "40px",
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
					},
				},
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
				minHeight: "48px",
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
					},
				},
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
			style: { selectors: createTriggerIntentSelectors("primary") },
		},
		{
			variants: { intent: "secondary" },
			style: { selectors: createTriggerIntentSelectors("secondary") },
		},
		{
			variants: { intent: "success" },
			style: { selectors: createTriggerIntentSelectors("success") },
		},
		{
			variants: { intent: "warning" },
			style: { selectors: createTriggerIntentSelectors("warning") },
		},
		{
			variants: { intent: "danger" },
			style: { selectors: createTriggerIntentSelectors("danger") },
		},
		{
			variants: { intent: "neutral" },
			style: { selectors: createTriggerIntentSelectors("neutral") },
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

export const triggerValue = style({
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

export const triggerIcon = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	transition: "transform 0.2s ease-in-out",
	selectors: {
		"[data-popup-open] &": {
			transform: "rotate(180deg)",
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

const menuBase = style({
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
	margin: themeContract.shadow.pixelBoxMargin,
	selectors: {
		"&[data-state='closing']": {
			animation: `${slideUp} 0.15s ease-in`,
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			border: "1px solid transparent",
			borderRadius: 0,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			border: "none",
		},
		...createCrayonMenuSelectors(),
	},
});

export const menu = recipe({
	base: menuBase,

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
		{ variants: { intent: "primary" }, style: createMenuIntentStyle("primary") },
		{ variants: { intent: "secondary" }, style: createMenuIntentStyle("secondary") },
		{ variants: { intent: "success" }, style: createMenuIntentStyle("success") },
		{ variants: { intent: "warning" }, style: createMenuIntentStyle("warning") },
		{ variants: { intent: "danger" }, style: createMenuIntentStyle("danger") },
		{ variants: { intent: "neutral" }, style: createMenuIntentStyle("neutral") },
	],

	defaultVariants: {
		intent: "primary",
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
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			position: "relative",
			zIndex: 1,
		},
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
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

export const groupLabel = style({
	padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
	fontSize: themeContract.typography.fontSize.xsmall,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	color: themeContract.color.surface.textMuted,
	textTransform: "uppercase",
	letterSpacing: "0.05em",
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			position: "relative",
			zIndex: 1,
		},
	},
});
