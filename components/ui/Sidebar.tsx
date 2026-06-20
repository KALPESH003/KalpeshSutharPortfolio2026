"use client";

import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Home, Box, Layers, GraduationCap, Library, Mail, ArrowUp } from 'lucide-react';
// 1. Import Next.js routing hooks
import { usePathname, useRouter } from 'next/navigation';

export default function CinematicSidebar() {
  const { scrollYProgress } = useScroll();
  const [logoRotation, setLogoRotation] = useState(0);

  // 2. Initialize the routing hooks
  const pathname = usePathname();
  const router = useRouter();

  // 3. Route-Aware Smooth Scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    
    // If we are NOT on the homepage (e.g., we are on /legal)
    if (pathname !== '/') {
      // Push back to the homepage at the specific anchor
      router.push(`/#${targetId}`);
      return;
    }

    // If we ARE on the homepage, just scroll to top for 'home'
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Otherwise, smoothly scroll to the requested section
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Section with id="${targetId}" not found. Make sure your page sections have the correct IDs.`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLogoRotation((prev) => prev + 360);
    scrollToSection(e, 'home');
  };

  // Buttery-smooth physics spring for the scroll track
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    mass: 0.8,
    restDelta: 0.0001
  });

  const insetTop = useTransform(smoothProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(${insetTop}% 0px 0px 0px)`;
  const easePremium = [0.25, 0.1, 0.25, 1.0] as const;

  return (
    <>
      <style>{`
        .vertical-text {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          text-orientation: mixed;
        }

        .premium-glass-panel {
          background: linear-gradient(180deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.95) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            inset 1px 1px 0px rgba(255, 255, 255, 0.05),
            0 10px 40px rgba(0,0,0,0.5);
        }
      `}</style>

      {/* 1. ARCHITECTURAL DRAFTING CANVAS */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: easePremium }}
        className="fixed inset-0 pointer-events-none z-[-1] hidden sm:block"
      >
        <div 
          className="absolute top-0 bottom-0 left-6 w-[62px] bg-[#030303]/90"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, transparent, transparent 6px,
              rgba(255, 255, 255, 0.02) 6px, rgba(255, 255, 255, 0.02) 12px
            )`
          }}
        />
        {/* Lines */}
        <div className="absolute top-0 bottom-0 left-[24px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute top-0 bottom-0 left-[84px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute top-0 bottom-0 right-[64px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute left-0 right-0 top-[24px] h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" />
        
        {/* Registration Marks */}
        <div className="absolute top-[24px] left-[24px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-white/30 text-[10px] font-mono leading-none">+</div>
        <div className="absolute top-[24px] left-[84px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-white/30 text-[10px] font-mono leading-none">+</div>
      </motion.div>

      {/* 2. MOBILE NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] z-[60] flex md:hidden items-center justify-between px-6 premium-glass-panel rounded-none border-t-0 border-l-0 border-r-0 border-b-white/10 shadow-lg">
        <motion.a 
          href="/#home" 
          onClick={handleLogoClick}
          animate={{ rotate: logoRotation }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-shrink-0 relative cursor-pointer outline-none"
        >
          <img src="/assets/images/SidebarLogo.png" alt="Logo" className="w-[32px] h-[32px] object-contain" />
        </motion.a>

        <div className="flex items-center gap-4 sm:gap-6 text-white/40">
          <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors"><Home size={20} /></a>
          <a href="/#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors"><Box size={20} /></a>
          <a href="/#techstack" onClick={(e) => scrollToSection(e, 'techstack')} className="hover:text-white transition-colors"><Layers size={20} /></a>
          <a href="/#education" onClick={(e) => scrollToSection(e, 'education')} className="hover:text-white transition-colors"><GraduationCap size={20} /></a>
          <a href="/#library" onClick={(e) => scrollToSection(e, 'library')} className="hover:text-white transition-colors"><Library size={20} /></a>
          <a href="/#footer" onClick={(e) => scrollToSection(e, 'footer')} className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </nav>

      {/* 3. DESKTOP NAVIGATION */}
      <aside className="fixed left-[24px] top-[24px] bottom-[24px] w-[60px] z-[60] hidden md:flex flex-col gap-2 min-[900px]:gap-4 font-['Inter',sans-serif]">
        
        {/* TOP PANEL */}
        <div className="flex-1 rounded-[14px] relative flex flex-col items-center py-4 min-[900px]:py-6 premium-glass-panel overflow-hidden">
          <motion.a 
            href="/#home" 
            onClick={handleLogoClick}
            animate={{ rotate: logoRotation }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mb-4 min-[900px]:mb-8 cursor-pointer outline-none hover:scale-105 shrink-0"
          >
            <img src="/assets/images/SidebarLogo.png" alt="Logo" className="w-[28px] h-[28px] object-contain" />
          </motion.a>

          {/* Desktop Nav Icons */}
          <div className="flex flex-col gap-4 min-[900px]:gap-6 text-white/40 my-auto shrink-0">
            <a href="/#home" onClick={(e) => scrollToSection(e, 'home')} title="Home" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><Home size={18} /></a>
            <a href="/#projects" onClick={(e) => scrollToSection(e, 'projects')} title="Projects" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><Box size={18} /></a>
            <a href="/#techstack" onClick={(e) => scrollToSection(e, 'techstack')} title="Tech Stack" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><Layers size={18} /></a>
            <a href="/#education" onClick={(e) => scrollToSection(e, 'education')} title="Education" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><GraduationCap size={18} /></a>
            <a href="/#library" onClick={(e) => scrollToSection(e, 'library')} title="Personal Library" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><Library size={18} /></a>
            <a href="/#footer" onClick={(e) => scrollToSection(e, 'footer')} title="Contact / Footer" className="hover:text-white hover:scale-110 hover:translate-x-[2px] transition-all duration-300"><Mail size={18} /></a>
          </div>

          {/* Bottom Label */}
          <div className="mt-auto pt-4 min-[900px]:pt-6 flex flex-col items-center w-full shrink-0 [@media(max-height:850px)]:hidden">
            <div className="w-[18px] h-[1px] bg-white/10 mb-4 min-[900px]:mb-6" />
            <span className="vertical-text text-[10px] tracking-[0.25em] text-white/30 font-medium whitespace-nowrap">
              PORTFOLIO NAV
            </span>
          </div>
        </div>

        {/* BOTTOM PANEL: Scroll Indicator */}
        <div className="h-[220px] min-[900px]:h-[280px] shrink-0 rounded-[14px] relative flex flex-col items-center py-4 min-[900px]:py-6 premium-glass-panel overflow-hidden">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bottom-5 min-[900px]:bottom-7 w-[40px] rounded-[4px] bg-[#1a1a1a] border border-white/5 overflow-hidden" />
          <div className="absolute bottom-[64px] min-[900px]:bottom-20 w-[18px] h-[1px] bg-white/10 z-0" />

          {/* Scroll Track */}
          <div className="absolute top-4 min-[900px]:top-5 bottom-[64px] min-[900px]:bottom-[68px] left-1/2 -translate-x-1/2 w-[32px] flex justify-center z-0 overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center vertical-text text-[9px] min-[900px]:text-[10px] tracking-[0.2em] min-[900px]:tracking-[0.25em] text-white/30 font-medium whitespace-nowrap pointer-events-none">
                SCROLL INDICATOR
            </span>
            <motion.div className="absolute inset-0 bg-white flex justify-center items-center rounded-[4px]" style={{ clipPath }}>
              <span className="absolute inset-0 flex items-center justify-center vertical-text text-[9px] min-[900px]:text-[10px] tracking-[0.2em] min-[900px]:tracking-[0.25em] text-[#151515] font-bold whitespace-nowrap pointer-events-none">
                SCROLL INDICATOR
              </span>
            </motion.div>
          </div>

          <div className="flex-1" />
              {/* Elevate Up Button */}
              <button 
                onClick={(e) => scrollToSection(e as any, 'home')}
                className="w-9 h-9 2xl:w-10 2xl:h-10 bg-[#121212] rounded-lg border border-white/10 flex flex-shrink-0 items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative z-10 shadow-[0_8px_16px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05)] group cursor-pointer"
                aria-label="Elevate to top"
              >
                <ArrowUp size={16} className="text-white/50 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
              </button>
          </div>
      </aside>
    </>
  );
}


