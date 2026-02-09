import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
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
 * Creates crayon theme selectors for the input field
 */
const createCrayonInputSelectors = () => {
	const selectors: Record<string, unknown> = {};

	selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
		background: "transparent",
		borderColor: "transparent",
		overflow: "visible",
		isolation: "isolate",
	};

	selectors[
		`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
	] = {
		...createCrayonBeforeStyle(
			themeContract.color.surface.background,
			themeContract.color.surface.outline,
		),
		zIndex: 0,
		transition: "background 0.2s ease-in-out",
	};

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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return selectors as any;
};

/**
 * Creates crayon theme selectors for input with status-based border color
 */
const createCrayonInputStatusSelectors = (borderColor: string) => {
	const selectors: Record<string, unknown> = {};

	selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
		background: "transparent",
		borderColor: "transparent",
		overflow: "visible",
		isolation: "isolate",
	};

	selectors[
		`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
	] = {
		...createCrayonBeforeStyle(
			themeContract.color.surface.background,
			borderColor,
		),
		zIndex: 0,
		transition: "background 0.2s ease-in-out",
	};

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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return selectors as any;
};

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

const inputWrapperBase = style({
	position: "relative",
	display: "block",
	width: "100%",
});

export const inputWrapper = recipe({
	base: inputWrapperBase,

	variants: {
		variant: {
			outline: {},
			filled: {},
		},

		status: {
			default: {},
			error: {},
			success: {},
		},

		rounded: {
			small: {},
			medium: {},
			large: {},
		},
	},

	compoundVariants: [
		{
			variants: { variant: "outline", status: "default" },
			style: {
				selectors: createCrayonInputSelectors(),
			},
		},
		{
			variants: { variant: "outline", status: "error" },
			style: {
				selectors: createCrayonInputStatusSelectors(
					themeContract.color.danger.border
				),
			},
		},
		{
			variants: { variant: "outline", status: "success" },
			style: {
				selectors: createCrayonInputStatusSelectors(
					themeContract.color.success.border
				),
			},
		},

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
		variant: "outline",
		status: "default",
		rounded: "medium",
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
	position: "relative",
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
	},
	selectors: {
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			zIndex: 1,
		},
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
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
					},
				},
			},
			xlarge: {
				padding: `${themeContract.spacing.lg} ${themeContract.spacing.xl}`,
				fontSize: themeContract.typography.fontSize.xlarge,
				lineHeight: themeContract.typography.lineHeight.xlarge,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
					},
				},
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
		{
			variants: { variant: "outline", status: "default" },
			style: {
				border: `1px solid ${themeContract.color.surface.outline}`,
				":focus": {
					borderColor: themeContract.color.primary.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.primary.surface}20`,
				},
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						border: "1px solid transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.surface.outline}, 4px 0 0 0 ${themeContract.color.surface.outline}, 0 4px 0 0 ${themeContract.color.surface.outline}, 0 calc(-4px) 0 0 ${themeContract.color.surface.outline}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						border: "none",
					},
				},
			},
		},
		{
			variants: { variant: "outline", status: "error" },
			style: {
				border: `1px solid ${themeContract.color.danger.border}`,
				":focus": {
					borderColor: themeContract.color.danger.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.danger.surface}20`,
				},
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						border: "1px solid transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						border: "none",
					},
				},
			},
		},
		{
			variants: { variant: "outline", status: "success" },
			style: {
				border: `1px solid ${themeContract.color.success.border}`,
				":focus": {
					borderColor: themeContract.color.success.surface,
					boxShadow: `0 0 0 3px ${themeContract.color.success.surface}20`,
				},
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						border: "1px solid transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						border: "none",
					},
				},
			},
		},

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

export const textarea = style({
	resize: "none",
	minHeight: "80px",
	scrollbarWidth: "none",
	"::-webkit-scrollbar": {
		display: "none",
	},
	overflow: "auto",
});
