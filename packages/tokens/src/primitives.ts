export const primitiveColors = {
  blue: {
    500: "#2563eb",
    600: "#1d4ed8"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    700: "#374151",
    900: "#111827"
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
  6: "1.5rem"
} as const;

export const primitiveTypography = {
  family: {
    sans: "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  size: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem"
  },
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600"
  }
} as const;
