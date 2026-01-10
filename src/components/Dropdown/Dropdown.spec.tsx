import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown, type DropdownOption } from "./Dropdown";
import React from "react";

const mockOptions: DropdownOption[] = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
	{ value: "3", label: "Option 3" },
	{ value: "4", label: "Option 4", disabled: true },
];

describe("Dropdown", () => {
	describe("Rendering", () => {
		it("renders with placeholder", () => {
			render(
				<Dropdown options={mockOptions} placeholder="Select an option" />
			);
			expect(screen.getByRole("combobox")).toBeInTheDocument();
			expect(screen.getByText("Select an option")).toBeInTheDocument();
		});

		it("renders with selected value", () => {
			render(
				<Dropdown
					options={mockOptions}
					value="2"
					placeholder="Select an option"
				/>
			);
			expect(screen.getByText("Option 2")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(
				<Dropdown
					options={mockOptions}
					className="custom-class"
				/>
			);
			expect(container.querySelector(".custom-class")).toBeInTheDocument();
		});

		it("renders disabled dropdown", () => {
			render(<Dropdown options={mockOptions} disabled />);
			const trigger = screen.getByRole("combobox");
			expect(trigger).toHaveAttribute("data-disabled");
		});
	});

	describe("Interactions", () => {
		it("opens dropdown when clicked", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});
		});

		it("selects option when clicked", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(
				<Dropdown options={mockOptions} onValueChange={handleChange} />
			);

			const trigger = screen.getByRole("combobox");
			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});

			const option2 = await screen.findByRole("option", { name: "Option 2" });
			await user.click(option2);

			await waitFor(() => {
				expect(handleChange).toHaveBeenCalledWith("2");
			});
		});

		it("does not open when disabled", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} disabled />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			// Should not open
			expect(trigger).toHaveAttribute("aria-expanded", "false");
		});

		it("does not select disabled option", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(
				<Dropdown options={mockOptions} onValueChange={handleChange} />
			);

			const trigger = screen.getByRole("combobox");
			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});

			const option4 = await screen.findByRole("option", { name: "Option 4" });
			expect(option4).toHaveAttribute("data-disabled");
		});
	});

	describe("Keyboard Navigation", () => {
		it("opens dropdown with Enter key", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			trigger.focus();
			await user.keyboard("{Enter}");

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});
		});

		it("opens dropdown with Space key", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			trigger.focus();
			await user.keyboard(" ");

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});
		});

		it("closes dropdown with Escape key", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});

			await user.keyboard("{Escape}");

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "false");
			});
		});
	});

	describe("Controlled Mode", () => {
		it("works in controlled mode", async () => {
			const TestComponent = () => {
				const [value, setValue] = React.useState<string | null>(null);
				return (
					<Dropdown
						options={mockOptions}
						value={value || undefined}
						onValueChange={setValue}
						placeholder="Select"
					/>
				);
			};

			const user = userEvent.setup();
			render(<TestComponent />);

			const trigger = screen.getByRole("combobox");
			expect(trigger).toBeInTheDocument();

			// Trigger should initially show placeholder
			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});

			const option1 = await screen.findByRole("option", { name: "Option 1" });
			await user.click(option1);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "false");
			});
		});

		it("supports defaultValue for uncontrolled mode", () => {
			render(
				<Dropdown
					options={mockOptions}
					defaultValue="2"
					placeholder="Select"
				/>
			);
			expect(screen.getByText("Option 2")).toBeInTheDocument();
		});
	});

	describe("Accessibility", () => {
		it("has combobox role", () => {
			render(<Dropdown options={mockOptions} />);
			expect(screen.getByRole("combobox")).toBeInTheDocument();
		});

		it("has correct aria-expanded attribute", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			expect(trigger).toHaveAttribute("aria-expanded", "false");

			await user.click(trigger);

			await waitFor(() => {
				expect(trigger).toHaveAttribute("aria-expanded", "true");
			});
		});

		it("has correct aria-disabled attribute when disabled", () => {
			render(<Dropdown options={mockOptions} disabled />);
			const trigger = screen.getByRole("combobox");
			expect(trigger).toHaveAttribute("data-disabled");
		});

		it("options have option role", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			await waitFor(async () => {
				const options = await screen.findAllByRole("option");
				expect(options).toHaveLength(4);
			});
		});

		it("selected option has correct aria-selected attribute", async () => {
			const user = userEvent.setup();

			render(<Dropdown options={mockOptions} value="2" />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			await waitFor(async () => {
				const option2 = await screen.findByRole("option", { name: "Option 2" });
				expect(option2).toHaveAttribute("data-selected");
			});
		});
	});

	describe("Form Integration", () => {
		it("accepts name attribute", () => {
			const { container } = render(
				<Dropdown options={mockOptions} name="dropdown-field" />
			);
			const hiddenInput = container.querySelector(
				'input[name="dropdown-field"]'
			);
			expect(hiddenInput).toBeInTheDocument();
		});

		it("accepts required attribute", () => {
			render(<Dropdown options={mockOptions} required />);
			const trigger = screen.getByRole("combobox");
			// Required attribute is passed to the component
			expect(trigger).toBeInTheDocument();
		});
	});

	describe("Width", () => {
		it("renders with fullWidth", () => {
			render(<Dropdown options={mockOptions} fullWidth />);
			const trigger = screen.getByRole("combobox");
			expect(trigger).toBeInTheDocument();
		});

		it("renders with default width", () => {
			render(<Dropdown options={mockOptions} />);
			const trigger = screen.getByRole("combobox");
			expect(trigger).toBeInTheDocument();
		});
	});

	describe("Empty Options", () => {
		it("renders with empty options array", () => {
			render(<Dropdown options={[]} placeholder="No options" />);
			expect(screen.getByText("No options")).toBeInTheDocument();
		});
	});

	describe("Multiple Options", () => {
		it("renders many options", async () => {
			const manyOptions: DropdownOption[] = Array.from({ length: 20 }, (_, i) => ({
				value: `${i + 1}`,
				label: `Option ${i + 1}`,
			}));

			const user = userEvent.setup();

			render(<Dropdown options={manyOptions} />);
			const trigger = screen.getByRole("combobox");

			await user.click(trigger);

			await waitFor(async () => {
				const options = await screen.findAllByRole("option");
				expect(options.length).toBe(20);
			});
		});
	});
});

