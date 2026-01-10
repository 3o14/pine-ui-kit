import { Select as BaseSelect } from "@base-ui/react/select";
import clsx from "clsx";
import * as styles from "./Dropdown.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type DropdownSize = "small" | "medium" | "large";
export type DropdownRounded = "small" | "medium" | "large";
export type DropdownIntent = ColorIntent;

export interface DropdownOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface DropdownProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "defaultValue"> {
	options: DropdownOption[];
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string | null) => void;
	placeholder?: string;
	size?: DropdownSize;
	rounded?: DropdownRounded;
	intent?: DropdownIntent;
	fullWidth?: boolean;
	disabled?: boolean;
	name?: string;
	required?: boolean;
}

/**
 * Dropdown component for option selection.
 *
 * @param DropdownProps
 * @param options - Array of selectable options
 * @param value - Currently selected value (controlled)
 * @param placeholder - Placeholder text when no option is selected
 * @param size - Size of the dropdown (small, medium, large)
 * @param rounded - Border radius size (small, medium, large)
 * @param intent - Color intent (primary, secondary, success, warning, danger, neutral)
 * @param disabled - Whether the dropdown is disabled
 * @param onValueChange - Callback when selected value changes
 */
export const Dropdown = ({
	options,
	value,
	defaultValue,
	onValueChange,
	placeholder = "Select an option",
	size = "medium",
	rounded = "medium",
	intent = "primary",
	fullWidth = false,
	disabled = false,
	className,
	name,
	required,
}: DropdownProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<BaseSelect.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={(newValue) => onValueChange?.(newValue)}
			disabled={disabled}
			name={name}
			required={required}
		>
			<div
				className={clsx(
					themeClass,
					styles.container,
					fullWidth && styles.triggerFullWidth,
					className
				)}
			>
				<BaseSelect.Trigger
					className={clsx(
						styles.trigger({
							size,
							rounded,
							intent,
						}),
						fullWidth && styles.triggerFullWidth
					)}
				>
					<BaseSelect.Value>
						{(selectedValue: string | null) => {
							const selected = options.find(
								(opt) => opt.value === selectedValue
							);
							return selected?.label || placeholder;
						}}
					</BaseSelect.Value>
					<BaseSelect.Icon className={styles.triggerIcon}>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6L8 10L12 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</BaseSelect.Icon>
				</BaseSelect.Trigger>

				<BaseSelect.Portal>
					<BaseSelect.Positioner sideOffset={4}>
						<BaseSelect.Popup className={styles.menu} data-intent={intent}>
							<BaseSelect.List>
								{options.map((option) => (
									<BaseSelect.Item
										key={option.value}
										value={option.value}
										disabled={option.disabled}
										className={styles.menuItem({ intent })}
									>
										<BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
									</BaseSelect.Item>
								))}
							</BaseSelect.List>
						</BaseSelect.Popup>
					</BaseSelect.Positioner>
				</BaseSelect.Portal>
			</div>
		</BaseSelect.Root>
	);
};
