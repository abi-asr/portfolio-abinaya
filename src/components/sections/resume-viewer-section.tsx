"use client";

import React, { useState } from "react";
import { Download, FileText, ExternalLink, Printer, CheckCircle, GraduationCap, Award, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function ResumeViewerSection() {
  const [activeTab, setActiveTab] = useState<"preview" | "summary">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/api/resume/download");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-xs font-mono text-indigo-300 mb-3">
            <FileText className="h-3.5 w-3.5 text-indigo-400" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Resume & Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Directly inspect, download, or review the verified professional resume for Abinaya Rajangam.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 mb-6 shadow-xl">
          {/* Tab Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Interactive Document Viewer
            </button>
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "summary"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Credentials & Executive Summary
            </button>
          </div>

          {/* Download & Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              title="Copy direct download link"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <ExternalLink className="h-3.5 w-3.5 text-slate-400" />}
              <span>{copied ? "Copied!" : "Share Link"}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              <span>Full Screen</span>
            </a>

            <a
              href="/api/resume/download"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-500 hover:to-cyan-500 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>

        {/* Tab Content: Document Viewer */}
        {activeTab === "preview" && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl">
            <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                ABINAYA_RAJANGAM_Resume_FE_2026.pdf (Verified Document)
              </span>
              <span>application/pdf</span>
            </div>
            <div className="w-full h-[650px] sm:h-[800px] bg-slate-950 flex flex-col items-center justify-center p-2">
              <object
                data="/resume.pdf"
                type="application/pdf"
                className="w-full h-full rounded-lg"
              >
                <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <FileText className="h-16 w-16 text-indigo-400" />
                  <div className="text-white font-semibold">
                    Preview not directly supported by this browser configuration.
                  </div>
                  <p className="text-xs text-slate-400 max-w-md">
                    You can view or download the complete original PDF file directly using the button below.
                  </p>
                  <a
                    href="/api/resume/download"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume (PDF)
                  </a>
                </div>
              </object>
            </div>
          </div>
        )}

        {/* Tab Content: Credentials & Summary */}
        {activeTab === "summary" && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-8 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Executive Summary</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-indigo-400" />
                  Education
                </h4>
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
                  <div className="text-white font-bold text-base">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-sm text-cyan-400 mt-1 font-mono">
                    {PERSONAL_INFO.education.institution}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Graduated {PERSONAL_INFO.education.year} • {PERSONAL_INFO.education.location}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-400" />
                  Key Qualifications & Certifications
                </h4>
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>6.5+ Years React Enterprise Ecosystem (v16 through v18)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>2+ Years Foundational Java Backend & JVM Services</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Webpack Module Federation Micro-Frontend Specialist</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>WCAG 2.1 AA Certified Design System Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
