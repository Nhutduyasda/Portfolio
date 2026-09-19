"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, CheckCircle, Flame, Star, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#7C3AED", "#22D3EE", "#A78BFA", "#F8FAFC"],
    });
  };

  const gradCard = achievementsData.find((a) => a.id === "grad-score");
  const otherCards = achievementsData.filter((a) => a.id !== "grad-score");

  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      <SectionTitle
        kicker="BENCHMARKS & HONORS"
        title="IMPACT & ACHIEVEMENTS"
        subtitle="Tangible evaluations demonstrating uncompromising standards in engineering execution."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Massive 9.9 Graduation Score Hero Card (Spans 6 or 7 cols on lg) */}
        {gradCard && (
          <div
            className="lg:col-span-7 cursor-pointer"
            onClick={triggerConfetti}
            onMouseEnter={triggerConfetti}
            data-cursor="pointer"
          >
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.25)"
              className="h-full flex flex-col justify-between border-violet-500/30 relative overflow-hidden"
            >
              {/* Background ambient light */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/40 text-violet-300 font-mono text-xs">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{gradCard.badge}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Hover for honors
                  </span>
                </div>

                <div className="my-6">
                  {/* Giant 9.9 number */}
                  <div className="text-7xl sm:text-8xl md:text-9xl font-black font-mono tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-200 to-cyan-400">
                    {gradCard.value}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-black tracking-wider uppercase text-slate-100 mt-2">
                    {gradCard.label}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-violet-400 mt-1">
                    {gradCard.sublabel}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {gradCard.description} Recognized for designing ShoeDocX with clean domain-driven architecture, resilient multi-department workflows, and exceptional UI ergonomics.
                </p>
              </div>
            </SpotlightCard>
          </div>
        )}

        {/* Supporting Achievement Cards (Spans 5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {otherCards.map((card) => (
            <SpotlightCard
              key={card.id}
              className="flex-1 flex flex-col justify-between"
              spotlightColor="rgba(34, 211, 238, 0.15)"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  {card.label}
                </span>
                <Award className="w-4 h-4 text-violet-400" />
              </div>

              <div className="my-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  {card.sublabel}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-2 pt-2 border-t border-white/[0.06]">
                {card.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
