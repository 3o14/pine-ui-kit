export const fontFamily = {
	sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
	mono: "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
	crayon:
		"'온글잎-승훈체', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
	pixel: "'DungGeunMo', system-ui, -apple-system, sans-serif",
} as const;

export const fontWeight = {
	thin: 100,
	extralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
} as const;

export const fontSize = {
	"2xs": "0.625rem",
	xs: "0.75rem",
	sm: "0.875rem",
	md: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	"2xl": "1.5rem",
	"3xl": "1.875rem",
	"4xl": "2.25rem",
	"5xl": "3rem",
} as const;

export const lineHeight = {
	none: 1,
	tight: 1.25,
	snug: 1.375,
	normal: 1.5,
	relaxed: 1.625,
	loose: 2,
} as const;

export const letterSpacing = {
	tighter: "-0.05em",
	tight: "-0.025em",
	normal: "0em",
	wide: "0.025em",
	wider: "0.05em",
	widest: "0.1em",
} as const;

export type FoundationFontFamily = keyof typeof fontFamily;
export type FoundationFontWeight = keyof typeof fontWeight;
export type FoundationFontSize = keyof typeof fontSize;
export type FoundationLineHeight = keyof typeof lineHeight;
export type FoundationLetterSpacing = keyof typeof letterSpacing;
