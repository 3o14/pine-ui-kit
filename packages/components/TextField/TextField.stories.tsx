import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
	title: "Components/TextField",
	component: TextField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		size: "medium",
		rounded: "medium",
		variant: "outline",
		status: "default",
		disabled: false,
		fullWidth: false,
		placeholder: "Enter text...",
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "TextField size",
			table: {
				type: { summary: "TextFieldSize" },
				defaultValue: { summary: "medium" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "TextField border radius",
			table: {
				type: { summary: "TextFieldRounded" },
				defaultValue: { summary: "medium" },
			},
		},
		variant: {
			control: "select",
			options: ["outline", "filled"],
			description: "TextField variant style",
			table: {
				type: { summary: "TextFieldVariant" },
				defaultValue: { summary: "outline" },
			},
		},
		status: {
			control: "select",
			options: ["default", "error", "success"],
			description: "TextField status state",
			table: {
				type: { summary: "TextFieldStatus" },
				defaultValue: { summary: "default" },
			},
		},
		fullWidth: {
			control: "boolean",
			description: "Full width field",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default TextField
export const Default: Story = {
	args: {},
};

// With Label
export const WithLabel: Story = {
	args: {
		label: "Email Address",
		placeholder: "example@email.com",
		type: "email",
	},
};

// With Helper Text
export const WithHelperText: Story = {
	args: {
		label: "Username",
		placeholder: "johndoe",
		helperText: "Choose a unique username",
	},
};

// All Sizes
export const Sizes: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				size="small"
				label="Small"
				placeholder="Small size"
			/>
			<TextField
				{...args}
				size="medium"
				label="Medium"
				placeholder="Medium size"
			/>
			<TextField
				{...args}
				size="large"
				label="Large"
				placeholder="Large size"
			/>
			<TextField
				{...args}
				size="xlarge"
				label="XLarge"
				placeholder="XLarge size"
			/>
		</div>
	),
	args: {
		variant: "outline",
	},
};

// All Variants
export const Variants: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				variant="outline"
				label="Outline Variant"
				placeholder="Outline style"
			/>
			<TextField
				{...args}
				variant="filled"
				label="Filled Variant"
				placeholder="Filled style"
			/>
		</div>
	),
	args: {
		size: "medium",
	},
};

// Status States
export const StatusStates: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				status="default"
				label="Default"
				placeholder="Default state"
				helperText="This is a default field"
			/>
			<TextField
				{...args}
				status="success"
				label="Success"
				placeholder="Success state"
				helperText="Great! This looks good"
			/>
			<TextField
				{...args}
				status="error"
				label="Error"
				placeholder="Error state"
				helperText="Something went wrong"
			/>
		</div>
	),
	args: {
		variant: "outline",
	},
};

// Error State
export const Error: Story = {
	args: {
		label: "Password",
		placeholder: "Enter password",
		type: "password",
		status: "error",
		helperText: "Password must be at least 8 characters",
	},
};

// Disabled State
export const Disabled: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				variant="outline"
				label="Outline Disabled"
				placeholder="Disabled"
			/>
			<TextField
				{...args}
				variant="filled"
				label="Filled Disabled"
				placeholder="Disabled"
			/>
		</div>
	),
	args: {
		disabled: true,
		helperText: "This field is disabled",
	},
};

// Full Width
export const FullWidth: Story = {
	render: (args) => (
		<div style={{ width: "100%", maxWidth: "600px" }}>
			<TextField {...args} />
		</div>
	),
	args: {
		label: "Full Width Field",
		placeholder: "This field spans the full width",
		fullWidth: true,
		helperText: "Takes up all available width",
		variant: "outline",
	},
};

// Rounded
export const Rounded: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				rounded="small"
				label="Small Rounded"
				placeholder="Small border radius"
			/>
			<TextField
				{...args}
				rounded="medium"
				label="Medium Rounded"
				placeholder="Medium border radius"
			/>
			<TextField
				{...args}
				rounded="large"
				label="Large Rounded"
				placeholder="Large border radius"
			/>
		</div>
	),
	args: {
		variant: "outline",
	},
};

// Form Example
export const FormExample: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "400px",
			}}
		>
			<TextField
				{...args}
				label="First Name"
				placeholder="John"
				helperText="Enter your first name"
			/>
			<TextField
				{...args}
				label="Last Name"
				placeholder="Doe"
				helperText="Enter your last name"
			/>
			<TextField
				{...args}
				label="Email"
				type="email"
				placeholder="john.doe@example.com"
				status="success"
				helperText="Email format is correct"
			/>
			<TextField
				{...args}
				label="Phone"
				type="tel"
				placeholder="+1 (555) 000-0000"
				helperText="Include country code"
			/>
		</div>
	),
	args: {
		variant: "outline",
	},
};

// Interactive Playground
export const Playground: Story = {
	args: {
		label: "Label",
		placeholder: "Type something...",
		helperText: "Helper text goes here",
	},
};
