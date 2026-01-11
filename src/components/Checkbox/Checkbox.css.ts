import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

// Animations
const checkmark = keyframes({
	"0%": {
		strokeDashoffset: 16,
	},
	"100%": {
		strokeDashoffset: 0,
	},
});

// Container (wrapper)
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

// Checkbox root (Base UI)
export const checkboxRoot = style({
	all: "unset",
	display: "inline-block",
});

// Custom checkbox box base
const checkboxBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	border: "2px solid",
	transition: "all 0.2s ease-in-out",
	backgroundColor: "transparent",
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

// Checkbox recipe with size and intent variants
export const checkbox = recipe({
	base: checkboxBase,

	variants: {
		size: {
			small: {
				width: "16px",
				height: "16px",
			},
			medium: {
				width: "20px",
				height: "20px",
			},
			large: {
				width: "24px",
				height: "24px",
			},
			xlarge: {
				width: "28px",
				height: "28px",
			},
		},

		variant: {
			circle: {
				borderRadius: "50%",
			},
			square: {
				borderRadius: themeContract.radius.small,
			},
		},

		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},

		rounded: {
			small: {
				borderRadius: themeContract.radius.small,
			},
			medium: {
				borderRadius: themeContract.radius.medium,
			},
			large: {
				borderRadius: themeContract.radius.large,
			},
		},

		checked: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		// Primary
		{
			variants: { intent: "primary", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.primary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "primary", checked: true },
			style: {
				borderColor: themeContract.color.primary.surface,
				backgroundColor: themeContract.color.primary.surface,
				selectors: {
					"&[data-state='checked']": {
						borderColor: themeContract.color.primary.surface,
						backgroundColor: themeContract.color.primary.surface,
					},
				},
			},
		},

		// Secondary
		{
			variants: { intent: "secondary", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.secondary.surface,
					},
				},
			},
		},
		{
			variants: { intent: "secondary", checked: true },
			style: {
				borderColor: themeContract.color.secondary.surface,
				backgroundColor: themeContract.color.secondary.surface,
			},
		},

		// Success
		{
			variants: { intent: "success", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.success.surface,
					},
				},
			},
		},
		{
			variants: { intent: "success", checked: true },
			style: {
				borderColor: themeContract.color.success.surface,
				backgroundColor: themeContract.color.success.surface,
			},
		},

		// Warning
		{
			variants: { intent: "warning", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.warning.surface,
					},
				},
			},
		},
		{
			variants: { intent: "warning", checked: true },
			style: {
				borderColor: themeContract.color.warning.surface,
				backgroundColor: themeContract.color.warning.surface,
			},
		},

		// Danger
		{
			variants: { intent: "danger", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.danger.surface,
					},
				},
			},
		},
		{
			variants: { intent: "danger", checked: true },
			style: {
				borderColor: themeContract.color.danger.surface,
				backgroundColor: themeContract.color.danger.surface,
			},
		},

		// Neutral
		{
			variants: { intent: "neutral", checked: false },
			style: {
				borderColor: themeContract.color.surface.outline,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
		{
			variants: { intent: "neutral", checked: true },
			style: {
				borderColor: themeContract.color.neutral.surface,
				backgroundColor: themeContract.color.neutral.surface,
			},
		},

		// Weak variants - Primary
		{
			variants: { variant: "square", intent: "primary", checked: false },
			style: {
				borderColor: themeContract.color.primary.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.primary.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "primary", checked: true },
			style: {
				borderColor: themeContract.color.primary.weak,
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
			},
		},

		// Weak variants - Secondary
		{
			variants: { variant: "square", intent: "secondary", checked: false },
			style: {
				borderColor: themeContract.color.secondary.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.secondary.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "secondary", checked: true },
			style: {
				borderColor: themeContract.color.secondary.weak,
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
			},
		},

		// Weak variants - Success
		{
			variants: { variant: "square", intent: "success", checked: false },
			style: {
				borderColor: themeContract.color.success.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.success.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "success", checked: true },
			style: {
				borderColor: themeContract.color.success.weak,
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
			},
		},

		// Weak variants - Warning
		{
			variants: { variant: "square", intent: "warning", checked: false },
			style: {
				borderColor: themeContract.color.warning.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.warning.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "warning", checked: true },
			style: {
				borderColor: themeContract.color.warning.weak,
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
			},
		},

		// Weak variants - Danger
		{
			variants: { variant: "square", intent: "danger", checked: false },
			style: {
				borderColor: themeContract.color.danger.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.danger.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "danger", checked: true },
			style: {
				borderColor: themeContract.color.danger.weak,
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
			},
		},

		// Weak variants - Neutral
		{
			variants: { variant: "square", intent: "neutral", checked: false },
			style: {
				borderColor: themeContract.color.neutral.weak,
				selectors: {
					"button:hover:not(:disabled) &": {
						borderColor: themeContract.color.neutral.surface,
					},
				},
			},
		},
		{
			variants: { variant: "square", intent: "neutral", checked: true },
			style: {
				borderColor: themeContract.color.neutral.weak,
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
			},
		},
	],

	defaultVariants: {
		size: "medium",
		variant: "square",
		intent: "primary",
		rounded: "medium",
		checked: false,
	},
});

// Indicator container
export const indicatorContainer = style({
	display: "none",
	width: "100%",
	height: "100%",
	alignItems: "center",
	justifyContent: "center",
	selectors: {
		"&[data-state='checked']": {
			display: "flex",
		},
	},
});

// Checkmark icon (SVG)
export const checkmarkIcon = style({
	width: "100%",
	height: "100%",
	color: "white",
	animation: `${checkmark} 0.2s ease-in-out`,
});

// 크레용 테마 스타일
// 크레용 Checkbox 외곽선 효과 (::after)
export const crayonCheckboxAfter = style({
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

// 크레용 Checkbox 스타일 (checked 상태)
export const crayonCheckboxStyle = style({
	selectors: {
		"[class*='crayonLightTheme'] &[data-state='checked'], [class*='crayonDarkTheme'] &[data-state='checked']":
			{
				filter: "url(#crayon-texture)",
				border: "3px solid currentColor !important",
				boxShadow: `
					0 2px 0 0 rgba(0, 0, 0, 0.1),
					0 3px 8px rgba(0, 0, 0, 0.12)
				`,
			},
		"[class*='crayonLightTheme'] &:not([data-state='checked']), [class*='crayonDarkTheme'] &:not([data-state='checked'])":
			{
				filter: "url(#crayon-edge)",
				border: "3px solid currentColor !important",
			},
	},
});

// 크레용 Checkbox 텍스처 오버레이 (::before)
export const crayonCheckboxBefore = style({
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
