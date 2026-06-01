"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

export default function PillButton({
  children,
  href = "#",
  variant = "dark",
  className = "",
  onClick,
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 group";

  const variants = {
    dark: "bg-text-primary text-text-light hover:bg-text-secondary",
    light: "bg-white text-text-primary hover:bg-gray-100",
  };

  const content = (
    <>
      <span>{children}</span>
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </>
  );

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <Link href={href}>
      <motion.span
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.span>
    </Link>
  );
}
