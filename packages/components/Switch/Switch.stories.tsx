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
				onChange={(e) => setChecked(e.target.checked)}
			/>
		);
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
		disabled: true,
	},
	render: (args) => <Switch {...args} />,
};

// Disabled Checked
export const DisabledChecked: Story = {
	args: {
		checked: true,
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

// Playground
export const Playground: Story = {
	args: {},
	render: function PlaygroundSwitch(args) {
		const [checked, setChecked] = React.useState(args.checked ?? false);
		React.useEffect(() => {
			setChecked(args.checked ?? false);
		}, [args.checked]);
		return (
			<Switch
				{...args}
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
		);
	},
};
