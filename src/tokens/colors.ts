import { getWeakColor } from "./utils";

export type ColorIntent =
	| "primary"
	| "secondary"
	| "success"
	| "warning"
	| "danger"
	| "neutral";

export type ColorState =
	| "surface"
	| "surfaceHover"
	| "surfaceActive"
	| "text"
	| "border"
	| "weak";

export type ColorScale = Record<ColorState, string>;

export type SurfaceTokenSet = {
	background: string;
	backgroundElevated: string;
	outline: string;
	text: string;
	textMuted: string;
	divider: string;
};

export type ColorTokens = {
	palette: Record<ColorIntent, ColorScale>;
	surface: SurfaceTokenSet;
};

const lightPalette: Record<ColorIntent, ColorScale> = {
	primary: {
		surface: "#8b5cf6",
		surfaceHover: "#7c3aed",
		surfaceActive: "#6d28d9",
		text: "#ffffff",
		border: "#7c3aed",
		weak: getWeakColor("#8b5cf6", 25),
	},
	secondary: {
		surface: "#475569",
		surfaceHover: "#334155",
		surfaceActive: "#1f2937",
		text: "#ffffff",
		border: "#334155",
		weak: getWeakColor("#475569", 25),
	},
	success: {
		surface: "#16a34a",
		surfaceHover: "#15803d",
		surfaceActive: "#166534",
		text: "#ffffff",
		border: "#15803d",
		weak: getWeakColor("#16a34a", 25),
	},
	warning: {
		surface: "#facc15",
		surfaceHover: "#eab308",
		surfaceActive: "#ca8a04",
		text: "#0f172a",
		border: "#eab308",
		weak: getWeakColor("#facc15", 25),
	},
	danger: {
		surface: "#ef4444",
		surfaceHover: "#dc2626",
		surfaceActive: "#b91c1c",
		text: "#ffffff",
		border: "#dc2626",
		weak: getWeakColor("#ef4444", 25),
	},
	neutral: {
		surface: "#e2e8f0",
		surfaceHover: "#cbd5f5",
		surfaceActive: "#94a3b8",
		text: "#0f172a",
		border: "#cbd5f5",
		weak: getWeakColor("#e2e8f0", 25),
	},
};

const darkPalette: Record<ColorIntent, ColorScale> = {
	primary: {
		surface: "#a78bfa",
		surfaceHover: "#8b5cf6",
		surfaceActive: "#7c3aed",
		text: "#0b1120",
		border: "#8b5cf6",
		weak: getWeakColor("#a78bfa", 25),
	},
	secondary: {
		surface: "#64748b",
		surfaceHover: "#475569",
		surfaceActive: "#334155",
		text: "#0b1120",
		border: "#475569",
		weak: getWeakColor("#64748b", 25),
	},
	success: {
		surface: "#22c55e",
		surfaceHover: "#16a34a",
		surfaceActive: "#15803d",
		text: "#0b1120",
		border: "#16a34a",
		weak: getWeakColor("#22c55e", 25),
	},
	warning: {
		surface: "#fde047",
		surfaceHover: "#facc15",
		surfaceActive: "#eab308",
		text: "#0b1120",
		border: "#facc15",
		weak: getWeakColor("#fde047", 25),
	},
	danger: {
		surface: "#f87171",
		surfaceHover: "#ef4444",
		surfaceActive: "#dc2626",
		text: "#0b1120",
		border: "#ef4444",
		weak: getWeakColor("#f87171", 25),
	},
	neutral: {
		surface: "#1e293b",
		surfaceHover: "#334155",
		surfaceActive: "#475569",
		text: "#e2e8f0",
		border: "#334155",
		weak: getWeakColor("#1e293b", 25),
	},
};

const lightSurface: SurfaceTokenSet = {
	background: "#ffffff",
	backgroundElevated: "#f8fafc",
	outline: "#cbd5f5",
	text: "#0f172a",
	textMuted: "#475569",
	divider: "rgba(15, 23, 42, 0.08)",
};

const darkSurface: SurfaceTokenSet = {
	background: "#0b1120",
	backgroundElevated: "#111827",
	outline: "#1e293b",
	text: "#e2e8f0",
	textMuted: "#94a3b8",
	divider: "rgba(148, 163, 184, 0.24)",
};

export const lightColors: ColorTokens = {
	palette: lightPalette,
	surface: lightSurface,
};

export const darkColors: ColorTokens = {
	palette: darkPalette,
	surface: darkSurface,
};

export const colors = {
	light: lightColors,
	dark: darkColors,
};

export type ColorMode = keyof typeof colors;
