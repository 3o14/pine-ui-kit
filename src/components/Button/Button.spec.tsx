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

		it("renders with default props", () => {
			render(<Button>Default Button</Button>);
			const button = screen.getByRole("button");
			expect(button).toBeInTheDocument();
		});

		it("applies custom className", () => {
			render(<Button className="custom-class">Button</Button>);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("custom-class");
		});
	});

	describe("Variants", () => {
		it("renders solid variant", () => {
			render(<Button variant="solid">Solid</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders outline variant", () => {
			render(<Button variant="outline">Outline</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders ghost variant", () => {
			render(<Button variant="ghost">Ghost</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders weak variant", () => {
			render(<Button variant="weak">Weak</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});

	describe("Sizes", () => {
		it("renders small size", () => {
			render(<Button size="small">Small</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders medium size", () => {
			render(<Button size="medium">Medium</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders large size", () => {
			render(<Button size="large">Large</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});

		it("renders xlarge size", () => {
			render(<Button size="xlarge">XLarge</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});

	describe("Intents", () => {
		const intents = [
			"primary",
			"secondary",
			"success",
			"warning",
			"danger",
			"neutral",
		] as const;

		intents.forEach((intent) => {
			it(`renders ${intent} intent`, () => {
				render(<Button intent={intent}>{intent}</Button>);
				expect(screen.getByRole("button")).toBeInTheDocument();
			});
		});
	});

	describe("States", () => {
		it("renders disabled button", () => {
			render(<Button disabled>Disabled</Button>);
			const button = screen.getByRole("button");
			expect(button).toBeDisabled();
		});

		it("renders fullWidth button", () => {
			render(<Button fullWidth>Full Width</Button>);
			expect(screen.getByRole("button")).toBeInTheDocument();
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

