import type { Preview } from "@storybook/react";
import { lightTheme } from "../packages/tokens/theme.css";
import "../packages/tokens/theme.css";

// Apply light theme to storybook root
if (typeof document !== "undefined") {
	document.documentElement.classList.add(lightTheme);
}

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
					["Badge", "Button", "Checkbox", "Dialog", "Switch", "TextField"],
				],
			},
		},
	},
};

export default preview;
