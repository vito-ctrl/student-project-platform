# 🎓 DevCollab: Student Project Execution Platform

> **🚧 Status: Work in progress / paused.** The foundation is in place (auth, database schema, CI, landing page), but the core features are not built yet. See the [roadmap](#-roadmap).

DevCollab is a platform that helps students work on team projects the way engineers do: with clear tasks, defined roles, and fair, trackable contributions.

## 💡 The problem

Student team projects usually suffer from the same issues:

- Nobody knows who is doing what
- Messy repositories with no structure or documentation
- Unfair workload distribution
- Last-minute panic before the deadline
- Teachers can't see who actually contributed

DevCollab aims to make student projects **structured, trackable, and fair**.

## 🎯 Planned features

| Feature | Description |
|---|---|
| **Project rooms** | A workspace per project with goal, timeline, tech stack, and members |
| **Kanban task board** | To do / In progress / Done, with owner and deadline per task |
| **Team roles** | Project owner and members, with roles such as backend, frontend, docs, and testing |
| **Find teammates** | Post a project with the roles you need; students apply and the owner accepts or rejects |
| **Contribution tracking** | Log completed tasks, commits, and reviews to produce a per-student contribution report |
| **Portfolio export** | Generate a shareable snapshot of a finished project |
| **Later ideas** | Teacher dashboard, auto-generated README and UML diagrams, AI project-planning assistant |

## ✅ Current status

| Area | State |
|---|---|
| Monorepo structure (`apps/web`, `apps/api`) | ✅ Done |
| Authentication (sign in / sign up with Clerk) | ✅ Done |
| Landing page | ✅ Done |
| Database schema (Prisma + PostgreSQL) and initial migration | ✅ Done |
| CI pipeline (lint + build for web and API) | ✅ Done |
| API server | 🟡 Skeleton only (`/health` endpoint) |
| Dashboard | 🟡 Placeholder page |
| Projects, tasks, and teams (CRUD + UI) | ❌ Not started |
| Applications / teammate matching | ❌ Not started |
| Contribution tracking (GitHub integration) | ❌ Not started |
| Portfolio export | ❌ Not started |

> **Note:** the landing page describes the intended final product. Some technologies it mentions (tRPC, BullMQ, Octokit, React-PDF) are part of the plan but are not implemented yet.

## 🧱 Tech stack

**Frontend** (`apps/web`)
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Clerk for authentication
- lucide-react icons

**Backend** (`apps/api`)
- Fastify 5, TypeScript
- Prisma 7 with PostgreSQL

**Tooling**
- ESLint, GitHub Actions CI

## 🗂️ Project structure

```
student-project-platform/
├── .github/workflows/ci.yml     # Lint + build for both apps
├── apps/
│   ├── web/                     # Next.js frontend
│   │   └── app/
│   │       ├── page.tsx         # Landing page
│   │       ├── (auth)/          # Sign-in / sign-up pages
│   │       └── (dashboard)/     # Dashboard (placeholder)
│   └── api/                     # Fastify backend
│       ├── src/server.ts        # API entry point
│       └── prisma/
│           ├── models/          # User, Project, Task, Application, ...
│           └── migrations/
└── README.md
```

## 🗄️ Data model

- **User**: email, GitHub handle, avatar, skills
- **Project**: title, goal, timeline, status (`RECRUITING`, `ACTIVE`, `COMPLETED`, `ARCHIVED`), tech stack
- **ProjectMembership**: links users to projects with a role (`OWNER`, `MEMBER`)
- **Task**: title, description, status (`TODO`, `IN_PROGRESS`, `DONE`), deadline, assignee
- **Application**: a user applying to join a project for a requested role
- **Contribution**: a logged action (`TASK_COMPLETED`, `COMMIT`, `REVIEW`) linked to a user, project, and optionally a task
- **PortfolioExport**: a snapshot of a project with a public slug

## 🚀 Getting started

### Prerequisites

- Node.js 22+
- A PostgreSQL database (local, or `prisma dev`)
- A free [Clerk](https://clerk.com) account

### 1. Clone and install

```bash
git clone https://github.com/<your-username>/student-project-platform.git
cd student-project-platform

cd apps/api && npm install
cd ../web && npm install
```

### 2. Environment variables

`apps/api/.env`
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/devcollab"
```

`apps/web/.env.local`
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

### 3. Set up the database

```bash
cd apps/api
npx prisma migrate dev
```

### 4. Run

```bash
# Terminal 1: API (http://localhost:4000)
cd apps/api
npm run dev

# Terminal 2: Web (http://localhost:3000)
cd apps/web
npm run dev
```

Check the API with: `curl http://localhost:4000/health` → `{"status":"ok"}`

## 🛣️ Roadmap

- [ ] **Phase 1: Core.** Sync Clerk users to the database, create projects, create and assign tasks, basic dashboard
- [ ] **Phase 2: Teams.** Kanban board, roles, apply/accept flow for joining projects
- [ ] **Phase 3: Tracking.** Contribution log, GitHub commit import, progress charts
- [ ] **Phase 4: Differentiation.** Portfolio export, teacher view, auto README/UML generation
- [ ] **Phase 5: Advanced.** Teammate matching by skills, AI planning assistant

## 🤝 Contributing

The project is currently paused, but ideas and suggestions are welcome. Open an issue to start a discussion.

## 📄 License

Not yet specified.
