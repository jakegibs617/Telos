# 🚀 Telos Roadmap
A structured development plan for **Telos** — a smart, user-personalized job discovery platform.

> “Telos” (τέλος): Greek for purpose, goal, or ultimate end — the destination every job seeker is aiming for.

---

## 🧱 Phase 1: Core MVP Foundation

- [ ] Initialize frontend app (React, Next.js, or Ionic)
- [ ] Set up backend (Node.js with Express or Python FastAPI)
- [ ] Create repo structure and basic deployment setup
- [ ] Build form UI to capture:
  - Desired role / skills
  - Location (city or ZIP)
  - Distance (miles/km)
  - Job type (remote/hybrid/onsite)

---

## 🎛 Phase 2: User Preferences & Scoring

- [ ] Add weight sliders for user preferences:
  - Fortune 500 status
  - Financial backing
  - Glassdoor reviews
  - Public sentiment
  - Anticipated pay
- [ ] Send weights to backend
- [ ] Normalize job data and apply scoring

---

## 🌐 Phase 3: Job Ingestion

- [ ] Detect ATS platforms (Greenhouse, Lever, Workday)
- [ ] Scrape or query public job boards
- [ ] Store normalized job data in DB
- [ ] Enrich with company metadata (Glassdoor, Crunchbase, sentiment)

---

## 📍 Phase 4: Location Awareness

- [ ] Convert ZIP/city → lat/lng (OpenCage API or similar)
- [ ] Store job lat/lng data
- [ ] Filter by haversine distance
- [ ] Apply job type logic: remote, hybrid, onsite

---

## 🧠 Phase 5: Matching Engine

- [ ] Score jobs using user-adjusted weights
- [ ] Return ranked job list with score breakdown
- [ ] Visualize match quality per job

---

## 🖥 Phase 6: UI & UX Polish

- [ ] Responsive result list
- [ ] Add filters and save options
- [ ] Explain “why this job scored well”

---

## ✅ Phase 7: QA & Next Steps

- [ ] Unit tests for scoring logic and geofiltering
- [ ] Manual end-to-end tests
- [ ] Future ideas:
  - Resume upload + tagging
  - LLM-based role matching
  - Social media signal parsing
  - User profiles with saved history

---

**Project Name**: Telos  
**Goal**: Help users discover and prioritize career opportunities aligned with their purpose.  
**Owner**: Jacob Giberson  
**Status**: [In Progress / Planning]

