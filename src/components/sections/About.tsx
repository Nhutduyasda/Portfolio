"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Compass, Sparkles, Terminal, Code2, Cpu, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function About() {
  const [vietnamTime, setVietnamTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in GMT+7 (Vietnam)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setVietnamTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      <SectionTitle
        kicker="DIGITAL IDENTITY"
        title="WHO AM I"
        subtitle="Bridging disciplined software architecture with experiential frontend craft."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Core Narrative (Spans 2 cols on md/lg) */}
        <SpotlightCard className="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Full-Stack Engineering Philosophy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 tracking-tight">
              Architecting Resilient Enterprise Solutions
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              I specialize in bridging high-concurrency backend services with polished, modern web interfaces. Rather than treating frontend and backend as silos, I design end-to-end data flows with clean domain architecture in C# / .NET Core, type-safe APIs, and reactive React ecosystems.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-violet-400">#CleanArchitecture</span>
            <span>•</span>
            <span className="text-cyan-400">#Microservices</span>
            <span>•</span>
            <span className="text-indigo-400">#3DInteractive</span>
          </div>
        </SpotlightCard>

        {/* Card 2: 2+ Years Experience Metric */}
        <SpotlightCard className="flex flex-col justify-between" spotlightColor="rgba(34, 211, 238, 0.15)">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">EXPERIENCE</span>
            <Code2 className="w-4 h-4 text-cyan-400" />
          </div>

          <div className="my-6">
            <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-violet-400">
              2+
            </div>
            <div className="text-sm font-semibold tracking-wider uppercase text-slate-200 mt-1">
              YEARS BUILDING
            </div>
          </div>

          <p className="text-xs text-slate-400 font-light">
            Continuous enterprise production delivery, agile code sprints, and system design.
          </p>
        </SpotlightCard>

        {/* Card 3: Location & Live Clock */}
        <SpotlightCard className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">BASE LOCATION</span>
            <Globe className="w-4 h-4 text-violet-400" />
          </div>

          <div className="my-4">
            <div className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <span>Vietnam</span>
              <span className="text-base">🇻🇳</span>
            </div>
            <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Remote / Global</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">LOCAL TIME (ICT)</span>
            <span className="text-xs font-mono text-slate-200 font-bold tracking-wider">
              {vietnamTime || "13:30:00"}
            </span>
          </div>
        </SpotlightCard>

        {/* Card 4: Philosophy Quote (Spans 2 cols) */}
        <SpotlightCard className="md:col-span-2 flex flex-col justify-between" spotlightColor="rgba(167, 139, 250, 0.15)">
          <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Core Directive</span>
          </div>

          <blockquote className="my-3 text-lg sm:text-xl font-medium italic text-slate-200 leading-snug">
            &ldquo;Build products people enjoy using — engineered with surgical precision behind the scenes.&rdquo;
          </blockquote>

          <p className="text-xs text-slate-400 font-light">
            Engineering isn&apos;t just about making things function; it&apos;s about crafting seamless ergonomics, sub-100ms response times, and intuitive interfaces that reduce cognitive friction.
          </p>
        </SpotlightCard>

        {/* Card 5: Currently Exploring (Spans 2 cols on lg) */}
        <SpotlightCard className="md:col-span-1 lg:col-span-2 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Currently Exploring</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-2">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-bold text-slate-100">AI Agents</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Autonomous workflows & LLM tools</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-bold text-slate-100">3D WebGL</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Spatial UI & shader craft</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-bold text-slate-100">Enterprise Next.js</div>
              <div className="text-[11px] text-slate-400 mt-0.5">App Router at massive scale</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-500 mt-2">
            Always pushing the boundaries of what is possible on the web.
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
