# CivicLens

This file provides context about the project for AI assistants.

## Project Overview

- **Ecosystem**: Typescript

## Tech Stack

- **Runtime**: node
- **Package Manager**: pnpm

### Frontend

- Framework: react-router
- CSS: tailwind
- UI Library: shadcn-ui
- State: zustand

### Backend

- Framework: express
- API: openapi
- Validation: zod

### Database

- Database: mongodb
- ORM: mongoose

### Authentication

- Provider: better-auth

### Additional Features

- Testing: vitest-playwright
- AI: vercel-ai
- Email: resend
- Logging: pino

## Project Structure

```
CivicLens/
├── apps/
│   ├── web/         # Frontend application
│   └── server/      # Backend API
├── packages/
│   ├── api/         # API layer
│   ├── auth/        # Authentication
│   └── db/          # Database schema
```

## Common Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm db:push` - Push database schema
- `pnpm db:studio` - Open database UI

## Maintenance

Keep AGENTS.md updated when:

- Adding/removing dependencies
- Changing project structure
- Adding new features or services
- Modifying build/dev workflows

AI assistants should suggest updates to this file when they notice relevant changes.
