"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Book from "@/components/ui/Book";
import { libraryData } from "@/data/config";
import styles from "./Library.module.css";

export default function Library() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const shelfRotateX = useTransform(scrollYProgress, [0, 1], [8, 2]); // Changed to rotateX for a shelf tilt

  return (
    <section
      ref={sectionRef}
      id="library"
      className={styles.section}
      aria-labelledby="library-heading"
    >
      <div className={styles.ambient} aria-hidden>
     
        {/* GLOBAL ARCHITECTURAL FRAME */}
        <div className="absolute inset-0 pointer-events-none z-[5] hidden md:block">
          <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-white/10" /> 
          <div className="absolute top-0 bottom-0 left-21 w-px border-l border-dashed border-white/10" />
          <div className="absolute top-0 bottom-0 left-6 w-px border-l border-dashed border-white/10" />
          <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-white/10" /> 
          <div className="absolute top-0 bottom-0 right-16 w-px border-l border-dashed border-white/10" />
        </div>

        {/* THE DIAGONAL HATCH PATTERN CHANNEL   */}
        <div 
          className="absolute top-0 bottom-0 left-[24px] w-[60px] bg-[#020202]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 6px,
              rgba(255, 255, 255, 0.04) 6px,
              rgba(255, 255, 255, 0.04) 12px
            )`
          }}
        />
              
      </div>

      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.headerTop}>
            <div className={styles.accentLine} />
            <span className={styles.eyebrow}>Personal Library</span>
            <span className={styles.volumeCount}>
              {String(libraryData.length).padStart(2, "0")} Vol.
            </span>
          </div>

          <h2 id="library-heading" className={styles.headline}>
            Volumes that
            <span className={styles.headlineAccent}> shape the craft</span>
          </h2>

          <p className={styles.lede}>
            Software is written by people, and people are shaped by what they read.
            A curated shelf of books influencing engineering, security, and narrative.
          </p>
        </motion.header>

        {/* Applied the Framer Motion rotate transform here! */}
        <motion.div 
          className={styles.bookRow}
          style={{ rotateX: shelfRotateX, perspective: "1200px" }}
        >
          {libraryData.map((book, index) => (
            <Book
              key={book.id}
              index={index}
              title={book.title}
              author={book.author}
              genre={book.genre}
              introText={book.introText}
              coverImage={book.coverImage}
              overlayImage={book.overlayImage}
              themeClass={book.themeClass}
              textColor={book.textColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}