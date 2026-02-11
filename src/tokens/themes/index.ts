export * from "./basic.css";
export * from "./game.css";
export * from "./crayon.css";

import type { AppearanceMode } from "../appearanceTheme";

export type ThemeName = "basic" | "game" | "crayon";

export const themeMap = {
	basic: {
		light: () => import("./basic.css").then((m) => m.basicLightTheme),
		dark: () => import("./basic.css").then((m) => m.basicDarkTheme),
	},
	game: {
		light: () => import("./game.css").then((m) => m.gameLightTheme),
		dark: () => import("./game.css").then((m) => m.gameDarkTheme),
	},
	crayon: {
		light: () => import("./crayon.css").then((m) => m.crayonLightTheme),
		dark: () => import("./crayon.css").then((m) => m.crayonDarkTheme),
	},
} as const;

export async function getThemeClass(
	theme: ThemeName,
	appearance: AppearanceMode,
): Promise<string> {
	const themeModule = await themeMap[theme][appearance]();
	return themeModule;
}
