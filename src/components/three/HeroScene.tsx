"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import DeveloperCore from "./DeveloperCore";
import TechOrbit from "./TechOrbit";
import BackgroundParticles from "./BackgroundParticles";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

function FallbackHero() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: "25s" }} />
        <div className="absolute inset-4 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.4)]">
          <span className="font-mono font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
            ND
          </span>
          <span className="text-[10px] font-mono tracking-widest text-cyan-400">CORE</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Test for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted || !hasWebGL || prefersReducedMotion) {
    return <FallbackHero />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px]">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#A78BFA" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#22D3EE" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />

        <Suspense fallback={null}>
          <DeveloperCore isMobile={isMobile} />
          <TechOrbit />
          <BackgroundParticles count={isMobile ? 50 : 120} />
        </Suspense>
      </Canvas>
    </div>
  );
}
