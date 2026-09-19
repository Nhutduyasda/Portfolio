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
              ShoeDocX // VNACCS Customs & OCR Hub
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[10px] text-emerald-300">
            VNACCS VERIFIED
          </span>
        </div>

        {/* Mock Document Grid / Workflow UI */}
        <div className="my-4 space-y-2.5 relative z-10 font-sans">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-300 flex items-center justify-center font-mono text-xs">
                INV
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Commercial_Invoice_CI-88920.pdf</div>
                <div className="text-[10px] text-slate-400 font-mono">Incoterms: FOB Haiphong • OCR Extracted</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-[10px] text-violet-300 font-mono">
              MATCHED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-300 flex items-center justify-center font-mono text-xs">
                PKL
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">Export_Packing_List_PL-4021.xlsx</div>
                <div className="text-[10px] text-slate-400 font-mono">Gross Wt: 14,200 kg • Auto-Validated</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono">
              CLEARED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-300 flex items-center justify-center font-mono text-xs">
                CUS
              </div>
              <div>
                <div className="text-xs font-bold text-slate-200">VNACCS_Customs_Declaration_Manifest.xml</div>
                <div className="text-[10px] text-slate-400 font-mono">Single Window API • Channel: Green</div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-300 font-mono">
              SUBMITTED
            </span>
          </div>
        </div>

        {/* Mock Footer Stats */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Graduation Project: 9.9 / 10 Score</span>
          </span>
          <span className="font-mono text-cyan-400">OCR Accuracy: 99.4%</span>
        </div>
      </div>
    );
  }

  if (project.id === "snapconvert") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#080B10] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/15 via-transparent to-violet-600/15 opacity-70 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              SnapConvert // Pipeline Telemetry
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            SignalR Active
          </span>
        </div>

        <div className="my-4 space-y-3 relative z-10 font-sans">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-200">raw_render_4k.png ➔ WebP (Quality 90)</span>
              <span className="text-[10px] font-mono text-emerald-400">100% Uploaded</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-1.5">
              <span>S3 Bucket: s3://snapconvert-assets/</span>
              <span>Reduced: -78.4%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-200">hero_asset_bundle.zip (84 images)</span>
              <span className="text-[10px] font-mono text-cyan-400">SignalR Worker: 84/84</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-full h-full bg-cyan-400" />
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span>.NET 8 Web API + AWS S3</span>
          <span className="text-cyan-400 font-mono">Latency: 12ms</span>
        </div>
      </div>
    );
  }

  if (project.id === "testify") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#0B0A12] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/15 via-transparent to-indigo-600/15 opacity-70 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              Testify // AI Test Orchestrator
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30 text-[10px] text-violet-300">
            SendGrid Active
          </span>
        </div>

        <div className="my-4 space-y-2.5 relative z-10 font-sans">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-200">TC-104: Auth JWT Expiry Edge Case</div>
              <div className="text-[10px] text-slate-400 font-mono">AI Generated • 6 Assertions Evaluated</div>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-300 font-mono">
              PASSED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-200">TC-105: SendGrid Magic Link Verification</div>
              <div className="text-[10px] text-slate-400 font-mono">Transactional Dispatch • 99.8% Delivery</div>
            </div>
            <span className="px-2 py-1 rounded bg-violet-950/60 border border-violet-500/30 text-[10px] text-violet-300 font-mono">
              DELIVERED
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span>AI Spec Parser + REST API</span>
          <span className="text-violet-400 font-mono">Automated QA Coverage: 92%</span>
        </div>
      </div>
    );
  }

  if (project.id === "dussmann-meal") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#090C12] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              DussMann Meal // Kiosk Auth Terminal
            </span>
          </div>
          <span className="text-[10px] text-cyan-400">Multi-Tenant Kiosk</span>
        </div>

        <div className="my-4 space-y-2.5 relative z-10 font-sans">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-200">Terminal Kiosk #03 (Canteen Hall B)</div>
              <div className="text-[10px] text-slate-400 font-mono">Department: Engineering • Subsidy Applied</div>
            </div>
            <span className="px-2 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] text-cyan-300 font-mono">
              AUTHENTICATED
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-200">Kitchen Production Manifest</div>
              <div className="text-[10px] text-slate-400 font-mono">1,450 Meals Confirmed • Shift A</div>
            </div>
            <span className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-300 font-mono">
              IN PREPARATION
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span>ASP.NET Core Multi-Tenant</span>
          <span className="text-cyan-400">Zero-Wait Checkin</span>
        </div>
      </div>
    );
  }

  if (project.id === "viberemote") {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#0D0B08] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
              VibeRemote // Telegram AI Mesh
            </span>
          </div>
          <span className="text-[10px] text-amber-400">Telegram Bot Online</span>
        </div>

        <div className="my-4 space-y-2.5 relative z-10 font-sans">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="text-[11px] font-mono text-cyan-300">user@telegram: /dispatch --model dino-vit --run</div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              [SignalR Socket] Command routed to Local Worker Daemon (C# Windows Service)
            </div>
            <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
              &gt;&gt; AI Task executed. Response echoed back to Telegram in 180ms.
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
          <span>C# + Telegram API + SignalR</span>
          <span className="text-amber-400">Duplex Socket Mesh</span>
        </div>
      </div>
    );
  }

  // Fallback for Vietnamese Handwriting Recognition or others
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] p-4 sm:p-6 bg-[#080D0A] rounded-2xl border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium">
            Vietnamese OCR // CNN + DINO ViT
          </span>
        </div>
        <span className="text-[10px] text-emerald-400">PyTorch Edge</span>
      </div>

      <div className="my-4 space-y-2.5 relative z-10 font-sans">
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div className="text-xs font-bold text-slate-200">Diacritic Tokenizer: [nghiên cứu] [phát triển]</div>
          <div className="text-[10px] text-slate-400 font-mono mt-1">
            CNN Spatial Features ➔ DINO ViT Attention Maps
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-mono text-emerald-300">Confidence: 98.7%</span>
            <span className="text-white/20">•</span>
            <span className="text-[10px] font-mono text-slate-400">Offline Inference: 35ms</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
        <span>Python • CNN • DINO Vision Transformers</span>
        <span className="text-emerald-400 font-mono">Offline Ready</span>
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
