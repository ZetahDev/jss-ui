import type { Meta, StoryObj } from "@storybook/react";
import {
  AspectRatio,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  DirectionProvider,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Empty,
  EmptyActions,
  EmptyDescription,
  EmptyTitle,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Item,
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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  toast
} from "@js-solutions/react-ui";

const meta = {
  title: "Foundations/Wave 3A",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormAndDisplay: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "30rem" }}>
      <Field>
        <FieldLabel htmlFor="project-name">Project name</FieldLabel>
        <InputGroup>
          <InputGroupAddon>ui</InputGroupAddon>
          <InputGroupInput id="project-name" placeholder="design-system" />
        </InputGroup>
        <FieldDescription>Lowercase and dash separated.</FieldDescription>
        <FieldError>Sample validation error for docs.</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="platform">Platform</FieldLabel>
        <NativeSelect id="platform" defaultValue="web">
          <option value="web">Web</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
        </NativeSelect>
      </Field>

      <Item>
        Open command palette
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </Item>

      <AspectRatio ratio={16 / 9}>
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #1d4ed8, #0f172a)",
            borderRadius: "0.75rem",
            color: "white",
            display: "flex",
            fontWeight: 600,
            height: "100%",
            justifyContent: "center"
          }}
        >
          16:9 preview
        </div>
      </AspectRatio>
    </div>
  )
};

export const NavigationAndOverlays: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div style={{ display: "grid", gap: "1rem", width: "36rem" }}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <a style={{ color: "inherit", textDecoration: "none" }} href="#">
                  Design system package
                </a>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#" style={{ padding: "0.5rem 0.75rem", display: "inline-flex" }}>
                  Changelog
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div
                style={{
                  alignItems: "center",
                  border: "1px dashed #94a3b8",
                  borderRadius: "0.5rem",
                  display: "inline-flex",
                  minHeight: "2.25rem",
                  padding: "0 0.75rem"
                }}
              >
                Right click here
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Open inspector</ContextMenuItem>
              <ContextMenuItem>Copy token path</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New release</MenubarItem>
                <MenubarItem>Export tokens</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Docs</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                Open Sheet
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Repository settings</SheetTitle>
                <SheetDescription>Configure release and registry options.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <Button size="sm">Save</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm">
                Open Drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Mobile actions</DrawerTitle>
                <DrawerDescription>Quick actions for smaller screens.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button size="sm">Confirm</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </DirectionProvider>
  )
};

export const CompositionAndFeedback: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "32rem" }}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Pagination</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" active>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <ScrollArea style={{ height: "7.5rem" }}>
        <ScrollAreaViewport style={{ padding: "0.75rem" }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} style={{ margin: "0 0 0.5rem" }}>
              Scroll line {index + 1}
            </p>
          ))}
        </ScrollAreaViewport>
        <ScrollAreaScrollbar />
      </ScrollArea>

      <ButtonGroup>
        <Button size="sm">Left</Button>
        <Button variant="outline" size="sm">
          Center
        </Button>
        <Button variant="ghost" size="sm">
          Right
        </Button>
      </ButtonGroup>

      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Toggle aria-label="Toggle bold">B</Toggle>
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left">L</ToggleGroupItem>
          <ToggleGroupItem value="center">C</ToggleGroupItem>
          <ToggleGroupItem value="right">R</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Empty>
        <EmptyTitle>No data yet</EmptyTitle>
        <EmptyDescription>Create your first token set to get started.</EmptyDescription>
        <EmptyActions>
          <Button size="sm" onClick={() => toast.success("Action executed")}>
            Create token set
          </Button>
        </EmptyActions>
      </Empty>

      <Toaster />
    </div>
  )
};

