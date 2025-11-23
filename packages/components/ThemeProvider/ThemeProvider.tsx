import React, { useEffect, useState, useMemo, useCallback } from "react";
import { lightTheme, darkTheme } from "../../tokens/theme.css";
import { ThemeContext, type ThemeMode, type ThemeContextValue } from "./ThemeContext";

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultMode?: ThemeMode;
	mode?: ThemeMode;
	onModeChange?: (mode: ThemeMode) => void;
	/**
	 * 시스템 테마 설정을 자동으로 감지하고 적용할지 여부
	 * @default true
	 */
	syncWithSystem?: boolean;
}

/**
 * 시스템 테마를 감지하는 함수
 * 클라이언트 사이드에서만 동작합니다
 */
const getSystemTheme = (): ThemeMode => {
	if (typeof window === "undefined") {
		return "light";
	}
	
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return prefersDark ? "dark" : "light";
};

/**
 * ThemeProvider - 모든 자식 컴포넌트에 테마 컨텍스트를 제공합니다
 * 
 * @example
 * ```tsx
 * <ThemeProvider defaultMode="light">
 *   <App />
 * </ThemeProvider>
 * ```
 * 
 * @example 시스템 테마 자동 감지
 * ```tsx
 * <ThemeProvider syncWithSystem={true}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({
	children,
	defaultMode,
	mode: controlledMode,
	onModeChange,
	syncWithSystem = true,
}: ThemeProviderProps) => {
	// defaultMode가 없으면 시스템 테마를 기본값으로 사용
	const initialMode = useMemo(() => {
		if (defaultMode) {
			return defaultMode;
		}
		return syncWithSystem ? getSystemTheme() : "light";
	}, [defaultMode, syncWithSystem]);

	const [internalMode, setInternalMode] = useState<ThemeMode>(initialMode);
	

	useEffect(() => {
		if (controlledMode !== undefined && controlledMode !== internalMode) {
			setInternalMode(controlledMode);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [controlledMode]);

	// 시스템 테마 변경 감지 및 자동 적용
	useEffect(() => {
		if (!syncWithSystem || controlledMode !== undefined) {
			// 제어된 모드이거나 시스템 동기화가 비활성화된 경우 리스너 등록하지 않음
			return;
		}

		if (typeof window === "undefined") {
			return;
		}

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		
		const handleSystemThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
			const newSystemTheme: ThemeMode = e.matches ? "dark" : "light";
			setInternalMode(newSystemTheme);
			onModeChange?.(newSystemTheme);
		};

		// 초기 시스템 테마와 동기화
		handleSystemThemeChange(mediaQuery);

		// 시스템 테마 변경 감지
		mediaQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, [syncWithSystem, controlledMode, onModeChange]);
	
	// 제어된 모드가 제공되면 사용하고, 그렇지 않으면 내부 상태를 사용
	const mode = controlledMode ?? internalMode;
	const themeClass = useMemo(() => {
		const computed = mode === "dark" ? darkTheme : lightTheme;
		return computed;
	}, [mode]);

	// vanilla-extract CSS 변수를 위해 document root와 동기화
	// 테마가 변경될 때 실행되도록 mode를 직접 의존성으로 사용합니다
	useEffect(() => {
		// 두 테마 클래스를 모두 제거합니다
		document.documentElement.classList.remove(lightTheme, darkTheme);
		
		// 올바른 테마 클래스를 추가합니다
		document.documentElement.classList.add(themeClass);
	}, [mode, themeClass]);

	const setMode = useCallback((newMode: ThemeMode) => {
		if (!controlledMode) {
			setInternalMode(newMode);
		}
		onModeChange?.(newMode);
	}, [controlledMode, onModeChange]);

	const value: ThemeContextValue = useMemo(() => {
		return {
			mode,
			setMode,
			themeClass,
		};
	}, [mode, themeClass, setMode]);

	return (
		<ThemeContext.Provider value={value}>
			<div className={themeClass}>{children}</div>
		</ThemeContext.Provider>
	);
};


