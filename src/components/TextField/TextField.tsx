import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import clsx from "clsx";
import * as styles from "./TextField.css";
const { container, containerVariants, input, label, helperText } = styles;
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

export type TextFieldSize = "small" | "medium" | "large" | "xlarge";
export type TextFieldRounded = "small" | "medium" | "large";
export type TextFieldVariant = "outline" | "filled";
export type TextFieldStatus = "default" | "error" | "success";

type BaseTextFieldProps = {
	size?: TextFieldSize;
	rounded?: TextFieldRounded;
	variant?: TextFieldVariant;
	status?: TextFieldStatus;
	label?: string;
	helperText?: string;
	fullWidth?: boolean;
	name?: string;
	required?: boolean;
	validate?: (
		value: unknown,
		formValues: Record<string, unknown>
	) => string | string[] | Promise<string | string[] | null> | null;
};

type InputTextFieldProps = BaseTextFieldProps &
	Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
		multiline?: false;
		rows?: never;
	};

type TextareaTextFieldProps = BaseTextFieldProps &
	Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "type"> & {
		multiline: true;
		rows?: number;
	};

export type TextFieldProps = InputTextFieldProps | TextareaTextFieldProps;

/**
 * TextField component for text input.
 *
 * @param TextFieldProps
 * @param label - Label text for the input field
 * @param placeholder - Placeholder text
 * @param value - Current input value (controlled)
 * @param type - Input type (text, email, password, etc.)
 * @param size - Size of the input (small, medium, large, xlarge)
 * @param rounded - Border radius size (small, medium, large)
 * @param variant - Visual style variant (outline, filled)
 * @param status - Validation status (default, error, success)
 * @param disabled - Whether the input is disabled
 * @param multiline - Whether to render as textarea (default: false)
 * @param rows - Number of rows for textarea (default: 3, only when multiline is true)
 * @param helperText - Helper text displayed below the input
 */
export const TextField = ({
	size = "medium",
	rounded = "medium",
	variant = "outline",
	status = "default",
	label: labelText,
	helperText: helperTextContent,
	fullWidth = false,
	disabled = false,
	multiline = false,
	rows = 3,
	className,
	name,
	required,
	validate,
	...props
}: TextFieldProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const inputClassName = clsx(
		input({
			size,
			rounded,
			variant,
			status,
		}),
		multiline && styles.textarea
	);

	return (
		<Field.Root
			className={clsx(
				themeClass,
				container,
				containerVariants[fullWidth ? "fullWidth" : "default"],
				className
			)}
			name={name}
			disabled={disabled}
			validate={validate}
		>
			{labelText && (
				<Field.Label className={label({ size })}>
					{labelText}
					{required && " *"}
				</Field.Label>
			)}
			{multiline ? (
				<textarea
					className={inputClassName}
					required={required}
					disabled={disabled}
					rows={rows}
					{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<Input
					className={inputClassName}
					required={required}
					{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}
			{helperTextContent && status !== "error" && (
				<Field.Description className={helperText({ size, status })}>
					{helperTextContent}
				</Field.Description>
			)}
			<Field.Error className={helperText({ size, status: "error" })} />
		</Field.Root>
	);
};
