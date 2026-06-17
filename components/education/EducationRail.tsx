"use client";

import { motion } from "framer-motion";
import SignalGraph from "./SignalGraph";
import ProgressIndicator from "./ProgressIndicator";
import { EducationSectionItem } from "./types";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

interface EducationRailProps {
  items: EducationSectionItem[];
  activeIndex: number;
}

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function EducationRail({
  items,
  activeIndex,
}: EducationRailProps) {
  const activeItem =
    items[activeIndex] ?? items[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 80;

const y =
  element.getBoundingClientRect().top +
  window.pageYOffset -
  navbarOffset;

window.scrollTo({
  top: y,
  behavior: "smooth",
});
  };

  return (
    <aside
      className="
        lg:sticky
        lg:top-0
        lg:h-screen
        flex
        flex-col
        justify-between
        py-10
        lg:py-16
        lg:pr-16
      "
    >
      {/* Top Section */}
      <div>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: EASE_PREMIUM,
          }}
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              font-mono
              text-zinc-500
            "
          >
            Education
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05,
            duration: 0.8,
            ease: EASE_PREMIUM,
          }}
          className="
            mt-6
            text-4xl
            md:text-5xl
            xl:text-6xl
            leading-none
            tracking-tight
            text-white
            font-light
          "
        >
          Narrative
          <br />

          <span
            className="
              italic
              text-zinc-500
              font-extralight
            "
          >
            Evolution
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            mt-6
            max-w-sm
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          Academic progression,
          technical growth,
          and professional
          development across
          modern computing,
          software engineering,
          cybersecurity,
          and emerging technologies.
        </motion.p>

        {/* Timeline */}
        <div className="mt-14">
          <div
            className="
              mb-5
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-zinc-600
              font-mono
            "
          >
            Timeline
          </div>

          <div
            className="
              relative
              border-l
              border-white/5
              pl-5
            "
          >
            {items.map((item, index) => {
              const isActive =
                index === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-4
                    py-4
                    text-left
                    transition-all
                  "
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                >
                  {/* Active Dot */}
                  <motion.div
                    animate={{
                      scale: isActive
                        ? 1.15
                        : 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      absolute
                      -left-[29px]
                      h-3
                      w-3
                      rounded-full
                      border
                    "
                    style={{
                      backgroundColor:
                        isActive
                          ? item.accent
                          : "#090909",

                      borderColor:
                        isActive
                          ? item.accent
                          : "rgba(255,255,255,0.1)",

                      boxShadow: isActive
                        ? `0 0 18px ${item.accent}`
                        : "none",
                    }}
                  />

                  {/* Index */}
                  <span
                    className="
                      text-xs
                      font-mono
                      tracking-widest
                    "
                    style={{
                      color: isActive
                        ? item.accent
                        : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {item.index}
                  </span>

                  {/* Label */}
                  <div>
                    <div
                      className="
                        text-sm
                        transition-colors
                      "
                      style={{
                        color: isActive
                          ? "#ffffff"
                          : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {item.degree}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-600
                      "
                    >
                      {item.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Diagnostics */}
      <div
        className="
          mt-16
          flex
          flex-col
          gap-10
        "
      >
        <SignalGraph
          activeId={activeItem.id}
          accentColor={activeItem.accent}
        />

        <ProgressIndicator
          activeIndex={activeIndex}
          totalItems={items.length}
          accentColor={activeItem.accent}
        />

        {/* System Footer */}
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/5
            pt-4
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-zinc-600
              font-mono
            "
          >
            EDU_SYS
          </span>

          <span
            className="font-mono text-xs"
            style={{
              color: activeItem.accent,
            }}
          >
            ACTIVE
          </span>
        </div>
      </div>
    </aside>
  );
}