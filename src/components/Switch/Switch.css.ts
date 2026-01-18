import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

export const container = style({
	display: "inline-flex",
	alignItems: "center",
	gap: themeContract.spacing.xs,
	cursor: "pointer",
	userSelect: "none",
	selectors: {
		"&:has(input:disabled)": {
			cursor: "not-allowed",
			opacity: 0.5,
		},
	},
});

export const switchRoot = style({
	all: "unset",
	display: "inline-block",
});

const trackBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	flexShrink: 0,
	borderRadius: themeContract.radius.xlarge,
	transition: "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	selectors: {
		"button:focus-visible &": {
			outline: `2px solid ${themeContract.color.primary.surface}`,
			outlineOffset: "2px",
		},
		"button:disabled &": {
			cursor: "not-allowed",
		},
	},
});

export const track = recipe({
	base: trackBase,

	variants: {
		size: {
			small: {
				width: "30px",
				height: "18px",
				padding: "2px 4px",
			},
			medium: {
				width: "43px",
				height: "24px",
				padding: "2px 3px",
			},
			large: {
				width: "54px",
				height: "30px",
				padding: "2px 4px",
			},
			xlarge: {
				width: "66px",
				height: "36px",
				padding: "2px 4px",
			},
		},

		intent: {
			primary: {
				selectors: {
					// Base UI는 data-checked/data-unchecked 속성을 사용
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.primary.surface,
					},
				},
			},
			secondary: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.secondary.surface,
					},
				},
			},
			success: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.success.surface,
					},
				},
			},
			warning: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.warning.surface,
					},
				},
			},
			danger: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.danger.surface,
					},
				},
			},
			neutral: {
				selectors: {
					"[role='switch'][data-unchecked] &": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"[role='switch'][data-checked] &": {
						backgroundColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
	},

	defaultVariants: {
		size: "medium",
		intent: "primary",
	},
});

// Switch thumb (sliding circle)
const thumbBase = style({
	backgroundColor: "white",
	borderRadius: themeContract.radius.xlarge,
	transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
	boxShadow: themeContract.shadow.small,
});

export const thumb = recipe({
	base: thumbBase,

	variants: {
		size: {
			small: {
				width: "14px",
				height: "14px",
				selectors: {
					// Base UI는 data-checked/data-unchecked 속성을 사용
					// 계산: track width(30px) - right padding(4px) - thumb width(14px) = 12px
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(12px)",
					},
				},
			},
			medium: {
				width: "20px",
				height: "20px",
				selectors: {
					// 계산: track width(43px) - right padding(3px) - thumb width(20px) = 20px
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(20px)",
					},
				},
			},
			large: {
				width: "24px",
				height: "24px",
				selectors: {
					// 계산: track width(54px) - right padding(4px) - thumb width(24px) = 26px
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(26px)",
					},
				},
			},
			xlarge: {
				width: "28px",
				height: "28px",
				selectors: {
					// 계산: track width(66px) - right padding(4px) - thumb width(28px) = 34px
					"[role='switch'][data-unchecked] &": {
						transform: "translateX(0)",
					},
					"[role='switch'][data-checked] &": {
						transform: "translateX(34px)",
					},
				},
			},
		},
	},

	defaultVariants: {
		size: "medium",
	},
});



