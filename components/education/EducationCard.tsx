"use client";

import { motion } from "framer-motion";
import { EducationSectionItem } from "./types";
import { useReducedMotion } from "framer-motion";

interface EducationCardProps {
  item: EducationSectionItem;
  index: number;
}

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function EducationCard({
  item,
  index, 
}: EducationCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardInitial = prefersReducedMotion
    ? false
    : { opacity: 0, y: 40 };
  const cardStyle = {
    boxShadow: `
      0 0 0 1px rgba(255,255,255,0.03),
      0 20px 80px rgba(0,0,0,0.45),
      0 0 120px ${item.accent}08
    `,
  };

  return (
    <article
      id={item.id}
      data-index={index}
      className="
        relative
        w-full
        flex
        items-center
        py-12 /* <-- Reduced from py-24 to make spacing tighter */
      "
    >
      <motion.div
        whileHover={{
            y: -6,
        }}
        transition={{
            duration: 0.4,
        }}
        className="
            relative
            w-full
            rounded-[32px]
            transition-all
            duration-500
          border
          border-white/[0.08]
          bg-white/[0.02]
          backdrop-blur-xl
          overflow-hidden
        "
        style={cardStyle}
      >
        {/* Accent Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(
                circle at top right,
                ${item.accent}40,
                transparent 35%
              )
            `,
          }}
        />
        
        {/* Top Border Accent */}
        <div
          className="absolute top-0 left-0 h-[2px] w-full"
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${item.accent},
              transparent
            )`,
          }}
        />

        {/* Adjusted padding inside the card to tighten the height further */}
        <div className="relative z-10 p-8 md:p-10 lg:p-12">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: EASE_PREMIUM,
            }}
            className="mb-6"
          >
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                px-4
                py-2
                text-[11px]
                font-mono
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: item.accent,
                borderColor: `${item.accent}40`,
                background: `${item.accent}10`,
              }}
            >
              {item.status}
            </span>
          </motion.div>

          {/* Institution */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: EASE_PREMIUM,
            }}
          >
            <h2
              className="
                text-3xl
                md:text-4xl
                xl:text-5xl
                font-light
                tracking-tight
                text-white
                leading-[1.05]
              "
            >
              {item.institution}
            </h2>
          </motion.div>

          {/* Degree */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: EASE_PREMIUM,
            }}
            className="
              mt-3
              text-lg
              md:text-xl
              text-zinc-400
              font-light
              italic
            "
          >
            {item.degree}
          </motion.p>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mt-6
              flex
              items-center
              gap-4
            "
          >
            <div
              className="h-[1px] w-12"
              style={{
                background: item.accent,
              }}
            />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-zinc-500
                font-mono
              "
            >
              {item.duration}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: EASE_PREMIUM,
            }}
            className="
              mt-8
              max-w-4xl
              text-sm
              md:text-base
              leading-relaxed
              text-zinc-400
            "
          >
            {item.description}
          </motion.p>

          {/* Content Grid */}
          <div
            className="
              mt-10
              grid
              gap-10
              lg:grid-cols-2
            "
          >
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: EASE_PREMIUM,
              }}
            >
              <div
                className="
                  mb-5
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                  font-mono
                "
              >
                Key Highlights
              </div>

              <div className="space-y-3">
                {item.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        rounded-full
                        shrink-0
                      "
                      style={{
                        background: item.accent,
                      }}
                    />

                    <span
                      className="
                        text-sm
                        text-zinc-300
                        leading-relaxed
                      "
                    >
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: EASE_PREMIUM,
              }}
            >
              <div
                className="
                  mb-5
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                  font-mono
                "
              >
                Focus Areas
              </div>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {item.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-xs
                      text-zinc-300
                      transition-all
                    "
                    style={{
                      boxShadow: `
                        inset 0 0 0 1px rgba(255,255,255,0.02)
                      `,
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              mt-10
              flex
              items-center
              justify-between
              border-t
              border-white/5
              pt-6
            "
          >
            <span
              className="
                text-[10px]
                font-mono
                uppercase
                tracking-[0.25em]
                text-zinc-600
              "
            >
              Chapter {item.index}
            </span>

            <span
              className="font-mono text-xs"
              style={{
                color: item.accent,
              }}
            >
              ACTIVE RECORD
            </span>
          </motion.div>
        </div>
      </motion.div>
    </article>
  );
}