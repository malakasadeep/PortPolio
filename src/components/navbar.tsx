"use client";
import React from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Highlight } from "./ui/hero-highlight";

export function NavbarDemo({ activeSection }: { activeSection: string }) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" activeSection={activeSection} />
    </div>
  );
}

function Navbar({
  className,
  activeSection,
}: {
  className?: string;
  activeSection: string;
}) {
  const sections = [
    "home",
    "about",
    "services",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-30", className)}
    >
      <div className="flex items-center justify-between px-8 py-1 bg-black shadow-md rounded-full">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <span className="text-2xl font-bold">
            <Highlight className="text-black dark:text-white">
              Malaka Sadeep
            </Highlight>
          </span>
        </div>

        {/* Menu Items */}
        <Menu>
          {sections.map((section) => (
            <MenuItem
              key={section}
              item={section}
              active={activeSection === section}
              setActive={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          ))}
        </Menu>

        {/* Contact Button */}
        <Link href="#contact">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex items-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              <span>Let&apos;s Connect</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
