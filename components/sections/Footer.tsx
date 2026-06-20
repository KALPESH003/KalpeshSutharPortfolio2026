"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import * as THREE from "three";
import { personalInfo } from "@/data/config";

// --- PREMIUM EASING & STYLES ---
const easePremium = [0.76, 0, 0.24, 1] as const;

// --- MAGNETIC PILL BUTTON ---
const MagneticPill = ({ email }: { email: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { damping: 20, stiffness: 150, mass: 0.1 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 150, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.2);
    y.set((clientY - (top + height / 2)) * 0.2);
  };

  return (
    <motion.a
      href={`mailto:${email}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: smoothX, y: smoothY }}
      className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 translate-y-full bg-[#0062ff] group-hover:translate-y-0 transition-transform duration-700 ease-[0.76,0,0.24,1] rounded-full" />
      <span className="relative z-10 text-sm md:text-base font-mono text-white group-hover:text-black transition-colors duration-500">
        {email}
      </span>
      <div className="relative z-10 w-2 h-2 rounded-full bg-[#0062ff] group-hover:bg-black transition-colors duration-500 animate-pulse" />
    </motion.a>
  );
};

// --- CLEAN KINETIC LINK (Now supports Internal vs External links) ---
const CleanLink = ({ title, href, isInternal = false }: { title: string; href: string; isInternal?: boolean }) => (
  <a 
    href={href} 
    // If it's an internal link, don't open a new tab. If external, open new tab safely.
    {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group relative overflow-hidden inline-flex"
  >
    <motion.div 
      className="relative flex flex-col"
      whileHover={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: easePremium }}
    >
      <span className="text-base md:text-lg font-mono text-white/70 group-hover:text-[#0062ff] transition-colors duration-300">
        {title}
      </span>
      <span className="absolute top-full left-0 text-base md:text-lg font-mono text-white">
        {title}
      </span>
    </motion.div>
  </a>
);

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // --- 1. WEBGL 3D RAIN BACKGROUND ---
  useEffect(() => {
    if (!canvasContainerRef.current) return;
    const container = canvasContainerRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020202, 0.035); 

    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 45; 
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2, (frustumSize * aspect) / 2,
      frustumSize / 2, frustumSize / -2, 1, 150
    );
    camera.position.set(20, 25, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(10, 25, -5);
    scene.add(dirLight);

    const boxSize = 0.8;
    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const material = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.8, metalness: 0.2 });
    
    const count = 1500; 
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    scene.add(mesh);

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const COLOR_BASE = new THREE.Color(0x111111);
    const COLOR_ACCENT = new THREE.Color(0xF16001);

    const resetBox = (initial = false) => ({
      x: Math.floor((Math.random() - 0.5) * 140),
      z: Math.floor((Math.random() - 0.5) * 60),
      y: initial ? Math.random() * 60 : 45 + Math.random() * 20,
      targetY: Math.floor(Math.random() * 4) * boxSize, 
      velocity: 0,
      acceleration: 8 + Math.random() * 5, 
      state: 'falling', 
      timer: 0,
      scale: 1,
    });
    
    const boxes = Array.from({ length: count }, () => resetBox(true));
    const clock = new THREE.Clock();
    let animationFrameId: number;
    let needsColorUpdate = false;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);

      for (let i = 0; i < count; i++) {
        const box = boxes[i];
        if (box.state === 'falling') {
          box.velocity += box.acceleration * delta;
          box.y -= box.velocity * delta;
          if (box.y <= box.targetY) {
            box.y = box.targetY;
            box.state = 'landed';
            box.timer = 1.0 + Math.random() * 3.0;
            mesh.setColorAt(i, COLOR_ACCENT);
            needsColorUpdate = true;
          }
        } else if (box.state === 'landed') {
          box.timer -= delta;
          mesh.getColorAt(i, color);
          if (color.r > COLOR_BASE.r || color.g > COLOR_BASE.g || color.b > COLOR_BASE.b) {
             color.lerp(COLOR_BASE, delta * 2.5); 
             mesh.setColorAt(i, color);
             needsColorUpdate = true;
          }
          if (box.timer <= 0) box.state = 'shrinking';
        } else if (box.state === 'shrinking') {
          box.scale -= box.scale * (delta * 4) + 0.01;
          if (box.scale <= 0) {
            Object.assign(box, resetBox());
            mesh.setColorAt(i, COLOR_BASE);
            needsColorUpdate = true;
          }
        }
        dummy.position.set(box.x, box.y, box.z);
        dummy.scale.setScalar(Math.max(0, box.scale));
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (needsColorUpdate) { mesh.instanceColor!.needsUpdate = true; needsColorUpdate = false; }
      renderer.render(scene, camera);
    };

    animate();
    
    const handleResize = () => {
      if (!container) return;
      const aspect = container.clientWidth / container.clientHeight;
      camera.left = (frustumSize * aspect) / -2; camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2; camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose(); material.dispose(); renderer.dispose();
    };
  }, []);

  // --- 2. CLOCK ---
  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = (date: Date) => date.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });

  return (
    <footer id="footer" className="relative w-full bg-[#000000] pt-32 pb-6 md:pb-12 px-4 md:px-12 min-h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* Absolute Backgrounds */}
      <div ref={canvasContainerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }} />
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
     
      {/* Global Margin Lines */}
      <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 left-[32px] md:left-[84px] w-[1px] border-l border-dashed border-white/10" />
      <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" />
      <div className="absolute left-0 right-0 top-[64px] md:top-[81px] h-[1px] border-t border-dashed border-white/10" />
      <div className="absolute left-0 right-0 bottom-[24px] h-[1px] border-t border-dashed border-white/10" />

      {/* Diagonal Hatch Channel */}
      <div 
        className="absolute top-0 bottom-0 left-[24px] w-[60px] bg-[#020202]"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.04) 6px, rgba(255, 255, 255, 0.04) 12px)`
        }}
      />

      {/* Overhanging Dashed Lines */}
      <div className="absolute top-0 left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
      <div className="absolute bottom-0 left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
      <div className="absolute left-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
      <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
        
      {/* Precision Registration Intersections (+) */}
      <div className="absolute top-[64px] md:top-[81px] left-[32px] md:left-[24px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>
      <div className="absolute top-[64px] md:top-[81px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mt-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>
      <div className="absolute bottom-[24px] left-[32px] md:left-[24px] w-4 h-4 -ml-2 -mb-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>
      <div className="absolute bottom-[24px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mb-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>

      {/* Main Glass Island */}
      <div className="relative z-20 w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: easePremium }}
          className="relative z-10 w-full bg-white/[0.02] backdrop-blur-[40px] saturate-[150%] border border-white/[0.08] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col overflow-hidden"
        >
          {/* INTERNAL GLOW LIQUID */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-[#0062ff]/25 rounded-full blur-[80px]"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.5, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[30%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#0062ff]/20 rounded-full blur-[100px]"
            />
          </div>

          <div className="absolute -top-[15%] -left-[5%] w-[400px] h-[400px] pointer-events-none z-0 opacity-40 mix-blend-overlay flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full border border-white/20 border-dashed border-[1px]" />
            <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-white/30"
          />
            <div className="absolute w-full h-[1px] bg-white/20" />
            <div className="absolute h-full w-[1px] bg-white/20" />
          </div>

          <div 
            className="absolute -bottom-[10%] -right-[5%] w-[300px] h-[300px] pointer-events-none z-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
            }}
          />

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 border-b border-white/10 pb-12 md:pb-20">
            <div className="flex flex-col max-w-3xl">
              <h2 className="text-[clamp(40px,6vw,80px)] font-sans font-medium tracking-tight text-white leading-[1.1] mb-8">
                Let's create an <br className="hidden md:block"/>
                <span className="text-[#0062ff] italic pr-2">exceptional</span> digital experience.
              </h2>
              <MagneticPill email={personalInfo?.email || "hello@kalpeshsuthar.com"} />
            </div>

            <div className="flex flex-col gap-2 min-w-[200px]">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-2">System Status</span>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-white/80 uppercase">Available for work</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 pt-12 md:pt-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">Location</span>
              <span className="text-base md:text-lg font-mono text-white/90">{personalInfo?.location || "Vadodara, IN"}</span>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs font-mono text-[#0062ff]">{time ? formatTime(time) : "00:00"}</span>
                <span className="text-[10px] font-mono text-white/40 uppercase">IST</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">Socials</span>
              <CleanLink title="GitHub" href={personalInfo?.socialLinks?.github || "#"} />
              <CleanLink title="LinkedIn" href={personalInfo?.socialLinks?.linkedin || "#"} />
              <CleanLink title="LeetCode" href={personalInfo?.socialLinks?.leetcode || "#"} />
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">Pages</span>
              {/* NOW WORKABLE INTERNAL LINKS */}
              <CleanLink title="Home" href="#home" isInternal={true} />
              <CleanLink title="Projects" href="#projects" isInternal={true} />
              <CleanLink title="Tech Stack" href="#techstack" isInternal={true} />
              <CleanLink title="Education" href="#education" isInternal={true} />
              <CleanLink title="Library" href="#library" isInternal={true} />
            </div>
           
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">Legal</span>
                
                {/* Replaced the two links with a single, unified link */}
                <CleanLink title="Legal & Privacy" href="/legal" isInternal={true} />
                
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mt-auto">
                © {new Date().getFullYear()} {personalInfo?.name || "Kalpesh Suthar"}
              </span>
            </div>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
}

