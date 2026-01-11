import { Switch as BaseSwitch } from "@base-ui/react/switch";
import clsx from "clsx";
import * as styles from "./Switch.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { Text } from "../Text/Text";

export type SwitchSize = "small" | "medium" | "large" | "xlarge";
export type SwitchIntent = ColorIntent;

export interface SwitchProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	size?: SwitchSize;
	intent?: SwitchIntent;
	label?: string;
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	name?: string;
	required?: boolean;
	readOnly?: boolean;
}

/**
 * Switch component for toggle controls.
 *
 * @param SwitchProps
 * @param size - Size of the switch (small, medium, large, xlarge)
 * @param intent - Color intent (primary, secondary, success, warning, danger, neutral)
 * @param label - Label text for the switch
 * @param checked - Controlled checked state
 * @param disabled - Whether the switch is disabled
 * @param onCheckedChange - Callback when checked state changes
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
	const isCrayonTheme = themeContext?.theme === "crayon";

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
					className={clsx(
						styles.track({
							size,
							intent,
						}),
						isCrayonTheme && styles.crayonSwitchTrackStyle,
						isCrayonTheme && styles.crayonSwitchTrackBefore,
						isCrayonTheme && styles.crayonSwitchTrackAfter
					)}
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
