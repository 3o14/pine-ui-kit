import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * useTheme - Hook to access theme context
 * 
 * @example
 * ```tsx
 * const { mode, setMode, themeClass } = useTheme();
 * ```
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

