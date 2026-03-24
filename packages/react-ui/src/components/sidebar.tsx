import { cva, type VariantProps } from "class-variance-authority";
import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes
} from "react";

import { cn } from "../utils";

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Sidebar components must be used inside <Sidebar>.");
  }
  return context;
}

const sidebarVariants = cva("jss-sidebar", {
  variants: {
    side: {
      left: "jss-sidebar--left",
      right: "jss-sidebar--right"
    }
  },
  defaultVariants: {
    side: "left"
  }
});

export interface SidebarProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
  defaultCollapsed?: boolean;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { children, className, defaultCollapsed = false, side, ...props },
  ref
) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const value = useMemo(() => ({ collapsed, setCollapsed }), [collapsed]);

  return (
    <SidebarContext.Provider value={value}>
      <aside
        ref={ref}
        data-collapsed={collapsed}
        className={cn(sidebarVariants({ side }), className)}
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
});

export const SidebarHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SidebarHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sidebar__header", className)} {...props} />;
});

export const SidebarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SidebarContent(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sidebar__content", className)} {...props} />;
});

export const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SidebarFooter(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sidebar__footer", className)} {...props} />;
});

export const SidebarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function SidebarGroup(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-sidebar__group", className)} {...props} />;
});

export const SidebarItem = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function SidebarItem(
  { className, type = "button", ...props },
  ref
) {
  return <button ref={ref} type={type} className={cn("jss-sidebar__item", className)} {...props} />;
});

export const SidebarTrigger = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function SidebarTrigger({ children, className, onClick, type = "button", ...props }, ref) {
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
      <button
        ref={ref}
        type={type}
        className={cn("jss-sidebar__trigger", className)}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            setCollapsed(!collapsed);
          }
        }}
        {...props}
      >
        {children ?? (collapsed ? "Expand" : "Collapse")}
      </button>
    );
  }
);

