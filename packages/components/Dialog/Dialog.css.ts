import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "../../tokens/theme.css";

// Animations
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
		transform: "scale(0.95) translateY(-10px)",
	},
	to: {
		opacity: 1,
		transform: "scale(1) translateY(0)",
	},
});

const scaleOut = keyframes({
	from: {
		opacity: 1,
		transform: "scale(1) translateY(0)",
	},
	to: {
		opacity: 0,
		transform: "scale(0.95) translateY(-10px)",
	},
});

// Overlay (배경)
export const overlay = style({
	position: "fixed",
	inset: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1000,
	padding: themeContract.spacing.lg,
	animation: `${fadeIn} 0.2s ease-out`,
	selectors: {
		"&[data-state='closing']": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
	},
});

// Dialog container
export const container = style({
	position: "relative",
	backgroundColor: themeContract.color.surface.background,
	borderRadius: themeContract.radius.lg,
	boxShadow: themeContract.shadow.xl,
	display: "flex",
	flexDirection: "column",
	maxHeight: "90vh",
	width: "100%",
	animation: `${scaleIn} 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)`,
	selectors: {
		"[data-state='closing'] &": {
			animation: `${scaleOut} 0.2s ease-in`,
		},
	},
});

// Size variants
export const sizeVariants = styleVariants({
	sm: {
		maxWidth: "400px",
	},
	md: {
		maxWidth: "600px",
	},
	lg: {
		maxWidth: "800px",
	},
	xl: {
		maxWidth: "1000px",
	},
	full: {
		maxWidth: "calc(100vw - 2rem)",
		maxHeight: "calc(100vh - 2rem)",
	},
});

// Header
export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: themeContract.spacing.lg,
	borderBottom: `1px solid ${themeContract.color.surface.divider}`,
	gap: themeContract.spacing.md,
});

export const title = style({
	fontSize: themeContract.typography.fontSize.lg,
	fontWeight: themeContract.typography.fontWeight.semibold,
	fontFamily: themeContract.typography.fontFamily.sans,
	color: themeContract.color.surface.text,
	margin: 0,
	flex: 1,
});

export const closeButton = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	borderRadius: themeContract.radius.md,
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

// Body
export const body = style({
	padding: themeContract.spacing.lg,
	overflowY: "auto",
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.md,
	lineHeight: themeContract.typography.lineHeight.md,
	color: themeContract.color.surface.text,
});

// Footer
export const footer = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: themeContract.spacing.sm,
	padding: themeContract.spacing.lg,
	borderTop: `1px solid ${themeContract.color.surface.divider}`,
});

// Description (optional)
export const description = style({
	fontSize: themeContract.typography.fontSize.sm,
	fontFamily: themeContract.typography.fontFamily.sans,
	color: themeContract.color.surface.textMuted,
	marginTop: themeContract.spacing.xxs,
});
