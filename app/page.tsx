"use client";

import dynamic from "next/dynamic";

// Page Sections
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import UIArchive from '@/components/sections/UiArchive';
import TechStack from "@/components/sections/TechStack";
import EducationSection from "@/components/education/EducationSection";
import Library from "@/components/sections/Library";
import CinematicFooter from "@/components/sections/Footer";


// Lazy load heavy 3D components
// const SpatialHero = dynamic(() => import("@/components/sections/SpatialHero"), {
//   loading: () => <div className="w-full h-screen bg-black" />,
//   ssr: false
// });

const UltimateHero = dynamic(() => import("@/components/sections/UltimateHero"), {
  loading: () => <div className="w-full h-screen bg-black" />,
  ssr: false
});

export default function Portfolio() {
  return (
    <main className="bg-[#000000] text-white font-sans relative selection:bg-[#F16001] selection:text-white">
      <Hero />     
      <div className="relative w-full flex flex-col">
        <Work />
        <UIArchive />
        <TechStack />
        <EducationSection />
        <Library />
      </div>
      <CinematicFooter /> {/* 3D Footer with WebGL Canvas Background */}
    </main>
  );
}