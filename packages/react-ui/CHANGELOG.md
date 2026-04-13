# @zetahdev/react-ui

## 0.1.0

### Minor Changes

- 51fe818: Add Wave 3B advanced components: `Command`, `Combobox`, `Calendar`, `DatePicker`, `DataTable` (TanStack Table), `Carousel` (Embla), `Chart` (Recharts), `ResizablePanelGroup`, `Sidebar`, and `InputOTP`, including styles, docs stories, and test environment/polyfill updates.
- 0ee01c2: Add Wave 3A components focused on navigation, overlays, and composition primitives: `ContextMenu`, `Menubar`, `NavigationMenu`, `Sheet`, `Drawer`, `Toggle`, `ToggleGroup`, `ScrollArea`, `AspectRatio`, `Field`, `InputGroup`, `NativeSelect`, `Pagination`, `Breadcrumb`, `ButtonGroup`, `Empty`, `Kbd`, `Item`, `DirectionProvider`, and `Toaster/toast` (Sonner integration), including styles, stories, and tests.
- bac467b: Add a visual craft foundation wave:
  - expand semantic tokens (surface, border, ring, shadow, motion, richer typography and spacing)
  - upgrade base visual treatment for Button, Input, Card, Dialog, and Tabs
  - regenerate multi-platform token artifacts (web, iOS, Android)

- eaa471e: Add `Slider` built on Radix primitives and expose `Toast` as an alias of the existing Sonner `Toaster`.

  Also include docs stories and tests for the new controls.

### Patch Changes

- 5055747: Refine high-impact component visuals with the new craft foundation:
  - polished `Select` trigger/content/items interactions and motion
  - elevated `Popover` and menu/dropdown surfaces
  - improved `Table` and `DataTable` readability and hierarchy
  - upgraded `Sidebar` surface, spacing, focus, and collapsed transitions

- Updated dependencies [bac467b]
  - @zetahdev/tokens@0.1.0
