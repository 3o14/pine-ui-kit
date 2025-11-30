// vite.config.ts
import { defineConfig } from "file:///Users/wonju/Developer/pine-ui-kit/node_modules/.pnpm/vite@5.4.21_@types+node@24.10.1/node_modules/vite/dist/node/index.js";
import react from "file:///Users/wonju/Developer/pine-ui-kit/node_modules/.pnpm/@vitejs+plugin-react@5.1.1_vite@5.4.21_@types+node@24.10.1_/node_modules/@vitejs/plugin-react/dist/index.js";
import { vanillaExtractPlugin } from "file:///Users/wonju/Developer/pine-ui-kit/node_modules/.pnpm/@vanilla-extract+vite-plugin@5.1.1_@types+node@24.10.1_vite@5.4.21_@types+node@24.10.1_/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/wonju/Developer/pine-ui-kit";
var vite_config_default = defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "packages/components/index.ts"),
      name: "PineUI",
      fileName: (format) => `pine-ui.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd29uanUvRGV2ZWxvcGVyL3BpbmUtdWkta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvd29uanUvRGV2ZWxvcGVyL3BpbmUtdWkta2l0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93b25qdS9EZXZlbG9wZXIvcGluZS11aS1raXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgdmFuaWxsYUV4dHJhY3RQbHVnaW4gfSBmcm9tIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3JlYWN0KCksIHZhbmlsbGFFeHRyYWN0UGx1Z2luKCldLFxuXHRidWlsZDoge1xuXHRcdGxpYjoge1xuXHRcdFx0ZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInBhY2thZ2VzL2NvbXBvbmVudHMvaW5kZXgudHNcIiksXG5cdFx0XHRuYW1lOiBcIlBpbmVVSVwiLFxuXHRcdFx0ZmlsZU5hbWU6IChmb3JtYXQpID0+IGBwaW5lLXVpLiR7Zm9ybWF0fS5qc2AsXG5cdFx0XHRmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSxcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLFxuXHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdGdsb2JhbHM6IHtcblx0XHRcdFx0XHRyZWFjdDogXCJSZWFjdFwiLFxuXHRcdFx0XHRcdFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UixTQUFTLG9CQUFvQjtBQUNyVCxPQUFPLFdBQVc7QUFDbEIsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxlQUFlO0FBSHhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7QUFBQSxFQUN6QyxPQUFPO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSixPQUFPLFFBQVEsa0NBQVcsOEJBQThCO0FBQUEsTUFDeEQsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsV0FBVyxNQUFNO0FBQUEsTUFDdkMsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3RCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLE1BQ3BELFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNkO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
