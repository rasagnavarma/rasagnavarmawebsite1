# API Contracts - Rasagna Varma Portfolio

## Overview
This document outlines the API contracts between frontend and backend for the personal portfolio website.

## Current Mock Data (in /app/frontend/src/mock.js)
- Hero data (name, role, metrics)
- Biography narrative and values
- Timeline/experience data
- Escalation missions (war room)
- Speaking engagements
- Certifications
- Skills
- Community work
- Contact information

## Backend Implementation Strategy

### Database Models

#### 1. ProfileData Model
- Stores basic profile information (hero section data)
- Fields: name, role, tagline, metrics[]

#### 2. Experience Model
- Stores work experience timeline
- Fields: company, role, team, dates, achievements[], impact, color, order

#### 3. Mission Model (Escalation War Room)
- Stores escalation/incident management cases
- Fields: title, status, priority, problem, actions[], stakeholders[], outcome, resolutionTime, impact

#### 4. Speaking Model
- Stores speaking engagements
- Fields: event, topic, year, audience, type, description

#### 5. Certification Model
- Stores certifications
- Fields: name, issuer, year, category

#### 6. ContactSubmission Model
- Stores contact form submissions
- Fields: name, email, message, timestamp

## API Endpoints

### GET /api/profile
- Returns hero section data
- Response: { name, role, tagline, metrics[] }

### GET /api/experiences
- Returns all work experiences ordered by date
- Response: [Experience]

### GET /api/missions
- Returns all escalation missions
- Response: [Mission]

### GET /api/speaking
- Returns all speaking engagements
- Response: [Speaking]

### GET /api/certifications
- Returns all certifications grouped by category
- Response: [Certification]

### GET /api/skills
- Returns skills data
- Response: { platforms[], programming[], tools[], methodologies[], leadership[] }

### POST /api/contact
- Accepts contact form submission
- Request: { name, email, message }
- Response: { success: true, message: "Contact submitted successfully" }

## Frontend Integration Plan

### Files to Update:
1. `/app/frontend/src/components/HeroSection.jsx` - Fetch from `/api/profile`
2. `/app/frontend/src/components/TimelineSection.jsx` - Fetch from `/api/experiences`
3. `/app/frontend/src/components/WarRoomSection.jsx` - Fetch from `/api/missions`
4. `/app/frontend/src/components/CommunitySection.jsx` - Fetch from `/api/speaking`
5. `/app/frontend/src/components/SkillsSection.jsx` - Fetch from `/api/certifications` and `/api/skills`
6. `/app/frontend/src/components/Footer.jsx` - Add contact form with POST to `/api/contact`

### Integration Approach:
- Use axios for API calls
- Implement useEffect hooks to fetch data on component mount
- Add loading states during data fetch
- Handle errors gracefully with error messages
- Remove mock.js imports after backend integration

## Data Migration
- All data from mock.js will be seeded into MongoDB on backend startup
- Seed script will check if data exists before inserting

## Error Handling
- Backend returns proper HTTP status codes
- Frontend displays user-friendly error messages
- Loading states prevent blank screens during fetch

## Environment Variables
- Backend: MONGO_URL (already configured)
- Frontend: REACT_APP_BACKEND_URL (already configured)
