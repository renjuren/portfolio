"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Desktop ribbon path — a flowing multi-curve S-shape spanning the full viewport width.
 *
 * The path starts from the left edge near the top, sweeps right in a wide arc,
 * curves back left, then sweeps right again toward the bottom-right.
 */
const DESKTOP_PATH = [
  "M -20 100",
  // First rightward sweep
  "C 200 50, 500 300, 800 200",
  // Pull back leftward
  "C 1100 100, 600 600, 300 500",
  // Second rightward sweep (wider)
  "C 0 400, 400 900, 800 750",
  // Final curve to bottom-right
  "C 1200 600, 1000 1000, 1400 900",
  // Trailing exit
  "C 1800 800, 1200 1200, 1500 1100",
].join(" ");

/**
 * Mobile ribbon path — simplified with fewer control points.
 */
const MOBILE_PATH = [
  "M -10 80",
  "C 100 30, 250 250, 400 180",
  "C 550 110, 300 450, 150 400",
  "C 0 350, 200 650, 400 580",
  "C 600 510, 450 800, 500 750",
].join(" ");

/** The SVG viewBox width for each breakpoint */
const DESKTOP_VIEWBOX_WIDTH = 1500;
const MOBILE_VIEWBOX_WIDTH = 500;

/** Shared viewBox height */
const VIEWBOX_HEIGHT = 1200;

export default function GreenRibbon() {
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

  // Draw ribbon from 0% to 100% as user scrolls through the page
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const d = isMobile ? MOBILE_PATH : DESKTOP_PATH;
  const viewBoxW = isMobile ? MOBILE_VIEWBOX_WIDTH : DESKTOP_VIEWBOX_WIDTH;
  const opacity = isMobile ? 0.2 : 0.4;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${viewBoxW} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "40vh",
          left: 0,
          width: "100%",
          height: "3000px",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient
            id="ribbon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00C853" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        <motion.path
          d={d}
          stroke="url(#ribbon-gradient)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            pathLength,
            opacity,
            filter: "drop-shadow(0 0 8px rgba(0, 200, 83, 0.3))",
          }}
        />
      </svg>
    </div>
  );
}
