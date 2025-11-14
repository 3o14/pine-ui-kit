import { createTheme, createThemeContract } from "@vanilla-extract/css";
import {
	lightColors,
	darkColors,
	spacing,
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	radius,
	shadow,
} from "./index";

// Define theme contract (structure)
export const themeContract = createThemeContract({
	color: {
		primary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		secondary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		success: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		warning: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		danger: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		neutral: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
		},
		surface: {
			background: null,
			backgroundElevated: null,
			outline: null,
			text: null,
			textMuted: null,
			divider: null,
		},
	},
	spacing: {
		none: null,
		xxxs: null,
		xxs: null,
		xs: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
		xxl: null,
		xxxl: null,
	},
	typography: {
		fontFamily: {
			sans: null,
			mono: null,
		},
		fontSize: {
			xs: null,
			sm: null,
			md: null,
			lg: null,
			xl: null,
			"display-sm": null,
			"display-md": null,
			"display-lg": null,
		},
		lineHeight: {
			xs: null,
			sm: null,
			md: null,
			lg: null,
			xl: null,
			"display-sm": null,
			"display-md": null,
			"display-lg": null,
		},
		fontWeight: {
			regular: null,
			medium: null,
			semibold: null,
			bold: null,
		},
	},
	radius: {
		none: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
		full: null,
	},
	shadow: {
		none: null,
		xs: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
	},
});

// Light theme
export const lightTheme = createTheme(themeContract, {
	color: {
		primary: lightColors.palette.primary,
		secondary: lightColors.palette.secondary,
		success: lightColors.palette.success,
		warning: lightColors.palette.warning,
		danger: lightColors.palette.danger,
		neutral: lightColors.palette.neutral,
		surface: lightColors.surface,
	},
	spacing,
	typography: {
		fontFamily,
		fontSize,
		lineHeight: Object.entries(lineHeight).reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: String(value),
			}),
			{} as Record<keyof typeof lineHeight, string>
		),
		fontWeight: {
			regular: String(fontWeight.regular),
			medium: String(fontWeight.medium),
			semibold: String(fontWeight.semibold),
			bold: String(fontWeight.bold),
		},
	},
	radius,
	shadow,
});

// Dark theme
export const darkTheme = createTheme(themeContract, {
	color: {
		primary: darkColors.palette.primary,
		secondary: darkColors.palette.secondary,
		success: darkColors.palette.success,
		warning: darkColors.palette.warning,
		danger: darkColors.palette.danger,
		neutral: darkColors.palette.neutral,
		surface: darkColors.surface,
	},
	spacing,
	typography: {
		fontFamily,
		fontSize,
		lineHeight: Object.entries(lineHeight).reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: String(value),
			}),
			{} as Record<keyof typeof lineHeight, string>
		),
		fontWeight: {
			regular: String(fontWeight.regular),
			medium: String(fontWeight.medium),
			semibold: String(fontWeight.semibold),
			bold: String(fontWeight.bold),
		},
	},
	radius,
	shadow,
});
