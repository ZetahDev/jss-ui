import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Collapsible,
  CollapsibleContent,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  HoverCard,
  HoverCardContent,
  Popover,
  PopoverContent
} from "../index";

describe("react-ui overlays and disclosure", () => {
  it("renders alert and avatar primitives", () => {
    render(
      <div>
        <Alert>
          <AlertTitle>Status</AlertTitle>
          <AlertDescription>Healthy</AlertDescription>
        </Alert>
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      </div>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Healthy")).toBeInTheDocument();
    expect(screen.getByText("JS")).toBeInTheDocument();
  });

  it("renders open accordion and collapsible content", () => {
    render(
      <div>
        <Accordion type="single" value="a">
          <AccordionItem value="a">
            <AccordionTrigger>Section A</AccordionTrigger>
            <AccordionContent>Accordion details</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Collapsible open>
          <CollapsibleContent>Collapsible details</CollapsibleContent>
        </Collapsible>
      </div>
    );

    expect(screen.getByText("Accordion details")).toBeInTheDocument();
    expect(screen.getByText("Collapsible details")).toBeInTheDocument();
  });

  it("renders dialog and alert-dialog content when open", () => {
    render(
      <div>
        <Dialog open>
          <DialogContent>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>Dialog body</DialogDescription>
          </DialogContent>
        </Dialog>
        <AlertDialog open>
          <AlertDialogContent>
            <AlertDialogTitle>Alert title</AlertDialogTitle>
            <AlertDialogDescription>Alert body</AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );

    expect(screen.getByText("Dialog body")).toBeInTheDocument();
    expect(screen.getByText("Alert body")).toBeInTheDocument();
  });

  it("renders popover dropdown and hover-card content when open", () => {
    render(
      <div>
        <Popover open>
          <PopoverContent>Popover body</PopoverContent>
        </Popover>
        <DropdownMenu open>
          <DropdownMenuContent>
            <DropdownMenuItem>Menu item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <HoverCard open>
          <HoverCardContent>Hover card body</HoverCardContent>
        </HoverCard>
      </div>
    );

    expect(screen.getByText("Popover body")).toBeInTheDocument();
    expect(screen.getByText("Menu item")).toBeInTheDocument();
    expect(screen.getByText("Hover card body")).toBeInTheDocument();
  });
});
