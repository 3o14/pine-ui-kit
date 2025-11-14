import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["solid", "outline", "ghost"],
			description: "Button variant style",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "Button size",
		},
		intent: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
				"neutral",
			],
			description: "Color intent based on design tokens",
		},
		mode: {
			control: "radio",
			options: ["light", "dark"],
			description: "Color mode (theme)",
		},
		fullWidth: {
			control: "boolean",
			description: "Full width button",
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button (default)
export const Primary: Story = {
	args: {
		children: "Primary Button",
		intent: "primary",
		variant: "solid",
		size: "lg",
		mode: "light",
	},
};

// All variants showcase
export const Variants: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Button {...args} variant="solid">
				Solid
			</Button>
			<Button {...args} variant="outline">
				Outline
			</Button>
			<Button {...args} variant="ghost">
				Ghost
			</Button>
		</div>
	),
	args: {
		intent: "primary",
		mode: "light",
	},
};

// All sizes
export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button {...args} size="sm">
				Small
			</Button>
			<Button {...args} size="md">
				Medium
			</Button>
			<Button {...args} size="lg">
				Large
			</Button>
		</div>
	),
	args: {
		intent: "primary",
		variant: "solid",
		mode: "light",
	},
};

// All intents (colors)
export const Intents: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
			<Button {...args} intent="primary">
				Primary
			</Button>
			<Button {...args} intent="secondary">
				Secondary
			</Button>
			<Button {...args} intent="success">
				Success
			</Button>
			<Button {...args} intent="warning">
				Warning
			</Button>
			<Button {...args} intent="danger">
				Danger
			</Button>
			<Button {...args} intent="neutral">
				Neutral
			</Button>
		</div>
	),
	args: {
		variant: "solid",
		mode: "light",
	},
};

// Dark mode showcase
export const DarkMode: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				gap: "12px",
				flexWrap: "wrap",
				padding: "24px",
				backgroundColor: "#0b1120",
				borderRadius: "8px",
			}}
		>
			<Button {...args} intent="primary">
				Primary
			</Button>
			<Button {...args} intent="secondary">
				Secondary
			</Button>
			<Button {...args} intent="success">
				Success
			</Button>
			<Button {...args} intent="warning">
				Warning
			</Button>
			<Button {...args} intent="danger">
				Danger
			</Button>
			<Button {...args} intent="neutral">
				Neutral
			</Button>
		</div>
	),
	args: {
		variant: "solid",
		mode: "dark",
	},
};

// Disabled state
export const Disabled: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px" }}>
			<Button {...args} variant="solid">
				Solid Disabled
			</Button>
			<Button {...args} variant="outline">
				Outline Disabled
			</Button>
			<Button {...args} variant="ghost">
				Ghost Disabled
			</Button>
		</div>
	),
	args: {
		disabled: true,
		intent: "primary",
		mode: "light",
	},
};

// Full width
export const FullWidth: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<Button {...args}>Full Width Button</Button>
		</div>
	),
	args: {
		fullWidth: true,
		intent: "primary",
		variant: "solid",
		mode: "light",
	},
};

// Interactive playground
export const Playground: Story = {
	args: {
		children: "Click me!",
		intent: "primary",
		variant: "solid",
		size: "md",
		mode: "light",
		disabled: false,
		fullWidth: false,
	},
};
