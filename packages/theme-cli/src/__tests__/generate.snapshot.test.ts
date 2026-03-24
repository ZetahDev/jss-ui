import { describe, expect, it } from "vitest";

import { mergeThemeConfig } from "../config";
import { generateThemeArtifacts } from "../generate";

describe("theme artifact snapshots", () => {
  it("generates stable artifacts for web, ios and android", () => {
    const config = mergeThemeConfig({
      tokens: {
        colors: {
          primary: "#0f172a",
          primaryHover: "#020617",
          focusRing: "#38bdf8"
        },
        behavior: {
          enableHover: true,
          enableFocusRing: false
        }
      }
    });

    const artifacts = generateThemeArtifacts(config);

    expect(artifacts.webCss).toMatchSnapshot("web-css");
    expect(artifacts.iosSwift).toMatchSnapshot("ios-swift");
    expect(artifacts.androidXml).toMatchSnapshot("android-xml");
  });
});
