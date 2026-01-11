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
	/**
	 * 시스템 테마 설정을 자동으로 감지하고 적용할지 여부
	 * @default true
	 */
	syncWithSystem?: boolean;
	/**
	 * 테마 이름 (basic, game, crayon)
	 * @default "basic"
	 */
	theme?: ThemeName;
	defaultTheme?: ThemeName;
	onThemeChange?: (theme: ThemeName) => void;
	/**
	 * primary 색상을 hex 형식으로 설정합니다 (예: "#8b5cf6")
	 * 설정하면 해당 색상으로부터 variant 색상들이 자동으로 계산됩니다
	 */
	primaryColor?: string;
	className?: string;
	style?: React.CSSProperties;
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
 *   <YourApp />
 * </ThemeProvider>
 * ```
 *
 * @example 커스텀 primary 색상 설정
 * ```tsx
 * <ThemeProvider primaryColor="#3b82f6">
 *   <YourApp />
 * </ThemeProvider>
 * ```
 * primary 색상을 설정하면 solid, outline, ghost, weak variant의 색상이 자동으로 계산됩니다.
 */
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
	// defaultMode가 없으면 시스템 테마를 기본값으로 사용
	const getInitialMode = (): ThemeMode => {
		if (defaultMode) {
			return defaultMode;
		}
		return syncWithSystem ? getSystemTheme() : "light";
	};

	const [internalMode, setInternalMode] = useState<ThemeMode>(getInitialMode);
	const [internalTheme, setInternalTheme] = useState<ThemeName>(defaultTheme);
	const containerRef = useRef<HTMLDivElement>(null);

	// controlledMode가 변경되면 즉시 내부 상태 업데이트
	useEffect(() => {
		if (controlledMode !== undefined) {
			setInternalMode(controlledMode);
		}
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

		const handleSystemThemeChange = (
			e: MediaQueryListEvent | MediaQueryList
		) => {
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
	// controlledMode가 변경되면 즉시 반영되도록 useMemo 사용
	const mode = useMemo(() => {
		return controlledMode ?? internalMode;
	}, [controlledMode, internalMode]);

	// 제어된 테마가 제공되면 사용하고, 그렇지 않으면 내부 상태를 사용
	const theme = useMemo(() => {
		return controlledTheme ?? internalTheme;
	}, [controlledTheme, internalTheme]);

	// 테마와 모드에 따라 테마 클래스 결정
	const themeClass = useMemo(() => {
		if (theme === "game") {
			return mode === "dark" ? gameDarkTheme : gameLightTheme;
		}
		if (theme === "crayon") {
			return mode === "dark" ? crayonDarkTheme : crayonLightTheme;
		}
		// basic (기본)
		return mode === "dark" ? basicDarkTheme : basicLightTheme;
	}, [theme, mode]);

	// primary 색상이 제공되면 동적으로 색상 스케일 생성 및 CSS 변수 설정
	// 컨테이너 요소에 CSS 변수를 설정하여 각 ThemeProvider가 독립적으로 작동하도록 함
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
				// 에러 발생 시 기본값으로 복원
				const defaultColors = isDark
					? darkColors.palette.primary
					: lightColors.palette.primary;
				applyPrimaryColorVars(defaultColors, container);
			}
		} else {
			// primaryColor가 없으면 기본값으로 설정
			const defaultColors = isDark
				? darkColors.palette.primary
				: lightColors.palette.primary;

			applyPrimaryColorVars(defaultColors, container);
		}
	}, [primaryColor, mode]);

	// vanilla-extract CSS 변수를 위해 document root와 동기화
	// 테마가 변경될 때 실행되도록 mode와 theme을 직접 의존성으로 사용합니다
	// CSS 변수 설정 후에 테마 클래스를 적용해야 함
	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		const root = document.documentElement;

		// 모든 테마 클래스를 제거합니다
		root.classList.remove(
			basicLightTheme,
			basicDarkTheme,
			gameLightTheme,
			gameDarkTheme,
			crayonLightTheme,
			crayonDarkTheme
		);

		// 올바른 테마 클래스를 추가합니다
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
				{/* 크레용 테마일 때만 SVG 필터 주입 */}
				{theme === "crayon" && <CrayonThemeFilters />}
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

