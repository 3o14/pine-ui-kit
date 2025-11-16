import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vanillaExtractPlugin()],
	build: {
		lib: {
			entry: resolve(__dirname, "packages/components/index.ts"),
			name: "PieUI",
			fileName: (format) => `pie-ui.${format}.js`,
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
