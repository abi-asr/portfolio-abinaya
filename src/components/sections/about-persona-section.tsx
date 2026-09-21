"use client";

import React, { useState } from "react";
import { PERSONAS, PERSONAL_INFO } from "@/data/portfolio-data";
import { PersonaId } from "@/types/portfolio";
import { GitPullRequest, Gauge, Building2, CheckCircle2, Award, GraduationCap, MapPin, Sparkles, BookOpen } from "lucide-react";

interface AboutPersonaSectionProps {
  currentPersona: PersonaId;
  onPersonaChange: (id: PersonaId) => void;
}

export function AboutPersonaSection({ currentPersona, onPersonaChange }: AboutPersonaSectionProps) {
  const activePersona = PERSONAS.find((p) => p.id === currentPersona) || PERSONAS[0]!;

  const getPersonaIcon = (id: PersonaId) => {
    switch (id) {
      case "bridge-builder":
        return <GitPullRequest className="h-5 w-5" />;
      case "performance-specialist":
        return <Gauge className="h-5 w-5" />;
      case "system-architect":
        return <Building2 className="h-5 w-5" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-xs font-mono text-indigo-300 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Interactive Narrative Switcher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Lens: Select Your Candidate Perspective
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Recruiters, engineering directors, and architects look for different superpowers. Toggle the persona below to evaluate Abinaya Rajangam through your preferred lens.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PERSONAS.map((p) => {
            const isSelected = p.id === currentPersona;
            return (
              <button
                key={p.id}
                onClick={() => onPersonaChange(p.id)}
                className={`relative flex items-start gap-4 p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-slate-900 border-indigo-500 ring-1 ring-indigo-500/50 shadow-lg shadow-indigo-500/10"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isSelected
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {getPersonaIcon(p.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-sm font-bold truncate ${isSelected ? "text-white" : "text-slate-200"}`}>
                      {p.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {p.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Narrative & Deep-dive Display Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-0.5 text-xs font-semibold text-indigo-300">
                {activePersona.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {activePersona.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                Focus Area: {activePersona.focus}
              </p>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="relative mb-8">
            <div className="text-slate-200 text-base sm:text-lg leading-relaxed italic bg-slate-950/60 p-5 sm:p-6 rounded-xl border border-slate-800/80">
              &ldquo;{activePersona.text}&rdquo;
            </div>
          </div>

          {/* Persona Highlights & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Key Architectural Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activePersona.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-400" />
                Proven Impact Metrics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {activePersona.stats.map((stat, idx) => (
                  <div key={idx} className="rounded-lg bg-slate-950/60 border border-slate-800/90 p-3">
                    <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Quick Facts Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>B.E. Computer Science, Anna University (AAMEC)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>6.5+ Yrs React • 2+ Yrs Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
