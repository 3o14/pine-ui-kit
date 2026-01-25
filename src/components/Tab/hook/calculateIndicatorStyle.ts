import type { TabOrientation } from "..";

export interface IndicatorStyle {
	left?: string;
	top?: string;
	width?: string;
	height?: string;
	bottom?: string;
	right?: string;
}

export function calculateIndicatorStyle(
	tabListRect: DOMRect,
	tabRect: DOMRect,
	orientation: TabOrientation
): IndicatorStyle {
	if (orientation === "horizontal") {
		return {
			left: `${tabRect.left - tabListRect.left}px`,
			width: `${tabRect.width}px`,
			height: "2px",
		};
	}

	return {
		top: `${tabRect.top - tabListRect.top}px`,
		height: `${tabRect.height}px`,
		width: "2px",
	};
}
