"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion, AnimatePresence } from "framer-motion";
import EducationCard from "./EducationCard";
import { EducationSectionItem } from "./types";

const educationData: EducationSectionItem[] = [
  {
    id: "msc",
    index: "01",
    status: "RECENTLY COMPLETED",
    institution: "The Maharaja Sayajirao University of Baroda",
    degree: "Master of Science in Information Technology",
    duration: "2024-2026",
    description:
      "Recently completed an advanced postgraduate program focused on secure computing, modern software systems, artificial intelligence, enterprise technologies, and scalable digital solutions.",
    skills: ["Artificial Intelligence", "Cybersecurity", "Platform Technologies", "Network Security", "Software Engineering", "Systems Design"],
    achievements: ["Advanced software engineering studies", "Cybersecurity specialization", "Research-driven coursework", "Enterprise system design"],
    accent: "#4F8CFF",
  },
  {
    id: "bsc",
    index: "02",
    status: "COMPLETED",
    institution: "Sardar Patel University",
    degree: "Bachelor of Computer Science",
    duration: "2021-2024",
    description:
      "Built a strong foundation in computational thinking, software development principles, algorithms, database systems, and modern programming practices.",
    skills: ["Programming", "Algorithms", "Data Structures", "Databases", "Computer Networks", "OOP"],
    achievements: ["Strong programming foundation", "Database management expertise", "Algorithmic problem solving", "Software development practices"],
    accent: "#D95C93",
  },
  {
    id: "industry",
    index: "03",
    status: "PROFESSIONAL DEVELOPMENT",
    institution: "Industry Experience Simulations",
    degree: "Accenture | AWS APAC | Electronic Arts | Mastercard | Tata",
    duration: "Sep 2025-Feb 2026",
    description:
      "Completed industry-led virtual experience programs focused on software engineering, cloud architecture, cybersecurity, systems analysis, and enterprise technology practices.",
    skills: ["AWS Architecture", "Cybersecurity", "Code Analysis", "SDLC", "System Optimization", "Technical Documentation"],
    achievements: ["Designed scalable cloud architectures", "Applied SDLC methodologies", "Performed debugging and code analysis", "Conducted cybersecurity assessments", "Produced technical documentation"],
    accent: "#D6B370",
  },
];

// --- Animation Constants & Physics ---
const easePremium = [0.16, 1, 0.3, 1] as const;

// A bundle of intertwined, 0.5px neural/fiber-optic paths
const CYBER_THREADS = [
  "M 0 10 C 20 -2, 30 22, 50 10 C 70 -2, 80 22, 100 10",
  "M 0 10 C 15 18, 35 2, 50 10 C 65 18, 85 2, 100 10",
  "M 0 10 C 10 5, 25 15, 40 10 S 70 5, 85 10 S 95 15, 100 10",
  "M 0 10 Q 20 20, 40 10 T 80 10 T 100 10",
  "M 0 10 Q 15 0, 30 10 T 70 10 T 100 10",
  "M 0 10 C 25 10, 25 18, 50 10 C 75 2, 75 10, 100 10",
];

// --- Subcomponents ---

function ArchitecturalCanvas({ accentColor }: { accentColor: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
      className="absolute inset-0 pointer-events-none z-[4] hidden sm:block"
    >
      {/* Grid Pattern (40px Dot Matrix)
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      /> */}

      {/* Global Margin Lines (Full Height & Full Width) */}
      <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" /> {/* line 1 */}
      <div className="absolute top-0 bottom-0 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10" /> {/* line 2 */}
      <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" /> {/* line 3 */}
      <div className="absolute left-0 right-0 top-[64px] md:top-[96px] h-[1px] border-t border-dashed border-white/10" /> {/* line 4 */}
      <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" /> {/* line 5 */}

      {/* --- THE DIAGONAL HATCH PATTERN CHANNEL --- 
          Fills the exact 60px gap between the first margin (64px) and second margin (124px)
      */}
      <div 
        className="absolute top-24 bottom-0 left-[24px] w-[60px] bg-[#020202]"
        style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 6px,
                    rgba(255, 255, 255, 0.04) 6px,
                    rgba(255, 255, 255, 0.04) 12px
                  )`
                }}
      />

      {/* Overhanging Dashed Lines */}
      <div className="absolute top-0 left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
      <div className="absolute bottom-0 left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
      <div className="absolute left-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
      <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
      
      {/* Precision Registration Intersections (+) 
          Colors sync seamlessly with the active item's accent color
      */}
      <div className="absolute top-[64px] md:top-[96px] left-[32px] md:left-[24px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-[10px] font-mono leading-none transition-colors duration-500" style={{ color: accentColor }}>+</div>
      <div className="absolute top-[64px] md:top-[96px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mt-2 flex items-center justify-center text-[10px] font-mono leading-none transition-colors duration-500" style={{ color: accentColor }}>+</div>
      <div className="absolute bottom-[24px] left-[32px] md:left-[24px] w-4 h-4 -ml-2 -mb-2 flex items-center justify-center text-[10px] font-mono leading-none transition-colors duration-500" style={{ color: accentColor }}>+</div>
      <div className="absolute bottom-[24px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mb-2 flex items-center justify-center text-[10px] font-mono leading-none transition-colors duration-500" style={{ color: accentColor }}>+</div>
    </motion.div>
  );
}

function BackgroundEffects({ accentColor }: { accentColor: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="educationNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.45 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#educationNoise)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[700px] w-[700px] rounded-full blur-[180px]"
          animate={
            prefersReducedMotion
              ? { backgroundColor: accentColor }
              : {
                  backgroundColor: accentColor,
                  x: ["-10%", "15%", "-5%"],
                  y: ["0%", "12%", "4%"],
                  scale: [1, 1.12, 0.95],
                }
          }
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          style={{ opacity: 0.12, top: "-10%", left: "10%" }}
        />
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full blur-[140px]"
          animate={
            prefersReducedMotion
              ? { backgroundColor: accentColor }
              : {
                  backgroundColor: accentColor,
                  x: ["0%", "-15%", "8%"],
                  y: ["0%", "-10%", "6%"],
                  scale: [1, 0.9, 1.08],
                }
          }
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          style={{ opacity: 0.08, bottom: "-10%", right: "5%" }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{ background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%)" }}
      />
    </>
  );
}

function SignalGraph({ activeId, accentColor }: { activeId: string; accentColor: string }) {
  const [telemetry, setTelemetry] = useState({ frq: 144.2, ping: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        frq: Number((144 + Math.random() * 2).toFixed(2)),
        ping: Math.floor(10 + Math.random() * 8)
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-col gap-3 hidden md:flex w-full">
      {/* Header Row */}
      <div className="flex items-end justify-between px-1">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono flex items-center gap-2">
            <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" />
            Signal Signature
          </span>
          <span className="font-mono text-xs tracking-widest transition-colors duration-500 font-semibold" style={{ color: accentColor }}>
            {activeId.toUpperCase()}
          </span>
        </div>

        {/* Live Telemetry Readout */}
        <div className="flex flex-col items-end gap-1 text-[9px] font-mono text-white/30 tracking-widest transition-colors duration-500" style={{ color: accentColor }}>
          <span style={{ opacity: 0.6 }}>FRQ // {telemetry.frq}hz</span>
          <span style={{ opacity: 0.6 }}>LAT // {telemetry.ping}ms</span>
        </div>
      </div>

      {/* Main Signal Display Box */}
      <div 
        className="relative h-24 rounded-lg border border-white/[0.08] bg-[#050505] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition-all duration-1000"
        style={{ boxShadow: `0 0 30px -10px ${accentColor}20` }}
      >
        {/* CRT Scanline Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "100% 4px, 4px 100%",
          }}
        />

        {/* Core Energy Gradient Glow */}
        <div
          className="absolute inset-0 transition-colors duration-1000 mix-blend-screen"
          style={{ background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 60%)` }}
        />

        {/* Cyberpunk Fiber Threads */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 h-full w-full mix-blend-screen overflow-visible" style={{ filter: `drop-shadow(0 0 2px ${accentColor}80)` }}>
          <AnimatePresence mode="wait">
            <motion.g key={activeId} exit={{ opacity: 0, transition: { duration: 0.3 } }}>
              {/* Layer A: Glass cords */}
              {CYBER_THREADS.map((path, index) => (
                <motion.path
                  key={`base-${index}`} d={path} fill="none" stroke={accentColor} strokeWidth="0.2" strokeOpacity="0.2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: easePremium, delay: index * 0.1 }}
                />
              ))}

              {/* Layer B: Data Packets */}
              {CYBER_THREADS.map((path, index) => {
                const dashLength = 2 + (index % 3);
                const gapLength = 15 + (index * 5);
                const animDuration = 1.5 + (index * 0.3);
                return (
                  <motion.path
                    key={`data-${index}`} d={path} fill="none" stroke={accentColor} strokeWidth="0.4" strokeOpacity="0.8" strokeDasharray={`${dashLength} ${gapLength}`}
                    initial={{ strokeDashoffset: 100, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 1 }}
                    transition={{ 
                      strokeDashoffset: { duration: animDuration, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 1, ease: easePremium, delay: index * 0.1 }
                    }}
                  />
                );
              })}
            </motion.g>
          </AnimatePresence>
        </svg>

        {/* Cinematic Scanner Sweep Overlay */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-[20%] pointer-events-none mix-blend-overlay"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}30, transparent)` }}
        />

        {/* Edge Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #050505 0%, transparent 15%, transparent 85%, #050505 100%)" }} />
      </div>
    </div>
  );
}

function ProgressIndicator({ activeIndex, totalItems, accentColor }: { activeIndex: number; totalItems: number; accentColor: string }) {
  const progress = totalItems <= 0 ? 0 : ((activeIndex + 1) / totalItems) * 100;

  return (
    <div className="flex flex-col gap-5 hidden lg:flex">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-mono">
          Progress State
        </span>
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm font-medium transition-colors duration-500"
          style={{ color: accentColor }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </div>
  );
}

function EducationRail({ items, activeIndex, onNavigate }: { items: EducationSectionItem[]; activeIndex: number; onNavigate: (i: number) => void }) {
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <aside className="lg:h-full flex flex-col justify-center lg:justify-between py-8 lg:py-12 lg:pr-16 relative z-20">
      <div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easePremium }}>
                                <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-zinc-500">Education</span>
                              </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8, ease: easePremium }}
          className="mt-4 lg:mt-6 text-3xl md:text-5xl xl:text-6xl leading-none tracking-tight text-white font-light"
        >
          Narrative
          <br />
          <span className="italic text-zinc-500 font-extralight">Evolution</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 lg:mt-6 max-w-sm text-xs md:text-sm leading-relaxed text-zinc-400 hidden sm:block"
        >
          Academic progression, technical growth, and professional development across modern computing, software engineering, cybersecurity, and emerging technologies.
        </motion.p>

        <div className="mt-8 lg:mt-12">
          <div className="mb-4 lg:mb-5 text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono">
            Timeline
          </div>
          <div className="relative border-l border-white/5 pl-5">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(index)}
                  className="group relative flex w-full items-center gap-4 py-3 lg:py-4 text-left transition-all"
                  aria-current={isActive ? "true" : undefined}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.15 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-[27px] h-3 w-3 rounded-full border"
                    style={{
                      backgroundColor: isActive ? item.accent : "#090909",
                      borderColor: isActive ? item.accent : "rgba(255,255,255,0.1)"
                    }}
                  />
                  <span
                    className="text-xs font-mono tracking-widest transition-colors duration-500"
                    style={{ color: isActive ? item.accent : "rgba(255,255,255,0.3)" }}
                  >
                    {item.index}
                  </span>
                  <div>
                    <div className="text-xs md:text-sm transition-colors duration-500" style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)" }}>
                      {item.degree}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-12 flex flex-col gap-8">
        <SignalGraph activeId={activeItem.id} accentColor={activeItem.accent} />
        <ProgressIndicator activeIndex={activeIndex} totalItems={items.length} accentColor={activeItem.accent} />
        
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono">EDU_SYS</span>
          <span className="font-mono text-[10px] lg:text-xs transition-colors duration-500 flex items-center gap-2" style={{ color: activeItem.accent }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeItem.accent }} />
            ACTIVE
          </span>
        </div>
      </div>
    </aside>
  );
}

// --- Main Application Export ---

export default function EducationTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a tall scrolling track, height depends on items count
  const scrollTrackHeight = `${educationData.length * 100}vh`;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0 to 1) perfectly into the index slots
    const progress = latest * (educationData.length - 1);
    const newIndex = Math.round(progress);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const itemScrollHeight = window.innerHeight; 
    window.scrollTo({
      top: top + index * itemScrollHeight,
      behavior: "smooth",
    });
  };

  const activeItem = educationData[activeIndex] ?? educationData[0];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />

      <section
        id="education"
        ref={containerRef}
        className="relative bg-[#050505] text-white"
        style={{ height: scrollTrackHeight }}
      >
        {/* Sticky viewport frame */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center">
          <BackgroundEffects accentColor={activeItem.accent} />
          
          {/* Inject the Architectural Canvas Overlay */}
          <ArchitecturalCanvas accentColor={activeItem.accent} />

          <div className="relative z-10 mx-auto max-w-[1800px] w-full px-4 sm:px-6 md:px-10 xl:px-16 ml-12 h-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Rail (Static layout, tracks the active index seamlessly) */}
            <div className="lg:col-span-4 h-auto lg:h-full shrink-0 pt-16 lg:pt-0">
              <EducationRail
                items={educationData}
                activeIndex={activeIndex}
                onNavigate={scrollToIndex}
              />
            </div>

            {/* Right Content - The 3D Scroll Synchronized Stack */}
            <div className="lg:col-span-8 relative h-full flex-1 flex items-center justify-center pb-16 lg:pb-0" style={{ perspective: '1200px' }}>
              {educationData.map((item, index) => {
                const isActive = index === activeIndex;
                const diff = index - activeIndex; 
                
                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none w-full"
                    initial={false}
                    animate={{
                      y: diff * 80, 
                      scale: isActive ? 1 : 0.9,
                      rotateX: diff * -8, // Tilts for 3D depth
                      opacity: isActive ? 1 : 0,
                      zIndex: 20 - Math.abs(diff),
                    }}
                    transition={{
                      duration: 0.8,
                      ease: easePremium,
                    }}
                  >
                    <div className={`w-full max-w-4xl transition-all duration-700 ${isActive ? 'pointer-events-auto shadow-2xl' : 'pointer-events-none'}`}>
                      <EducationCard item={item} index={index} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


