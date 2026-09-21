import { Persona, Experience, SkillCategory, CaseStudy } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Abinaya Rajangam",
  role: "Senior Software Engineer",
  tagline: "Frontend Architecture & Enterprise Systems",
  experienceYears: {
    react: "6.5+",
    java: "2+",
    overall: "6.5+",
  },
  email: "abiseasha@gmail.com",
  phone: "+91 99442 39651",
  location: "Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/abinaya-rajangam-662832102",
  linkedinDisplay: "linkedin.com/in/abinaya-rajangam-662832102",
  education: {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University (AAMEC)",
    year: "2017",
    location: "Tamil Nadu, India",
  },
  summary:
    "Senior Software Engineer with 6.5+ years of specialized React frontend development and 2+ years of Java enterprise foundation. Proven record architecting scalable micro-frontends, executing automated AST codemod migrations, designing WCAG 2.1 accessible design systems, and driving high-velocity team collaboration.",
};

export const PERSONAS: Persona[] = [
  {
    id: "bridge-builder",
    title: "The Bridge Builder",
    subtitle: "Cross-Stack Collaboration & Engineering Velocity",
    badge: "Cross-Functional Anchor",
    focus: "Collaboration with backend teams, speaking both frontend and backend languages fluently.",
    wordCount: 109,
    text: "I am a Senior Software Engineer with 6.5+ years of production experience mastering React and modern frontend systems, backed by 2+ years of foundational Java experience in enterprise environments. Because I speak both frontend client architecture and backend JVM languages fluently, I eliminate the friction that typically stalls cross-functional teams. Whether designing type-safe contract boundaries, coordinating REST/GraphQL API integration with backend services, or aligning state models across the stack, I serve as the collaborative anchor between UI engineering and backend infrastructure. At companies like Nielsen and Datamatics, I have bridged technical silos to accelerate release velocity, standardize reusable component libraries, and deliver enterprise-grade digital products that operate seamlessly end-to-end.",
    highlights: [
      "Translates complex backend API schemas into fluid UI state models",
      "Eliminates miscommunication between frontend and backend engineers",
      "Spearheaded multi-team component library adoption across 5+ teams",
      "Accelerated engineering onboarding time by 30% through mentorship",
    ],
    stats: [
      { label: "React Mastery", value: "6.5+ Yrs" },
      { label: "Java Foundation", value: "2+ Yrs" },
      { label: "Library Adoption", value: "5+ Teams" },
      { label: "Onboarding Gain", value: "+30%" },
    ],
  },
  {
    id: "performance-specialist",
    title: "The Performance Specialist",
    subtitle: "Full-Stack Optimization & Resilient Speed",
    badge: "Runtime & Network Tuner",
    focus: "Full-stack optimization, data parsing, rendering performance, and end-to-end type safety.",
    wordCount: 105,
    text: "With 6.5+ years building high-throughput React applications and 2+ years architecting Java backend systems, my engineering philosophy centers on relentless performance optimization and end-to-end type safety. Having led large-scale React 16-to-18 migrations that sliced page load times by 25% and bundle sizes by 18%, I target bottlenecks from data parsing through the DOM rendering cycle. My background in both Java services and TypeScript enables me to optimize API payloads, eliminate redundant network overhead by 25%, implement precision memoization, and enforce strict type contracts. I transform data-intensive web interfaces into responsive, accessible (WCAG 2.1), and resilient enterprise systems that maintain peak speed under heavy real-world loads.",
    highlights: [
      "Led React 16 to 18 upgrade cutting page load time by 25%",
      "Reduced production JavaScript bundle size by 18% via code splitting",
      "Optimized API fetching patterns, cutting redundant calls by 25%",
      "Strict WCAG 2.1 accessibility and 60 FPS rendering discipline",
    ],
    stats: [
      { label: "Load Time Reduction", value: "-25%" },
      { label: "Bundle Size Cut", value: "-18%" },
      { label: "Redundant Calls", value: "-25%" },
      { label: "Accessibility Tier", value: "WCAG 2.1" },
    ],
  },
  {
    id: "system-architect",
    title: "The System Architect",
    subtitle: "Enterprise Micro-Frontends & Distributed Ergonomics",
    badge: "Scale & Governance",
    focus: "Building scalable, enterprise-grade web applications from database to DOM.",
    wordCount: 106,
    text: "I am a Senior Software Engineer and Architect with 6.5+ years specializing in enterprise React architectures, complemented by 2+ years of Java enterprise application development. From database persistence and resilient API gateways to micro-frontends and client state, I design robust digital platforms built for scale, governance, and multi-team autonomy. At Nielsen, I architected a Module Federation micro-frontend platform decoupled across 3+ engineering teams with automated CI/CD quality gates, improving release cadence by 20%. Combining deep expertise in component system design, automated codemods, and distributed system ergonomics, I engineer software that stands the test of scale—delivering modular, WCAG 2.1-compliant, and future-proof enterprise software from database to DOM.",
    highlights: [
      "Architected Webpack Module Federation decoupled across 3+ teams",
      "Automated migration of 20+ legacy modules with AST codemods",
      "Boosted deployment cadence & release velocity by 20%",
      "Engineered reusable design token system reducing code duplication by 25%",
    ],
    stats: [
      { label: "Release Velocity", value: "+20%" },
      { label: "Modules Migrated", value: "20+" },
      { label: "Federated Teams", value: "3+ Teams" },
      { label: "Code Duplication", value: "-25%" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Nielsen",
    role: "Senior Software Engineer",
    period: "12/2023 – 03/2026",
    location: "Remote / Hybrid",
    summary:
      "Led high-impact architectural modernization across enterprise analytics platforms, micro-frontend federation, and automated framework migrations.",
    achievements: [
      "Spearheaded enterprise-wide React 16 to 18 migration across 20+ modules using automated AST codemods, slashing page load times by 25% and reducing bundle sizes by 18%.",
      "Architected a scalable micro-frontend architecture using Webpack Module Federation, decoupling release cycles across 3+ engineering teams and lifting release velocity by 20%.",
      "Implemented comprehensive memoization strategies (useMemo, useCallback, React.memo) and code-splitting, eliminating micro-stutters in heavy data-visualization dashboards.",
      "Established rigorous unit and integration testing standards with Jest and React Testing Library, achieving over 85% code coverage and securing automated CI/CD quality gates.",
    ],
    skills: ["React 18", "TypeScript", "Webpack Module Federation", "Micro-Frontends", "Jest", "React Testing Library", "CI/CD", "AST Codemods"],
  },
  {
    company: "Datamatics",
    role: "Senior Software Engineer",
    period: "11/2022 – 11/2023",
    location: "India",
    summary:
      "Engineered robust enterprise web applications, built WCAG 2.1 AA compliant design systems, and instituted high-velocity agile engineering practices.",
    achievements: [
      "Developed mission-critical web applications in React and Redux, standardizing modular patterns that lowered recurring maintenance overhead by 25%.",
      "Mentored and onboarded 4 junior and mid-level software engineers, creating comprehensive onboarding playbooks that cut ramp-up time by 30%.",
      "Engineered an accessible, WCAG 2.1-compliant design component library used across multi-product enterprise suites, eliminating redundant UI code by 25%.",
      "Collaborated with product managers to streamline JIRA workflows, sprint retrospectives, and triage pipelines, reducing bug turnaround times by 20%.",
    ],
    skills: ["React.js", "Redux", "TypeScript", "WCAG 2.1", "Enterprise UI Systems", "Agile & JIRA", "Mentorship"],
  },
  {
    company: "Tarento Technologies",
    role: "Software Engineer",
    period: "07/2021 – 10/2022",
    location: "India",
    summary:
      "Built cross-team component libraries, optimized RESTful data ingestion, and spearheaded internal process automation tooling.",
    achievements: [
      "Built and deployed a unified reusable UI component library adopted by 5+ cross-functional teams, driving a 30% reduction in new feature development cycle time.",
      "Architected internal administrative tools and process automations that eliminated manual workflows, generating 30% measurable operational efficiency.",
      "Optimized client-side RESTful API requests, deduplicating repetitive calls with intelligent client caching to increase data fetch speeds by 25%.",
      "Participated actively in sprint planning, code review rings, and release validation alongside distributed backend engineers.",
    ],
    skills: ["React.js", "JavaScript (ES6+)", "REST APIs", "Component Libraries", "Client Caching", "Git", "Jenkins"],
  },
  {
    company: "Pixmonks Solutions",
    role: "Software Engineer",
    period: "07/2019 – 06/2021",
    location: "India",
    summary:
      "Engineered customer-facing e-commerce web applications, inventory synchronization pipelines, and responsive user interfaces.",
    achievements: [
      "Engineered high-conversion e-commerce web applications using React, featuring faceted search and real-time filtering that powered a 25% increase in conversion/revenue.",
      "Integrated real-time inventory management APIs, automating stock tracking and reducing warehouse order processing cycle times by 20%.",
      "Ensured pixel-perfect, mobile-first responsive interfaces across 15+ target devices with zero-breakage cross-browser compatibility.",
      "Collaborated with backend engineers on JSON schema validation and structured error response contracts.",
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "E-Commerce", "Responsive Design"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Core & Architecture",
    description: "Production mastery across modern UI state, component models, and build runtimes.",
    skills: [
      { name: "React.js (16/17/18)", level: "Expert", featured: true },
      { name: "TypeScript", level: "Expert", featured: true },
      { name: "JavaScript (ES6+)", level: "Expert", featured: true },
      { name: "Redux / Redux Toolkit", level: "Advanced", featured: true },
      { name: "React Query / TanStack", level: "Advanced" },
      { name: "HTML5 & Semantic Web", level: "Expert" },
      { name: "CSS3 / Sass / Tailwind", level: "Advanced" },
      { name: "GraphQL & REST Clients", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Full-Stack Foundation",
    description: "Deep JVM enterprise foundation enabling seamless client-server contract synchronization.",
    skills: [
      { name: "Java (Enterprise Core)", level: "Proficient", featured: true },
      { name: "RESTful API Architecture", level: "Expert", featured: true },
      { name: "JSON & Data Serialization", level: "Expert" },
      { name: "API Contract Design", level: "Advanced", featured: true },
      { name: "Database Concepts & SQL", level: "Proficient" },
      { name: "Client-Server Error Contracts", level: "Advanced" },
    ],
  },
  {
    category: "Enterprise System Architecture",
    description: "Architecting large-scale, modular web platforms for multi-team autonomy.",
    skills: [
      { name: "Webpack Module Federation", level: "Advanced", featured: true },
      { name: "Micro-Frontend Systems", level: "Advanced", featured: true },
      { name: "Component-Based Design", level: "Expert", featured: true },
      { name: "Design Systems & Token Systems", level: "Advanced", featured: true },
      { name: "AST Codemods & Migrations", level: "Advanced" },
      { name: "SPA & Enterprise Portals", level: "Expert" },
    ],
  },
  {
    category: "Quality, Performance & Tooling",
    description: "Rigorous standards for accessibility, speed, testing, and continuous delivery.",
    skills: [
      { name: "WCAG 2.1 AA Accessibility", level: "Advanced", featured: true },
      { name: "Performance Optimization", level: "Expert", featured: true },
      { name: "Jest & RTL Unit Testing", level: "Advanced", featured: true },
      { name: "Webpack / Vite / Babel", level: "Advanced" },
      { name: "GitHub Actions & Jenkins CI", level: "Proficient" },
      { name: "JIRA & Agile Leadership", level: "Expert" },
      { name: "Chrome DevTools Profiling", level: "Expert" },
      { name: "Figma UI Collaboration", level: "Advanced" },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "micro-frontends-federation",
    title: "Module Federation Micro-Frontends",
    subtitle: "Decoupled Autonomous Deployments for Enterprise Analytics",
    category: "Architecture & Scale",
    overview:
      "At Nielsen, independent engineering teams were bottle-necked by a monolithic release pipeline. By introducing Webpack Module Federation, we decoupled the portal into independently deployable micro-frontends with a unified host container and shared runtime libraries.",
    challenge:
      "Multiple teams deploying simultaneously resulted in deployment collisions, bloated monolithic builds exceeding 4MB, and slow release cycles requiring whole-app regression tests.",
    solution:
      "Architected a Module Federation host application that asynchronously loads remote micro-apps at runtime. Configured shared singleton dependencies (React, ReactDOM, design tokens) to prevent duplicate execution, created dynamic error boundaries for fault isolation, and established automated CI/CD deployment pipelines per module.",
    outcomes: [
      "Accelerated team release velocity by 20% by enabling independent, zero-downtime micro-app deployments.",
      "Prevented cascade crashes with container-level error boundaries and graceful fallbacks.",
      "Maintained unified styling and session propagation seamlessly across decoupled boundaries.",
    ],
    metrics: [
      { label: "Release Velocity", value: "+20%" },
      { label: "Decoupled Teams", value: "3+ Teams" },
      { label: "Deployment Downtime", value: "0 ms" },
    ],
    techStack: ["Webpack 5 Module Federation", "React", "TypeScript", "GitHub Actions", "Docker"],
  },
  {
    id: "react18-ast-codemods",
    title: "React 18 Migration via AST Codemods",
    subtitle: "Automated Upgrade Across 20+ Production Enterprise Modules",
    category: "Performance & Modernization",
    overview:
      "Modernized Nielsen's legacy enterprise codebase from React 16 to React 18 across 20+ modules without disruption to ongoing product roadmap releases.",
    challenge:
      "Manual refactoring of deprecated lifecycle hooks, ReactDOM rendering APIs, and unbatched state updates across 20+ distinct enterprise modules would have required months of error-prone engineering effort.",
    solution:
      "Authored automated AST codemods using jscodeshift to parse and transform deprecated lifecycle methods into modern functional hooks and React 18 createRoot APIs. Sequenced rolling phased rollouts backed by Jest and React Testing Library coverage validation.",
    outcomes: [
      "Slashed average initial page load time by 25% and trimmed bundle footprint by 18%.",
      "Unlocked React 18 automatic batching and concurrent capabilities across data-heavy analytics views.",
      "Completed migration across 20+ modules in weeks rather than quarters with zero production regressions.",
    ],
    metrics: [
      { label: "Page Load Reduction", value: "-25%" },
      { label: "Bundle Size Cut", value: "-18%" },
      { label: "Modules Migrated", value: "20+" },
    ],
    techStack: ["React 18", "jscodeshift (AST)", "Jest", "React Testing Library", "TypeScript"],
  },
  {
    id: "design-system-wcag",
    title: "Enterprise Design System & WCAG 2.1",
    subtitle: "Accessible Component Library Adopted Across 5+ Products",
    category: "Design Systems & Quality",
    overview:
      "Created and rolled out an accessible, reusable React component ecosystem at Datamatics and Tarento that achieved 100% WCAG 2.1 AA compliance and eliminated UI duplication.",
    challenge:
      "Inconsistent UI patterns, redundant code across disparate products, and accessibility audit failures that posed compliance risks in enterprise tenders.",
    solution:
      "Engineered an accessible design system with atomic tokens (spacing, typography, color contrast, focus rings), keyboard-first navigation hooks, screen-reader ARIA announcements, and automated axe-core accessibility unit tests.",
    outcomes: [
      "Eliminated redundant UI code across products by 25%.",
      "Cut feature engineering cycle time across 5+ engineering teams by 30%.",
      "Achieved full compliance with WCAG 2.1 Level AA accessibility mandates.",
    ],
    metrics: [
      { label: "Code Duplication", value: "-25%" },
      { label: "Dev Cycle Time", value: "-30%" },
      { label: "Adopting Teams", value: "5+ Teams" },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "WCAG 2.1 AA", "axe-core", "Figma Tokens"],
  },
];
