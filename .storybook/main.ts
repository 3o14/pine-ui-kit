import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

const config: StorybookConfig = {
	stories: [
		"../.storybook/**/*.mdx",
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	async viteFinal(config) {
		const plugins = config.plugins || [];
		const hasVanillaExtract = plugins.some(
			(plugin) =>
				plugin &&
				(typeof plugin === "function" ||
					(typeof plugin === "object" &&
						plugin !== null &&
						"name" in plugin &&
						plugin.name === "vanilla-extract"))
		);

		if (!hasVanillaExtract) {
			config.plugins = [vanillaExtractPlugin(), ...plugins];
		}

		if (!config.resolve) {
			config.resolve = {};
		}
		if (!config.resolve.alias) {
			config.resolve.alias = {};
		}
		config.resolve.alias["@"] = resolve(__dirname, "../src");

		return config;
	},
};
export default config;
