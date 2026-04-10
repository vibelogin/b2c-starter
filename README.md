# CashFlow — Personal Finance Tracker (B2C Starter)

A clean, modern personal finance tracker built with **Next.js 15 (App Router)** and **Tailwind CSS 4**. Authentication is fully scaffolded using the **VibeLogin MCP server** — no manual auth code was written.

## Pages

- `/` — Landing page with hero, features, pricing, and CTA
- `/login` — Sign in / sign up (VibeLogin auth form)
- `/dashboard` — Financial overview with budget progress and transactions
- `/dashboard/settings` — Account settings (profile, currency, categories, notifications)

## Authentication — Code Scaffolded via VibeLogin MCP

The entire authentication codebase was **generated and written by the [VibeLogin](https://vibelogin.com) MCP server** running inside Claude Code. No auth code was written manually.

**MCP scaffolded 11 files** covering middleware, auth pages, API routes, providers, server helpers, sign-out button, and environment variables — all auto-detected to fit the project's `src/` directory structure.

| MCP Tool | What It Did |
|----------|-------------|
| `create_project` | Created the VibeLogin project and generated API keys |
| `configure_auth` | Enabled email+password, email OTP, and password reset |
| `add_auth_to_project` | Detected the Next.js project structure and scaffolded all auth code |

> **Note:** App-specific screens that display user data (e.g. showing the logged-in user's name or email) still need to be wired manually using the server helpers (`getSession()`, `currentUser()`) that MCP provides.

## Getting Started

```bash
# Install dependencies
npm install

# Add your VibeLogin keys to .env.local
cp .env.local.example .env.local
# Fill in VIBELOGIN_PROJECT_ID, VIBELOGIN_PUBLISHABLE_KEY, VIBELOGIN_SECRET_KEY

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 with custom theme tokens
- **Auth:** [VibeLogin](https://vibelogin.com) (`@vibelogin/nextjs`)
- **Font:** Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts   # VibeLogin API proxy
│   ├── auth/
│   │   ├── callback/route.ts        # OAuth callback handler
│   │   ├── magic-link/verify/       # Magic link verification
│   │   ├── reset-password/          # Password reset form
│   │   └── verify-email/            # Email verification
│   ├── dashboard/
│   │   ├── layout.tsx               # Protected layout with sidebar
│   │   ├── page.tsx                 # Dashboard overview
│   │   └── settings/page.tsx        # User settings
│   ├── login/page.tsx               # VibeLogin auth component
│   ├── layout.tsx                   # Root layout with providers
│   └── providers.tsx                # VibeAuthProvider wrapper
├── components/
│   ├── Header.tsx                   # Landing page header
│   ├── Footer.tsx                   # Landing page footer
│   └── sign-out-button.tsx          # Client-side sign out
├── lib/auth.ts                      # Server-side auth helpers
└── middleware.ts                    # Route protection
```

---

*Built with [Claude Code](https://claude.ai/code) + [VibeLogin MCP](https://vibelogin.com)*
