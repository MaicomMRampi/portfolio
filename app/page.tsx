import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/pages/Hero";
import Terminal from "@/components/pages/terminal";
import Habilits from "@/components/pages/Habilits";
import Projects from "@/components/pages/Projects";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Terminal />
      <Habilits />
      <Projects />
    </section>
  );
}
