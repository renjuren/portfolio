"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlobConfig {
  id: string;
  /** CSS width */
  width: string;
  /** CSS height */
  height: string;
  /** Gradient from color */
  from: string;
  /** Gradient to color */
  to: string;
  /** Initial top position */
  top: string;
  /** Initial left position */
  left: string;
  /** Float animation duration */
  duration: string;
  /** Float animation delay */
  delay: string;
  /** Whether this is a secondary (smaller, dimmer) blob */
  secondary?: boolean;
}

const BLOBS_DESKTOP: BlobConfig[] = [
  // Primary: Warm amber — bottom-left
  {
    id: "amber",
    width: "55vw",
    height: "55vw",
    from: "#E8820C",
    to: "#C46A08",
    top: "60%",
    left: "-10%",
    duration: "25s",
    delay: "0s",
  },
  // Primary: Emerald green — top-right
  {
    id: "emerald",
    width: "50vw",
    height: "50vw",
    from: "#00C853",
    to: "#2ECC71",
    top: "-5%",
    left: "55%",
    duration: "30s",
    delay: "-5s",
  },
  // Primary: Teal — mid-page
  {
    id: "teal",
    width: "45vw",
    height: "45vw",
    from: "#009688",
    to: "#1ABC9C",
    top: "35%",
    left: "25%",
    duration: "20s",
    delay: "-10s",
  },
  // Secondary: Small amber accent — top-left
  {
    id: "amber-secondary",
    width: "30vw",
    height: "30vw",
    from: "#E8820C",
    to: "#D4740A",
    top: "15%",
    left: "-5%",
    duration: "22s",
    delay: "-3s",
    secondary: true,
  },
  // Secondary: Small green accent — bottom-right
  {
    id: "green-secondary",
    width: "25vw",
    height: "25vw",
    from: "#00C853",
    to: "#009688",
    top: "70%",
    left: "65%",
    duration: "28s",
    delay: "-8s",
    secondary: true,
  },
  // Secondary: Small teal accent — center-right
  {
    id: "teal-secondary",
    width: "20vw",
    height: "20vw",
    from: "#1ABC9C",
    to: "#009688",
    top: "50%",
    left: "75%",
    duration: "24s",
    delay: "-12s",
    secondary: true,
  },
];

const BLOBS_MOBILE: BlobConfig[] = [
  {
    id: "amber",
    width: "80vw",
    height: "80vw",
    from: "#E8820C",
    to: "#C46A08",
    top: "55%",
    left: "-15%",
    duration: "25s",
    delay: "0s",
  },
  {
    id: "emerald",
    width: "70vw",
    height: "70vw",
    from: "#00C853",
    to: "#2ECC71",
    top: "-5%",
    left: "40%",
    duration: "30s",
    delay: "-5s",
  },
  {
    id: "teal",
    width: "60vw",
    height: "60vw",
    from: "#009688",
    to: "#1ABC9C",
    top: "35%",
    left: "10%",
    duration: "20s",
    delay: "-10s",
  },
];

export default function AmbientBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll();

  // --- Amber blob transforms (dominant in hero 0-0.2) ---
  const amberOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.7, 1],
    [0.3, 0.25, 0.1, 0.08, 0.2]
  );
  const amberY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const amberX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // --- Emerald blob transforms (dominant in projects 0.2-0.5) ---
  const emeraldOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.55, 0.7, 1],
    [0.08, 0.15, 0.3, 0.15, 0.08, 0.18]
  );
  const emeraldY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const emeraldX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // --- Teal blob transforms (dominant in about 0.5-0.7) ---
  const tealOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.75, 1],
    [0.05, 0.1, 0.28, 0.2, 0.22]
  );
  const tealY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const tealX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  // --- Secondary blob opacities (lower baseline) ---
  const secondaryAmberOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [0.18, 0.12, 0.05, 0.12]
  );
  const secondaryGreenOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0.04, 0.12, 0.18, 0.14]
  );
  const secondaryTealOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0.03, 0.08, 0.15, 0.12]
  );

  const blobs = isMobile ? BLOBS_MOBILE : BLOBS_DESKTOP;
  const blur = isMobile ? "blur(80px)" : "blur(120px)";

  /** Map a blob id to its framer-motion style overrides */
  const getMotionStyle = (blob: BlobConfig) => {
    switch (blob.id) {
      case "amber":
        return { opacity: amberOpacity, x: amberX, y: amberY };
      case "emerald":
        return { opacity: emeraldOpacity, x: emeraldX, y: emeraldY };
      case "teal":
        return { opacity: tealOpacity, x: tealX, y: tealY };
      case "amber-secondary":
        return { opacity: secondaryAmberOpacity };
      case "green-secondary":
        return { opacity: secondaryGreenOpacity };
      case "teal-secondary":
        return { opacity: secondaryTealOpacity };
      default:
        return {};
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          style={{
            position: "fixed",
            width: blob.width,
            height: blob.height,
            top: blob.top,
            left: blob.left,
            borderRadius: "50%",
            background: `radial-gradient(circle at 40% 40%, ${blob.from}, ${blob.to})`,
            filter: blur,
            pointerEvents: "none",
            willChange: "transform",
            animationName: "float",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDuration: blob.duration,
            animationDelay: blob.delay,
            ...getMotionStyle(blob),
          }}
        />
      ))}
    </div>
  );
}
