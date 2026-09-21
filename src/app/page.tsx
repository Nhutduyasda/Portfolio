"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import TerminalSection from "@/components/sections/Terminal";
import Journey from "@/components/sections/Journey";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import ContactModal from "@/components/ui/ContactModal";
import CustomCursor from "@/components/ui/CustomCursor";
import InteractiveStarfield from "@/components/ui/InteractiveStarfield";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-violet-600/30 selection:text-white">
      {/* Global Interactive Starfield Canvas (Fixed Background) */}
      <InteractiveStarfield />

      {/* Custom Precision & Dynamic Spring Cursor (Desktop only) */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Single-Page Content Stream */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <About />
        <Projects />
        <TechStack />
        <TerminalSection onOpenContact={() => setContactOpen(true)} />
        <Journey />
        <Achievements />
        <Contact onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* Minimal Modern Footer */}
      <Footer />

      {/* Interactive Contact & Hire Modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
