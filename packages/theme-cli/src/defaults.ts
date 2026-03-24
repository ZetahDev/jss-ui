import type { ThemeConfig } from "./types";

export const DEFAULT_CONFIG_FILENAME = "theme.config.json";

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  schemaVersion: 1,
  tokens: {
    colors: {
      primary: "#2563eb",
      primaryHover: "#1d4ed8",
      background: "#f9fafb",
      surface: "#ffffff",
      textPrimary: "#111827",
      textInverted: "#ffffff",
      borderMuted: "#f3f4f6",
      danger: "#dc2626",
      focusRing: "#93c5fd"
    },
    typography: {
      fontFamilySans: "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSizeSm: "0.875rem",
      fontSizeMd: "1rem",
      fontSizeLg: "1.125rem",
      fontWeightRegular: "400",
      fontWeightMedium: "500",
      fontWeightSemibold: "600"
    },
    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem"
    },
    spacing: {
      "0": "0rem",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem"
    },
    behavior: {
      enableHover: true,
      enableFocusRing: true
    }
  },
  outputs: {
    web: {
      path: "src/styles/tokens.css"
    },
    ios: {
      path: "ios/DesignTokens.swift"
    },
    android: {
      path: "android/app/src/main/res/values/tokens.xml"
    }
  }
};

export function createDefaultThemeConfig(): ThemeConfig {
  return JSON.parse(JSON.stringify(DEFAULT_THEME_CONFIG)) as ThemeConfig;
}
