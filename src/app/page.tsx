"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPersonaSection } from "@/components/sections/about-persona-section";
import { SkillsMatrixSection } from "@/components/sections/skills-matrix-section";
import { ExperienceTimelineSection } from "@/components/sections/experience-timeline-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ResumeViewerSection } from "@/components/sections/resume-viewer-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { PersonaId } from "@/types/portfolio";

export default function HomePage() {
  const [currentPersona, setCurrentPersona] = useState<PersonaId>("bridge-builder");

  return (
    <div className="min-h-screen flex flex-col bg-[#080d1a]">
      {/* Sticky Global Navbar */}
      <Navbar
        currentPersona={currentPersona}
        onSelectPersona={(id: PersonaId) => setCurrentPersona(id)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onSelectPersona={(id) => setCurrentPersona(id as PersonaId)} />

        {/* Interactive Persona / About Me Section */}
        <AboutPersonaSection
          currentPersona={currentPersona}
          onPersonaChange={(id) => setCurrentPersona(id)}
        />

        {/* Skills Matrix */}
        <SkillsMatrixSection />

        {/* Experience Timeline */}
        <ExperienceTimelineSection />

        {/* Architecture Case Studies */}
        <CaseStudiesSection />

        {/* Interactive Resume Viewer */}
        <ResumeViewerSection />

        {/* Contact Form & Direct Details */}
        <ContactSection currentPersona={currentPersona} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
