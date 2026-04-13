import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Chart,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  DataTable,
  DatePicker,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarTrigger
} from "@zetahdev/react-ui";

const meta = {
  title: "Foundations/Wave 3B",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const tableData = [
  { id: "r1", name: "Button", status: "stable", coverage: 96 },
  { id: "r2", name: "Combobox", status: "beta", coverage: 87 },
  { id: "r3", name: "Date Picker", status: "beta", coverage: 83 }
];

const tableColumns = [
  { accessorKey: "name", header: "Component" },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "coverage",
    header: "Coverage",
    cell: (context: { row: { original: { coverage: number } } }) => `${context.row.original.coverage}%`
  }
] as const;

const chartData = [
  { month: "Jan", web: 120, mobile: 80 },
  { month: "Feb", web: 145, mobile: 95 },
  { month: "Mar", web: 138, mobile: 110 },
  { month: "Apr", web: 160, mobile: 122 }
];

export const CommandAndCombobox: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "30rem" }}>
      <Command>
        <CommandInput placeholder="Search command..." />
        <CommandList>
          <CommandEmpty>No command found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>Open tokens</CommandItem>
            <CommandItem>Create release</CommandItem>
            <CommandItem>Run Chromatic</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <Combobox
        options={[
          { label: "Web", value: "web" },
          { label: "iOS", value: "ios" },
          { label: "Android", value: "android" }
        ]}
        placeholder="Select platform"
      />
    </div>
  )
};

export const CalendarAndDatePicker: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "30rem" }}>
      <DatePicker />
      <Calendar mode="single" />
    </div>
  )
};

export const DataAndVisualization: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "44rem" }}>
      <DataTable columns={tableColumns as never} data={tableData} />
      <Chart
        xKey="month"
        data={chartData}
        series={[
          { name: "Web", dataKey: "web", color: "#1d4ed8" },
          { name: "Mobile", dataKey: "mobile", color: "#0f766e" }
        ]}
      />
    </div>
  )
};

export const CarouselResizableAndSidebar: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "44rem" }}>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div style={{ border: "1px solid #cbd5e1", borderRadius: "0.75rem", padding: "1rem" }}>Slide 1</div>
          </CarouselItem>
          <CarouselItem>
            <div style={{ border: "1px solid #cbd5e1", borderRadius: "0.75rem", padding: "1rem" }}>Slide 2</div>
          </CarouselItem>
          <CarouselItem>
            <div style={{ border: "1px solid #cbd5e1", borderRadius: "0.75rem", padding: "1rem" }}>Slide 3</div>
          </CarouselItem>
        </CarouselContent>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40}>Left panel</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>Right panel</ResizablePanel>
      </ResizablePanelGroup>

      <Sidebar>
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem>Overview</SidebarItem>
            <SidebarItem>Components</SidebarItem>
            <SidebarItem>Releases</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button size="sm">Sign out</Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
};

export const InputOTPExample: Story = {
  render: () => (
    <InputOTP
      maxLength={6}
      render={() => (
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSeparator />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      )}
    />
  )
};
