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
	},
	globalTypes: {
		theme: {
			description: "Global theme for components",
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
	decorators: [
		(Story, context) => {
			// Apply theme class to document root
			const theme = context.globals.theme || "light";
			const themeClass = theme === "dark" ? darkTheme : lightTheme;
			
			if (typeof document !== "undefined") {
				document.documentElement.classList.remove(lightTheme, darkTheme);
				document.documentElement.classList.add(themeClass);
			}
			
			return Story();
		},
	],
};

export default preview;
