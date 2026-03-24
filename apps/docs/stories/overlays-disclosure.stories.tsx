import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@js-solutions/react-ui";

const meta = {
  title: "Foundations/Overlays and Disclosure",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertAndAvatar: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "26rem" }}>
      <Alert>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Theme tokens are loaded and working.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Action required</AlertTitle>
        <AlertDescription>Primary palette is missing contrast checks.</AlertDescription>
      </Alert>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/96?img=15" alt="Team member avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>UI</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
};

export const AccordionAndCollapsible: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "28rem" }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="tokens">
          <AccordionTrigger>How are tokens organized?</AccordionTrigger>
          <AccordionContent>Core, semantic and component tokens map design intent to implementation.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="release">
          <AccordionTrigger>How are releases controlled?</AccordionTrigger>
          <AccordionContent>Changesets and PR checks control semver and visual regression quality gates.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            Toggle implementation notes
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Collapsible content can hold rollout notes, migration advice or issue mitigations.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
};

export const DialogsAndPopups: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish changes</DialogTitle>
            <DialogDescription>Review package versions before publishing to GitHub Packages.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm">
            Open Alert Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete release candidate?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button size="sm">Delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>Popover content for quick inline guidance.</PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Open Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Rename component</DropdownMenuItem>
          <DropdownMenuItem>Copy token reference</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" size="sm">
            Hover Card
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>Hover card content for contextual metadata.</HoverCardContent>
      </HoverCard>
    </div>
  )
};
