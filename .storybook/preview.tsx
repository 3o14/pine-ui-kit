import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import "../src/tokens/theme.css";
import { ThemeWrapper } from "./ThemeWrapper";
import {
	appearanceTheme,
	type AppearanceMode,
} from "../src/tokens/appearanceTheme";

const withTheme: Decorator = (Story, context) => {
	const theme = (context.globals?.theme || "light") as AppearanceMode;

	return (
		<ThemeWrapper mode={theme}>
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
			description: "Global theme for components and background",
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
	},
	decorators: [withTheme],
};

export default preview;
