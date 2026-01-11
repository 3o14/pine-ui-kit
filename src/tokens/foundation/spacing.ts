/**
 * Foundation Layer - Spacing
 * 원시 spacing 값 정의 (테마와 무관한 순수 값)
 */

export const spacing = {
	none: "0px",
	xxxs: "2px",
	xxs: "4px",
	xs: "8px",
	sm: "12px",
	md: "16px",
	lg: "24px",
	xl: "32px",
	xxl: "40px",
	xxxl: "64px",
} as const;

export type FoundationSpacingToken = keyof typeof spacing;
