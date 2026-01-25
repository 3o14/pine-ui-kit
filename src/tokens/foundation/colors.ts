export const purple = {
	50: "#faf5ff",
	100: "#f3e8ff",
	200: "#e9d5ff",
	300: "#d8b4fe",
	400: "#c084fc",
	500: "#a855f7",
	600: "#9333ea",
	700: "#7e22ce",
	800: "#6b21a8",
	900: "#581c87",
} as const;

export const slate = {
	50: "#f8fafc",
	100: "#f1f5f9",
	200: "#e2e8f0",
	300: "#cbd5e1",
	400: "#94a3b8",
	500: "#64748b",
	600: "#475569",
	700: "#334155",
	800: "#1e293b",
	900: "#0f172a",
} as const;

export const green = {
	50: "#f0fdf4",
	100: "#dcfce7",
	200: "#bbf7d0",
	300: "#86efac",
	400: "#4ade80",
	500: "#22c55e",
	600: "#16a34a",
	700: "#15803d",
	800: "#166534",
	900: "#14532d",
} as const;

export const yellow = {
	50: "#fefce8",
	100: "#fef9c3",
	200: "#fef08a",
	300: "#fde047",
	400: "#facc15",
	500: "#eab308",
	600: "#ca8a04",
	700: "#a16207",
	800: "#854d0e",
	900: "#713f12",
} as const;

export const red = {
	50: "#fef2f2",
	100: "#fee2e2",
	200: "#fecaca",
	300: "#fca5a5",
	400: "#f87171",
	500: "#ef4444",
	600: "#dc2626",
	700: "#b91c1c",
	800: "#991b1b",
	900: "#7f1d1d",
} as const;

export const gameGreen = {
	50: "#f0fff4",
	100: "#dcffe7",
	200: "#b8ffcf",
	300: "#94ffb7",
	400: "#70ff9f",
	500: "#4cff87",
	600: "#3dcc6f",
	700: "#2e9957",
	800: "#1f663f",
	900: "#103327",
} as const;

export const gameOrange = {
	50: "#fff8f0",
	100: "#fff1dc",
	200: "#ffe3b8",
	300: "#ffd594",
	400: "#ffc770",
	500: "#ffb94c",
	600: "#cc943d",
	700: "#996f2e",
	800: "#664a1f",
	900: "#332510",
} as const;

export const gameBlue = {
	50: "#f0f8ff",
	100: "#dcf0ff",
	200: "#b8e1ff",
	300: "#94d2ff",
	400: "#70c3ff",
	500: "#4cb4ff",
	600: "#3d90cc",
	700: "#2e6c99",
	800: "#1f4866",
	900: "#102433",
} as const;

export const crayonPurple = {
	50: "#f5f2ff",
	100: "#ebe5ff",
	200: "#d7cbff",
	300: "#c3b1ff",
	400: "#af97ff",
	500: "#b9a7ff",
	600: "#9486cc",
	700: "#6f6599",
	800: "#4a4466",
	900: "#252233",
} as const;

export const crayonPink = {
	50: "#fff5f9",
	100: "#ffebf3",
	200: "#ffd7e7",
	300: "#ffc3db",
	400: "#ffafcf",
	500: "#ffb4d4",
	600: "#cc90aa",
	700: "#996c80",
	800: "#664855",
	900: "#33242b",
} as const;

export const crayonGreen = {
	50: "#f5fff8",
	100: "#ebfff1",
	200: "#d7ffe3",
	300: "#c3ffd5",
	400: "#afffc7",
	500: "#b4f4c4",
	600: "#90c39d",
	700: "#6c9276",
	800: "#48614f",
	900: "#243028",
} as const;

export const crayonYellow = {
	50: "#fffef5",
	100: "#fffdeb",
	200: "#fffbd7",
	300: "#fff9c3",
	400: "#fff7af",
	500: "#ffe5a7",
	600: "#ccb786",
	700: "#998965",
	800: "#665b44",
	900: "#332d22",
} as const;

export const crayonBlue = {
	50: "#f5f9ff",
	100: "#ebf3ff",
	200: "#d7e7ff",
	300: "#c3dbff",
	400: "#afcfff",
	500: "#a7d7ff",
	600: "#86acc6",
	700: "#658194",
	800: "#445663",
	900: "#222b31",
} as const;

export const crayonCream = {
	50: "#fffefb",
	100: "#fffdf7",
	200: "#fffbf0",
	300: "#fff9e8",
	400: "#fff7e0",
	500: "#faf3ec",
	600: "#c8c2bc",
	700: "#96918d",
	800: "#64615e",
	900: "#32302f",
} as const;

export const crayonDark = {
	50: "#f5f5f5",
	100: "#ebebeb",
	200: "#d7d7d7",
	300: "#c3c3c3",
	400: "#afafaf",
	500: "#4b4b4b",
	600: "#3c3c3c",
	700: "#2d2d2d",
	800: "#1e1e1e",
	900: "#0f0f0f",
} as const;

export const neutral = {
	white: "#ffffff",
	black: "#000000",
	transparent: "transparent",
} as const;

export type FoundationColorScale = typeof purple;
export type FoundationColorName =
	| "purple"
	| "slate"
	| "green"
	| "yellow"
	| "red"
	| "gameGreen"
	| "gameOrange"
	| "gameBlue"
	| "crayonPurple"
	| "crayonPink"
	| "crayonGreen"
	| "crayonYellow"
	| "crayonBlue"
	| "crayonCream"
	| "crayonDark";
