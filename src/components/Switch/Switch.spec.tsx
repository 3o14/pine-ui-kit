import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";
import React from "react";

describe("Switch", () => {
	describe("Rendering", () => {
		it("renders without label", () => {
			render(<Switch />);
			expect(screen.getByRole("switch")).toBeInTheDocument();
		});

		it("renders with label", () => {
			render(<Switch label="Enable notifications" />);
			expect(screen.getByRole("switch")).toBeInTheDocument();
			expect(screen.getByText("Enable notifications")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(<Switch className="custom-class" />);
			expect(container.querySelector(".custom-class")).toBeInTheDocument();
		});
	});

	describe("States", () => {
		it("renders unchecked by default", () => {
			render(<Switch />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-checked", "false");
			expect(switchElement).toHaveAttribute("data-unchecked");
		});

		it("renders checked when checked prop is true", () => {
			render(<Switch checked={true} />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-checked", "true");
			expect(switchElement).toHaveAttribute("data-checked");
		});

		it("renders disabled switch", () => {
			render(<Switch disabled />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-disabled", "true");
			expect(switchElement).toHaveAttribute("data-disabled");
		});

		it("supports defaultChecked for uncontrolled mode", () => {
			render(<Switch defaultChecked={true} />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-checked", "true");
			expect(switchElement).toHaveAttribute("data-checked");
		});

		it("renders readOnly switch", () => {
			render(<Switch readOnly />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("data-readonly");
		});
	});

	describe("Interactions", () => {
		it("toggles when clicked (uncontrolled)", async () => {
			const user = userEvent.setup();
			render(<Switch defaultChecked={false} />);
			const switchElement = screen.getByRole("switch");

			expect(switchElement).toHaveAttribute("aria-checked", "false");

			await user.click(switchElement);
			expect(switchElement).toHaveAttribute("aria-checked", "true");

			await user.click(switchElement);
			expect(switchElement).toHaveAttribute("aria-checked", "false");
		});

		it("calls onCheckedChange when toggled", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(<Switch onCheckedChange={handleChange} />);
			const switchElement = screen.getByRole("switch");

			await user.click(switchElement);
			expect(handleChange).toHaveBeenCalled();
			expect(handleChange.mock.calls[0][0]).toBe(true);

			await user.click(switchElement);
			expect(handleChange).toHaveBeenCalledTimes(2);
			expect(handleChange.mock.calls[1][0]).toBe(false);
		});

		it("does not toggle when disabled", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(<Switch disabled onCheckedChange={handleChange} />);
			const switchElement = screen.getByRole("switch");

			await user.click(switchElement);
			expect(handleChange).not.toHaveBeenCalled();
		});

		it("works in controlled mode", async () => {
			const TestComponent = () => {
				const [checked, setChecked] = React.useState(false);
				return (
					<Switch
						checked={checked}
						onCheckedChange={setChecked}
						label="Controlled"
					/>
				);
			};

			const user = userEvent.setup();
			
			render(<TestComponent />);
			const switchElement = screen.getByRole("switch");

			expect(switchElement).toHaveAttribute("aria-checked", "false");

			await user.click(switchElement);
			expect(switchElement).toHaveAttribute("aria-checked", "true");
		});
	});

	describe("Keyboard Navigation", () => {
		it("can be focused with keyboard", () => {
			render(<Switch />);
			const switchElement = screen.getByRole("switch");
			switchElement.focus();
			expect(switchElement).toHaveFocus();
		});

		it("toggles with Space key", async () => {
			const user = userEvent.setup();
			render(<Switch defaultChecked={false} />);
			const switchElement = screen.getByRole("switch");

			switchElement.focus();
			await user.keyboard(" ");

			expect(switchElement).toHaveAttribute("aria-checked", "true");
		});

		it("toggles with Enter key", async () => {
			const user = userEvent.setup();
			render(<Switch defaultChecked={false} />);
			const switchElement = screen.getByRole("switch");

			switchElement.focus();
			await user.keyboard("{Enter}");

			expect(switchElement).toHaveAttribute("aria-checked", "true");
		});
	});

	describe("Accessibility", () => {
		it("has switch role", () => {
			render(<Switch />);
			expect(screen.getByRole("switch")).toBeInTheDocument();
		});

		it("has correct aria-checked attribute when unchecked", () => {
			render(<Switch checked={false} />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-checked", "false");
		});

		it("has correct aria-checked attribute when checked", () => {
			render(<Switch checked={true} />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-checked", "true");
		});

		it("has correct aria-disabled attribute when disabled", () => {
			render(<Switch disabled />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("aria-disabled", "true");
		});

		it("associates label with switch", () => {
			render(<Switch label="Test label" />);
			const label = screen.getByText("Test label");
			expect(label).toBeInTheDocument();
		});
	});

	describe("Form Integration", () => {
		it("accepts name attribute", () => {
			const { container } = render(<Switch name="notifications" />);
			const hiddenInput = container.querySelector('input[type="checkbox"]');
			expect(hiddenInput).toHaveAttribute("name", "notifications");
		});

		it("accepts required attribute", () => {
			render(<Switch required />);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("data-required");
		});

		it("updates hidden input value when toggled", async () => {
			const user = userEvent.setup();
			const { container } = render(<Switch name="test" defaultChecked={false} />);
			const hiddenInput = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

			expect(hiddenInput?.checked).toBe(false);

			const switchElement = screen.getByRole("switch");
			await user.click(switchElement);

			expect(hiddenInput?.checked).toBe(true);
		});
	});
});
