"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./Book.module.css";

export interface BookProps {
  id?: string | number;
  index: number;
  title: string;
  author: string;
  genre: string;
  introText: string;
  coverImage: string;      
  overlayImage: string;    
  themeClass?: string;
  textColor?: string;
}

// Slightly softer springs for a more luxurious, heavy feel
const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
const PARALLAX_SPRING = { stiffness: 50, damping: 20, mass: 1 };
const PRESENTATION_SPRING = { stiffness: 45, damping: 16, mass: 1 };

export default function Book({
  index,
  title,
  author,
  genre,
  introText,
  coverImage,
  overlayImage,
  themeClass = "",
  textColor = "#222",
}: BookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const active = isHovered || isFocused;

  // --- 1. MOUSE PARALLAX TRACKING ---
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, PARALLAX_SPRING);
  const smoothY = useSpring(pointerY, PARALLAX_SPRING);

  // Subtle wiggle when hovering
  const mouseRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const mouseRotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  
  const glareX = useTransform(smoothX, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [100, 0]);

  // --- 2. HOVER PRESENTATION TRACKING ---
  const restingRotateY = -22; 
  const hoverRotateY = -4;    

  const openAmount = useSpring(active ? 1 : 0, PRESENTATION_SPRING);
  
  // NEW: Added bookScale to handle the zoom effect (1 to 1.08 = 8% zoom)
  const bookScale = useTransform(openAmount, [0, 1], [1, 1.08]); 
  
  const bookLiftY = useTransform(openAmount, [0, 1], [0, -25]); 
  const presentationRotateX = useTransform(openAmount, [0, 1], [0, 6]); 
  const presentationRotateY = useTransform(openAmount, [0, 1], [restingRotateY, hoverRotateY]); 
  const coverRotateY = useTransform(openAmount, [0, 1], [0, -145]);


  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [pointerX, pointerY]);

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
    setIsHovered(false);
  }, [pointerX, pointerY]);

  return (
    <motion.article
      className={styles.bookContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: EASE_PREMIUM }}
    >
      <div
        ref={containerRef}
        className={styles.interactionZone}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={resetPointer}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          resetPointer();
        }}
        tabIndex={0}
        role="button"
        aria-label={`Open ${title} by ${author}`}
      >
        <div className={styles.scene}>
          
          {/* LAYER 1: Mouse Parallax Wrapper */}
          <motion.div 
            className={styles.floatWrapper}
            style={{ rotateX: mouseRotateX, rotateY: mouseRotateY }}
          >
            
            {/* LAYER 2: Presentation Lift, Rotate, & Zoom */}
            <motion.div
              className={styles.bookVolume}
              style={{
                rotateX: presentationRotateX,
                rotateY: presentationRotateY,
                y: bookLiftY,
                scale: bookScale, // <-- APPLIED THE ZOOM HERE
              }}
            >
              <div className={styles.pagesBlock}>
                <div className={styles.pagesRight} />
                <div className={styles.pagesTop} />
                <div className={styles.pagesBottom} />
                <div className={styles.pagesBackFill} />
              </div>

              <div className={styles.backCover} />
              <div className={styles.spine} />

              <div className={styles.insideContent} aria-hidden={!active}>
                <p className={styles.insideText} style={{ color: textColor }}>
                  &quot;{introText}&quot;
                </p>
              </div>

              <motion.div 
                className={styles.frontCover}
                style={{ 
                  rotateY: coverRotateY, 
                  transform: "translateZ(15px)",
                  transformOrigin: "left center" 
                }}
              >
                <div className={styles.coverFrontFace}>
                  <Image
                    src={coverImage}
                    alt={`${title} cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className={styles.artwork}
                    priority={index < 4}
                  />
                  
                  <div className={styles.overlayWrap}>
                    <Image
                      src={overlayImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className={styles.overlayImage}
                    />
                  </div>

                  <div className={styles.coverVignette} />
                  <div className={styles.coverGrain} />
                  
                  <motion.div 
                    className={styles.glare}
                    style={{
                      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 40%)`
                    }}
                  />
                  <div className={styles.coverCrease} />
                </div>

                <div className={`${styles.coverBackFace} ${themeClass}`} />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.contactShadow}
            animate={{ 
               opacity: active ? 0.2 : 0.6,
               scale: active ? 1.08 : 1, // Tweaked to 1.08 to match the book zoom
               filter: active ? "blur(20px)" : "blur(14px)"
            }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          />
        </div>
      </div>

      <motion.div
        className={styles.metadata}
        animate={{ opacity: active ? 1 : 0.5, y: active ? 0 : 4 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      >
        <h3 className={styles.metaTitle}>{title}</h3>
        <p className={styles.metaAuthor}>{author}</p>
        <span className={styles.metaGenre}>{genre}</span>
      </motion.div>
    </motion.article>
  );
}
