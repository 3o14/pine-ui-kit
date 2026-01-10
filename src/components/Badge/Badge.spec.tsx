import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
	describe("Rendering", () => {
		it("renders with children", () => {
			render(<Badge>Test Badge</Badge>);
			expect(screen.getByText("Test Badge")).toBeInTheDocument();
		});

		it("renders as span element", () => {
			render(<Badge>Badge</Badge>);
			const element = screen.getByText("Badge");
			expect(element.tagName).toBe("SPAN");
		});

		it("renders with custom className", () => {
			render(<Badge className="custom-class">Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveClass("custom-class");
		});
	});

	describe("Dot Indicator", () => {
		it("does not render dot by default", () => {
			render(<Badge>No Dot</Badge>);
			const badge = screen.getByText("No Dot");
			const dot = badge.querySelector("span");
			expect(dot).not.toBeInTheDocument();
		});

		it("renders dot when showDot is true", () => {
			render(<Badge showDot>With Dot</Badge>);
			const badge = screen.getByText("With Dot");
			const dot = badge.querySelector("span");
			expect(dot).toBeInTheDocument();
		});
	});

	describe("HTML Attributes", () => {
		it("accepts id attribute", () => {
			render(<Badge id="custom-id">Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("id", "custom-id");
		});

		it("accepts data attributes", () => {
			render(<Badge data-testid="custom-test-id">Test</Badge>);
			const element = screen.getByTestId("custom-test-id");
			expect(element).toBeInTheDocument();
		});

		it("accepts aria attributes", () => {
			render(<Badge aria-label="Custom label">Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("aria-label", "Custom label");
		});

		it("accepts style attribute", () => {
			render(<Badge style={{ marginLeft: "10px" }}>Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveStyle({ marginLeft: "10px" });
		});

		it("accepts title attribute", () => {
			render(<Badge title="Tooltip text">Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("title", "Tooltip text");
		});

		it("accepts onClick handler", () => {
			const handleClick = vi.fn();
			render(<Badge onClick={handleClick}>Clickable</Badge>);
			const element = screen.getByText("Clickable");
			element.click();
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	describe("Content Types", () => {
		it("renders text content", () => {
			render(<Badge>Text Badge</Badge>);
			expect(screen.getByText("Text Badge")).toBeInTheDocument();
		});

		it("renders number content", () => {
			render(<Badge>42</Badge>);
			expect(screen.getByText("42")).toBeInTheDocument();
		});

		it("renders with zero", () => {
			render(<Badge>{0}</Badge>);
			expect(screen.getByText("0")).toBeInTheDocument();
		});

		it("renders nested elements", () => {
			render(
				<Badge>
					<strong>Bold</strong> Text
				</Badge>
			);
			expect(screen.getByText("Bold")).toBeInTheDocument();
			expect(screen.getByText(/Text/)).toBeInTheDocument();
		});

		it("renders with icon", () => {
			render(
				<Badge>
					<span>✓</span> Success
				</Badge>
			);
			expect(screen.getByText("✓")).toBeInTheDocument();
			expect(screen.getByText(/Success/)).toBeInTheDocument();
		});
	});

	describe("Accessibility", () => {
		it("has proper role when used as status indicator", () => {
			render(<Badge role="status">Active</Badge>);
			const element = screen.getByText("Active");
			expect(element).toHaveAttribute("role", "status");
		});

		it("supports aria-label for screen readers", () => {
			render(<Badge aria-label="3 unread messages">3</Badge>);
			const element = screen.getByLabelText("3 unread messages");
			expect(element).toBeInTheDocument();
		});

		it("supports aria-describedby", () => {
			render(
				<>
					<Badge aria-describedby="badge-desc">New</Badge>
					<span id="badge-desc">This item is new</span>
				</>
			);
			const badge = screen.getByText("New");
			expect(badge).toHaveAttribute("aria-describedby", "badge-desc");
		});
	});

	describe("Edge Cases", () => {
		it("renders with very long text", () => {
			const longText = "This is a very long badge text that might overflow";
			render(<Badge>{longText}</Badge>);
			expect(screen.getByText(longText)).toBeInTheDocument();
		});

		it("renders with single character", () => {
			render(<Badge>A</Badge>);
			expect(screen.getByText("A")).toBeInTheDocument();
		});

		it("renders with special characters", () => {
			render(<Badge>★ Special ★</Badge>);
			expect(screen.getByText("★ Special ★")).toBeInTheDocument();
		});

		it("renders with emoji", () => {
			render(<Badge>🎉 Party</Badge>);
			expect(screen.getByText("🎉 Party")).toBeInTheDocument();
		});
	});
});
