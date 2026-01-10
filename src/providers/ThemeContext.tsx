import { createContext } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextValue {
	mode: ThemeMode;
	setMode: (mode: ThemeMode) => void;
	themeClass: string;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

