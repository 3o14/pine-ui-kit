import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
	title: "Components/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Badge",
	},
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "Badge 크기",
			table: {
				type: { summary: "BadgeSize" },
				defaultValue: { summary: "md" },
			},
		},
		variant: {
			control: "select",
			options: ["solid", "outline", "subtle"],
			description: "Badge 스타일 variant",
			table: {
				type: { summary: "BadgeVariant" },
				defaultValue: { summary: "solid" },
			},
		},
		intent: {
			control: "select",
			options: ["primary", "secondary", "success", "warning", "danger", "neutral"],
			description: "Badge 색상 테마",
			table: {
				type: { summary: "BadgeIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		rounded: {
			control: "boolean",
			description: "완전히 둥근 모양 (pill 형태)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
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
	render: () => (
		<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
			<Badge size="sm">Small</Badge>
			<Badge size="md">Medium</Badge>
			<Badge size="lg">Large</Badge>
		</div>
	),
};

// Variants
export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
				<Badge variant="solid">Solid</Badge>
				<Badge variant="outline">Outline</Badge>
				<Badge variant="subtle">Subtle</Badge>
			</div>
		</div>
	),
};

// Intents (Colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge intent="primary">Primary</Badge>
			<Badge intent="secondary">Secondary</Badge>
			<Badge intent="success">Success</Badge>
			<Badge intent="warning">Warning</Badge>
			<Badge intent="danger">Danger</Badge>
			<Badge intent="neutral">Neutral</Badge>
		</div>
	),
};

// All Variants with All Intents
export const VariantsAndIntents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Solid</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge variant="solid" intent="primary">
						Primary
					</Badge>
					<Badge variant="solid" intent="secondary">
						Secondary
					</Badge>
					<Badge variant="solid" intent="success">
						Success
					</Badge>
					<Badge variant="solid" intent="warning">
						Warning
					</Badge>
					<Badge variant="solid" intent="danger">
						Danger
					</Badge>
					<Badge variant="solid" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>

			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Outline</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge variant="outline" intent="primary">
						Primary
					</Badge>
					<Badge variant="outline" intent="secondary">
						Secondary
					</Badge>
					<Badge variant="outline" intent="success">
						Success
					</Badge>
					<Badge variant="outline" intent="warning">
						Warning
					</Badge>
					<Badge variant="outline" intent="danger">
						Danger
					</Badge>
					<Badge variant="outline" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>

			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Subtle</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge variant="subtle" intent="primary">
						Primary
					</Badge>
					<Badge variant="subtle" intent="secondary">
						Secondary
					</Badge>
					<Badge variant="subtle" intent="success">
						Success
					</Badge>
					<Badge variant="subtle" intent="warning">
						Warning
					</Badge>
					<Badge variant="subtle" intent="danger">
						Danger
					</Badge>
					<Badge variant="subtle" intent="neutral">
						Neutral
					</Badge>
				</div>
			</div>
		</div>
	),
};

// Rounded (Pill Shape)
export const Rounded: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge rounded>Default</Badge>
			<Badge rounded intent="primary">
				Primary
			</Badge>
			<Badge rounded intent="success">
				Success
			</Badge>
			<Badge rounded intent="warning">
				Warning
			</Badge>
			<Badge rounded intent="danger">
				Danger
			</Badge>
		</div>
	),
};

// With Dot
export const WithDot: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge showDot intent="primary">
				Online
			</Badge>
			<Badge showDot intent="success">
				Available
			</Badge>
			<Badge showDot intent="warning">
				Away
			</Badge>
			<Badge showDot intent="danger">
				Offline
			</Badge>
			<Badge showDot intent="neutral">
				Idle
			</Badge>
		</div>
	),
};

// Status Badges
export const StatusBadges: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<Badge variant="subtle" intent="success" showDot rounded>
				Active
			</Badge>
			<Badge variant="subtle" intent="warning" showDot rounded>
				Pending
			</Badge>
			<Badge variant="subtle" intent="danger" showDot rounded>
				Inactive
			</Badge>
			<Badge variant="subtle" intent="primary" showDot rounded>
				In Progress
			</Badge>
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
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge mode="dark" intent="primary">
						Primary
					</Badge>
					<Badge mode="dark" intent="secondary">
						Secondary
					</Badge>
					<Badge mode="dark" intent="success">
						Success
					</Badge>
					<Badge mode="dark" intent="warning">
						Warning
					</Badge>
					<Badge mode="dark" intent="danger">
						Danger
					</Badge>
				</div>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Badge mode="dark" variant="outline" intent="primary">
						Outline
					</Badge>
					<Badge mode="dark" variant="subtle" intent="success">
						Subtle
					</Badge>
					<Badge mode="dark" showDot intent="primary" rounded>
						With Dot
					</Badge>
				</div>
			</div>
		</div>
	),
};

// Use Cases
export const UseCases: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			{/* Notifications */}
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Notifications</h4>
				<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
					<div style={{ position: "relative", display: "inline-block" }}>
						<span style={{ fontSize: "1.5rem" }}>🔔</span>
						<Badge
							size="sm"
							intent="danger"
							rounded
							style={{ position: "absolute", top: -5, right: -10 }}
						>
							3
						</Badge>
					</div>
					<div style={{ position: "relative", display: "inline-block" }}>
						<span style={{ fontSize: "1.5rem" }}>💬</span>
						<Badge
							size="sm"
							intent="primary"
							rounded
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
					<Badge variant="subtle" intent="primary">
						React
					</Badge>
					<Badge variant="subtle" intent="secondary">
						TypeScript
					</Badge>
					<Badge variant="subtle" intent="success">
						Vite
					</Badge>
					<Badge variant="subtle" intent="neutral">
						Storybook
					</Badge>
				</div>
			</div>

			{/* User Status */}
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>User Status</h4>
				<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>John Doe</span>
						<Badge size="sm" variant="subtle" intent="success" showDot>
							Online
						</Badge>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>Jane Smith</span>
						<Badge size="sm" variant="subtle" intent="warning" showDot>
							Away
						</Badge>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span>Bob Johnson</span>
						<Badge size="sm" variant="subtle" intent="neutral" showDot>
							Offline
						</Badge>
					</div>
				</div>
			</div>
		</div>
	),
};

