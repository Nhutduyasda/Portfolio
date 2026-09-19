"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Cpu, Server, Wrench, Sparkles, Layers, Terminal, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData } from "@/data/skills";
import { SkillItem } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Constellations", icon: Layers },
  { id: "Backend", label: "Backend", icon: Server },
  { id: "Frontend", label: "Frontend", icon: Cpu },
  { id: "AI & Computer Vision", label: "AI & Vision", icon: Sparkles },
  { id: "AI Development", label: "AI Development", icon: Terminal },
  { id: "Tools & Infrastructure", label: "Tools & Infra", icon: Wrench },
  { id: "Domain Knowledge", label: "Domain Knowledge", icon: Globe },
] as const;

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory
  );

  return (
    <section id="stack" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      <SectionTitle
        kicker="TECH UNIVERSE"
        title="ARSENAL & SPECIALIZATION"
        subtitle="A full-spectrum technology stack centered on enterprise architecture and immersive frontend execution."
      />

      {/* Central Hub Banner */}
      <div className="relative mb-12 p-8 rounded-3xl bg-gradient-to-r from-violet-950/30 via-slate-900/40 to-cyan-950/30 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-600/30 shrink-0">
            <Cpu className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              Core Identity
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
              FULL-STACK DEVELOPER
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Production-tested balance of distributed .NET systems & reactive modern WebGL frontends.
            </p>
          </div>
        </div>

        {/* Quick Summary Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300">
            .NET 8 Clean Arch
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
            Next.js App Router
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
            SQL Server & EF Core
          </span>
        </div>
      </div>

      {/* Category Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/50"
                  : "bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 border border-white/[0.08]"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Tech Constellation Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isAnyHovered = hoveredSkill !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <Tooltip
                key={skill.name}
                title={
                  <div className="p-1">
                    <div className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">
                      {skill.name} • {skill.experience}
                    </div>
                    <div className="text-[11px] text-slate-300 font-light leading-relaxed">
                      {skill.description}
                    </div>
                  </div>
                }
                arrow
                placement="top"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isDimmed ? 0.35 : 1,
                    scale: isHovered ? 1.03 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={cn(
                    "relative p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden group",
                    isHovered
                      ? "bg-[#0E1218] border-violet-500/50 shadow-[0_0_25px_rgba(124,58,237,0.25)]"
                      : "bg-[#080A0D]/70 border-white/[0.07] hover:border-white/15"
                  )}
                >
                  {/* Top Bar: Name and Core Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-white tracking-tight">
                      {skill.name}
                    </span>
                    {skill.isCore && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-violet-950/60 border border-violet-500/30 text-violet-300">
                        CORE
                      </span>
                    )}
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2 mb-4">
                    {skill.description}
                  </p>

                  {/* Level Progress Bar & Experience */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1.5">
                    <span className="capitalize">{skill.category}</span>
                    <span className="text-cyan-400">{skill.experience}</span>
                  </div>

                  <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={cn(
                        "h-full rounded-full transition-all duration-300",
                        isHovered
                          ? "bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          : "bg-gradient-to-r from-violet-600/70 to-indigo-600/70"
                      )}
                    />
                  </div>
                </motion.div>
              </Tooltip>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
