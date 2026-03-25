import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Menubar,
  MenubarContent,
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
  NavigationMenuList,
  NavigationMenuTrigger,
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../index";

describe("react-ui wave 3d primitives", () => {
  it("renders dropdown, menubar and context-menu composition", () => {
    render(
      <div>
        <DropdownMenu open>
          <DropdownMenuContent forceMount>
            <DropdownMenuLabel>Panels</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>Inspector</DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup value="dark">
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent forceMount>
              <MenubarLabel>Selection</MenubarLabel>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>View mode</MenubarSubTrigger>
                <MenubarSubContent forceMount>
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
          <ContextMenuTrigger>Canvas</ContextMenuTrigger>
          <ContextMenuContent forceMount>
            <ContextMenuLabel>Canvas menu</ContextMenuLabel>
            <ContextMenuGroup>
              <ContextMenuCheckboxItem checked>Guides</ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuSub open>
              <ContextMenuSubTrigger>Density</ContextMenuSubTrigger>
              <ContextMenuSubContent forceMount>
                <ContextMenuRadioGroup value="comfortable">
                  <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="comfortable">Comfortable</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem>Open inspector</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );

    expect(screen.getByText("Panels")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Canvas")).toBeInTheDocument();
  });

  it("renders close primitives for dialog, sheet and drawer", () => {
    render(
      <div>
        <Dialog open>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>Dialog description</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <button type="button">Close Dialog</button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet open>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet title</SheetTitle>
              <SheetDescription>Sheet description</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <button type="button">Close Sheet</button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Drawer open>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer title</DrawerTitle>
              <DrawerDescription>Drawer description</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <button type="button">Close Drawer</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );

    expect(screen.getByText("Dialog description")).toBeInTheDocument();
    expect(screen.getByText("Sheet description")).toBeInTheDocument();
    expect(screen.getByText("Drawer description")).toBeInTheDocument();
  });

  it("renders navigation, select, scroll corner and table caption", () => {
    render(
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>Catalog content</NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenu>

        <Select defaultValue="web">
          <SelectTrigger aria-label="Platform">
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="web">Web</SelectItem>
              <SelectItem value="ios">iOS</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <ScrollArea style={{ height: "4rem" }}>
          <ScrollAreaViewport>Scrollable lines</ScrollAreaViewport>
          <ScrollAreaScrollbar />
          <ScrollAreaCorner />
        </ScrollArea>

        <Table>
          <TableCaption>Release matrix</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>react-ui</TableCell>
              <TableCell>ready</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );

    expect(screen.getByText("Components")).toBeInTheDocument();
    expect(screen.getByLabelText("Platform")).toBeInTheDocument();
    expect(screen.getByText("Release matrix")).toBeInTheDocument();
  });
});
