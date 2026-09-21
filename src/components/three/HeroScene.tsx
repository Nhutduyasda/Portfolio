"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import DeveloperCore from "./DeveloperCore";
import TechOrbit from "./TechOrbit";
import BackgroundParticles from "./BackgroundParticles";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface HeroSceneProps {
  eventSource?: React.RefObject<any>;
  isMobileView?: boolean;
}

function FallbackHero({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none select-none">
      <div className="relative flex items-center justify-center">
        {/* Soft Ambient Radial Backing */}
        <div className="absolute w-72 h-72 rounded-full bg-violet-600/15 blur-3xl animate-pulse" />
        <div className="absolute w-56 h-56 rounded-full bg-cyan-500/10 blur-2xl" />

        {/* Delicate Concentric Orbit Rings */}
        <div
          className="absolute w-64 h-64 rounded-full border border-violet-500/20 animate-spin"
          style={{ animationDuration: "35s" }}
        />
        <div
          className="absolute w-52 h-36 rounded-full border border-cyan-400/20 rotate-45 animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        />

        {/* Holographic Glass Orb */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-violet-950/80 via-slate-900/60 to-cyan-950/70 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.35)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600/50 to-indigo-700/40 border border-violet-400/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(167,139,250,0.5)]">
            <span className="font-mono font-black text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-cyan-200">
              ND
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-widest text-cyan-300 uppercase mt-1">
            CORE
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroScene({ eventSource, isMobileView }: HeroSceneProps) {
  const isMobileDetected = useIsMobile();
  const isMobile = isMobileView !== undefined ? isMobileView : isMobileDetected;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted || !hasWebGL || prefersReducedMotion) {
    return <FallbackHero isMobile={isMobile} />;
  }

  // Desktop scene is shifted to the right half; mobile is centered and scaled to fit neatly
  const groupPosition: [number, number, number] = isMobile
    ? [0, -0.05, 0]
    : [2.15, 0, 0];
  const groupScale = isMobile ? 0.65 : 1.0;

  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={isMobile ? [1, 1.3] : [1, 1.75]}
        eventSource={eventSource as React.RefObject<HTMLElement> | undefined}
        eventPrefix="client"
      >
        {/* Cinematic 3-Point Studio Lighting */}
        <ambientLight intensity={0.35} />
        {/* Soft Violet Key Light (Upper-Right) */}
        <pointLight position={[6, 5, 5]} intensity={1.8} color="#A78BFA" />
        {/* Cyan Rim Light (Lower-Left) */}
        <pointLight position={[-6, -4, -3]} intensity={1.4} color="#22D3EE" />
        {/* Subtle White Fill Light (Front) */}
        <directionalLight position={[0, 2, 8]} intensity={0.45} color="#FFFFFF" />

        <Suspense fallback={null}>
          <group position={groupPosition} scale={groupScale}>
            <DeveloperCore isMobile={isMobile} />
            <TechOrbit isMobile={isMobile} />
          </group>
          <BackgroundParticles count={isMobile ? 50 : 140} />
        </Suspense>
      </Canvas>
    </div>
  );
}
