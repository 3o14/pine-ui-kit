import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { lightColors, darkColors } from "./colors";
import { spacing } from "./spacing";
import { fontFamily, fontSize, lineHeight, fontWeight } from "./typography";
import { radius } from "./radius";
import { shadow } from "./shadow";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./utils/constants";

// Re-export for backward compatibility
export { PRIMARY_COLOR_CSS_VAR_NAMES };

/**
 * Primary 색상을 위한 CSS 변수 참조 (vanilla-extract에서 사용)
 *
 * 참고: createVar()를 사용하지 않고 직접 var() 문자열을 사용하는 이유:
 * - 런타임 setProperty를 위해 변수 이름 문자열이 필요
 * - createVar()는 빌드 타임에만 작동하며 런타임 이름 추출이 복잡
 * - 하드코딩된 이름을 사용하면 런타임과 빌드 타임 모두에서 일관성 유지
 */
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
