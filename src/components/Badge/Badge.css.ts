import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent } from "@/tokens";
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

// Helper functions for theme-specific styles
type BadgeVariant = "solid" | "outline" | "subtle" | "weak";

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
 * Creates game theme box shadow style
 */
const createGameBoxShadow = (borderColor: string) => ({
	borderColor: "transparent",
	boxShadow: `calc(-4px) 0 0 0 ${borderColor}, 4px 0 0 0 ${borderColor}, 0 4px 0 0 ${borderColor}, 0 calc(-4px) 0 0 ${borderColor}`,
	margin: themeContract.shadow.pixelBoxMargin,
});

/**
 * Creates theme-specific selectors for a given intent and variant
 */
const createThemeSelectors = (intent: ColorIntent, variant: BadgeVariant) => {
	const color = themeContract.color[intent];
	const selectors: Record<string, unknown> = {};

	// Game theme styles
	if (variant === "outline" || variant === "weak") {
		selectors[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`] =
			createGameBoxShadow(color.border);
	}

	// Crayon theme styles
	if (variant === "solid" || variant === "subtle" || variant === "weak") {
		const bg =
			variant === "solid"
				? color.surface
				: variant === "subtle"
					? `${color.surface}20`
					: color.weak;

		// Subtle variant has no border
		const hasBorder = variant !== "subtle";

		selectors[
			`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
		] = createCrayonBeforeStyle(bg, color.border, hasBorder);
	}

	if (variant === "outline") {
		selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
		] = createCrayonBeforeStyle("transparent", color.border);
	}

	// Type assertion needed because vanilla-extract's SelectorMap type is complex
	// and we're dynamically building selectors
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return selectors as any;
};

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
	position: "relative",
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			background: "transparent",
			overflow: "visible",
			filter: "none",
			position: "relative",
			isolation: "isolate",
		},
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
			{
				zIndex: 0,
			},
		[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]: {
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
		},
	},
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
				selectors: createThemeSelectors("primary", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
				borderColor: "transparent",
				selectors: createThemeSelectors("secondary", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
				borderColor: "transparent",
				selectors: createThemeSelectors("success", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
				borderColor: "transparent",
				selectors: createThemeSelectors("warning", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
				borderColor: "transparent",
				selectors: createThemeSelectors("danger", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
				selectors: createThemeSelectors("neutral", "solid"),
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				borderColor: themeContract.color.primary.border,
				color: themeContract.color.primary.surface,
				selectors: createThemeSelectors("primary", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				borderColor: themeContract.color.secondary.border,
				color: themeContract.color.secondary.surface,
				selectors: createThemeSelectors("secondary", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				borderColor: themeContract.color.success.border,
				color: themeContract.color.success.surface,
				selectors: createThemeSelectors("success", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				borderColor: themeContract.color.warning.border,
				color: themeContract.color.warning.surface,
				selectors: createThemeSelectors("warning", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				borderColor: themeContract.color.danger.border,
				color: themeContract.color.danger.surface,
				selectors: createThemeSelectors("danger", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				borderColor: themeContract.color.neutral.border,
				color: themeContract.color.neutral.surface,
				selectors: createThemeSelectors("neutral", "outline"),
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
				selectors: createThemeSelectors("primary", "subtle"),
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
				selectors: createThemeSelectors("secondary", "subtle"),
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
				selectors: createThemeSelectors("success", "subtle"),
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
				selectors: createThemeSelectors("warning", "subtle"),
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
				selectors: createThemeSelectors("danger", "subtle"),
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
				selectors: createThemeSelectors("neutral", "subtle"),
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("primary", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("secondary", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("success", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("warning", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("danger", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
				borderColor: "transparent",
				selectors: createThemeSelectors("neutral", "weak"),
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

// Content wrapper for text (prevents mixBlendMode from affecting text)
export const content = style({
	position: "relative",
	zIndex: 1,
	isolation: "isolate",
});

// Dot indicator (optional)
export const dot = style({
	width: "6px",
	height: "6px",
	borderRadius: themeContract.radius.full,
	backgroundColor: "currentColor",
	position: "relative",
	zIndex: 1,
});
