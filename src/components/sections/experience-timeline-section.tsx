"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers } from "lucide-react";

export function ExperienceTimelineSection() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-xs font-mono text-indigo-300 mb-3">
            <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            A comprehensive record of enterprise engineering contributions, team leadership, and measurable performance gains.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.company} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/50 bg-slate-900 text-cyan-400 shadow-md group-hover:border-cyan-400 group-hover:scale-110 transition-all">
                <Briefcase className="h-3.5 w-3.5" />
              </div>

              {/* Date pill on the left for wide screens */}
              <div className="md:absolute md:-left-36 md:top-2 md:w-28 md:text-right hidden md:block">
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {exp.period}
                </span>
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 hover:border-slate-700 transition-colors shadow-lg">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wide uppercase">
                      {exp.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono gap-1">
                    <span className="flex items-center gap-1 md:hidden">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Measurable Achievements */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Key Deliverables & Verified Metrics
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Layers className="h-3 w-3 text-slate-400" />
                    Stack:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
