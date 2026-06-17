import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Tracking for the Sidebar Indicator (Optional here, but kept for consistency)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // If no scrollable area, default to a visually pleasing 30% fill
      if (windowHeight === 0) {
        setScrollProgress(0.3);
        return;
      }
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@700&family=Space+Mono:wght@400;500&display=swap');

         /* Existing Liquid Glass */
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          border-radius: 20px;
        }
        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Cinematic Sidebar Panels */
        .sidebar-panel {
          background: linear-gradient(180deg, rgba(30,30,30,0.85) 0%, rgba(15,15,15,0.95) 100%);
          box-shadow: 
            inset 1px 1px 0px rgba(255, 255, 255, 0.08), 
            inset -1px -1px 0px rgba(0, 0, 0, 0.5),
            0 10px 40px rgba(0,0,0,0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        /* Cinematic Scanning Motion Effect */
        @keyframes cyber-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .scanner-light {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(255, 107, 0, 0.15), transparent);
          animation: cyber-scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }

        /* Vertical Text Styling */
        .vertical-text {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          text-orientation: mixed;
        }

        /* Icon Hover Cinematic Glow */
        .nav-icon {
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          position: relative;
          z-index: 10;
        }
        .nav-icon:hover {
          color: #fff;
          transform: translateX(2px) scale(1.1);
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));
        }

        /* Central Scroll Motion */
        @keyframes scrollMotion {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }

        .scroll-indicator-line {
          animation: scrollMotion 2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }

        /* Cinematic Entrance Animations for the indicator */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <div className="relative min-h-[100vh] bg-[#000000] text-white font-['Inter',sans-serif] overflow-x-hidden">
        {/* ==================================================== */}
        {/* MAIN HERO SECTION (Shifted Right for Sidebar)        */}
        {/* ==================================================== */}

        {/* GLOBAL ARCHITECTURAL FRAME */}
          <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">

            {/* OUTER FRAME */}
            <div className="absolute top-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
            <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" />
            <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" />
          </div>

     {/* ==================================================== */}
        {/* 2. ARCHITECTURAL DRAFTING LINES (Matches site theme) */}
        {/* ==================================================== */}
        <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">
          {/* Global Margin Lines */}
          {/* <div className="absolute top-0 bottom-0 left-[24px] w-[1px] border-l border-dashed border-white/10" /> */}
          <div className="absolute top-0 bottom-0 right-[64px] w-[1px] border-l border-dashed border-white/10" />
          <div className="absolute left-0 right-0 top-[24px] h-[1px] border-t border-dashed border-white/10" />
          <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" />

          {/* Registration Marks (+) */}
          {/* <div className="absolute top-[24px] left-[24px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-white/30 text-[10px] font-mono leading-none">+</div>
          <div className="absolute bottom-[24px] left-[24px] w-4 h-4 -ml-2 -mb-2 flex items-center justify-center text-white/30 text-[10px] font-mono leading-none">+</div> */}
        </div>

        {/* We use pl-0 md:pl-[84px] lg:pl-[100px] to cut out space for the sidebar */}
        <div className="relative min-h-screen md:pl-[84px] lg:pl-[100px] transition-all duration-500">
          
          {/* Background & Layout */}
          <div className="absolute inset-0 z-0">
            {/* Standard HTML5 Video implementation for local MP4 */}
            <video
              className="w-full h-full object-cover opacity-100"
              src="/assets/videos/Video by Nicola Narracci from Pexels httpswww.pexels.comvideoabstract-glowing-shapes-in-motion-38004707.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            
              {/* 1. Cinematic Noise / Film Grain Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.9] mix-blend-overlay">
              <svg className="w-full h-full">
                <filter id="cinematicNoise">
                  <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.65" 
                    numOctaves="3" 
                    stitchTiles="stitch" 
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#cinematicNoise)" />
              </svg>
            </div>

       

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#070b0a]/80 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-[1]" />
          </div>

          {/* Grid System (Visible on Desktop) */}
          <div className="absolute inset-0 z-[2] hidden lg:block pointer-events-none md:pl-[100px]">
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5" />
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5" />
          </div>

          {/* Global Navigation - Minimal Header */}
          <header className="absolute top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-8 flex justify-between items-center pr-6 md:pr-12">
            <div className="text-sm font-mono tracking-tighter relative z-10">
              Kalpesh K. Suthar<span className="text-[#F16001]">.</span>
            </div>
          </header>

          {/* Main Hero Content */}
          <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20 pt-20">
            <div className="max-w-4xl">
              
              {/* The Liquid Glass Card */}
              <div className="liquid-glass w-[200px] h-[200px] p-6 -translate-y-[50px] flex flex-col justify-between mb-2 hover:-translate-y-[55px] transition-transform duration-500">
                <div className="text-[14px] text-white/50 tracking-widest font-mono font-medium">
                  [ EST. 2025 ]
                </div>
                <div>
                  <h3 className="text-[18px] leading-[1.2] font-medium mb-3">
                    Creative <span className="font-['Instrument_Serif'] italic text-[22px] font-normal tracking-wide text-[#ff6b00]">Technology</span> Studio
                  </h3>
                  <p className="text-[11px] text-white/40 font-mono leading-relaxed uppercase tracking-wider">
                    Built with Code. Designed with Vision.
                  </p>
                </div>
              </div>

              {/* Hero Content & Typography */}
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] text-[#ff6b00] tracking-[0.2em] uppercase mb-6 block drop-shadow-md">
                Creative Technologist
              </span>
              
              <h1 className="font-extrabold text-[40px] md:text-[56px] lg:text-[72px] uppercase tracking-tighter leading-[1.05] mb-8 drop-shadow-lg">
                BUILDING THE WEB  <br /> BEYOND EXPECTATIONS<span className="text-[#ff6b00]">.</span>
              </h1>
              
              <p className="text-[14px] text-white/70 max-w-[512px] leading-relaxed mb-12 font-mono">
                Master in-demand coding skills with our immersive curriculum. Build real-world projects, connect with mentors, and step confidently into your future in tech.
              </p>
              
            </div>
          </main>
          
           {/* Central "Scroll to Explore" Indicator */}
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-reveal delay-400 z-20">
            <span className="text-[9px] font-['Space_Mono'] uppercase tracking-[0.3em] text-white/40">
              Scroll to Explore
            </span>
            <div className="w-[1px] h-[50px] bg-white/10 relative overflow-hidden">
              <div className="w-full h-1/3 bg-white/60 absolute top-0 left-0 scroll-indicator-line" />
            </div>
          </div>
        </div>
        
        {/* Extra height added to body just to demonstrate the active scroll tracking */}
      </div>
    </>
  );
}