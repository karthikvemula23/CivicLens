# CivicLens

CivicLens is an AI-powered civic issue reporting platform that enables citizens to report public infrastructure problems such as potholes, damaged roads, broken street lights, water leaks, garbage accumulation, drainage issues, and other municipal concerns.

The platform combines modern web technologies with AI capabilities to create a reliable, scalable, and user-friendly reporting experience. It is built using **Better Fullstack** with a production-ready architecture that emphasizes maintainability, scalability, and type safety.

> **Project Status:** Active development. Core project infrastructure, authentication, and database integration have been completed.

---

# Features

## Implemented

- Secure email and password authentication
- User registration and sign in
- Session management
- Protected routes
- MongoDB Atlas integration
- Responsive authentication interface
- Light and dark theme support
- Modern monorepo architecture

---

# Tech Stack

## Frontend

- React 19
- React Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- React Hook Form
- Zod
- Framer Motion

## Backend

- Node.js
- Express
- Better Auth
- OpenAPI
- MongoDB Atlas
- Mongoose

## Services

- UploadThing
- Cloudinary
- Resend
- Vercel AI SDK

## Tooling

- pnpm
- GitHub Actions
- Husky
- Vitest
- Playwright

---

# Authentication

CivicLens uses **Better Auth** with MongoDB Atlas for secure authentication.

Current authentication features include:

- Email and password registration
- Secure sign in
- Session management
- Protected routes
- Secure sign out

---

# Project Structure

```text
CivicLens/
├── apps/
│   ├── web/                 # React frontend
│   └── server/              # Express backend
│
├── packages/
│   ├── api/                 # Shared API layer
│   ├── auth/                # Authentication
│   ├── config/              # Shared configuration
│   ├── db/                  # Database
│   └── env/                 # Environment configuration
│
├── .github/                 # GitHub workflows
├── AGENTS.md
├── CLAUDE.md
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# Getting Started

## Prerequisites

- Node.js 24 or later
- pnpm 11 or later
- MongoDB Atlas account

---

## Installation

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

## Environment Variables

Create the required `.env` files before running the application.

Example variables:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CORS_ORIGIN=
VITE_SERVER_URL=
UPLOADTHING_TOKEN=
CLOUDINARY_URL=
RESEND_API_KEY=
```

Refer to the corresponding service documentation to obtain the required credentials.

---

## Running the Project

Start the development server:

```bash
pnpm dev
```

Applications:

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

---

# Development

Useful commands:

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Type checking
pnpm check-types

# Build the project
pnpm build

# Run tests
pnpm test
```

---

# Architecture

```text
React Client
      │
      ▼
React Router
      │
      ▼
Express API
      │
      ▼
Better Auth
      │
      ▼
MongoDB Atlas
```

---

# Contributing

Contributions, suggestions, and bug reports are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

Please ensure the project builds successfully before submitting a pull request.

---

# License

This project is licensed under the MIT License.
