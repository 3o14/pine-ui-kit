import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Button",
		variant: "solid",
		size: "medium",
		intent: "primary",
		rounded: "medium",
		fullWidth: false,
		disabled: false,
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["solid", "outline", "ghost", "weak"],
			description: "Button variant style",
			table: {
				type: { summary: "ButtonVariant" },
				defaultValue: { summary: "solid" },
			},
		},
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "Button size",
			table: {
				type: { summary: "ButtonSize" },
				defaultValue: { summary: "medium" },
			},
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
			table: {
				type: { summary: "ButtonIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Button 둥근 모서리 크기",
			table: {
				type: { summary: "ButtonRounded" },
			},
		},
		fullWidth: {
			control: "boolean",
			description: "Full width button",
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button (default)
export const Primary: Story = {
	args: {
		children: "Primary Button",
		intent: "primary",
		variant: "solid",
		size: "medium",
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
			<Button {...args} variant="weak">
				Weak
			</Button>
		</div>
	),
	args: {
		intent: "primary",
	},
};

// All sizes
export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button {...args} size="small">
				Small
			</Button>
			<Button {...args} size="medium">
				Medium
			</Button>
			<Button {...args} size="large">
				Large
			</Button>
			<Button {...args} size="xlarge">
				XLarge
			</Button>
		</div>
	),
	args: {
		intent: "primary",
		variant: "solid",
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
	},
};

// Rounded (Pill Shape)
export const Rounded: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="small">Small</Button>
					<Button rounded="small" intent="primary">
						Primary
					</Button>
					<Button rounded="small" intent="success">
						Success
					</Button>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="medium">Medium</Button>
					<Button rounded="medium" intent="primary">
						Primary
					</Button>
					<Button rounded="medium" intent="success">
						Success
					</Button>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="large">Large</Button>
					<Button rounded="large" intent="primary">
						Primary
					</Button>
					<Button rounded="large" intent="success">
						Success
					</Button>
				</div>
			</div>
		</div>
	),
};

// Interactive playground
export const Playground: Story = {
	args: {
		children: "Click me!",
		intent: "primary",
		variant: "solid",
		size: "medium",
		rounded: "medium",
		disabled: false,
		fullWidth: false,
	},
};
