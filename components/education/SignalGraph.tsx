"use client";

import { AnimatePresence, motion } from "framer-motion";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

interface SignalGraphProps {
  activeId: string;
  accentColor: string;
}

const SIGNALS = {
  msc: "M 0 10 C 20 2, 30 18, 50 10 C 70 2, 80 18, 100 10",

  bsc: "M 0 10 C 25 18, 25 2, 50 10 C 75 18, 75 2, 100 10",

  industry:
    "M 0 10 C 15 2, 35 18, 50 10 C 65 2, 85 18, 100 10",
};

export default function SignalGraph({
  activeId,
  accentColor,
}: SignalGraphProps) {
  const path =
    SIGNALS[activeId as keyof typeof SIGNALS] ??
    SIGNALS.msc;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-zinc-500
            font-mono
          "
        >
          Signal Signature
        </span>

        <span
          className="font-mono text-xs"
          style={{
            color: accentColor,
          }}
        >
          {activeId.toUpperCase()}
        </span>
      </div>

      <div
        className="
          relative
          h-24
          rounded-2xl
          border
          border-white/5
          bg-white/[0.02]
          overflow-hidden
        "
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "100% 14px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at center,
              ${accentColor}15,
              transparent 70%
            )`,
          }}
        />

        <svg
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <AnimatePresence mode="wait">
            <motion.path
              key={activeId}
              d={path}
              fill="none"
              stroke={accentColor}
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>

          {/* Live pulse */}
          <motion.circle
            r="0.8"
            fill={accentColor}
            animate={{
              cx: [0, 100],
            }}
            cy="10"
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>
    </div>
  );
}