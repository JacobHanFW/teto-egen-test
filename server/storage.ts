import { testSessions, type TestSession, type InsertTestSession } from "@shared/schema";

export interface IStorage {
  createTestSession(session: InsertTestSession): Promise<TestSession>;
  getTestSession(sessionId: string): Promise<TestSession | undefined>;
}

export class MemStorage implements IStorage {
  private sessions: Map<number, TestSession>;
  private sessionsBySessionId: Map<string, TestSession>;
  private currentId: number;

  constructor() {
    this.sessions = new Map();
    this.sessionsBySessionId = new Map();
    this.currentId = 1;
  }

  async createTestSession(insertSession: InsertTestSession): Promise<TestSession> {
    const id = this.currentId++;
    const session: TestSession = { ...insertSession, id };
    this.sessions.set(id, session);
    this.sessionsBySessionId.set(session.sessionId, session);
    return session;
  }

  async getTestSession(sessionId: string): Promise<TestSession | undefined> {
    return this.sessionsBySessionId.get(sessionId);
  }
}

export const storage = new MemStorage();
