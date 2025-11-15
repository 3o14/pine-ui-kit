import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta = {
	title: "Components/Dialog",
	component: Dialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		open: false,
		onClose: () => {},
		children: null,
	},
	argTypes: {
		open: {
			control: "boolean",
			description: "Dialog 표시 여부",
			table: {
				type: { summary: "boolean" },
			},
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl", "full"],
			description: "Dialog 크기",
			table: {
				type: { summary: "DialogSize" },
				defaultValue: { summary: "md" },
			},
		},
		title: {
			control: "text",
			description: "Dialog 제목",
			table: {
				type: { summary: "string" },
			},
		},
		description: {
			control: "text",
			description: "Dialog 부제목/설명",
			table: {
				type: { summary: "string" },
			},
		},
		showCloseButton: {
			control: "boolean",
			description: "닫기 버튼 표시 여부",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
		closeOnOverlayClick: {
			control: "boolean",
			description: "Overlay 클릭 시 닫기",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
		closeOnEscape: {
			control: "boolean",
			description: "ESC 키로 닫기",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Dialog
export const Basic: Story = {
	render: function BasicDialog() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Dialog</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Basic Dialog"
					description="This is a basic dialog example"
				>
					<p>This is the dialog content. You can put any content here.</p>
				</Dialog>
			</>
		);
	},
};

// With Footer
export const WithFooter: Story = {
	render: function DialogWithFooter() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Dialog with Footer</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Confirm Action"
					description="Are you sure you want to proceed?"
					footer={
						<>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Confirm</Button>
						</>
					}
				>
					<p>This action cannot be undone. Please confirm to proceed.</p>
				</Dialog>
			</>
		);
	},
};

// Different Sizes
export const Sizes: Story = {
	render: function DialogSizes() {
		const [size, setSize] = React.useState<
			"sm" | "md" | "lg" | "xl" | "full" | null
		>(null);

		return (
			<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
				<Button size="sm" onClick={() => setSize("sm")}>
					Small
				</Button>
				<Button size="sm" onClick={() => setSize("md")}>
					Medium
				</Button>
				<Button size="sm" onClick={() => setSize("lg")}>
					Large
				</Button>
				<Button size="sm" onClick={() => setSize("xl")}>
					Extra Large
				</Button>
				<Button size="sm" onClick={() => setSize("full")}>
					Full
				</Button>
				{size && (
					<Dialog
						open={true}
						onClose={() => setSize(null)}
						size={size}
						title={`${size.toUpperCase()} Dialog`}
						description="This demonstrates different dialog sizes"
					>
						<p>
							This is a {size} sized dialog. Dialog size can be adjusted using
							the size prop.
						</p>
					</Dialog>
				)}
			</div>
		);
	},
};

// Long Content (Scrollable)
export const LongContent: Story = {
	render: function DialogLongContent() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Long Content Dialog</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Terms and Conditions"
					description="Please read carefully"
					footer={
						<>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Decline
							</Button>
							<Button onClick={() => setOpen(false)}>Accept</Button>
						</>
					}
				>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
						{Array.from({ length: 20 }, (_, i) => (
							<p key={i}>
								{i + 1}. This is a paragraph of terms and conditions. Lorem
								ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						))}
					</div>
				</Dialog>
			</>
		);
	},
};

// Without Close Button
export const WithoutCloseButton: Story = {
	render: function DialogWithoutClose() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open (No Close Button)</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Forced Action"
					description="You must choose an option"
					showCloseButton={false}
					closeOnOverlayClick={false}
					closeOnEscape={false}
					footer={
						<>
							<Button variant="outline" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button intent="danger" onClick={() => setOpen(false)}>
								Delete
							</Button>
						</>
					}
				>
					<p>
						This dialog requires you to make a choice. You cannot close it by
						clicking outside or pressing ESC.
					</p>
				</Dialog>
			</>
		);
	},
};

// Form Dialog
export const FormDialog: Story = {
	render: function DialogForm() {
		const [open, setOpen] = React.useState(false);

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			setOpen(false);
		};

		return (
			<>
				<Button onClick={() => setOpen(true)}>Create New Item</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Create New Item"
					description="Fill in the details below"
					footer={
						<>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button type="submit" form="item-form">
								Create
							</Button>
						</>
					}
				>
					<form
						id="item-form"
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
						<div>
							<label
								htmlFor="name"
								style={{ display: "block", marginBottom: "0.5rem" }}
							>
								Name
							</label>
							<input
								id="name"
								type="text"
								placeholder="Enter name"
								required
								style={{
									width: "100%",
									padding: "0.5rem",
									borderRadius: "4px",
									border: "1px solid #ddd",
								}}
							/>
						</div>
						<div>
							<label
								htmlFor="description"
								style={{ display: "block", marginBottom: "0.5rem" }}
							>
								Description
							</label>
							<textarea
								id="description"
								placeholder="Enter description"
								rows={4}
								style={{
									width: "100%",
									padding: "0.5rem",
									borderRadius: "4px",
									border: "1px solid #ddd",
									resize: "vertical",
								}}
							/>
						</div>
					</form>
				</Dialog>
			</>
		);
	},
};

// Dark Mode
export const DarkMode: Story = {
	render: function DialogDarkMode() {
		const [open, setOpen] = React.useState(false);

		return (
			<div
				style={{
					backgroundColor: "#1a1a1a",
					padding: "2rem",
					borderRadius: "8px",
				}}
			>
				<Button mode="dark" onClick={() => setOpen(true)}>
					Open Dark Dialog
				</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					mode="dark"
					title="Dark Mode Dialog"
					description="This dialog uses dark theme"
					footer={
						<>
							<Button
								mode="dark"
								variant="ghost"
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
							<Button mode="dark" onClick={() => setOpen(false)}>
								Confirm
							</Button>
						</>
					}
				>
					<p>This dialog is rendered in dark mode.</p>
				</Dialog>
			</div>
		);
	},
};

// Confirmation Dialog
export const ConfirmationDialog: Story = {
	render: function DialogConfirmation() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button intent="danger" onClick={() => setOpen(true)}>
					Delete Item
				</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					size="sm"
					title="Delete Item?"
					description="This action cannot be undone"
					footer={
						<>
							<Button variant="ghost" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button intent="danger" onClick={() => setOpen(false)}>
								Delete
							</Button>
						</>
					}
				>
					<p>
						Are you sure you want to delete this item? This action is permanent
						and cannot be reversed.
					</p>
				</Dialog>
			</>
		);
	},
};

// Success Dialog
export const SuccessDialog: Story = {
	render: function DialogSuccess() {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<Button intent="success" onClick={() => setOpen(true)}>
					Show Success
				</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					size="sm"
					title="✅ Success!"
					description="Your action was completed successfully"
					footer={
						<Button intent="success" fullWidth onClick={() => setOpen(false)}>
							Continue
						</Button>
					}
				>
					<p style={{ textAlign: "center" }}>
						Your changes have been saved successfully.
					</p>
				</Dialog>
			</>
		);
	},
};
