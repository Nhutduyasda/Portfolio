"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end lag-behind fluid cursor physics
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view") {
          setCursorVariant("view");
          setCursorText("VIEW");
        } else if (type === "drag") {
          setCursorVariant("drag");
          setCursorText("DRAG");
        } else if (type === "pointer") {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else if (target.closest("button, a, input, textarea, [role='button']")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleElementHover);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Fluid Trailing Outer Ring / Pill */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-[10px] font-mono tracking-widest text-black font-bold hidden md:flex"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "view" ? 64 : cursorVariant === "hover" ? 44 : 28,
          height: cursorVariant === "view" ? 64 : cursorVariant === "hover" ? 44 : 28,
          backgroundColor:
            cursorVariant === "view"
              ? "rgba(34, 211, 238, 0.9)"
              : cursorVariant === "hover"
              ? "rgba(124, 58, 237, 0.25)"
              : "rgba(255, 255, 255, 0.05)",
          border:
            cursorVariant === "view"
              ? "1px solid rgba(34, 211, 238, 1)"
              : cursorVariant === "hover"
              ? "1px solid rgba(167, 139, 250, 0.7)"
              : "1px solid rgba(255, 255, 255, 0.25)",
          backdropFilter: cursorVariant === "view" ? "blur(4px)" : "blur(2px)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-black font-semibold text-[11px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
