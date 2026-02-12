import React from "react";
import { ThemeProvider } from "../src/providers";
import {
	appearanceTheme,
	applyAppearanceTheme,
	type Theme,
} from "../src/tokens/appearanceTheme";
import type { Design } from "../src/providers/ThemeContext";

interface ThemeWrapperProps {
	theme: Theme;
	design?: Design;
	children: React.ReactNode;
}

export const ThemeWrapper = ({
	theme,
	design = "basic",
	children,
}: ThemeWrapperProps) => {
	const { bodyBackground, bodyText } = appearanceTheme[theme];

	React.useEffect(() => {
		applyAppearanceTheme(theme);
	}, [theme]);

	return (
		<ThemeProvider
			theme={theme}
			design={design}
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
