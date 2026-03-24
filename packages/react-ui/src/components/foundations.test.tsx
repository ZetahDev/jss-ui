import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Badge,
  Button,
  Checkbox,
  Input,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea
} from "../index";

describe("react-ui foundations", () => {
  it("renders button variants", () => {
    render(<Button variant="outline">Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("jss-button--outline");
  });

  it("renders badge and text inputs", () => {
    render(
      <div>
        <Badge variant="secondary">Ready</Badge>
        <Input placeholder="Type" />
        <Textarea placeholder="Describe" />
      </div>
    );

    expect(screen.getByText("Ready")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Describe")).toBeInTheDocument();
  });

  it("supports checkbox and switch interactions", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Checkbox aria-label="accept terms" />
        <Switch aria-label="enable alerts" />
      </div>
    );

    const checkbox = screen.getByRole("checkbox", { name: "accept terms" });
    const toggle = screen.getByRole("switch", { name: "enable alerts" });

    await user.click(checkbox);
    await user.click(toggle);

    expect(checkbox).toHaveAttribute("data-state", "checked");
    expect(toggle).toHaveAttribute("data-state", "checked");
  });

  it("supports radio group selection", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="a" aria-label="plan">
        <RadioGroupItem value="a" aria-label="Plan A" />
        <RadioGroupItem value="b" aria-label="Plan B" />
      </RadioGroup>
    );

    const optionB = screen.getByRole("radio", { name: "Plan B" });
    await user.click(optionB);

    expect(optionB).toHaveAttribute("data-state", "checked");
  });

  it("renders tabs and progress", () => {
    render(
      <div>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">Overview content</TabsContent>
          <TabsContent value="settings">Settings content</TabsContent>
        </Tabs>
        <Progress value={72} />
      </div>
    );

    expect(screen.getByText("Overview content")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
