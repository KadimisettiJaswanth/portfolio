# Jaswanth.dev Portfolio

## Overview

A personal developer portfolio website for Kadimisetti Jaswanth. This is a full-stack application featuring a modern React frontend with a contact form that persists messages to a PostgreSQL database via an Express backend. The site showcases skills, experience, certifications, and projects with smooth scroll navigation and animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode default)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and interactions
- **Smooth Scrolling**: react-scroll for single-page navigation between sections
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type-safe request/response validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

### Data Storage
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)
- **Schema Location**: shared/schema.ts using Drizzle's pgTable definitions
- **Migrations**: Drizzle Kit with migrations output to ./migrations directory
- **Current Tables**: 
  - `messages` - stores contact form submissions (id, name, email, message, createdAt)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components including shadcn/ui
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod
└── migrations/       # Database migrations
```

### Build System
- **Development**: `npm run dev` runs tsx with Vite middleware for HMR
- **Production Build**: Custom esbuild script bundles server with select dependencies, Vite builds client to dist/public
- **Database Sync**: `npm run db:push` uses Drizzle Kit to push schema changes

## External Dependencies

### Database
- **PostgreSQL**: Primary database, requires DATABASE_URL environment variable
- **connect-pg-simple**: Session storage for PostgreSQL (available but not currently used)

### UI Libraries
- **Radix UI**: Complete primitive component suite (dialogs, dropdowns, forms, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

### Fonts (Google Fonts)
- Inter (sans-serif)
- Plus Jakarta Sans (display)
- Fira Code (monospace)
- DM Sans, Geist Mono, Architects Daughter (additional)

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner (development only)