"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      aria-labelledby="project-modal-title"
    >
      <div className="relative p-6 sm:p-10 bg-[#0B0D10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl text-slate-100 overflow-hidden">
        {/* Top ambient glow */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Close Button */}
        <div className="absolute top-5 right-5 z-20">
          <IconButton
            onClick={onClose}
            aria-label="Close project details"
            sx={{
              color: "rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.05)",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <X className="w-5 h-5" />
          </IconButton>
        </div>

        {/* Header Kicker */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm tracking-widest text-violet-400 font-semibold">
            {project.number} // CASE STUDY
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-white/5 border border-white/10 text-cyan-400">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h2 id="project-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-base text-slate-300 font-medium mb-6">
          {project.subtitle}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> Architectural Overview
            </h4>
            <p className="text-slate-200 bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl font-light">
              {project.detailedOverview}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-400" /> Engineering Architecture & Role
            </h4>
            <p className="text-slate-300 bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl font-light">
              <strong className="text-slate-100 font-medium">{project.role}:</strong> {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Engineering Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics / Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Measured Performance Impact
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-lg bg-violet-950/20 border border-violet-500/20 text-xs sm:text-sm text-violet-300 font-mono"
                >
                  ✦ {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-violet-600/30"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source</span>
            </a>
          )}
        </div>
      </div>
    </Dialog>
  );
}
