"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div>
      <p className="text-blue-500 text-center py-6">Olá, eu sou </p>
      <h1 className="text-white text-center text-6xl font-extrabold">
        Desenvolvedor
      </h1>
      <h1 className="text-center text-blue-500 font-extrabold text-5xl">
        Full Stack
      </h1>
      <div>
        <p className="text-gray-400 text-center font-bold">
          Criando experiências digitais extraordinárias com código limpo,
          arquitetura sólida e design inovador. Especialista em tecnologias
          modernas e soluções escaláveis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <div>
          <p>50+</p>
          <p>Projetos</p>
        </div>
        <div>
          <p>50+</p>
          <p>Projetos</p>
        </div>
        <div>
          <p>50+</p>
          <p>Projetos</p>
        </div>
        <div>
          <p>50+</p>
          <p>Projetos</p>
        </div>
      </div>
    </div>
  );
}
