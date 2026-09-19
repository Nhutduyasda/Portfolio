"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo, socialsData } from "@/data/socials";

interface ContactProps {
  onOpenContact: () => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-violet-900/20 via-cyan-900/10 to-transparent rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          COMMENCE COLLABORATION
        </div>

        {/* Massive Typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono text-slate-400 font-light tracking-wide mb-3">
          HAVE AN IDEA?
        </h2>

        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400 mb-10">
          LET&apos;S BUILD SOMETHING AMAZING.
        </div>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Available for senior full-stack roles, architectural design, and high-impact digital experiences. Let&apos;s turn complex technical requirements into elegant digital realities.
        </p>

        {/* Primary Magnetic CTA */}
        <div className="mb-14">
          <MagneticButton
            onClick={onOpenContact}
            strength={0.3}
            className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-base sm:text-lg tracking-wider shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-3"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </div>

        {/* Quick Email Copy & Direct Social Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          {/* Email Click Copy */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080A0D]/80 hover:bg-white/10 border border-white/10 text-slate-200 transition-all backdrop-blur-md cursor-pointer group"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="font-medium">{personalInfo.email}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 group-hover:text-white">
              {copied ? "COPIED!" : "COPY"}
            </span>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/nhutduy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080A0D]/80 hover:bg-white/10 border border-white/10 text-slate-200 transition-all backdrop-blur-md"
          >
            <GithubIcon className="w-4 h-4 text-violet-400" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nhutduy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080A0D]/80 hover:bg-white/10 border border-white/10 text-slate-200 transition-all backdrop-blur-md"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/nhutduy_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080A0D]/80 hover:bg-white/10 border border-white/10 text-slate-200 transition-all backdrop-blur-md"
          >
            <Send className="w-4 h-4 text-indigo-400" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
