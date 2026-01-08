import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";

const fadeIn = keyframes({
	from: {
		opacity: 0,
		transform: "scale(0.96)",
	},
	to: {
		opacity: 1,
		transform: "scale(1)",
	},
});

const fadeOut = keyframes({
	from: {
		opacity: 1,
		transform: "scale(1)",
	},
	to: {
		opacity: 0,
		transform: "scale(0.96)",
	},
});

export const popup = recipe({
	base: {
		maxWidth: "300px",
		padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
		fontSize: themeContract.typography.fontSize.small,
		lineHeight: themeContract.typography.lineHeight.small,
		fontFamily: themeContract.typography.fontFamily.sans,
		borderRadius: themeContract.radius.small,
		boxShadow: themeContract.shadow.medium,
		zIndex: 9999,
		wordWrap: "break-word",
		transformOrigin: "var(--transform-origin)",
		selectors: {
			"&[data-state='open']": {
				animation: `${fadeIn} 0.15s ease-out`,
			},
			"&[data-state='closing']": {
				animation: `${fadeOut} 0.15s ease-in`,
			},
		},
	},

	variants: {
		intent: {
			primary: {
				backgroundColor: themeContract.color.primary.surface,
				color: themeContract.color.primary.text,
			},
			secondary: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
			},
			success: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
			},
			warning: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
			},
			danger: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
			},
			neutral: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
			},
		},
	},

	defaultVariants: {
		intent: "neutral",
	},
});

export const arrow = recipe({
	base: {
		width: "12px",
		height: "6px",
		selectors: {
			"&[data-side='top']": {
				bottom: "-6px",
			},
			"&[data-side='bottom']": {
				top: "-6px",
				transform: "rotate(180deg)",
			},
			"&[data-side='left']": {
				right: "-6px",
				transform: "rotate(-90deg)",
			},
			"&[data-side='right']": {
				left: "-6px",
				transform: "rotate(90deg)",
			},
		},
	},

	variants: {
		intent: {
			primary: {
				color: themeContract.color.primary.surface,
			},
			secondary: {
				color: themeContract.color.secondary.surface,
			},
			success: {
				color: themeContract.color.success.surface,
			},
			warning: {
				color: themeContract.color.warning.surface,
			},
			danger: {
				color: themeContract.color.danger.surface,
			},
			neutral: {
				color: themeContract.color.neutral.surface,
			},
		},
	},

	defaultVariants: {
		intent: "neutral",
	},
});

