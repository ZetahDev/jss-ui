import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { DEFAULT_CONFIG_FILENAME, createDefaultThemeConfig } from "./defaults";
import type { ThemeConfig, ThemeConfigInput } from "./types";
import { assertValidThemeConfig } from "./validation";

export function resolveConfigPath(cwd: string, configPath?: string): string {
  return resolve(cwd, configPath ?? DEFAULT_CONFIG_FILENAME);
}

export function mergeThemeConfig(input: ThemeConfigInput = {}): ThemeConfig {
  const defaults = createDefaultThemeConfig();

  const merged: ThemeConfig = {
    schemaVersion: 1,
    tokens: {
      colors: {
        ...defaults.tokens.colors,
        ...(input.tokens?.colors ?? {})
      },
      typography: {
        ...defaults.tokens.typography,
        ...(input.tokens?.typography ?? {})
      },
      radii: {
        ...defaults.tokens.radii,
        ...(input.tokens?.radii ?? {})
      },
      spacing: {
        ...defaults.tokens.spacing,
        ...(input.tokens?.spacing ?? {})
      },
      behavior: {
        ...defaults.tokens.behavior,
        ...(input.tokens?.behavior ?? {})
      }
    },
    outputs: {
      web: {
        ...defaults.outputs.web,
        ...(input.outputs?.web ?? {})
      },
      ios: {
        ...defaults.outputs.ios,
        ...(input.outputs?.ios ?? {})
      },
      android: {
        ...defaults.outputs.android,
        ...(input.outputs?.android ?? {})
      }
    }
  };

  assertValidThemeConfig(merged);
  return merged;
}

export function loadThemeConfig(configPath: string): ThemeConfig {
  const raw = readFileSync(configPath, "utf8");
  const parsed = JSON.parse(raw) as ThemeConfigInput;
  return mergeThemeConfig(parsed);
}

export function writeThemeConfig(configPath: string, config: ThemeConfig): void {
  assertValidThemeConfig(config);
  writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
