"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  title?: string;
  light?: boolean;
}

export default function SectionLabel({
  number,
  title,
  light = false,
}: SectionLabelProps) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span
        className={`text-label ${
          light ? "text-text-muted" : "text-text-secondary"
        }`}
      >
        [{number}]
      </span>
      {title && (
        <span
          className={`text-label ${
            light ? "text-text-muted" : "text-text-secondary"
          }`}
        >
          — {title}
        </span>
      )}
    </motion.div>
  );
}
