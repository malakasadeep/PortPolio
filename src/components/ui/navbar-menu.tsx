"use client";
import React from "react";
import { cn } from "@/lib/util";

export const MenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: () => void;
  active: boolean;
  item: string;
}) => {
  return (
    <div
      onClick={setActive}
      className={cn(
        "cursor-pointer transition-all duration-300 ease-in-out px-4",
        active
          ? "bg-white text-black px-2 rounded-full"
          : "text-white hover:bg-white hover:text-black px-2 rounded-full"
      )}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};
