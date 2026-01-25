import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "@/tokens";
import { fontWeight } from "@/tokens";
import { fontSize, lineHeight } from "@/tokens/typography";

export const base = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	margin: 0,
	padding: 0,
});

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

export const intentVariants = styleVariants({
	primary: {
		color: themeContract.color.primary.surface,
	},
	secondary: {
		color: themeContract.color.secondary.surface,
	},
	success: {
		color: themeContract.color.success.surface,
	},
	warning: {
		color: themeContract.color.warning.surface,
	},
	danger: {
		color: themeContract.color.danger.surface,
	},
	neutral: {
		color: themeContract.color.neutral.surface,
	},
	inherit: {
		color: "inherit",
	},
});

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

export const truncate = style({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
});
