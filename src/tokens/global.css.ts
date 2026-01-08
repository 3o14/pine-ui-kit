import { globalStyle } from "@vanilla-extract/css";

/**
 * Global styles for Base UI components
 * 
 * Base UI requires `isolation: isolate` on the root element
 * to prevent z-index issues with overlay components like Dialog, Popover, etc.
 * 
 * @see https://base-ui.com/getting-started/usage#css-isolation
 */

// Apply isolation to root and body for Base UI overlay components
globalStyle("#root", {
	isolation: "isolate",
});

globalStyle("body", {
	isolation: "isolate",
});

// Box-sizing reset for better consistency
globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});

// Remove default margin
globalStyle("body", {
	margin: 0,
});

