import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/cli.ts", "src/bin.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  sourcemap: true,
  target: "es2022",
  treeshake: true
});
