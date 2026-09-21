"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, Terminal, ShieldCheck, Database, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#080d1a] py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-950 border border-indigo-500/30 text-cyan-400">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-slate-500 text-[11px] font-mono">
                {PERSONAL_INFO.role}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Code2 className="h-3.5 w-3.5 text-indigo-400" />
              Next.js 15 & React 19
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Database className="h-3.5 w-3.5 text-cyan-400" />
              SQLite (better-sqlite3)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              WCAG 2.1 Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
