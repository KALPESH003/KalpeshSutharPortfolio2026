"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValueEvent,
  useSpring
} from "framer-motion";
import Link from "next/link";
import {projects} from "../../data/config";

// --- PREMIUM EASING ---
const easePremium = [0.76, 0, 0.24, 1];

// --- DYNAMIC WAVEFORM COMPONENT ---
const TelemetryWave = ({ themeColor, pathData }: { themeColor: string, pathData: string }) => (
  <div 
    className="h-6 w-48 overflow-hidden relative mb-4 opacity-70"
    style={{
      maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
    }}
  >
    
    <svg 
      viewBox="0 0 400 20" 
      className="absolute top-1/2 -translate-y-1/2 w-[200%] h-full fill-transparent stroke-[1.5] animate-wave"
      style={{ stroke: themeColor }}
    >
      <path d={pathData} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  </div>
);

// // --- LEFT AXIS / RULER COMPONENT ---
// const LeftAxis = ({ total, current, activeColor }: { total: number, current: number, activeColor: string }) => (
//   <div className="absolute left-4 md:left-6 top-0 bottom-0 w-8 border-l border-white/10 z-50 flex flex-col justify-center gap-4 py-[20vh] pointer-events-none">
//     {Array.from({ length: total }).map((_, i) => (
//       <div key={i} className="relative flex items-center">
//         <div 
//           className="h-[1px] transition-all duration-500" 
//           style={{ 
//             width: current === i ? "16px" : "8px", 
//             backgroundColor: current === i ? activeColor : "rgba(255,255,255,0.2)" 
//           }} 
//         />
//         {current === i && (
//           <motion.div layoutId="active-indicator" className="absolute left-6 flex items-center gap-2">
//             <div 
//               className="w-0 h-0 border-y-4 border-y-transparent border-l-4 transition-colors duration-500" 
//               style={{ borderLeftColor: activeColor }}
//             />
//             <span 
//               className="text-[9px] font-mono tracking-widest uppercase hidden md:block transition-colors duration-500"
//               style={{ color: activeColor }}
//             >
//               Work
//             </span>
//           </motion.div>
//         )}
//       </div>
//     ))}
//   </div>
// );

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- THE FIX: 9-PHASE PLATEAU MATH ---
  // Length 10 array. Exactly 5 plateaus and 4 transitions.
  // The final 12% of the scroll (0.88 to 1.00) is locked perfectly at -80% for the 5th project.
  const rawX = useTransform(
    scrollYProgress,
    [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1],
    ["0%", "0%", "-20%", "-20%", "-40%", "-40%", "-60%", "-60%", "-80%", "-80%"]
  );

  const smoothX = useSpring(rawX, { stiffness: 150, damping: 25, mass: 0.1 });

  // Update HUD based on which of the 5 segments we are currently inside
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.16) setActiveIndex(0);
    else if (latest < 0.38) setActiveIndex(1);
    else if (latest < 0.60) setActiveIndex(2);
    else if (latest < 0.82) setActiveIndex(3);
    else setActiveIndex(4);
  });

  const activeThemeColor = projects[activeIndex]?.themeColor || "#ffffff";

  return (
    // Container height is 600vh to give a luxuriously long scroll track 
    // ensuring the 5th project gets ample reading time.
   <section id="projects" ref={containerRef} className="relative w-full bg-[#000000]" style={{ height: `${projects.length * 100}vh` }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hardware-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: hardware-slide 4s linear infinite;
          will-change: transform;
        }
      `}} />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#020202]">
          {/* WORK LABEL: Positioned in the header gutter */}
          <div className="absolute top-[50px] left-[32px] md:left-[112px] z-[10]">
            <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-zinc-500">
              Work
            </span>
          </div>
                
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
      <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />


        {/* GLOBAL ARCHITECTURAL FRAME */}
          <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">

            {/* OUTER FRAME */}
            <div className="absolute top-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
            <div className="absolute bottom-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
            <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" />
            <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" />
          </div>




        {/* HUD: Left Ruler
        <LeftAxis total={projects.length} current={activeIndex} activeColor={activeThemeColor} /> */}

        {/* HUD: Bottom Progress Tracker */}
        <div className="absolute bottom-8 left-16 md:left-32 right-16 md:right-32 flex items-center justify-between border-t border-white/10 pt-4 z-50 pointer-events-none">
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            <span className="text-white">{(activeIndex + 1).toString().padStart(2, '0')}</span> / {projects.length.toString().padStart(2, '0')}
          </div>
          <div className="flex items-center gap-4">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full transition-colors duration-500" 
                style={{ backgroundColor: activeIndex === i ? activeThemeColor : "rgba(255,255,255,0.2)" }}
              />
            ))}
            <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase ml-4 hidden md:block">Scroll</span>
          </div>
        </div>

        {/* --- THE SLIDING TRACK --- */}
        <motion.div 
          className="flex h-full"
          style={{ width: `${projects.length * 100}vw`, x: smoothX }}
        >
          {projects.map((project, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div key={project.id} className="relative w-screen h-full flex items-center px-16 ml-8 md:px-32 lg:px-48 overflow-hidden">
                
                {/* Background Parallax Image */}
                <motion.div 
                  className="absolute right-0 top-0 bottom-0 w-[60%] -z-20 opacity-30 mix-blend-screen pointer-events-none"
                  style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.imageSrc} 
                    alt={`${project.title} Interface`}
                    className="w-full h-full object-cover object-left grayscale transition-all duration-700"
                    style={{ filter: isActive ? "grayscale(30%)" : "grayscale(100%)" }}
                  />
                </motion.div>

                {/* Background Typography Parallax */}
                <motion.div 
                  className="absolute left-16 md:left-32 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
                  style={{ x: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
                >
                  <span className="text-[40vw] font-sans font-black leading-none text-white/[0.02] tracking-tighter">
                    {project.id}
                  </span>
                </motion.div>

                {/* Foreground Content */}
                <div className="relative z-20 flex flex-col max-w-2xl">
                  
                  {/* Telemetry Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <span 
                      className="text-[10px] md:text-xs font-mono tracking-widest uppercase transition-colors duration-500"
                      style={{ color: project.themeColor }}
                    >
                      {project.sysId} <span className="text-white/40 ml-2">{project.year}</span> <span className="text-white/40 ml-2">| {project.freq}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full animate-pulse transition-all duration-500" 
                        style={{ backgroundColor: project.themeColor, boxShadow: `0 0 8px ${project.themeColor}` }} 
                      />
                      <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Signal Locked</span>
                    </div>
                  </div>

                  {/* Text Data */}
                  <h2 className="text-[clamp(40px,6vw,80px)] font-sans font-medium tracking-tight text-white leading-[1.1] mb-6">
                    {project.title}
                  </h2>
                  <h3 
                    className="text-base md:text-lg font-sans text-white/80 mb-6 border-l-2 pl-4 transition-colors duration-500"
                    style={{ borderLeftColor: `${project.themeColor}80` }} 
                  >
                    {project.subtitle}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono tracking-widest text-white/60 uppercase px-3 py-1 border border-white/10 rounded-full bg-white/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Unique Waveform */}
                  <div className="flex flex-col gap-6">
                    <TelemetryWave themeColor={project.themeColor} pathData={project.wavePath} />
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      {/* NEED TO EDIT THIS */}
                      {/* <Link 
                        href={`/work/${project.id.toLowerCase()}`}
                        className="group relative px-8 py-3 overflow-hidden rounded-sm transition-all duration-300 flex items-center justify-center border"
                        style={{ borderColor: project.themeColor }}
                      >
                        <div 
                          className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" 
                          style={{ backgroundColor: project.themeColor }}
                        />
                        <span className="relative z-10 text-xs font-mono tracking-widest uppercase transition-colors duration-300 group-hover:text-[#020202]" style={{ color: project.themeColor }}>
                          View Details
                        </span>
                      </Link> */}

                      <a 
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono tracking-widest text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="uppercase">Visit Source</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

