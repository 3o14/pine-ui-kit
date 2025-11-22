import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "../../tokens/theme.css";
import {
	fontSize,
	fontWeight,
	lineHeight,
	fontFamily,
} from "../../tokens/typography";

// Base text styles
export const base = style({
	fontFamily: fontFamily.sans,
	margin: 0,
	padding: 0,
});

// Size variants
export const sizeVariants = styleVariants({
	xs: {
		fontSize: fontSize.xs,
		lineHeight: lineHeight.xs,
	},
	sm: {
		fontSize: fontSize.sm,
		lineHeight: lineHeight.sm,
	},
	md: {
		fontSize: fontSize.md,
		lineHeight: lineHeight.md,
	},
	lg: {
		fontSize: fontSize.lg,
		lineHeight: lineHeight.lg,
	},
	xl: {
		fontSize: fontSize.xl,
		lineHeight: lineHeight.xl,
	},
	"display-sm": {
		fontSize: fontSize["display-sm"],
		lineHeight: lineHeight["display-sm"],
	},
	"display-md": {
		fontSize: fontSize["display-md"],
		lineHeight: lineHeight["display-md"],
	},
	"display-lg": {
		fontSize: fontSize["display-lg"],
		lineHeight: lineHeight["display-lg"],
	},
});

// Weight variants
export const weightVariants = styleVariants({
	regular: {
		fontWeight: fontWeight.regular,
	},
	medium: {
		fontWeight: fontWeight.medium,
	},
	semibold: {
		fontWeight: fontWeight.semibold,
	},
	bold: {
		fontWeight: fontWeight.bold,
	},
});

// Color/Intent variants
export const intentVariants = styleVariants({
	primary: {
		color: themeContract.color.primary.text,
	},
	secondary: {
		color: themeContract.color.secondary.text,
	},
	success: {
		color: themeContract.color.success.text,
	},
	warning: {
		color: themeContract.color.warning.text,
	},
	danger: {
		color: themeContract.color.danger.text,
	},
	neutral: {
		color: themeContract.color.neutral.text,
	},
	inherit: {
		color: "inherit",
	},
});

// Align variants
export const alignVariants = styleVariants({
	left: {
		textAlign: "left",
	},
	center: {
		textAlign: "center",
	},
	right: {
		textAlign: "right",
	},
});

// Truncate style
export const truncate = style({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
});
