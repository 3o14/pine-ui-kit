import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const crayonLightThemeClass = String(crayonLightTheme);
const crayonDarkThemeClass = String(crayonDarkTheme);

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

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
			[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			filter: "url(#crayon-texture)",
		},
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
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

export const button = recipe({
	base: buttonBase,

	variants: {
		size: {
			small: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xxxs} ${themeContract.spacing.xs}`,
					},
				},
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
					},
				},
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
					},
				},
			},
			xlarge: {
				padding: `${themeContract.spacing.lg} ${themeContract.spacing.xl}`,
				fontSize: themeContract.typography.fontSize.xlarge,
				lineHeight: themeContract.typography.lineHeight.xlarge,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
					},
				},
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: themeContract.shadow.pixelBox,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: themeContract.shadow.pixelBox,
						},
				},
			},
		},

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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.primary.border}, 4px 0 0 0 ${themeContract.color.primary.border}, 0 4px 0 0 ${themeContract.color.primary.border}, 0 calc(-4px) 0 0 ${themeContract.color.primary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						filter: "url(#crayon-edge) !important",
						borderWidth: "3px",
					},
					[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
						{
							backgroundImage: `
								repeating-linear-gradient(
									45deg,
									transparent,
									transparent 3px,
									rgba(0, 0, 0, 0.02) 3px,
									rgba(0, 0, 0, 0.02) 4px
								)
							`,
							mixBlendMode: "normal",
						},
					[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]:
						{
							content: '""',
							position: "absolute",
							top: "-2px",
							left: "-2px",
							right: "-2px",
							bottom: "-2px",
							borderRadius: "inherit",
							border: "2px solid currentColor",
							opacity: 0.4,
							filter: "url(#crayon-edge)",
							pointerEvents: "none",
							zIndex: -1,
						},
					[`.${crayonLightThemeClass} &:disabled::after, .${crayonDarkThemeClass} &:disabled::after`]:
						{
							opacity: 0.2,
						},
					[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
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
							mixBlendMode: "normal",
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.secondary.border}, 4px 0 0 0 ${themeContract.color.secondary.border}, 0 4px 0 0 ${themeContract.color.secondary.border}, 0 calc(-4px) 0 0 ${themeContract.color.secondary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.warning.border}, 4px 0 0 0 ${themeContract.color.warning.border}, 0 4px 0 0 ${themeContract.color.warning.border}, 0 calc(-4px) 0 0 ${themeContract.color.warning.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						borderColor: "transparent",
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.neutral.border}, 4px 0 0 0 ${themeContract.color.neutral.border}, 0 4px 0 0 ${themeContract.color.neutral.border}, 0 calc(-4px) 0 0 ${themeContract.color.neutral.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
				},
			},
		},

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
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						filter: "url(#crayon-edge) !important",
						borderWidth: "3px",
					},
					[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]:
						{
							content: '""',
							position: "absolute",
							top: "-2px",
							left: "-2px",
							right: "-2px",
							bottom: "-2px",
							borderRadius: "inherit",
							border: "2px solid currentColor",
							opacity: 0.4,
							filter: "url(#crayon-edge)",
							pointerEvents: "none",
							zIndex: -1,
						},
					[`.${crayonLightThemeClass} &:disabled::after, .${crayonDarkThemeClass} &:disabled::after`]:
						{
							opacity: 0.2,
						},
					[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
						{
							backgroundImage: `
								repeating-linear-gradient(
									45deg,
									transparent,
									transparent 3px,
									rgba(0, 0, 0, 0.02) 3px,
									rgba(0, 0, 0, 0.02) 4px
								)
							`,
							mixBlendMode: "normal",
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.primary.border}, 4px 0 0 0 ${themeContract.color.primary.border}, 0 4px 0 0 ${themeContract.color.primary.border}, 0 calc(-4px) 0 0 ${themeContract.color.primary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.primary.border}, 4px 0 0 0 ${themeContract.color.primary.border}, 0 4px 0 0 ${themeContract.color.primary.border}, 0 calc(-4px) 0 0 ${themeContract.color.primary.border}`,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.secondary.border}, 4px 0 0 0 ${themeContract.color.secondary.border}, 0 4px 0 0 ${themeContract.color.secondary.border}, 0 calc(-4px) 0 0 ${themeContract.color.secondary.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.secondary.border}, 4px 0 0 0 ${themeContract.color.secondary.border}, 0 4px 0 0 ${themeContract.color.secondary.border}, 0 calc(-4px) 0 0 ${themeContract.color.secondary.border}`,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.success.border}, 4px 0 0 0 ${themeContract.color.success.border}, 0 4px 0 0 ${themeContract.color.success.border}, 0 calc(-4px) 0 0 ${themeContract.color.success.border}`,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.warning.border}, 4px 0 0 0 ${themeContract.color.warning.border}, 0 4px 0 0 ${themeContract.color.warning.border}, 0 calc(-4px) 0 0 ${themeContract.color.warning.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.warning.border}, 4px 0 0 0 ${themeContract.color.warning.border}, 0 4px 0 0 ${themeContract.color.warning.border}, 0 calc(-4px) 0 0 ${themeContract.color.warning.border}`,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.danger.border}, 4px 0 0 0 ${themeContract.color.danger.border}, 0 4px 0 0 ${themeContract.color.danger.border}, 0 calc(-4px) 0 0 ${themeContract.color.danger.border}`,
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
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.neutral.border}, 4px 0 0 0 ${themeContract.color.neutral.border}, 0 4px 0 0 ${themeContract.color.neutral.border}, 0 calc(-4px) 0 0 ${themeContract.color.neutral.border}`,
						margin: themeContract.shadow.pixelBoxMargin,
					},
					[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
						{
							boxShadow: `calc(-4px) 0 0 0 ${themeContract.color.neutral.border}, 4px 0 0 0 ${themeContract.color.neutral.border}, 0 4px 0 0 ${themeContract.color.neutral.border}, 0 calc(-4px) 0 0 ${themeContract.color.neutral.border}`,
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
