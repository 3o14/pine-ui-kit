import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./packages"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "packages/components/index.ts"),
			name: "PineUI",
			fileName: (format) => `pine-ui.${format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
