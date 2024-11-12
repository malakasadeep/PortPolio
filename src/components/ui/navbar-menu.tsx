"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/util";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
  ease: "easeInOut",
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "cursor-pointer transition-all duration-300 ease-in-out",
          isActive
            ? "bg-white text-black px-2 rounded-full translate-x-1"
            : " text-white"
        )}
      >
        {item}
      </motion.p>
      {isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
          className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4"
        >
          <motion.div
            layoutId="active"
            className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border shadow-xl"
          >
            <div className="w-max h-full p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent bg-black  shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};
