export { themeContract, semanticTokens } from "./semantic";

import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./utils/constants";
export { PRIMARY_COLOR_CSS_VAR_NAMES };

export const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

export {
	basicLightTheme as lightTheme,
	basicDarkTheme as darkTheme,
} from "./themes/basic.css";
