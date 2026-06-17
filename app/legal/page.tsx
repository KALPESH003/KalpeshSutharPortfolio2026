import React from "react";
import Legal from "@/components/sections/Legal";

export default function LegalPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] flex items-center justify-center">
      {/* We wrap the Legal component in a main tag to ensure 
        it takes up the full screen and respects the dark theme.
      */}
      <div className="w-full pt-24 pb-12">
        <Legal />
      </div>
    </main>
  );
}