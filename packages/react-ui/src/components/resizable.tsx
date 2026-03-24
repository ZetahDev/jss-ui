import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  type PanelGroupProps,
  type PanelProps,
  type PanelResizeHandleProps
} from "react-resizable-panels";

import { cn } from "../utils";

export function ResizablePanelGroup({ className, ...props }: PanelGroupProps) {
  return <PanelGroup className={cn("jss-resizable-group", className)} {...props} />;
}

export function ResizablePanel({ className, ...props }: PanelProps) {
  return <Panel className={cn("jss-resizable-panel", className)} {...props} />;
}

export function ResizableHandle({ className, ...props }: PanelResizeHandleProps) {
  return <PanelResizeHandle className={cn("jss-resizable-handle", className)} {...props} />;
}

