"use client";

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { X, Send, Copy, Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { personalInfo, socialsData } from "@/data/socials";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#7C3AED", "#22D3EE", "#A78BFA"],
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative p-6 sm:p-8 bg-[#0B0D10]/95 backdrop-blur-2xl border border-white/10 rounded-2xl text-slate-100 overflow-hidden">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-cyan-500/15 blur-3xl" />

        {/* Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <IconButton
            onClick={onClose}
            aria-label="Close modal"
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

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-violet-950/40 border border-violet-500/30 text-violet-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            DIRECT TRANSMISSION
          </div>
          <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Initiate Connection
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Looking for engineering collaboration, full-time roles, or enterprise consulting.
          </p>
        </div>

        {/* Quick Email Copy Banner */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-mono text-slate-300 select-all">{personalInfo.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 transition-colors border border-white/10"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-400 flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-100">Transmission Dispatched</h4>
            <p className="text-xs text-slate-400 mt-1">Thank you. I will review and reply within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name / Organization
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan / TechCorp"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Email Address <span className="text-violet-400">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Message / Brief <span className="text-violet-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, team opportunity, or timeline..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-violet-500 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Quick Socials Footer */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/[0.08]">
          <a
            href="https://github.com/nhutduy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://linkedin.com/in/nhutduy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </Dialog>
  );
}
