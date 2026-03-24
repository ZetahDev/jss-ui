import { resolve } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(baseConfig) {
    baseConfig.resolve ??= {};
    baseConfig.resolve.alias = [
      ...(Array.isArray(baseConfig.resolve.alias) ? baseConfig.resolve.alias : []),
      {
        find: /^@js-solutions\/react-ui$/,
        replacement: resolve(__dirname, "../../../packages/react-ui/src/index.ts")
      },
      {
        find: /^@js-solutions\/react-ui\/styles.css$/,
        replacement: resolve(__dirname, "../../../packages/react-ui/src/styles/styles.css")
      },
      {
        find: /^@js-solutions\/tokens$/,
        replacement: resolve(__dirname, "../../../packages/tokens/src/index.ts")
      },
      {
        find: /^@js-solutions\/tokens\/css$/,
        replacement: resolve(__dirname, "../../../packages/tokens/tokens.css")
      },
      {
        find: /^@js-solutions\/icons$/,
        replacement: resolve(__dirname, "../../../packages/icons/src/index.ts")
      }
    ];

    return baseConfig;
  }
};

export default config;
