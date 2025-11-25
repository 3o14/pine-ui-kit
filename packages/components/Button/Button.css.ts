import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "../../tokens/theme.css";

export const base = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	borderRadius: themeContract.radius.md,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: themeContract.spacing.xs,
	outline: "none",
	position: "relative",
	border: "none",
	selectors: {
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},
});

export const size = styleVariants({
	sm: {
		padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
		fontSize: themeContract.typography.fontSize.sm,
		lineHeight: themeContract.typography.lineHeight.sm,
	},
	md: {
		padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
		fontSize: themeContract.typography.fontSize.md,
		lineHeight: themeContract.typography.lineHeight.md,
	},
	lg: {
		padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
		fontSize: themeContract.typography.fontSize.lg,
		lineHeight: themeContract.typography.lineHeight.lg,
	},
});

export const solid = styleVariants({
	primary: {
		backgroundColor: themeContract.color.primary.surface,
		color: themeContract.color.primary.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.primary.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.primary.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
	secondary: {
		backgroundColor: themeContract.color.secondary.surface,
		color: themeContract.color.secondary.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.secondary.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.secondary.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
	success: {
		backgroundColor: themeContract.color.success.surface,
		color: themeContract.color.success.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.success.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.success.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
	warning: {
		backgroundColor: themeContract.color.warning.surface,
		color: themeContract.color.warning.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.warning.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.warning.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
	danger: {
		backgroundColor: themeContract.color.danger.surface,
		color: themeContract.color.danger.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.danger.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.danger.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
	neutral: {
		backgroundColor: themeContract.color.neutral.surface,
		color: themeContract.color.neutral.text,
		boxShadow: themeContract.shadow.sm,
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: themeContract.color.neutral.surfaceHover,
				boxShadow: themeContract.shadow.md,
			},
			"&:active:not(:disabled)": {
				backgroundColor: themeContract.color.neutral.surfaceActive,
				transform: "scale(0.98)",
			},
		},
	},
});

export const outline = styleVariants({
	primary: {
		backgroundColor: "transparent",
		color: themeContract.color.primary.surface,
		border: `1px solid ${themeContract.color.primary.border}`,
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
	secondary: {
		backgroundColor: "transparent",
		color: themeContract.color.secondary.surface,
		border: `1px solid ${themeContract.color.secondary.border}`,
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
	success: {
		backgroundColor: "transparent",
		color: themeContract.color.success.surface,
		border: `1px solid ${themeContract.color.success.border}`,
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
	warning: {
		backgroundColor: "transparent",
		color: themeContract.color.warning.surface,
		border: `1px solid ${themeContract.color.warning.border}`,
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
	danger: {
		backgroundColor: "transparent",
		color: themeContract.color.danger.surface,
		border: `1px solid ${themeContract.color.danger.border}`,
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
	neutral: {
		backgroundColor: "transparent",
		color: themeContract.color.neutral.surface,
		border: `1px solid ${themeContract.color.neutral.border}`,
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
});

export const ghost = styleVariants({
	primary: {
		backgroundColor: "transparent",
		color: themeContract.color.primary.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.primary.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.primary.surface}15`,
			},
		},
	},
	secondary: {
		backgroundColor: "transparent",
		color: themeContract.color.secondary.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.secondary.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.secondary.surface}15`,
			},
		},
	},
	success: {
		backgroundColor: "transparent",
		color: themeContract.color.success.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.success.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.success.surface}15`,
			},
		},
	},
	warning: {
		backgroundColor: "transparent",
		color: themeContract.color.warning.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.warning.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.warning.surface}15`,
			},
		},
	},
	danger: {
		backgroundColor: "transparent",
		color: themeContract.color.danger.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.danger.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.danger.surface}15`,
			},
		},
	},
	neutral: {
		backgroundColor: "transparent",
		color: themeContract.color.neutral.surface,
		border: "none",
		boxShadow: "none",
		selectors: {
			"&:hover:not(:disabled)": {
				backgroundColor: `${themeContract.color.neutral.surface}10`,
			},
			"&:active:not(:disabled)": {
				backgroundColor: `${themeContract.color.neutral.surface}15`,
			},
		},
	},
});

export const fullWidth = style({
	width: "100%",
});

