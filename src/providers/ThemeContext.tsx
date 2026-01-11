import { createContext } from "react";

export type ThemeMode = "light" | "dark";
export type ThemeName = "basic" | "game" | "crayon";

export interface ThemeContextValue {
	mode: ThemeMode;
	setMode: (mode: ThemeMode) => void;
	theme: ThemeName;
	setTheme: (theme: ThemeName) => void;
	themeClass: string;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

