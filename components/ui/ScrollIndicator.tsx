"use client";

import React, { useEffect, useRef, useCallback } from "react";

const COLORS = {
  accent: "#0062ff",
  tick: "#222222",
  tickMajor: "#444444",
};

const THUMB_HEIGHT = 48;

export default function MinimalistScrollIndicator() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  const isDraggingRef = useRef(false);

  const updateUI = useCallback(() => {
    if (
      !wrapperRef.current ||
      !trackRef.current ||
      !thumbRef.current ||
      !readoutRef.current
    ) {
      return;
    }

    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight;

    const viewportHeight = window.innerHeight;

    // ---------------------------------
    // FADE IN
    // ---------------------------------

    const fadeStart = viewportHeight * 0.5;
    const fadeEnd = viewportHeight * 0.9;

    let opacity = 0;

    if (scrollTop > fadeEnd) {
      opacity = 1;
    } else if (scrollTop > fadeStart) {
      opacity =
        (scrollTop - fadeStart) /
        (fadeEnd - fadeStart);
    }

    wrapperRef.current.style.opacity =
      opacity.toFixed(3);

    // ---------------------------------
    // SCROLL %
    // ---------------------------------

    const maxScroll = Math.max(
      0,
      scrollHeight - viewportHeight
    );

    const percentage =
      maxScroll > 0 ? scrollTop / maxScroll : 0;

    const clamped = Math.max(
      0,
      Math.min(percentage, 1)
    );

    const progress = clamped * 100;

    let display = progress.toFixed(2);

    if (progress < 10) {
      display = `0${display}`;
    }

    readoutRef.current.textContent = display;

    // ---------------------------------
    // THUMB POSITION
    // ---------------------------------

    const trackHeight =
      trackRef.current.clientHeight;

    const maxTranslate =
      trackHeight - THUMB_HEIGHT;

    const translateY =
      clamped * maxTranslate;

    thumbRef.current.style.transform =
      `translate3d(0, ${translateY}px, 0)`;
  }, []);

  const scrollToPointer = useCallback(
    (clientY: number) => {
      if (!trackRef.current) return;

      const rect =
        trackRef.current.getBoundingClientRect();

      const localY = clientY - rect.top;

      const trackHeight = rect.height;

      const maxTranslate =
        trackHeight - THUMB_HEIGHT;

      const thumbY = Math.max(
        0,
        Math.min(
          localY - THUMB_HEIGHT / 2,
          maxTranslate
        )
      );

      const percentage =
        thumbY / maxTranslate;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      window.scrollTo({
        top: percentage * maxScroll,
        behavior: "auto",
      });
    },
    []
  );

  const startDrag = useCallback(
    (clientY: number) => {
      isDraggingRef.current = true;

      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";

      scrollToPointer(clientY);
    },
    [scrollToPointer]
  );

  const stopDrag = useCallback(() => {
    isDraggingRef.current = false;

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }, []);

  useEffect(() => {
    let ticking = false;

    const requestUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateUI();
          ticking = false;
        });

        ticking = true;
      }
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      if (!isDraggingRef.current) return;

      scrollToPointer(event.clientY);
    };

    const handlePointerUp = () => {
      stopDrag();
    };

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    requestUpdate();

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, [
    updateUI,
    scrollToPointer,
    stopDrag,
  ]);

  return (
    <div
      ref={wrapperRef}
      className="fixed right-0 top-0 h-screen w-14 z-50 flex justify-end font-sans pointer-events-auto will-change-[opacity]"
      style={{
        opacity: 0,
      }}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="relative w-full h-full"
        onPointerDown={(e) =>
          startDrag(e.clientY)
        }
      >
        {/* TICKS */}

        <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-4">
          {Array.from({ length: 100 }).map(
            (_, i) => {
              const major = i % 10 === 0;

              return (
                <div
                  key={i}
                  className="flex justify-end w-3"
                >
                  <div
                    style={{
                      height: "2px",
                      width: major
                        ? "8px"
                        : "3px",
                      backgroundColor: major
                        ? COLORS.tickMajor
                        : COLORS.tick,
                    }}
                  />
                </div>
              );
            }
          )}
        </div>

        {/* THUMB */}

        <div
          ref={thumbRef}
          className="absolute right-0 top-0 w-full cursor-grab active:cursor-grabbing will-change-transform"
          style={{
            height: `${THUMB_HEIGHT}px`,
            touchAction: "none",
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
            startDrag(e.clientY);
          }}
        >
          <div className="relative w-full h-full flex items-center">
            {/* ACCENT TRIANGLE */}

            <div
              className="absolute right-[3px] w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px]"
              style={{
                borderLeftColor:
                  COLORS.accent,
              }}
            />

            {/* READOUT */}

            <span
              ref={readoutRef}
              className="absolute right-[4px] top-1/2 -translate-y-1/2 -rotate-90 origin-center font-mono text-[10px] tracking-[0.24em] tabular-nums"
              style={{
                color: COLORS.accent,
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              00.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}