import type { ThemeConfig } from "./types";

const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const SIZE_TOKEN_PATTERN = /^(0|[0-9]*\.?[0-9]+)(px|rem|em|%)$/;
const FONT_WEIGHT_PATTERN = /^[1-9]00$/;

export function isValidHexColor(value: string): boolean {
  return HEX_COLOR_PATTERN.test(value);
}

export function isValidSizeToken(value: string): boolean {
  return SIZE_TOKEN_PATTERN.test(value);
}

export function isValidFontWeight(value: string): boolean {
  return FONT_WEIGHT_PATTERN.test(value);
}

export function validateThemeConfig(config: ThemeConfig): string[] {
  const errors: string[] = [];

  const colors = config.tokens.colors;
  const colorEntries: Array<[string, string]> = [
    ["tokens.colors.primary", colors.primary],
    ["tokens.colors.primaryHover", colors.primaryHover],
    ["tokens.colors.background", colors.background],
    ["tokens.colors.surface", colors.surface],
    ["tokens.colors.textPrimary", colors.textPrimary],
    ["tokens.colors.textInverted", colors.textInverted],
    ["tokens.colors.borderMuted", colors.borderMuted],
    ["tokens.colors.danger", colors.danger],
    ["tokens.colors.focusRing", colors.focusRing]
  ];

  for (const [key, value] of colorEntries) {
    if (!isValidHexColor(value)) {
      errors.push(`${key} must be a HEX color (received "${value}")`);
    }
  }

  const typography = config.tokens.typography;
  if (!typography.fontFamilySans.trim()) {
    errors.push("tokens.typography.fontFamilySans must be a non-empty string");
  }

  const sizeEntries: Array<[string, string]> = [
    ["tokens.typography.fontSizeSm", typography.fontSizeSm],
    ["tokens.typography.fontSizeMd", typography.fontSizeMd],
    ["tokens.typography.fontSizeLg", typography.fontSizeLg],
    ["tokens.radii.sm", config.tokens.radii.sm],
    ["tokens.radii.md", config.tokens.radii.md],
    ["tokens.radii.lg", config.tokens.radii.lg],
    ["tokens.spacing.0", config.tokens.spacing["0"]],
    ["tokens.spacing.1", config.tokens.spacing["1"]],
    ["tokens.spacing.2", config.tokens.spacing["2"]],
    ["tokens.spacing.3", config.tokens.spacing["3"]],
    ["tokens.spacing.4", config.tokens.spacing["4"]],
    ["tokens.spacing.5", config.tokens.spacing["5"]],
    ["tokens.spacing.6", config.tokens.spacing["6"]]
  ];

  for (const [key, value] of sizeEntries) {
    if (!isValidSizeToken(value)) {
      errors.push(`${key} must be a size token like 1rem, 12px, 0.5em or 100% (received "${value}")`);
    }
  }

  const weightEntries: Array<[string, string]> = [
    ["tokens.typography.fontWeightRegular", typography.fontWeightRegular],
    ["tokens.typography.fontWeightMedium", typography.fontWeightMedium],
    ["tokens.typography.fontWeightSemibold", typography.fontWeightSemibold]
  ];

  for (const [key, value] of weightEntries) {
    if (!isValidFontWeight(value)) {
      errors.push(`${key} must be one of 100..900 (received "${value}")`);
    }
  }

  if (typeof config.tokens.behavior.enableHover !== "boolean") {
    errors.push("tokens.behavior.enableHover must be a boolean");
  }

  if (typeof config.tokens.behavior.enableFocusRing !== "boolean") {
    errors.push("tokens.behavior.enableFocusRing must be a boolean");
  }

  if (!config.outputs.web.path.trim()) {
    errors.push("outputs.web.path must be a non-empty string");
  }

  if (!config.outputs.ios.path.trim()) {
    errors.push("outputs.ios.path must be a non-empty string");
  }

  if (!config.outputs.android.path.trim()) {
    errors.push("outputs.android.path must be a non-empty string");
  }

  if (config.schemaVersion !== 1) {
    errors.push(`schemaVersion must be 1 (received "${config.schemaVersion}")`);
  }

  return errors;
}

export function assertValidThemeConfig(config: ThemeConfig): void {
  const errors = validateThemeConfig(config);
  if (errors.length > 0) {
    throw new Error(`Invalid theme config:\n- ${errors.join("\n- ")}`);
  }
}
