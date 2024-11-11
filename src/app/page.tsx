import { NavbarDemo } from "@/components/navbar";
import { HomeCon } from "@/components/home";
import Image from "next/image";
import { About } from "@/components/about";

export default function Home() {
  return (
    <>
      <NavbarDemo />

      <HomeCon />

      <About />
    </>
  );
}
