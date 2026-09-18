"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "word" | "line";
}

const EASING: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  splitBy = "word",
}: AnimatedTextProps) {
  if (splitBy === "line") {
    const lines = text.split(/\n|<br\s*\/?>/);

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: "100%" },
                visible: {
                  y: "0%",
                  transition: {
                    duration: 0.8,
                    ease: EASING,
                    delay: delay + i * 0.15,
                  },
                },
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}
      </motion.div>
    );
  }

  // Word mode
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: EASING,
                  delay: delay + i * 0.08,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
