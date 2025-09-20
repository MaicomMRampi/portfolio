"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { ColourfulText } from "../ui/colourful-text";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

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
    value: "950",
    description: "Commits",
  },
];

const words = [
  {
    text: "Olá,",
  },
  {
    text: "eu sou",
  },
  {
    text: "Maicom",
  },
  {
    text: "Mateus",
  },
  {
    text: "Rampi.",
  },
];
export default function Hero() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{
    //     opacity: 1,
    //     scale: 1,
    //     y: [0, -30, 0],
    //   }}
    //   transition={{
    //     duration: 0.4,
    //     scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    //     y: {
    //       duration: 2,
    //       repeat: Number.POSITIVE_INFINITY,
    //       ease: "easeInOut",
    //     },
    //   }}
    // >
    <div>
      <div className="text-blue-500 flex justify-center py-6 ">
        <TypewriterEffectSmooth words={words} />
      </div>
      <p className="text-blue-500 text-center"></p>
      <h1 className="text-white text-center text-2xl md:text-6xl font-extrabold">
        <ColourfulText text="Desenvolvedor" />
      </h1>
      <h1 className="text-center text-blue-500 font-extrabold  text-2xl md:text-5xl">
        Full Stack
      </h1>
      <div className="w-full my-4 relative flex justify-center items-center">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-100 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      </div>

      <div className="py-6">
        <p className="text-gray-400 text-center font-bold">
          Criando experiências digitais extraordinárias com código limpo,
          arquitetura sólida e design inovador. Especialista em tecnologias
          modernas e soluções escaláveis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {habilits.map((item, index) => (
          <div key={index}>
            <p className="text-4xl font-bold text-blue-500 text-shadow-lg/30 ">
              <CountUp duration={5} end={Number(item.value)} /> +
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
