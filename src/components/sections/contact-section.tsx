"use client";

import React from "react";
import { ContactForm } from "@/components/contact-form";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { PersonaId } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Clock, ShieldCheck } from "lucide-react";

interface ContactSectionProps {
  currentPersona?: PersonaId;
}

export function ContactSection({ currentPersona = "bridge-builder" }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-300 mb-3">
            <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start an Architectural Conversation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Open to senior engineering roles, frontend architect positions, and strategic consulting. Messages are stored securely via the local SQLite persistence layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to connect directly via email, phone, or LinkedIn for interview schedules or technical discussions.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Email Address</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Phone & WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.linkedinDisplay}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500">Location</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status pills */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Senior / Staff Roles & Advisory</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  <span>Standard Response Time: &lt; 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Inquiries will be automatically associated with the active persona perspective ({currentPersona}) and saved to the application database.
                </p>
              </div>

              <ContactForm currentPersona={currentPersona} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
