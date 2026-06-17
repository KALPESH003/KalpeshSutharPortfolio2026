"use client";

import { motion, useReducedMotion } from "framer-motion";

interface BackgroundEffectsProps {
  accentColor: string;
}

export default function BackgroundEffects({
  accentColor,
}: BackgroundEffectsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Cinematic Noise */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="educationNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.45 0
              "
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#educationNoise)"
          />
        </svg>
      </div>

      {/* Animated Mesh Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full blur-[180px]"
          animate={
            prefersReducedMotion
              ? {
                  backgroundColor: accentColor,
                }
              : {
                  backgroundColor: accentColor,
                  x: ["-10%", "15%", "-5%"],
                  y: ["0%", "12%", "4%"],
                  scale: [1, 1.12, 0.95],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            opacity: 0.12,
            top: "-10%",
            left: "10%",
          }}
        />

        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full blur-[140px]"
          animate={
            prefersReducedMotion
              ? {
                  backgroundColor: accentColor,
                }
              : {
                  backgroundColor: accentColor,
                  x: ["0%", "-15%", "8%"],
                  y: ["0%", "-10%", "6%"],
                  scale: [1, 0.9, 1.08],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            opacity: 0.08,
            bottom: "-10%",
            right: "5%",
          }}
        />
      </div>

      {/* Luxury Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          z-[2]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.06) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />{Array.from({ length: 12 }).map((_, index) => (
  <motion.div
    key={index}
    className="absolute rounded-full"
    style={{
      width: 2,
      height: 2,
      background: accentColor,
      opacity: 0.15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.05, 0.2, 0.05],
    }}
    transition={{
      duration: 6 + Math.random() * 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}
    </>
  );
}