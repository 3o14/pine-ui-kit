import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		size: "medium",
		variant: "square",
		intent: "primary",
		checked: false,
		disabled: false,
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "체크박스 크기",
			table: {
				type: { summary: "CheckboxSize" },
				defaultValue: { summary: "medium" },
			},
		},
		variant: {
			control: "select",
			options: ["circle", "square"],
			description: "체크박스 모양 (동그라미/네모)",
			table: {
				type: { summary: "CheckboxVariant" },
				defaultValue: { summary: "square" },
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
			<Checkbox size="small" label="Small (16px)" checked />
			<Checkbox size="medium" label="Medium (20px)" checked />
			<Checkbox size="large" label="Large (24px)" checked />
			<Checkbox size="xlarge" label="XLarge (28px)" checked />
		</div>
	),
};

// Variants
export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Checkbox
				variant="square"
				intent="primary"
				label="Square Primary"
				checked
			/>
			<Checkbox variant="circle" intent="primary" label="Circle Primary" checked />
			<Checkbox
				variant="square"
				intent="success"
				label="Square Success"
				checked
			/>
			<Checkbox variant="circle" intent="success" label="Circle Success" checked />
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
				<Checkbox size="small" intent="primary" label="Primary" checked />
				<Checkbox size="small" intent="secondary" label="Secondary" checked />
				<Checkbox size="small" intent="success" label="Success" checked />
				<Checkbox size="small" intent="warning" label="Warning" checked />
				<Checkbox size="small" intent="danger" label="Danger" checked />
				<Checkbox size="small" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<Checkbox size="medium" intent="primary" label="Primary" checked />
				<Checkbox size="medium" intent="secondary" label="Secondary" checked />
				<Checkbox size="medium" intent="success" label="Success" checked />
				<Checkbox size="medium" intent="warning" label="Warning" checked />
				<Checkbox size="medium" intent="danger" label="Danger" checked />
				<Checkbox size="medium" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<Checkbox size="large" intent="primary" label="Primary" checked />
				<Checkbox size="large" intent="secondary" label="Secondary" checked />
				<Checkbox size="large" intent="success" label="Success" checked />
				<Checkbox size="large" intent="warning" label="Warning" checked />
				<Checkbox size="large" intent="danger" label="Danger" checked />
				<Checkbox size="large" intent="neutral" label="Neutral" checked />
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>XLarge</h4>
				<Checkbox size="xlarge" intent="primary" label="Primary" checked />
				<Checkbox size="xlarge" intent="secondary" label="Secondary" checked />
				<Checkbox size="xlarge" intent="success" label="Success" checked />
				<Checkbox size="xlarge" intent="warning" label="Warning" checked />
				<Checkbox size="xlarge" intent="danger" label="Danger" checked />
				<Checkbox size="xlarge" intent="neutral" label="Neutral" checked />
			</div>
		</div>
	),
};

// Variants and Intents
export const VariantsAndIntents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Square</h4>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
				>
					<Checkbox variant="square" intent="primary" label="Primary" checked />
					<Checkbox
						variant="square"
						intent="secondary"
						label="Secondary"
						checked
					/>
					<Checkbox variant="square" intent="success" label="Success" checked />
					<Checkbox variant="square" intent="warning" label="Warning" checked />
					<Checkbox variant="square" intent="danger" label="Danger" checked />
					<Checkbox variant="square" intent="neutral" label="Neutral" checked />
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Circle</h4>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
				>
					<Checkbox variant="circle" intent="primary" label="Primary" checked />
					<Checkbox
						variant="circle"
						intent="secondary"
						label="Secondary"
						checked
					/>
					<Checkbox variant="circle" intent="success" label="Success" checked />
					<Checkbox variant="circle" intent="warning" label="Warning" checked />
					<Checkbox variant="circle" intent="danger" label="Danger" checked />
					<Checkbox variant="circle" intent="neutral" label="Neutral" checked />
				</div>
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
