# Abinaya Rajangam - Senior Software Engineer Portfolio & Interactive Showcase

A production-grade portfolio and interactive engineering showcase for **Abinaya Rajangam**, Senior Software Engineer with **6.5+ years of React** and **2+ years of Java** experience.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **SQLite (better-sqlite3)**.

---

## 🌟 Key Features

### 1. Interactive 3-Persona "About Me" Switcher
Recruiters and engineering leaders can dynamically explore tailored narratives highlighting Abinaya's technical strengths (all strictly under 150 words):
- **The Bridge Builder** (109 words): Highlights cross-stack fluency across React and JVM/Java backend architectures, eliminating engineering silos, aligning API contracts, and accelerating release velocity.
- **The Performance Specialist** (105 words): Focuses on full-stack runtime optimization, AST codemod migrations (React 16 to 18 with 25% load time and 18% bundle reduction), precision memoization, and strict WCAG 2.1 compliance.
- **The System Architect** (106 words): Highlights enterprise Webpack Module Federation micro-frontends across 3+ teams, automated CI/CD quality gates, and scalable design system token architectures.

### 2. Authentic Resume Data Representation
- **Education**: B.E. Computer Science, Anna University (Chennai, India)
- **Location**: Tamil Nadu, India | **Email**: abiseasha@gmail.com | **Phone**: +91 99442 39651
- **Career History**:
  - **Nielsen** (12/2023 – 03/2026) | Senior Software Engineer
  - **Datamatics** (11/2022 – 11/2023) | Senior Software Engineer
  - **Tarento Technologies** (07/2021 – 10/2022) | Software Engineer
  - **Pixmonks Solutions** (07/2019 – 06/2021) | Software Engineer

### 3. Deep-Dive Enterprise Architecture Case Studies
- **Enterprise Micro-Frontend Platform (Module Federation)**: Decoupled independent deployment pipelines across 3+ engineering teams, improving release cadence by 20%.
- **Core React 18 Migration Engine (AST Codemods)**: Automated codemods migrating 20+ enterprise modules, slashing page load times by 25% and bundle sizes by 18%.
- **Enterprise Design System & WCAG 2.1 Accessibility Suite**: Reusable accessible UI components adopted across 5+ teams, cutting duplicate UI code by 25%.

### 4. Interactive Resume Viewer & Download
- Integrated modal and PDF embed preview of verified resume.
- Direct download endpoint at `/api/resume/download` serving `Abinaya_Rajangam_Resume.pdf`.

### 5. Persistent Contact Form with SQLite Storage
- Client-side validated form tracking the recruiter's active persona lens.
- Backend endpoint at `/api/contact` persisted using SQLite (`contact.db` with `better-sqlite3`).
- Auditing endpoint `/api/messages` to query submitted inquiries.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js 20+ / 25+)
- npm 9+

### Installation
```bash
# Install dependencies
npm install --legacy-peer-deps
```

### Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Running Tests
```bash
npm test
```

### Type Checking
```bash
npx tsc --noEmit
```

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15.1 (App Router)
- **Language**: TypeScript 5.7 (Strict Mode)
- **Styling**: Tailwind CSS 3.4 with custom dark slate/indigo/cyan theme
- **Icons**: Lucide React
- **Database**: SQLite (via `better-sqlite3` with WAL mode & foreign keys)
- **Testing**: Vitest 2.1
- **Deployment Ready**: Self-contained SQLite database file with automatic table initialization on launch.

