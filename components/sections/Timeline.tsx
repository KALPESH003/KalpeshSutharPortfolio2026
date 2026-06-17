"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate 
} from "framer-motion";

// --- PREMIUM EASING ---
const easePremium = [0.76, 0, 0.24, 1] as const;

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

interface TimelineProps {
  sectionTitle: string;
  data: TimelineItem[];
}

// --- 3D SPATIAL CARD COMPONENT ---
const SpatialCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);
  const glareBackground = useMotionTemplate`radial-gradient(800px circle at ${glareX}% ${glareY}%, rgba(241, 96, 1, 0.12), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: easePremium, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
      className="w-full relative group cursor-default"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        // Adjusted padding for a tighter, more precise feel
        className="relative w-full rounded-2xl md:rounded-[2rem] bg-[#050505] border border-white/10 p-6 md:p-8 lg:p-10 overflow-hidden shadow-2xl transition-colors duration-500 hover:border-white/20"
      >
        <motion.div
          style={{ background: glareBackground }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* --- STRICT 12-COLUMN GRID --- */}
        {/* Replaced loose flexbox with a strict grid to fix the horizontal gap issue */}
        <div 
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Left: Date Data (Locked to 4 columns) */}
          <div className="md:col-span-4 lg:col-span-3 flex items-start pt-1">
            <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F16001] animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-white/80 uppercase tracking-widest tabular-nums">
                {item.date}
              </span>
            </span>
          </div>

          {/* Right: Core Information (Locked to 8 columns) */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col w-full">
            <span 
              style={{ transform: "translateZ(20px)" }}
              className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#F16001] uppercase mb-3"
            >
              {item.subtitle}
            </span>
            
            <h3 
              style={{ transform: "translateZ(40px)" }}
              className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-white leading-[1.2] mb-4"
            >
              {item.title}
            </h3>
            
            <p 
              style={{ transform: "translateZ(10px)" }}
              className="text-sm md:text-base font-sans text-white/60 leading-relaxed max-w-2xl group-hover:text-white/80 transition-colors duration-300"
            >
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN SECTION EXPORT ---
export default function Timeline({ sectionTitle, data }: TimelineProps) {
  return (
    <section className="relative w-full bg-[#000000] py-20 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[#F16001]/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Clean, Cohesive Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: easePremium }}
          // FIXED VERTICAL GAP: Reduced margin-bottom from md:mb-24 to md:mb-12
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#F16001] to-transparent" />
            <h2 className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#D9C3AB] uppercase font-bold">
              {sectionTitle}
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase tabular-nums">
            {data.length.toString().padStart(2, '0')} Entries Found
          </span>
        </motion.div>

        {/* 3D Spatial Grid */}
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {data.map((item, idx) => (
            <SpatialCard key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}