import React from "react";
import clsx from "clsx";
import { Tabs as BaseUITabs } from "@base-ui/react/tabs";
import * as styles from "./Tabs.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type TabsIntent = ColorIntent;
export type TabsOrientation = "horizontal" | "vertical";

export interface Tab {
	value: string;
	label: React.ReactNode;
	content: React.ReactNode;
	disabled?: boolean;
}

export interface TabsProps {
	/**
	 * Array of tab objects
	 */
	tabs: Tab[];
	/**
	 * The currently selected tab value
	 */
	value?: string;
	/**
	 * Default selected tab value (uncontrolled)
	 */
	defaultValue?: string;
	/**
	 * Callback when tab changes
	 */
	onChange?: (value: string) => void;
	/**
	 * Color intent
	 * @default "primary"
	 */
	intent?: TabsIntent;
	/**
	 * Orientation of tabs
	 * @default "horizontal"
	 */
	orientation?: TabsOrientation;
	/**
	 * Custom class name
	 */
	className?: string;
}

/**
 * Tabs component built on Base UI
 * 
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { value: "tab1", label: "Tab 1", content: <div>Content 1</div> },
 *     { value: "tab2", label: "Tab 2", content: <div>Content 2</div> }
 *   ]}
 *   defaultValue="tab1"
 * />
 * ```
 */
export const Tabs = ({
	tabs,
	value,
	defaultValue,
	onChange,
	intent = "primary",
	orientation = "horizontal",
	className,
}: TabsProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

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
						className={styles.tab({ intent, orientation })}
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

