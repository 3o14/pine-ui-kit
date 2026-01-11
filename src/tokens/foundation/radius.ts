/**
 * Foundation Layer - Radius
 * 원시 radius 값 정의 (테마와 무관한 순수 값)
 */

export const radius = {
	none: "0px",
	xxs: "2px",
	xs: "4px",
	sm: "6px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	xxl: "24px",
	xxxl: "32px",
	full: "100%",
} as const;

export type FoundationRadiusToken = keyof typeof radius;
