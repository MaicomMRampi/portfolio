"use client";

import { motion } from "motion/react";

const habilits = [
  {
    value: "14",
    description: "Projetos",
  },
  {
    value: "2",
    description: "Anos",
  },
  {
    value: "5",
    description: "Clientes",
  },
  {
    value: "150",
    description: "Commits",
  },
];

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -30, 0],
      }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        y: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    >
      <p className="text-blue-500 text-center py-6">
        Olá, eu sou Maicom Mateus Rampi
      </p>
      <p className="text-blue-500 text-center"></p>
      <h1 className="text-white text-center text-2xl md:text-6xl font-extrabold">
        Desenvolvedor
      </h1>
      <h1 className="text-center text-blue-500 font-extrabold  text-2xl md:text-5xl">
        Full Stack
      </h1>
      <div className="py-6">
        <p className="text-gray-400 text-center font-bold">
          Criando experiências digitais extraordinárias com código limpo,
          arquitetura sólida e design inovador. Especialista em tecnologias
          modernas e soluções escaláveis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {habilits.map((item) => (
          <div>
            <p>{item.value} +</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
