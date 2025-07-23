"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";


export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) => (
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
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100",
      className
    )}
    {...props}
  />
);
