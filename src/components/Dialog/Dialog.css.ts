import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
});

const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

const scaleIn = keyframes({
	from: {
		opacity: 0,
		transform: "translate(-50%, calc(-50% - 10px)) scale(0.95)",
	},
	to: {
		opacity: 1,
		transform: "translate(-50%, -50%) scale(1)",
	},
});

const scaleOut = keyframes({
	from: {
		opacity: 1,
		transform: "translate(-50%, -50%) scale(1)",
	},
	to: {
		opacity: 0,
		transform: "translate(-50%, calc(-50% - 10px)) scale(0.95)",
	},
});

export const overlay = style({
	position: "fixed",
	inset: "0",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	zIndex: "9999",
	animation: `${fadeIn} 0.2s ease-out`,
	selectors: {
		"&[data-state='closing']": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
		"&[data-ending-style]": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
	},
});

export const container = style({
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: themeContract.color.surface.background,
	boxShadow: themeContract.shadow.xlarge,
	display: "flex",
	flexDirection: "column",
	maxHeight: "90vh",
	width: "100%",
	zIndex: "10000",
	animation: `${scaleIn} 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
	selectors: {
		"&[data-ending-style]": {
			animation: `${scaleOut} 0.2s ease-in forwards`,
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
			borderRadius: "0 !important",
		},
	},
});

export const sizeVariants = styleVariants({
	small: {
		maxWidth: "400px",
	},
	medium: {
		maxWidth: "600px",
	},
	large: {
		maxWidth: "800px",
	},
	xlarge: {
		maxWidth: "1000px",
	},
	full: {
		maxWidth: "calc(100vw - 2rem)",
		maxHeight: "calc(100vh - 2rem)",
	},
});

export const roundedVariants = styleVariants({
	small: {
		borderRadius: themeContract.radius.small,
	},
	medium: {
		borderRadius: themeContract.radius.medium,
	},
	large: {
		borderRadius: themeContract.radius.large,
	},
});

export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: themeContract.spacing.lg,
	borderBottom: `1px solid ${themeContract.color.surface.divider}`,
	gap: themeContract.spacing.md,
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderBottom: "1px solid transparent",
			boxShadow: `0 4px 0 0 ${themeContract.color.surface.divider}`,
			padding: themeContract.spacing.md,
		},
	},
});

export const title = style({
	margin: 0,
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.large,
	fontWeight: themeContract.typography.fontWeight.semibold,
	lineHeight: themeContract.typography.lineHeight.large,
	color: themeContract.color.surface.text,
});

export const closeButton = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	borderRadius: themeContract.radius.medium,
	border: "none",
	backgroundColor: "transparent",
	color: themeContract.color.surface.textMuted,
	cursor: "pointer",
	flexShrink: 0,
	transition: "all 0.2s ease-in-out",
	":hover": {
		backgroundColor: themeContract.color.surface.backgroundElevated,
		color: themeContract.color.surface.text,
	},
	":focus-visible": {
		outline: `2px solid ${themeContract.color.primary.surface}`,
		outlineOffset: "2px",
	},
});

export const body = style({
	padding: themeContract.spacing.lg,
	overflowY: "auto",
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	color: themeContract.color.surface.text,
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			padding: themeContract.spacing.md,
		},
	},
});

export const footer = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: themeContract.spacing.sm,
	padding: themeContract.spacing.lg,
	borderTop: `1px solid ${themeContract.color.surface.divider}`,
	selectors: {
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderTop: "1px solid transparent",
			boxShadow: `0 -4px 0 0 ${themeContract.color.surface.divider}`,
			padding: themeContract.spacing.md,
		},
	},
});

export const description = style({
	marginTop: themeContract.spacing.xxs,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	color: themeContract.color.surface.textMuted,
});



