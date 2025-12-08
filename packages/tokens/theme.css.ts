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

// Primary 색상을 위한 CSS 변수 이름 상수 (런타임 설정용)
// vanilla-extract에서 var() 함수로 참조
export const PRIMARY_COLOR_CSS_VAR_NAMES = {
	surface: "--pie-primary-surface",
	surfaceHover: "--pie-primary-surface-hover",
	surfaceActive: "--pie-primary-surface-active",
	text: "--pie-primary-text",
	border: "--pie-primary-border",
	weak: "--pie-primary-weak",
} as const;

// Primary 색상을 위한 CSS 변수 참조 (vanilla-extract에서 사용)
// var() 함수를 사용하여 전역 CSS 변수 참조
export const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

// Define theme contract (structure)
export const themeContract = createThemeContract({
	color: {
		primary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		secondary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		success: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		warning: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		danger: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		neutral: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
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
			xsmall: null,
			small: null,
			medium: null,
			large: null,
			xlarge: null,
			"display-small": null,
			"display-medium": null,
			"display-large": null,
		},
		lineHeight: {
			xsmall: null,
			small: null,
			medium: null,
			large: null,
			xlarge: null,
			"display-small": null,
			"display-medium": null,
			"display-large": null,
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
		small: null,
		medium: null,
		large: null,
		xlarge: null,
		full: null,
	},
	shadow: {
		none: null,
		xsmall: null,
		small: null,
		medium: null,
		large: null,
		xlarge: null,
	},
});

// Light theme
export const lightTheme = createTheme(themeContract, {
	color: {
		// primary는 CSS 변수를 사용하여 런타임에 설정 가능
		primary: {
			surface: primaryColorVars.surface,
			surfaceHover: primaryColorVars.surfaceHover,
			surfaceActive: primaryColorVars.surfaceActive,
			text: primaryColorVars.text,
			border: primaryColorVars.border,
			weak: primaryColorVars.weak,
		},
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
		// primary는 CSS 변수를 사용하여 런타임에 설정 가능
		primary: {
			surface: primaryColorVars.surface,
			surfaceHover: primaryColorVars.surfaceHover,
			surfaceActive: primaryColorVars.surfaceActive,
			text: primaryColorVars.text,
			border: primaryColorVars.border,
			weak: primaryColorVars.weak,
		},
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
