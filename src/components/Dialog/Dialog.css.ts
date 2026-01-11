import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "@/tokens";

const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
});

const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

const scaleIn = keyframes({
	from: {
		opacity: 0,
		transform: "scale(0.95) translateY(-10px)",
	},
	to: {
		opacity: 1,
		transform: "scale(1) translateY(0)",
	},
});

const scaleOut = keyframes({
	from: {
		opacity: 1,
		transform: "scale(1) translateY(0)",
	},
	to: {
		opacity: 0,
		transform: "scale(0.95) translateY(-10px)",
	},
});

export const overlay = style({
	position: "fixed",
	inset: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	zIndex: 1000,
	animation: `${fadeIn} 0.2s ease-out`,
	selectors: {
		"&[data-state='closing']": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
		"&[data-ending-style]": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
	},
});

export const container = style({
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: themeContract.color.surface.background,
	boxShadow: themeContract.shadow.xlarge,
	display: "flex",
	flexDirection: "column",
	maxHeight: "90vh",
	width: "100%",
	zIndex: 1001,
	animation: `${scaleIn} 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)`,
	selectors: {
		"&[data-ending-style]": {
			animation: `${scaleOut} 0.2s ease-in`,
		},
	},
});

export const sizeVariants = styleVariants({
	small: {
		maxWidth: "400px",
	},
	medium: {
		maxWidth: "600px",
	},
	large: {
		maxWidth: "800px",
	},
	xlarge: {
		maxWidth: "1000px",
	},
	full: {
		maxWidth: "calc(100vw - 2rem)",
		maxHeight: "calc(100vh - 2rem)",
	},
});

export const roundedVariants = styleVariants({
	small: {
		borderRadius: themeContract.radius.small,
	},
	medium: {
		borderRadius: themeContract.radius.medium,
	},
	large: {
		borderRadius: themeContract.radius.large,
	},
});

export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: themeContract.spacing.lg,
	borderBottom: `1px solid ${themeContract.color.surface.divider}`,
	gap: themeContract.spacing.md,
});

export const title = style({
	margin: 0,
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.large,
	fontWeight: themeContract.typography.fontWeight.semibold,
	lineHeight: themeContract.typography.lineHeight.large,
	color: themeContract.color.surface.text,
});

export const closeButton = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	borderRadius: themeContract.radius.medium,
	border: "none",
	backgroundColor: "transparent",
	color: themeContract.color.surface.textMuted,
	cursor: "pointer",
	flexShrink: 0,
	transition: "all 0.2s ease-in-out",
	":hover": {
		backgroundColor: themeContract.color.surface.backgroundElevated,
		color: themeContract.color.surface.text,
	},
	":focus-visible": {
		outline: `2px solid ${themeContract.color.primary.surface}`,
		outlineOffset: "2px",
	},
});

export const body = style({
	padding: themeContract.spacing.lg,
	overflowY: "auto",
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	color: themeContract.color.surface.text,
});

export const footer = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: themeContract.spacing.sm,
	padding: themeContract.spacing.lg,
	borderTop: `1px solid ${themeContract.color.surface.divider}`,
});

export const description = style({
	marginTop: themeContract.spacing.xxs,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	color: themeContract.color.surface.textMuted,
});

// 크레용 테마 스타일
// 크레용 Dialog container 외곽선 효과 (::after)
export const crayonDialogContainerAfter = style({
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

// 크레용 Dialog container 스타일
export const crayonDialogContainerStyle = style({
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

// 크레용 Dialog container 텍스처 오버레이 (::before)
export const crayonDialogContainerBefore = style({
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
