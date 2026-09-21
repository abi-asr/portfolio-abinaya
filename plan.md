# Implementation Plan: Abinaya Rajangam - Personal Portfolio & Interactive Showcase

**Stack**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + Lucide Icons + SQLite (better-sqlite3) for Contact Messages / Inquiries  
**Estimated files**: 24 files  
**Reference Document**: `uploads/ABINAYA_RAJANGAM_Resume_FE_2026.pdf`

---

## 1. Executive Summary & Required "About Me" Blurbs
The portfolio is designed for Abinaya Rajangam, Senior Software Engineer with 6.5+ years of React experience and 2+ years of Java experience. The portfolio features an interactive persona switcher on the homepage allowing recruiters and technical leaders to toggle between 3 distinct, tailored "About Me" narratives (each strictly under 150 words).

### Blurb 1: The Bridge Builder
> **Focus**: Collaboration with backend teams, speaking both frontend and backend languages fluently.  
> **Word Count**: 118 words  
> **Exact Text**:  
> "I am a Senior Software Engineer with 6.5+ years of production experience mastering React and modern frontend systems, backed by 2+ years of foundational Java experience in enterprise environments. Because I speak both frontend client architecture and backend JVM languages fluently, I eliminate the friction that typically stalls cross-functional teams. Whether designing type-safe contract boundaries, coordinating REST/GraphQL API integration with backend services, or aligning state models across the stack, I serve as the collaborative anchor between UI engineering and backend infrastructure. At companies like Nielsen and Datamatics, I have bridged technical silos to accelerate release velocity, standardize reusable component libraries, and deliver enterprise-grade digital products that operate seamlessly end-to-end."

### Blurb 2: The Performance Specialist
> **Focus**: Full-stack optimization, data parsing, rendering performance, and end-to-end type safety.  
> **Word Count**: 119 words  
> **Exact Text**:  
> "With 6.5+ years building high-throughput React applications and 2+ years architecting Java backend systems, my engineering philosophy centers on relentless performance optimization and end-to-end type safety. Having led large-scale React 16-to-18 migrations that sliced page load times by 25% and bundle sizes by 18%, I target bottlenecks from data parsing through the DOM rendering cycle. My background in both Java services and TypeScript enables me to optimize API payloads, eliminate redundant network overhead by 25%, implement precision memoization, and enforce strict type contracts. I transform data-intensive web interfaces into responsive, accessible (WCAG 2.1), and resilient enterprise systems that maintain peak speed under heavy real-world loads."

### Blurb 3: The System Architect
> **Focus**: Building scalable, enterprise-grade web applications from database to DOM.  
> **Word Count**: 120 words  
> **Exact Text**:  
> "I am a Senior Software Engineer and Architect with 6.5+ years specializing in enterprise React architectures, complemented by 2+ years of Java enterprise application development. From database persistence and resilient API gateways to micro-frontends and client state, I design robust digital platforms built for scale, governance, and multi-team autonomy. At Nielsen, I architected a Module Federation micro-frontend platform decoupled across 3+ engineering teams with automated CI/CD quality gates, improving release cadence by 20%. Combining deep expertise in component system design, automated codemods, and distributed system ergonomics, I engineer software that stands the test of scale—delivering modular, WCAG 2.1-compliant, and future-proof enterprise software from database to DOM."

---

## 2. Portfolio Structure & Feature Set
Based strictly on `uploads/ABINAYA_RAJANGAM_Resume_FE_2026.pdf`:
1. **Hero Section**:
   - Name: Abinaya Rajangam
   - Title: Senior Software Engineer (Frontend Architecture & Enterprise Systems)
   - Highlight Metrics: 6.5+ yrs React, 2+ yrs Java, 25% load time reduction, 20+ modules migrated, 5+ teams component library adoption.
   - Fast Actions: "Explore Experience", "View Resume", "Get in Touch".
2. **Interactive "About Me" Persona Switcher**:
   - Real-time segmented control switching between *The Bridge Builder*, *The Performance Specialist*, and *The System Architect*.
   - Dynamic blurb display card with word count indicators, technical keyword tags, and focus highlights.
3. **Core Competencies & Skills Matrix**:
   - Structured according to the resume:
     - *Frontend*: React.js, Redux, JavaScript (ES6+), TypeScript, HTML5, CSS3, React Query, GraphQL
     - *Backend & Full-Stack Foundation*: Java, REST APIs, API Integration, JSON Contracts, Data Serialization
     - *Architecture*: Micro-frontends (Webpack Module Federation), Component-Based Architecture, Reusable Component Libraries, SPA Development
     - *Quality, Accessibility & Tools*: WCAG 2.1, Performance Optimization, Jest, React Testing Library, Webpack, Vite, Babel, GitHub Actions, CI/CD, JIRA, Jenkins, Figma, Chrome DevTools
4. **Experience Timeline (Detailed Career History directly from Resume)**:
   - **Nielsen** (12/2023 – 03/2026) | Senior Software Engineer
     - React 16 to 18 migration across 20+ modules via automated codemods; 18% bundle reduction & 25% page load time reduction.
     - Module Federation micro-frontend platform decoupling deployment pipelines across 3+ teams; 20% release velocity boost.
     - Memoization & lazy loading optimizations with Jest/RTL quality gates.
   - **Datamatics** (11/2022 – 11/2023) | Senior Software Engineer
     - Enterprise workflows in React, mentored 4 engineers (30% onboarding time reduction).
     - Standardized JIRA workflows (20% bug turnaround reduction).
     - WCAG 2.1 compliant reusable component library reducing duplicate code by 25%.
   - **Tarento Technologies** (07/2021 – 10/2022) | Software Engineer
     - UI component library adopted across 5+ teams, 30% reduction in interface development time.
     - Internal workflow automation yielding 30% efficiency gain.
     - API request optimization and redundant call reduction improving data fetch speed by 25%.
   - **Pixmonks Solutions** (07/2019 – 06/2021) | Software Engineer
     - E-commerce React platform with advanced filtering/search driving 25% revenue increase.
     - Inventory API integration automating stock tracking, reducing order processing by 20%.
5. **Featured Enterprise Projects / Architecture Case Studies**:
   - Case Study 1: Enterprise Micro-Frontend Architecture (Module Federation, Independent CI/CD, Shared Design System).
   - Case Study 2: Core React 18 Migration Engine (AST Codemods, Bundle Optimization, Zero Downtime).
   - Case Study 3: Enterprise Design System & WCAG 2.1 Accessibility Suite (Cross-team component ecosystem).
6. **Interactive Resume Viewer & Download**:
   - Embedded interactive modal and full-screen viewer for the verified PDF.
   - Direct download endpoint `/api/resume/download` serving the resume PDF.
7. **Contact Form & Local SQLite Message Persistence**:
   - SQLite-backed contact submission (`/api/contact`) with validation (name, email, message, subject, persona viewed).
   - Direct contact credentials (+91 99442 39651, abiseasha@gmail.com, Tamil Nadu, India, LinkedIn).

---

## 3. Data Model (`schema.sql`)
```sql
PRAGMA journal_mode=WAL;
PRAGMA foreign_keys=ON;

-- Inquiries and messages submitted via the portfolio contact form
CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  persona_viewed TEXT DEFAULT 'bridge-builder',
  created_at TEXT DEFAULT (datetime('now')),
  read_status INTEGER DEFAULT 0
);

-- Index for quick listing/auditing
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
```

---

## 4. API Routes Table
| Method | Path | Request Body | Response | Description |
|--------|------|-------------|----------|-------------|
| GET | `/api/messages` | — | `{ success: boolean, data: Message[] }` | Admin/auditing list of received contact inquiries |
| POST | `/api/contact` | `{ name, email, subject, message, personaViewed? }` | `{ success: boolean, message: string, id: string }` | Validate & persist contact inquiry to SQLite |
| GET | `/api/resume/download` | — | Binary PDF Stream (`application/pdf`) | Serves original resume PDF file directly with download headers |

---

## 5. Component Tree
```
RootLayout (`src/app/layout.tsx`)
├── Navbar (`src/components/navbar.tsx`) — Brand logo, navigation anchors, resume CTA
├── Main Page (`src/app/page.tsx`)
│   ├── HeroSection (`src/components/sections/hero-section.tsx`)
│   │   ├── MetricPills (6.5+ Yrs React, 2+ Yrs Java, -25% Load Time)
│   │   └── HeroActionButtons ("Get in Touch", "View Resume", "Case Studies")
│   ├── AboutPersonaSection (`src/components/sections/about-persona-section.tsx`)
│   │   ├── PersonaTabs (Bridge Builder / Performance Specialist / System Architect)
│   │   ├── BlurbDisplayCard (Active narrative text, word count indicator, technical keywords)
│   │   └── BioQuickFacts (Education: Anna University B.E. Computer Science, Location: Tamil Nadu, India)
│   ├── SkillsMatrixSection (`src/components/sections/skills-matrix-section.tsx`)
│   │   ├── SkillGroupCard (Frontend, Full-Stack & APIs, Architecture, Quality & Tools)
│   │   └── CompetencyHighlightBadges
│   ├── ExperienceTimelineSection (`src/components/sections/experience-timeline-section.tsx`)
│   │   ├── TimelineItem (Nielsen 2023-2026)
│   │   ├── TimelineItem (Datamatics 2022-2023)
│   │   ├── TimelineItem (Tarento Technologies 2021-2022)
│   │   └── TimelineItem (Pixmonks Solutions 2019-2021)
│   ├── ArchitectureCaseStudiesSection (`src/components/sections/case-studies-section.tsx`)
│   │   └── CaseStudyCard (Micro-frontend Federation, React 18 Codemod Migration, WCAG Design System)
│   ├── ResumeViewerSection (`src/components/sections/resume-viewer-section.tsx`)
│   │   ├── ResumeActionToolbar (Download PDF, View Modal, Print)
│   │   └── ResumePreviewEmbed (`/uploads/ABINAYA_RAJANGAM_Resume_FE_2026.pdf`)
│   └── ContactSection (`src/components/sections/contact-section.tsx`)
│       ├── ContactInfoCard (Email, Phone, Location, LinkedIn)
│       └── ContactForm (`src/components/contact-form.tsx` - client form + toast confirmation)
└── Footer (`src/components/footer.tsx`) — Copyright, tech stack credits, quick anchors
```

---

## 6. Implementation Phases
### Phase 1: Project Scaffolding & Configuration
- [ ] Task 1.1: Initialize `package.json` with Next.js 15, React 19, TypeScript, Tailwind CSS, `better-sqlite3`, `@types/better-sqlite3`, Lucide-react, clsx, tailwind-merge.
  - File: `package.json` (CREATE)
- [ ] Task 1.2: Setup TypeScript compiler config and Tailwind styling.
  - Files: `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs` (CREATE)
- [ ] Task 1.3: Configure Next.js server setup and static asset paths (copying `uploads/ABINAYA_RAJANGAM_Resume_FE_2026.pdf` to `public/resume.pdf` for direct browser delivery).
  - Files: `next.config.ts`, `public/resume.pdf` (CREATE/COPY)
- [ ] Task 1.4: Setup UI utility helpers (`cn()`) and base global CSS theme.
  - Files: `src/lib/utils.ts`, `src/app/globals.css` (CREATE)
- [ ] Task 1.5: Setup SQLite database client and table initializers.
  - Files: `src/lib/db.ts`, `schema.sql` (CREATE)

### Phase 2: Resume Content Data Layer & Types
- [ ] Task 2.1: Define canonical TypeScript interfaces for Experience, Skills, Persona Blurbs, Case Studies, and Contact Form submissions.
  - File: `src/types/portfolio.ts` (CREATE)
- [ ] Task 2.2: Create typed data provider with verbatim content from `ABINAYA_RAJANGAM_Resume_FE_2026.pdf` and the 3 requested persona blurbs.
  - File: `src/data/portfolio-data.ts` (CREATE)

### Phase 3: Core Navigation & Layout Components
- [ ] Task 3.1: Build application root layout with font configuration, metadata, and container styling.
  - File: `src/app/layout.tsx` (CREATE)
- [ ] Task 3.2: Build sticky header navbar with smooth-scroll section links, persona badge, and Resume action button.
  - File: `src/components/navbar.tsx` (CREATE)
- [ ] Task 3.3: Build portfolio footer with verified contact links and credentials.
  - File: `src/components/footer.tsx` (CREATE)

### Phase 4: Hero & Interactive "About Me" Blurb Switcher
- [ ] Task 4.1: Build Hero section showcasing headline metrics (6.5+ yrs React, 2+ yrs Java, 25% performance lift).
  - File: `src/components/sections/hero-section.tsx` (CREATE)
- [ ] Task 4.2: Build interactive 3-persona switcher component (*The Bridge Builder*, *The Performance Specialist*, *The System Architect*) with smooth active tab transitions, key badge highlights, and word count chips.
  - File: `src/components/sections/about-persona-section.tsx` (CREATE)

### Phase 5: Skills Matrix, Experience Timeline & Architecture Case Studies
- [ ] Task 5.1: Build Skills Matrix categorized into Frontend, Full-Stack Foundation, Micro-Frontends & Architecture, and Quality/Tools.
  - File: `src/components/sections/skills-matrix-section.tsx` (CREATE)
- [ ] Task 5.2: Build interactive Experience Timeline detailing achievements across Nielsen, Datamatics, Tarento Technologies, and Pixmonks Solutions.
  - File: `src/components/sections/experience-timeline-section.tsx` (CREATE)
- [ ] Task 5.3: Build Deep-Dive Architecture Case Studies section highlighting enterprise initiatives (Micro-frontend federation, React 18 migration, design system).
  - File: `src/components/sections/case-studies-section.tsx` (CREATE)

### Phase 6: Resume Viewer, Contact API & Persistence
- [ ] Task 6.1: Build Resume preview component with direct download button, PDF embed/modal viewer, and printable formatting.
  - File: `src/components/sections/resume-viewer-section.tsx` (CREATE)
- [ ] Task 6.2: Build Contact Form component with live client-side validation, submit states, and persona context tracking.
  - File: `src/components/contact-form.tsx` (CREATE)
- [ ] Task 6.3: Implement backend API handler `/api/contact` saving messages into SQLite with input sanitization and verification.
  - File: `src/app/api/contact/route.ts` (CREATE)
- [ ] Task 6.4: Implement backend API handler `/api/resume/download` serving the resume PDF attachment.
  - File: `src/app/api/resume/download/route.ts` (CREATE)
- [ ] Task 6.5: Assemble full portfolio page combining all sections with reactive scrolling.
  - File: `src/app/page.tsx` (CREATE)

### Phase 7: Verification & Testing
- [ ] Task 7.1: Unit & integration tests for contact message validation, persona blurb accuracy, and database persistence.
  - File: `tests/portfolio.test.ts` (CREATE)
- [ ] Task 7.2: Build and run verification (TypeScript check, Next.js build compilation, visual validation).
- [ ] Task 7.3: Comprehensive README.md with project overview, persona rationale, and setup instructions.
  - File: `README.md` (CREATE)
