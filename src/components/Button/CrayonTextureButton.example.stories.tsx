import type { Meta, StoryObj } from "@storybook/react";
import { CrayonTextureButtonExample } from "./CrayonTextureButton.example";

const meta = {
	title: "_Dev/CrayonTexture",
	component: CrayonTextureButtonExample,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"질감은 그라디언트·블렌드·노이즈 패턴, **테두리는 SVG 필터(feTurbulence + feDisplacementMap)로 울퉁불퉁 표현**합니다. **borderRadius prop으로 둥근 정도를 제어**합니다(1번 방식).",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["purple", "pink", "blue", "yellow", "green", "cream", "dark"],
			description: "크레용 색상 variant",
		},
		borderRadius: {
			control: { type: "number", min: 0, max: 48, step: 2 },
			description: "테두리 둥근 정도(px). prop으로 제어.",
		},
		borderWidth: {
			control: { type: "number", min: 1, max: 6, step: 1 },
			description: "테두리 두께(px)",
		},
		borderColor: {
			control: "color",
			description: "테두리 색 (미지정 시 variant 기준)",
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
		},
	},
} satisfies Meta<typeof CrayonTextureButtonExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "CSS Crayon",
		variant: "purple",
		borderRadius: 20,
		borderWidth: 2,
		disabled: false,
	},
};

/** borderRadius를 바꿔가며 둥근 정도 제어 */
export const BorderRadiusControl: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
				<CrayonTextureButtonExample {...args} borderRadius={8}>
					radius 8
				</CrayonTextureButtonExample>
				<CrayonTextureButtonExample {...args} borderRadius={16}>
					radius 16
				</CrayonTextureButtonExample>
				<CrayonTextureButtonExample {...args} borderRadius={24}>
					radius 24
				</CrayonTextureButtonExample>
				<CrayonTextureButtonExample {...args} borderRadius={999}>
					pill
				</CrayonTextureButtonExample>
			</div>
		</div>
	),
	args: {
		variant: "dark",
		borderWidth: 2,
	},
	parameters: {
		docs: {
			description: {
				story: "borderRadius prop만 바꿔서 둥근 정도를 제어. 테두리 울퉁불퉁은 그대로 유지됩니다.",
			},
		},
	},
};

export const AllVariants: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
			<CrayonTextureButtonExample {...args} variant="purple">
				Purple
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="pink">
				Pink
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="blue">
				Blue
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="yellow">
				Yellow
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="green">
				Green
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="cream">
				Cream
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="dark">
				Dark
			</CrayonTextureButtonExample>
		</div>
	),
	args: {
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					"같은 CSS 텍스처 레이어를 여러 배경색에 적용한 모습. SVG 없이 그라디언트·블렌드·점 패턴만 사용합니다.",
			},
		},
	},
};

export const Disabled: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
			<CrayonTextureButtonExample {...args} variant="purple" disabled>
				Disabled
			</CrayonTextureButtonExample>
			<CrayonTextureButtonExample {...args} variant="green" disabled>
				Disabled
			</CrayonTextureButtonExample>
		</div>
	),
	args: {
		disabled: true,
	},
};
