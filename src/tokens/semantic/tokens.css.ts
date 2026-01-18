/**
 * Semantic Layer - 의미론적 토큰 계약 정의
 * Foundation을 참조하지만 의미를 가진 토큰들
 */

import { createThemeContract } from "@vanilla-extract/css";

/**
 * Semantic Token Contract
 * 컴포넌트에서 사용하는 의미론적 토큰의 구조를 정의합니다.
 * 실제 값은 Theme Mapping Layer에서 Foundation 값으로 매핑됩니다.
 */
export const semanticTokens = createThemeContract({
	// Color tokens
	color: {
		primary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		secondary: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		success: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		warning: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		danger: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		neutral: {
			surface: null,
			surfaceHover: null,
			surfaceActive: null,
			text: null,
			border: null,
			weak: null,
		},
		surface: {
			background: null,
			backgroundElevated: null,
			outline: null,
			text: null,
			textMuted: null,
			divider: null,
		},
	},
	// Spacing tokens
	spacing: {
		none: null,
		xxxs: null,
		xxs: null,
		xs: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
		xxl: null,
		xxxl: null,
	},
	// Typography tokens
	typography: {
		fontFamily: {
			sans: null,
			mono: null,
			crayon: null,
		},
		fontSize: {
			xsmall: null,
			small: null,
			medium: null,
			large: null,
			xlarge: null,
			"display-small": null,
			"display-medium": null,
			"display-large": null,
		},
		lineHeight: {
			xsmall: null,
			small: null,
			medium: null,
			large: null,
			xlarge: null,
			"display-small": null,
			"display-medium": null,
			"display-large": null,
		},
		fontWeight: {
			regular: null,
			medium: null,
			semibold: null,
			bold: null,
		},
	},
	// Radius tokens
	radius: {
		none: null,
		small: null,
		medium: null,
		large: null,
		xlarge: null,
		full: null,
	},
	// Shadow tokens
	shadow: {
		none: null,
		xsmall: null,
		small: null,
		medium: null,
		large: null,
		xlarge: null,
		pixelBox: null,
		pixelBoxMargin: null,
	},
	// Component-specific semantic tokens
	component: {
		button: {
			padding: {
				small: null,
				medium: null,
				large: null,
				xlarge: null,
			},
			radius: {
				small: null,
				medium: null,
				large: null,
			},
		},
		card: {
			radius: null,
			padding: null,
		},
		input: {
			radius: null,
			padding: null,
		},
	},
});

/**
 * Backward compatibility: 기존 themeContract와 동일한 이름으로 export
 * 기존 컴포넌트들이 사용하는 themeContract를 semanticTokens로 대체
 */
export const themeContract = semanticTokens;
