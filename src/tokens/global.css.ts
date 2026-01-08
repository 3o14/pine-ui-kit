import { globalStyle } from "@vanilla-extract/css";

/**
 * Global styles for Base UI components
 * 
 * Base UI requires the following styles for proper functionality:
 * 1. `isolation: isolate` on the root element to prevent z-index issues
 * 2. `position: relative` on body for iOS 26+ Safari backdrop support
 * 
 * @see https://base-ui.com/react/overview/quick-start
 */

// Apply isolation to root element for Base UI overlay components
globalStyle("#root", {
	isolation: "isolate",
});

// Base UI body styles
globalStyle("body", {
	// Required for Base UI overlay components (z-index isolation)
	isolation: "isolate",
	// Required for iOS 26+ Safari backdrop support
	// Ensures Dialog backdrops cover the entire visual viewport after scrolling
	position: "relative",
	// Reset default margin
	margin: 0,
});

// Box-sizing reset for better consistency
globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});

