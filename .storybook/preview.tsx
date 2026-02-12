import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import "../src/tokens/global.css";
import "../src/tokens/themes/basic.css";
import "../src/tokens/themes/game.css";
import "../src/tokens/themes/crayon.css";
import { ThemeWrapper } from "./ThemeWrapper";
import {
	appearanceTheme,
	type Theme,
} from "../src/tokens/appearanceTheme";
import type { Design } from "../src/providers/ThemeContext";

const withTheme: Decorator = (Story, context) => {
	const theme = (context.globals?.theme || "light") as Theme;
	const design = (context.globals?.design || "basic") as Design;

	return (
		<ThemeWrapper theme={theme} design={design}>
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
		theme: {
			description: "Theme (light/dark)",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{ value: "light", title: "Light" },
					{ value: "dark", title: "Dark" },
				],
				dynamicTitle: true,
			},
		},
		design: {
			description: "Design variant (basic/game/crayon)",
			defaultValue: "basic",
			toolbar: {
				title: "Design",
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
