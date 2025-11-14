import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "체크박스 크기",
			table: {
				type: { summary: "CheckboxSize" },
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
			description: "체크박스 색상 테마",
			table: {
				type: { summary: "CheckboxIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "체크박스 옆에 표시할 레이블",
			table: {
				type: { summary: "string" },
			},
		},
		checked: {
			control: "boolean",
			description: "체크 상태",
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (Uncontrolled - 클릭하면 자동으로 토글됨)
export const Default: Story = {
	args: {
		label: "Default Checkbox (Uncontrolled)",
	},
};

// Checked (Controlled)
export const Checked: Story = {
	args: {
		label: "Checked Checkbox (Controlled)",
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
			<Checkbox label="그냥 클릭해보세요! (상태 자동 관리)" />
			<Checkbox label="이것도 클릭해보세요!" intent="success" />
			<Checkbox label="체크박스 여러 개" intent="warning" />
		</div>
	),
};

// Without Label
export const WithoutLabel: Story = {
	args: {
		checked: false,
	},
};

// Disabled
export const Disabled: Story = {
	args: {
		label: "Disabled Checkbox",
		checked: false,
		disabled: true,
	},
};

// Disabled Checked
export const DisabledChecked: Story = {
	args: {
		label: "Disabled Checked",
		checked: true,
		disabled: true,
	},
};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Checkbox size="sm" label="Small (16px)" checked />
			<Checkbox size="md" label="Medium (20px)" checked />
			<Checkbox size="lg" label="Large (24px)" checked />
		</div>
	),
};

// Intents (Colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Checkbox intent="primary" label="Primary" checked />
			<Checkbox intent="secondary" label="Secondary" checked />
			<Checkbox intent="success" label="Success" checked />
			<Checkbox intent="warning" label="Warning" checked />
			<Checkbox intent="danger" label="Danger" checked />
			<Checkbox intent="neutral" label="Neutral" checked />
		</div>
	),
};

// All Sizes with All Intents
export const SizesAndIntents: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "2rem" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
				<Checkbox size="sm" intent="primary" label="Primary" checked />
				<Checkbox size="sm" intent="secondary" label="Secondary" checked />
				<Checkbox size="sm" intent="success" label="Success" checked />
				<Checkbox size="sm" intent="warning" label="Warning" checked />
				<Checkbox size="sm" intent="danger" label="Danger" checked />
				<Checkbox size="sm" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<Checkbox size="md" intent="primary" label="Primary" checked />
				<Checkbox size="md" intent="secondary" label="Secondary" checked />
				<Checkbox size="md" intent="success" label="Success" checked />
				<Checkbox size="md" intent="warning" label="Warning" checked />
				<Checkbox size="md" intent="danger" label="Danger" checked />
				<Checkbox size="md" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<Checkbox size="lg" intent="primary" label="Primary" checked />
				<Checkbox size="lg" intent="secondary" label="Secondary" checked />
				<Checkbox size="lg" intent="success" label="Success" checked />
				<Checkbox size="lg" intent="warning" label="Warning" checked />
				<Checkbox size="lg" intent="danger" label="Danger" checked />
				<Checkbox size="lg" intent="neutral" label="Neutral" checked />
			</div>
		</div>
	),
};

// Interactive States
export const InteractiveStates: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Unchecked</h4>
				<Checkbox label="Hover me" checked={false} />
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Checked</h4>
				<Checkbox label="Hover me" checked={true} />
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Disabled</h4>
				<Checkbox label="Disabled unchecked" checked={false} disabled />
				<br />
				<Checkbox label="Disabled checked" checked={true} disabled />
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
				<Checkbox mode="dark" label="Primary (Dark)" intent="primary" checked />
				<Checkbox
					mode="dark"
					label="Secondary (Dark)"
					intent="secondary"
					checked
				/>
				<Checkbox mode="dark" label="Success (Dark)" intent="success" checked />
				<Checkbox mode="dark" label="Warning (Dark)" intent="warning" checked />
				<Checkbox mode="dark" label="Danger (Dark)" intent="danger" checked />
				<Checkbox mode="dark" label="Neutral (Dark)" intent="neutral" checked />
			</div>
		</div>
	),
};

// Form Example
export const FormExample: Story = {
	render: () => (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				maxWidth: "300px",
			}}
		>
			<fieldset style={{ border: "none", padding: 0, margin: 0 }}>
				<legend style={{ marginBottom: "1rem", fontWeight: "bold" }}>
					Select your interests:
				</legend>
				<Checkbox label="Web Development" />
				<Checkbox label="Mobile Development" />
				<Checkbox label="UI/UX Design" checked />
				<Checkbox label="Backend Development" />
				<Checkbox label="DevOps" />
			</fieldset>
		</form>
	),
};

// Controlled Component Example
export const ControlledExample: Story = {
	render: function ControlledCheckbox() {
		const [checked, setChecked] = React.useState(false);

		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<Checkbox
					label="Toggle me"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<p>Current state: {checked ? "✅ Checked" : "⬜ Unchecked"}</p>
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
