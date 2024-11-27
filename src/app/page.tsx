"use client";
import React, { useEffect, useState } from "react";
import { NavbarDemo } from "@/components/navbar";
import { HomeCon } from "@/components/home";
import { About } from "@/components/about";
import { Skills } from "@/components/skils";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

const sections = [
  { id: "home", component: <HomeCon /> },
  { id: "about", component: <About /> },
  { id: "services", component: <Services /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "contact", component: <Contact /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((section) => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = offsets.find(
        (section, index) =>
          scrollPosition >= section.offset &&
          (!offsets[index + 1] || scrollPosition < offsets[index + 1].offset)
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950">
      <NavbarDemo activeSection={activeSection} />
      {sections.map((section) => (
        <section id={section.id} key={section.id}>
          {section.component}
        </section>
      ))}
    </div>
  );
}
