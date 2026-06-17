"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  activeIndex: number;
  totalItems: number;
  accentColor: string;
}

export default function ProgressIndicator({
  activeIndex,
  totalItems,
  accentColor,
}: ProgressIndicatorProps) {
  const progress =
    totalItems <= 0
      ? 0
      : ((activeIndex + 1) / totalItems) * 100;

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
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
          Progress State
        </span>

        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm font-medium"
          style={{
            color: accentColor,
          }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      {/* Footer */}
      <div
        className="
          border-t
          border-white/5
          pt-4
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-zinc-600
            font-mono
          "
        >
          Active Chapter
        </span>

        <span
          className="font-mono text-xs"
          style={{
            color: accentColor,
          }}
        >
          {(activeIndex + 1)
            .toString()
            .padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}