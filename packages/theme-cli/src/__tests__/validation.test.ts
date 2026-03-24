import { describe, expect, it } from "vitest";

import { createDefaultThemeConfig } from "../defaults";
import { mergeThemeConfig } from "../config";
import { isValidHexColor, validateThemeConfig } from "../validation";

describe("theme-cli validation", () => {
  it("validates HEX colors", () => {
    expect(isValidHexColor("#2563eb")).toBe(true);
    expect(isValidHexColor("#fff")).toBe(true);
    expect(isValidHexColor("#12345678")).toBe(true);
    expect(isValidHexColor("2563eb")).toBe(false);
    expect(isValidHexColor("#12")).toBe(false);
  });

  it("merges defaults with partial user config", () => {
    const merged = mergeThemeConfig({
      tokens: {
        colors: {
          primary: "#0f172a"
        },
        behavior: {
          enableHover: false
        }
      }
    });

    expect(merged.tokens.colors.primary).toBe("#0f172a");
    expect(merged.tokens.colors.primaryHover).toBe("#1d4ed8");
    expect(merged.tokens.behavior.enableHover).toBe(false);
    expect(merged.tokens.behavior.enableFocusRing).toBe(true);
  });

  it("reports validation errors for invalid config", () => {
    const config = createDefaultThemeConfig();
    config.tokens.colors.primary = "blue";
    config.outputs.web.path = " ";

    const errors = validateThemeConfig(config);
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining("tokens.colors.primary must be a HEX color"),
        expect.stringContaining("outputs.web.path must be a non-empty string")
      ])
    );
  });
});
