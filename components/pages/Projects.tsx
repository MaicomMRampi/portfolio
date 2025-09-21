import { Card } from "@heroui/card";
import TextDefault from "../TextPadrao";
import TextPadraoSecudary from "../TextPadraoSecudary";
import Image from "next/image";

const projects = [
  {
    image: "/images/Financa.png",
    title: "Sistema de Controle de Finanças",
    description:
      "Sistema completo de finanças para controle de orçamento pessoal",
    technology: ["Next.js", "Typescrypt", "Tailwind CSS", "Node.js", "MySql"],
  },
  {
    image: "/images/Pwa.png",
    title: "Site Empresarial",
    description:
      "Site criado para uma empresa que entrou em contato comigo para o desenvolvimento do mesmo",
    technology: ["Next.js", "Typescrypt", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <>
      <TextDefault text="Projetos em Destaque" />
      <TextPadraoSecudary text="Uma seleção dos meus trabalhos mais impactantes e inovadores" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <Card key={index} className="bg-black p-4">
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt="sistema de finanças"
              />
            </div>
            <div className="flex-col gap-4 flex pt-4">
              <p className="text-blue-500 font-bold">{item.title}</p>
              <p className="text-gray-400 font-bold">{item.description}</p>

              {/* tecnologias utiliadas */}
              <div className="grid grid-cols-3 gap-3">
                {item.technology.map((tec, index) => (
                  <button
                    key={index}
                    className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    {/* Border/Glow animado */}
                    <span className="absolute -inset-6 animate-pulse bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_50%,#E2CBFF_100%)] rounded-full" />

                    {/* Conteúdo do botão */}
                    <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950  text-sm font-medium text-white backdrop-blur-xl transition-transform duration-200 ">
                      {tec}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
