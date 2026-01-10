export type FontWeightToken = "regular" | "medium" | "semibold" | "bold";

export type FontSizeToken =
	| "xsmall"
	| "small"
	| "medium"
	| "large"
	| "xlarge"
	| "display-small"
	| "display-medium"
	| "display-large";

export const fontFamily = {
	sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
	mono: "'Roboto Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
} as const;

export const fontWeight: Record<FontWeightToken, number> = {
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
};

export const fontSize: Record<FontSizeToken, string> = {
	xsmall: "0.75rem",
	small: "0.875rem",
	medium: "1rem",
	large: "1.125rem",
	xlarge: "1.25rem",
	"display-small": "1.5rem",
	"display-medium": "1.875rem",
	"display-large": "2.25rem",
};

export const lineHeight: Record<FontSizeToken, number> = {
	xsmall: 1.4,
	small: 1.45,
	medium: 1.5,
	large: 1.55,
	xlarge: 1.6,
	"display-small": 1.3,
	"display-medium": 1.25,
	"display-large": 1.2,
};
