import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  theme: {
    "@primary-color": "#1f7688d7",
    "@primary-bk-color": "#333333",
  },
  devtool: "source-map",
});
