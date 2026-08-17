# CivicLens

CivicLens is a civic issue reporting platform designed to improve communication between citizens and local authorities. It enables users to report public infrastructure problems such as potholes, damaged roads, broken street lights, water leaks, garbage accumulation, and other municipal issues.

The platform is being developed around **location-aware reporting, image uploads, AI-assisted issue classification, and transparent report tracking**.

> **Project Status:** Early development. The project foundation has been rebuilt as a production-oriented monorepo using Better Fullstack. Core application features are currently under development.

---

## Tech Stack

### Frontend

* React 19
* React Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* Zustand
* React Hook Form
* Zod
* Framer Motion

### Backend

* Node.js
* Express
* OpenAPI
* Better Auth
* MongoDB Atlas
* Mongoose

### Services

* UploadThing — file uploads
* Cloudinary — image management
* Resend — transactional email
* Vercel AI SDK — AI integration

### Development & Testing

* pnpm
* GitHub Actions
* Husky
* Vitest
* Playwright

---

## Current Development

The project foundation currently focuses on establishing a maintainable full-stack architecture and development workflow.

### Foundation

* Monorepo architecture using pnpm workspaces
* React frontend with React Router
* Express backend
* OpenAPI-based API layer
* MongoDB Atlas with Mongoose
* Better Auth authentication infrastructure
* Shared TypeScript configuration and environment management
* CI workflows with GitHub Actions
* Git hooks with Husky
* Unit and end-to-end testing infrastructure

---

## Planned Features

### Citizen Platform

* User registration and authentication
* Civic issue reporting
* Image uploads
* Location-aware reports
* AI-assisted issue categorization
* Interactive maps
* Report tracking
* Community voting and engagement

### Authority Platform

* Authority dashboard
* Issue management
* Report status updates
* Issue prioritization
* Location-based issue analysis
* Real-time status updates

### AI Integration

* Automatic issue classification from uploaded images
* Category and severity detection
* AI-assisted report processing
* Future intelligent recommendations for authorities

> AI-assisted functionality is part of the planned application layer and should not be considered fully implemented in the current development stage.

---

## Architecture

CivicLens follows a modular full-stack architecture designed to keep application concerns separated while allowing shared functionality across the system.

```text
┌──────────────────────────────┐
│          React Web            │
│     React Router + UI         │
└──────────────┬───────────────┘
               │
               │ OpenAPI
               ▼
┌──────────────────────────────┐
│       Express Server          │
│     API + Application Logic   │
└───────┬──────────┬───────────┘
        │          │
        │          └──────────────────┐
        ▼                             ▼
┌───────────────┐              ┌───────────────┐
│   Mongoose    │              │ External       │
│               │              │ Services       │
└───────┬───────┘              └───────────────┘
        │                       UploadThing
        ▼                       Cloudinary
┌───────────────┐              Resend
│ MongoDB Atlas │              Vercel AI SDK
└───────────────┘
```

Authentication is handled through Better Auth, while shared configuration, database models, API functionality, and environment management are organized into reusable packages within the monorepo.

---

## Getting Started

### Prerequisites

Make sure the following are installed and configured:

* Node.js 24+
* pnpm 11+
* MongoDB Atlas account
* Cloudinary account
* UploadThing account
* Resend account

---

### Installation

Clone the repository:

```bash
git clone https://github.com/karthikvemula23/CivicLens.git
cd CivicLens
```

Install dependencies:

```bash
pnpm install
```

---

### Environment Variables

Create the required `.env` files for the relevant applications and packages.

Configure the required credentials and connection details for:

* MongoDB Atlas
* Better Auth
* Cloudinary
* UploadThing
* Resend

Keep environment files containing secrets out of version control.

---

### Run the Project

Start the development environment:

```bash
pnpm dev
```

By default:

* **Frontend:** http://localhost:5173
* **Backend:** http://localhost:3000

Individual applications can also be started separately:

```bash
pnpm dev:web
pnpm dev:server
```

---

## Project Structure

```text
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
```

---

## Available Scripts

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `pnpm dev`         | Start the frontend and backend      |
| `pnpm dev:web`     | Start only the frontend             |
| `pnpm dev:server`  | Start only the backend              |
| `pnpm build`       | Build all applications and packages |
| `pnpm check-types` | Run TypeScript type checks          |
| `pnpm prepare`     | Initialize Husky hooks              |

---

## Testing

CivicLens uses **Vitest** for unit-level testing and **Playwright** for end-to-end testing.

Run the project's test commands according to the configured workspace scripts.

The testing setup is intended to provide coverage across both application logic and critical user workflows as development progresses.

---

## Documentation

CivicLens maintains an engineering journal documenting the development process, including:

* Architectural decisions
* Implementation progress
* Technical problems and solutions
* Development experiments
* Lessons learned

Documentation is maintained under:

```text
docs/journal/
```

---

## Development Workflow

Development follows a feature-oriented Git workflow:

1. Create a dedicated feature branch.
2. Open an issue when appropriate.
3. Implement and test the change.
4. Run type checks and relevant tests.
5. Open a Pull Request.
6. Review and address feedback.
7. Merge the completed change.
8. Document significant architectural decisions in the engineering journal.

Example branch naming:

```text
feat/issue-reporting
feat/ai-classification
fix/auth-session
refactor/report-service
```

---

## Roadmap

* [x] Rebuild project foundation using Better Fullstack
* [x] Set up pnpm workspace monorepo
* [x] Configure React frontend
* [x] Configure Express backend
* [x] Set up MongoDB Atlas and Mongoose
* [x] Establish authentication infrastructure
* [x] Configure development tooling and CI
* [ ] Implement user authentication flows
* [ ] Implement civic issue reporting
* [ ] Integrate image uploads
* [ ] Implement location and map functionality
* [ ] Add AI-assisted issue classification
* [ ] Implement report tracking
* [ ] Build authority dashboard
* [ ] Add community engagement features
* [ ] Implement real-time status updates
* [ ] Production deployment

---

## Built With

CivicLens is built on top of the [Better Fullstack](https://github.com/Marve10s/Better-Fullstack) template, which provides the foundation for the project's modern full-stack architecture and development workflow.

The project is being progressively customized and extended to meet the specific requirements of the CivicLens platform.
