/**
 * 크레용 테마 전역 질감 스타일 블록
 * - bumpy shell (::before)와 texture/grain 오버레이를 위한 공통 스타일
 * - 각 컴포넌트에서 import하여 crayon 셀렉터에 사용
 */

/**
 * bumpy shell용 ::before 스타일 (배경 + 테두리 + bumpy 필터)
 * - 각 컴포넌트에서 background와 boxShadow를 variant별 토큰으로 override
 */
export const crayonBumpyShellBefore = {
	content: '""',
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
	filter: "url(#crayon-bumpy)",
};

/**
 * texture 오버레이용 backgroundImage (종이 섬유 + 왁스 반사)
 */
export const crayonTextureBackgroundImage = `
	repeating-linear-gradient(
		90deg,
		transparent 0,
		transparent 1px,
		rgba(255, 255, 255, 0.07) 1px,
		rgba(255, 255, 255, 0.07) 2px
	),
	repeating-linear-gradient(
		0deg,
		transparent 0,
		transparent 1px,
		rgba(0, 0, 0, 0.05) 1px,
		rgba(0, 0, 0, 0.05) 2px
	),
	radial-gradient(
		ellipse 80% 50% at 28% 25%,
		rgba(255, 255, 255, 0.25) 0%,
		transparent 50%
	),
	radial-gradient(
		ellipse 60% 40% at 75% 80%,
		rgba(0, 0, 0, 0.15) 0%,
		transparent 50%
	)
`;

/**
 * grain 오버레이용 backgroundImage (입자감)
 */
export const crayonGrainBackgroundImage = `radial-gradient(
	circle at center,
	rgba(0, 0, 0, 0.12) 1px,
	transparent 1px
)`;
