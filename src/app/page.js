import ExperienceProfissional from "@/components/Experience";
import Expert from "@/components/pages/Expert";
import Hero from "@/components/pages/Hero";
import Terminal from "@/components/pages/terminal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto">
      <Hero />
      <Terminal />
      <Expert />
      {/* <ExperienceProfissional /> */}
    </div>
  );
}
