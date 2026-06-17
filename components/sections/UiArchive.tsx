"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

// --- PREMIUM EASING ---
const easePremium = [0.76, 0, 0.24, 1] as const;

// --- MOCK LOCAL UI DESIGNS (Preview only needs the first 3) ---
const uiDesigns = [
  { id: "01", title: "Land Rover Dashboard", category: "System UI", type: "ui", src: "assets/images/UiArchive/RRui.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "02", title: "Wallet App Icon", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Wallet.png?auto=format&fit=crop&q=80&w=1600" }, 
  { id: "03", title: "PocuhPal Expense Tracker", category: "Interface", type: "ui", src: "assets/images/UiArchive/pouchpal.png?auto=format&fit=crop&q=80&w=1600" },
];

const totalArchiveItems = 8; // Pass the total count to show on the Explore button

// --- ARCHITECTURAL BACKGROUND COMPONENT ---
const ArchitecturalGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" /> 
    <div className="absolute top-0 bottom-16 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10" /> 
    <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" /> 
    <div className="absolute left-0 right-0 bottom-[64px] md:bottom-[60px] h-[1px] border-t border-dashed border-white/10" /> 
    <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" /> 

    {/* Seamless Architectural Hatch Pattern (Combines Left and Bottom bars to perfectly align the diagonal lines) */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundColor: "#020202",
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`,
        WebkitMaskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
        WebkitMaskSize: "60px 100%, 100% 60px",
        WebkitMaskPosition: "24px 0, 0 bottom",
        WebkitMaskRepeat: "no-repeat",
        maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
        maskSize: "60px 100%, 100% 60px",
        maskPosition: "24px 0, 0 bottom",
        maskRepeat: "no-repeat",
      }}
    />

    <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
    <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">
      <div className="absolute bottom-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" />
    </div>
   </div>
);

export default function UiArchivePreview() {
  return (
    <section id="ui-archive-section" className="relative w-full bg-[#000000] font-['Inter',sans-serif] z-10 overflow-hidden">
      
      <ArchitecturalGrid />

      {/* ===================================================================== */}
      {/* HOME PAGE PREVIEW (3 Images + 1 Explore Link)                         */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: easePremium }}
        className="relative z-10 py-24 pl-[32px] md:pl-[120px] pr-[32px] md:pr-[96px] max-w-[1800px] mx-auto"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-[1px] bg-[#313131]"></span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#313131]">
            Local Archive
          </span>
        </div>
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-[clamp(32px,4vw,56px)] font-sans font-light tracking-tight text-white uppercase flex flex-col leading-[1.05]">
            <span>Selected</span>
            <span className="font-['Instrument_Serif'] italic lowercase text-white/60 tracking-normal">Fragments</span>
          </h2>
          <p className="text-[13px] font-mono text-white/40 max-w-sm leading-relaxed">
            An architectural collection of interfaces, brand marks, and digital systems built for the modern web.
          </p>
        </div>

        {/* 4-Column Grid: 3 Images + 1 Explore Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 p-[1px]">
          
          {/* First 3 Images */}
          {uiDesigns.map((design) => (
            <div key={design.id} className="bg-[#050505] aspect-square relative group overflow-hidden">
              <img 
                src={design.src} 
                alt={design.title} 
                className={`absolute inset-0 w-full h-full opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 transition-all duration-700 ease-out ${design.type === 'logo' ? 'object-contain p-8' : 'object-cover'}`}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <h4 className="text-white text-sm font-medium tracking-tight mb-1">{design.title}</h4>
                <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest">{design.category}</span>
              </div>
            </div>
          ))}

          {/* 4. Explore Archive Link (Routes to the standalone Gallery Page) */}
          <a 
            href="/ui-archive" // IMPORTANT: Update this to match your actual route
            className="bg-[#020202] aspect-square relative group overflow-hidden flex flex-col items-center justify-center gap-8 cursor-pointer hover:bg-[#050505] transition-colors duration-500"
          >
            {/* Diagonal background stripes for cinematic feel */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.08]"
              style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)` }}
            />
            
            <div className="w-[72px] h-[72px] rounded-full border border-white/10 group-hover:border-[#E55B13]/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative z-10">
              <Maximize2 className="w-5 h-5 text-white/50 group-hover:text-[#E55B13] transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col items-center gap-3 relative z-10">
              <span className="text-[13px] font-mono tracking-[0.25em] uppercase text-white font-bold group-hover:text-[#E55B13] transition-colors duration-500">
                Explore Archive
              </span>
              <span className="text-[11px] text-white/40 font-sans">
                {totalArchiveItems} Items Indexed
              </span>
            </div>
          </a>

        </div>
      </motion.div>
    </section>
  );
}

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Maximize2 } from "lucide-react";

// // --- PREMIUM EASING ---
// const easePremium = [0.76, 0, 0.24, 1] as const;

// // --- MOCK LOCAL UI DESIGNS (Preview only needs the first 3) ---
// const uiDesigns = [
//   { id: "01", title: "Land Rover Dashboard", category: "System UI", type: "ui", src: "assets/images/UiArchive/RRui.png?auto=format&fit=crop&q=80&w=1600" },
//   { id: "02", title: "Wallet App Icon", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Wallet.png?auto=format&fit=crop&q=80&w=1600" }, 
//   { id: "03", title: "PocuhPal Expense Tracker", category: "Interface", type: "ui", src: "assets/images/UiArchive/pouchpal.png?auto=format&fit=crop&q=80&w=1600" },
// ];

// const totalArchiveItems = 8; // Pass the total count to show on the Explore button

// // --- ARCHITECTURAL BACKGROUND COMPONENT ---
// const ArchitecturalGrid = () => (
//   <div className="absolute inset-0 pointer-events-none z-0">
//     <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" /> 
//     <div className="absolute top-0 bottom-0 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10 z-10" /> 
//     <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" /> 
//     <div className="absolute left-20 right-0 bottom-[64px] md:bottom-[60px] h-[1px] border-t border-dashed border-white/10" /> 
//     <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" /> 

//   {/* Bottom horizontal hatch pattern (Placed behind the left hatch via DOM order and z-index) */}
//     <div
//       className="absolute bottom-0 left-20 right-0 h-[60px] bg-[#020202] z-0"
//       style={{
//         backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`,
//       }}
//     />

//     {/* Left vertical hatch pattern (Elevated to sit in front of the bottom hatch) */}
//     <div
//       className="absolute top-0 bottom-0 left-[24px] w-[60px] bg-[#020202] z-10"
//       style={{
//         backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`,
//       }}
//     />

//     <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
//     <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">
//       <div className="absolute bottom-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
//       <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" />
//       <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" />
//     </div>
//    </div>
// );

// export default function UiArchivePreview() {
//   return (
//     <section id="ui-archive-section" className="relative w-full bg-[#000000] font-['Inter',sans-serif] z-10 overflow-hidden">
      
//       <ArchitecturalGrid />

//       {/* ===================================================================== */}
//       {/* HOME PAGE PREVIEW (3 Images + 1 Explore Link)                         */}
//       {/* ===================================================================== */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6, ease: easePremium }}
//         className="relative z-10 py-24 pl-[32px] md:pl-[120px] pr-[32px] md:pr-[96px] max-w-[1800px] mx-auto"
//       >
//         {/* Section Header */}
//         <div className="flex items-center gap-4 mb-12">
//           <span className="w-10 h-[1px] bg-[#313131]"></span>
//           <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#313131]">
//             Local Archive
//           </span>
//         </div>
        
//         <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <h2 className="text-[clamp(32px,4vw,56px)] font-sans font-light tracking-tight text-white uppercase flex flex-col leading-[1.05]">
//             <span>Selected</span>
//             <span className="font-['Instrument_Serif'] italic lowercase text-white/60 tracking-normal">Fragments</span>
//           </h2>
//           <p className="text-[13px] font-mono text-white/40 max-w-sm leading-relaxed">
//             An architectural collection of interfaces, brand marks, and digital systems built for the modern web.
//           </p>
//         </div>

//         {/* 4-Column Grid: 3 Images + 1 Explore Link */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 p-[1px]">
          
//           {/* First 3 Images */}
//           {uiDesigns.map((design) => (
//             <div key={design.id} className="bg-[#050505] aspect-square relative group overflow-hidden">
//               <img 
//                 src={design.src} 
//                 alt={design.title} 
//                 className={`absolute inset-0 w-full h-full opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 transition-all duration-700 ease-out ${design.type === 'logo' ? 'object-contain p-8' : 'object-cover'}`}
//               />
//               <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
//                 <h4 className="text-white text-sm font-medium tracking-tight mb-1">{design.title}</h4>
//                 <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest">{design.category}</span>
//               </div>
//             </div>
//           ))}

//           {/* 4. Explore Archive Link (Routes to the standalone Gallery Page) */}
//           <a 
//             href="/ui-archive" // IMPORTANT: Update this to match your actual route
//             className="bg-[#020202] aspect-square relative group overflow-hidden flex flex-col items-center justify-center gap-8 cursor-pointer hover:bg-[#050505] transition-colors duration-500"
//           >
//             {/* Diagonal background stripes for cinematic feel */}
//             <div 
//               className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.08]"
//               style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)` }}
//             />
            
//             <div className="w-[72px] h-[72px] rounded-full border border-white/10 group-hover:border-[#E55B13]/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative z-10">
//               <Maximize2 className="w-5 h-5 text-white/50 group-hover:text-[#E55B13] transition-colors duration-500" />
//             </div>
            
//             <div className="flex flex-col items-center gap-3 relative z-10">
//               <span className="text-[13px] font-mono tracking-[0.25em] uppercase text-white font-bold group-hover:text-[#E55B13] transition-colors duration-500">
//                 Explore Archive
//               </span>
//               <span className="text-[11px] text-white/40 font-sans">
//                 {totalArchiveItems} Items Indexed
//               </span>
//             </div>
//           </a>

//         </div>
//       </motion.div>
//     </section>
//   );
// }