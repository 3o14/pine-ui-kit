import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
	title: "Display & Feedback/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Badge",
		size: "medium",
		variant: "solid",
		intent: "primary",
		rounded: "medium",
		showDot: false,
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "Badge 크기",
			table: {
				type: { summary: "BadgeSize" },
				defaultValue: { summary: "medium" },
			},
		},
		variant: {
			control: "select",
			options: ["solid", "outline", "subtle", "weak"],
			description: "Badge 스타일 variant",
			table: {
				type: { summary: "BadgeVariant" },
				defaultValue: { summary: "solid" },
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
			description: "Badge 색상 테마",
			table: {
				type: { summary: "BadgeIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description:
				"Badge 둥근 모서리 크기 (game 테마에서는 적용 불가 - 모든 radius가 0)",
			table: {
				type: { summary: "BadgeRounded" },
			},
		},
		showDot: {
			control: "boolean",
			description: "앞에 dot 표시",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
	args: {
		children: "Badge",
	},
};

// Sizes
export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
			<Badge {...args} size="small">
				Small
			</Badge>
			<Badge {...args} size="medium">
				Medium
			</Badge>
			<Badge {...args} size="large">
				Large
			</Badge>
			<Badge {...args} size="xlarge">
				XLarge
			</Badge>
		</div>
	),
};

// Variants
export const Variants: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
				<Badge {...args} variant="solid">
					Solid
				</Badge>
				<Badge {...args} variant="outline">
					Outline
				</Badge>
				<Badge {...args} variant="subtle">
					Subtle
				</Badge>
				<Badge {...args} variant="weak">
					Weak
				</Badge>
			</div>
		</div>
	),
};

// Intents (Colors)
export const Intents: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge {...args} intent="primary">
				Primary
			</Badge>
			<Badge {...args} intent="secondary">
				Secondary
			</Badge>
			<Badge {...args} intent="success">
				Success
			</Badge>
			<Badge {...args} intent="warning">
				Warning
			</Badge>
			<Badge {...args} intent="danger">
				Danger
			</Badge>
			<Badge {...args} intent="neutral">
				Neutral
			</Badge>
		</div>
	),
};

// All Variants with All Intents
export const VariantsAndIntents: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Solid</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} variant="solid" intent="primary">
						Primary
					</Badge>
					<Badge {...args} variant="solid" intent="secondary">
						Secondary
					</Badge>
					<Badge {...args} variant="solid" intent="success">
						Success
					</Badge>
					<Badge {...args} variant="solid" intent="warning">
						Warning
					</Badge>
					<Badge {...args} variant="solid" intent="danger">
						Danger
					</Badge>
					<Badge {...args} variant="solid" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>

			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Outline</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} variant="outline" intent="primary">
						Primary
					</Badge>
					<Badge {...args} variant="outline" intent="secondary">
						Secondary
					</Badge>
					<Badge {...args} variant="outline" intent="success">
						Success
					</Badge>
					<Badge {...args} variant="outline" intent="warning">
						Warning
					</Badge>
					<Badge {...args} variant="outline" intent="danger">
						Danger
					</Badge>
					<Badge {...args} variant="outline" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>

			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Subtle</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} variant="subtle" intent="primary">
						Primary
					</Badge>
					<Badge {...args} variant="subtle" intent="secondary">
						Secondary
					</Badge>
					<Badge {...args} variant="subtle" intent="success">
						Success
					</Badge>
					<Badge {...args} variant="subtle" intent="warning">
						Warning
					</Badge>
					<Badge {...args} variant="subtle" intent="danger">
						Danger
					</Badge>
					<Badge {...args} variant="subtle" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>

			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Weak</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} variant="weak" intent="primary">
						Primary
					</Badge>
					<Badge {...args} variant="weak" intent="secondary">
						Secondary
					</Badge>
					<Badge {...args} variant="weak" intent="success">
						Success
					</Badge>
					<Badge {...args} variant="weak" intent="warning">
						Warning
					</Badge>
					<Badge {...args} variant="weak" intent="danger">
						Danger
					</Badge>
					<Badge {...args} variant="weak" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>
		</div>
	),
};

// Rounded (Pill Shape)
export const Rounded: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} rounded="small">
						Small
					</Badge>
					<Badge {...args} rounded="small" intent="primary">
						Primary
					</Badge>
					<Badge {...args} rounded="small" intent="success">
						Success
					</Badge>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} rounded="medium">
						Medium
					</Badge>
					<Badge {...args} rounded="medium" intent="primary">
						Primary
					</Badge>
					<Badge {...args} rounded="medium" intent="success">
						Success
					</Badge>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} rounded="large">
						Large
					</Badge>
					<Badge {...args} rounded="large" intent="primary">
						Primary
					</Badge>
					<Badge {...args} rounded="large" intent="success">
						Success
					</Badge>
				</div>
			</div>
		</div>
	),
};

// With Dot
export const WithDot: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge {...args} showDot intent="primary">
				Online
			</Badge>
			<Badge {...args} showDot intent="success">
				Available
			</Badge>
			<Badge {...args} showDot intent="warning">
				Away
			</Badge>
			<Badge {...args} showDot intent="danger">
				Offline
			</Badge>
			<Badge {...args} showDot intent="neutral">
				Idle
			</Badge>
		</div>
	),
};

// Status Badges
export const StatusBadges: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge
				{...args}
				variant="subtle"
				intent="success"
				showDot
				rounded="large"
			>
				Active
			</Badge>
			<Badge
				{...args}
				variant="subtle"
				intent="warning"
				showDot
				rounded="large"
			>
				Pending
			</Badge>
			<Badge {...args} variant="subtle" intent="danger" showDot rounded="large">
				Inactive
			</Badge>
			<Badge
				{...args}
				variant="subtle"
				intent="primary"
				showDot
				rounded="large"
			>
				In Progress
			</Badge>
		</div>
	),
};

// Use Cases
export const UseCases: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			{/* Notifications */}
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Notifications</h4>
				<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
					<div style={{ position: "relative", display: "inline-block" }}>
						<span style={{ fontSize: "1.5rem" }}>🔔</span>
						<Badge
							{...args}
							size="small"
							intent="danger"
							rounded="large"
							style={{ position: "absolute", top: -5, right: -10 }}
						>
							3
						</Badge>
					</div>
					<div style={{ position: "relative", display: "inline-block" }}>
						<span style={{ fontSize: "1.5rem" }}>💬</span>
						<Badge
							{...args}
							size="small"
							intent="primary"
							rounded="large"
							style={{ position: "absolute", top: -5, right: -10 }}
						>
							12
						</Badge>
					</div>
				</div>
			</div>

			{/* Tags */}
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Tags</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge {...args} variant="subtle" intent="primary">
						React
					</Badge>
					<Badge {...args} variant="subtle" intent="secondary">
						TypeScript
					</Badge>
					<Badge {...args} variant="subtle" intent="success">
						Vite
					</Badge>
					<Badge {...args} variant="subtle" intent="neutral">
						Storybook
					</Badge>
				</div>
			</div>

			{/* User Status */}
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>User Status</h4>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
				>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>John Doe</span>
						<Badge
							{...args}
							size="small"
							variant="subtle"
							intent="success"
							showDot
						>
							Online
						</Badge>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>Jane Smith</span>
						<Badge
							{...args}
							size="small"
							variant="subtle"
							intent="warning"
							showDot
						>
							Away
						</Badge>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>Bob Johnson</span>
						<Badge
							{...args}
							size="small"
							variant="subtle"
							intent="neutral"
							showDot
						>
							Offline
						</Badge>
					</div>
				</div>
			</div>
		</div>
	),
};
