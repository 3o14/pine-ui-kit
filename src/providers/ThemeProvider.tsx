import React, {
	useEffect,
	useState,
	useMemo,
	useCallback,
	useRef,
} from "react";
import {
	ThemeContext,
	type ThemeMode,
	type ThemeName,
	type ThemeContextValue,
} from "./ThemeContext";
import {
	applyPrimaryColorFromHex,
	applyPrimaryColorVars,
} from "@/tokens/utils";
import { lightColors, darkColors } from "@/tokens/colors";
import {
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
} from "@/tokens/themes";
import { CrayonThemeFilters } from "./CrayonThemeFilters";
import clsx from "clsx";

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultMode?: ThemeMode;
	mode?: ThemeMode;
	onModeChange?: (mode: ThemeMode) => void;
	syncWithSystem?: boolean;
	theme?: ThemeName;
	defaultTheme?: ThemeName;
	onThemeChange?: (theme: ThemeName) => void;
	primaryColor?: string;
	className?: string;
	style?: React.CSSProperties;
}

const getSystemTheme = (): ThemeMode => {
	if (typeof window === "undefined") {
		return "light";
	}

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({
	children,
	defaultMode,
	mode: controlledMode,
	onModeChange,
	syncWithSystem = true,
	theme: controlledTheme,
	defaultTheme = "basic",
	onThemeChange,
	primaryColor,
	className,
	style,
}: ThemeProviderProps) => {
	const getInitialMode = (): ThemeMode => {
		if (defaultMode) {
			return defaultMode;
		}
		return syncWithSystem ? getSystemTheme() : "light";
	};

	const [internalMode, setInternalMode] = useState<ThemeMode>(getInitialMode);
	const [internalTheme, setInternalTheme] = useState<ThemeName>(defaultTheme);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (controlledMode !== undefined) {
			setInternalMode(controlledMode);
		}
	}, [controlledMode]);

	useEffect(() => {
		if (!syncWithSystem || controlledMode !== undefined) {
			return;
		}

		if (typeof window === "undefined") {
			return;
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleSystemThemeChange = (
			e: MediaQueryListEvent | MediaQueryList
		) => {
			const newSystemTheme: ThemeMode = e.matches ? "dark" : "light";
			setInternalMode(newSystemTheme);
			onModeChange?.(newSystemTheme);
		};

		handleSystemThemeChange(mediaQuery);

		mediaQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, [syncWithSystem, controlledMode, onModeChange]);

	const mode = useMemo(() => {
		return controlledMode ?? internalMode;
	}, [controlledMode, internalMode]);

	const theme = useMemo(() => {
		return controlledTheme ?? internalTheme;
	}, [controlledTheme, internalTheme]);

	const themeClass = useMemo(() => {
		if (theme === "game") {
			return mode === "dark" ? gameDarkTheme : gameLightTheme;
		}
		if (theme === "crayon") {
			return mode === "dark" ? crayonDarkTheme : crayonLightTheme;
		}
		return mode === "dark" ? basicDarkTheme : basicLightTheme;
	}, [theme, mode]);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const container = containerRef.current;
		const isDark = mode === "dark";

		if (primaryColor) {
			try {
				applyPrimaryColorFromHex(primaryColor, isDark, container);
			} catch (error) {
				console.warn(
					"Failed to generate color scale from primaryColor:",
					error
				);
				const defaultColors = isDark
					? darkColors.palette.primary
					: lightColors.palette.primary;
				applyPrimaryColorVars(defaultColors, container);
			}
		} else {
			const defaultColors = isDark
				? darkColors.palette.primary
				: lightColors.palette.primary;

			applyPrimaryColorVars(defaultColors, container);
		}
	}, [primaryColor, mode]);

	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		const root = document.documentElement;

		root.classList.remove(
			basicLightTheme,
			basicDarkTheme,
			gameLightTheme,
			gameDarkTheme,
			crayonLightTheme,
			crayonDarkTheme
		);

		root.classList.add(themeClass);
	}, [mode, theme, themeClass]);

	const setMode = useCallback(
		(newMode: ThemeMode) => {
			if (!controlledMode) {
				setInternalMode(newMode);
			}
			onModeChange?.(newMode);
		},
		[controlledMode, onModeChange]
	);

	const setTheme = useCallback(
		(newTheme: ThemeName) => {
			if (!controlledTheme) {
				setInternalTheme(newTheme);
			}
			onThemeChange?.(newTheme);
		},
		[controlledTheme, onThemeChange]
	);

	const value: ThemeContextValue = useMemo(() => {
		return {
			mode,
			setMode,
			theme,
			setTheme,
			themeClass,
		};
	}, [mode, theme, themeClass, setMode, setTheme]);

	return (
		<ThemeContext.Provider value={value}>
			<div
				ref={containerRef}
				className={clsx(themeClass, className)}
				style={style}
			>
				{theme === "crayon" && <CrayonThemeFilters />}
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

