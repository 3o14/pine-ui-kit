import React from "react";
import type { Preview } from "@storybook/react";
import "../packages/tokens/theme.css";
import { ThemeProvider } from "../packages/components/ThemeProvider";
import {
	appearanceTheme,
	applyAppearanceTheme,
	type AppearanceMode,
} from "../packages/tokens/appearanceTheme";

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
	decorators: [
		(Story, context) => {
			const theme = (context.globals?.theme || "light") as AppearanceMode;

			const ThemeWrapper = ({ mode }: { mode: AppearanceMode }) => {
				const { bodyBackground, bodyText } = appearanceTheme[mode];

				React.useEffect(() => {
					applyAppearanceTheme(mode);
				}, [mode]);

				return (
					<ThemeProvider mode={mode} syncWithSystem={false}>
						<div
							style={{
								backgroundColor: bodyBackground,
								color: bodyText,
								minHeight: "100vh",
								minWidth: "100%",
								padding: "1rem",
								margin: 0,
								transition: "background-color 0.2s ease, color 0.2s ease",
							}}EWWWWWWWWW		<Story />
						</div>
					</ThemeProvider>
				);
			};

			return <ThemeWrapper mode={theme} />;
		},
	],
};

export default preview;
