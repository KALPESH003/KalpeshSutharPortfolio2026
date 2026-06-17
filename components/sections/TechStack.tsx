"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stackData = [
  { name: "Python", desc: "Core Backend & ML", category: "Backend" },
  { name: "TypeScript", desc: "Type-Safe Logic", category: "Language" },
  { name: "React", desc: "Dynamic UI", category: "Frontend" },
  { name: "Next.js", desc: "SSR Architecture", category: "Framework" },
  { name: "Adv Java", desc: "Enterprise Infra", category: "Backend" },
  { name: "MongoDB", desc: "NoSQL Persistence", category: "Database" },
  { name: "Tailwind", desc: "Utility Styling", category: "Frontend" },
  { name: "Node.js", desc: "Async Runtime", category: "Runtime" },
  { name: "AWS", desc: "Cloud Deployment", category: "DevOps" },
  { name: "Docker", desc: "Containerization", category: "DevOps" },
  { name: "SQL", desc: "Relational DB", category: "Database" }
];

const easePremium = [0.16, 1, 0.3, 1] as const;

// --- CIPHER EFFECT ---
const CipherText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_></[]";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations += 0.33; // Ensures consistent speed
      if (iterations >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  // aria-label added to hide the gibberish from screen readers
  return <span aria-label={text}>{displayText}</span>;
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="techstack" className="relative min-h-[60vh] py-16 md:py-20 bg-[#020202] overflow-hidden flex items-center justify-center">
      {/* GLOBAL INFRASTRUCTURE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute top-0 bottom-0 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" />

        <div className="absolute bottom-0 left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute left-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
            
        {/* Diagonal Hatch Pattern */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#020202]"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)` }}
        >
          <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 bg-[#020202] px-3 py-1 border border-white/10 rounded-sm">
            SYS_HATCH // T-0
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 pb-16 relative z-20" ref={containerRef}>
        
        <div className="absolute top-0 left-4 w-4 h-[1px] bg-white/20" />
        <div className="absolute top-0 left-4 w-[1px] h-4 bg-white/20" />
        <div className="absolute bottom-0 right-4 w-4 h-[1px] bg-white/20" />
        <div className="absolute bottom-0 right-4 w-[1px] h-4 bg-white/20" />

        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-white/10 pb-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#F16001] rounded-full animate-pulse" />
              <span className="text-[#F16001] font-mono text-[10px] uppercase tracking-[0.3em]">
                System Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-light tracking-tight text-white">
              Engineering <span className="font-serif italic text-white/50">Core.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-4 text-white/30 font-mono text-[9px] uppercase tracking-widest"
          >
            <div className="h-[1px] w-12 bg-white/10 hidden md:block" />
            <p>Hover nodes to decrypt telemetry</p>
          </motion.div>
        </div>

        {/* KINETIC LAYOUT GRID */}
        <motion.div 
          layout 
          className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {stackData.map((tech, idx) => {
            const isHovered = hoveredIndex === idx;
            const isOthersHovered = hoveredIndex !== null && hoveredIndex !== idx;

            return (
              <motion.div
                layout
                key={tech.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.03, ease: easePremium }}
                className={`
                  relative flex flex-col md:flex-row md:items-center cursor-crosshair overflow-hidden
                  border backdrop-blur-md transition-all duration-500 rounded-sm
                  ${isHovered 
                    ? "border-[#F16001]/40 bg-[#F16001]/10 px-6 py-4 md:py-3 shadow-[0_0_20px_rgba(120,120,120,0.10)]" 
                    : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] px-4 py-3"}
                `}
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0, marginRight: 0 }}
                      animate={{ opacity: 1, width: "auto", marginRight: 16 }}
                      exit={{ opacity: 0, width: 0, marginRight: 0 }}
                      className="hidden md:block font-mono text-[8px] text-[#F16001] tracking-[0.2em] uppercase whitespace-nowrap"
                    >
                      {tech.category} //
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.span
                  layout="position"
                  animate={{ opacity: isOthersHovered ? 0.2 : 1, color: isHovered ? "#ffffff" : "#A1A1AA" }}
                  className="font-mono text-sm md:text-base font-medium tracking-[0.1em] uppercase select-none whitespace-nowrap flex items-center gap-2"
                >
                  {isHovered && <span className="text-[#F16001]" aria-hidden="true">&gt;</span>}
                  <CipherText text={tech.name.toUpperCase()} isHovered={isHovered} />
                </motion.span>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: "auto", marginLeft: 16 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      className="flex items-center gap-4 overflow-hidden whitespace-nowrap mt-2 md:mt-0"
                    >
                      <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
                      <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                        {tech.desc}
                      </span>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-[#F16001] rounded-none" 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}