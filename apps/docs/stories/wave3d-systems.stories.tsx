import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@zetahdev/react-ui";

const meta = {
  title: "Foundations/Wave 3D Systems",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuSystems: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "48rem", width: "100%" }}>
      <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Dropdown System</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Panels</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuCheckboxItem checked>Inspector</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={false}>Accessibility</DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Theme</DropdownMenuItem>
            <DropdownMenuRadioGroup value="dark">
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarLabel>Selection</MenubarLabel>
              <MenubarGroup>
                <MenubarItem>Duplicate</MenubarItem>
                <MenubarItem>Rename</MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarCheckboxItem checked>Auto-save</MenubarCheckboxItem>
              <MenubarSub>
                <MenubarSubTrigger>View mode</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="grid">
                    <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
                    <MenubarRadioItem value="list">List</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div
              style={{
                alignItems: "center",
                border: "1px dashed var(--jss-color-border-strong)",
                borderRadius: "0.625rem",
                display: "inline-flex",
                minHeight: "2.25rem",
                padding: "0 0.85rem"
              }}
            >
              Right click canvas
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Canvas</ContextMenuLabel>
            <ContextMenuGroup>
              <ContextMenuCheckboxItem checked>Grid guides</ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked={false}>Safe areas</ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Density</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuRadioGroup value="comfortable">
                  <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="comfortable">Comfortable</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Open token inspector</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  )
};

export const StructuredNavigationAndData: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "44rem", width: "100%" }}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>Buttons, overlays and form primitives catalog.</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="#" style={{ color: "inherit", padding: "0.5rem 0.75rem", textDecoration: "none" }}>
                Releases
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>

      <div style={{ alignItems: "center", display: "flex", gap: "0.75rem" }}>
        <Select defaultValue="web">
          <SelectTrigger aria-label="Platform">
            <SelectValue placeholder="Choose platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="web">Web</SelectItem>
              <SelectItem value="ios">iOS</SelectItem>
              <SelectItem value="android">Android</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea style={{ height: "7rem" }}>
        <ScrollAreaViewport style={{ padding: "0.75rem" }}>
          {Array.from({ length: 12 }).map((_, index) => (
            <p key={index} style={{ margin: "0 0 0.4rem" }}>
              Release note line {index + 1}
            </p>
          ))}
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical" />
        <ScrollAreaCorner />
      </ScrollArea>

      <Table>
        <TableCaption>Coverage matrix for release candidate components.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Package</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Owner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>@zetahdev/react-ui</TableCell>
            <TableCell>Ready</TableCell>
            <TableCell>Frontend Platform</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>@zetahdev/tokens</TableCell>
            <TableCell>Ready</TableCell>
            <TableCell>Design Ops</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
};

export const OverlayClosePrimitives: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog close primitive</DialogTitle>
            <DialogDescription>Validating `DialogClose` custom actions.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Apply</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet close primitive</SheetTitle>
            <SheetDescription>Custom close button integrated in footer action.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer close primitive</DrawerTitle>
            <DrawerDescription>Bottom-sheet action composition.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
};
