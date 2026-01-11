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
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
						backgroundColor: themeContract.color.primary.surface,
					},
				},
			},
			secondary: {
				selectors: {
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
						backgroundColor: themeContract.color.secondary.surface,
					},
				},
			},
			success: {
				selectors: {
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
						backgroundColor: themeContract.color.success.surface,
					},
				},
			},
			warning: {
				selectors: {
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
						backgroundColor: themeContract.color.warning.surface,
					},
				},
			},
			danger: {
				selectors: {
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
						backgroundColor: themeContract.color.danger.surface,
					},
				},
			},
			neutral: {
				selectors: {
					"&[data-state='unchecked']": {
						backgroundColor: themeContract.color.surface.outline,
					},
					"&[data-state='checked']": {
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
					"&[data-state='unchecked']": {
						transform: "translateX(0)",
					},
					"&[data-state='checked']": {
						transform: "translateX(16px)",
					},
				},
			},
			medium: {
				width: "20px",
				height: "20px",
				selectors: {
					"&[data-state='unchecked']": {
						transform: "translateX(0)",
					},
					"&[data-state='checked']": {
						transform: "translateX(22px)",
					},
				},
			},
			large: {
				width: "24px",
				height: "24px",
				selectors: {
					"&[data-state='unchecked']": {
						transform: "translateX(0)",
					},
					"&[data-state='checked']": {
						transform: "translateX(28px)",
					},
				},
			},
			xlarge: {
				width: "28px",
				height: "28px",
				selectors: {
					"&[data-state='unchecked']": {
						transform: "translateX(0)",
					},
					"&[data-state='checked']": {
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

// 크레용 테마 스타일
// 크레용 Switch track 외곽선 효과 (::after)
export const crayonSwitchTrackAfter = style({
	selectors: {
		"[class*='crayonLightTheme'] &::after, [class*='crayonDarkTheme'] &::after":
			{
				content: '""',
				position: "absolute",
				top: "-1px",
				left: "-1px",
				right: "-1px",
				bottom: "-1px",
				borderRadius: "inherit",
				border: "1px solid currentColor",
				opacity: 0.4,
				filter: "url(#crayon-edge)",
				pointerEvents: "none",
				zIndex: -1,
			},
	},
});

// 크레용 Switch track 스타일
export const crayonSwitchTrackStyle = style({
	position: "relative",
	selectors: {
		"[class*='crayonLightTheme'] &, [class*='crayonDarkTheme'] &": {
			filter: "url(#crayon-texture)",
			border: "3px solid currentColor !important",
			boxShadow: `
				0 2px 0 0 rgba(0, 0, 0, 0.1),
				0 3px 8px rgba(0, 0, 0, 0.12)
			`,
		},
	},
});

// 크레용 Switch track 텍스처 오버레이 (::before)
export const crayonSwitchTrackBefore = style({
	selectors: {
		"[class*='crayonLightTheme'] &::before, [class*='crayonDarkTheme'] &::before":
			{
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: "inherit",
				backgroundImage: `
				repeating-linear-gradient(
					90deg,
					transparent,
					transparent 1px,
					rgba(255, 255, 255, 0.08) 1px,
					rgba(255, 255, 255, 0.08) 2px
				),
				repeating-linear-gradient(
					0deg,
					transparent,
					transparent 1px,
					rgba(0, 0, 0, 0.04) 1px,
					rgba(0, 0, 0, 0.04) 2px
				),
				radial-gradient(
					circle at 20% 30%,
					rgba(255, 255, 255, 0.15) 0%,
					transparent 50%
				),
				radial-gradient(
					circle at 80% 70%,
					rgba(0, 0, 0, 0.08) 0%,
					transparent 50%
				)
			`,
				pointerEvents: "none",
				mixBlendMode: "overlay",
			},
	},
});
