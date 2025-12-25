"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        `text-accent`,
        className
      )}
    >
      {children}
    </span>
  );
};
