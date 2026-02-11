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
	render: () => {
		return <Switch />;
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
			<Switch size="small" label="Small" defaultChecked />
			<Switch size="medium" label="Medium" defaultChecked />
			<Switch size="large" label="Large" defaultChecked />
			<Switch size="xlarge" label="XLarge" defaultChecked />
		</div>
	),
};

// Intents (Colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Switch intent="primary" label="Primary" defaultChecked />
			<Switch intent="secondary" label="Secondary" defaultChecked />
			<Switch intent="success" label="Success" defaultChecked />
			<Switch intent="warning" label="Warning" defaultChecked />
			<Switch intent="danger" label="Danger" defaultChecked />
			<Switch intent="neutral" label="Neutral" defaultChecked />
		</div>
	),
};