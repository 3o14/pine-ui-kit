import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";
import React from "react";

describe("Checkbox", () => {
	describe("Rendering", () => {
		it("renders without label", () => {
			render(<Checkbox />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("renders with label", () => {
			render(<Checkbox label="Accept terms" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
			expect(screen.getByText("Accept terms")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(<Checkbox className="custom-class" />);
			expect(container.querySelector(".custom-class")).toBeInTheDocument();
		});
	});

	describe("Sizes", () => {
		it("renders small size", () => {
			render(<Checkbox size="small" label="Small" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("renders medium size", () => {
			render(<Checkbox size="medium" label="Medium" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("renders large size", () => {
			render(<Checkbox size="large" label="Large" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("renders xlarge size", () => {
			render(<Checkbox size="xlarge" label="XLarge" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});
	});

	describe("Variants", () => {
		it("renders square variant", () => {
			render(<Checkbox variant="square" label="Square" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("renders circle variant", () => {
			render(<Checkbox variant="circle" label="Circle" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
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
				render(<Checkbox intent={intent} label={intent} />);
				expect(screen.getByRole("checkbox")).toBeInTheDocument();
			});
		});
	});

	describe("States", () => {
		it("renders unchecked by default", () => {
			render(<Checkbox />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-checked", "false");
			expect(checkboxElement).toHaveAttribute("data-unchecked");
		});

		it("renders checked when checked prop is true", () => {
			render(<Checkbox checked={true} />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
			expect(checkboxElement).toHaveAttribute("data-checked");
		});

		it("renders disabled checkbox", () => {
			render(<Checkbox disabled />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-disabled", "true");
			expect(checkboxElement).toHaveAttribute("data-disabled");
		});

		it("supports defaultChecked for uncontrolled mode", () => {
			render(<Checkbox defaultChecked={true} />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
			expect(checkboxElement).toHaveAttribute("data-checked");
		});

		it("renders readOnly checkbox", () => {
			render(<Checkbox readOnly />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("data-readonly");
		});
	});

	describe("Interactions", () => {
		it("toggles when clicked (uncontrolled)", async () => {
			const user = userEvent.setup();
			render(<Checkbox defaultChecked={false} />);
			const checkboxElement = screen.getByRole("checkbox");

			expect(checkboxElement).toHaveAttribute("aria-checked", "false");

			await user.click(checkboxElement);
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");

			await user.click(checkboxElement);
			expect(checkboxElement).toHaveAttribute("aria-checked", "false");
		});

		it("calls onCheckedChange when toggled", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(<Checkbox onCheckedChange={handleChange} />);
			const checkboxElement = screen.getByRole("checkbox");

			await user.click(checkboxElement);
			expect(handleChange).toHaveBeenCalled();
			expect(handleChange.mock.calls[0][0]).toBe(true);

			await user.click(checkboxElement);
			expect(handleChange).toHaveBeenCalledTimes(2);
			expect(handleChange.mock.calls[1][0]).toBe(false);
		});

		it("does not toggle when disabled", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(<Checkbox disabled onCheckedChange={handleChange} />);
			const checkboxElement = screen.getByRole("checkbox");

			await user.click(checkboxElement);
			expect(handleChange).not.toHaveBeenCalled();
		});

		it("works in controlled mode", async () => {
			const TestComponent = () => {
				const [checked, setChecked] = React.useState(false);
				return (
					<Checkbox
						checked={checked}
						onCheckedChange={setChecked}
						label="Controlled"
					/>
				);
			};

			const user = userEvent.setup();
			
			render(<TestComponent />);
			const checkboxElement = screen.getByRole("checkbox");

			expect(checkboxElement).toHaveAttribute("aria-checked", "false");

			await user.click(checkboxElement);
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
		});
	});

	describe("Keyboard Navigation", () => {
		it("can be focused with keyboard", () => {
			render(<Checkbox />);
			const checkboxElement = screen.getByRole("checkbox");
			checkboxElement.focus();
			expect(checkboxElement).toHaveFocus();
		});

		it("toggles with Space key", async () => {
			const user = userEvent.setup();
			render(<Checkbox defaultChecked={false} />);
			const checkboxElement = screen.getByRole("checkbox");

			checkboxElement.focus();
			await user.keyboard(" ");

			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
		});

		it("toggles with Enter key", async () => {
			const user = userEvent.setup();
			render(<Checkbox defaultChecked={false} />);
			const checkboxElement = screen.getByRole("checkbox");

			checkboxElement.focus();
			await user.keyboard("{Enter}");

			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
		});
	});

	describe("Accessibility", () => {
		it("has checkbox role", () => {
			render(<Checkbox />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("has correct aria-checked attribute when unchecked", () => {
			render(<Checkbox checked={false} />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-checked", "false");
		});

		it("has correct aria-checked attribute when checked", () => {
			render(<Checkbox checked={true} />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
		});

		it("has correct aria-disabled attribute when disabled", () => {
			render(<Checkbox disabled />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("aria-disabled", "true");
		});

		it("associates label with checkbox", () => {
			render(<Checkbox label="Test label" />);
			const label = screen.getByText("Test label");
			expect(label).toBeInTheDocument();
		});
	});

	describe("Form Integration", () => {
		it("accepts name attribute", () => {
			const { container } = render(<Checkbox name="terms" />);
			const hiddenInput = container.querySelector('input[type="checkbox"]');
			expect(hiddenInput).toHaveAttribute("name", "terms");
		});

		it("accepts required attribute", () => {
			render(<Checkbox required />);
			const checkboxElement = screen.getByRole("checkbox");
			expect(checkboxElement).toHaveAttribute("data-required");
		});

		it("updates hidden input value when toggled", async () => {
			const user = userEvent.setup();
			const { container } = render(<Checkbox name="test" defaultChecked={false} />);
			const hiddenInput = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

			expect(hiddenInput?.checked).toBe(false);

			const checkboxElement = screen.getByRole("checkbox");
			await user.click(checkboxElement);

			expect(hiddenInput?.checked).toBe(true);
		});
	});

	describe("Visual Variants", () => {
		it("renders with different rounded values", () => {
			const { rerender } = render(<Checkbox rounded="small" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();

			rerender(<Checkbox rounded="medium" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();

			rerender(<Checkbox rounded="large" />);
			expect(screen.getByRole("checkbox")).toBeInTheDocument();
		});

		it("displays checkmark when checked", async () => {
			const user = userEvent.setup();
			render(<Checkbox defaultChecked={false} />);
			const checkboxElement = screen.getByRole("checkbox");

			// Initially unchecked
			expect(checkboxElement).toHaveAttribute("aria-checked", "false");

			await user.click(checkboxElement);

			// After checking
			expect(checkboxElement).toHaveAttribute("aria-checked", "true");
			expect(checkboxElement).toHaveAttribute("data-checked");
		});
	});
});

