import { globalStyle } from "@vanilla-extract/css";

globalStyle("#root", {
	isolation: "isolate",
});

globalStyle("body", {
	isolation: "isolate",
	position: "relative",
	margin: 0,
});

globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});
