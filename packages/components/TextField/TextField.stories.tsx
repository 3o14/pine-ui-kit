import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
	title: "Components/TextField",
	component: TextField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "TextField size",
		},
		variant: {
			control: "select",
			options: ["outline", "filled"],
			description: "TextField variant style",
		},
		status: {
			control: "select",
			options: ["default", "error", "success"],
			description: "TextField status state",
		},
		mode: {
			control: "radio",
			options: ["light", "dark"],
			description: "Color mode (theme)",
		},
		fullWidth: {
			control: "boolean",
			description: "Full width field",
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
		},
		error: {
			control: "boolean",
			description: "Error state (overrides status)",
		},
	},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default TextField
export const Default: Story = {
	args: {
		placeholder: "Enter text...",
		size: "md",
		variant: "outline",
		mode: "light",
	},
};

// With Label
export const WithLabel: Story = {
	args: {
		label: "Email Address",
		placeholder: "example@email.com",
		type: "email",
		size: "md",
		variant: "outline",
		mode: "light",
	},
};

// With Helper Text
export const WithHelperText: Story = {
	args: {
		label: "Username",
		placeholder: "johndoe",
		helperText: "Choose a unique username",
		size: "md",
		variant: "outline",
		mode: "light",
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
			<TextField {...args} size="sm" label="Small" placeholder="Small size" />
			<TextField {...args} size="md" label="Medium" placeholder="Medium size" />
			<TextField {...args} size="lg" label="Large" placeholder="Large size" />
		</div>
	),
	args: {
		variant: "outline",
		mode: "light",
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
		size: "md",
		mode: "light",
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
		mode: "light",
	},
};

// Error State
export const Error: Story = {
	args: {
		label: "Password",
		placeholder: "Enter password",
		type: "password",
		error: true,
		helperText: "Password must be at least 8 characters",
		variant: "outline",
		mode: "light",
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
		mode: "light",
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
		mode: "light",
	},
};

// Dark Mode
export const DarkMode: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				padding: "24px",
				backgroundColor: "#0b1120",
				borderRadius: "8px",
				width: "300px",
			}}
		>
			<TextField
				{...args}
				label="Username"
				placeholder="Enter username"
				helperText="Choose a unique username"
			/>
			<TextField
				{...args}
				label="Email"
				type="email"
				placeholder="your@email.com"
				status="success"
				helperText="Email is available"
			/>
			<TextField
				{...args}
				label="Password"
				type="password"
				placeholder="Enter password"
				error
				helperText="Password is too short"
			/>
		</div>
	),
	args: {
		variant: "outline",
		mode: "dark",
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
		mode: "light",
	},
};

// Interactive Playground
export const Playground: Story = {
	args: {
		label: "Label",
		placeholder: "Type something...",
		helperText: "Helper text goes here",
		size: "md",
		variant: "outline",
		status: "default",
		mode: "light",
		disabled: false,
		error: false,
		fullWidth: false,
	},
};
