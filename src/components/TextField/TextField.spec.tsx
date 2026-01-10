import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "./TextField";

describe("TextField", () => {
	describe("Rendering", () => {
		it("renders with default props", () => {
			render(<TextField placeholder="Enter text" />);
			const input = screen.getByPlaceholderText("Enter text");
			expect(input).toBeInTheDocument();
		});

		it("renders with label", () => {
			render(<TextField label="Username" placeholder="Enter username" />);
			expect(screen.getByText("Username")).toBeInTheDocument();
		});

		it("renders with helperText", () => {
			render(
				<TextField
					placeholder="Enter text"
					helperText="This is a helper text"
				/>
			);
			expect(screen.getByText("This is a helper text")).toBeInTheDocument();
		});

		it("renders required indicator when required is true", () => {
			render(<TextField label="Email" required />);
			expect(screen.getByText(/Email \*/)).toBeInTheDocument();
		});

		it("renders with custom className", () => {
			const { container } = render(
				<TextField className="custom-class" placeholder="test" />
			);
			const fieldRoot = container.querySelector(".custom-class");
			expect(fieldRoot).toBeInTheDocument();
		});
	});

	describe("Status", () => {
		it("renders with default status", () => {
			render(<TextField placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeInTheDocument();
		});

		it("renders with error status", () => {
			render(<TextField status="error" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeInTheDocument();
		});

		it("renders with success status", () => {
			render(<TextField status="success" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeInTheDocument();
		});

		it("shows helper text for default status", () => {
			render(
				<TextField
					status="default"
					helperText="Default helper text"
					placeholder="test"
				/>
			);
			expect(screen.getByText("Default helper text")).toBeInTheDocument();
		});

		it("shows helper text for success status", () => {
			render(
				<TextField
					status="success"
					helperText="Success helper text"
					placeholder="test"
				/>
			);
			expect(screen.getByText("Success helper text")).toBeInTheDocument();
		});
	});

	describe("States", () => {
		it("handles disabled state", () => {
			render(<TextField disabled placeholder="Disabled input" />);
			const input = screen.getByPlaceholderText("Disabled input");
			expect(input).toBeDisabled();
		});

		it("handles fullWidth", () => {
			const { container } = render(<TextField fullWidth placeholder="test" />);
			const fieldRoot = container.querySelector("div");
			expect(fieldRoot).toBeInTheDocument();
		});
	});

	describe("Interactions", () => {
		it("handles onChange event", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			render(<TextField onChange={handleChange} placeholder="test" />);
			const input = screen.getByPlaceholderText("test");

			await user.type(input, "hello");
			expect(handleChange).toHaveBeenCalled();
		});

		it("handles onFocus event", async () => {
			const handleFocus = vi.fn();
			const user = userEvent.setup();

			render(<TextField onFocus={handleFocus} placeholder="test" />);
			const input = screen.getByPlaceholderText("test");

			await user.click(input);
			expect(handleFocus).toHaveBeenCalledTimes(1);
		});

		it("handles onBlur event", async () => {
			const handleBlur = vi.fn();
			const user = userEvent.setup();

			render(<TextField onBlur={handleBlur} placeholder="test" />);
			const input = screen.getByPlaceholderText("test");

			await user.click(input);
			await user.tab();
			expect(handleBlur).toHaveBeenCalledTimes(1);
		});

		it("accepts user input", async () => {
			const user = userEvent.setup();
			render(<TextField placeholder="test" />);
			const input = screen.getByPlaceholderText("test") as HTMLInputElement;

			await user.type(input, "test value");
			expect(input.value).toBe("test value");
		});
	});

	describe("Controlled Component", () => {
		it("works as controlled component", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();

			const { rerender } = render(
				<TextField value="initial" onChange={handleChange} placeholder="test" />
			);
			const input = screen.getByPlaceholderText("test") as HTMLInputElement;
			expect(input.value).toBe("initial");

			await user.type(input, "a");
			expect(handleChange).toHaveBeenCalled();

			rerender(
				<TextField value="updated" onChange={handleChange} placeholder="test" />
			);
			expect(input.value).toBe("updated");
		});
	});

	describe("Types", () => {
		it("renders as input element", () => {
			render(<TextField placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeInTheDocument();
			expect(input.tagName).toBe("INPUT");
		});

		it("renders with type='email'", () => {
			render(<TextField type="email" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("type", "email");
		});

		it("renders with type='password'", () => {
			render(<TextField type="password" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("type", "password");
		});

		it("renders with type='number'", () => {
			render(<TextField type="number" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("type", "number");
		});
	});

	describe("HTML Attributes", () => {
		it("accepts placeholder attribute", () => {
			render(<TextField placeholder="Enter your name" />);
			const input = screen.getByPlaceholderText("Enter your name");
			expect(input).toHaveAttribute("placeholder", "Enter your name");
		});

		it("accepts name attribute", () => {
			render(<TextField name="username" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("name", "username");
		});

		it("accepts id attribute", () => {
			render(<TextField id="custom-id" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("id", "custom-id");
		});

		it("accepts required attribute", () => {
			render(<TextField required placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeRequired();
		});

		it("accepts maxLength attribute", () => {
			render(<TextField maxLength={10} placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("maxLength", "10");
		});

		it("accepts minLength attribute", () => {
			render(<TextField minLength={3} placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("minLength", "3");
		});

		it("accepts pattern attribute", () => {
			render(<TextField pattern="[0-9]+" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("pattern", "[0-9]+");
		});

		it("accepts autoComplete attribute", () => {
			render(<TextField autoComplete="email" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("autoComplete", "email");
		});

		it("accepts autoFocus attribute", () => {
			render(<TextField autoFocus placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveFocus();
		});

		it("accepts readOnly attribute", () => {
			render(<TextField readOnly value="readonly value" placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toHaveAttribute("readOnly");
		});
	});

	describe("Accessibility", () => {
		it("associates label with input", () => {
			render(<TextField label="Email Address" placeholder="test" />);
			const label = screen.getByText("Email Address");
			const input = screen.getByPlaceholderText("test");
			expect(label).toBeInTheDocument();
			expect(input).toBeInTheDocument();
		});

		it("has proper ARIA attributes when disabled", () => {
			render(<TextField disabled placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeDisabled();
		});

		it("has proper ARIA attributes when required", () => {
			render(<TextField required placeholder="test" />);
			const input = screen.getByPlaceholderText("test");
			expect(input).toBeRequired();
		});
	});

	describe("Form Integration", () => {
		it("works within a form", async () => {
			const handleSubmit = vi.fn((e) => e.preventDefault());
			const user = userEvent.setup();

			render(
				<form onSubmit={handleSubmit}>
					<TextField name="username" placeholder="Username" />
					<button type="submit">Submit</button>
				</form>
			);

			const input = screen.getByPlaceholderText("Username");
			await user.type(input, "testuser");

			const submitButton = screen.getByRole("button", { name: /submit/i });
			await user.click(submitButton);

			expect(handleSubmit).toHaveBeenCalledTimes(1);
		});
	});

	describe("Validation", () => {
		it("accepts validate prop", () => {
			const validate = (value: unknown) => {
				if (typeof value === "string" && value.length < 3) {
					return "Must be at least 3 characters";
				}
				return null;
			};

			render(
				<TextField validate={validate} placeholder="test" label="Username" />
			);

			const input = screen.getByPlaceholderText("test");
			expect(input).toBeInTheDocument();
		});
	});
});

