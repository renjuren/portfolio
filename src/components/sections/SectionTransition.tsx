"use client";

import { motion } from "framer-motion";

interface SectionTransitionProps {
  text: string;
  className?: string;
}

export default function SectionTransition({
  text,
  className = "",
}: SectionTransitionProps) {
  const words = text.split(" ");

  return (
    <div className={`py-32 md:py-44 lg:py-56 relative z-10 ${className}`}>
      <div className="container-max">
        <motion.h2
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </div>
    </div>
  );
}
