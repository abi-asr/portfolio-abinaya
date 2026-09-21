import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

let dbInstance: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!dbInstance) {
    const dbPath = process.env.DATABASE_PATH || path.resolve(process.cwd(), "contact.db");
    dbInstance = new Database(dbPath);

    // Initialize table if schema exists
    const schemaSqlPath = path.resolve(process.cwd(), "schema.sql");
    if (fs.existsSync(schemaSqlPath)) {
      const schema = fs.readFileSync(schemaSqlPath, "utf-8");
      dbInstance.exec(schema);
    } else {
      // Fallback inline table creation
      dbInstance.exec(`
        PRAGMA journal_mode=WAL;
        PRAGMA foreign_keys=ON;

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

        CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
      `);
    }
  }

  return dbInstance;
}

export interface ContactMessageRow {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  persona_viewed: string;
  created_at: string;
  read_status: number;
}

export interface InsertContactMessageInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  personaViewed?: string;
}

export function insertContactMessage(data: InsertContactMessageInput): { id: string; success: boolean } {
  const db = getDb();
  const id = crypto.randomUUID();
  const persona = data.personaViewed || "bridge-builder";

  const stmt = db.prepare(`
    INSERT INTO contact_messages (id, name, email, subject, message, persona_viewed)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  stmt.run(id, data.name.trim(), data.email.trim(), data.subject.trim(), data.message.trim(), persona);

  return { id, success: true };
}

export function getAllContactMessages(): ContactMessageRow[] {
  const db = getDb();
  const stmt = db.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC");
  return stmt.all() as ContactMessageRow[];
}
