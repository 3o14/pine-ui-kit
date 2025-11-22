import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		as: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
			description: "HTML element type",
		},
		size: {
			control: "select",
			options: [
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"display-sm",
				"display-md",
				"display-lg",
			],
			description: "Text size",
		},
		weight: {
			control: "select",
			options: ["regular", "medium", "semibold", "bold"],
			description: "Font weight",
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
				"inherit",
			],
			description: "Text color intent",
		},
		align: {
			control: "select",
			options: ["left", "center", "right"],
			description: "Text alignment",
		},
		truncate: {
			control: "boolean",
			description: "Enable text truncation",
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
	args: {
		children: "The quick brown fox jumps over the lazy dog",
		size: "md",
		weight: "regular",
	},
};

// All sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<Text size="xs">Extra Small (xs) - 0.75rem</Text>
			<Text size="sm">Small (sm) - 0.875rem</Text>
			<Text size="md">Medium (md) - 1rem</Text>
			<Text size="lg">Large (lg) - 1.125rem</Text>
			<Text size="xl">Extra Large (xl) - 1.25rem</Text>
			<Text size="display-sm">Display Small - 1.5rem</Text>
			<Text size="display-md">Display Medium - 1.875rem</Text>
			<Text size="display-lg">Display Large - 2.25rem</Text>
		</div>
	),
};

// All weights
export const Weights: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<Text weight="regular" size="lg">
				Regular Weight (400)
			</Text>
			<Text weight="medium" size="lg">
				Medium Weight (500)
			</Text>
			<Text weight="semibold" size="lg">
				Semibold Weight (600)
			</Text>
			<Text weight="bold" size="lg">
				Bold Weight (700)
			</Text>
		</div>
	),
};

// All intents
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<Text intent="primary" size="lg">
				Primary Color
			</Text>
			<Text intent="secondary" size="lg">
				Secondary Color
			</Text>
			<Text intent="success" size="lg">
				Success Color
			</Text>
			<Text intent="warning" size="lg">
				Warning Color
			</Text>
			<Text intent="danger" size="lg">
				Danger Color
			</Text>
			<Text intent="neutral" size="lg">
				Neutral Color
			</Text>
			<Text intent="inherit" size="lg">
				Inherit Color (default)
			</Text>
		</div>
	),
};

// Headings
export const Headings: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<Text as="h1" size="display-lg" weight="bold">
				Heading 1
			</Text>
			<Text as="h2" size="display-md" weight="bold">
				Heading 2
			</Text>
			<Text as="h3" size="display-sm" weight="semibold">
				Heading 3
			</Text>
			<Text as="h4" size="xl" weight="semibold">
				Heading 4
			</Text>
			<Text as="h5" size="lg" weight="medium">
				Heading 5
			</Text>
			<Text as="h6" size="md" weight="medium">
				Heading 6
			</Text>
		</div>
	),
};

// Alignment
export const Alignment: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
				width: "400px",
				border: "1px dashed #ccc",
				padding: "16px",
			}}
		>
			<Text align="left">Left aligned text (default)</Text>
			<Text align="center">Center aligned text</Text>
			<Text align="right">Right aligned text</Text>
		</div>
	),
};

// Truncate
export const Truncation: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
				width: "300px",
			}}
		>
			<Text truncate={false}>
				This is a very long text that will wrap to multiple lines when it
				exceeds the container width. No truncation applied.
			</Text>
			<div style={{ height: "1px", background: "#ccc" }} />
			<Text truncate>
				This is a very long text that will be truncated with ellipsis when it
				exceeds the container width. Truncation applied.
			</Text>
		</div>
	),
};

// Typography showcase
export const TypographyShowcase: Story = {
	render: () => (
		<div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "24px" }}>
			<div>
				<Text as="h1" size="display-lg" weight="bold" intent="primary">
					Typography System
				</Text>
				<Text size="lg" intent="neutral">
					A comprehensive text component with design tokens
				</Text>
			</div>

			<div>
				<Text as="h2" size="display-sm" weight="semibold">
					Introduction
				</Text>
				<Text>
					The Text component provides a consistent way to render text across
					your application. It supports various sizes, weights, colors, and
					semantic HTML elements.
				</Text>
			</div>

			<div>
				<Text as="h3" size="xl" weight="semibold">
					Features
				</Text>
				<ul style={{ marginTop: "8px" }}>
					<Text as="li">Semantic HTML elements (h1-h6, p, span, div)</Text>
					<Text as="li">8 size options from xs to display-lg</Text>
					<Text as="li">4 weight options from regular to bold</Text>
					<Text as="li">6 intent colors plus inherit</Text>
					<Text as="li">Text alignment and truncation support</Text>
				</ul>
			</div>

			<div>
				<Text size="sm" intent="neutral">
					Built with TypeScript and Vanilla Extract for type safety and
					zero-runtime CSS.
				</Text>
			</div>
		</div>
	),
};

// Interactive playground
export const Playground: Story = {
	args: {
		children: "Customize me!",
		as: "p",
		size: "md",
		weight: "regular",
		intent: "inherit",
		align: "left",
		truncate: false,
	},
};

