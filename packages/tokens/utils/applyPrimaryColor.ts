import { type ColorScale } from "../colors";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./constants";
import { generateColorScale } from "./generateColorScale";

/**
 * document root에 primary 색상 CSS 변수를 설정합니다
 *
 * @param colorScale - 설정할 색상 스케일
 * @param root - 설정할 DOM 요소 (기본값: document.documentElement)
 */
/**
 * document root에 primary 색상 CSS 변수를 설정합니다
 *
 * @param colorScale - 설정할 색상 스케일
 * @param root - 설정할 DOM 요소 (기본값: document.documentElement)
 */
export function applyPrimaryColorVars(
	colorScale: ColorScale,
	root: HTMLElement = document.documentElement
): void {
	root.style.setProperty(
		PRIMARY_COLOR_CSS_VAR_NAMES.surface,
		colorScale.surface
	);
	root.style.setProperty(
		PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover,
		colorScale.surfaceHover
	);
	root.style.setProperty(
		PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive,
		colorScale.surfaceActive
	);
	root.style.setProperty(PRIMARY_COLOR_CSS_VAR_NAMES.text, colorScale.text);
	root.style.setProperty(PRIMARY_COLOR_CSS_VAR_NAMES.border, colorScale.border);
	root.style.setProperty(PRIMARY_COLOR_CSS_VAR_NAMES.weak, colorScale.weak);
}

/**
 * hex 색상으로부터 primary 색상 CSS 변수를 생성하고 적용합니다
 *
 * @param primaryHex - primary 색상 (hex 형식)
 * @param isDark - 다크 모드 여부
 * @param root - 설정할 DOM 요소 (기본값: document.documentElement)
 * @throws {Error} 유효하지 않은 hex 색상 형식인 경우
 */
export function applyPrimaryColorFromHex(
	primaryHex: string,
	isDark: boolean,
	root: HTMLElement = document.documentElement
): void {
	const colorScale = generateColorScale(primaryHex, isDark);
	applyPrimaryColorVars(colorScale, root);
}
