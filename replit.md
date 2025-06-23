# Replit.md

## Overview

This is a Korean personality test application called "테토-에겐 성격 유형 검사" (Teto-Egen Personality Type Test). The application is built as a full-stack web application with React frontend and Express.js backend, featuring a personality assessment quiz that analyzes user responses and provides detailed personality type results.

## System Architecture

The application follows a monorepo structure with clear separation between client and server:

- **Frontend**: React with TypeScript, using Vite for development and building
- **Backend**: Express.js with TypeScript, serving both API endpoints and static files
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Client Directory Structure**: 
  - `src/pages/` - Route components (home, test, results, not-found)
  - `src/components/` - Reusable UI components including test-specific components
  - `src/lib/` - Utilities, test data, storage helpers, and query client
  - `src/hooks/` - Custom React hooks for mobile detection and toast notifications

### Backend Architecture
- **Server Directory Structure**:
  - `server/index.ts` - Main Express server with middleware setup
  - `server/routes.ts` - API route definitions for test operations
  - `server/storage.ts` - Data storage interface with in-memory implementation
  - `server/vite.ts` - Development server integration with Vite

### Database Schema
- **Test Sessions Table**: Stores completed personality test results
  - `id` (serial primary key)
  - `sessionId` (unique text identifier)
  - `answers` (JSON array of user responses)
  - `resultType` (personality type code)
  - `completedAt` (timestamp)

### Test Logic
- **Question System**: 20 questions with multiple-choice answers
- **Scoring System**: Each answer option has a type ("TE" or "EG") and weight
- **Personality Types**: Multiple predefined personality types with detailed analysis
- **Progress Tracking**: Local storage for test progress persistence

## Data Flow

1. **Test Taking Flow**:
   - User starts test from home page
   - Progress is automatically saved to localStorage
   - Each answer is scored and accumulated
   - Final score determines personality type
   - Results are submitted to backend API and stored

2. **Results Display Flow**:
   - Results are fetched from API by session ID
   - Fallback to localStorage if API fails
   - Detailed personality analysis is displayed
   - Users can retake test or share results

3. **API Endpoints**:
   - `GET /api/questions` - Returns question metadata
   - `POST /api/test-results` - Submits completed test session
   - `GET /api/test-results/:sessionId` - Retrieves test results by ID

## External Dependencies

### Core Framework Dependencies
- **React 18** with TypeScript for frontend development
- **Express.js** for backend server
- **Drizzle ORM** with PostgreSQL adapter for database operations
- **Neon Database** serverless PostgreSQL driver

### UI and Styling
- **Tailwind CSS** for utility-first styling
- **Radix UI** components for accessible UI primitives
- **shadcn/ui** component library for consistent design system
- **Lucide React** for icon components

### Development Tools
- **Vite** for fast development and building
- **TypeScript** for type safety
- **ESBuild** for server-side bundling
- **PostCSS** and **Autoprefixer** for CSS processing

## Deployment Strategy

### Development Environment
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs on port 5000
- Concurrent client and server development with file watching

### Production Build Process
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Static files served from Express server
4. Database migrations applied via Drizzle Kit

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Development**: `npm run dev`
- **Port Mapping**: Internal 5000 → External 80

### Database Setup
- PostgreSQL database provisioned through Replit
- Connection via `DATABASE_URL` environment variable
- Schema defined in `shared/schema.ts`
- Migrations managed through `drizzle.config.ts`

## Changelog
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.