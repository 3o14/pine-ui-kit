import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		side: {
			control: "select",
			options: ["top", "right", "bottom", "left"],
		},
		align: {
			control: "select",
			options: ["start", "center", "end"],
		},
		intent: {
			control: "select",
			options: ["primary", "secondary", "success", "warning", "danger", "neutral"],
		},
		sideOffset: {
			control: "number",
		},
		alignOffset: {
			control: "number",
		},
		delay: {
			control: "number",
		},
		showArrow: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "This is a tooltip",
		children: <Button>Hover me</Button>,
	},
};

export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
			<Tooltip content="Primary tooltip" intent="primary">
				<Button intent="primary">Primary</Button>
			</Tooltip>
			<Tooltip content="Secondary tooltip" intent="secondary">
				<Button intent="secondary">Secondary</Button>
			</Tooltip>
			<Tooltip content="Success tooltip" intent="success">
				<Button intent="success">Success</Button>
			</Tooltip>
			<Tooltip content="Warning tooltip" intent="warning">
				<Button intent="warning">Warning</Button>
			</Tooltip>
			<Tooltip content="Danger tooltip" intent="danger">
				<Button intent="danger">Danger</Button>
			</Tooltip>
			<Tooltip content="Neutral tooltip" intent="neutral">
				<Button intent="neutral">Neutral</Button>
			</Tooltip>
		</div>
	),
};

export const Sides: Story = {
	render: () => (
		<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3rem", padding: "3rem" }}>
			<Tooltip content="Top tooltip" side="top">
				<Button>Top</Button>
			</Tooltip>
			<Tooltip content="Right tooltip" side="right">
				<Button>Right</Button>
			</Tooltip>
			<Tooltip content="Bottom tooltip" side="bottom">
				<Button>Bottom</Button>
			</Tooltip>
			<Tooltip content="Left tooltip" side="left">
				<Button>Left</Button>
			</Tooltip>
		</div>
	),
};

export const Alignments: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "center", padding: "3rem" }}>
			<Tooltip content="Start aligned" side="top" align="start">
				<Button>Align Start</Button>
			</Tooltip>
			<Tooltip content="Center aligned" side="top" align="center">
				<Button>Align Center</Button>
			</Tooltip>
			<Tooltip content="End aligned" side="top" align="end">
				<Button>Align End</Button>
			</Tooltip>
		</div>
	),
};

export const WithoutArrow: Story = {
	args: {
		content: "Tooltip without arrow",
		showArrow: false,
		children: <Button>No Arrow</Button>,
	},
};

export const LongContent: Story = {
	args: {
		content: "This is a very long tooltip that contains a lot of text to demonstrate how the tooltip handles longer content. It should wrap nicely and remain readable.",
		children: <Button>Long Tooltip</Button>,
	},
};


export const Disabled: Story = {
	args: {
		content: "This tooltip is disabled",
		disabled: true,
		children: <Button>Disabled Tooltip</Button>,
	},
};

export const WithIcon: Story = {
	render: () => (
		<Tooltip content="Click to copy">
			<button
				style={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: "40px",
					height: "40px",
					border: "1px solid #ddd",
					borderRadius: "4px",
					backgroundColor: "#fff",
					cursor: "pointer",
				}}
			>
				📋
			</button>
		</Tooltip>
	),
};

export const Interactive: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", padding: "3rem" }}>
			<Tooltip content="Edit this item" intent="primary">
				<Button size="small">✏️</Button>
			</Tooltip>
			<Tooltip content="Delete this item" intent="danger">
				<Button size="small" intent="danger">🗑️</Button>
			</Tooltip>
			<Tooltip content="Share this item" intent="success">
				<Button size="small" intent="success">📤</Button>
			</Tooltip>
		</div>
	),
};

