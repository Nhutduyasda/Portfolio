"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Award, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
      <SectionTitle
        kicker="TRAJECTORY"
        title="MY JOURNEY"
        subtitle="The chronological evolution of technical discipline, production delivery, and engineering milestones."
      />

      <div className="relative pl-6 sm:pl-10">
        {/* Glowing Dynamic Vertical Spine Line */}
        <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent shadow-[0_0_12px_rgba(124,58,237,0.5)]" />

        <div className="space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => {
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative group"
              >
                {/* Node Milestone Dot on Spine */}
                <div
                  className={cn(
                    "absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center",
                    item.isCurrent
                      ? "bg-cyan-400 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                      : "bg-[#080A0D] border-violet-400 shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                  )}
                >
                  {item.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#080A0D]/80 border border-white/[0.08] backdrop-blur-xl group-hover:border-white/20 transition-all duration-300">
                  {/* Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-slate-300">
                        {item.tag}
                      </span>
                    </div>

                    {item.score && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <Award className="w-3.5 h-3.5" />
                        <span>SCORE: {item.score}</span>
                      </div>
                    )}

                    {item.badge && !item.score && (
                      <span className="px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 font-mono text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-slate-400 mb-4">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
