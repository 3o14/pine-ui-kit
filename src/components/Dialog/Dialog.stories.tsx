import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta = {
	title: "Overlay/Dialog",
	component: Dialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		open: false,
		onClose: () => {},
		size: "medium",
		rounded: "medium",
		title: "Dialog Title",
		description: "Dialog description",
		actions: undefined,
		showCloseButton: true,
		closeOnOverlayClick: true,
		closeOnEscape: true,
		children: null,
	},
	argTypes: {
		open: {
			control: "boolean",
			description: "Dialog 표시 여부",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge", "full"],
			description: "Dialog 크기",
			table: {
				type: { summary: "DialogSize" },
				defaultValue: { summary: "medium" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Dialog 모서리 둥글기",
			table: {
				type: { summary: "DialogRounded" },
				defaultValue: { summary: "medium" },
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
		actions: {
			control: "object",
			description: "Footer에 표시할 버튼 액션들",
			table: {
				type: { summary: "DialogAction[]" },
			},
		},
		footer: {
			control: false,
			description: "하위 호환성을 위해 유지 (actions 사용 권장)",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
	},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Dialog
export const Basic: Story = {
	render: function BasicDialog(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		// args.open이 변경되면 내부 상태 동기화
		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Dialog</Button>
				<Dialog {...restArgs} open={open} onClose={() => setOpen(false)}>
					<p>This is the dialog content. You can put any content here.</p>
				</Dialog>
			</>
		);
	},
};

// With Footer
export const WithFooter: Story = {
	render: function DialogWithFooter(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Dialog with Footer</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					title={args.title ?? "Confirm Action"}
					description={args.description ?? "Are you sure you want to proceed?"}
					actions={[
						{
							label: "Cancel",
							onClick: () => setOpen(false),
							variant: "ghost",
						},
						{
							label: "Confirm",
							onClick: () => setOpen(false),
						},
					]}
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
			"small" | "medium" | "large" | "xlarge" | "full" | null
		>(null);

		return (
			<div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
				<Button size="small" onClick={() => setSize("small")}>
					Small
				</Button>
				<Button size="small" onClick={() => setSize("medium")}>
					Medium
				</Button>
				<Button size="small" onClick={() => setSize("large")}>
					Large
				</Button>
				<Button size="small" onClick={() => setSize("xlarge")}>
					Extra Large
				</Button>
				<Button size="small" onClick={() => setSize("full")}>
					Full
				</Button>
				{size && (
					<Dialog
						open={true}
						onClose={() => setSize(null)}
						size={size}
						title={`${size.charAt(0).toUpperCase() + size.slice(1)} Dialog`}
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
	render: function DialogLongContent(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Long Content Dialog</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					title={args.title ?? "Terms and Conditions"}
					description={args.description ?? "Please read carefully"}
					actions={[
						{
							label: "Decline",
							onClick: () => setOpen(false),
							variant: "ghost",
						},
						{
							label: "Accept",
							onClick: () => setOpen(false),
						},
					]}
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
	args: {
		showCloseButton: false,
		closeOnOverlayClick: false,
		closeOnEscape: false,
	},
	render: function DialogWithoutClose(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open (No Close Button)</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					title={args.title ?? "Forced Action"}
					description={args.description ?? "You must choose an option"}
					actions={[
						{
							label: "Cancel",
							onClick: () => setOpen(false),
							variant: "outline",
						},
						{
							label: "Delete",
							onClick: () => setOpen(false),
							intent: "danger",
						},
					]}
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
	render: function DialogForm(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			setOpen(false);
		};

		return (
			<>
				<Button onClick={() => setOpen(true)}>Create New Item</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					title={args.title ?? "Create New Item"}
					description={args.description ?? "Fill in the details below"}
					actions={[
						{
							label: "Cancel",
							onClick: () => setOpen(false),
							variant: "ghost",
						},
						{
							label: "Create",
							onClick: () => {
								const form = document.getElementById(
									"item-form"
								) as HTMLFormElement;
								if (form) {
									form.requestSubmit();
								}
							},
						},
					]}
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

// Confirmation Dialog
export const ConfirmationDialog: Story = {
	render: function DialogConfirmation(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button intent="danger" onClick={() => setOpen(true)}>
					Delete Item
				</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					size={args.size ?? "small"}
					title={args.title ?? "Delete Item?"}
					description={args.description ?? "This action cannot be undone"}
					actions={[
						{
							label: "Cancel",
							onClick: () => setOpen(false),
							variant: "ghost",
						},
						{
							label: "Delete",
							onClick: () => setOpen(false),
							intent: "danger",
						},
					]}
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
	render: function DialogSuccess(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button intent="success" onClick={() => setOpen(true)}>
					Show Success
				</Button>
				<Dialog
					{...restArgs}
					open={open}
					onClose={() => setOpen(false)}
					size={args.size ?? "small"}
					title={args.title ?? "✅ Success!"}
					description={
						args.description ?? "Your action was completed successfully"
					}
					actions={[
						{
							label: "Continue",
							onClick: () => setOpen(false),
							intent: "success",
						},
					]}
				>
					<p style={{ textAlign: "center" }}>
						Your changes have been saved successfully.
					</p>
				</Dialog>
			</>
		);
	},
};

// Playground - args를 직접 사용하여 Controls 패널에서 모든 props를 테스트할 수 있음
export const Playground: Story = {
	render: function DialogPlayground(args) {
		const [open, setOpen] = React.useState(args.open ?? false);

		React.useEffect(() => {
			setOpen(args.open ?? false);
		}, [args.open]);

		// open과 onClose를 제외한 나머지 props
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { open: _open, onClose: _onClose, ...restArgs } = args;

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Dialog</Button>
				<Dialog {...restArgs} open={open} onClose={() => setOpen(false)}>
					<p>
						This is a playground dialog. Use the Controls panel to customize all
						props.
					</p>
				</Dialog>
			</>
		);
	},
};
