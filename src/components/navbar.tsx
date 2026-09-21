"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Menu, X, Terminal, Cpu } from "lucide-react";
import { PERSONAL_INFO, PERSONAS } from "@/data/portfolio-data";
import { PersonaId } from "@/types/portfolio";

interface NavbarProps {
  currentPersona?: PersonaId;
  onSelectPersona?: (id: PersonaId) => void;
  activePersonaName?: string;
}

export function Navbar({ currentPersona, onSelectPersona, activePersonaName }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activePersonaObj = PERSONAS.find((p) => p.id === currentPersona);
  const personaDisplay = activePersonaName || activePersonaObj?.title || "The Bridge Builder";

  const navLinks = [
    { href: "#about", label: "About & Persona" },
    { href: "#skills", label: "Skills Matrix" },
    { href: "#experience", label: "Experience" },
    { href: "#case-studies", label: "Architecture Studies" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080d1a]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 text-left group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-md">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#080d1a]">
              <Terminal className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-100 text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.role}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-indigo-500/30 bg-indigo-950/40 text-indigo-300">
            <Cpu className="h-3 w-3 text-indigo-400" />
            <span>Lens: {personaDisplay}</span>
          </div>
          <a
            href="/api/resume/download"
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="/api/resume/download"
            className="flex sm:hidden items-center gap-1 rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-medium text-white"
          >
            <Download className="h-3.5 w-3.5" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080d1a] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="/api/resume/download"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
