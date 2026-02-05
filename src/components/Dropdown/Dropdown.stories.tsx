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
	title: "Navigation/Dropdown",
	component: Dropdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		options: sampleOptions,
		value: undefined,
		placeholder: "Select an option",
		size: "medium",
		rounded: "medium",
		intent: "primary",
		fullWidth: false,
		disabled: false,
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
			options: ["small", "medium", "large"],
			description: "드롭다운 크기",
			table: {
				type: { summary: "DropdownSize" },
				defaultValue: { summary: "medium" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "드롭다운 모서리 둥글기",
			table: {
				type: { summary: "DropdownRounded" },
				defaultValue: { summary: "medium" },
			},
		},
		intent: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
				"neutral",
			],
			description: "드롭다운 색상 테마",
			table: {
				type: { summary: "DropdownIntent" },
				defaultValue: { summary: "primary" },
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
	},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Dropdown
export const Basic: Story = {
	render: function BasicDropdown(args) {
		const [value, setValue] = React.useState<string>(args.value ?? "");

		React.useEffect(() => {
			setValue(args.value ?? "");
		}, [args.value]);

		return (
			<div style={{ width: "300px" }}>
				<Dropdown
					{...args}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue ?? "");
						args.onValueChange?.(newValue);
					}}
					placeholder={args.placeholder ?? "Select a fruit"}
				/>
			</div>
		);
	},
};

// With Default Value
export const WithDefaultValue: Story = {
	args: {
		value: "banana",
	},
	render: function DropdownWithDefault(args) {
		const [value, setValue] = React.useState<string>(args.value ?? "banana");

		React.useEffect(() => {
			setValue(args.value ?? "banana");
		}, [args.value]);

		return (
			<div style={{ width: "300px" }}>
				<Dropdown
					{...args}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue ?? "");
						args.onValueChange?.(newValue);
					}}
				/>
			</div>
		);
	},
};

// Sizes
export const Sizes: Story = {
	render: function DropdownSizes(args) {
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
					{...args}
					options={sampleOptions}
					value={value1}
					onValueChange={(value) => setValue1(value ?? "")}
					size="small"
					placeholder="Small"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value2}
					onValueChange={(value) => setValue2(value ?? "")}
					size="medium"
					placeholder="Medium"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value3}
					onValueChange={(value) => setValue3(value ?? "")}
					size="large"
					placeholder="Large"
				/>
			</div>
		);
	},
};

// Intents
export const Intents: Story = {
	render: function DropdownIntents(args) {
		const [value1, setValue1] = React.useState<string>("");
		const [value2, setValue2] = React.useState<string>("");
		const [value3, setValue3] = React.useState<string>("");
		const [value4, setValue4] = React.useState<string>("");
		const [value5, setValue5] = React.useState<string>("");
		const [value6, setValue6] = React.useState<string>("");

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
					{...args}
					options={sampleOptions}
					value={value1}
					onValueChange={(value) => setValue1(value ?? "")}
					intent="primary"
					placeholder="Primary"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value2}
					onValueChange={(value) => setValue2(value ?? "")}
					intent="secondary"
					placeholder="Secondary"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value3}
					onValueChange={(value) => setValue3(value ?? "")}
					intent="success"
					placeholder="Success"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value4}
					onValueChange={(value) => setValue4(value ?? "")}
					intent="warning"
					placeholder="Warning"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value5}
					onValueChange={(value) => setValue5(value ?? "")}
					intent="danger"
					placeholder="Danger"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value6}
					onValueChange={(value) => setValue6(value ?? "")}
					intent="neutral"
					placeholder="Neutral"
				/>
			</div>
		);
	},
};

// Rounded
export const Rounded: Story = {
	render: function DropdownRounded(args) {
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
					{...args}
					options={sampleOptions}
					value={value1}
					onValueChange={(value) => setValue1(value ?? "")}
					rounded="small"
					placeholder="Small rounded"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value2}
					onValueChange={(value) => setValue2(value ?? "")}
					rounded="medium"
					placeholder="Medium rounded"
				/>
				<Dropdown
					{...args}
					options={sampleOptions}
					value={value3}
					onValueChange={(value) => setValue3(value ?? "")}
					rounded="large"
					placeholder="Large rounded"
				/>
			</div>
		);
	},
};

// Full Width
export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
	render: function DropdownFullWidth(args) {
		const [value, setValue] = React.useState<string>(args.value ?? "");

		React.useEffect(() => {
			setValue(args.value ?? "");
		}, [args.value]);

		return (
			<div style={{ width: "100%", maxWidth: "500px" }}>
				<Dropdown
					{...args}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue ?? "");
						args.onValueChange?.(newValue);
					}}
					placeholder={args.placeholder ?? "Full width dropdown"}
				/>
			</div>
		);
	},
};

// Disabled
export const Disabled: Story = {
	args: {
		value: "apple",
		disabled: true,
	},
	render: function DropdownDisabled(args) {
		return (
			<div style={{ width: "300px" }}>
				<Dropdown {...args} placeholder={args.placeholder ?? "Disabled"} />
			</div>
		);
	},
};

// With Disabled Options
export const WithDisabledOptions: Story = {
	render: function DropdownDisabledOptions(args) {
		const [value, setValue] = React.useState<string>(args.value ?? "");

		React.useEffect(() => {
			setValue(args.value ?? "");
		}, [args.value]);

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
					{...args}
					options={optionsWithDisabled}
					value={value}
					onValueChange={(newValue) => {
						setValue(newValue ?? "");
						args.onValueChange?.(newValue);
					}}
					placeholder={args.placeholder ?? "Select a fruit"}
				/>
			</div>
		);
	},
};

// Form Example
export const FormExample: Story = {
	render: function DropdownForm(args) {
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
						{...args}
						options={countries}
						value={country}
						onValueChange={(value) => setCountry(value ?? "")}
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
						{...args}
						options={cities}
						value={city}
						onValueChange={(value) => setCity(value ?? "")}
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
						{...args}
						options={languages}
						value={language}
						onValueChange={(value) => setLanguage(value ?? "")}
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