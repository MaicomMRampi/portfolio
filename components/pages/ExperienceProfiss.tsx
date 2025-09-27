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
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Criação de Relatórios Gerenciais
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Desenvolvimento de Consultas Otimizadas em Banco de Dados
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Implementação de Sites Responsivos e Escaláveis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Consultas em PostgreSQL
              </li>
              <div className="grid grid-cols-3 gap-4">
                {["Next.js", "React.js", "Postgres", "Mysql"].map(
                  (tec, index) => (
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
                  )
                )}
              </div>
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
              <li>Criação de APIs</li>
              <li>Integração com Sistemas</li>
              <li>Consultas em Banco de dados</li>
            </ul>
            <p className="font-bold text-neutral-100 mb-2 pt-2">
              Stacks Utilizadas
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Node.js",
                "Next.js",
                "SocketIo",
                "React.js",
                "Postgres",
                "Mysql",
              ].map((tec, index) => (
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
      ),
    },
  ];
  return (
    <>
      <TextDefault text="Experiência Profissional" />
      <TextPadraoSecudary text="Minha jornada no desenvolvimento de software e liderança técnica" />
      <div className="hidden md:block">
        <Timeline data={data} />
      </div>
      <div className="block md:hidden space-y-8">
        {data.map((item, i) => (
          <Card
            key={i}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 shadow-xl border border-slate-700"
          >
            <div className="absolute -top-0 left-4 px-3 mt-1.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
              {item.title}
            </div>
            <div className="mt-4 space-y-4">{item.content}</div>
            <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.4),transparent_60%)] animate-pulse" />
          </Card>
        ))}
      </div>
    </>
  );
}
