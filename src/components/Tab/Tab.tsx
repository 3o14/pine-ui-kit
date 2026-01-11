import React from "react";
import clsx from "clsx";
import { Tabs as BaseUITabs } from "@base-ui/react/tabs";
import * as styles from "./Tab.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type TabIntent = ColorIntent;
export type TabOrientation = "horizontal" | "vertical";

export interface TabItem {
	value: string;
	label: React.ReactNode;
	content: React.ReactNode;
	disabled?: boolean;
}

export interface TabProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	tabs: TabItem[];
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	intent?: TabIntent;
	orientation?: TabOrientation;
}

/**
 * Tab component for organizing content into switchable panels.
 *
 * @param TabProps
 * @param tabs - Array of tab items with value, label, and content
 * @param value - Currently selected tab value (controlled)
 * @param defaultValue - Default selected tab value (uncontrolled)
 * @param onChange - Callback when selected tab changes
 * @param intent - Color intent for active tab (primary, secondary, success, warning, danger, neutral)
 * @param orientation - Tab layout orientation (horizontal, vertical)
 */
export const Tab = ({
	tabs,
	value,
	defaultValue,
	onChange,
	intent = "primary",
	orientation = "horizontal",
	className,
}: TabProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;
	const isCrayonTheme = themeContext?.theme === "crayon";

	return (
		<BaseUITabs.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={(newValue) => onChange?.(newValue as string)}
			orientation={orientation}
			className={clsx(themeClass, styles.root, className)}
		>
			<BaseUITabs.List
				className={styles.tabList({
					orientation,
				})}
			>
				{tabs.map((tab) => (
					<BaseUITabs.Tab
						key={tab.value}
						value={tab.value}
						disabled={tab.disabled}
						className={clsx(
							styles.tab({ intent, orientation }),
							isCrayonTheme && styles.crayonTabStyle,
							isCrayonTheme && styles.crayonTabBefore,
							isCrayonTheme && styles.crayonTabAfter
						)}
					>
						{tab.label}
					</BaseUITabs.Tab>
				))}
			</BaseUITabs.List>

			{tabs.map((tab) => (
				<BaseUITabs.Panel
					key={tab.value}
					value={tab.value}
					className={styles.panel}
				>
					{tab.content}
				</BaseUITabs.Panel>
			))}
		</BaseUITabs.Root>
	);
};
