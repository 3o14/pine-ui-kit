import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import clsx from "clsx";
import * as styles from "./Checkbox.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { Text } from "../Text/Text";

export type CheckboxSize = "small" | "medium" | "large" | "xlarge";
export type CheckboxVariant = "circle" | "square";
export type CheckboxIntent = ColorIntent;
export type CheckboxRounded = "small" | "medium" | "large";

export interface CheckboxProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	size?: CheckboxSize;
	variant?: CheckboxVariant;
	intent?: CheckboxIntent;
	rounded?: CheckboxRounded;
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
 * Checkbox component for selection controls.
 *
 * @param CheckboxProps
 * @param size - Size of the checkbox (small, medium, large, xlarge)
 * @param variant - Shape variant (circle, square)
 * @param intent - Color intent (primary, secondary, success, warning, danger, neutral)
 * @param rounded - Border radius size (small, medium, large)
 * @param label - Label text for the checkbox
 * @param checked - Controlled checked state
 * @param disabled - Whether the checkbox is disabled
 * @param onCheckedChange - Callback when checked state changes
 */
export const Checkbox = ({
	size = "medium",
	variant = "square",
	intent = "primary",
	rounded = "medium",
	label,
	checked,
	defaultChecked,
	disabled = false,
	onCheckedChange,
	className,
	name,
	required,
	readOnly,
}: CheckboxProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<label className={clsx(themeClass, styles.container, className)}>
			<BaseCheckbox.Root
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				onCheckedChange={onCheckedChange}
				name={name}
				required={required}
				readOnly={readOnly}
				className={styles.checkboxRoot}
			>
				<span
					className={clsx(
						styles.checkbox({
						size,
						variant,
						intent,
						rounded: variant === "circle" ? undefined : rounded,
						})
					)}
				>
					<BaseCheckbox.Indicator className={styles.indicatorContainer}>
						<svg
							className={styles.checkmarkIcon}
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.3334 4L6.00002 11.3333L2.66669 8"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</BaseCheckbox.Indicator>
				</span>
			</BaseCheckbox.Root>
			{label && (
				<Text as="span" size={size} intent="inherit">
					{label}
				</Text>
			)}
		</label>
	);
};
