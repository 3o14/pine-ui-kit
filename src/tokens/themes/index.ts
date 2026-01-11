/**
 * Theme Mapping Layer - 모든 테마 export 및 유틸리티
 */

export * from "./basic.css";
export * from "./game.css";
export * from "./crayon.css";

import type { AppearanceMode } from "../appearanceTheme";

export type ThemeName = "basic" | "game" | "crayon";

/**
 * 테마별 테마 클래스 매핑
 */
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

/**
 * 테마와 appearance 모드로 테마 클래스 이름 가져오기
 */
export async function getThemeClass(
	theme: ThemeName,
	appearance: AppearanceMode
): Promise<string> {
	const themeModule = await themeMap[theme][appearance]();
	// vanilla-extract의 createTheme은 클래스 이름을 반환합니다
	return themeModule;
}
