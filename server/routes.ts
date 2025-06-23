import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTestSessionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get test questions
  app.get("/api/questions", async (req, res) => {
    // Questions are served from the frontend to keep them synchronized
    res.json({ message: "Questions are served from frontend" });
  });

  // Submit test results
  app.post("/api/test-results", async (req, res) => {
    try {
      const validatedData = insertTestSessionSchema.parse(req.body);
      const session = await storage.createTestSession(validatedData);
      res.json(session);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save test results" });
      }
    }
  });

  // Get test results by session ID
  app.get("/api/test-results/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const session = await storage.getTestSession(sessionId);
      
      if (!session) {
        res.status(404).json({ message: "Test session not found" });
        return;
      }
      
      res.json(session);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve test results" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
