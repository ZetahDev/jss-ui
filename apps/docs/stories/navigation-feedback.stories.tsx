import type { Meta, StoryObj } from "@storybook/react";
import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@js-solutions/react-ui";

const meta = {
  title: "Foundations/Navigation and Feedback",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsAndTooltip: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "28rem" }}>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview content</TabsContent>
        <TabsContent value="activity">Activity content</TabsContent>
        <TabsContent value="settings">Settings content</TabsContent>
      </Tabs>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button style={{ padding: "0.5rem 0.75rem" }}>Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content ready.</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
};

export const ProgressBar: Story = {
  render: () => (
    <div style={{ width: "24rem", display: "grid", gap: "0.75rem" }}>
      <Progress value={18} />
      <Progress value={52} />
      <Progress value={86} />
    </div>
  )
};

export const DataTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Owner</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Button</TableCell>
          <TableCell>Ready</TableCell>
          <TableCell>Core Team</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Select</TableCell>
          <TableCell>Ready</TableCell>
          <TableCell>Core Team</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Date Picker</TableCell>
          <TableCell>Backlog</TableCell>
          <TableCell>UX Platform</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};
