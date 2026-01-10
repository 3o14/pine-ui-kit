import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab } from "./Tab";

describe("Tab", () => {
	const sampleTabs = [
		{ value: "tab1", label: "Tab 1", content: <div>Content 1</div> },
		{ value: "tab2", label: "Tab 2", content: <div>Content 2</div> },
		{ value: "tab3", label: "Tab 3", content: <div>Content 3</div> },
	];

	describe("Rendering", () => {
		it("renders all tabs", () => {
			render(<Tab tabs={sampleTabs} defaultValue="tab1" />);
			expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
			expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
			expect(screen.getByRole("tab", { name: "Tab 3" })).toBeInTheDocument();
		});

		it("renders initial content", () => {
			render(<Tab tabs={sampleTabs} defaultValue="tab1" />);
			expect(screen.getByText("Content 1")).toBeInTheDocument();
		});
	});

	describe("Interactions", () => {
		it("switches content on tab click", async () => {
			const user = userEvent.setup();
			render(<Tab tabs={sampleTabs} defaultValue="tab1" />);

			await user.click(screen.getByRole("tab", { name: "Tab 2" }));
			expect(screen.getByText("Content 2")).toBeInTheDocument();
		});

		it("respects disabled state", () => {
			const tabsWithDisabled = [
				...sampleTabs,
				{ value: "tab4", label: "Disabled", content: <div>Content 4</div>, disabled: true },
			];
			render(<Tab tabs={tabsWithDisabled} defaultValue="tab1" />);

			const disabledTab = screen.getByRole("tab", { name: "Disabled" });
			expect(disabledTab).toHaveAttribute("data-disabled");
		});
	});
});

