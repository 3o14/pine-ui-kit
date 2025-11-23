import type { Preview } from "@storybook/react";
import { lightTheme, darkTheme } from "../packages/tokens/theme.css";
import "../packages/tokens/theme.css";

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
						"Badge",
						"Button",
						"Checkbox",
						"Dialog",
						"Dropdown",
						"Icon",
						"Switch",
						"Text",
						"TextField",
					],
				],
			},
		},
		themes: {
			default: "light",
			list: [
				{
					name: "light",
					class: lightTheme,
					color: "#ffffff",
				},
				{
					name: "dark",
					class: darkTheme,
					color: "#0b1120",
				},
			],
		},
	},
	decorators: [
		(Story, context) => {
			// Apply theme class to document root
			const theme = context.globals.theme || "light";
			const themeClass = theme === "dark" ? darkTheme : lightTheme;
			
			if (typeof document !== "undefined") {
				document.documentElement.className = themeClass;
			}
			
			return Story();
		},
	],
};

export default preview;
