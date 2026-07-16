# Journal 001 — Better Fullstack Foundation

| Field | Value |
|--------|-------|
| **Date** | July 2, 2026 |
| **Duration** | ~3 hours |
| **Branch** | `chore/rebuild-project-foundation` |
| **Objective** | Rebuild CivicLens using Better Fullstack |
| **Issues Created** | 3 |
| **Pull Requests Merged** | 2 |
| **Author Commits** | 4 |

## GitHub Activity

### Issues

- ✅ [#7](https://github.com/karthikvemula23/CivicLens/issues/7) — Rebuild project foundation using Better Fullstack
- 🟡 [#8](https://github.com/karthikvemula23/CivicLens/issues/8) — React Router template imports TanStack Query even when "None" is selected
- ✅ [#10](https://github.com/karthikvemula23/CivicLens/issues/10) — GitHub Actions CI fails due to pnpm configuration and Node.js version incompatibility

### Pull Requests

- ✅ [#9](https://github.com/karthikvemula23/CivicLens/pull/9) — chore: rebuild project foundation with Better Fullstack
- ✅ [#11](https://github.com/karthikvemula23/CivicLens/pull/11) — fix: specify pnpm version for GitHub Actions
---

> **Purpose**
>
> This journal documents the evolution of CivicLens. Each entry records the architectural decisions, technology choices, implementation details, challenges encountered, solutions, and lessons learned throughout development.
>
> The goal is to preserve not only **what** changed, but also **why** those decisions were made.

---

# Objective

The original CivicLens project was created using a standard React + Vite setup. While suitable for prototyping, it lacked a scalable project structure and many production-ready features.

The goal of this session was to rebuild the project using **Better Fullstack**, establishing a modern monorepo architecture with a production-ready technology stack.

---

# About CivicLens

CivicLens is an AI-powered community infrastructure reporting platform that enables citizens to report public infrastructure issues such as:

- Damaged roads
- Potholes
- Broken street lights
- Water leaks
- Garbage accumulation
- Drainage problems
- Illegal dumping
- Other civic issues

Future versions will leverage AI to classify reports, extract structured information, assist users while creating reports, and help authorities prioritize issues.

---

# Why Better Fullstack?

Instead of manually configuring every technology, Better Fullstack provides a production-ready foundation with sensible defaults and an organized monorepo architecture.

Benefits include:

- Modern project structure
- Built-in authentication support
- API architecture
- Testing configuration
- GitHub Actions
- Shared packages
- Type-safe development
- Easier scalability

This allows development to focus on CivicLens instead of infrastructure setup.

---

# Technology Stack

## Frontend

### React Router

**Selected:** ✅

**Why?**

- Official React routing solution
- File-based routing
- Server-side rendering support
- Excellent scalability
- Well maintained

---

### React 19

**Why?**

- Latest stable React version
- Better performance
- Future-proof foundation

---

### Tailwind CSS

**Why?**

- Rapid UI development
- Utility-first workflow
- Easy maintenance
- Large community

---

### shadcn/ui

**Selected Style**

- Radix UI
- Nova
- Lucide Icons
- Inter Font
- Blue Theme
- Zinc Base

**Why?**

Unlike traditional component libraries, shadcn/ui copies components directly into the project.

Benefits:

- Full customization
- No runtime dependency
- Easy maintenance
- Industry standard

---

### Zustand

**Why?**

Chosen for client-side state management because it is:

- Lightweight
- Easy to learn
- Minimal boilerplate
- Excellent TypeScript support

Will primarily manage:

- Authentication state
- UI preferences
- Global application state

---

### React Hook Form

**Why?**

- Excellent performance
- Minimal re-renders
- Great TypeScript support
- Integrates perfectly with Zod

---

### Zod

**Why?**

Provides runtime validation while generating TypeScript types.

Used for:

- Form validation
- API validation
- Environment variable validation

---

### Framer Motion

**Why?**

Industry-standard React animation library.

Will be used for:

- Page transitions
- Modal animations
- Loading states
- Interactive UI effects

---

## Backend

### Express

**Why?**

Selected because of:

- Huge ecosystem
- Mature middleware
- Excellent documentation
- Easy debugging
- Large community

Alternatives such as Hono and Fastify were considered, but Express currently provides the best balance of ecosystem and familiarity.

---

### Node.js

**Why?**

Provides maximum compatibility with the chosen backend stack.

---

### MongoDB Atlas

**Why?**

The CivicLens data model contains dynamic data such as:

- AI metadata
- Image information
- User reports
- Comments
- Categories

MongoDB's flexible schema makes it well suited for this use case.

---

### Mongoose

**Why?**

Provides:

- Schema validation
- Middleware
- Better developer experience
- Mature MongoDB tooling

---

### Better Auth

**Why?**

Modern TypeScript-first authentication library with an excellent developer experience.

Will manage:

- User authentication
- Sessions
- OAuth
- Email verification

---

### OpenAPI

**Why?**

Provides:

- API documentation
- Type-safe frontend/backend communication
- Easier future mobile integration

---

# AI

## Vercel AI SDK

**Why?**

Provides a unified interface for multiple LLM providers.

This avoids vendor lock-in and allows future AI providers to be swapped with minimal code changes.

---

# Storage & Services

## UploadThing

**Why?**

Provides secure file uploads with:

- Upload progress
- Validation
- Type safety

---

## Cloudinary

**Why?**

Chosen for:

- Image optimization
- CDN delivery
- Image transformations
- Reliable cloud storage

UploadThing handles uploads, while Cloudinary stores and optimizes the images.

---

## Resend

**Why?**

Simple transactional email service for:

- Email verification
- Password reset
- Notifications

---

# Development Tooling

## pnpm

**Why?**

Selected instead of npm because:

- Faster installations
- Better monorepo support
- Saves disk space
- Efficient dependency management

---

## GitHub Actions

**Why?**

Automates:

- Dependency installation
- Type checking
- Build verification

Every Pull Request will automatically run CI.

---

## Husky

**Why?**

Runs Git hooks before commits.

Helps catch problems before code reaches GitHub.

---

## Vitest

**Why?**

Fast unit testing with native Vite integration.

---

## Playwright

**Why?**

Provides reliable end-to-end browser testing.

---

## AGENTS.md

**Why?**

Provides project context for AI coding assistants.

---

## CLAUDE.md

**Why?**

Improves Claude Code's understanding of the project.

---

# Better Fullstack Configuration

## Selected Options

### Frontend

- [x] React Router

### Backend

- [x] Express

### Runtime

- [x] Node.js

### Database

- [x] MongoDB Atlas
- [x] Mongoose

### API

- [x] OpenAPI

### Authentication

- [x] Better Auth

### Payments

- [ ] None

### Email

- [x] Resend

### File Upload

- [x] UploadThing

### CSS Framework

- [x] Tailwind CSS

### UI Library

- [x] shadcn/ui

### State Management

- [x] Zustand

### Forms

- [x] React Hook Form

### Validation

- [x] Zod

### Testing

- [x] Vitest
- [x] Playwright

### Animation

- [x] Framer Motion

### Logging

- [x] Pino

### Rate Limiting

- [x] Upstash Ratelimit

### AI

- [x] Vercel AI SDK

### Search

- [ ] None

### Vector Database

- [ ] None

### File Storage

- [x] Cloudinary

### GitHub Actions

- [x] Enabled

### Husky

- [x] Enabled

### AI Documentation

- [x] CLAUDE.md
- [x] AGENTS.md

### Package Manager

- [x] pnpm

---

# Problems Encountered

## pnpm not installed

### Problem

The Better Fullstack generator failed because `pnpm` was not installed globally.

### Solution

```bash
npm install -g pnpm
```

---

## React Query Generator Bug

### Problem

The generated React Router template imported:

```ts
@tanstack/react-query
```

and

```ts
@tanstack/react-query-devtools
```

even though React Query was not selected during project generation.

### Solution

Installed the missing packages manually.

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools --filter web
```

GitHub Issue:

- #8

---

## GitHub Actions CI Failure

### Problem

The generated workflow failed because:

1. No pnpm version was specified.
2. The workflow used Node.js 20 while pnpm 11 requires Node.js 22.13+.

### Solution

Added:

```json
"packageManager": "pnpm@11.9.0"
```

Updated:

```yaml
node-version: 24
```

GitHub Issue:

- #10

---

# Lessons Learned

- pnpm provides significantly better workspace support than npm.
- GitHub Actions requires a compatible Node.js version for the installed pnpm version.
- Better Fullstack already includes many production-ready tools that would otherwise require manual setup.
- Generator bugs are worth reporting upstream because they improve the experience for future users.

---

# Future Configuration

The following services still need to be configured:

- [ ] MongoDB Atlas
- [ ] Better Auth
- [ ] Cloudinary
- [ ] Resend
- [ ] Environment variables

---

# Next Development Goal

Begin implementing CivicLens authentication and the core infrastructure reporting workflow.

---

# Session Summary

**Time Spent**

Approximately 2 hours.

**Outcome**

Successfully rebuilt CivicLens on top of Better Fullstack and established a scalable foundation for future development.

**GitHub Issues**

- #8 — React Router template imports TanStack Query even when "None" is selected.
- #10 — GitHub Actions CI fails due to pnpm configuration and Node.js version incompatibility.

**Major Accomplishments**

- Migrated to Better Fullstack.
- Established monorepo architecture.
- Configured pnpm workspace.
- Enabled GitHub Actions.
- Enabled Husky.
- Fixed generator issues.
- Reported upstream bugs.
- Documented architectural decisions.
