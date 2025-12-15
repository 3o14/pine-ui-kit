import React, { useContext } from "react";
import clsx from "clsx";
import { container, containerVariants, input } from "./TextField.css";
import { lightTheme } from "@/tokens";
import { ThemeContext } from "../ThemeProvider/ThemeContext";
import { Text } from "../Text/Text";

export type TextFieldSize = "small" | "medium" | "large" | "xlarge";
export type TextFieldRounded = "small" | "medium" | "large";
export type TextFieldVariant = "outline" | "filled";
export type TextFieldStatus = "default" | "error" | "success";

export interface TextFieldProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	size?: TextFieldSize;
	rounded?: TextFieldRounded;
	variant?: TextFieldVariant;
	status?: TextFieldStatus;
	label?: string;
	helperText?: string;
	fullWidth?: boolean;
}

export const TextField = ({
	size = "medium",
	rounded = "medium",
	variant = "outline",
	status = "default",
	label,
	helperText,
	fullWidth = false,
	disabled = false,
	className,
	...props
}: TextFieldProps) => {
	const themeContext = useContext(ThemeContext);
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const getHelperTextIntent = (): "inherit" | "danger" | "success" => {
		if (status === "error") return "danger";
		if (status === "success") return "success";
		return "inherit";
	};

	const getLabelSize = (): "xsmall" | "small" | "medium" => {
		if (size === "small") return "xsmall";
		if (size === "medium") return "small";
		return "medium";
	};

	const getHelperTextSize = (): "xsmall" | "small" => {
		if (size === "small" || size === "medium") return "xsmall";
		return "small";
	};

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
				<Text
					as="label"
					size={getLabelSize()}
					weight="medium"
					intent="inherit"
					style={{ display: "block", marginBottom: "4px" }}
				>
					{label}
				</Text>
			)}
			<input
				className={input({
					size,
					rounded,
					variant,
					status,
				})}
				disabled={disabled}
				{...props}
			/>
			{helperText && (
				<Text
					as="span"
					size={getHelperTextSize()}
					intent={getHelperTextIntent()}
					style={{ display: "block", marginTop: "4px" }}
				>
					{helperText}
				</Text>
			)}
		</div>
	);
};
