import React from "react";
import { ThemeProvider } from "../src/providers";
import {
	appearanceTheme,
	applyAppearanceTheme,
	type AppearanceMode,
} from "../src/tokens/appearanceTheme";
import type { ThemeName } from "../src/providers/ThemeContext";

interface ThemeWrapperProps {
	mode: AppearanceMode;
	theme?: ThemeName;
	children: React.ReactNode;
}

export const ThemeWrapper = ({
	mode,
	theme = "basic",
	children,
}: ThemeWrapperProps) => {
	const { bodyBackground, bodyText } = appearanceTheme[mode];

	React.useEffect(() => {
		applyAppearanceTheme(mode);
	}, [mode]);

	return (
		<ThemeProvider
			mode={mode}
			theme={theme}
			syncWithSystem={false}
			style={{
				backgroundColor: bodyBackground,
				color: bodyText,
				width: "100%",
				height: "100%",
				padding: "1.5rem",
				margin: 0,
				boxSizing: "border-box",
				transition: "background-color 0.2s ease, color 0.2s ease",
			}}
		>
			{children}
		</ThemeProvider>
	);
};
