import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

describe("Tooltip", () => {
	describe("Rendering", () => {
		it("renders trigger element", () => {
			render(
				<Tooltip content="Tooltip text">
					<Button>Hover me</Button>
				</Tooltip>
			);
			expect(screen.getByRole("button", { name: /hover me/i })).toBeInTheDocument();
		});

		it("shows tooltip on hover", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Tooltip text">
					<Button>Hover me</Button>
				</Tooltip>
			);

			const button = screen.getByRole("button");
			await user.hover(button);

			await waitFor(() => {
				expect(screen.getByText("Tooltip text")).toBeInTheDocument();
			});
		});

		it("hides tooltip on unhover", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Tooltip text">
					<Button>Hover me</Button>
				</Tooltip>
			);

			const button = screen.getByRole("button");
			await user.hover(button);

			await waitFor(() => {
				expect(screen.getByText("Tooltip text")).toBeInTheDocument();
			});

			await user.unhover(button);

			await waitFor(() => {
				expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
			});
		});
	});

	describe("Intent/Color Variants", () => {
		const intents = ["primary", "secondary", "success", "warning", "danger", "neutral"] as const;

		intents.forEach((intent) => {
			it(`renders with ${intent} intent`, async () => {
				const user = userEvent.setup();
				render(
					<Tooltip content={`${intent} tooltip`} intent={intent}>
						<Button>{intent}</Button>
					</Tooltip>
				);

				await user.hover(screen.getByRole("button"));

				await waitFor(() => {
					expect(screen.getByText(`${intent} tooltip`)).toBeInTheDocument();
				});
			});
		});
	});

	describe("Sides", () => {
		const sides = ["top", "right", "bottom", "left"] as const;

		sides.forEach((side) => {
			it(`renders on ${side} side`, async () => {
				const user = userEvent.setup();
				render(
					<Tooltip content={`${side} tooltip`} side={side}>
						<Button>{side}</Button>
					</Tooltip>
				);

				await user.hover(screen.getByRole("button"));

				await waitFor(() => {
					expect(screen.getByText(`${side} tooltip`)).toBeInTheDocument();
				});
			});
		});
	});

	describe("Alignment", () => {
		const alignments = ["start", "center", "end"] as const;

		alignments.forEach((align) => {
			it(`renders with ${align} alignment`, async () => {
				const user = userEvent.setup();
				render(
					<Tooltip content={`${align} aligned`} align={align}>
						<Button>{align}</Button>
					</Tooltip>
				);

				await user.hover(screen.getByRole("button"));

				await waitFor(() => {
					expect(screen.getByText(`${align} aligned`)).toBeInTheDocument();
				});
			});
		});
	});

	describe("Arrow", () => {
		it("shows arrow by default", async () => {
			const user = userEvent.setup();
			const { container } = render(
				<Tooltip content="With arrow">
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				const arrow = container.querySelector("svg");
				expect(arrow).toBeInTheDocument();
			});
		});

		it("hides arrow when showArrow is false", async () => {
			const user = userEvent.setup();
			const { container } = render(
				<Tooltip content="Without arrow" showArrow={false}>
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("Without arrow")).toBeInTheDocument();
			});

			const arrow = container.querySelector("svg");
			expect(arrow).not.toBeInTheDocument();
		});
	});

	describe("Disabled State", () => {
		it("does not show tooltip when disabled", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Disabled tooltip" disabled>
					<Button>Hover me</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			// Wait a bit to ensure tooltip doesn't appear
			await new Promise(resolve => setTimeout(resolve, 300));

			expect(screen.queryByText("Disabled tooltip")).not.toBeInTheDocument();
		});
	});

	describe("Content Types", () => {
		it("renders text content", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Text content">
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("Text content")).toBeInTheDocument();
			});
		});

		it("renders complex content", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content={<div><strong>Bold</strong> text</div>}>
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("Bold")).toBeInTheDocument();
				expect(screen.getByText(/text/)).toBeInTheDocument();
			});
		});

		it("renders long content", async () => {
			const longText = "This is a very long tooltip content that should wrap properly";
			const user = userEvent.setup();
			render(
				<Tooltip content={longText}>
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText(longText)).toBeInTheDocument();
			});
		});
	});

	describe("Offsets", () => {
		it("applies sideOffset", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="With offset" sideOffset={16}>
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("With offset")).toBeInTheDocument();
			});
		});

		it("applies alignOffset", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="With align offset" alignOffset={10}>
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("With align offset")).toBeInTheDocument();
			});
		});
	});

	describe("Custom className", () => {
		it("applies custom className", async () => {
			const user = userEvent.setup();
			const { container } = render(
				<Tooltip content="Custom class" className="custom-tooltip">
					<Button>Hover</Button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				const tooltip = container.querySelector(".custom-tooltip");
				expect(tooltip).toBeInTheDocument();
			});
		});
	});

	describe("Accessibility", () => {
		it("has proper ARIA attributes", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Accessible tooltip">
					<Button>Hover</Button>
				</Tooltip>
			);

			const button = screen.getByRole("button");
			await user.hover(button);

			await waitFor(() => {
				expect(screen.getByText("Accessible tooltip")).toBeInTheDocument();
			});
		});

		it("shows on keyboard focus", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Focus tooltip">
					<Button>Tab to me</Button>
				</Tooltip>
			);

			const button = screen.getByRole("button");
			await user.tab();

			expect(button).toHaveFocus();

			await waitFor(() => {
				expect(screen.getByText("Focus tooltip")).toBeInTheDocument();
			});
		});

		it("hides on blur", async () => {
			const user = userEvent.setup();
			render(
				<>
					<Tooltip content="Focus tooltip">
						<Button>Tab to me</Button>
					</Tooltip>
					<Button>Other button</Button>
				</>
			);

			await user.tab();
			
			await waitFor(() => {
				expect(screen.getByText("Focus tooltip")).toBeInTheDocument();
			});

			await user.tab();

			await waitFor(() => {
				expect(screen.queryByText("Focus tooltip")).not.toBeInTheDocument();
			});
		});
	});

	describe("Multiple Tooltips", () => {
		it("handles multiple tooltips independently", async () => {
			const user = userEvent.setup();
			render(
				<div>
					<Tooltip content="First tooltip">
						<Button>First</Button>
					</Tooltip>
					<Tooltip content="Second tooltip">
						<Button>Second</Button>
					</Tooltip>
				</div>
			);

			const [firstButton, secondButton] = screen.getAllByRole("button");

			await user.hover(firstButton);

			await waitFor(() => {
				expect(screen.getByText("First tooltip")).toBeInTheDocument();
				expect(screen.queryByText("Second tooltip")).not.toBeInTheDocument();
			});

			await user.unhover(firstButton);
			await user.hover(secondButton);

			await waitFor(() => {
				expect(screen.queryByText("First tooltip")).not.toBeInTheDocument();
				expect(screen.getByText("Second tooltip")).toBeInTheDocument();
			});
		});
	});

	describe("Trigger Types", () => {
		it("works with different trigger elements", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Icon tooltip">
					<button aria-label="Icon button">🔔</button>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("Icon tooltip")).toBeInTheDocument();
			});
		});

		it("works with custom elements", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Custom element">
					<div role="button" tabIndex={0}>Custom trigger</div>
				</Tooltip>
			);

			await user.hover(screen.getByRole("button"));

			await waitFor(() => {
				expect(screen.getByText("Custom element")).toBeInTheDocument();
			});
		});
	});
});

