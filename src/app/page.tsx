import { NavbarDemo } from "@/components/navbar";
import { HomeCon } from "@/components/home";
import { About } from "@/components/about";
import { Skills } from "@/components/skils";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <div className="bg-slate-950">
        <NavbarDemo />

        <HomeCon />

        <About />

        <Services />

        <Skills />
      </div>
    </>
  );
}
