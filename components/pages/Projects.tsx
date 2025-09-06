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
    technology: ["Next.js", "Typescrypt", "Tailwind CSS", "Node.js", "MySql"],
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
              <div className="flex justify-between">
                {item.technology.map((tec, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-1 rounded-lg"
                  >
                    {tec}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
