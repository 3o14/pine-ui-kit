import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "@/providers";

const meta = {
	title: "Action/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Button",
		variant: "solid",
		size: "medium",
		intent: "primary",
		rounded: "medium",
		fullWidth: false,
		disabled: false,
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["solid", "outline", "ghost", "weak"],
			description: "Button variant style",
			table: {
				type: { summary: "ButtonVariant" },
				defaultValue: { summary: "solid" },
			},
		},
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "Button size",
			table: {
				type: { summary: "ButtonSize" },
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
			description: "Color intent based on design tokens",
			table: {
				type: { summary: "ButtonIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Button 둥근 모서리 크기",
			table: {
				type: { summary: "ButtonRounded" },
			},
		},
		fullWidth: {
			control: "boolean",
			description: "Full width button",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button (default)
export const Primary: Story = {
	args: {
		children: "Primary Button",
		intent: "primary",
		variant: "solid",
		size: "medium",
	},
};

// All variants showcase
export const Variants: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Button {...args} variant="solid">
				Solid
			</Button>
			<Button {...args} variant="outline">
				Outline
			</Button>
			<Button {...args} variant="ghost">
				Ghost
			</Button>
			<Button {...args} variant="weak">
				Weak
			</Button>
		</div>
	),
	args: {
		intent: "primary",
	},
};

// All sizes
export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button {...args} size="small">
				Small
			</Button>
			<Button {...args} size="medium">
				Medium
			</Button>
			<Button {...args} size="large">
				Large
			</Button>
			<Button {...args} size="xlarge">
				XLarge
			</Button>
		</div>
	),
	args: {
		intent: "primary",
		variant: "solid",
	},
};

// All intents (colors)
export const Intents: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
			<Button {...args} intent="primary">
				Primary
			</Button>
			<Button {...args} intent="secondary">
				Secondary
			</Button>
			<Button {...args} intent="success">
				Success
			</Button>
			<Button {...args} intent="warning">
				Warning
			</Button>
			<Button {...args} intent="danger">
				Danger
			</Button>
			<Button {...args} intent="neutral">
				Neutral
			</Button>
		</div>
	),
	args: {
		variant: "solid",
	},
};

// Dark mode showcase
export const DarkMode: Story = {
	render: (args) => (
		<div
			style={{
				display: "flex",
				gap: "12px",
				flexWrap: "wrap",
				padding: "24px",
				backgroundColor: "#0b1120",
				borderRadius: "8px",
			}}
		>
			<Button {...args} intent="primary">
				Primary
			</Button>
			<Button {...args} intent="secondary">
				Secondary
			</Button>
			<Button {...args} intent="success">
				Success
			</Button>
			<Button {...args} intent="warning">
				Warning
			</Button>
			<Button {...args} intent="danger">
				Danger
			</Button>
			<Button {...args} intent="neutral">
				Neutral
			</Button>
		</div>
	),
	args: {
		variant: "solid",
	},
};

// Disabled state
export const Disabled: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px" }}>
			<Button {...args} variant="solid">
				Solid Disabled
			</Button>
			<Button {...args} variant="outline">
				Outline Disabled
			</Button>
			<Button {...args} variant="ghost">
				Ghost Disabled
			</Button>
		</div>
	),
	args: {
		disabled: true,
		intent: "primary",
	},
};

// Full width
export const FullWidth: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<Button {...args}>Full Width Button</Button>
		</div>
	),
	args: {
		fullWidth: true,
		intent: "primary",
		variant: "solid",
	},
};

// Rounded (Pill Shape)
export const Rounded: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="small">Small</Button>
					<Button rounded="small" intent="primary">
						Primary
					</Button>
					<Button rounded="small" intent="success">
						Success
					</Button>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="medium">Medium</Button>
					<Button rounded="medium" intent="primary">
						Primary
					</Button>
					<Button rounded="medium" intent="success">
						Success
					</Button>
				</div>
			</div>
			<div>
				<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
				<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
					<Button rounded="large">Large</Button>
					<Button rounded="large" intent="primary">
						Primary
					</Button>
					<Button rounded="large" intent="success">
						Success
					</Button>
				</div>
			</div>
		</div>
	),
};

// Interactive playground
export const Playground: Story = {
	args: {
		children: "Click me!",
		intent: "primary",
		variant: "solid",
		size: "medium",
		rounded: "medium",
		disabled: false,
		fullWidth: false,
	},
};

// Custom Primary Color
export const CustomPrimaryColor: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>
					Gray Primary (#D3D1CC)
				</h3>
				<ThemeProvider primaryColor="#D3D1CC">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
						<Button {...args} variant="solid" disabled>
							Disabled
						</Button>
					</div>
				</ThemeProvider>
			</div>

			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>
					Green Primary (#10b981)
				</h3>
				<ThemeProvider primaryColor="#10b981">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
						<Button {...args} variant="solid" disabled>
							Disabled
						</Button>
					</div>
				</ThemeProvider>
			</div>

			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>
					Red Primary (#ef4444)
				</h3>
				<ThemeProvider primaryColor="#ef4444">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
						<Button {...args} variant="solid" disabled>
							Disabled
						</Button>
					</div>
				</ThemeProvider>
			</div>

			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>
					Purple Primary (#8b5cf6)
				</h3>
				<ThemeProvider primaryColor="#8b5cf6">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
						<Button {...args} variant="solid" disabled>
							Disabled
						</Button>
					</div>
				</ThemeProvider>
			</div>

			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>
					Orange Primary (#f97316)
				</h3>
				<ThemeProvider primaryColor="#f97316">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
						<Button {...args} variant="solid" disabled>
							Disabled
						</Button>
					</div>
				</ThemeProvider>
			</div>
		</div>
	),
	args: {
		intent: "primary",
	},
	parameters: {
		docs: {
			description: {
				story:
					"primaryColor prop을 사용하여 커스텀 primary 색상을 설정할 수 있습니다. 각 variant(solid, outline, ghost, weak)와 disabled 상태의 색상이 자동으로 계산됩니다.",
			},
		},
	},
};

// Custom Primary Color - All Sizes
export const CustomPrimaryColorSizes: Story = {
	render: (args) => (
		<ThemeProvider primaryColor="#3b82f6">
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
					<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
						<Button {...args} size="small" variant="solid">
							Solid
						</Button>
						<Button {...args} size="small" variant="outline">
							Outline
						</Button>
						<Button {...args} size="small" variant="ghost">
							Ghost
						</Button>
						<Button {...args} size="small" variant="weak">
							Weak
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
					<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
						<Button {...args} size="medium" variant="solid">
							Solid
						</Button>
						<Button {...args} size="medium" variant="outline">
							Outline
						</Button>
						<Button {...args} size="medium" variant="ghost">
							Ghost
						</Button>
						<Button {...args} size="medium" variant="weak">
							Weak
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
					<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
						<Button {...args} size="large" variant="solid">
							Solid
						</Button>
						<Button {...args} size="large" variant="outline">
							Outline
						</Button>
						<Button {...args} size="large" variant="ghost">
							Ghost
						</Button>
						<Button {...args} size="large" variant="weak">
							Weak
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>XLarge</h4>
					<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
						<Button {...args} size="xlarge" variant="solid">
							Solid
						</Button>
						<Button {...args} size="xlarge" variant="outline">
							Outline
						</Button>
						<Button {...args} size="xlarge" variant="ghost">
							Ghost
						</Button>
						<Button {...args} size="xlarge" variant="weak">
							Weak
						</Button>
					</div>
				</div>
			</div>
		</ThemeProvider>
	),
	args: {
		intent: "primary",
	},
	parameters: {
		docs: {
			description: {
				story:
					"커스텀 primary 색상이 모든 크기에서 올바르게 적용되는지 확인합니다.",
			},
		},
	},
};

// Game Theme Showcase
export const GameTheme: Story = {
	render: (args) => (
		<ThemeProvider theme="game" mode="light">
			<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
				<div>
					<h3 style={{ margin: 0, marginBottom: "1rem" }}>
						Game Theme - Light Mode
					</h3>
					<p style={{ margin: 0, marginBottom: "1rem", color: "#666" }}>
						모던 픽셀아트 스타일: 밝은 색상, 작은 radius (4-8px)
					</p>
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} intent="primary" variant="solid">
							Primary
						</Button>
						<Button {...args} intent="secondary" variant="solid">
							Secondary
						</Button>
						<Button {...args} intent="success" variant="solid">
							Success
						</Button>
						<Button {...args} intent="warning" variant="solid">
							Warning
						</Button>
						<Button {...args} intent="danger" variant="solid">
							Danger
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>All Variants</h4>
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>All Sizes</h4>
					<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
						<Button {...args} size="small">
							Small
						</Button>
						<Button {...args} size="medium">
							Medium
						</Button>
						<Button {...args} size="large">
							Large
						</Button>
						<Button {...args} size="xlarge">
							XLarge
						</Button>
					</div>
				</div>
			</div>
		</ThemeProvider>
	),
	args: {
		intent: "primary",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Game 테마는 모던 픽셀아트 스타일을 적용합니다. 밝은 색상과 작은 radius로 각진 느낌을 줍니다.",
			},
		},
	},
};

// Crayon Theme Showcase
export const CrayonTheme: Story = {
	render: (args) => (
		<ThemeProvider theme="crayon" mode="light">
			<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
				<div>
					<h3 style={{ margin: 0, marginBottom: "1rem" }}>
						Crayon Theme - Light Mode
					</h3>
					<p style={{ margin: 0, marginBottom: "1rem", color: "#666" }}>
						크레용 스타일: 파스텔 색상, 큰 radius (32px), 부드러운 텍스처
					</p>
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} intent="primary" variant="solid">
							Primary
						</Button>
						<Button {...args} intent="secondary" variant="solid">
							Secondary
						</Button>
						<Button {...args} intent="success" variant="solid">
							Success
						</Button>
						<Button {...args} intent="warning" variant="solid">
							Warning
						</Button>
						<Button {...args} intent="danger" variant="solid">
							Danger
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>All Variants</h4>
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} variant="solid">
							Solid
						</Button>
						<Button {...args} variant="outline">
							Outline
						</Button>
						<Button {...args} variant="ghost">
							Ghost
						</Button>
						<Button {...args} variant="weak">
							Weak
						</Button>
					</div>
				</div>
				<div>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>All Sizes</h4>
					<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
						<Button {...args} size="small">
							Small
						</Button>
						<Button {...args} size="medium">
							Medium
						</Button>
						<Button {...args} size="large">
							Large
						</Button>
						<Button {...args} size="xlarge">
							XLarge
						</Button>
					</div>
				</div>
			</div>
		</ThemeProvider>
	),
	args: {
		intent: "primary",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Crayon 테마는 크레용 스타일을 적용합니다. 파스텔 색상과 큰 radius로 부드러운 느낌을 줍니다.",
			},
		},
	},
};

// Theme Comparison
export const ThemeComparison: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>Basic Theme</h3>
				<ThemeProvider theme="basic" mode="light">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} intent="primary" variant="solid">
							Primary
						</Button>
						<Button {...args} intent="secondary" variant="solid">
							Secondary
						</Button>
						<Button {...args} intent="success" variant="solid">
							Success
						</Button>
					</div>
				</ThemeProvider>
			</div>
			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>Game Theme</h3>
				<ThemeProvider theme="game" mode="light">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} intent="primary" variant="solid">
							Primary
						</Button>
						<Button {...args} intent="secondary" variant="solid">
							Secondary
						</Button>
						<Button {...args} intent="success" variant="solid">
							Success
						</Button>
					</div>
				</ThemeProvider>
			</div>
			<div>
				<h3 style={{ margin: 0, marginBottom: "1rem" }}>Crayon Theme</h3>
				<ThemeProvider theme="crayon" mode="light">
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<Button {...args} intent="primary" variant="solid">
							Primary
						</Button>
						<Button {...args} intent="secondary" variant="solid">
							Secondary
						</Button>
						<Button {...args} intent="success" variant="solid">
							Success
						</Button>
					</div>
				</ThemeProvider>
			</div>
		</div>
	),
	args: {
		intent: "primary",
	},
	parameters: {
		docs: {
			description: {
				story:
					"세 가지 테마를 나란히 비교하여 각 테마의 특징을 확인할 수 있습니다.",
			},
		},
	},
};
