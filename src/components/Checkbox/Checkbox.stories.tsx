import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Input/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		size: "medium",
		intent: "primary",
		checked: false,
		disabled: false,
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large", "xlarge"],
			description: "체크박스 크기",
			table: {
				type: { summary: "CheckboxSize" },
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
			description: "체크박스 색상 테마",
			table: {
				type: { summary: "CheckboxIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "체크박스 옆에 표시할 레이블",
			table: {
				type: { summary: "string" },
			},
		},
		checked: {
			control: "boolean",
			description: "체크 상태",
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Default Checkbox (Click to toggle)",
		checked: false,
	},
	render: (args) => {
		const Component = () => {
			const [checked, setChecked] = useState(args.checked ?? false);
			return (
				<Checkbox
					{...args}
					checked={checked}
					onCheckedChange={(checked) => setChecked(checked)}
				/>
			);
		};
		return <Component />;
	},
};

export const Checked: Story = {
	args: {
		label: "Checked Checkbox (Click to toggle)",
		checked: true,
	},
	render: (args) => {
		const Component = () => {
			const [checked, setChecked] = useState(args.checked ?? true);
			return (
				<Checkbox
					{...args}
					checked={checked}
					onCheckedChange={(checked) => setChecked(checked)}
				/>
			);
		};
		return <Component />;
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled Checkbox",
		checked: false,
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: "Disabled Checked",
		checked: true,
		disabled: true,
	},
};

export const Sizes: Story = {
	render: (args) => {
		const Component = () => {
			const [small, setSmall] = useState(true);
			const [medium, setMedium] = useState(true);
			const [large, setLarge] = useState(true);
			const [xlarge, setXlarge] = useState(true);
			return (
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<Checkbox
						{...args}
						size="small"
						label="Small (16px)"
						checked={small}
						onCheckedChange={setSmall}
					/>
					<Checkbox
						{...args}
						size="medium"
						label="Medium (20px)"
						checked={medium}
						onCheckedChange={setMedium}
					/>
					<Checkbox
						{...args}
						size="large"
						label="Large (24px)"
						checked={large}
						onCheckedChange={setLarge}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						label="XLarge (28px)"
						checked={xlarge}
						onCheckedChange={setXlarge}
					/>
				</div>
			);
		};
		return <Component />;
	},
};


export const Intents: Story = {
	render: (args) => {
		const Component = () => {
			const [primary, setPrimary] = useState(true);
			const [secondary, setSecondary] = useState(true);
			const [success, setSuccess] = useState(true);
			const [warning, setWarning] = useState(true);
			const [danger, setDanger] = useState(true);
			const [neutral, setNeutral] = useState(true);
			return (
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<Checkbox
						{...args}
						intent="primary"
						label="Primary"
						checked={primary}
						onCheckedChange={setPrimary}
					/>
					<Checkbox
						{...args}
						intent="secondary"
						label="Secondary"
						checked={secondary}
						onCheckedChange={setSecondary}
					/>
					<Checkbox
						{...args}
						intent="success"
						label="Success"
						checked={success}
						onCheckedChange={setSuccess}
					/>
					<Checkbox
						{...args}
						intent="warning"
						label="Warning"
						checked={warning}
						onCheckedChange={setWarning}
					/>
					<Checkbox
						{...args}
						intent="danger"
						label="Danger"
						checked={danger}
						onCheckedChange={setDanger}
					/>
					<Checkbox
						{...args}
						intent="neutral"
						label="Neutral"
						checked={neutral}
						onCheckedChange={setNeutral}
					/>
				</div>
			);
		};
		return <Component />;
	},
};

export const SizesAndIntents: Story = {
	render: (args) => {
		const Component = () => {
			const [states, setStates] = useState<Record<string, boolean>>({
				"small-primary": true,
				"small-secondary": true,
				"small-success": true,
				"small-warning": true,
				"small-danger": true,
				"small-neutral": true,
				"medium-primary": true,
				"medium-secondary": true,
				"medium-success": true,
				"medium-warning": true,
				"medium-danger": true,
				"medium-neutral": true,
				"large-primary": true,
				"large-secondary": true,
				"large-success": true,
				"large-warning": true,
				"large-danger": true,
				"large-neutral": true,
				"xlarge-primary": true,
				"xlarge-secondary": true,
				"xlarge-success": true,
				"xlarge-warning": true,
				"xlarge-danger": true,
				"xlarge-neutral": true,
			});

			const handleChange = (key: string) => (checked: boolean) => {
				setStates((prev) => ({ ...prev, [key]: checked }));
			};

			return (
			<div style={{ display: "flex", gap: "2rem" }}>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Small</h4>
					<Checkbox
						{...args}
						size="small"
						intent="primary"
						label="Primary"
						checked={states["small-primary"]}
						onCheckedChange={handleChange("small-primary")}
					/>
					<Checkbox
						{...args}
						size="small"
						intent="secondary"
						label="Secondary"
						checked={states["small-secondary"]}
						onCheckedChange={handleChange("small-secondary")}
					/>
					<Checkbox
						{...args}
						size="small"
						intent="success"
						label="Success"
						checked={states["small-success"]}
						onCheckedChange={handleChange("small-success")}
					/>
					<Checkbox
						{...args}
						size="small"
						intent="warning"
						label="Warning"
						checked={states["small-warning"]}
						onCheckedChange={handleChange("small-warning")}
					/>
					<Checkbox
						{...args}
						size="small"
						intent="danger"
						label="Danger"
						checked={states["small-danger"]}
						onCheckedChange={handleChange("small-danger")}
					/>
					<Checkbox
						{...args}
						size="small"
						intent="neutral"
						label="Neutral"
						checked={states["small-neutral"]}
						onCheckedChange={handleChange("small-neutral")}
					/>
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Medium</h4>
					<Checkbox
						{...args}
						size="medium"
						intent="primary"
						label="Primary"
						checked={states["medium-primary"]}
						onCheckedChange={handleChange("medium-primary")}
					/>
					<Checkbox
						{...args}
						size="medium"
						intent="secondary"
						label="Secondary"
						checked={states["medium-secondary"]}
						onCheckedChange={handleChange("medium-secondary")}
					/>
					<Checkbox
						{...args}
						size="medium"
						intent="success"
						label="Success"
						checked={states["medium-success"]}
						onCheckedChange={handleChange("medium-success")}
					/>
					<Checkbox
						{...args}
						size="medium"
						intent="warning"
						label="Warning"
						checked={states["medium-warning"]}
						onCheckedChange={handleChange("medium-warning")}
					/>
					<Checkbox
						{...args}
						size="medium"
						intent="danger"
						label="Danger"
						checked={states["medium-danger"]}
						onCheckedChange={handleChange("medium-danger")}
					/>
					<Checkbox
						{...args}
						size="medium"
						intent="neutral"
						label="Neutral"
						checked={states["medium-neutral"]}
						onCheckedChange={handleChange("medium-neutral")}
					/>
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Large</h4>
					<Checkbox
						{...args}
						size="large"
						intent="primary"
						label="Primary"
						checked={states["large-primary"]}
						onCheckedChange={handleChange("large-primary")}
					/>
					<Checkbox
						{...args}
						size="large"
						intent="secondary"
						label="Secondary"
						checked={states["large-secondary"]}
						onCheckedChange={handleChange("large-secondary")}
					/>
					<Checkbox
						{...args}
						size="large"
						intent="success"
						label="Success"
						checked={states["large-success"]}
						onCheckedChange={handleChange("large-success")}
					/>
					<Checkbox
						{...args}
						size="large"
						intent="warning"
						label="Warning"
						checked={states["large-warning"]}
						onCheckedChange={handleChange("large-warning")}
					/>
					<Checkbox
						{...args}
						size="large"
						intent="danger"
						label="Danger"
						checked={states["large-danger"]}
						onCheckedChange={handleChange("large-danger")}
					/>
					<Checkbox
						{...args}
						size="large"
						intent="neutral"
						label="Neutral"
						checked={states["large-neutral"]}
						onCheckedChange={handleChange("large-neutral")}
					/>
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>XLarge</h4>
					<Checkbox
						{...args}
						size="xlarge"
						intent="primary"
						label="Primary"
						checked={states["xlarge-primary"]}
						onCheckedChange={handleChange("xlarge-primary")}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						intent="secondary"
						label="Secondary"
						checked={states["xlarge-secondary"]}
						onCheckedChange={handleChange("xlarge-secondary")}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						intent="success"
						label="Success"
						checked={states["xlarge-success"]}
						onCheckedChange={handleChange("xlarge-success")}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						intent="warning"
						label="Warning"
						checked={states["xlarge-warning"]}
						onCheckedChange={handleChange("xlarge-warning")}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						intent="danger"
						label="Danger"
						checked={states["xlarge-danger"]}
						onCheckedChange={handleChange("xlarge-danger")}
					/>
					<Checkbox
						{...args}
						size="xlarge"
						intent="neutral"
						label="Neutral"
						checked={states["xlarge-neutral"]}
						onCheckedChange={handleChange("xlarge-neutral")}
					/>
				</div>
			</div>
			);
		};
		return <Component />;
	},
};


export const InteractiveStates: Story = {
	render: (args) => {
		const Component = () => {
			const [unchecked, setUnchecked] = useState(false);
			const [checked, setChecked] = useState(true);
			return (
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<div>
						<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Unchecked (Click to toggle)</h4>
						<Checkbox
							{...args}
							label="Hover me"
							checked={unchecked}
							onCheckedChange={setUnchecked}
						/>
					</div>
					<div>
						<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Checked (Click to toggle)</h4>
						<Checkbox
							{...args}
							label="Hover me"
							checked={checked}
							onCheckedChange={setChecked}
						/>
					</div>
					<div>
						<h4 style={{ margin: 0, marginBottom: "0.5rem" }}>Disabled</h4>
						<Checkbox
							{...args}
							label="Disabled unchecked"
							checked={false}
							disabled
						/>
						<br />
						<Checkbox
							{...args}
							label="Disabled checked"
							checked={true}
							disabled
						/>
					</div>
				</div>
			);
		};
		return <Component />;
	},
};

export const FormExample: Story = {
	render: (args) => {
		const Component = () => {
			const [webDev, setWebDev] = useState(false);
			const [mobileDev, setMobileDev] = useState(false);
			const [uiux, setUiux] = useState(true);
			const [backend, setBackend] = useState(false);
			const [devops, setDevops] = useState(false);
			return (
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						maxWidth: "300px",
					}}
				>
					<fieldset style={{ border: "none", padding: 0, margin: 0 }}>
						<legend style={{ marginBottom: "1rem", fontWeight: "bold" }}>
							Select your interests:
						</legend>
						<Checkbox
							{...args}
							label="Web Development"
							checked={webDev}
							onCheckedChange={setWebDev}
						/>
						<Checkbox
							{...args}
							label="Mobile Development"
							checked={mobileDev}
							onCheckedChange={setMobileDev}
						/>
						<Checkbox
							{...args}
							label="UI/UX Design"
							checked={uiux}
							onCheckedChange={setUiux}
						/>
						<Checkbox
							{...args}
							label="Backend Development"
							checked={backend}
							onCheckedChange={setBackend}
						/>
						<Checkbox
							{...args}
							label="DevOps"
							checked={devops}
							onCheckedChange={setDevops}
						/>
					</fieldset>
				</form>
			);
		};
		return <Component />;
	},
};