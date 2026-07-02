# CivicLens

CivicLens is an AI-powered civic issue reporting platform that enables citizens to report public infrastructure problems such as potholes, damaged roads, broken street lights, water leaks, garbage accumulation, and other municipal issues.

The long-term goal is to streamline communication between citizens and authorities by combining location-aware reporting, image uploads, and AI-assisted issue classification.

> 🚧 **Project Status:** Early development. The project foundation has been rebuilt using Better Fullstack and core features are currently under development.

---

## Tech Stack

### Frontend

- React 19
- React Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- React Hook Form
- Zod
- Framer Motion

### Backend

- Node.js
- Express
- OpenAPI
- Better Auth
- MongoDB Atlas
- Mongoose

### Services

- UploadThing
- Cloudinary
- Resend
- Vercel AI SDK

### Tooling

- pnpm
- GitHub Actions
- Husky
- Vitest
- Playwright

---

## Features (Planned)

- User authentication
- Civic issue reporting
- Image uploads
- AI-assisted issue categorization
- Interactive maps
- Report tracking
- Community voting and engagement
- Authority dashboard
- Real-time status updates

---

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 11+
- MongoDB Atlas account
- Cloudinary account
- UploadThing account
- Resend account

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

Create the required `.env` files and configure:

- MongoDB Atlas
- Better Auth
- Cloudinary
- UploadThing
- Resend

---

### Run the Project

```bash
pnpm dev
```

Applications:

- Frontend → http://localhost:5173
- Backend → http://localhost:3000

---

## Project Structure

```
CivicLens/
├── apps/
│   ├── web/             # React frontend
│   └── server/          # Express backend
│
├── packages/
│   ├── api/             # Shared API layer
│   ├── auth/            # Authentication
│   ├── config/          # Shared TypeScript configuration
│   ├── db/              # Database models
│   └── env/             # Environment configuration
│
├── docs/
│   └── journal/         # Engineering journal
│
└── .github/
    └── workflows/       # CI workflows
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start frontend and backend |
| `pnpm build` | Build all packages |
| `pnpm dev:web` | Start only the frontend |
| `pnpm dev:server` | Start only the backend |
| `pnpm check-types` | Run TypeScript checks |
| `pnpm prepare` | Initialize Husky hooks |

---

## Documentation

The project includes an engineering journal documenting architectural decisions, implementation progress, and lessons learned.

- `docs/journal/`

---

## Development Workflow

- Create a feature branch
- Open an issue when appropriate
- Implement changes
- Open a Pull Request
- Merge after review
- Document significant architectural decisions in the engineering journal

---

## Built With

This project is built on top of the excellent [Better Fullstack](https://github.com/Marve10s/Better-Fullstack) template.

---
