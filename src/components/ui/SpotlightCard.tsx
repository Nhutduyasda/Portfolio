"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tilt?: boolean;
  onClick?: () => void;
  dataCursor?: string;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(124, 58, 237, 0.15)",
  tilt = true,
  onClick,
  dataCursor,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tiltRotation, setTiltRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Gentle tilt: max 5 degrees
      const rotY = ((x - centerX) / centerX) * 4;
      const rotX = -((y - centerY) / centerY) * 4;
      setTiltRotation({ rotateX: rotX, rotateY: rotY });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (tilt) {
      setTiltRotation({ rotateX: 0, rotateY: 0 });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={dataCursor}
      animate={tilt ? { rotateX: tiltRotation.rotateX, rotateY: tiltRotation.rotateY } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-[#080A0D]/80 backdrop-blur-xl p-6 sm:p-8 overflow-hidden transition-colors duration-300 group",
        isHovered && "border-white/[0.18]",
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Ambient Top Subtle Corner Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl" />

      {/* Card Content with subtle z-elevation */}
      <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
