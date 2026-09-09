"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

// --- PREMIUM EASING ---
const easePremium = [0.76, 0, 0.24, 1] as const;

// --- MOCK LOCAL UI DESIGNS ---
export const uiDesignsItems = [
  { id: "01", title: "Land Rover Dashboard", category: "System UI", type: "UI", src: "assets/images/UiArchive/RRui.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "02", title: "PocuhPal Expense Tracker", category: "USER Interface", type: "UI", src: "assets/images/UiArchive/pouchpal.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "03", title: "Beerlo- Non Alcoholic Business", category: "Web App Design", type: "UI", src: "assets/images/UiArchive/Beerlo.jpg?auto=format&fit=crop&q=80&w=1600" },
  { id: "04", title: "EcoDrive-Case Study", category: "UI/UX Case Study", type: "Case Study", src: "assets/images/UiArchive/EcoDrive.jpg?auto=format&fit=crop&q=80&w=1600" },
  { id: "05", title: "LumiNote- Dashboard", category: "Saas Product UI", type: "UI", src: "assets/images/UiArchive/Booktracker/main_page.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "06", title: "Taruna Interiors", category: "Web Design", type: "UI", src: "assets/images/UiArchive/tarunainteriors.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "07", title: "LumiNote- Notes Section", category: "Saas Product UI", type: "UI", src: "assets/images/UiArchive/Booktracker/Notes.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "08", title: "Luminote- Library", category: "Saas Product UI", type: "UI", src: "assets/images/UiArchive/Booktracker/Library.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "09", title: "Sthapaty79 Studio", category: "Web Design", type: "logo", src: "assets/images/UiArchive/Premium Navbar Stack.png?auto=format&fit=crop&q=80&w=1600" }, 
  { id: "10", title: "Sthapaty79 Studio", category: "Web Design", type: "logo", src: "assets/images/UiArchive/Luxury Hero Section.png?auto=format&fit=crop&q=80&w=1600" }, 
  { id: "11", title: "Sthapaty79 Studio", category: "Web Design", type: "logo", src: "assets/images/UiArchive/Premium Navbar Stack2.png?auto=format&fit=crop&q=80&w=1600" }, 
  { id: "12", title: "Poster Design", category: "Asset", type: "Poster", src: "assets/images/UiArchive/Queen poster.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "13", title: "FOX STDUIO", category: "Web Design", type: "UI", src: "assets/images/UiArchive/foxstudio.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "14", title: "Craftmanship Section", category: "Web Design", type: "logo", src: "assets/images/UiArchive/Cr Section.png?auto=format&fit=crop&q=80&w=1600" }, 
  { id: "15", title: "Tushar Iyer Co. Logo", category: "Corporate Logo", type: "logo", src: "assets/images/UiArchive/t3.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "16", title: "Customized Arch. Icon Pack", category: "Asset Set", type: "icons", src: "assets/images/UiArchive/Archlogopack.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "17", title: "Iconography", category: "Asset Set", type: "logo", src: "assets/images/UiArchive/t1.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "18", title: "Foldium Logo", category: "App Logo", type: "logo", src: "assets/images/UiArchive/foldium.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "19", title: "UniOcular Logo", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Uniocular.png?auto=format&fit=crop&q=80&w=1600" },
  { id: "20", title: "Wallet Logo", category: "Brand Logo", type: "logo", src: "assets/images/UiArchive/Wallet.png?auto=format&fit=crop&q=80&w=1600" }, 
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
   { type: 'image', index: 12, data: uiDesignsItems[12] },
   { type: 'void', id: 'void-3' },
   { type: 'image', index: 13, data: uiDesignsItems[13] },
   { type: 'image', index: 14, data: uiDesignsItems[14] },
   { type: 'image', index: 15, data: uiDesignsItems[15] },
   { type: 'image', index: 16, data: uiDesignsItems[16] },
   { type: 'image', index: 17, data: uiDesignsItems[17] },
   { type: 'void', id: 'void-4' },
   { type: 'image', index: 18, data: uiDesignsItems[18] },
   { type: 'image', index: 19, data: uiDesignsItems[19] },
   { type: 'image', index: 20, data: uiDesignsItems[20] },
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
  
      // --- ZOOM / PAN (lightbox) ---
  const NORMAL_SCALE = 1;
  const MID_SCALE = 2;            // first click: 200%
  const MIN_SCALE = 1;            // can't shrink past the normal fitted size
  const MAX_SCALE = 40;           // effectively unlimited — raise if you ever need more
  const FALLBACK_FULL_SCALE = 4;  // used only until the image finishes loading

  const [scale, setScale] = useState(NORMAL_SCALE);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [fullScale, setFullScale] = useState(FALLBACK_FULL_SCALE);

  const imageRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Refs mirror the state above so drag/wheel/pinch math reads the latest value
  // synchronously, even between fast successive events.
  const scaleRef = useRef(NORMAL_SCALE);
  const panRef = useRef({ x: 0, y: 0 });
  const stageRef = useRef(0); // 0 = fresh/normal, 1 = 200%, 2 = full, 3 = back to normal (next click closes)
  const dragRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0, moved: false, active: false });
  const pinchRef = useRef({ active: false, lastDist: 0 });

  // Keeps the zoomed image from ever panning past its own edge
  const clampPan = useCallback((offset: { x: number; y: number }, s: number) => {
    const el = imageRef.current;
    if (!el) return offset;
    const overflowX = Math.max(0, (el.offsetWidth * s - el.offsetWidth) / 2);
    const overflowY = Math.max(0, (el.offsetHeight * s - el.offsetHeight) / 2);
    return {
      x: Math.min(overflowX, Math.max(-overflowX, offset.x)),
      y: Math.min(overflowY, Math.max(-overflowY, offset.y)),
    };
  }, []);

  // Keeps whatever point is under the cursor / pinch-midpoint visually fixed as the scale changes
  const zoomAround = useCallback(
    (clientX: number, clientY: number, oldScale: number, newScale: number) => {
      const el = sliderRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const ratio = newScale / oldScale;
      const next = clampPan(
        { x: dx - (dx - panRef.current.x) * ratio, y: dy - (dy - panRef.current.y) * ratio },
        newScale
      );
      panRef.current = next;
      setPanOffset(next);
    },
    [clampPan]
  );

  // "Full-image zoom" = the image's true native pixel size (1:1), computed from its
  // actual contained (letterboxed) render size, not the outer box — this keeps it
  // crystal clear instead of guessing a fixed multiplier.
  const recomputeFullScale = useCallback(() => {
    const el = imageRef.current;
    if (!el || !el.naturalWidth || !el.naturalHeight || !el.clientWidth || !el.clientHeight) return;
    const ratio = Math.max(el.naturalWidth / el.clientWidth, el.naturalHeight / el.clientHeight);
    setFullScale(ratio > 1 ? ratio : FALLBACK_FULL_SCALE);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", recomputeFullScale);
    return () => window.removeEventListener("resize", recomputeFullScale);
  }, [recomputeFullScale]);

  // Reset zoom whenever a different image is opened
  useEffect(() => {
    scaleRef.current = NORMAL_SCALE;
    panRef.current = { x: 0, y: 0 };
    stageRef.current = 0;
    setScale(NORMAL_SCALE);
    setPanOffset({ x: 0, y: 0 });
  }, [lightboxIndex]);

  const applyScale = useCallback(
    (target: number, anchor?: { x: number; y: number }) => {
      const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, target));
      if (clamped <= NORMAL_SCALE + 0.001) {
        panRef.current = { x: 0, y: 0 };
        setPanOffset({ x: 0, y: 0 });
      } else if (anchor) {
        zoomAround(anchor.x, anchor.y, scaleRef.current, clamped);
      }
      scaleRef.current = clamped;
      setScale(clamped);
    },
    [zoomAround]
  );

  // Click / tap cycle: normal -> 200% -> full -> normal -> (next click closes)
  const cycleZoom = useCallback(
    (anchor?: { x: number; y: number }) => {
      const stage = stageRef.current;
      if (stage === 3) {
        setLightboxIndex(null);
        return;
      }
      const next = stage + 1;
      stageRef.current = next;
      const target = next === 1 ? MID_SCALE : next === 2 ? fullScale : NORMAL_SCALE;
      applyScale(target, next === 3 ? undefined : anchor);
    },
    [applyScale, fullScale]
  );

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dragRef.current.moved) {
      dragRef.current.moved = false;
      return;
    }
    cycleZoom({ x: e.clientX, y: e.clientY });
  };

  const handleImageMouseDown = (e: React.MouseEvent) => {
    if (scaleRef.current <= NORMAL_SCALE + 0.001) return; // nothing to pan at normal size
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: panRef.current.x,
      originY: panRef.current.y,
      moved: false,
      active: true,
    };
    setIsDragging(true);
  };

  const handleSliderMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) setCursorPos({ x: e.clientX, y: e.clientY });
  };
  const handleSliderMouseLeave = () => setCursorPos(null);

  // Mouse drag-to-pan
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragRef.current.moved = true;
      setCursorPos({ x: e.clientX, y: e.clientY });
      const next = clampPan(
        { x: dragRef.current.originX + dx, y: dragRef.current.originY + dy },
        scaleRef.current
      );
      panRef.current = next;
      setPanOffset(next);
    };
    const onUp = () => {
      dragRef.current.active = false;
      setIsDragging(false);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, clampPan]);

  // Wheel/trackpad zoom + touch pan & pinch — bound natively so preventDefault
  // reliably stops page scroll and the browser's own pinch-zoom.
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * 0.0015); // smooth on trackpad, snappy on a mouse notch
      applyScale(scaleRef.current * factor, { x: e.clientX, y: e.clientY });
      stageRef.current = scaleRef.current > NORMAL_SCALE + 0.01 ? 1 : 0;
    };

    const dist = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const mid = (t: TouchList) => ({ x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 });

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        pinchRef.current = { active: true, lastDist: dist(e.touches) };
        dragRef.current.active = false;
      } else if (e.touches.length === 1) {
        dragRef.current = {
          startX: e.touches[0].clientX,
          startY: e.touches[0].clientY,
          originX: panRef.current.x,
          originY: panRef.current.y,
          moved: false,
          active: true,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (pinchRef.current.active && e.touches.length === 2) {
        e.preventDefault();
        const d = dist(e.touches);
        const factor = d / pinchRef.current.lastDist;
        applyScale(scaleRef.current * factor, mid(e.touches));
        stageRef.current = scaleRef.current > NORMAL_SCALE + 0.01 ? 1 : 0;
        pinchRef.current.lastDist = d;
      } else if (dragRef.current.active && e.touches.length === 1 && scaleRef.current > NORMAL_SCALE + 0.001) {
        e.preventDefault();
        const dx = e.touches[0].clientX - dragRef.current.startX;
        const dy = e.touches[0].clientY - dragRef.current.startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragRef.current.moved = true;
        const next = clampPan(
          { x: dragRef.current.originX + dx, y: dragRef.current.originY + dy },
          scaleRef.current
        );
        panRef.current = next;
        setPanOffset(next);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (pinchRef.current.active) {
        pinchRef.current.active = false;
        return;
      }
      if (dragRef.current.active && !dragRef.current.moved) {
        e.preventDefault(); // stop the browser's ghost click from double-firing the cycle
        cycleZoom({ x: dragRef.current.startX, y: dragRef.current.startY });
      }
      dragRef.current.active = false;
      dragRef.current.moved = false;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [applyScale, clampPan, cycleZoom]);

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
                <div
                  ref={sliderRef}
                  className="w-full max-w-[80vw] md:max-w-[70vw] h-[65vh] flex items-center justify-center relative z-20 overflow-hidden select-none touch-none"
                  onMouseMove={handleSliderMouseMove}
                  onMouseLeave={handleSliderMouseLeave}
                  style={{
                    cursor: isDragging ? "grabbing" : scale > NORMAL_SCALE + 0.001 ? "grab" : "zoom-in",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lightboxIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: easePremium }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        ref={imageRef}
                        src={uiDesignsItems[lightboxIndex].src}
                        alt={uiDesignsItems[lightboxIndex].title}
                        draggable={false}
                        onLoad={recomputeFullScale}
                        onMouseDown={handleImageMouseDown}
                        onClick={handleImageClick}
                        className="w-full h-full object-contain"
                        style={{
                          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${scale})`,
                          transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)",
                          transformOrigin: "center center",
                          cursor: "inherit",
                          willChange: "transform",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Cursor-follow zoom indicator */}
                  {scale > NORMAL_SCALE + 0.001 && cursorPos && (
                    <div
                      className="pointer-events-none fixed z-[200] rounded-full border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-[10px] tracking-widest text-[#0062ff] backdrop-blur-sm"
                      style={{ left: cursorPos.x + 18, top: cursorPos.y + 18 }}
                    >
                      {Math.round(scale * 100)}%
                    </div>
                  )}
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
