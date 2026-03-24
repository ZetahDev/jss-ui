import type { HTMLAttributes } from "react";

import { cn } from "../utils";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("jss-skeleton", className)} {...props} />;
}
