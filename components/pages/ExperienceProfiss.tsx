import { Card } from "@heroui/card";
import TextDefault from "../TextPadrao";
import TextPadraoSecudary from "../TextPadraoSecudary";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { GraduationCap, Database, Code } from "lucide-react";

export default function Experience() {
  const data = [
    {
      title: "2022",
      content: (
        <div className="space-y-4 w-full">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <p className="font-medium">
              Formação em Análise e Desenvolvimento de Sistemas
            </p>
          </div>
          <Image
            src="/images/forma.jpg"
            height={400}
            width={400}
            alt="Formatura"
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <Card className="bg-black p-6 space-y-2 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-500" />
            <p className="text-blue-500 font-bold text-lg">
              Analista de Suporte Técnico
            </p>
          </div>
          <p className="text-neutral-200">Precisa Tecnologia</p>
          <p className="text-neutral-400">2022 - 2024</p>
          <p className="text-neutral-400">Chapecó - SC</p>

          <div className="pt-3">
            <p className="font-bold text-neutral-100 mb-2">
              Principais Tarefas
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Criação de Relatórios</li>
              <li>Consultas no Banco de Dados</li>
              <li>Criação de Site</li>
            </ul>
          </div>
        </Card>
      ),
    },
    {
      title: "2025",
      content: (
        <Card className="bg-black p-6 space-y-2 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-500" />
            <p className="text-blue-500 font-bold text-lg">
              Full Stack Developer
            </p>
          </div>
          <p className="text-neutral-200">Mhnet Telecom</p>
          <p className="text-neutral-400">2025 - Presente</p>
          <p className="text-neutral-400">Chapecó - SC</p>

          <div className="pt-3">
            <p className="font-bold text-neutral-100 mb-2">
              Principais Tarefas
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Desenvolvimento de Sistemas</li>
            </ul>
          </div>
        </Card>
      ),
    },
  ];
  return (
    <>
      <TextDefault text="Experiência Profissional" />
      <TextPadraoSecudary text="Minha jornada no desenvolvimento de software e liderança técnica" />
      <Timeline data={data} />
    </>
  );
}
