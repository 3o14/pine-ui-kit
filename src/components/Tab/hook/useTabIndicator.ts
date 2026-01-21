import { useRef, useState, useEffect, useCallback } from "react";
import type { TabOrientation, TabItem } from "../Tab";
import { calculateIndicatorStyle } from "./calculateIndicatorStyle";

export function useTabIndicator(
	currentValue: string | null,
	orientation: TabOrientation,
	tabs: TabItem[]
) {
	const tabListRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
	const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

	const updateIndicatorPosition = useCallback(
		(selectedValue: string | null) => {
			if (!tabListRef.current || !selectedValue) {
				setIndicatorStyle({});
				return;
			}

			const selectedTab = tabRefs.current.get(selectedValue);
			if (!selectedTab) {
				setIndicatorStyle({});
				return;
			}

			const tabListRect = tabListRef.current.getBoundingClientRect();
			const tabRect = selectedTab.getBoundingClientRect();
			const style = calculateIndicatorStyle(tabListRect, tabRect, orientation);
			setIndicatorStyle(style);
		},
		[orientation]
	);

	useEffect(() => {
		const rafId = requestAnimationFrame(() => {
			updateIndicatorPosition(currentValue);
		});

		return () => {
			cancelAnimationFrame(rafId);
		};
	}, [currentValue, updateIndicatorPosition, tabs]);

	return { tabListRef, tabRefs, indicatorStyle };
}
