"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function PillButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}: PillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantClass =
    variant === "primary" ? "btn-gradient-orange" : "btn-glass";

  const classes = [
    variantClass,
    "inline-flex items-center gap-2 rounded-full px-8 py-3.5",
    "font-medium text-sm tracking-wide text-white",
    "transition-colors duration-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      <span
        className="inline-block transition-transform duration-300"
        style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)" }}
      >
        →
      </span>
    </>
  );

  const motionProps = {
    className: classes,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  };

  // Render as button when onClick is provided without a meaningful href
  if (onClick && href === "#") {
    return (
      <motion.button {...motionProps} onClick={onClick} type="button">
        {content}
      </motion.button>
    );
  }

  // Render as <a> for external links and mailto
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  // Render as Next.js Link for internal navigation
  return (
    <Link href={href} onClick={onClick} className={classes}>
      <motion.span
        className="inline-flex items-center gap-2"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {content}
      </motion.span>
    </Link>
  );
}
