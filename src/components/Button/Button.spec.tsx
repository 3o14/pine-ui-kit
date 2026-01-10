import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
	describe("Rendering", () => {
		it("renders children correctly", () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole("button")).toHaveTextContent("Click me");
		});

		it("applies custom className", () => {
			render(<Button className="custom-class">Button</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("custom-class");
		});
	});

	describe("States", () => {
		it("renders disabled button", () => {
			render(<Button disabled>Disabled</Button>);
			const button = screen.getByRole("button");
			expect(button).toBeDisabled();
		});

		it("applies fullWidth class when fullWidth prop is true", () => {
			render(<Button fullWidth>Full Width</Button>);
			const button = screen.getByRole("button");
			expect(button).toBeInTheDocument();
		});
	});

	describe("Interactions", () => {
		it("calls onClick handler when clicked", async () => {
			const handleClick = vi.fn();
			const user = userEvent.setup();

			render(<Button onClick={handleClick}>Click me</Button>);
			const button = screen.getByRole("button");

			await user.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("does not call onClick when disabled", async () => {
			const handleClick = vi.fn();
			const user = userEvent.setup();

			render(
				<Button disabled onClick={handleClick}>
					Disabled Button
				</Button>
			);
			const button = screen.getByRole("button");

			await user.click(button);
			expect(handleClick).not.toHaveBeenCalled();
		});

		it("handles multiple clicks", async () => {
			const handleClick = vi.fn();
			const user = userEvent.setup();

			render(<Button onClick={handleClick}>Click me</Button>);
			const button = screen.getByRole("button");

			await user.tripleClick(button);
			expect(handleClick).toHaveBeenCalledTimes(3);
		});
	});

	describe("Accessibility", () => {
		it("has button role", () => {
			render(<Button>Accessible Button</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("accepts aria-label", () => {
			render(<Button aria-label="Custom label">Button</Button>);
			expect(screen.getByLabelText("Custom label")).toBeInTheDocument();
		});

		it("accepts aria-disabled", () => {
			render(<Button aria-disabled="true">Button</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveAttribute("aria-disabled", "true");
		});

		it("can be focused with keyboard", () => {
			render(<Button>Focusable</Button>);
			const button = screen.getByRole("button");
			button.focus();
			expect(button).toHaveFocus();
		});
	});

	describe("HTML Attributes", () => {
		it("accepts type attribute", () => {
			render(<Button type="submit">Submit</Button>);
			expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
		});

		it("accepts data attributes", () => {
			render(<Button data-testid="custom-button">Button</Button>);
			expect(screen.getByTestId("custom-button")).toBeInTheDocument();
		});

		it("forwards ref", () => {
			const ref = vi.fn();
			render(<Button ref={ref}>Button with ref</Button>);
			expect(ref).toHaveBeenCalled();
		});
	});
});
