/**
 * Basic Theme - 기본 테마
 * 현재 디자인을 유지하는 기본 테마
 */

import { createTheme } from "@vanilla-extract/css";
import { semanticTokens } from "../semantic";
import * as foundation from "../foundation";
import { getWeakColor } from "../utils/getWeakColor";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "../utils/constants";

// Primary 색상을 위한 CSS 변수 참조
const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

/**
 * Basic Theme - Light Mode
 */
export const basicLightTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.slate[500],
			surfaceHover: foundation.slate[600],
			surfaceActive: foundation.slate[700],
			text: foundation.neutral.white,
			border: foundation.slate[600],
			weak: getWeakColor(foundation.slate[500], 25),
		},
		success: {
			surface: foundation.green[600],
			surfaceHover: foundation.green[700],
			surfaceActive: foundation.green[800],
			text: foundation.neutral.white,
			border: foundation.green[700],
			weak: getWeakColor(foundation.green[600], 25),
		},
		warning: {
			surface: foundation.yellow[400],
			surfaceHover: foundation.yellow[500],
			surfaceActive: foundation.yellow[600],
			text: foundation.slate[900],
			border: foundation.yellow[500],
			weak: getWeakColor(foundation.yellow[400], 25),
		},
		danger: {
			surface: foundation.red[500],
			surfaceHover: foundation.red[600],
			surfaceActive: foundation.red[700],
			text: foundation.neutral.white,
			border: foundation.red[600],
			weak: getWeakColor(foundation.red[500], 25),
		},
		neutral: {
			surface: foundation.slate[200],
			surfaceHover: foundation.slate[300],
			surfaceActive: foundation.slate[400],
			text: foundation.slate[900],
			border: foundation.slate[300],
			weak: getWeakColor(foundation.slate[200], 25),
		},
		surface: {
			background: foundation.neutral.white,
			backgroundElevated: foundation.slate[50],
			outline: foundation.slate[300],
			text: foundation.slate[900],
			textMuted: foundation.slate[500],
			divider: "rgba(15, 23, 42, 0.08)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.sans,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xsmall,
			small: foundation.fontSize.small,
			medium: foundation.fontSize.medium,
			large: foundation.fontSize.large,
			xlarge: foundation.fontSize.xlarge,
			"display-small": foundation.fontSize["2xlarge"],
			"display-medium": foundation.fontSize["3xlarge"],
			"display-large": foundation.fontSize["4xlarge"],
		},
		lineHeight: {
			xsmall: String(foundation.lineHeight.snug),
			small: String(foundation.lineHeight.normal),
			medium: String(foundation.lineHeight.normal),
			large: String(foundation.lineHeight.relaxed),
			xlarge: String(foundation.lineHeight.relaxed),
			"display-small": String(foundation.lineHeight.tight),
			"display-medium": String(foundation.lineHeight.tight),
			"display-large": String(foundation.lineHeight.tight),
		},
		fontWeight: {
			regular: String(foundation.fontWeight.regular),
			medium: String(foundation.fontWeight.medium),
			semibold: String(foundation.fontWeight.semibold),
			bold: String(foundation.fontWeight.bold),
		},
	},
	radius: {
		none: foundation.radius.none,
		small: foundation.radius.sm,
		medium: foundation.radius.xl, // 16px
		large: foundation.radius.xxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		...foundation.shadow,
		pixelBox: "none",
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				medium: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				large: `${foundation.spacing.md} ${foundation.spacing.lg}`,
				xlarge: `${foundation.spacing.lg} ${foundation.spacing.xl}`,
			},
			radius: {
				small: foundation.radius.sm,
				medium: foundation.radius.xl,
				large: foundation.radius.xxl,
			},
		},
		card: {
			radius: foundation.radius.xl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.md,
			padding: foundation.spacing.sm,
		},
	},
});

/**
 * Basic Theme - Dark Mode
 */
export const basicDarkTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.slate[400],
			surfaceHover: foundation.slate[500],
			surfaceActive: foundation.slate[600],
			text: foundation.slate[900],
			border: foundation.slate[500],
			weak: getWeakColor(foundation.slate[400], 25),
		},
		success: {
			surface: foundation.green[500],
			surfaceHover: foundation.green[600],
			surfaceActive: foundation.green[700],
			text: foundation.slate[900],
			border: foundation.green[600],
			weak: getWeakColor(foundation.green[500], 25),
		},
		warning: {
			surface: foundation.yellow[300],
			surfaceHover: foundation.yellow[400],
			surfaceActive: foundation.yellow[500],
			text: foundation.slate[900],
			border: foundation.yellow[400],
			weak: getWeakColor(foundation.yellow[300], 25),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.slate[900],
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 25),
		},
		neutral: {
			surface: foundation.slate[800],
			surfaceHover: foundation.slate[700],
			surfaceActive: foundation.slate[600],
			text: foundation.slate[200],
			border: foundation.slate[700],
			weak: getWeakColor(foundation.slate[800], 25),
		},
		surface: {
			background: foundation.slate[900],
			backgroundElevated: foundation.slate[800],
			outline: foundation.slate[800],
			text: foundation.slate[200],
			textMuted: foundation.slate[400],
			divider: "rgba(148, 163, 184, 0.24)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.sans,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xsmall,
			small: foundation.fontSize.small,
			medium: foundation.fontSize.medium,
			large: foundation.fontSize.large,
			xlarge: foundation.fontSize.xlarge,
			"display-small": foundation.fontSize["2xlarge"],
			"display-medium": foundation.fontSize["3xlarge"],
			"display-large": foundation.fontSize["4xlarge"],
		},
		lineHeight: {
			xsmall: String(foundation.lineHeight.snug),
			small: String(foundation.lineHeight.normal),
			medium: String(foundation.lineHeight.normal),
			large: String(foundation.lineHeight.relaxed),
			xlarge: String(foundation.lineHeight.relaxed),
			"display-small": String(foundation.lineHeight.tight),
			"display-medium": String(foundation.lineHeight.tight),
			"display-large": String(foundation.lineHeight.tight),
		},
		fontWeight: {
			regular: String(foundation.fontWeight.regular),
			medium: String(foundation.fontWeight.medium),
			semibold: String(foundation.fontWeight.semibold),
			bold: String(foundation.fontWeight.bold),
		},
	},
	radius: {
		none: foundation.radius.none,
		small: foundation.radius.sm,
		medium: foundation.radius.xl, // 16px
		large: foundation.radius.xxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		...foundation.shadow,
		pixelBox: "none",
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				medium: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				large: `${foundation.spacing.md} ${foundation.spacing.lg}`,
				xlarge: `${foundation.spacing.lg} ${foundation.spacing.xl}`,
			},
			radius: {
				small: foundation.radius.sm,
				medium: foundation.radius.xl,
				large: foundation.radius.xxl,
			},
		},
		card: {
			radius: foundation.radius.xl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.md,
			padding: foundation.spacing.sm,
		},
	},
});
