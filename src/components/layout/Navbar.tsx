"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "terminal", label: "Terminal" },
  { id: "journey", label: "Journey" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    150
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Centered Capsule Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 rounded-full transition-all duration-300",
            isScrolled
              ? "px-4 sm:px-6 py-2 bg-[#080A0D]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              : "px-5 sm:px-7 py-3 bg-[#080A0D]/50 backdrop-blur-lg border border-white/[0.08]"
          )}
        >
          {/* Logo Monogram */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1.5 focus:outline-none group pr-2"
          >
            <span className="font-mono font-black text-base sm:text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              ND<span className="text-violet-400">.</span>
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors",
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hire Me CTA Button */}
          <div className="flex items-center gap-2">
            <MagneticButton
              onClick={onOpenContact}
              strength={0.2}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-violet-600/25 transition-all"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 focus:outline-none transition-colors border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-6 rounded-2xl bg-[#0B0D10]/95 backdrop-blur-2xl border border-white/15 shadow-2xl"
          >
            <div className="flex flex-col gap-2 mb-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                      isActive
                        ? "bg-violet-950/40 text-violet-300 border border-violet-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Hire Me / Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
