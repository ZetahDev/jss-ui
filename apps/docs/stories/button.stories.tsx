import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@zetahdev/react-ui";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["solid", "outline", "ghost"]
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    }
  },
  args: {
    children: "Action",
    variant: "solid",
    size: "md",
    disabled: false
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Secondary"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Subtle"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled"
  }
};
