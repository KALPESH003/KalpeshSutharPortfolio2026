import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { SVGProps } from 'react';


{/* ---------------------------------DRIBBBLE & BEHANCE SVGs------------------------------------------ */}
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle fill="#3A67FA" cx="256" cy="256" r="256" />
    <path fill="#2451D1" d="M497.228,341.857L381.093,225.723l-88.316,13.576l-68.389-61.264l-93.658,13.033l-19.725,151.09 l159.634,169.419C375.51,505.661,463.494,436.629,497.228,341.857z" />
    <path fill="#FFFFFF" d="M233.496,241.567c5.072-7.897,7.97-17.315,7.801-27.415c-0.446-27.026-22.938-48.5-49.967-48.5 h-75.462c-3.534,0-6.399,2.865-6.399,6.399v165.952c0,3.534,2.865,6.399,6.399,6.399h84.296c31.285,0,57.203-25.078,57.327-56.363 C257.572,268.866,248.06,251.868,233.496,241.567L233.496,241.567z M142.574,198.758h49.402c8.945,0,16.225,7.278,16.225,16.225 c0,8.945-7.28,16.224-16.225,16.224h-49.402V198.758z M200.897,311.296h-58.323v-46.983h58.323 c12.953,0,23.492,10.542,23.492,23.492C224.387,300.758,213.851,311.296,200.897,311.296L200.897,311.296z" />
    <g>
      <path fill="#D1D1D1" d="M402.532,276.27c0-38.64-30.455-70.079-67.891-70.079c-37.438,0-67.893,31.439-67.893,70.079 c0,38.643,30.458,70.078,67.893,70.078c22.714,0,43.822-11.643,56.463-31.148c1.574-2.434,3.007-4.975,4.277-7.594 c0.921-1.901-0.478-4.115-2.591-4.117l-33.373-0.084c-0.736,0-1.439,0.3-1.967,0.815c-6.303,6.127-14.027,9.025-22.807,9.025 c-16.587,0-30.489-12.405-33.951-28.941h95.199c3.668,0,6.642-2.975,6.642-6.646v-1.389H402.532z M334.641,239.297 c12.145,0,22.852,6.659,29.075,16.715h-58.154C311.787,245.957,322.493,239.297,334.641,239.297L334.641,239.297z" />
      <path fill="#D1D1D1" d="M362.853,197.968h-60.218c-2.808,0-5.087-2.279-5.087-5.087v-15.105 c0-2.808,2.279-5.087,5.087-5.087h60.218c2.808,0,5.084,2.279,5.084,5.087v15.105C367.938,195.693,365.661,197.968,362.853,197.968 L362.853,197.968z" />
    </g>
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle fill="#DC4373" cx="256" cy="256" r="256" />
    <path fill="#C13366" d="M358.334,151.376c-6.666,2.577-14.305,1.838-17.863-0.534 c-43.098-24.135-89.643-31.03-132.741-18.963c-61.693,18.227-86.893,86.635-86.73,150.494 c11.311,21.068,26.279,52.617,30.927,76.552l149.12,149.123C406.313,489.36,489.339,406.344,508.04,301.084L358.334,151.376z" />
    <path fill="#F0F1F1" d="M255.997,109.654c-80.796,0-146.529,65.655-146.529,146.348s65.733,146.342,146.529,146.342 c80.799,0,146.535-65.646,146.535-146.342C402.532,175.309,336.796,109.654,255.997,109.654L255.997,109.654z M352.418,178.728 c16.715,20.716,26.872,46.878,27.341,75.386c-5.561-1.141-29.115-5.534-57.263-5.534c-9.082,0-18.641,0.455-28.224,1.639 c-0.809-1.967-1.619-3.927-2.469-5.906c-2.486-5.846-5.163-11.645-7.937-17.36C327.187,209.105,348.084,184.334,352.418,178.728 L352.418,178.728z M255.997,132.563c31.223,0,59.764,11.6,81.563,30.706c-3.451,4.708-22.166,28.101-63.938,43.884 c-19.335-35.344-40.498-64.61-45.535-71.406C237.063,133.668,246.405,132.563,255.997,132.563L255.997,132.563z M202.821,144.558 c4.268,5.879,25.464,35.459,45.296,70.518c-53.224,13.991-100.488,14.903-111.895,14.903h-1.212 C143.205,192.212,168.722,160.83,202.821,144.558L202.821,144.558z M132.201,256.195c0-1.019,0.017-2.038,0.05-3.051 c0.74,0.009,1.833,0.009,3.25,0.009c15.363,0,68.691-1.269,123.644-17.577c3.336,6.523,6.511,13.145,9.464,19.763 c-1.388,0.398-2.757,0.796-4.117,1.241c-61.874,19.983-95.884,72.888-101.117,81.536 C143.986,316.268,132.201,287.587,132.201,256.195L132.201,256.195z M255.997,379.818c-28.393,0-54.596-9.616-75.505-25.74 c3.537-6.934,29.206-53.15,97.013-76.75c0.041-0.017,0.086-0.033,0.136-0.045c17.003,44.265,24.204,81.417,26.179,92.931 C289.104,376.401,272.944,379.818,255.997,379.818L255.997,379.818z M326.115,358.026c-1.66-9.526-8.33-44.344-23.726-86.809 c8.635-1.343,17.036-1.874,24.914-1.874c25.874,0,46.115,5.665,50.817,7.102C372.529,310.167,353.223,339.349,326.115,358.026 L326.115,358.026z" />
    <path fill="#D1D1D1" d="M255.997,109.654c-0.191,0-0.379,0.014-0.571,0.014v22.902c0.19,0,0.379-0.009,0.571-0.009 c31.223,0,59.764,11.6,81.563,30.706c-3.451,4.708-22.166,28.101-63.938,43.884c-6.07-11.097-12.321-21.594-18.196-30.984v60.478 c1.238-0.353,2.477-0.705,3.717-1.072c3.336,6.523,6.511,13.145,9.464,19.763c-1.388,0.398-2.757,0.796-4.117,1.239 c-3.098,1.002-6.106,2.105-9.064,3.26v26.614c6.811-3.281,14.145-6.359,22.078-9.121c0.041-0.017,0.086-0.033,0.136-0.045 c17.003,44.265,24.204,81.417,26.179,92.931c-14.714,6.187-30.873,9.604-47.823,9.604c-0.191,0-0.379-0.012-0.571-0.012v22.525 c0.191,0,0.379,0.014,0.571,0.014c80.799,0,146.535-65.646,146.535-146.342C402.532,175.309,336.796,109.654,255.997,109.654z M291.804,244.312c-2.486-5.846-5.163-11.645-7.937-17.36c43.32-17.848,64.217-42.618,68.551-48.225 c16.715,20.716,26.874,46.878,27.341,75.385c-5.561-1.141-29.115-5.534-57.261-5.534c-9.082,0-18.641,0.457-28.224,1.639 C293.462,248.251,292.654,246.291,291.804,244.312z M326.115,358.026c-1.66-9.526-8.33-44.344-23.726-86.809 c8.635-1.343,17.036-1.874,24.914-1.874c25.874,0,46.115,5.665,50.817,7.102C372.529,310.167,353.223,339.349,326.115,358.026z" />
  </svg>
);

{/* ---------------------------------END DRIBBBLE & BEHANCE SVGs------------------------------------------ */}



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

                   {/* Floating Liquid Glass Card: Behance & Dribbble (Bottom Left) */}

                            <div className="hidden xl:block absolute left-[2%] 2xl:left-[4%] bottom-[8%] 2xl:bottom-[14%] z-20 pointer-events-auto">
                              <div className="liquid-glass w-[200px] p-3 flex flex-col gap-2 transition-transform duration-500 ease-out hover:scale-105">
                                
                                <a  href="https://www.behance.net/kalpeshsuthar003"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View Behance profile"
                                  className="group flex items-center justify-between gap-2 rounded-full border border-white/10 pl-2 pr-3 py-2 transition-all duration-300 ease-out hover:bg-white hover:border-white hover:scale-[1.03] active:scale-95"
                                >
                                  <span className="flex items-center gap-3">
                                    <BehanceIcon className="w-7 h-7 shrink-0" />
                                    <span className="text-[13px] font-mono tracking-wide text-white transition-colors duration-300 ease-out group-hover:text-black">
                                      Behance
                                    </span>
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="shrink-0 text-white/40 transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-0.5"
                                  />
                                </a>

                                
                                <a  href="https://dribbble.com/kalpesh-suthar003"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View Dribbble profile"
                                  className="group flex items-center justify-between gap-2 rounded-full border border-white/10 pl-2 pr-3 py-2 transition-all duration-300 ease-out hover:bg-white hover:border-white hover:scale-[1.03] active:scale-95"
                                >
                                  <span className="flex items-center gap-3">
                                    <DribbbleIcon className="w-7 h-7 shrink-0" />
                                    <span className="text-[13px] font-mono tracking-wide text-white transition-colors duration-300 ease-out group-hover:text-black">
                                      Dribbble
                                    </span>
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="shrink-0 text-white/40 transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-0.5"
                                  />
                                </a>
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