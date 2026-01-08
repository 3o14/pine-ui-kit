import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

const meta = {
	title: "Components/Tab",
	component: Tab,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
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
		},
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
	},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs = [
	{
		value: "tab1",
		label: "Tab 1",
		content: <div>Content for Tab 1. This is a sample content panel.</div>,
	},
	{
		value: "tab2",
		label: "Tab 2",
		content: (
			<div>Content for Tab 2. This is another sample content panel.</div>
		),
	},
	{
		value: "tab3",
		label: "Tab 3",
		content: <div>Content for Tab 3. This is the third content panel.</div>,
	},
];

export const Default: Story = {
	args: {
		tabs: sampleTabs,
		defaultValue: "tab1",
	},
};

export const Intents: Story = {
	args: {
		tabs: sampleTabs,
		defaultValue: "tab1",
	},
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="primary" />
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="secondary" />
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="success" />
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="warning" />
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="danger" />
			<Tab tabs={sampleTabs} defaultValue="tab1" intent="neutral" />
		</div>
	),
};

export const Vertical: Story = {
	args: {
		tabs: sampleTabs,
		defaultValue: "tab1",
		orientation: "vertical",
	},
};

export const WithDisabledTab: Story = {
	args: {
		tabs: [
			...sampleTabs,
			{
				value: "tab4",
				label: "Disabled Tab",
				content: <div>This tab is disabled</div>,
				disabled: true,
			},
		],
		defaultValue: "tab1",
	},
};

export const RichContent: Story = {
	args: {
		tabs: [
			{
				value: "profile",
				label: "👤 Profile",
				content: (
					<div style={{ padding: "1rem" }}>
						<h3>User Profile</h3>
						<p>Name: John Doe</p>
						<p>Email: john@example.com</p>
					</div>
				),
			},
			{
				value: "settings",
				label: "⚙️ Settings",
				content: (
					<div style={{ padding: "1rem" }}>
						<h3>Settings</h3>
						<p>Theme: Light</p>
						<p>Language: English</p>
					</div>
				),
			},
			{
				value: "notifications",
				label: "🔔 Notifications",
				content: (
					<div style={{ padding: "1rem" }}>
						<h3>Notifications</h3>
						<p>You have 3 new notifications</p>
					</div>
				),
			},
		],
		defaultValue: "profile",
	},
};
