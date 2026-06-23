import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
// loading dots...
  const [dots, setDots] = useState(".");

  // Animated loading dots
useEffect(() => {
  const frames = [" ", ".", "..", "...", " "];
  let index = 0;

  const interval = setInterval(() => {
    setDots(frames[index]);
    index = (index + 1) % frames.length;
  }, 500);

  return () => clearInterval(interval);
}, []);

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
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
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

        /* Continuous Levitation for Glass Cards */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float 7s ease-in-out 2s infinite; }

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

       /* Cinematic Entrance Animations */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <div className="relative min-h-[100dvh] bg-[#000000] text-white font-['Inter',sans-serif] overflow-x-hidden">
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
          <div className="absolute top-0 bottom-0 left-[0px] md:left-[84px] lg:left-[100px] right-0 z-[2] hidden lg:block pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
              <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5" />
            </div>
          </div>

          {/* Global Navigation - Minimal Header */}
          <header className="absolute top-0 left-[-3vw] w-full z-50 px-6 md:px-12 lg:px-24 py-8 flex justify-between items-center pr-6 md:pr-12">
              <h1 className="text-sm font-mono tracking-tighter relative z-10 flex items-center gap-2 text-white/80">
                <Terminal size={14} className="text-[#0077ff]" />
                Kalpesh K. Suthar
                <span className="text-[#0185f1] ml-1">
                  {dots}
                </span>
              </h1>
          </header>
              
              {/* The Liquid Glass Card
              <div className="hidden xl:block absolute left-[-3vw] top-3/6 -translate-y-1/4 z-20 animate-float">
                  <div className="liquid-glass w-[200px] h-[220px] p-7 -translate-y-[50px] flex flex-col justify-between mb-2 hover:scale-105 hover:-translate-y-[55px] transition-transform duration-500 cursor-default">
                    <div className="text-[12px] text-white/50 tracking-widest font-mono font-medium  flex items-center gap-2">
                      [ EST. 2025 ]
                    </div>
                    <div>
                      <h3 className="text-[18px] leading-[1.2] font-medium mb-3">
                        Creative <span className="font-['Instrument_Serif'] italic  text-[22px] font-normal tracking-wide text-[#b1b1b1]">Technology</span> Studio
                      </h3>
                      <p className="text-[11px] text-white/40 font-mono leading-relaxed uppercase tracking-wider border-t border-white/10 pt-3 mt-3">
                        Built with Code. Designed with Vision.
                      </p>
                    </div>
                  </div>
              </div> */}

               {/* Under Construction: REMOVE AFTER FULLY UPDATED THINGSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
             <div className="hidden xl:block absolute left-[2%] 2xl:left-[4%] top-[15%] z-20 animate-float pointer-events-auto">
                  <div className="liquid-glass relative w-[220px] h-[240px] p-6 flex flex-col justify-between overflow-hidden group hover:scale-105 hover:bg-white/5 transition-all duration-500 cursor-default">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent via-[#ff6b00]/15 to-transparent" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.35em] text-[#ff0000] font-mono bg-[#ff3333]/10 px-2 py-1 rounded-sm">
                          SYS_UPDATE
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[22px] font-bold leading-[1.05] tracking-tight">
                          New Work <br /> Being Curated
                        </h3>
                        <p className="mt-4 text-[11px] leading-relaxed text-white/45 font-mono">
                          Experiences, systems and digital artifacts are currently entering the archive.
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                          Archive Expanding
                        </span>
                        <div className="w-3 h-3 rounded-full bg-[#ff0000] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              {/* -------------------------------------------------------------------------------------------------------------------------------- */}     


          {/* Main Hero Content */}
          <main className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 md:px-12 lg:px-20 pt-20">     

           <div className="max-w-6xl text-center flex flex-col items-center">

              {/* Hero Content & Typography */}
              <span className="animate-reveal font-['Plus_Jakarta_Sans'] font-bold text-[11px] md:text-[13px] text-[#0077ff] tracking-[0.3em] uppercase mb-6 block drop-shadow-md border border-[#0077ff]/30 px-4 py-1.5 rounded-full bg-[#0077ff]/5 backdrop-blur-sm">
                 Creative Technologist
              </span>
              
              <h2 className="font-extrabold text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] 2xl:text-[130px] uppercase tracking-[-0.06em] leading-[0.92] mb-10 drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60  ">
                Crafting Digital <br/> Experiences<span className="text-[#0077ff] text-[80px]">.</span>
              </h2>
     
              <p className="text-[14px] md:text-[15px] text-white/70 max-w-[512px] leading-relaxed mb-12 font-mono text-center">
                Master in-demand coding skills with our immersive curriculum. Build real-world projects, connect with mentors, and step confidently into your future in tech.
              </p>
            <div className="animate-reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/ui-archive"
                className="btn-glow group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-gray-100 transition-colors pointer-events-auto"
              >
                <span className="w-4 h-4 invisible block" />
                View Archive
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            </div>
          </main>
          
           {/* Central "Scroll to Explore" Indicator */}
          <div className="absolute bottom-[40px] left-[0px] md:left-[84px] lg:left-[100px] right-0 z-20 pointer-events-none">
            <div className="relative w-full flex flex-col items-center gap-4 animate-reveal delay-400">
              <span className="text-[9px] font-['Space_Mono'] uppercase tracking-[0.3em] text-white/40">
                Scroll to Explore
              </span>
              <div className="w-[2px] h-[50px] bg-white/10 relative overflow-hidden">
                <div className="w-full h-1/3 bg-white/60 absolute top-0 left-0 scroll-indicator-line" />
              </div>
            </div>
          </div>

        </div>
        
        {/* Extra height added to body just to demonstrate the active scroll tracking */}
      </div>
    </>
  );
}

