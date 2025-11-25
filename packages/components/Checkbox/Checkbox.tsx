import React, { useContext } from "react";
import clsx from "clsx";
import * as styles from "./Checkbox.css";
import { lightTheme } from "../../tokens/theme.css";
import type { ColorIntent } from "../../tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxIntent = ColorIntent;

export interface CheckboxProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
	size?: CheckboxSize;
	intent?: CheckboxIntent;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
}

export const Checkbox = ({
	size = "md",
	intent = "primary",
	label,
	checked: controlledChecked,
	disabled = false,
	className,
	onChange,
	...props
}: CheckboxProps) => {
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
				className={styles.hiddenInput}
				checked={checked}
				disabled={disabled}
				onChange={handleChange}
				{...props}
			/>
			<span
				className={styles.checkbox({
					size,
					intent,
					checked,
				})}
			>
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
						style={{
							strokeDasharray: 16,
							strokeDashoffset: checked ? 0 : 16,
						}}
					/>
				</svg>
			</span>
			{label && (
				<span className={clsx(styles.label, styles.labelSize[size])}>
					{label}
				</span>
			)}
		</label>
	);
};
