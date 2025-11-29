import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "../../tokens/theme.css";

// Animations
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

// Container
export const container = style({
	position: "relative",
	display: "inline-block",
});

// Trigger button
export const trigger = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: themeContract.spacing.sm,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.medium,
	borderRadius: themeContract.radius.medium,
	border: `1px solid ${themeContract.color.surface.outline}`,
	backgroundColor: themeContract.color.surface.background,
	color: themeContract.color.surface.text,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	":hover": {
		borderColor: themeContract.color.primary.surface,
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
	selectors: {
		"&[data-state='open']": {
			borderColor: themeContract.color.primary.surface,
		},
	},
});

export const triggerSize = styleVariants({
	sm: {
		padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
		fontSize: themeContract.typography.fontSize.small,
		lineHeight: themeContract.typography.lineHeight.small,
		minHeight: "32px",
	},
	md: {
		padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
		fontSize: themeContract.typography.fontSize.medium,
		lineHeight: themeContract.typography.lineHeight.medium,
		minHeight: "40px",
	},
	lg: {
		padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
		fontSize: themeContract.typography.fontSize.large,
		lineHeight: themeContract.typography.lineHeight.large,
		minHeight: "48px",
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

// Menu
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

// Menu item
export const menuItem = style({
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
	":hover": {
		backgroundColor: themeContract.color.surface.backgroundElevated,
		color: themeContract.color.primary.surface,
	},
	":focus-visible": {
		outline: "none",
		backgroundColor: themeContract.color.surface.backgroundElevated,
		boxShadow: `inset 0 0 0 2px ${themeContract.color.primary.surface}`,
	},
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
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
});

// Divider
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
