"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import * as THREE from "three";

const easeGod = [0.19, 1, 0.22, 1] as const;
const springConfig = { damping: 28, stiffness: 230, mass: 0.5 };

// ============================================================================
// 1. PROCEDURAL DIGITAL OCEAN (GRAY AESTHETIC)
// ============================================================================
const DigitalOcean = () => {
  const geometryRef = useRef<THREE.PlaneGeometry>(null);
  const planeSize = 105;
  const resolution = 140;

  const basePositions = useMemo(() => {
    const geom = new THREE.PlaneGeometry(planeSize, planeSize, resolution, resolution);
    return geom.attributes.position.array.slice();
  }, [planeSize, resolution]);

  useFrame((state) => {
    if (!geometryRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = basePositions[i];
      const y = basePositions[i + 1];
      const waveA = Math.sin(x * 0.13 + time * 1.15) * 2.1;
      const waveB = Math.cos(y * 0.11 - time * 1.05) * 1.9;
      const waveC = Math.sin((x + y) * 0.08 + time * 0.8) * 1.35;
      const microNoise = Math.sin((x - y) * 0.24 + time * 2.4) * 0.3;
      positions[i + 2] = waveA + waveB + waveC + microNoise;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.computeVertexNormals();
  });

  return (
    <group>
      <fog attach="fog" args={["#000000", 15, 50]} />
      <ambientLight intensity={0.2} color="#ffffff" />
      <pointLight position={[0, 15, 5]} intensity={15} color="#ffffff" distance={60} />

      <mesh rotation={[-Math.PI / 2, 0.05, 0]} position={[0, -7.5, -15]}>
        <planeGeometry ref={geometryRef} args={[planeSize, planeSize, resolution, resolution]} />
        <meshStandardMaterial
          color="#a6a6a6"
          emissive="#111111"
          emissiveIntensity={0.2}
          metalness={0.6}
          roughness={0.8}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

// ============================================================================
// 2. CINEMATIC KINETIC TYPOGRAPHY
// ============================================================================
const CinematicTitle = () => {
  const easeFocus = [0.16, 1, 0.3, 1] as const;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, filter: "blur(20px)", y: 40, scale: 1.1, letterSpacing: "0.5em" },
    show: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0, 
      scale: 1, 
      letterSpacing: "0em",
      transition: { duration: 1.8, ease: easeFocus } 
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-20 flex flex-col pointer-events-auto group w-full"
    >
      <motion.div variants={item} className="flex items-center gap-4 mb-2">
        <span className="font-mono text-[9px] md:text-[10px] text-white/50 tracking-[0.4em] uppercase">
          Digital Couture & System Architecture
        </span>
      </motion.div>

      <motion.h1 variants={item} className="relative flex flex-col">
        <span 
          className="text-[clamp(45px,6vw,90px)] font-black tracking-tighter uppercase leading-[0.85] text-transparent transition-all duration-700 group-hover:text-white"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
        >
          Orchestrating
        </span>
        <span className="text-[clamp(45px,6vw,90px)] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] mt-2">
          Ecosystems
        </span>
      </motion.h1>

      <motion.p 
        variants={item}
        className="font-mono text-[11px] md:text-sm text-white/50 leading-[1.8] max-w-[420px] mt-10 uppercase tracking-widest relative pl-5"
      >
        <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F16001] to-transparent" />
        Forging uncompromising full-stack environments. Deploying elite Python and Next.js infrastructure for total market dominance.
      </motion.p>
      
      <motion.div variants={item} className="mt-12">
        <button className="relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 flex items-center gap-4 group/btn hover:border-white/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F16001] to-transparent opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F16001] shadow-[0_0_10px_#F16001] animate-pulse" />
          <span className="font-mono text-[10px] text-white tracking-[0.2em] uppercase font-bold">
            Initialize Sequence
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// 3. INTERACTIVE 3D FRAME (WITH FIXED SCANNER)
// ============================================================================
const InteractiveFrame = ({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);
  const depthScale = useSpring(1, { damping: 30, stiffness: 210, mass: 0.45 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    tiltX.set(y * -17);
    tiltY.set(x * 17);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
    depthScale.set(1);
  };

  const maskX = useTransform(mouseX, (x) => {
    if (!frameRef.current) return 0;
    const rect = frameRef.current.getBoundingClientRect();
    return x - rect.left;
  });
  const maskY = useTransform(mouseY, (y) => {
    if (!frameRef.current) return 0;
    const rect = frameRef.current.getBoundingClientRect();
    return y - rect.top;
  });
  const maskImage = useTransform(
    [maskX, maskY],
    ([x, y]) =>
      `radial-gradient(circle 160px at ${x}px ${y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 88%)`,
  );

  return (
    <div
      ref={frameRef}
      className="relative w-full max-w-lg mx-auto aspect-[3/4] [perspective:1800px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        depthScale.set(1.03);
      }}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: smoothTiltX,
          rotateY: smoothTiltY,
          scale: depthScale,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative cursor-crosshair group"
      >
        {/* Base Glass Layer */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm z-0"
          style={{ transform: "translateZ(-18px)" }}
        />

        {/* UPDATED: Neutralized the ambient background glow to remove the orange shadow */}
        <div className="absolute -inset-1 rounded-2xl" />

        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/60 transition-colors duration-500 group-hover:border-[#F16001]" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/60 transition-colors duration-500 group-hover:border-[#F16001]" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white/60 transition-colors duration-500 group-hover:border-[#F16001]" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/60 transition-colors duration-500 group-hover:border-[#F16001]" />

        <div className="absolute inset-4 z-10 overflow-hidden rounded-xl bg-black">
          <Image
            src="/assets/images/Gemini_Generated_Image_rr961wrr961wrr96.png"
            alt="Kalpesh"
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
          />
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="absolute inset-4 z-20 pointer-events-none rounded-xl overflow-hidden"
              style={{ WebkitMaskImage: maskImage, maskImage }}
            >
              <Image
                src="/assets/images/Gemini_Generated_Image_rr961wrr961wrr96.png"
                alt="Kalpesh Thermal X-Ray"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="w-full h-full object-cover"
                style={{
                  // UPDATED: Removed the orange drop-shadow from the end of the filter string
                  filter:
                    "invert(1) hue-rotate(180deg) saturate(2.8) contrast(1.45) sepia(0.42)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {isHovered && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-4 right-4 z-[60] pointer-events-none flex flex-col items-center overflow-visible"
            style={{ transform: "translateZ(30px)" }} 
          >
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// ============================================================================
// 4. MAIN ORCHESTRATOR
// ============================================================================
export default function UltimateHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [vector, setVector] = useState({ x: "0.0000", y: "0.0000", z: "1.0000" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const nx = ((e.clientX / window.innerWidth) * 2 - 1).toFixed(4);
      const ny = (-(e.clientY / window.innerHeight) * 2 + 1).toFixed(4);
      const nz = (Math.abs(Number(nx)) * 0.5 + Math.abs(Number(ny)) * 0.5 + 0.4).toFixed(4);
      setVector({ x: nx, y: ny, z: nz });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black selection:bg-[#F16001]/0 selection:text-white">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 2.4, 8], fov: 56 }}
          dpr={[1, 1.6]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <DigitalOcean />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-90" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)]" />

      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(112,136,255,0.08),transparent_38%),radial-gradient(circle_at_80%_65%,rgba(241,96,1,0.08),transparent_35%)]" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
        <header className="flex justify-between items-start w-full">
          <span className="font-mono text-[10px] uppercase font-bold tracking-[0.3em] text-white">
            KS<span className="text-[#F16001]">•</span>DEV
          </span>
        </header>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full h-full pt-10 gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <CinematicTitle />
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end pointer-events-auto">
            <InteractiveFrame mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>

        <footer className="w-full flex flex-col md:flex-row justify-between items-end mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: easeGod, delay: 1.08 }}
            className="absolute right-6 md:right-6 top-5/6 -translate-y-1/2 hidden md:flex flex-col items-end gap-3 font-mono text-[9px] text-white/50 tracking-[0.3em] uppercase pointer-events-none z-50"
        >
          <div className="flex flex-col items-end gap-1"></div>
            <div className="hidden md:flex flex-col items-end gap-1 font-mono text-[10px] text-white/60 tracking-widest">
            <span className="text-white/20 mb-2">Node Vector</span>
            <span>VEC X:{vector.x}</span>
            <span>VEC Y:{vector.y}</span>
            <span>VEC Z:{vector.z}</span>
          </div>

            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">
              Operations Base
            </span>
            <div className="font-mono text-xs text-white uppercase tracking-widest border border-white/10 bg-white/5 px-3 py-1">
              Vadodara, IN
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: easeGod, delay: 1.25 }}
            className="flex flex-col items-end gap-2 mt-6 md:mt-0"
          >
              <div className="relative flex-col gap-1.5">
                <span className="text-[8px] font-mono tracking-[0.2em] text-[#F16001] uppercase font-bold sm:tracking-[0.2em]">System Status</span>
                  <div className="flex items-center gap-2 sm:justify-end text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Dev
                </div>
              </div> 
          </motion.div>
        </footer>
      </div>
    </section>
  );
}

