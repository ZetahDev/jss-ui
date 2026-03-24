import { loadThemeConfig, resolveConfigPath } from "../config";
import { writeThemeArtifacts } from "../generate";

type WriteStreamLike = Pick<NodeJS.WritableStream, "write">;

export interface GenerateThemeOptions {
  cwd?: string;
  configPath?: string;
  stdout?: WriteStreamLike;
}

export function runGenerateTheme(options: GenerateThemeOptions = {}): {
  configPath: string;
  webCssPath: string;
  iosSwiftPath: string;
  androidXmlPath: string;
} {
  const cwd = options.cwd ?? process.cwd();
  const stdout = options.stdout ?? process.stdout;
  const configPath = resolveConfigPath(cwd, options.configPath);
  const config = loadThemeConfig(configPath);
  const result = writeThemeArtifacts(config, cwd);

  stdout.write(`Configuration used: ${configPath}\n`);
  stdout.write(`Web CSS: ${result.webCssPath}\n`);
  stdout.write(`iOS Swift: ${result.iosSwiftPath}\n`);
  stdout.write(`Android XML: ${result.androidXmlPath}\n`);

  return {
    configPath,
    ...result
  };
}
