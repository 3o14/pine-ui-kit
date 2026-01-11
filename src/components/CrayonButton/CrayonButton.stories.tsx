import type { Meta, StoryObj } from "@storybook/react";
import { CrayonButton } from "./CrayonButton";
import { ThemeProvider } from "@/providers";

const meta = {
	title: "Action/CrayonButton",
	component: CrayonButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Crayon Button",
		variant: "purple",
		size: "md",
		fullWidth: false,
		disabled: false,
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["purple", "pink", "blue", "yellow", "green", "cream", "dark"],
			description: "크레용 버튼 색상 variant",
			table: {
				type: { summary: "CrayonButtonVariant" },
				defaultValue: { summary: "purple" },
			},
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "버튼 크기",
			table: {
				type: { summary: "'sm' | 'md' | 'lg'" },
				defaultValue: { summary: "md" },
			},
		},
		fullWidth: {
			control: "boolean",
			description: "전체 너비 버튼",
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
	decorators: [
		(Story) => (
			<ThemeProvider theme="crayon" mode="light">
				<Story />
			</ThemeProvider>
		),
	],
} satisfies Meta<typeof CrayonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 CrayonButton
export const Default: Story = {
	args: {
		children: "START",
		variant: "purple",
	},
};

// 모든 Variant
export const Variants: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<CrayonButton {...args} variant="purple">
				Purple
			</CrayonButton>
			<CrayonButton {...args} variant="pink">
				Pink
			</CrayonButton>
			<CrayonButton {...args} variant="blue">
				Blue
			</CrayonButton>
			<CrayonButton {...args} variant="yellow">
				Yellow
			</CrayonButton>
			<CrayonButton {...args} variant="green">
				Green
			</CrayonButton>
			<CrayonButton {...args} variant="cream">
				Cream
			</CrayonButton>
			<CrayonButton {...args} variant="dark">
				Dark
			</CrayonButton>
		</div>
	),
};

// 모든 크기
export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<CrayonButton {...args} size="sm">
				Small
			</CrayonButton>
			<CrayonButton {...args} size="md">
				Medium
			</CrayonButton>
			<CrayonButton {...args} size="lg">
				Large
			</CrayonButton>
		</div>
	),
	args: {
		variant: "purple",
	},
};

// Full Width
export const FullWidth: Story = {
	render: (args) => (
		<div style={{ width: "400px" }}>
			<CrayonButton {...args}>Full Width Button</CrayonButton>
		</div>
	),
	args: {
		fullWidth: true,
		variant: "purple",
	},
};

// Disabled 상태
export const Disabled: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
			<CrayonButton {...args} variant="purple" disabled>
				Disabled Purple
			</CrayonButton>
			<CrayonButton {...args} variant="pink" disabled>
				Disabled Pink
			</CrayonButton>
			<CrayonButton {...args} variant="dark" disabled>
				Disabled Dark
			</CrayonButton>
		</div>
	),
};

// Interactive Playground
export const Playground: Story = {
	args: {
		children: "Click me!",
		variant: "purple",
		size: "md",
		disabled: false,
		fullWidth: false,
	},
};
