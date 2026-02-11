import { createTheme, globalFontFace } from "@vanilla-extract/css";
import { semanticTokens } from "../semantic";
import * as foundation from "../foundation";
import { getWeakColor } from "../utils/getWeakColor";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "../utils/constants";

globalFontFace("온글잎-승훈체", {
	src: 'url("/font/온글잎-승훈체.woff2") format("woff2")',
	fontWeight: "normal",
	fontStyle: "normal",
	fontDisplay: "swap",
});

const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

export const crayonLightTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.crayonPink[500],
			surfaceHover: foundation.crayonPink[600],
			surfaceActive: foundation.crayonPink[700],
			text: foundation.neutral.white,
			border: foundation.crayonPink[600],
			weak: getWeakColor(foundation.crayonPink[500], 25),
		},
		success: {
			surface: foundation.crayonGreen[500],
			surfaceHover: foundation.crayonGreen[600],
			surfaceActive: foundation.crayonGreen[700],
			text: foundation.neutral.white,
			border: foundation.crayonGreen[600],
			weak: getWeakColor(foundation.crayonGreen[500], 25),
		},
		warning: {
			surface: foundation.crayonYellow[500],
			surfaceHover: foundation.crayonYellow[600],
			surfaceActive: foundation.crayonYellow[700],
			text: foundation.crayonDark[500],
			border: foundation.crayonYellow[600],
			weak: getWeakColor(foundation.crayonYellow[500], 25),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.neutral.white,
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 25),
		},
		neutral: {
			surface: foundation.crayonCream[500],
			surfaceHover: foundation.crayonCream[600],
			surfaceActive: foundation.crayonCream[700],
			text: foundation.crayonDark[500],
			border: foundation.crayonCream[600],
			weak: getWeakColor(foundation.crayonCream[500], 25),
		},
		surface: {
			background: foundation.crayonCream[50],
			backgroundElevated: foundation.neutral.white,
			outline: foundation.crayonCream[300],
			text: foundation.crayonDark[500],
			textMuted: foundation.crayonDark[400],
			divider: "rgba(75, 75, 75, 0.08)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.crayon,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xl"],
			"display-medium": foundation.fontSize["3xl"],
			"display-large": foundation.fontSize["4xl"],
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
		small: foundation.radius.lg,
		medium: foundation.radius.xxl,
		large: foundation.radius.xxxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
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
				small: foundation.radius.xxl,
				medium: foundation.radius.xxxl,
				large: foundation.radius.xxxl,
			},
		},
		card: {
			radius: foundation.radius.xxxl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.xxl,
			padding: foundation.spacing.sm,
		},
	},
});

export const crayonDarkTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.crayonPink[400],
			surfaceHover: foundation.crayonPink[500],
			surfaceActive: foundation.crayonPink[600],
			text: foundation.neutral.white,
			border: foundation.crayonPink[500],
			weak: getWeakColor(foundation.crayonPink[400], 25),
		},
		success: {
			surface: foundation.crayonGreen[400],
			surfaceHover: foundation.crayonGreen[500],
			surfaceActive: foundation.crayonGreen[600],
			text: foundation.neutral.white,
			border: foundation.crayonGreen[500],
			weak: getWeakColor(foundation.crayonGreen[400], 25),
		},
		warning: {
			surface: foundation.crayonYellow[400],
			surfaceHover: foundation.crayonYellow[500],
			surfaceActive: foundation.crayonYellow[600],
			text: foundation.crayonDark[500],
			border: foundation.crayonYellow[500],
			weak: getWeakColor(foundation.crayonYellow[400], 25),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.neutral.white,
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 25),
		},
		neutral: {
			surface: foundation.crayonDark[500],
			surfaceHover: foundation.crayonDark[600],
			surfaceActive: foundation.crayonDark[700],
			text: foundation.crayonCream[500],
			border: foundation.crayonDark[600],
			weak: getWeakColor(foundation.crayonDark[500], 25),
		},
		surface: {
			background: foundation.crayonDark[900],
			backgroundElevated: foundation.crayonDark[800],
			outline: foundation.crayonDark[700],
			text: foundation.crayonCream[500],
			textMuted: foundation.crayonDark[400],
			divider: "rgba(250, 243, 236, 0.24)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.crayon,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xl"],
			"display-medium": foundation.fontSize["3xl"],
			"display-large": foundation.fontSize["4xl"],
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
		small: foundation.radius.lg,
		medium: foundation.radius.xxl,
		large: foundation.radius.xxxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
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
				small: foundation.radius.xxl,
				medium: foundation.radius.xxxl,
				large: foundation.radius.xxxl,
			},
		},
		card: {
			radius: foundation.radius.xxxl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.xxl,
			padding: foundation.spacing.sm,
		},
	},
});
