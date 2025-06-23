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

  // Generate OG image for result sharing
  app.get("/api/og-image/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const session = await storage.getTestSession(sessionId);
      
      if (!session) {
        res.status(404).json({ message: "Test session not found" });
        return;
      }

      // Create a simple SVG-based OG image
      const personalityTypes = {
        'TE': { name: 'Teto Type', subtitle: 'Creative & Independent Thinker', color: '#6366f1' },
        'EG': { name: 'Egen Type', subtitle: 'Social & Emotionally Harmonious', color: '#8b5cf6' },
        'TE-EG': { name: 'Teto-Egen Mixed', subtitle: 'Balanced & Versatile', color: '#06b6d4' }
      };

      const typeInfo = personalityTypes[session.resultType as keyof typeof personalityTypes] || personalityTypes['TE'];
      
      const svg = `
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:${typeInfo.color};stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <rect width="1200" height="630" fill="url(#bg)"/>
          
          <!-- Header -->
          <rect x="0" y="0" width="1200" height="120" fill="url(#accent)"/>
          <text x="60" y="75" font-family="Arial, sans-serif" font-size="42" font-weight="bold" fill="white">
            Teto-Egen Personality Test Results
          </text>
          
          <!-- Main content -->
          <circle cx="300" cy="350" r="80" fill="url(#accent)" opacity="0.2"/>
          <text x="300" y="360" font-family="Arial, sans-serif" font-size="48" font-weight="bold" 
                fill="${typeInfo.color}" text-anchor="middle">${session.resultType}</text>
          
          <text x="450" y="280" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#1e293b">
            ${typeInfo.name}
          </text>
          <text x="450" y="330" font-family="Arial, sans-serif" font-size="32" fill="#64748b">
            ${typeInfo.subtitle}
          </text>
          
          <text x="450" y="420" font-family="Arial, sans-serif" font-size="24" fill="#475569">
            Discover your unique personality type
          </text>
          <text x="450" y="460" font-family="Arial, sans-serif" font-size="24" fill="#475569">
            Take the test at: ${req.get('host')}
          </text>
          
          <!-- Bottom decoration -->
          <rect x="0" y="570" width="1200" height="60" fill="url(#accent)" opacity="0.1"/>
        </svg>
      `;

      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      res.send(svg);
    } catch (error) {
      res.status(500).json({ message: "Failed to generate OG image" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
