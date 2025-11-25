import React, { useContext } from "react";
import clsx from "clsx";
import {
	container,
	containerVariants,
	label as labelStyle,
	labelSize,
	input,
	helperText as helperTextStyle,
	helperTextStatus,
} from "./TextField.css";
import { lightTheme } from "../../tokens/theme.css";
import { ThemeContext } from "../ThemeProvider/ThemeContext";

export type TextFieldSize = "sm" | "md" | "lg";
export type TextFieldVariant = "outline" | "filled";
export type TextFieldStatus = "default" | "error" | "success";

export interface TextFieldProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	size?: TextFieldSize;
	variant?: TextFieldVariant;
	status?: TextFieldStatus;
	label?: string;
	helperText?: string;
	error?: boolean;
	fullWidth?: boolean;
}

export const TextField = ({
	size = "md",
	variant = "outline",
	status = "default",
	label,
	helperText,
	error = false,
	fullWidth = false,
	disabled = false,
	className,
	...props
}: TextFieldProps) => {
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;
	const finalStatus = error ? "error" : status;

	return (
		<div
			className={clsx(
				themeClass,
				container,
				containerVariants[fullWidth ? "fullWidth" : "default"],
				className
			)}
		>
			{label && (
				<label className={clsx(labelStyle, labelSize[size])}>{label}</label>
			)}
			<input
				className={input({
					size,
					variant,
					status: finalStatus,
				})}
				disabled={disabled}
				{...props}
			/>
			{helperText && (
				<span className={clsx(helperTextStyle, helperTextStatus[finalStatus])}>
					{helperText}
				</span>
			)}
		</div>
	);
};
