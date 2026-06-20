"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LiveClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time
    setTime(new Date());
    
    // Update every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by not rendering until client loads
  if (!time) return null; 

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ willChange: "transform, opacity" }}
      className="fixed top-10 right-2 md:top-8 md:right-18 z-[90] flex flex-col items-end pointer-events-none mix-blend-difference text-white select-none"
    >
      {/* Status Indicator */}
      <div className="flex items-center gap-2 mb-1.5">
        {/* 
          Mechanical Status Square
          Opacity stays at 1 for 50% of the cycle, drops instantly to 0 for the remaining 50%.
        */}
        <motion.div 
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          className="w-1.5 h-1.5 bg-[#00ff22]" 
        />
        <span className="text-[7px] md:text-[8px] font-mono tracking-[0.3em] text-[#D9C3AB] uppercase font-bold">
          Local Time
        </span>
      </div>

      {/* Live Time */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-lg md:text-xl font-mono font-light tracking-tight tabular-nums leading-none">
          {formatTime(time)}
        </span>
        <span className="text-[8px] font-mono tracking-[0.2em] text-white/50 uppercase">
          IST
        </span>
      </div>

      {/* Date */}
      <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase mt-1.5">
        {formatDate(time)}
      </span>
    </motion.div>
  );
}

