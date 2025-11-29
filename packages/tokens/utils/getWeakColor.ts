/**
 * 색상을 흰색과 혼합하여 파스텔톤 weak 색상을 생성합니다
 * @param color - 원본 색상 (hex 또는 CSS 변수)
 * @param percent - 원본 색상의 비율 (0-100, 기본값: 25)
 * @returns color-mix CSS 함수 문자열
 * @example
 * getWeakColor("#8b5cf6", 25) // "color-mix(in srgb, #8b5cf6 25%, white)"
 * getWeakColor("var(--color-primary)", 30) // "color-mix(in srgb, var(--color-primary) 30%, white)"
 */
export const getWeakColor = (color: string, percent: number = 25): string => {
	return `color-mix(in srgb, ${color} ${percent}%, white)`;
};
