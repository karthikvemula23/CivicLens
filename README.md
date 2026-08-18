CivicLens

CivicLens is a civic issue reporting platform designed to improve communication between citizens and local authorities. It enables users to report public infrastructure problems such as potholes, damaged roads, broken street lights, water leaks, garbage accumulation, and other municipal issues.

The platform is being developed around location-aware reporting, image uploads, AI-assisted issue classification, transparent report tracking, and authority-side issue management.

«Project Status: Active development. The project foundation has been rebuilt as a production-oriented monorepo using Better Fullstack. Core application features are currently under development.»

---

Overview

CivicLens aims to provide a structured workflow for reporting and managing civic infrastructure problems.

Instead of relying on fragmented communication channels, the platform is designed to connect citizens and authorities through a centralized system where issues can be:

- Reported with descriptions and images
- Associated with geographic locations
- Automatically categorized with AI assistance
- Reviewed and prioritized by authorities
- Tracked throughout their lifecycle
- Updated as they move toward resolution

The long-term goal is to create a transparent and scalable platform for managing civic complaints and infrastructure issues.

---

Key Objectives

CivicLens is being developed around four core objectives:

- Accessible Reporting — Make it simple for citizens to report civic issues with minimal effort.
- Actionable Data — Convert citizen reports into structured information that authorities can process efficiently.
- Intelligent Classification — Use AI to assist with identifying issue categories and severity.
- Transparent Tracking — Allow citizens to follow the progress of their submitted reports from creation to resolution.

---

Tech Stack

Frontend

- React 19
- React Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- React Hook Form
- Zod
- Framer Motion

Backend

- Node.js
- Express
- OpenAPI
- Better Auth
- MongoDB Atlas
- Mongoose

Services

- UploadThing — File uploads
- Cloudinary — Image management
- Resend — Transactional email
- Vercel AI SDK — AI integration

Development & Testing

- pnpm
- GitHub Actions
- Husky
- Vitest
- Playwright

---

Current Development

The current development phase focuses on establishing a maintainable full-stack architecture and reliable engineering workflow before implementing the complete CivicLens feature set.

Foundation

- Monorepo architecture using pnpm workspaces
- React frontend with React Router
- Express backend
- OpenAPI-based API layer
- MongoDB Atlas with Mongoose
- Better Auth authentication infrastructure
- Shared TypeScript configuration
- Centralized environment management
- CI workflows with GitHub Actions
- Git hooks with Husky
- Unit testing infrastructure
- End-to-end testing infrastructure

---

Core Workflow

The intended CivicLens workflow connects citizen submissions with structured authority-side processing.

Citizen
   │
   │ Submit Issue
   ▼
┌─────────────────────┐
│ Issue Report        │
│                     │
│ • Description       │
│ • Images            │
│ • Location          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ AI Processing       │
│                     │
│ • Classification    │
│ • Severity          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Authority Dashboard │
│                     │
│ • Review            │
│ • Prioritize        │
│ • Assign            │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Resolution          │
│                     │
│ • Status Updates    │
│ • Citizen Tracking  │
└─────────────────────┘

This workflow represents the intended application architecture. Individual stages are still being implemented.

---

Planned Features

Citizen Platform

- User registration and authentication
- Civic issue reporting
- Issue descriptions and attachments
- Image uploads
- Location-aware reports
- Interactive maps
- AI-assisted issue categorization
- Report tracking
- Report history
- Community voting and engagement
- Notifications and status updates

Authority Platform

- Authority dashboard
- Issue management
- Report review
- Report status updates
- Issue prioritization
- Assignment and resolution workflows
- Location-based issue analysis
- Issue statistics and analytics
- Real-time status updates

AI Integration

- Automatic issue classification from uploaded images
- Category detection
- Severity estimation
- AI-assisted report processing
- Structured issue extraction
- Future intelligent recommendations for authorities

«AI-assisted functionality is part of the planned application layer and should not be considered fully implemented in the current development stage.»

---

Design Principles

CivicLens follows several principles during development.

Modularity

Frontend, backend, authentication, database, configuration, and shared functionality are separated into focused packages.

Type Safety

TypeScript, schema validation, and structured API contracts are used to reduce runtime errors and maintain consistency across the application.

API-First Development

Backend capabilities are organized around an OpenAPI-based API layer, providing explicit contracts between the frontend and backend.

Security by Default

Credentials and sensitive configuration are kept outside version control. Authentication and authorization are handled through dedicated infrastructure rather than application-specific ad-hoc implementations.

Testability

Unit and end-to-end testing are incorporated into the development workflow so that critical application behavior can be validated as features are introduced.

Incremental Development

CivicLens is being implemented feature-by-feature rather than attempting to build the complete platform simultaneously.

---

Architecture

CivicLens follows a modular full-stack architecture designed to separate application concerns while allowing shared functionality across the system.

┌──────────────────────────────┐
│          React Web           │
│     React Router + UI        │
└──────────────┬───────────────┘
               │
               │ OpenAPI
               ▼
┌──────────────────────────────┐
│       Express Server         │
│    API + Application Logic   │
└───────┬──────────┬───────────┘
        │          │
        │          └──────────────────┐
        ▼                             ▼
┌───────────────┐              ┌───────────────┐
│   Mongoose    │              │ External      │
│               │              │ Services      │
└───────┬───────┘              └───────────────┘
        │                       UploadThing
        ▼                       Cloudinary
┌───────────────┐              Resend
│ MongoDB Atlas │              Vercel AI SDK
└───────────────┘

Authentication is handled through Better Auth, while shared configuration, database models, API functionality, and environment management are organized into reusable packages within the monorepo.

---

Project Structure

CivicLens/
├── apps/
│   ├── web/                  # React frontend
│   └── server/               # Express backend
│
├── packages/
│   ├── api/                  # Shared API layer
│   ├── auth/                 # Authentication
│   ├── config/               # Shared configuration
│   ├── db/                   # Database models and configuration
│   └── env/                  # Environment configuration
│
├── docs/
│   └── journal/              # Engineering journal
│
├── .github/
│   └── workflows/            # CI workflows
│
├── package.json
├── pnpm-workspace.yaml
└── README.md

The structure may evolve as additional application domains and shared packages are introduced.

---

Getting Started

Prerequisites

Make sure the following are installed and configured:

- Node.js 24+
- pnpm 11+
- MongoDB Atlas account
- Cloudinary account
- UploadThing account
- Resend account

Additional service credentials may be required as AI and other integrations are implemented.

---

Installation

Clone the repository:

git clone https://github.com/karthikvemula23/CivicLens.git
cd CivicLens

Install dependencies:

pnpm install

---

Environment Variables

Create the required ".env" files for the relevant applications and packages.

Configure the required credentials and connection details for:

- MongoDB Atlas
- Better Auth
- Cloudinary
- UploadThing
- Resend
- AI services when enabled

Keep environment files containing secrets out of version control.

---

Run the Project

Start the development environment:

pnpm dev

By default:

- Frontend: "http://localhost:5173"
- Backend: "http://localhost:3000"

Individual applications can also be started separately:

pnpm dev:web
pnpm dev:server

---

Available Scripts

Command| Description
"pnpm dev"| Start the frontend and backend
"pnpm dev:web"| Start only the frontend
"pnpm dev:server"| Start only the backend
"pnpm build"| Build all applications and packages
"pnpm check-types"| Run TypeScript type checks
"pnpm prepare"| Initialize Husky hooks

Additional workspace-specific commands may be added as development progresses.

---

Testing

CivicLens uses Vitest for unit-level testing and Playwright for end-to-end testing.

The testing strategy is intended to cover:

- Application logic
- API behavior
- Validation
- Authentication flows
- Critical user workflows
- Frontend interactions

Run the project's configured test commands according to the workspace scripts.

Testing coverage will expand as the core CivicLens workflows are implemented.

---

Security & Configuration

CivicLens keeps application secrets and service credentials outside the repository.

Sensitive configuration includes:

- Database connection strings
- Authentication secrets
- Cloudinary credentials
- UploadThing credentials
- Resend API keys
- AI service credentials

Environment files containing secrets should never be committed to Git.

Authentication is handled through Better Auth, while input validation and structured API contracts are used to reduce invalid or unexpected application data.

---

Documentation

CivicLens maintains an engineering journal documenting the development process.

The journal records:

- Architectural decisions
- Technology choices
- Implementation progress
- Migration experiences
- Technical problems and solutions
- Development experiments
- Design trade-offs
- Lessons learned

Documentation is maintained under:

docs/journal/

Example organization:

docs/
└── journal/
    ├── architecture/
    ├── setup/
    ├── decisions/
    └── development/

The engineering journal is intended to provide a historical record of how CivicLens evolves from its initial foundation into a production-oriented application.

---

Development Workflow

Development follows a feature-oriented Git workflow:

1. Create a dedicated feature branch.
2. Open an issue when appropriate.
3. Implement the change.
4. Run type checks and relevant tests.
5. Review the implementation.
6. Open a Pull Request.
7. Address review feedback.
8. Merge the completed change.
9. Document significant architectural decisions when necessary.

Branch Naming

feat/issue-reporting
feat/ai-classification
feat/location-mapping
fix/auth-session
fix/report-validation
refactor/report-service
docs/architecture

Commit messages should describe the purpose of the change clearly and remain consistent with the project's development workflow.

---

Roadmap

Foundation

- [x] Rebuild project foundation using Better Fullstack
- [x] Set up pnpm workspace monorepo
- [x] Configure React frontend
- [x] Configure Express backend
- [x] Set up MongoDB Atlas and Mongoose
- [x] Establish authentication infrastructure
- [x] Configure development tooling and CI

Core Platform

- [ ] Implement user authentication flows
- [ ] Implement civic issue reporting
- [ ] Implement report validation
- [ ] Integrate image uploads
- [ ] Implement location and map functionality
- [ ] Implement report tracking
- [ ] Implement citizen report history

AI

- [ ] Integrate AI-assisted issue classification
- [ ] Implement image-based classification
- [ ] Add category and severity detection
- [ ] Add AI-assisted report processing
- [ ] Explore intelligent recommendations for authorities

Authority Platform

- [ ] Build authority dashboard
- [ ] Implement issue management
- [ ] Implement issue prioritization
- [ ] Add report assignment workflows
- [ ] Add location-based issue analysis
- [ ] Add issue analytics

Community

- [ ] Add community voting
- [ ] Add engagement features
- [ ] Add report discussions or feedback
- [ ] Implement notifications
- [ ] Implement real-time status updates

Production

- [ ] Production deployment
- [ ] Production monitoring
- [ ] Performance optimization
- [ ] Security review
- [ ] Production testing
- [ ] Finalize documentation

---

Project Status

CivicLens is currently in active development.

The underlying full-stack architecture and development infrastructure have been established. Current development is focused on converting the foundation into the core CivicLens application, beginning with authentication, reporting workflows, image handling, location-aware functionality, and the authority-side management system.

Features listed under the roadmap are planned unless explicitly marked as completed.

---

Built With

CivicLens is built on top of the Better Fullstack template, which provides the foundation for the project's full-stack architecture and development workflow.

The project is being progressively customized and extended to meet the specific requirements of the CivicLens platform.

Better Fullstack repository:

https://github.com/Marve10s/Better-Fullstack

---

License

License information will be added as the project approaches its first public release.

---

Author

Vemula Karthik

- GitHub: "karthikvemula23"
- Project: "CivicLens"

CivicLens is an ongoing engineering project focused on exploring full-stack application architecture, AI-assisted workflows, geospatial reporting, and civic technology.