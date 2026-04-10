# B2C Starter

A clean Next.js 15 app starter with landing page and dashboard. No authentication — add your own.

## Pages

- `/` — Landing page with hero, features, pricing, and CTA
- `/dashboard` — Dashboard with stats and project list
- `/dashboard/settings` — Account settings (profile, plan, danger zone)

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    page.tsx                    # Landing page
    dashboard/
      layout.tsx                # Dashboard shell (sidebar + topbar)
      page.tsx                  # Dashboard home
      settings/page.tsx         # Account settings
  components/
    Header.tsx                  # Landing page header
    Footer.tsx                  # Landing page footer
```

## Adding Authentication

This starter has no authentication. The dashboard is unprotected and uses hardcoded user data. Add an auth provider to protect the dashboard routes and display real user info.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vibelogin/b2c-starter)
