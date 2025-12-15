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
	xsmall: {
		fontSize: fontSize.xsmall,
		lineHeight: lineHeight.xsmall,
	},
	small: {
		fontSize: fontSize.small,
		lineHeight: lineHeight.small,
	},
	medium: {
		fontSize: fontSize.medium,
		lineHeight: lineHeight.medium,
	},
	large: {
		fontSize: fontSize.large,
		lineHeight: lineHeight.large,
	},
	xlarge: {
		fontSize: fontSize.xlarge,
		lineHeight: lineHeight.xlarge,
	},
	"display-small": {
		fontSize: fontSize["display-small"],
		lineHeight: lineHeight["display-small"],
	},
	"display-medium": {
		fontSize: fontSize["display-medium"],
		lineHeight: lineHeight["display-medium"],
	},
	"display-large": {
		fontSize: fontSize["display-large"],
		lineHeight: lineHeight["display-large"],
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
