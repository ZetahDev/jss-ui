import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("src/styles/styles.css");
const targetDir = resolve("dist");
const target = resolve(targetDir, "styles.css");

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);
