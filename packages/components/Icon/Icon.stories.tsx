import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
	title: "Components/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
			description: "Icon size",
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
				"current",
			],
			description: "Icon color intent",
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
	args: {
		size: "md",
		intent: "current",
		children: (
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
		),
	},
};

// All sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Icon size="xs">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon size="sm">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon size="md">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon size="lg">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon size="xl">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
		</div>
	),
};

// All intents
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Icon intent="primary" size="lg">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon intent="secondary" size="lg">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
			<Icon intent="success" size="lg">
				<polyline points="20 6 9 17 4 12" />
			</Icon>
			<Icon intent="warning" size="lg">
				<>
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="8" x2="12" y2="12" />
					<line x1="12" y1="16" x2="12.01" y2="16" />
				</>
			</Icon>
			<Icon intent="danger" size="lg">
				<>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</>
			</Icon>
			<Icon intent="neutral" size="lg">
				<>
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="16" x2="12" y2="12" />
					<line x1="12" y1="8" x2="12.01" y2="8" />
				</>
			</Icon>
			<Icon intent="current" size="lg">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</Icon>
		</div>
	),
};

// Icon library showcase
export const IconLibrary: Story = {
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(6, 1fr)",
				gap: "24px",
				padding: "24px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
				</Icon>
				<span style={{ fontSize: "12px" }}>Heart</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
				</Icon>
				<span style={{ fontSize: "12px" }}>Star</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
				<span style={{ fontSize: "12px" }}>Check</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>X</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="8" x2="12" y2="12" />
						<line x1="12" y1="16" x2="12.01" y2="16" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>Alert</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="16" x2="12" y2="12" />
						<line x1="12" y1="8" x2="12.01" y2="8" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>Info</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<circle cx="12" cy="12" r="3" />
						<path d="M12 1v6m0 6v6m5.2-15l-1 1.7M7.8 21l1-1.7m8.4-3.8l-1.7-1M7.8 7.8l1.7 1m8.4 8.4l-1.7-1M7.8 16.2l1.7 1" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>Settings</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>User</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>Search</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<>
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</>
				</Icon>
				<span style={{ fontSize: "12px" }}>Menu</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<polyline points="6 9 12 15 18 9" />
				</Icon>
				<span style={{ fontSize: "12px" }}>ChevronDown</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Icon size="lg">
					<polyline points="9 18 15 12 9 6" />
				</Icon>
				<span style={{ fontSize: "12px" }}>ChevronRight</span>
			</div>
		</div>
	),
};

// Custom SVG icon
export const CustomSVG: Story = {
	render: () => (
		<Icon size="lg" intent="primary">
			{/* Custom SVG path - Clock icon */}
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6v6l4 2" />
		</Icon>
	),
};

// With Text
export const WithText: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				fontSize: "16px",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<Icon size="sm" intent="success">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
				<span>Task completed</span>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<Icon size="sm" intent="danger">
					<>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</>
				</Icon>
				<span>Task failed</span>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<Icon size="sm" intent="warning">
					<>
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="8" x2="12" y2="12" />
						<line x1="12" y1="16" x2="12.01" y2="16" />
					</>
				</Icon>
				<span>Warning message</span>
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<Icon size="sm" intent="primary">
					<>
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="16" x2="12" y2="12" />
						<line x1="12" y1="8" x2="12.01" y2="8" />
					</>
				</Icon>
				<span>Information</span>
			</div>
		</div>
	),
};

// In Button
export const InButton: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
			<button
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					padding: "8px 16px",
					border: "1px solid #ccc",
					borderRadius: "6px",
					background: "#fff",
					cursor: "pointer",
				}}
			>
				<Icon size="sm">
					<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
				</Icon>
				Like
			</button>
			<button
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					padding: "8px 16px",
					border: "1px solid #ccc",
					borderRadius: "6px",
					background: "#fff",
					cursor: "pointer",
				}}
			>
				<Icon size="sm">
					<>
						<circle cx="12" cy="12" r="3" />
						<path d="M12 1v6m0 6v6m5.2-15l-1 1.7M7.8 21l1-1.7m8.4-3.8l-1.7-1M7.8 7.8l1.7 1m8.4 8.4l-1.7-1M7.8 16.2l1.7 1" />
					</>
				</Icon>
				Settings
			</button>
			<button
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					padding: "8px 16px",
					border: "1px solid #ccc",
					borderRadius: "6px",
					background: "#fff",
					cursor: "pointer",
				}}
			>
				<Icon size="sm">
					<>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</>
				</Icon>
				Search
			</button>
		</div>
	),
};

// Interactive playground
export const Playground: Story = {
	args: {
		size: "md",
		intent: "current",
		children: (
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
		),
	},
};
