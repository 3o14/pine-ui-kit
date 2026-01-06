import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
	describe("Rendering", () => {
		it("renders with default props", () => {
			render(<Badge>Badge</Badge>);
			expect(screen.getByText("Badge")).toBeInTheDocument();
		});

		it("renders children correctly", () => {
			render(<Badge>Test Content</Badge>);
			expect(screen.getByText("Test Content")).toBeInTheDocument();
		});

		it("renders with custom className", () => {
			render(<Badge className="custom-class">Test</Badge>);
			const element = screen.getByText("Test");
			expect(element).toHaveClass("custom-class");
		});

		it("renders as span element", () => {
			render(<Badge>Badge</Badge>);
			const element = screen.getByText("Badge");
			expect(element.tagName).toBe("SPAN");
		});
	});

	describe("Size Variants", () => {
		it("renders with small size", () => {
			render(<Badge size="small">Small</Badge>);
			expect(screen.getByText("Small")).toBeInTheDocument();
		});

		it("renders with medium size (default)", () => {
			render(<Badge size="medium">Medium</Badge>);
			expect(screen.getByText("Medium")).toBeInTheDocument();
		});

		it("renders with large size", () => {
			render(<Badge size="large">Large</Badge>);
			expect(screen.getByText("Large")).toBeInTheDocument();
		});

		it("renders with xlarge size", () => {
			render(<Badge size="xlarge">XLarge</Badge>);
			expect(screen.getByText("XLarge")).toBeInTheDocument();
		});
	});

	describe("Variant Styles", () => {
		it("renders with solid variant (default)", () => {
			render(<Badge variant="solid">Solid</Badge>);
			expect(screen.getByText("Solid")).toBeInTheDocument();
		});

		it("renders with outline variant", () => {
			render(<Badge variant="outline">Outline</Badge>);
			expect(screen.getByText("Outline")).toBeInTheDocument();
		});

		it("renders with subtle variant", () => {
			render(<Badge variant="subtle">Subtle</Badge>);
			expect(screen.getByText("Subtle")).toBeInTheDocument();
		});

		it("renders with weak variant", () => {
			render(<Badge variant="weak">Weak</Badge>);
			expect(screen.getByText("Weak")).toBeInTheDocument();
		});
	});

	describe("Intent/Color Variants", () => {
		it("renders with primary intent (default)", () => {
			render(<Badge intent="primary">Primary</Badge>);
			expect(screen.getByText("Primary")).toBeInTheDocument();
		});

		it("renders with secondary intent", () => {
			render(<Badge intent="secondary">Secondary</Badge>);
			expect(screen.getByText("Secondary")).toBeInTheDocument();
		});

		it("renders with success intent", () => {
			render(<Badge intent="success">Success</Badge>);
			expect(screen.getByText("Success")).toBeInTheDocument();
		});

		it("renders with warning intent", () => {
			render(<Badge intent="warning">Warning</Badge>);
			expect(screen.getByText("Warning")).toBeInTheDocument();
		});

		it("renders with danger intent", () => {
			render(<Badge intent="danger">Danger</Badge>);
			expect(screen.getByText("Danger")).toBeInTheDocument();
		});

		it("renders with neutral intent", () => {
			render(<Badge intent="neutral">Neutral</Badge>);
			expect(screen.getByText("Neutral")).toBeInTheDocument();
		});
	});

	describe("Rounded Variants", () => {
		it("renders with small rounded", () => {
			render(<Badge rounded="small">Small Rounded</Badge>);
			expect(screen.getByText("Small Rounded")).toBeInTheDocument();
		});

		it("renders with medium rounded (default)", () => {
			render(<Badge rounded="medium">Medium Rounded</Badge>);
			expect(screen.getByText("Medium Rounded")).toBeInTheDocument();
		});

		it("renders with large rounded", () => {
			render(<Badge rounded="large">Large Rounded</Badge>);
			expect(screen.getByText("Large Rounded")).toBeInTheDocument();
		});
	});

	describe("Dot Indicator", () => {
		it("renders without dot by default", () => {
			const { container } = render(<Badge>No Dot</Badge>);
			const dots = container.querySelectorAll("span > span");
			expect(dots).toHaveLength(0);
		});

		it("renders with dot when showDot is true", () => {
			const { container } = render(<Badge showDot>With Dot</Badge>);
			const badge = screen.getByText("With Dot");
			const dot = badge.querySelector("span");
			expect(dot).toBeInTheDocument();
		});
	});

	describe("Combined Props", () => {
		it("renders with all props combined", () => {
			render(
				<Badge
					size="large"
					variant="outline"
					intent="success"
					rounded="large"
					showDot
				>
					Combined
				</Badge>
			);
			expect(screen.getByText("Combined")).toBeInTheDocument();
		});

		it("renders solid + primary combination", () => {
			render(
				<Badge variant="solid" intent="primary">
					Solid Primary
				</Badge>
			);
			expect(screen.getByText("Solid Primary")).toBeInTheDocument();
		});

		it("renders outline + secondary combination", () => {
			render(
				<Badge variant="outline" intent="secondary">
					Outline Secondary
				</Badge>
			);
			expect(screen.getByText("Outline Secondary")).toBeInTheDocument();
		});

		it("renders subtle + success combination", () => {
			render(
				<Badge variant="subtle" intent="success">
					Subtle Success
				</Badge>
			);
			expect(screen.getByText("Subtle Success")).toBeInTheDocument();
		});

		it("renders weak + danger combination", () => {
			render(
				<Badge variant="weak" intent="danger">
					Weak Danger
				</Badge>
			);
			expect(screen.getByText("Weak Danger")).toBeInTheDocument();
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
			const handleClick = vitest.fn();
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

	describe("Visual Combinations", () => {
		it("renders all size + variant combinations", () => {
			const sizes: Array<"small" | "medium" | "large" | "xlarge"> = [
				"small",
				"medium",
				"large",
				"xlarge",
			];
			const variants: Array<"solid" | "outline" | "subtle" | "weak"> = [
				"solid",
				"outline",
				"subtle",
				"weak",
			];

			sizes.forEach((size) => {
				variants.forEach((variant) => {
					const { container } = render(
						<Badge size={size} variant={variant}>
							{size}-{variant}
						</Badge>
					);
					expect(
						screen.getByText(`${size}-${variant}`)
					).toBeInTheDocument();
					container.remove();
				});
			});
		});

		it("renders all intent colors with solid variant", () => {
			const intents: Array<
				"primary" | "secondary" | "success" | "warning" | "danger" | "neutral"
			> = ["primary", "secondary", "success", "warning", "danger", "neutral"];

			intents.forEach((intent) => {
				const { container } = render(
					<Badge variant="solid" intent={intent}>
						{intent}
					</Badge>
				);
				expect(screen.getByText(intent)).toBeInTheDocument();
				container.remove();
			});
		});

		it("renders all intent colors with outline variant", () => {
			const intents: Array<
				"primary" | "secondary" | "success" | "warning" | "danger" | "neutral"
			> = ["primary", "secondary", "success", "warning", "danger", "neutral"];

			intents.forEach((intent) => {
				const { container } = render(
					<Badge variant="outline" intent={intent}>
						{intent}
					</Badge>
				);
				expect(screen.getByText(intent)).toBeInTheDocument();
				container.remove();
			});
		});
	});

	describe("Use Cases", () => {
		it("renders as status badge", () => {
			render(
				<Badge variant="solid" intent="success" showDot>
					Active
				</Badge>
			);
			expect(screen.getByText("Active")).toBeInTheDocument();
		});

		it("renders as notification count", () => {
			render(
				<Badge variant="solid" intent="danger" rounded="large">
					99+
				</Badge>
			);
			expect(screen.getByText("99+")).toBeInTheDocument();
		});

		it("renders as category tag", () => {
			render(
				<Badge variant="subtle" intent="primary">
					Technology
				</Badge>
			);
			expect(screen.getByText("Technology")).toBeInTheDocument();
		});

		it("renders as feature badge", () => {
			render(
				<Badge variant="outline" intent="secondary" size="small">
					NEW
				</Badge>
			);
			expect(screen.getByText("NEW")).toBeInTheDocument();
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

