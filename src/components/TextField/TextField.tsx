import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import clsx from "clsx";
import { container, containerVariants, input, label, helperText } from "./TextField.css";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

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
	name?: string;
	required?: boolean;
	validate?: (
		value: unknown,
		formValues: Record<string, unknown>
	) => string | string[] | Promise<string | string[] | null> | null;
}

/**
 * TextField component built on Base UI
 * 
 * @example
 * ```tsx
 * <TextField 
 *   label="Email"
 *   placeholder="Enter your email"
 *   type="email"
 *   helperText="We'll never share your email"
 * />
 * ```
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
	className,
	name,
	required,
	validate,
	...props
}: TextFieldProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

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
			<Input
				className={input({
					size,
					rounded,
					variant,
					status,
				})}
				required={required}
				{...props}
			/>
			{helperTextContent && status !== "error" && (
				<Field.Description className={helperText({ size, status })}>
					{helperTextContent}
				</Field.Description>
			)}
			<Field.Error className={helperText({ size, status: "error" })} />
		</Field.Root>
	);
};
