import { type ColorScale } from "../colors";
import { getWeakColor } from "./getWeakColor";

/**
 * hex 색상 문자열을 정규화합니다 (#RRGGBB 형식으로 변환)
 */
function normalizeHex(hex: string): string {
	if (hex.length === 4) {
		// #RGB -> #RRGGBB
		return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
	}
	return hex;
}

/**
 * hex 색상에서 RGB 값을 추출합니다
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
	const normalized = normalizeHex(hex);
	const color = normalized.replace("#", "");

	return {
		r: parseInt(color.substring(0, 2), 16),
		g: parseInt(color.substring(2, 4), 16),
		b: parseInt(color.substring(4, 6), 16),
	};
}

/**
 * hex 색상의 밝기를 계산합니다 (0-255)
 * WCAG 상대적 밝기 공식 사용
 */
function getLuminance(hex: string): number {
	const { r, g, b } = hexToRgb(hex);
	// 상대적 밝기 계산 (WCAG 공식)
	return 0.299 * r + 0.587 * g + 0.114 * b;
}

/**
 * RGB 값을 hex 문자열로 변환합니다
 */
function rgbToHex(r: number, g: number, b: number): string {
	const clamp = (value: number) =>
		Math.max(0, Math.min(255, Math.round(value)));
	return `#${clamp(r).toString(16).padStart(2, "0")}${clamp(g).toString(16).padStart(2, "0")}${clamp(b).toString(16).padStart(2, "0")}`;
}

/**
 * hex 색상을 어둡게 만듭니다
 */
function darken(hex: string, percent: number): string {
	const { r, g, b } = hexToRgb(hex);
	const factor = 1 - percent / 100;
	return rgbToHex(r * factor, g * factor, b * factor);
}

/**
 * hex 색상을 밝게 만듭니다
 */
function lighten(hex: string, percent: number): string {
	const { r, g, b } = hexToRgb(hex);
	const factor = percent / 100;
	return rgbToHex(
		r + (255 - r) * factor,
		g + (255 - g) * factor,
		b + (255 - b) * factor
	);
}

/**
 * primary hex 색상으로부터 ColorScale을 자동 생성합니다
 *
 * @param primaryHex - primary 색상 (hex 형식, 예: "#8b5cf6")
 * @param isDark - 다크 모드 여부 (기본값: false)
 * @returns ColorScale 객체
 *
 * @example
 * ```ts
 * const scale = generateColorScale("#8b5cf6", false);
 * // {
 * //   surface: "#8b5cf6",
 * //   surfaceHover: "#7c3aed", // 약 10% 어둡게
 * //   surfaceActive: "#6d28d9", // 약 20% 어둡게
 * //   text: "#ffffff", // 밝은 배경이므로 흰색
 * //   border: "#7c3aed", // hover와 동일
 * //   weak: "color-mix(...)" // 약한 배경색
 * // }
 * ```
 */
export function generateColorScale(
	primaryHex: string,
	isDark: boolean = false
): ColorScale {
	// hex 형식 검증
	if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(primaryHex)) {
		throw new Error(
			`Invalid hex color format: ${primaryHex}. Expected format: #RRGGBB or #RGB`
		);
	}

	const surface = normalizeHex(primaryHex);

	// 다크 모드에서는 밝게, 라이트 모드에서는 어둡게
	const hoverAdjustment = isDark ? 10 : -10;
	const activeAdjustment = isDark ? 20 : -20;

	const surfaceHover = isDark
		? lighten(surface, Math.abs(hoverAdjustment))
		: darken(surface, Math.abs(hoverAdjustment));

	const surfaceActive = isDark
		? lighten(surface, Math.abs(activeAdjustment))
		: darken(surface, Math.abs(activeAdjustment));

	// 텍스트 색상 결정: 밝기에 따라 흰색 또는 검은색
	const luminance = getLuminance(surface);
	const textThreshold = 128; // 중간 밝기 기준
	const text = luminance > textThreshold ? "#0f172a" : "#ffffff";

	// border는 hover 색상과 동일
	const border = surfaceHover;

	// weak 색상은 getWeakColor 사용
	const weak = getWeakColor(surface, 25);

	return {
		surface,
		surfaceHover,
		surfaceActive,
		text,
		border,
		weak,
	};
}
