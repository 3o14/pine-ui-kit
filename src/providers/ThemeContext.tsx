import { createContext } from "react";

export type Theme = "light" | "dark";
export type Design = "basic" | "game" | "crayon";

export interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	design: Design;
	setDesign: (design: Design) => void;
	themeClass: string;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

