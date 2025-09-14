import Hero from "@/components/pages/Hero";
import Terminal from "@/components/pages/terminal";
import Habilits from "@/components/pages/Habilits";
import Projects from "@/components/pages/Projects";
import Experience from "@/components/pages/ExperienceProfiss";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Terminal />
      <Habilits />
      <Projects />
      <Experience />
    </section>
  );
}
