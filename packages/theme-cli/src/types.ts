export interface ThemeColors {
  primary: string;
  primaryHover: string;
  background: string;
  surface: string;
  textPrimary: string;
  textInverted: string;
  borderMuted: string;
  danger: string;
  focusRing: string;
}

export interface ThemeTypography {
  fontFamilySans: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  fontWeightRegular: string;
  fontWeightMedium: string;
  fontWeightSemibold: string;
}

export interface ThemeRadii {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeSpacing {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
}

export interface ThemeBehavior {
  enableHover: boolean;
  enableFocusRing: boolean;
}

export interface ThemeTokens {
  colors: ThemeColors;
  typography: ThemeTypography;
  radii: ThemeRadii;
  spacing: ThemeSpacing;
  behavior: ThemeBehavior;
}

export interface ThemeOutputTarget {
  path: string;
}

export interface ThemeOutputs {
  web: ThemeOutputTarget;
  ios: ThemeOutputTarget;
  android: ThemeOutputTarget;
}

export interface ThemeConfig {
  schemaVersion: 1;
  tokens: ThemeTokens;
  outputs: ThemeOutputs;
}

export type ThemeConfigInput = Partial<{
  schemaVersion: number;
  tokens: Partial<{
    colors: Partial<ThemeColors>;
    typography: Partial<ThemeTypography>;
    radii: Partial<ThemeRadii>;
    spacing: Partial<ThemeSpacing>;
    behavior: Partial<ThemeBehavior>;
  }>;
  outputs: Partial<{
    web: Partial<ThemeOutputTarget>;
    ios: Partial<ThemeOutputTarget>;
    android: Partial<ThemeOutputTarget>;
  }>;
}>;

export interface ThemeArtifacts {
  webCss: string;
  iosSwift: string;
  androidXml: string;
}

export interface ThemeArtifactPaths {
  webCssPath: string;
  iosSwiftPath: string;
  androidXmlPath: string;
}
