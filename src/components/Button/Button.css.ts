import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

// Base button style
const buttonBase = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: themeContract.spacing.xs,
	outline: "none",
	position: "relative",
	border: "1px solid transparent",
	boxSizing: "border-box",
	selectors: {
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});

// Button recipe
export const button = recipe({
	base: buttonBase,

	variants: {
		size: {
			small: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
			},
			xlarge: {
				padding: `${themeContract.spacing.lg} ${themeContract.spacing.xl}`,
				fontSize: themeContract.typography.fontSize.xlarge,
				lineHeight: themeContract.typography.lineHeight.xlarge,
			},
		},

		variant: {
			solid: {},
			outline: {
				backgroundColor: "transparent",
			},
			ghost: {
				backgroundColor: "transparent",
				borderColor: "transparent",
				boxShadow: "none",
			},
			weak: {},
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
	},

	compoundVariants: [
		// Solid variants
		{
			variants: { variant: "solid", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.surface,
				color: themeContract.color.primary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				borderColor: themeContract.color.primary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}05`,
						borderColor: themeContract.color.primary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}10`,
						borderColor: themeContract.color.primary.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				borderColor: themeContract.color.secondary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}05`,
						borderColor: themeContract.color.secondary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}10`,
						borderColor: themeContract.color.secondary.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				borderColor: themeContract.color.success.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}05`,
						borderColor: themeContract.color.success.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}10`,
						borderColor: themeContract.color.success.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				borderColor: themeContract.color.warning.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}05`,
						borderColor: themeContract.color.warning.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}10`,
						borderColor: themeContract.color.warning.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				borderColor: themeContract.color.danger.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}05`,
						borderColor: themeContract.color.danger.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}10`,
						borderColor: themeContract.color.danger.surfaceActive,
					},
				},
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.surface,
				borderColor: themeContract.color.neutral.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}05`,
						borderColor: themeContract.color.neutral.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}10`,
						borderColor: themeContract.color.neutral.surfaceActive,
					},
				},
			},
		},

		// Ghost variants
		{
			variants: { variant: "ghost", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.primary.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.secondary.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.success.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.warning.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.danger.surface}15`,
					},
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}10`,
					},
					"&:active:not(:disabled)": {
						backgroundColor: `${themeContract.color.neutral.surface}15`,
					},
				},
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
		{
			variants: { variant: "weak", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceActive,
						transform: "scale(0.98)",
					},
				},
			},
		},
	],

	defaultVariants: {
		size: "medium",
		variant: "solid",
		intent: "primary",
		rounded: "medium",
	},
});

export const fullWidth = style({
	width: "100%",
});

// 크레용 테마 스타일
// 크레용 테마일 때만 적용되는 기본 스타일
export const crayonButtonStyle = style({
	selectors: {
		// Disabled 상태
		"[class*='crayonLightTheme'] &:disabled, [class*='crayonDarkTheme'] &:disabled":
			{
				opacity: "0.4 !important",
				filter: "grayscale(0.5) !important",
			},
	},
});

// 크레용 버튼 외곽선 효과 (::after)
export const crayonButtonAfter = style({
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
		"[class*='crayonLightTheme'] &:disabled::after, [class*='crayonDarkTheme'] &:disabled::after":
			{
				opacity: 0.2,
			},
	},
});

// 크레용 Solid 버튼 스타일
export const crayonSolidStyle = style({
	selectors: {
		"[class*='crayonLightTheme'] &, [class*='crayonDarkTheme'] &": {
			filter: "url(#crayon-texture)",
			border: "3px solid currentColor !important",
			boxShadow: `
				0 2px 0 0 rgba(0, 0, 0, 0.1),
				0 3px 8px rgba(0, 0, 0, 0.12)
			`,
		},
		// Hover 상태
		"[class*='crayonLightTheme'] &:hover:not(:disabled), [class*='crayonDarkTheme'] &:hover:not(:disabled)":
			{
				transform: "scale(1.02) translateY(-1px)",
				filter: "url(#crayon-texture) brightness(1.08) contrast(1.05)",
			},
		// Active 상태
		"[class*='crayonLightTheme'] &:active:not(:disabled), [class*='crayonDarkTheme'] &:active:not(:disabled)":
			{
				transform: "scale(0.98) translateY(1px)",
				filter: "url(#crayon-texture) brightness(0.92) contrast(1.1)",
				boxShadow: `
				0 1px 0 0 rgba(0, 0, 0, 0.15),
				0 2px 4px rgba(0, 0, 0, 0.1)
			`,
			},
	},
});

// 크레용 Solid 버튼 텍스처 오버레이 (::before)
export const crayonSolidBefore = style({
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

// 크레용 Outline/Ghost 버튼 스타일
export const crayonOutlineStyle = style({
	selectors: {
		"[class*='crayonLightTheme'] &, [class*='crayonDarkTheme'] &": {
			background: "rgba(255, 255, 255, 0.6) !important",
			backdropFilter: "blur(10px)",
			border: "3px solid currentColor !important",
			filter: "url(#crayon-edge)",
			boxShadow: `
				0 1px 0 0 rgba(0, 0, 0, 0.05),
				inset 0 1px 0 rgba(255, 255, 255, 0.8)
			`,
		},
		// Hover 상태
		"[class*='crayonLightTheme'] &:hover:not(:disabled), [class*='crayonDarkTheme'] &:hover:not(:disabled)":
			{
				background: "rgba(255, 255, 255, 0.85) !important",
				filter: "url(#crayon-edge) brightness(1.05)",
				boxShadow: `
				0 2px 0 0 rgba(0, 0, 0, 0.08),
				inset 0 1px 0 rgba(255, 255, 255, 0.9)
			`,
			},
		// Active 상태
		"[class*='crayonLightTheme'] &:active:not(:disabled), [class*='crayonDarkTheme'] &:active:not(:disabled)":
			{
				background: "rgba(255, 255, 255, 0.5) !important",
				filter: "url(#crayon-edge) brightness(0.95)",
			},
	},
});

// 크레용 Outline/Ghost 버튼 텍스처 (::before)
export const crayonOutlineBefore = style({
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
					45deg,
					transparent,
					transparent 3px,
					rgba(0, 0, 0, 0.02) 3px,
					rgba(0, 0, 0, 0.02) 4px
				)
			`,
				pointerEvents: "none",
			},
	},
});
