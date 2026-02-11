import { createTheme, globalFontFace } from "@vanilla-extract/css";
import { semanticTokens } from "../semantic";
import * as foundation from "../foundation";
import { getWeakColor } from "../utils/getWeakColor";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "../utils/constants";

globalFontFace("DungGeunMo", {
	src: 'url("/font/DungGeunMo.woff2") format("woff2")',
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

export const gameLightTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.gameBlue[500],
			surfaceHover: foundation.gameBlue[600],
			surfaceActive: foundation.gameBlue[700],
			text: foundation.neutral.white,
			border: foundation.gameBlue[600],
			weak: getWeakColor(foundation.gameBlue[500], 25),
		},
		success: {
			surface: foundation.gameGreen[500],
			surfaceHover: foundation.gameGreen[600],
			surfaceActive: foundation.gameGreen[700],
			text: foundation.neutral.white,
			border: foundation.gameGreen[600],
			weak: getWeakColor(foundation.gameGreen[500], 25),
		},
		warning: {
			surface: foundation.gameOrange[500],
			surfaceHover: foundation.gameOrange[600],
			surfaceActive: foundation.gameOrange[700],
			text: foundation.neutral.white,
			border: foundation.gameOrange[600],
			weak: getWeakColor(foundation.gameOrange[500], 25),
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
			sans: foundation.fontFamily.pixel,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xs"],
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
		small: foundation.radius.none,
		medium: foundation.radius.none,
		large: foundation.radius.none,
		xlarge: foundation.radius.none,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: `calc(-4px) 0 0 0 black, 4px 0 0 0 black, 0 4px 0 0 black, 0 calc(-4px) 0 0 black`,
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xxxs} ${foundation.spacing.xs}`,
				medium: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				large: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				xlarge: `${foundation.spacing.md} ${foundation.spacing.lg}`,
			},
			radius: {
				small: foundation.radius.none,
				medium: foundation.radius.none,
				large: foundation.radius.none,
			},
		},
		card: {
			radius: foundation.radius.none,
			padding: foundation.spacing.sm,
		},
		input: {
			radius: foundation.radius.none,
			padding: foundation.spacing.xs,
		},
	},
});

export const gameDarkTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: foundation.gameBlue[400],
			surfaceHover: foundation.gameBlue[500],
			surfaceActive: foundation.gameBlue[600],
			text: foundation.neutral.white,
			border: foundation.gameBlue[500],
			weak: getWeakColor(foundation.gameBlue[400], 25),
		},
		success: {
			surface: foundation.gameGreen[400],
			surfaceHover: foundation.gameGreen[500],
			surfaceActive: foundation.gameGreen[600],
			text: foundation.neutral.white,
			border: foundation.gameGreen[500],
			weak: getWeakColor(foundation.gameGreen[400], 25),
		},
		warning: {
			surface: foundation.gameOrange[400],
			surfaceHover: foundation.gameOrange[500],
			surfaceActive: foundation.gameOrange[600],
			text: foundation.neutral.white,
			border: foundation.gameOrange[500],
			weak: getWeakColor(foundation.gameOrange[400], 25),
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
			sans: foundation.fontFamily.pixel,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xs"],
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
		small: foundation.radius.none,
		medium: foundation.radius.none,
		large: foundation.radius.none,
		xlarge: foundation.radius.none,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: `calc(-4px) 0 0 0 ${foundation.neutral.white}, 4px 0 0 0 ${foundation.neutral.white}, 0 4px 0 0 ${foundation.neutral.white}, 0 calc(-4px) 0 0 ${foundation.neutral.white}`,
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xxxs} ${foundation.spacing.xs}`,
				medium: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				large: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				xlarge: `${foundation.spacing.md} ${foundation.spacing.lg}`,
			},
			radius: {
				small: foundation.radius.none,
				medium: foundation.radius.none,
				large: foundation.radius.none,
			},
		},
		card: {
			radius: foundation.radius.none,
			padding: foundation.spacing.sm,
		},
		input: {
			radius: foundation.radius.none,
			padding: foundation.spacing.xs,
		},
	},
});
