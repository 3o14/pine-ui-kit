import { useCallback } from "react";
import clsx from "clsx";
import { Tabs as BaseUITabs } from "@base-ui/react/tabs";
import * as styles from "./Tab.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { useTabValue } from "./hook/useTabValue";
import { useTabIndicator } from "./hook/useTabIndicator";

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

	const initialValue = value ?? defaultValue ?? tabs[0]?.value ?? null;
	const { currentValue, handleValueChange } = useTabValue(value, initialValue);

	const { tabListRef, tabRefs, indicatorStyle } = useTabIndicator(
		currentValue,
		orientation,
		tabs
	);

	const onValueChange = useCallback(
		(newValue: string | null) => {
			handleValueChange(newValue, onChange);
		},
		[handleValueChange, onChange]
	);

	return (
		<BaseUITabs.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={onValueChange}
			orientation={orientation}
			className={clsx(themeClass, styles.root, className)}
		>
			<div ref={tabListRef} className={styles.tabListWrapper}>
				<BaseUITabs.List
					className={styles.tabList({
						orientation,
					})}
				>
					{tabs.map((tab) => {
						const isSelected = currentValue === tab.value;
						return (
							<BaseUITabs.Tab
								key={tab.value}
								ref={(el) => {
									if (el && el instanceof HTMLButtonElement) {
										tabRefs.current.set(tab.value, el);
									} else {
										tabRefs.current.delete(tab.value);
									}
								}}
								value={tab.value}
								disabled={tab.disabled}
								className={clsx(
									styles.tab({ intent, orientation }),
									isSelected && styles.tabSelected({ intent })
								)}
							>
								{tab.label}
							</BaseUITabs.Tab>
						);
					})}
					<div
						className={styles.indicator({
							intent,
							orientation,
						})}
						style={indicatorStyle}
					/>
				</BaseUITabs.List>
			</div>

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
