export type PersonaId = "bridge-builder" | "performance-specialist" | "system-architect";

export interface PersonaStat {
  label: string;
  value: string;
}

export interface Persona {
  id: PersonaId;
  title: string;
  subtitle: string;
  badge: string;
  focus: string;
  wordCount: number;
  text: string;
  highlights: string[];
  stats: PersonaStat[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: CaseStudyMetric[];
  techStack: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  personaViewed?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  year?: string;
  location: string;
}

