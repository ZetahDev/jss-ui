import type { Meta, StoryObj } from "@storybook/react";
import {
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea
} from "@zetahdev/react-ui";

const meta = {
  title: "Foundations/Form Controls",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInputs: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.75rem", width: "22rem" }}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Type your name" />
      </div>
      <div>
        <Label htmlFor="about">About</Label>
        <Textarea id="about" placeholder="Describe your project..." />
      </div>
    </div>
  )
};

export const SelectionControls: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "22rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms</Label>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Switch id="alerts" />
        <Label htmlFor="alerts">Enable alerts</Label>
      </div>

      <RadioGroup defaultValue="starter">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RadioGroupItem value="starter" id="starter" />
          <Label htmlFor="starter">Starter</Label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro">Pro</Label>
        </div>
      </RadioGroup>
    </div>
  )
};

export const SelectControl: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework" aria-label="Framework">
          <SelectValue placeholder="Choose one option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
};
