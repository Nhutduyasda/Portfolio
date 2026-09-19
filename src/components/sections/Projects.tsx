"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle, Layers, ShieldCheck, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectModal from "@/components/ui/ProjectModal";
import MagneticButton from "@/components/ui/MagneticButton";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

// High-tech CSS / SVG Interactive Mockup Visuals for each project
function ProjectPreviewMockup({ project }: { project: Project }) {
  if (project.id === "shoedocx") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#0B0D12] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-500/10 opacity-70 pointer-events-none" />

        {/* Mock Window Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              ShoeDocX // Enterprise Document Portal
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[10px] text-emerald-300">
            RBAC ACTIVE
          </span>
        </div>

        {/* Mock Document Grid / Workflow UI */}
        <div className="my-4 space-y-2.5 relative z-10 font-sans">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-300 flex items-center justify-center font-mono text-xs">
                DOC
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">ISO-9001_Audit_Manifest_v3.pdf</div>
                <div className="text-[10px] text-slate-400 font-mono">Dept: Operations • Encrypted 256-bit</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-[10px] text-violet-300 font-mono">
              APPROVED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-300 flex items-center justify-center font-mono text-xs">
                XLS
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Q3_Production_Throughput_Raw.xlsx</div>
                <div className="text-[10px] text-slate-400 font-mono">Dept: Supply Chain • OCR Parsed</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono">
              INDEXED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center font-mono text-xs">
                SEC
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Executive_Board_Authorization_2026.pdf</div>
                <div className="text-[10px] text-slate-400 font-mono">Digital Signature • 4/4 Verified</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-amber-950/60 border border-amber-500/30 text-[10px] text-amber-300 font-mono">
              IN REVIEW
            </span>
          </div>
        </div>

        {/* Mock Footer Stats */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clean Architecture .NET 8</span>
          </span>
          <span className="font-mono text-cyan-400">Indexed: 142,890 Files</span>
        </div>
      </div>
    );
  }

  if (project.id === "aetheros") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#080B10] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/15 via-transparent to-violet-600/15 opacity-70 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              AetherOS // Spatial Cloud Telemetry
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            60 FPS STREAM
          </span>
        </div>

        {/* 3D Telemetry Simulation Graphics */}
        <div className="my-6 relative z-10 flex items-center justify-center">
          <div className="relative w-48 h-40 flex items-center justify-center">
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-4 border border-violet-500/30 rounded-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              <Activity className="w-6 h-6 text-cyan-300" />
            </div>
            <div className="absolute top-0 right-2 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-cyan-300">
              CLUSTER A: 99.98%
            </div>
            <div className="absolute bottom-1 left-2 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-violet-300">
              LATENCY: 4.2ms
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span>Three.js + WebSockets Go</span>
          <span className="text-violet-400 font-mono">AI Anomaly Scanner: NORMAL</span>
        </div>
      </div>
    );
  }

  // Fallback / Standard Graphic for OmniStore or Nexus
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#090C12] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
            {project.title} // Architecture Console
          </span>
        </div>
        <span className="text-[10px] text-violet-400">{project.category}</span>
      </div>

      <div className="my-6 space-y-3 relative z-10 font-sans">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-slate-300">{project.highlights[0] || "High-throughput pipeline"}</span>
          <span className="font-mono text-[10px] text-cyan-400">99.99% Uptime</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-slate-300">{project.highlights[1] || "Zero latency sync"}</span>
          <span className="font-mono text-[10px] text-violet-400">Optimized</span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
        <span>{project.techStack.slice(0, 3).join(" • ")}</span>
        <span className="text-cyan-400">Production Ready</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      <SectionTitle
        kicker="SELECTED WORK"
        title="FEATURED PROJECTS"
        subtitle="End-to-end enterprise architectures, high-performance systems, and experimental digital identities."
      />

      {/* Projects Showcase Stream */}
      <div className="space-y-20 sm:space-y-28">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                isEven ? "lg:grid-flow-dense" : ""
              )}
            >
              {/* Text Side (6 cols) */}
              <div className={cn("lg:col-span-6 flex flex-col items-start", isEven ? "lg:col-start-7" : "")}>
                {/* Number & Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm tracking-widest text-violet-400 font-bold">
                    {project.number}
                  </span>
                  <span className="w-6 h-[1px] bg-white/20" />
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-white/[0.04] border border-white/10 text-cyan-400">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 tracking-tight mb-2">
                  {project.title}
                </h3>
                <h4 className="text-sm sm:text-base font-medium text-slate-400 mb-4">
                  {project.subtitle}
                </h4>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 w-full">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2 shadow-lg shadow-violet-600/30 cursor-pointer"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {project.githubUrl && (
                    <MagneticButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source</span>
                    </MagneticButton>
                  )}
                </div>
              </div>

              {/* Preview Graphic Side (6 cols) */}
              <div
                className={cn(
                  "lg:col-span-6 w-full cursor-pointer transition-transform duration-500 hover:scale-[1.02]",
                  isEven ? "lg:col-start-1" : ""
                )}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
              >
                <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-violet-500/20 via-white/5 to-cyan-500/20 shadow-2xl hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] transition-shadow duration-500">
                  <ProjectPreviewMockup project={project} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
