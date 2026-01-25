import { lightColors, darkColors, type ColorTokens } from "./colors";
import type { ThemeName } from "./themes";

export type AppearanceMode = "light" | "dark";

type CssVariableMap = Record<string, string>;

interface AppearanceThemeConfig {
	cssVariables: CssVariableMap;
	bodyBackground: string;
	bodyText: string;
}

const toKebabCase = (value: string) =>
	value
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();

const buildCssVariables = (colors: ColorTokens): CssVariableMap => {
	const variables: CssVariableMap = {};

	Object.entries(colors.palette).forEach(([intent, scale]) => {
		Object.entries(scale).forEach(([state, colorValue]) => {
			const varName = `--pie-color-${toKebabCase(intent)}-${toKebabCase(state)}`;
			variables[varName] = colorValue;
		});
	});

	Object.entries(colors.surface).forEach(([key, colorValue]) => {
		const varName = `--pie-surface-${toKebabCase(key)}`;
		variables[varName] = colorValue;
	});

	return variables;
};

/**
 * 기본 appearance theme (basic 테마용)
 * Backward compatibility를 위해 유지
 */
export const appearanceTheme: Record<AppearanceMode, AppearanceThemeConfig> = {
	light: {
		cssVariables: buildCssVariables(lightColors),
		bodyBackground: lightColors.surface.background,
		bodyText: lightColors.surface.text,
	},
	dark: {
		cssVariables: buildCssVariables(darkColors),
		bodyBackground: darkColors.surface.background,
		bodyText: darkColors.surface.text,
	},
};

/**
 * 테마별 appearance theme
 * 각 테마의 light/dark 모드별 설정
 */
export const getAppearanceTheme = (
	_theme: ThemeName,
	appearance: AppearanceMode
): AppearanceThemeConfig => {
	// 기본적으로 basic 테마의 appearance theme 사용
	// 향후 각 테마별로 다른 설정이 필요하면 여기서 분기 처리
	return appearanceTheme[appearance];
};

export const applyAppearanceTheme = (mode: AppearanceMode) => {
	if (typeof document === "undefined") {
		return;
	}

	const { cssVariables, bodyBackground, bodyText } = appearanceTheme[mode];
	const root = document.documentElement;

	Object.entries(cssVariables).forEach(([variable, value]) => {
		root.style.setProperty(variable, value);
	});

	document.body.style.backgroundColor = bodyBackground;
	document.body.style.color = bodyText;
	root.style.backgroundColor = bodyBackground;
	root.dataset.theme = mode;

	const selectors = [
		"#storybook-root",
		".sb-show-main",
		".sb-story",
		".docs-story",
		".docs-story #story-root",
		".docs-inner",
	];

	selectors.forEach((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			if (element instanceof HTMLElement) {
				element.style.backgroundColor = bodyBackground;
				element.style.color = bodyText;
			}
		});
	});
};
