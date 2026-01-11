import React from "react";
import type { Decorator, Preview } from "@storybook/react";
// vanilla-extract CSS 파일들을 직접 import
// 모든 테마를 미리 로드하여 CSS가 생성되도록 함
import "../src/tokens/global.css";
import "../src/tokens/themes/basic.css";
import "../src/tokens/themes/game.css";
import "../src/tokens/themes/crayon.css";
import { ThemeWrapper } from "./ThemeWrapper";
import {
	appearanceTheme,
	type AppearanceMode,
} from "../src/tokens/appearanceTheme";
import type { ThemeName } from "../src/providers/ThemeContext";

const withTheme: Decorator = (Story, context) => {
	const mode = (context.globals?.mode || "light") as AppearanceMode;
	const theme = (context.globals?.themeName || "basic") as ThemeName;

	return (
		<ThemeWrapper mode={mode} theme={theme}>
			<Story />
		</ThemeWrapper>
	);
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			toc: true,
		},
		options: {
			storySort: {
				order: [
					"Components",
					[
						// Buttons
						"Button",
						"Switch",
						// Forms
						"TextField",
						"Checkbox",
						"Dropdown",
						// Feedback
						"Badge",
						"Dialog",
						// Typography
						"Text",
					],
				],
			},
		},
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: appearanceTheme.light.bodyBackground },
				{ name: "dark", value: appearanceTheme.dark.bodyBackground },
			],
		},
	},
	globalTypes: {
		mode: {
			description: "Appearance mode (light/dark)",
			defaultValue: "light",
			toolbar: {
				title: "Mode",
				icon: "circlehollow",
				items: [
					{ value: "light", title: "Light" },
					{ value: "dark", title: "Dark" },
				],
				dynamicTitle: true,
			},
		},
		themeName: {
			description: "Theme name (basic/game/crayon)",
			defaultValue: "basic",
			toolbar: {
				title: "Theme",
				icon: "paintbrush",
				items: [
					{ value: "basic", title: "Basic" },
					{ value: "game", title: "Game" },
					{ value: "crayon", title: "Crayon" },
				],
				dynamicTitle: true,
			},
		},
	},
	decorators: [withTheme],
};

export default preview;
