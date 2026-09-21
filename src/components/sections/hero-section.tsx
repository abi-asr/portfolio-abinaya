"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowRight, FileText, Mail, Layers, ShieldCheck, Zap } from "lucide-react";

interface HeroSectionProps {
  onSelectPersona?: (personaId: string) => void;
}

export function HeroSection({ onSelectPersona }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3.5 py-1.5 shadow-inner">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              6.5+ Yrs React Architecture
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300">
              <Layers className="h-3.5 w-3.5 text-indigo-400" />
              2+ Yrs Java Backend
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Anna University B.E. CS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-500">Resilient Frontends</span> & Enterprise Systems
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, Senior Software Engineer bridging client-side micro-frontend ecosystems with high-throughput enterprise backend platforms.
          </p>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">-25%</div>
              <div className="text-xs text-slate-400 mt-1">Page Load Time</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">20+</div>
              <div className="text-xs text-slate-400 mt-1">Modules Migrated</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">5+</div>
              <div className="text-xs text-slate-400 mt-1">Teams Design System</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300 font-mono">+20%</div>
              <div className="text-xs text-slate-400 mt-1">Release Cadence</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-500 hover:to-cyan-500 transition-all"
            >
              <span>Explore Career Timeline</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>Inspect Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-950/40 px-6 py-3.5 text-sm font-semibold text-indigo-300 hover:bg-indigo-900/60 transition-colors"
            >
              <Mail className="h-4 w-4 text-indigo-400" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
