export const buttonTokens = {
  background: {
    default: "var(--jss-component-button-background-default)",
    hover: "var(--jss-component-button-background-hover)",
    active: "var(--jss-component-button-background-active)",
    ghostHover: "var(--jss-component-button-background-ghost-hover)"
  },
  text: {
    default: "var(--jss-component-button-text-default)"
  },
  border: {
    outline: "var(--jss-component-button-border-outline)"
  },
  radius: {
    default: "var(--jss-component-button-radius-default)"
  },
  padding: {
    x: "var(--jss-component-button-padding-x)",
    y: "var(--jss-component-button-padding-y)"
  }
} as const;
