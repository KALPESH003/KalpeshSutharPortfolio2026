"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

// --- PREMIUM EASING ---
const easePremium = [0.76, 0, 0.24, 1] as const;

// --- MOCK LOCAL UI DESIGNS ---
export const uiDesignsItems = [
  { id: "01", title: "Land Rover Dashboard", category: "System UI", type: "ui", src: "assets/images/UiArchive/RRui.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "02", title: "Poster Design", category: "Asset", type: "Poster", src: "assets/images/UiArchive/Queen poster.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "03", title: "PocuhPal Expense Tracker", category: "USER Interface", type: "ui", src: "assets/images/UiArchive/pouchpal.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "04", title: "Taruna Interiors", category: "Web Design", type: "ui", src: "assets/images/UiArchive/tarunainteriors.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "05", title: "FOX STDUIO", category: "Web Design", type: "ui", src: "assets/images/UiArchive/foxstudio.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "06", title: "Tushar Iyer Co. Logo", category: "Corporate Logo", type: "logo", src: "assets/images/UiArchive/t3.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "07", title: "Customized Arch. Icon Pack", category: "Asset Set", type: "icons", src: "assets/images/UiArchive/Archlogopack.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "08", title: "Iconography", category: "Asset Set", type: "logo", src: "assets/images/UiArchive/t1.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "09", title: "Foldium Logo", category: "App Logo", type: "logo", src: "assets/images/UiArchive/foldium.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "10", title: "UniOcular Logo", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Uniocular.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "11", title: "Wallet Logo", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Wallet.png?auto=format&fit=crop&q=80&w=1600" }, 
];

// Layout configuration for the full gallery view (incorporates void & blue blocks)
const galleryItems = [
  { type: 'image', index: 0, data: uiDesignsItems[0] },
  { type: 'image', index: 1, data: uiDesignsItems[1] },
  { type: 'image', index: 2, data: uiDesignsItems[2] },
  { type: 'void', id: 'void-1' },
  { type: 'image', index: 3, data: uiDesignsItems[3] },
  { type: 'image', index: 4, data: uiDesignsItems[4] },
  { type: 'image', index: 5, data: uiDesignsItems[5] },
  { type: 'image', index: 6, data: uiDesignsItems[6] },
  { type: 'blue', id: 'blue-1', title: 'Data Viz', subtitle: 'Component' },
  { type: 'void', id: 'void-2' },
  { type: 'image', index: 7, data: uiDesignsItems[7] },
  // { type: 'void', id: 'void-3' },
  { type: 'image', index: 8, data: uiDesignsItems[8] },
  { type: 'image', index: 9, data: uiDesignsItems[9] },
  { type: 'image', index: 10, data: uiDesignsItems[10] },
  { type: 'image', index: 11, data: uiDesignsItems[11] },
   { type: 'blue', id: 'blue-2', title: 'Brand Identity', subtitle: 'Sys. Asset' },
   // { type: 'blue', id: 'blue-3', title: 'Visual Protocol', subtitle: 'Brd. Asset' },
];

// --- ARCHITECTURAL BACKGROUND COMPONENT ---
const ArchitecturalGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" /> 
    <div className="absolute top-0 bottom-0 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10" /> 
    <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" /> 
    
    {/* Top Header Line */}
    <div className="absolute left-0 right-0 top-[64px] md:top-[96px] h-[1px] border-t border-dashed border-white/10" /> 
    
    {/* Bottom Elevated Line matching exactly with the top of the hatch pattern (60px) */}
    <div className="absolute left-[32px] md:left-[84px] right-0 bottom-[64px] md:bottom-[60px] h-[1px] border-t border-dashed border-white/10" /> 
    <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" /> 

    {/* Bottom horizontal hatch pattern (Placed behind the left hatch via DOM order and offset by the 84px sidebar) */}
    <div
      className="absolute bottom-0 left-[32px] md:left-[84px] right-0 h-[60px] bg-[#020202] z-0"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`,
      }}
    />

    {/* Left vertical hatch pattern (Elevated to sit in front of the bottom hatch) */}
    <div
      className="absolute top-0 bottom-0 left-[24px] w-[60px] bg-[#020202] z-10 hidden md:block"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`,
      }}
    />

    <div className="absolute right-[64px] top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10 hidden md:block" />
    <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">
      <div className="absolute bottom-0 left-0 right-0 h-px border-t border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" />
    </div>
  </div>
);

export default function UiArchiveGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lock body scroll ONLY when full-screen lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  // Lightbox Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") setLightboxIndex(null);
    if (e.key === "ArrowLeft") {
      setLightboxIndex((prev) => (prev === 0 ? uiDesignsItems.length - 1 : prev! - 1));
    }
    if (e.key === "ArrowRight") {
      setLightboxIndex((prev) => (prev === uiDesignsItems.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="relative w-full bg-[#000000] font-['Inter',sans-serif] z-10 min-h-screen overflow-x-hidden">
      
      <ArchitecturalGrid />

      {/* ===================================================================== */}
      {/* MAIN GALLERY PAGE                                                     */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easePremium }}
        className="relative z-10 py-16 md:py-32 pl-[32px] md:pl-[120px] pr-[32px] md:pr-[96px] max-w-[2000px] mx-auto"
      >
        {/* Header & Back Button */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12 mb-20 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-white/50">
                System Index // 2026
              </span>
            </div>
            <h2 className="text-[clamp(40px,5vw,72px)] font-sans font-light tracking-tight text-white uppercase flex flex-col leading-[0.9]">
              <span>Archive</span>
              <span className="font-['Instrument_Serif'] italic lowercase text-[#0062ff] tracking-normal">Collection</span>
            </h2>
          </div>

          <a 
            href="/" 
            className="group flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-white hover:text-[#0062ff] transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#0062ff] group-hover:bg-[#0062ff]/10 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Return to Hub</span>
          </a>
        </div>

        {/* Mixed Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 p-[1px] mb-20">
          {galleryItems.map((item, idx) => {
            
            // 1. VOID SPACE RENDER
            if (item.type === 'void') {
              return (
                <div key={item.id || `void-${idx}`} className="bg-[#020202] aspect-square relative overflow-hidden flex flex-col justify-between p-8 col-span-1">
                  <div 
                    className="absolute inset-0 opacity-[0.15] pointer-events-none"
                    style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 12px)` }}
                  />
                  <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase relative z-10">[ Void Space ]</span>
                  <div className="w-6 h-6 border-l border-b border-white/20 relative z-10" />
                </div>
              );
            }

            // 2. BLUE FOCUS RENDER
            if (item.type === 'blue') {
              return (
                <div key={item.id || `blue-${idx}`} className="bg-[#0062ff] aspect-square relative overflow-hidden p-8 flex flex-col justify-between group col-span-1">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                  <div className="relative z-10 flex justify-between items-start text-black">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Focus Node</span>
                    <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-black text-3xl font-bold tracking-tighter leading-none mb-3" dangerouslySetInnerHTML={{ __html: item.title!.replace(' ', '<br/>') }} />
                    <p className="text-black/80 text-[10px] font-mono uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                </div>
              );
            }

            // 3. STANDARD IMAGE RENDER
            if (item.type === 'image' && item.data) {
              const design = item.data;
              return (
                <motion.div 
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: easePremium }}
                  onClick={() => setLightboxIndex(item.index!)}
                  className="bg-[#050505] relative aspect-square group overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img 
                      src={design.src} 
                      alt={design.title}
                      className={`w-full h-full opacity-60 grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out ${design.type === 'logo' ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>

                  {/* Hover Crosshairs Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-black/30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/50" />
                  </div>

                  {/* Info Overlay (No blue dots) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none bg-gradient-to-t from-[#020202] via-black/20 to-transparent">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-white/40 tracking-widest bg-black/60 px-2 py-1 rounded backdrop-blur-sm">{design.id}</span>
                    </div>
                    
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <h4 className="text-white text-lg font-medium tracking-tight mb-1">{design.title}</h4>
                      <span className="text-[#0062ff] text-[9px] font-mono uppercase tracking-[0.2em]">{design.category}</span>
                    </div>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* LIGHTBOX VIEW (Clickable, Slidable Full-Screen Image Viewer)          */}
      {/* ===================================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            // Shifted left padding (md:left-[84px]) to completely respect the global sidebar!
            className="fixed top-0 right-0 bottom-0 left-0 md:left-[84px] z-[999] bg-[#020202] flex flex-col items-center justify-center font-['Inter',sans-serif]"
          >
            {/* Render lightbox architectural lines to blend perfectly */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" /> 
              <div className="absolute left-0 right-0 top-[64px] md:top-[96px] h-[1px] border-t border-dashed border-white/10" /> 
            </div>

            {/* Top Bar matching cinematic screenshot layout */}
            <div className="absolute top-0 left-0 w-full h-[64px] md:h-[96px] px-6 md:px-10 flex items-center justify-between z-50">
              
              {/* Left Side: Index & Title */}
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-4">
                <span className="text-white/40">{lightboxIndex + 1} / {uiDesignsItems.length}</span>
                <span className="text-white/20">&mdash;</span>
                <span className="text-white/60">{uiDesignsItems[lightboxIndex].title}</span>
              </div>

              {/* Right Side: Exact Crosshair Alignment for Close Button */}
              {/* The right line is at right-64px, the top line is at top-96px. This perfectly centers it on the intersection. */}
              <button 
              type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="absolute right-4 md:right-25 top-20 md:top-44 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-[#0062ff] bg-[#020202] border border-white/10 hover:border-[#0062ff] rounded-full transition-all duration-300 backdrop-blur-md z-[100] group"
              >
                <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button type="button"
            aria-label="Previous image"
            onClick={() =>
              setLightboxIndex((prev) => {
                if (prev === null) return 0;
                return prev === 0 ? uiDesignsItems.length - 1 : prev - 1;
              })
            }
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white p-4 z-50 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button type="button"
            aria-label="Next image"
             onClick={() =>
              setLightboxIndex((prev) => {
                if (prev === null) return 0;
                return prev === uiDesignsItems.length - 1 ? 0 : prev + 1;
              })
            }
              className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 text-white/20 hover:text-white p-4 z-50 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image Slider */}
            <div className="w-full max-w-[80vw] md:max-w-[70vw] h-[65vh] flex items-center justify-center relative z-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: easePremium }}
                  src={uiDesignsItems[lightboxIndex].src}
                  alt={uiDesignsItems[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Bottom Caption (Matches layout in screenshot) */}
            <div className="absolute bottom-16 flex flex-col items-center gap-3 z-50">
               <span className="text-[#0062ff] text-[9px] font-mono uppercase tracking-[0.25em]">
                 {uiDesignsItems[lightboxIndex].category}
               </span>
               <h3 className="text-white text-xl md:text-3xl font-medium tracking-tight">
                 {uiDesignsItems[lightboxIndex].title}
               </h3>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
