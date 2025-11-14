import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
	title: "Components/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "스위치 크기",
			table: {
				type: { summary: "SwitchSize" },
				defaultValue: { summary: "md" },
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
		mode: {
			control: "select",
			options: ["light", "dark"],
			description: "테마 모드",
			table: {
				type: { summary: '"light" | "dark"' },
				defaultValue: { summary: "light" },
			},
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (Uncontrolled)
export const Default: Story = {
	args: {
		label: "Default Switch (Uncontrolled)",
	},
};

// Checked (ON)
export const Checked: Story = {
	args: {
		label: "Switch ON",
		checked: true,
	},
};

// Uncontrolled (내부 상태 관리)
export const Uncontrolled: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<p>
				<strong>Uncontrolled 모드:</strong> checked prop 없이 사용하면 내부에서
				상태를 관리합니다.
			</p>
			<Switch label="알림 받기" />
			<Switch label="자동 저장" intent="success" />
			<Switch label="다크 모드" intent="neutral" />
		</div>
	),
};

// Without Label
export const WithoutLabel: Story = {
	args: {},
};

// Disabled
export const Disabled: Story = {
	args: {
		label: "Disabled Switch",
		disabled: true,
	},
};

// Disabled Checked
export const DisabledChecked: Story = {
	args: {
		label: "Disabled Switch (ON)",
		checked: true,
		disabled: true,
	},
};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Switch size="sm" label="Small (36x18px)" checked />
			<Switch size="md" label="Medium (48x24px)" checked />
			<Switch size="lg" label="Large (60x30px)" checked />
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
				<Switch size="sm" intent="primary" label="Primary" checked />
				<Switch size="sm" intent="secondary" label="Secondary" checked />
				<Switch size="sm" intent="success" label="Success" checked />
				<Switch size="sm" intent="warning" label="Warning" checked />
				<Switch size="sm" intent="danger" label="Danger" checked />
				<Switch size="sm" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<Switch size="md" intent="primary" label="Primary" checked />
				<Switch size="md" intent="secondary" label="Secondary" checked />
				<Switch size="md" intent="success" label="Success" checked />
				<Switch size="md" intent="warning" label="Warning" checked />
				<Switch size="md" intent="danger" label="Danger" checked />
				<Switch size="md" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<Switch size="lg" intent="primary" label="Primary" checked />
				<Switch size="lg" intent="secondary" label="Secondary" checked />
				<Switch size="lg" intent="success" label="Success" checked />
				<Switch size="lg" intent="warning" label="Warning" checked />
				<Switch size="lg" intent="danger" label="Danger" checked />
				<Switch size="lg" intent="neutral" label="Neutral" checked />
			</div>
		</div>
	),
};

// Interactive States
export const InteractiveStates: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>OFF State</h4>
				<Switch label="Click to turn ON" />
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>ON State</h4>
				<Switch label="Click to turn OFF" checked />
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Disabled</h4>
				<Switch label="Disabled OFF" disabled />
				<br />
				<Switch label="Disabled ON" checked disabled />
			</div>
		</div>
	),
};

// Dark Mode
export const DarkMode: Story = {
	render: () => (
		<div
			style={{
				backgroundColor: "#1a1a1a",
				padding: "2rem",
				borderRadius: "8px",
			}}
		>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<Switch mode="dark" label="Primary (Dark)" intent="primary" checked />
				<Switch
					mode="dark"
					label="Secondary (Dark)"
					intent="secondary"
					checked
				/>
				<Switch mode="dark" label="Success (Dark)" intent="success" checked />
				<Switch mode="dark" label="Warning (Dark)" intent="warning" checked />
				<Switch mode="dark" label="Danger (Dark)" intent="danger" checked />
				<Switch mode="dark" label="Neutral (Dark)" intent="neutral" checked />
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

// Controlled Component Example
export const ControlledExample: Story = {
	render: function ControlledSwitch() {
		const [checked, setChecked] = React.useState(false);

		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<Switch
					label="Toggle me"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<p>Current state: {checked ? "🟢 ON" : "⚪ OFF"}</p>
				<button
					type="button"
					onClick={() => setChecked(!checked)}
					style={{
						padding: "0.5rem 1rem",
						cursor: "pointer",
						borderRadius: "4px",
						border: "1px solid #ddd",
					}}
				>
					Toggle Programmatically
				</button>
			</div>
		);
	},
};
