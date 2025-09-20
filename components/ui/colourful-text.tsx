"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(0, 168, 255)", // azul neon
    "rgb(0, 112, 255)", // azul profundo
    "rgb(0, 210, 255)", // ciano vibrante
    "rgb(25, 42, 255)", // azul elétrico
    "rgb(102, 45, 255)", // roxo neon
    "rgb(178, 0, 255)", // magenta intenso
    "rgb(0, 255, 221)", // verde água neon
    "rgb(0, 128, 255)", // azul médio
    "rgb(15, 75, 255)", // azul escuro
    "rgb(0, 200, 255)", // ciano forte
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
