"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = ({ className, ...props }: any) => (
  <DropdownMenuPrimitive.Content
    className={cn(
      "z-50 min-w-[10rem] rounded-md border bg-white p-1 shadow-md",
      className
    )}
    {...props}
  />
);
export const DropdownMenuItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100",
      className
    )}
    {...props}
  />
);
