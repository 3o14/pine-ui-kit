import { Switch as BaseSwitch } from "@base-ui/react/switch";
import clsx from "clsx";
import * as styles from "./Switch.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { Text } from "../Text/Text";

export type SwitchSize = "small" | "medium" | "large" | "xlarge";
export type SwitchIntent = ColorIntent;

export interface SwitchProps {
	size?: SwitchSize;
	intent?: SwitchIntent;
	label?: string;
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	className?: string;
	name?: string;
	required?: boolean;
	readOnly?: boolean;
}

/**
 * Switch component built on Base UI
 * 
 * @example
 * ```tsx
 * <Switch 
 *   label="Enable notifications" 
 *   intent="primary" 
 *   size="medium"
 *   onCheckedChange={(checked) => console.log(checked)}
 * />
 * ```
 */
export const Switch = ({
	size = "medium",
	intent = "primary",
	label,
	checked,
	defaultChecked,
	disabled = false,
	onCheckedChange,
	className,
	name,
	required,
	readOnly,
}: SwitchProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<label className={clsx(themeClass, styles.container, className)}>
			<BaseSwitch.Root
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				onCheckedChange={onCheckedChange}
				name={name}
				required={required}
				readOnly={readOnly}
				className={styles.switchRoot}
			>
				<span
					className={styles.track({
						size,
						intent,
					})}
					data-state={checked ? "checked" : "unchecked"}
				>
					<BaseSwitch.Thumb
						className={styles.thumb({
							size,
						})}
					/>
				</span>
			</BaseSwitch.Root>
			{label && (
				<Text as="span" size={size} intent="inherit">
					{label}
				</Text>
			)}
		</label>
	);
};
