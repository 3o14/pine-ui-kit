import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const sampleOptions = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "cherry", label: "Cherry" },
	{ value: "date", label: "Date" },
	{ value: "elderberry", label: "Elderberry" },
];

const meta = {
	title: "Components/Dropdown",
	component: Dropdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		options: sampleOptions,
	},
	argTypes: {
		options: {
			control: "object",
			description: "드롭다운 옵션 목록",
			table: {
				type: { summary: "DropdownOption[]" },
			},
		},
		value: {
			control: "text",
			description: "선택된 값",
			table: {
				type: { summary: "string" },
			},
		},
		placeholder: {
			control: "text",
			description: "선택되지 않았을 때 표시할 텍스트",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: '"Select an option"' },
			},
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "드롭다운 크기",
			table: {
				type: { summary: "DropdownSize" },
				defaultValue: { summary: "md" },
			},
		},
		fullWidth: {
			control: "boolean",
			description: "전체 너비 사용",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			control: "boolean",
			description: "비활성화 상태",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		mode: {
			control: "select",
			options: ["light", "dark"],
			description: "테마 모드",
			table: {
				type: { summary: '"light" | "dark"' },
				defaultValue: { summary: "light" },
			},
		},
	},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Dropdown
export const Basic: Story = {
	render: function BasicDropdown() {
		const [value, setValue] = React.useState<string>("");

		return (
			<div style={{ width: "300px" }}>
				<Dropdown
					options={sampleOptions}
					value={value}
					onChange={setValue}
					placeholder="Select a fruit"
				/>
			</div>
		);
	},
};

// With Default Value
export const WithDefaultValue: Story = {
	render: function DropdownWithDefault() {
		const [value, setValue] = React.useState<string>("banana");

		return (
			<div style={{ width: "300px" }}>
				<Dropdown options={sampleOptions} value={value} onChange={setValue} />
			</div>
		);
	},
};

// Sizes
export const Sizes: Story = {
	render: function DropdownSizes() {
		const [value1, setValue1] = React.useState<string>("");
		const [value2, setValue2] = React.useState<string>("");
		const [value3, setValue3] = React.useState<string>("");

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					width: "300px",
				}}
			>
				<Dropdown
					options={sampleOptions}
					value={value1}
					onChange={setValue1}
					size="sm"
					placeholder="Small"
				/>
				<Dropdown
					options={sampleOptions}
					value={value2}
					onChange={setValue2}
					size="md"
					placeholder="Medium"
				/>
				<Dropdown
					options={sampleOptions}
					value={value3}
					onChange={setValue3}
					size="lg"
					placeholder="Large"
				/>
			</div>
		);
	},
};

// Full Width
export const FullWidth: Story = {
	render: function DropdownFullWidth() {
		const [value, setValue] = React.useState<string>("");

		return (
			<div style={{ width: "100%", maxWidth: "500px" }}>
				<Dropdown
					options={sampleOptions}
					value={value}
					onChange={setValue}
					fullWidth
					placeholder="Full width dropdown"
				/>
			</div>
		);
	},
};

// Disabled
export const Disabled: Story = {
	render: () => (
		<div style={{ width: "300px" }}>
			<Dropdown
				options={sampleOptions}
				value="apple"
				disabled
				placeholder="Disabled"
			/>
		</div>
	),
};

// With Disabled Options
export const WithDisabledOptions: Story = {
	render: function DropdownDisabledOptions() {
		const [value, setValue] = React.useState<string>("");

		const optionsWithDisabled = [
			{ value: "apple", label: "Apple" },
			{ value: "banana", label: "Banana (Sold Out)", disabled: true },
			{ value: "cherry", label: "Cherry" },
			{ value: "date", label: "Date (Coming Soon)", disabled: true },
			{ value: "elderberry", label: "Elderberry" },
		];

		return (
			<div style={{ width: "300px" }}>
				<Dropdown
					options={optionsWithDisabled}
					value={value}
					onChange={setValue}
					placeholder="Select a fruit"
				/>
			</div>
		);
	},
};

// Many Options (Scrollable)
export const ManyOptions: Story = {
	render: function DropdownManyOptions() {
		const [value, setValue] = React.useState<string>("");

		const manyOptions = Array.from({ length: 20 }, (_, i) => ({
			value: `option-${i + 1}`,
			label: `Option ${i + 1}`,
		}));

		return (
			<div style={{ width: "300px" }}>
				<Dropdown
					options={manyOptions}
					value={value}
					onChange={setValue}
					placeholder="Select an option"
				/>
			</div>
		);
	},
};

// Dark Mode
export const DarkMode: Story = {
	render: function DropdownDarkMode() {
		const [value, setValue] = React.useState<string>("");

		return (
			<div
				style={{
					backgroundColor: "#1a1a1a",
					padding: "2rem",
					borderRadius: "8px",
					width: "300px",
				}}
			>
				<Dropdown
					options={sampleOptions}
					value={value}
					onChange={setValue}
					mode="dark"
					placeholder="Select a fruit"
				/>
			</div>
		);
	},
};

// Form Example
export const FormExample: Story = {
	render: function DropdownForm() {
		const [country, setCountry] = React.useState<string>("");
		const [city, setCity] = React.useState<string>("");
		const [language, setLanguage] = React.useState<string>("");

		const countries = [
			{ value: "us", label: "United States" },
			{ value: "uk", label: "United Kingdom" },
			{ value: "kr", label: "South Korea" },
			{ value: "jp", label: "Japan" },
		];

		const cities = [
			{ value: "ny", label: "New York" },
			{ value: "ld", label: "London" },
			{ value: "sl", label: "Seoul" },
			{ value: "tk", label: "Tokyo" },
		];

		const languages = [
			{ value: "en", label: "English" },
			{ value: "ko", label: "Korean" },
			{ value: "ja", label: "Japanese" },
		];

		return (
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem",
					width: "400px",
					padding: "2rem",
					border: "1px solid #e0e0e0",
					borderRadius: "8px",
				}}
			>
				<div>
					<label
						htmlFor="country"
						style={{
							display: "block",
							marginBottom: "0.5rem",
							fontWeight: 500,
						}}
					>
						Country
					</label>
					<Dropdown
						options={countries}
						value={country}
						onChange={setCountry}
						placeholder="Select your country"
						fullWidth
					/>
				</div>

				<div>
					<label
						htmlFor="city"
						style={{
							display: "block",
							marginBottom: "0.5rem",
							fontWeight: 500,
						}}
					>
						City
					</label>
					<Dropdown
						options={cities}
						value={city}
						onChange={setCity}
						placeholder="Select your city"
						fullWidth
					/>
				</div>

				<div>
					<label
						htmlFor="language"
						style={{
							display: "block",
							marginBottom: "0.5rem",
							fontWeight: 500,
						}}
					>
						Preferred Language
					</label>
					<Dropdown
						options={languages}
						value={language}
						onChange={setLanguage}
						placeholder="Select language"
						fullWidth
					/>
				</div>

				<button
					type="button"
					style={{
						padding: "0.75rem",
						backgroundColor: "#6366f1",
						color: "white",
						border: "none",
						borderRadius: "6px",
						cursor: "pointer",
						fontWeight: 500,
					}}
					onClick={() =>
						alert(`Country: ${country}\nCity: ${city}\nLanguage: ${language}`)
					}
				>
					Submit
				</button>
			</form>
		);
	},
};

// Controlled vs Uncontrolled
export const ControlledExample: Story = {
	render: function DropdownControlled() {
		const [value, setValue] = React.useState<string>("cherry");

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					width: "300px",
				}}
			>
				<Dropdown options={sampleOptions} value={value} onChange={setValue} />
				<p>
					Selected value: <strong>{value || "None"}</strong>
				</p>
				<div style={{ display: "flex", gap: "0.5rem" }}>
					<button
						type="button"
						onClick={() => setValue("apple")}
						style={{
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							border: "1px solid #ddd",
							cursor: "pointer",
						}}
					>
						Select Apple
					</button>
					<button
						type="button"
						onClick={() => setValue("")}
						style={{
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							border: "1px solid #ddd",
							cursor: "pointer",
						}}
					>
						Clear
					</button>
				</div>
			</div>
		);
	},
};
