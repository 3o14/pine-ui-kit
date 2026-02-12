import React, {
	useEffect,
	useState,
	useMemo,
	useCallback,
	useRef,
} from "react";
import {
	ThemeContext,
	type Theme,
	type Design,
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
	defaultTheme?: Theme;
	theme?: Theme;
	onThemeChange?: (theme: Theme) => void;
	syncWithSystem?: boolean;
	design?: Design;
	defaultDesign?: Design;
	onDesignChange?: (design: Design) => void;
	primaryColor?: string;
	className?: string;
	style?: React.CSSProperties;
}

const getSystemTheme = (): Theme => {
	if (typeof window === "undefined") {
		return "light";
	}

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({
	children,
	defaultTheme,
	theme: controlledTheme,
	onThemeChange,
	syncWithSystem = true,
	design: controlledDesign,
	defaultDesign = "basic",
	onDesignChange,
	primaryColor,
	className,
	style,
}: ThemeProviderProps) => {
	const getInitialTheme = (): Theme => {
		if (defaultTheme) {
			return defaultTheme;
		}
		return syncWithSystem ? getSystemTheme() : "light";
	};

	const [internalTheme, setInternalTheme] = useState<Theme>(getInitialTheme);
	const [internalDesign, setInternalDesign] = useState<Design>(defaultDesign);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (controlledTheme !== undefined) {
			setInternalTheme(controlledTheme);
		}
	}, [controlledTheme]);

	useEffect(() => {
		if (!syncWithSystem || controlledTheme !== undefined) {
			return;
		}

		if (typeof window === "undefined") {
			return;
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleSystemThemeChange = (
			e: MediaQueryListEvent | MediaQueryList
		) => {
			const newSystemTheme: Theme = e.matches ? "dark" : "light";
			setInternalTheme(newSystemTheme);
			onThemeChange?.(newSystemTheme);
		};

		handleSystemThemeChange(mediaQuery);

		mediaQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, [syncWithSystem, controlledTheme, onThemeChange]);

	const theme = useMemo(() => {
		return controlledTheme ?? internalTheme;
	}, [controlledTheme, internalTheme]);

	const design = useMemo(() => {
		return controlledDesign ?? internalDesign;
	}, [controlledDesign, internalDesign]);

	const themeClass = useMemo(() => {
		if (design === "game") {
			return theme === "dark" ? gameDarkTheme : gameLightTheme;
		}
		if (design === "crayon") {
			return theme === "dark" ? crayonDarkTheme : crayonLightTheme;
		}
		return theme === "dark" ? basicDarkTheme : basicLightTheme;
	}, [design, theme]);

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const container = containerRef.current;
		const isDark = theme === "dark";

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
	}, [primaryColor, theme]);

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
	}, [theme, design, themeClass]);

	const setTheme = useCallback(
		(newTheme: Theme) => {
			if (!controlledTheme) {
				setInternalTheme(newTheme);
			}
			onThemeChange?.(newTheme);
		},
		[controlledTheme, onThemeChange]
	);

	const setDesign = useCallback(
		(newDesign: Design) => {
			if (!controlledDesign) {
				setInternalDesign(newDesign);
			}
			onDesignChange?.(newDesign);
		},
		[controlledDesign, onDesignChange]
	);

	const value: ThemeContextValue = useMemo(() => {
		return {
			theme,
			setTheme,
			design,
			setDesign,
			themeClass,
		};
	}, [theme, design, themeClass, setTheme, setDesign]);

	return (
		<ThemeContext.Provider value={value}>
			<div
				ref={containerRef}
				className={clsx(themeClass, className)}
				style={style}
			>
				{design === "crayon" && <CrayonThemeFilters />}
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

