import { describe, it, expect, beforeEach } from "vitest";
import { PERSONAS, EXPERIENCES, PERSONAL_INFO } from "@/data/portfolio-data";
import { insertContactMessage, getAllContactMessages } from "@/lib/db";

describe("Portfolio Data & Narrative Integrity", () => {
  it("verifies all three persona blurbs are strictly under 150 words", () => {
    expect(PERSONAS).toHaveLength(3);

    for (const persona of PERSONAS) {
      const words = persona.text.trim().split(/\s+/);
      expect(words.length).toBeLessThanOrEqual(150);
      expect(words.length).toBeGreaterThan(50);
      // Check reported word count aligns with actual count within tolerance
      expect(Math.abs(words.length - persona.wordCount)).toBeLessThanOrEqual(5);
    }
  });

  it("verifies The Bridge Builder specific narrative", () => {
    const bridgeBuilder = PERSONAS.find((p) => p.id === "bridge-builder");
    expect(bridgeBuilder).toBeDefined();
    expect(bridgeBuilder?.text).toContain("Senior Software Engineer with 6.5+ years of production experience");
    expect(bridgeBuilder?.text).toContain("2+ years of foundational Java experience");
    expect(bridgeBuilder?.text).toContain("Nielsen and Datamatics");
  });

  it("verifies The Performance Specialist specific narrative", () => {
    const perf = PERSONAS.find((p) => p.id === "performance-specialist");
    expect(perf).toBeDefined();
    expect(perf?.text).toContain("React 16-to-18 migrations");
    expect(perf?.text).toContain("sliced page load times by 25%");
    expect(perf?.text).toContain("bundle sizes by 18%");
  });

  it("verifies The System Architect specific narrative", () => {
    const architect = PERSONAS.find((p) => p.id === "system-architect");
    expect(architect).toBeDefined();
    expect(architect?.text).toContain("Module Federation micro-frontend platform");
    expect(architect?.text).toContain("improving release cadence by 20%");
  });

  it("verifies all 4 enterprise companies are present in Experience timeline", () => {
    const companyNames = EXPERIENCES.map((e) => e.company);
    expect(companyNames).toContain("Nielsen");
    expect(companyNames).toContain("Datamatics");
    expect(companyNames).toContain("Tarento Technologies");
    expect(companyNames).toContain("Pixmonks Solutions");
  });

  it("verifies personal contact details", () => {
    expect(PERSONAL_INFO.name).toBe("Abinaya Rajangam");
    expect(PERSONAL_INFO.email).toBe("abiseasha@gmail.com");
    expect(PERSONAL_INFO.phone).toContain("99442 39651");
    expect(PERSONAL_INFO.education.institution).toContain("Anna University");
  });
});

describe("SQLite Message Persistence Layer", () => {
  it("inserts and retrieves a contact message correctly", () => {
    const testMsg = {
      name: "Engineering Recruiter",
      email: "recruiter@enterprise.com",
      subject: "Staff Frontend Architect Role",
      message: "We were impressed by your Module Federation micro-frontend case study.",
      personaViewed: "system-architect",
    };

    const result = insertContactMessage(testMsg);
    expect(result.success).toBe(true);
    expect(result.id).toBeDefined();

    const allMessages = getAllContactMessages();
    expect(Array.isArray(allMessages)).toBe(true);

    const found = allMessages.find((m) => m.id === result.id);
    expect(found).toBeDefined();
    expect(found?.name).toBe(testMsg.name);
    expect(found?.email).toBe(testMsg.email);
    expect(found?.subject).toBe(testMsg.subject);
    expect(found?.persona_viewed).toBe("system-architect");
  });

  it("handles missing optional personaViewed with default fallback", () => {
    const testMsg = {
      name: "Jane Doe",
      email: "jane@company.com",
      subject: "General Inquiry",
      message: "Hello Abinaya, let's connect!",
    };

    const result = insertContactMessage(testMsg);
    expect(result.success).toBe(true);

    const allMessages = getAllContactMessages();
    const found = allMessages.find((m) => m.id === result.id);
    expect(found).toBeDefined();
    expect(found?.persona_viewed).toBe("bridge-builder");
  });
});
