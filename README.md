# BestOfMe - Habit Tracker

> A full-stack habit tracking web application built as the final project for the **RNCP5 - Web and Mobile Web Developer** certification.

---

## About the Project

**BestOfMe** helps users build and maintain healthy habits through daily and weekly tracking, visual progress data, and a personalized progression system. The goal is to make consistency rewarding and easy to visualize.

---

## RNCP5 Competencies Covered

### CCP1 — Develop the front-end of a secure web application

| CP | Competency | Implementation |
|----|-----------|----------------|
| CP1 | Set up and configure the work environment | Vite + React, ESLint, Git, structured src/components/pages/hooks/utils |
| CP2 | Create UI wireframes and mockups | Figma wireframes designed before development (desktop + mobile) |
| CP3 | Build static user interfaces | React components, responsive design, RGAA accessibility compliance |
| CP4 | Develop dynamic user interfaces | useState, useEffect, custom hooks, API calls, state management |

### CCP2 — Develop the back-end of a secure web application

| CP | Competency | Implementation |
|----|-----------|----------------|
| CP5 | Set up a relational database | PostgreSQL schema (users, habits, completions, streaks) |
| CP6 | Develop SQL and NoSQL data access components | SQL queries via ORM, table relationships |
| CP7 | Develop server-side business logic | REST API with Node.js/Express, streak calculation, weekly goal tracking |
| CP8 | Document the deployment of a dynamic application | Deployment documentation, environment variables, production process |

---

## Features

### MVP — required for the exam

- [ ] User authentication (register / login / logout)
- [ ] Create, edit and delete habits
- [ ] Mark a daily habit as completed
- [ ] Weekly habits with a target (e.g. gym 4x/week)
- [ ] Streak calculation and display
- [ ] GitHub-style completion heatmap calendar
- [ ] Daily completion counter
- [ ] Weekly progress tracker (days done / days remaining)
- [ ] Profile page with account deletion
- [ ] Emoji picker for each habit
- [ ] Fully responsive (desktop + mobile)
- [ ] Deployed to production

### Nice to have — if time allows

- [ ] Built-in timer for timed habits (reading, face massage, etc.)
- [ ] Habit preset packs on first launch (Health, Sport, Personal Growth)
- [ ] Push notifications / reminders

---

## Tech Stack

**Front-end**
- React 18 (Vite)
- React Router DOM
- CSS Modules

**Back-end**
- Node.js + Express
- PostgreSQL
- JWT authentication

**Tools**
- Git + GitHub (conventional commits)
- Figma (wireframes)
- Vercel / Render (deployment)

---

## Project Structure

```
src/
├── components/       # Reusable UI components (HabitCard, StreakBadge, HeatmapCalendar...)
├── pages/            # Full pages (Dashboard, Profile, Login...)
├── hooks/            # Custom hooks (useHabits, useStreak, useTimer...)
└── utils/            # Helper functions (formatDate, calcStreak...)
```

---

## Security

- Passwords hashed with bcrypt
- JWT authentication with expiration
- Sensitive data stored in environment variables (.env)
- Protected API routes via authentication middleware
- XSS and CSRF protection
- Server-side input validation

---

## Accessibility (RGAA)

- `alt` attributes on all images
- WCAG AA color contrast compliance
- Keyboard navigation support
- Semantic HTML5 elements

---

## Local Setup

```bash
# Clone the repository
git clone https://github.com/alexeychern0v/BestOfMe
cd bestofme

# Install front-end dependencies
npm install
npm run dev

# Install back-end dependencies (coming soon)
cd server
npm install
npm run dev
```

---

## Author

Built by **Alexey Chernov** as part of the Web and Mobile Web Developer program — RNCP5 (Holberton School Paris, 2026)
