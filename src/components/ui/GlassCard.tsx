"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  as = "div",
}: GlassCardProps) {
  const Component = as === "article" ? motion.article : motion.div;

  const baseClasses = [
    "glass-card",
    "rounded-2xl overflow-hidden",
    hover ? "glass-card-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={baseClasses}
      {...(hover && {
        whileHover: { y: -8, scale: 1.02 },
        transition: springTransition,
      })}
    >
      {children}
    </Component>
  );
}
