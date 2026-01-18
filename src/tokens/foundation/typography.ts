/**
 * Foundation Layer - Typography
 * 원시 폰트 값 정의 (테마와 무관한 순수 값)
 */

export const fontFamily = {
	sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
	mono: "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
	// Crayon 테마용 폰트
	crayon: "'Human-Beomseok Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
	// Game 테마용 pixel 폰트
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
	"2xsmall": "0.625rem", // 10px
	xsmall: "0.75rem", // 12px
	small: "0.875rem", // 14px
	medium: "1rem", // 16px
	large: "1.125rem", // 18px
	xlarge: "1.25rem", // 20px
	"2xlarge": "1.5rem", // 24px
	"3xlarge": "1.875rem", // 30px
	"4xlarge": "2.25rem", // 36px
	"5xlarge": "3rem", // 48px
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
