"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  title?: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  const label = title ? `[${number}] · ${title}` : `[${number}]`;

  return (
    <motion.div
      className="mb-8 text-[13px] font-medium uppercase tracking-[0.15em] text-text-muted"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {label}
    </motion.div>
  );
}
