import { render, screen } from "@testing-library/react";
import type { ColumnDef } from "@tanstack/react-table";
import { describe, expect, it } from "vitest";

import {
  Calendar,
  Combobox,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  DataTable,
  DatePicker,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Sidebar,
  SidebarContent,
  SidebarItem,
  SidebarTrigger
} from "../index";

describe("react-ui wave 3b components", () => {
  it("renders command and combobox triggers", () => {
    render(
      <div>
        <Command>
          <CommandInput placeholder="Search command..." />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandItem>Open tokens</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <Combobox
          options={[
            { label: "Web", value: "web" },
            { label: "iOS", value: "ios" }
          ]}
          placeholder="Pick platform"
        />
      </div>
    );

    expect(screen.getByPlaceholderText("Search command...")).toBeInTheDocument();
    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.some((node) => node.textContent?.includes("Pick platform"))).toBe(true);
  });

  it("renders calendar and date picker", () => {
    render(
      <div>
        <DatePicker placeholder="Select date" />
        <Calendar mode="single" />
      </div>
    );

    expect(screen.getByRole("button", { name: "Select date" })).toBeInTheDocument();
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders data table rows", () => {
    const data = [{ name: "Button", status: "stable" }];
    const columns: ColumnDef<(typeof data)[number]>[] = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "status", header: "Status" }
    ];

    render(<DataTable columns={columns} data={data} />);

    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders input otp slots and sidebar", () => {
    render(
      <div>
        <InputOTP
          maxLength={4}
          render={() => (
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          )}
        />
        <Sidebar>
          <SidebarTrigger />
          <SidebarContent>
            <SidebarItem>Components</SidebarItem>
          </SidebarContent>
        </Sidebar>
      </div>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Collapse" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Components" })).toBeInTheDocument();
  });
});
