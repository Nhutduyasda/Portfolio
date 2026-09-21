"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { GithubIcon } from "@/components/ui/Icons";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo } from "@/data/socials";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TECH_PILLS = [
  "React",
  "Next.js",
  "TypeScript",
  ".NET 8",
  "SQL Server",
  "Three.js",
  "AI",
];

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden isolate"
    >
      {/* Large Deep Ambient Glows Blending Canvas into Deep Space */}
      <div className="pointer-events-none absolute top-1/2 right-[12%] -translate-y-1/2 w-[750px] h-[750px] bg-violet-900/15 rounded-full blur-[170px]" />
      <div className="pointer-events-none absolute top-1/3 right-[4%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-900/10 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-20" />

      {/* Desktop Full-Bleed 3D Visual Layer (z-10 isolate) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 isolate overflow-hidden">
        <HeroScene eventSource={heroRef} />
      </div>

      {/* Left Readability Gradient Overlay Mask on Desktop (z-20) */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[56%] pointer-events-none z-20 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Narrative & Content Stream (z-30 isolate) */}
      <div className="relative z-30 isolate w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
        {/* Left Column: Typography & Narrative (Takes ~54% on desktop, relative z-30 isolate) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[54%] flex flex-col items-start pt-6 lg:pt-0 relative z-30 isolate"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>
          </motion.div>

          {/* Salutation */}
          <motion.div
            variants={itemVariants}
            className="text-slate-400 text-sm sm:text-base font-mono tracking-wide mb-2 flex items-center gap-2"
          >
            <span>Hello, I&apos;m</span>
            <span className="w-8 h-[1px] bg-white/20" />
          </motion.div>

          {/* Giant Clamped Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-3"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
              NHUT DUY
            </span>
          </motion.h1>

          {/* Title Banner */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                FULL-STACK DEVELOPER
              </span>
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest uppercase mt-1">
              Creative Developer & Systems Architect
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-8"
          >
            I build modern, scalable and immersive digital experiences. Bridging
            enterprise-grade reliability in .NET & distributed systems with
            high-end creative frontend engineering.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <MagneticButton
              onClick={scrollToWork}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-sm tracking-wide flex items-center gap-2 transition-all backdrop-blur-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </MagneticButton>

            <MagneticButton
              onClick={onOpenContact}
              className="px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium text-sm tracking-wide flex items-center gap-2 transition-all backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get In Touch</span>
            </MagneticButton>
          </motion.div>

          {/* Tech Specialization Pills */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              Specialized Ecosystem
            </span>
            <div className="flex flex-wrap gap-2">
              {TECH_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.07] text-slate-300 hover:border-violet-500/30 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile 3D Visual Layer (in-flow below text, z-10 isolate, hidden on desktop lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          className="lg:hidden w-full h-[360px] sm:h-[420px] relative z-10 isolate mt-6 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <HeroScene isMobileView />
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="relative z-20 mt-8 mb-2 flex flex-col items-center justify-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          SCROLL
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}
