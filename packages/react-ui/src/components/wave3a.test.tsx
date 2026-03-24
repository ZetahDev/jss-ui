import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  ButtonGroup,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  Empty,
  EmptyDescription,
  EmptyTitle,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  NativeSelect,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  Toggle,
  ToggleGroup,
  ToggleGroupItem
} from "../index";

describe("react-ui wave 3a components", () => {
  it("renders field, input-group and native select", () => {
    render(
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <InputGroup>
          <InputGroupAddon>@</InputGroupAddon>
          <InputGroupInput id="email" placeholder="username" />
        </InputGroup>
        <NativeSelect aria-label="platform">
          <option>Web</option>
          <option>iOS</option>
        </NativeSelect>
        <FieldDescription>Description</FieldDescription>
        <FieldError>Error</FieldError>
      </Field>
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("platform")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Error");
  });

  it("renders navigation composition blocks", () => {
    render(
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Library</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" active>
                1
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Empty>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>Start creating content</EmptyDescription>
        </Empty>
      </div>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "1" })).toBeInTheDocument();
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("renders toggles and keyboard token", () => {
    render(
      <div>
        <Toggle aria-label="toggle-bold">B</Toggle>
        <ToggleGroup type="single" value="left">
          <ToggleGroupItem value="left">L</ToggleGroupItem>
          <ToggleGroupItem value="center">C</ToggleGroupItem>
        </ToggleGroup>
        <Kbd>Ctrl</Kbd>
      </div>
    );

    expect(screen.getByLabelText("toggle-bold")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
  });

  it("renders sheet and drawer content in open state", () => {
    render(
      <div>
        <Sheet open>
          <SheetContent>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetContent>
        </Sheet>
        <Drawer open>
          <DrawerContent>
            <DrawerTitle>Drawer title</DrawerTitle>
            <DrawerDescription>Drawer description</DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    );

    expect(screen.getByText("Sheet description")).toBeInTheDocument();
    expect(screen.getByText("Drawer description")).toBeInTheDocument();
  });

  it("renders menu primitives and scroll area", () => {
    render(
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
              <NavigationMenuContent>Navigation content</NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ContextMenu>
          <ContextMenuTrigger>Context trigger</ContextMenuTrigger>
          <ContextMenuContent forceMount>
            <ContextMenuItem>Action</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent forceMount>
              <MenubarItem>New</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <ScrollArea style={{ height: "100px" }}>
          <ScrollAreaViewport>Scrollable content</ScrollAreaViewport>
          <ScrollAreaScrollbar />
        </ScrollArea>

        <ButtonGroup>
          <button type="button">One</button>
          <button type="button">Two</button>
        </ButtonGroup>
      </div>
    );

    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByText("Context trigger")).toBeInTheDocument();
    expect(screen.getByText("File")).toBeInTheDocument();
    expect(screen.getByText("Scrollable content")).toBeInTheDocument();
  });
});
