import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * useTheme - 테마 컨텍스트에 접근하는 Hook
 * ThemeProvider가 컴포넌트 트리에 없으면 undefined를 반환합니다
 *
 * @example
 * ```tsx
 * const themeContext = useTheme();
 * const themeClass = themeContext?.themeClass ?? lightTheme;
 * ```
 */
export const useTheme = () => {
	return useContext(ThemeContext);
};
