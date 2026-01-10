/**
 * Primary 색상을 위한 CSS 변수 이름 상수 (런타임 설정용)
 *
 * 참고: createVar()는 .css.ts 파일에서만 사용 가능하므로,
 * theme.css.ts에서 createVar()로 생성한 변수와 동일한 이름을 사용합니다.
 */
export const PRIMARY_COLOR_CSS_VAR_NAMES = {
	surface: "--pie-primary-surface",
	surfaceHover: "--pie-primary-surface-hover",
	surfaceActive: "--pie-primary-surface-active",
	text: "--pie-primary-text",
	border: "--pie-primary-border",
	weak: "--pie-primary-weak",
} as const;
