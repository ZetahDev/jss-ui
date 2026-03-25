import "@js-solutions/react-ui/styles.css";
import "./preview.css";

import type { Preview } from "@storybook/react";
import { createElement } from "react";

const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        "div",
        { className: "docs-shell" },
        createElement("div", { className: "docs-stage" }, createElement(Story))
      )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "fullscreen"
  }
};

export default preview;
