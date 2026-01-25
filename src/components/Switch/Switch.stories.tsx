import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
	title: "Input/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		size: "medium",
		intent: "primary",
		checked: false,
		disabled: false,
		label: "Switch Label",
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "스위치 크기",
			table: {
				type: { summary: "SwitchSize" },
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
			description: "스위치 색상 테마",
			table: {
				type: { summary: "SwitchIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "스위치 옆에 표시할 레이블",
			table: {
				type: { summary: "string" },
			},
		},
		checked: {
			control: "boolean",
			description: "ON/OFF 상태",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			control: "boolean",
			description: "비활성화 상태",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (Uncontrolled)
export const Default: Story = {
	render: (args) => {
		return <Switch {...args} />;
	},
};

// Checked (ON)
export const Checked: Story = {
	args: {
		checked: true,
	},
	render: function CheckedSwitch(args) {
		const [checked, setChecked] = React.useState(args.checked ?? false);
		React.useEffect(() => {
			setChecked(args.checked ?? false);
		}, [args.checked]);
		return (
			<Switch
				{...args}
				checked={checked}
				onCheckedChange={(checked) => setChecked(checked)}
			/>
		);
	},
};

// Disabled
export const Disabled: Story = {
	args: {
		disabled: true,
	},
	render: (args) => <Switch {...args} />,
};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Switch size="small" label="Small" checked />
			<Switch size="medium" label="Medium" checked />
			<Switch size="large" label="Large" checked />
			<Switch size="xlarge" label="XLarge" checked />
		</div>
	),
};

// Intents (Colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Switch intent="primary" label="Primary" checked />
			<Switch intent="secondary" label="Secondary" checked />
			<Switch intent="success" label="Success" checked />
			<Switch intent="warning" label="Warning" checked />
			<Switch intent="danger" label="Danger" checked />
			<Switch intent="neutral" label="Neutral" checked />
		</div>
	),
};

// All Sizes with All Intents
export const SizesAndIntents: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "2rem" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
				<Switch size="small" intent="primary" label="Primary" checked />
				<Switch size="small" intent="secondary" label="Secondary" checked />
				<Switch size="small" intent="success" label="Success" checked />
				<Switch size="small" intent="warning" label="Warning" checked />
				<Switch size="small" intent="danger" label="Danger" checked />
				<Switch size="small" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<Switch size="medium" intent="primary" label="Primary" checked />
				<Switch size="medium" intent="secondary" label="Secondary" checked />
				<Switch size="medium" intent="success" label="Success" checked />
				<Switch size="medium" intent="warning" label="Warning" checked />
				<Switch size="medium" intent="danger" label="Danger" checked />
				<Switch size="medium" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<Switch size="large" intent="primary" label="Primary" checked />
				<Switch size="large" intent="secondary" label="Secondary" checked />
				<Switch size="large" intent="success" label="Success" checked />
				<Switch size="large" intent="warning" label="Warning" checked />
				<Switch size="large" intent="danger" label="Danger" checked />
				<Switch size="large" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>XLarge</h4>
				<Switch size="xlarge" intent="primary" label="Primary" checked />
				<Switch size="xlarge" intent="secondary" label="Secondary" checked />
				<Switch size="xlarge" intent="success" label="Success" checked />
				<Switch size="xlarge" intent="warning" label="Warning" checked />
				<Switch size="xlarge" intent="danger" label="Danger" checked />
				<Switch size="xlarge" intent="neutral" label="Neutral" checked />
			</div>
		</div>
	),
};

// Settings Example
export const SettingsExample: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1.5rem",
				maxWidth: "400px",
				padding: "1.5rem",
				border: "1px solid #e0e0e0",
				borderRadius: "8px",
			}}
		>
			<h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Settings</h3>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<strong>Push Notifications</strong>
					<p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
						Receive push notifications
					</p>
				</div>
				<Switch intent="primary" />
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<strong>Email Notifications</strong>
					<p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
						Receive email updates
					</p>
				</div>
				<Switch intent="primary" checked />
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<strong>Auto Save</strong>
					<p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
						Automatically save your work
					</p>
				</div>
				<Switch intent="success" checked />
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<strong>Dark Mode</strong>
					<p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
						Use dark theme
					</p>
				</div>
				<Switch intent="neutral" />
			</div>
		</div>
	),
};