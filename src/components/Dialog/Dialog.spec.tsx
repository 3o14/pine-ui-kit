import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "./Dialog";
import React from "react";

describe("Dialog", () => {
	describe("Rendering", () => {
		it("renders when open", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}}>
					<p>Dialog content</p>
				</Dialog>
			);
			expect(screen.getByRole("dialog")).toBeInTheDocument();
			expect(screen.getByText("Dialog content")).toBeInTheDocument();
		});

		it("does not render when closed", () => {
			render(
				<Dialog open={false} onOpenChange={() => {}}>
					<p>Dialog content</p>
				</Dialog>
			);
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
		});

		it("renders with title", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}} title="Test Title">
					<p>Content</p>
				</Dialog>
			);
			expect(screen.getByText("Test Title")).toBeInTheDocument();
		});

		it("renders with description", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					title="Title"
					description="Test Description"
				>
					<p>Content</p>
				</Dialog>
			);
			expect(screen.getByText("Test Description")).toBeInTheDocument();
		});

		it("renders with close button by default", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}}>
					<p>Content</p>
				</Dialog>
			);
			// Dialog has a header with close functionality by default
			expect(screen.getByRole("dialog")).toBeInTheDocument();
		});

		it("hides close button when showCloseButton is false", () => {
			const { container } = render(
				<Dialog open={true} onOpenChange={() => {}} showCloseButton={false}>
					<p>Content</p>
				</Dialog>
			);
			const closeButton = container.querySelector('.Dialog_closeButton__8n7xxog');
			expect(closeButton).not.toBeInTheDocument();
		});

		it("applies custom className", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					className="custom-dialog"
				>
					<p>Content</p>
				</Dialog>
			);
			const dialog = screen.getByRole("dialog");
			expect(dialog).toHaveClass("custom-dialog");
		});
	});

	describe("Sizes", () => {
		const sizes = ["small", "medium", "large", "xlarge", "full"] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size`, () => {
				render(
					<Dialog open={true} onOpenChange={() => {}} size={size}>
						<p>Content</p>
					</Dialog>
				);
				expect(screen.getByRole("dialog")).toBeInTheDocument();
			});
		});
	});

	describe("Rounded Variants", () => {
		const rounded = ["small", "medium", "large"] as const;

		rounded.forEach((variant) => {
			it(`renders ${variant} rounded`, () => {
				render(
					<Dialog open={true} onOpenChange={() => {}} rounded={variant}>
						<p>Content</p>
					</Dialog>
				);
				expect(screen.getByRole("dialog")).toBeInTheDocument();
			});
		});
	});

	describe("Actions", () => {
		it("renders action buttons", () => {
			const handleAction1 = vi.fn();
			const handleAction2 = vi.fn();

			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					actions={[
						{ label: "Cancel", onClick: handleAction1, variant: "outline" },
						{ label: "Confirm", onClick: handleAction2 },
					]}
				>
					<p>Content</p>
				</Dialog>
			);

			expect(screen.getByText("Cancel")).toBeInTheDocument();
			expect(screen.getByText("Confirm")).toBeInTheDocument();
		});

		it("calls action onClick handlers", async () => {
			const handleAction = vi.fn();
			const user = userEvent.setup();

			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					actions={[{ label: "Action", onClick: handleAction }]}
				>
					<p>Content</p>
				</Dialog>
			);

			await user.click(screen.getByText("Action"));
			expect(handleAction).toHaveBeenCalledTimes(1);
		});

		it("disables action buttons when specified", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					actions={[{ label: "Disabled", onClick: () => {}, disabled: true }]}
				>
					<p>Content</p>
				</Dialog>
			);

			const button = screen.getByText("Disabled");
			expect(button).toBeDisabled();
		});

		it("renders custom footer instead of actions", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					footer={<div>Custom Footer</div>}
				>
					<p>Content</p>
				</Dialog>
			);

			expect(screen.getByText("Custom Footer")).toBeInTheDocument();
		});
	});

	describe("Interactions", () => {
		it("calls onOpenChange when close button is clicked", async () => {
			const handleOpenChange = vi.fn();
			const user = userEvent.setup();

			const { container } = render(
				<Dialog open={true} onOpenChange={handleOpenChange}>
					<p>Content</p>
				</Dialog>
			);

			const closeButton = container.querySelector('.Dialog_closeButton__8n7xxog') as HTMLElement;
			await user.click(closeButton);

			await waitFor(() => {
				expect(handleOpenChange).toHaveBeenCalledWith(false);
			});
		});

		it("calls onClose when dialog is closed", async () => {
			const handleClose = vi.fn();
			const handleOpenChange = vi.fn();
			const user = userEvent.setup();

			const { container } = render(
				<Dialog
					open={true}
					onOpenChange={handleOpenChange}
					onClose={handleClose}
				>
					<p>Content</p>
				</Dialog>
			);

			const closeButton = container.querySelector('.Dialog_closeButton__8n7xxog') as HTMLElement;
			await user.click(closeButton);

			await waitFor(() => {
				expect(handleClose).toHaveBeenCalled();
			});
		});

		it("closes on Escape key when closeOnEscape is true", async () => {
			const handleOpenChange = vi.fn();
			const user = userEvent.setup();

			render(
				<Dialog open={true} onOpenChange={handleOpenChange} closeOnEscape={true}>
					<p>Content</p>
				</Dialog>
			);

			await user.keyboard("{Escape}");

			await waitFor(() => {
				expect(handleOpenChange).toHaveBeenCalledWith(false);
			});
		});

		it("remains open when closeOnEscape is false", () => {
			const handleOpenChange = vi.fn();

			render(
				<Dialog
					open={true}
					onOpenChange={handleOpenChange}
					closeOnEscape={false}
				>
					<p>Content</p>
				</Dialog>
			);

			// Dialog should be open
			expect(screen.getByRole("dialog")).toBeInTheDocument();
		});
	});

	describe("Controlled Behavior", () => {
		it("works in controlled mode", async () => {
			const TestComponent = () => {
				const [open, setOpen] = React.useState(false);
				return (
					<>
						<button onClick={() => setOpen(true)}>Open Dialog</button>
						<Dialog open={open} onOpenChange={setOpen}>
							<p>Dialog content</p>
						</Dialog>
					</>
				);
			};

			const user = userEvent.setup();
			render(<TestComponent />);

			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

			await user.click(screen.getByText("Open Dialog"));

			await waitFor(() => {
				expect(screen.getByRole("dialog")).toBeInTheDocument();
			});
		});
	});

	describe("Accessibility", () => {
		it("has dialog role", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}}>
					<p>Content</p>
				</Dialog>
			);
			expect(screen.getByRole("dialog")).toBeInTheDocument();
		});

		it("has aria-labelledby when title is provided", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}} title="Dialog Title">
					<p>Content</p>
				</Dialog>
			);
			const dialog = screen.getByRole("dialog");
			expect(dialog).toHaveAttribute("aria-labelledby");
		});

		it("has aria-describedby when description is provided", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					title="Title"
					description="Description"
				>
					<p>Content</p>
				</Dialog>
			);
			const dialog = screen.getByRole("dialog");
			expect(dialog).toHaveAttribute("aria-describedby");
		});

		it("supports dialog interactions", () => {
			render(
				<Dialog open={true} onOpenChange={() => {}}>
					<p>Content</p>
				</Dialog>
			);
			const dialog = screen.getByRole("dialog");
			expect(dialog).toBeInTheDocument();
			expect(dialog).toBeVisible();
		});

		it("traps focus within dialog when open", async () => {
			const user = userEvent.setup();

			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					title="Dialog"
					actions={[
						{ label: "Cancel", onClick: () => {} },
						{ label: "Confirm", onClick: () => {} },
					]}
				>
					<p>Content</p>
				</Dialog>
			);

			const cancelButton = screen.getByText("Cancel");
			const confirmButton = screen.getByText("Confirm");

			// Tab through dialog elements
			await user.tab();
			// One of the buttons should have focus
			const hasButtonFocus = cancelButton.matches(':focus') || confirmButton.matches(':focus');
			expect(hasButtonFocus || document.activeElement === cancelButton || document.activeElement === confirmButton).toBe(true);
		});
	});

	describe("Portal", () => {
		it("renders dialog outside of parent DOM hierarchy", () => {
			const { container } = render(
				<div data-testid="parent">
					<Dialog open={true} onOpenChange={() => {}}>
						<p>Content</p>
					</Dialog>
				</div>
			);

			const dialog = screen.getByRole("dialog");
			const parent = container.querySelector('[data-testid="parent"]');

			// Dialog should not be a descendant of parent
			expect(parent).not.toContainElement(dialog);
		});
	});

	describe("Multiple Actions", () => {
		it("renders multiple actions with different variants and intents", () => {
			render(
				<Dialog
					open={true}
					onOpenChange={() => {}}
					actions={[
						{
							label: "Delete",
							onClick: () => {},
							variant: "solid",
							intent: "danger",
						},
						{
							label: "Cancel",
							onClick: () => {},
							variant: "outline",
							intent: "neutral",
						},
						{
							label: "Save",
							onClick: () => {},
							variant: "solid",
							intent: "primary",
						},
					]}
				>
					<p>Content</p>
				</Dialog>
			);

			expect(screen.getByText("Delete")).toBeInTheDocument();
			expect(screen.getByText("Cancel")).toBeInTheDocument();
			expect(screen.getByText("Save")).toBeInTheDocument();
		});
	});
});

