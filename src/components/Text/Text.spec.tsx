import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
	describe("Rendering", () => {
		it("renders with default props", () => {
			render(<Text>Hello World</Text>);
			expect(screen.getByText("Hello World")).toBeInTheDocument();
		});

		it("renders children correctly", () => {
			render(<Text>Test Content</Text>);
			expect(screen.getByText("Test Content")).toBeInTheDocument();
		});

		it("renders with custom className", () => {
			render(<Text className="custom-class">Test</Text>);
			const element = screen.getByText("Test");
			expect(element).toHaveClass("custom-class");
		});
	});

	describe("Semantic Elements (as prop)", () => {
		it("renders as p by default", () => {
			render(<Text>Paragraph</Text>);
			const element = screen.getByText("Paragraph");
			expect(element.tagName).toBe("P");
		});

		it("renders as h1", () => {
			render(<Text as="h1">Heading 1</Text>);
			const element = screen.getByText("Heading 1");
			expect(element.tagName).toBe("H1");
		});

		it("renders as h2", () => {
			render(<Text as="h2">Heading 2</Text>);
			const element = screen.getByText("Heading 2");
			expect(element.tagName).toBe("H2");
		});

		it("renders as h3", () => {
			render(<Text as="h3">Heading 3</Text>);
			const element = screen.getByText("Heading 3");
			expect(element.tagName).toBe("H3");
		});

		it("renders as h4", () => {
			render(<Text as="h4">Heading 4</Text>);
			const element = screen.getByText("Heading 4");
			expect(element.tagName).toBe("H4");
		});

		it("renders as h5", () => {
			render(<Text as="h5">Heading 5</Text>);
			const element = screen.getByText("Heading 5");
			expect(element.tagName).toBe("H5");
		});

		it("renders as h6", () => {
			render(<Text as="h6">Heading 6</Text>);
			const element = screen.getByText("Heading 6");
			expect(element.tagName).toBe("H6");
		});

		it("renders as span", () => {
			render(<Text as="span">Span text</Text>);
			const element = screen.getByText("Span text");
			expect(element.tagName).toBe("SPAN");
		});

		it("renders as div", () => {
			render(<Text as="div">Div text</Text>);
			const element = screen.getByText("Div text");
			expect(element.tagName).toBe("DIV");
		});

		it("renders as label", () => {
			render(<Text as="label">Label text</Text>);
			const element = screen.getByText("Label text");
			expect(element.tagName).toBe("LABEL");
		});
	});

	describe("Size Variants", () => {
		it("renders with xsmall size", () => {
			render(<Text size="xsmall">XSmall text</Text>);
			expect(screen.getByText("XSmall text")).toBeInTheDocument();
		});

		it("renders with small size", () => {
			render(<Text size="small">Small text</Text>);
			expect(screen.getByText("Small text")).toBeInTheDocument();
		});

		it("renders with medium size (default)", () => {
			render(<Text size="medium">Medium text</Text>);
			expect(screen.getByText("Medium text")).toBeInTheDocument();
		});

		it("renders with large size", () => {
			render(<Text size="large">Large text</Text>);
			expect(screen.getByText("Large text")).toBeInTheDocument();
		});

		it("renders with xlarge size", () => {
			render(<Text size="xlarge">XLarge text</Text>);
			expect(screen.getByText("XLarge text")).toBeInTheDocument();
		});

		it("renders with display-small size", () => {
			render(<Text size="display-small">Display Small</Text>);
			expect(screen.getByText("Display Small")).toBeInTheDocument();
		});

		it("renders with display-medium size", () => {
			render(<Text size="display-medium">Display Medium</Text>);
			expect(screen.getByText("Display Medium")).toBeInTheDocument();
		});

		it("renders with display-large size", () => {
			render(<Text size="display-large">Display Large</Text>);
			expect(screen.getByText("Display Large")).toBeInTheDocument();
		});
	});

	describe("Weight Variants", () => {
		it("renders with regular weight (default)", () => {
			render(<Text weight="regular">Regular weight</Text>);
			expect(screen.getByText("Regular weight")).toBeInTheDocument();
		});

		it("renders with medium weight", () => {
			render(<Text weight="medium">Medium weight</Text>);
			expect(screen.getByText("Medium weight")).toBeInTheDocument();
		});

		it("renders with semibold weight", () => {
			render(<Text weight="semibold">Semibold weight</Text>);
			expect(screen.getByText("Semibold weight")).toBeInTheDocument();
		});

		it("renders with bold weight", () => {
			render(<Text weight="bold">Bold weight</Text>);
			expect(screen.getByText("Bold weight")).toBeInTheDocument();
		});
	});

	describe("Intent/Color Variants", () => {
		it("renders with inherit intent (default)", () => {
			render(<Text intent="inherit">Inherit intent</Text>);
			expect(screen.getByText("Inherit intent")).toBeInTheDocument();
		});

		it("renders with primary intent", () => {
			render(<Text intent="primary">Primary intent</Text>);
			expect(screen.getByText("Primary intent")).toBeInTheDocument();
		});

		it("renders with secondary intent", () => {
			render(<Text intent="secondary">Secondary intent</Text>);
			expect(screen.getByText("Secondary intent")).toBeInTheDocument();
		});

		it("renders with success intent", () => {
			render(<Text intent="success">Success intent</Text>);
			expect(screen.getByText("Success intent")).toBeInTheDocument();
		});

		it("renders with warning intent", () => {
			render(<Text intent="warning">Warning intent</Text>);
			expect(screen.getByText("Warning intent")).toBeInTheDocument();
		});

		it("renders with danger intent", () => {
			render(<Text intent="danger">Danger intent</Text>);
			expect(screen.getByText("Danger intent")).toBeInTheDocument();
		});

		it("renders with neutral intent", () => {
			render(<Text intent="neutral">Neutral intent</Text>);
			expect(screen.getByText("Neutral intent")).toBeInTheDocument();
		});
	});

	describe("Align Variants", () => {
		it("renders with left align (default)", () => {
			render(<Text align="left">Left aligned</Text>);
			expect(screen.getByText("Left aligned")).toBeInTheDocument();
		});

		it("renders with center align", () => {
			render(<Text align="center">Center aligned</Text>);
			expect(screen.getByText("Center aligned")).toBeInTheDocument();
		});

		it("renders with right align", () => {
			render(<Text align="right">Right aligned</Text>);
			expect(screen.getByText("Right aligned")).toBeInTheDocument();
		});
	});

	describe("Truncate", () => {
		it("renders without truncate by default", () => {
			render(<Text>Not truncated text</Text>);
			expect(screen.getByText("Not truncated text")).toBeInTheDocument();
		});

		it("renders with truncate enabled", () => {
			render(<Text truncate>This is a very long text that should be truncated</Text>);
			expect(
				screen.getByText("This is a very long text that should be truncated")
			).toBeInTheDocument();
		});
	});

	describe("Combined Props", () => {
		it("renders with multiple props combined", () => {
			render(
				<Text
					as="h2"
					size="large"
					weight="bold"
					intent="primary"
					align="center"
				>
					Combined props
				</Text>
			);
			const element = screen.getByText("Combined props");
			expect(element.tagName).toBe("H2");
			expect(element).toBeInTheDocument();
		});

		it("renders with all props combined including truncate", () => {
			render(
				<Text
					as="span"
					size="small"
					weight="semibold"
					intent="success"
					align="right"
					truncate
				>
					All props combined
				</Text>
			);
			const element = screen.getByText("All props combined");
			expect(element.tagName).toBe("SPAN");
			expect(element).toBeInTheDocument();
		});
	});

	describe("HTML Attributes", () => {
		it("accepts id attribute", () => {
			render(<Text id="custom-id">Test</Text>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("id", "custom-id");
		});

		it("accepts data attributes", () => {
			render(<Text data-testid="custom-test-id">Test</Text>);
			const element = screen.getByTestId("custom-test-id");
			expect(element).toBeInTheDocument();
		});

		it("accepts aria attributes", () => {
			render(<Text aria-label="Custom label">Test</Text>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("aria-label", "Custom label");
		});

		it("accepts style attribute", () => {
			render(<Text style={{ marginTop: "10px" }}>Test</Text>);
			const element = screen.getByText("Test");
			expect(element).toHaveStyle({ marginTop: "10px" });
		});

		it("accepts title attribute", () => {
			render(<Text title="Tooltip text">Test</Text>);
			const element = screen.getByText("Test");
			expect(element).toHaveAttribute("title", "Tooltip text");
		});
	});

	describe("Accessibility", () => {
		it("renders semantic heading elements for better accessibility", () => {
			render(<Text as="h1">Main Heading</Text>);
			const heading = screen.getByRole("heading", { level: 1 });
			expect(heading).toHaveTextContent("Main Heading");
		});

		it("renders with proper semantic structure", () => {
			render(
				<div>
					<Text as="h1">Title</Text>
					<Text as="p">Description</Text>
				</div>
			);
			expect(screen.getByRole("heading")).toHaveTextContent("Title");
		});

		it("supports aria-label for screen readers", () => {
			render(<Text aria-label="Description text">Visible text</Text>);
			const element = screen.getByLabelText("Description text");
			expect(element).toBeInTheDocument();
		});
	});

	describe("Complex Content", () => {
		it("renders nested elements", () => {
			render(
				<Text>
					Hello <strong>World</strong>
				</Text>
			);
			expect(screen.getByText(/Hello/)).toBeInTheDocument();
			expect(screen.getByText("World")).toBeInTheDocument();
		});

		it("renders multiple text nodes", () => {
			render(
				<Text>
					First line
					<br />
					Second line
				</Text>
			);
			expect(screen.getByText(/First line/)).toBeInTheDocument();
			expect(screen.getByText(/Second line/)).toBeInTheDocument();
		});

		it("renders with React fragments", () => {
			render(
				<Text>
					<>
						<span>Part 1</span>
						<span>Part 2</span>
					</>
				</Text>
			);
			expect(screen.getByText("Part 1")).toBeInTheDocument();
			expect(screen.getByText("Part 2")).toBeInTheDocument();
		});
	});

	describe("Edge Cases", () => {
		it("renders empty content", () => {
			const { container } = render(<Text />);
			const element = container.querySelector("p");
			expect(element).toBeInTheDocument();
			expect(element).toBeEmptyDOMElement();
		});

		it("renders with zero as content", () => {
			render(<Text>{0}</Text>);
			expect(screen.getByText("0")).toBeInTheDocument();
		});

		it("renders with false as content (should render nothing)", () => {
			const { container } = render(<Text>{false}</Text>);
			const element = container.querySelector("p");
			expect(element).toBeInTheDocument();
			expect(element).toBeEmptyDOMElement();
		});

		it("renders with null as content (should render nothing)", () => {
			const { container } = render(<Text>{null}</Text>);
			const element = container.querySelector("p");
			expect(element).toBeInTheDocument();
			expect(element).toBeEmptyDOMElement();
		});

		it("renders with undefined as content (should render nothing)", () => {
			const { container } = render(<Text>{undefined}</Text>);
			const element = container.querySelector("p");
			expect(element).toBeInTheDocument();
			expect(element).toBeEmptyDOMElement();
		});
	});
});

