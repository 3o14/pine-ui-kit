import React, { useContext } from "react";
import clsx from "clsx";
import * as styles from "./Switch.css";
import { lightTheme } from "../../tokens/theme.css";
import type { ColorIntent } from "../../tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type SwitchSize = "sm" | "md" | "lg";
export type SwitchIntent = ColorIntent;

export interface SwitchProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
	size?: SwitchSize;
	intent?: SwitchIntent;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
}

export const Switch = ({
	size = "md",
	intent = "primary",
	label,
	checked: controlledChecked,
	disabled = false,
	className,
	onChange,
	...props
}: SwitchProps) => {
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;

	// Uncontrolled 모드 지원
	const [internalChecked, setInternalChecked] = React.useState(false);
	const isControlled = controlledChecked !== undefined;
	const checked = isControlled ? controlledChecked : internalChecked;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isControlled) {
			setInternalChecked(e.target.checked);
		}
		onChange?.(e);
	};

	return (
		<label className={clsx(themeClass, styles.container, className)}>
			<input
				type="checkbox"
				role="switch"
				className={styles.hiddenInput}
				checked={checked}
				disabled={disabled}
				onChange={handleChange}
				{...props}
			/>
			<span
				className={styles.track({
					size,
					intent,
					checked,
				})}
			>
				<span
					className={styles.thumb({
						size,
						checked,
					})}
				/>
			</span>
			{label && (
				<span className={clsx(styles.label, styles.labelSize[size])}>
					{label}
				</span>
			)}
		</label>
	);
};
