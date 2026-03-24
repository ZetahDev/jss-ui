export const primitiveColors = {
  blue: {
    400: "#3b82f6",
    500: "#2563eb",
    600: "#1d4ed8"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    600: "#4b5563",
    700: "#374151",
    900: "#111827"
  },
  black: {
    base: "#000000"
  },
  red: {
    600: "#dc2626"
  },
  white: {
    base: "#ffffff"
  }
} as const;

export const primitiveSpacing = {
  0: "0rem",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem"
} as const;

export const primitiveTypography = {
  family: {
    sans: "'SF Pro Text', 'Inter', 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem"
  },
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.65"
  }
} as const;
