"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/portfolio-data";
import { CaseStudy } from "@/types/portfolio";
import { Layers, ChevronRight, CheckCircle2, Cpu, BarChart3, X, ArrowUpRight } from "lucide-react";

export function CaseStudiesSection() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Architecture Deep Dives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Architecture Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Examining solutions to distributed micro-frontend bottlenecks, automated AST codemod migrations, and WCAG 2.1 design systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/90 transition-all shadow-xl group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {study.category}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {study.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  {study.subtitle}
                </p>

                {/* Overview excerpt */}
                <p className="text-sm text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                  {study.overview}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 mb-6 bg-slate-950/40 rounded-lg px-2">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-base font-bold font-mono text-cyan-400">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400">
                      +{study.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalStudy(study)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 px-4 text-xs font-semibold text-slate-200 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <span>Read Architectural Case</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Modal Dialog */}
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-8 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  {activeModalStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalStudy.title}
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {activeModalStudy.subtitle}
                </p>
              </div>

              {/* Metrics Highlights Banner */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                {activeModalStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Body sections */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Executive Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                    {activeModalStudy.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold font-mono text-red-400 uppercase tracking-wider mb-2">
                      The Architectural Challenge
                    </h4>
                    <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                      {activeModalStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider mb-2">
                      Engineered Solution
                    </h4>
                    <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                      {activeModalStudy.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    Verified Outcomes & Results
                  </h4>
                  <ul className="space-y-2 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                    {activeModalStudy.outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Stack & Runtime Ecosystem
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Action */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
