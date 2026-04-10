# B2C SaaS Starter

A clean Next.js 15 SaaS starter template with landing page, dashboard, and settings. Ready to add authentication.

## Pages

- `/` — Landing page with hero, features, pricing, and CTA
- `/login` — Login page (placeholder form)
- `/signup` — Signup page (placeholder form)
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
    login/page.tsx              # Login
    signup/page.tsx             # Signup
    dashboard/
      layout.tsx                # Dashboard shell (sidebar + topbar)
      page.tsx                  # Dashboard home
      settings/page.tsx         # Account settings
  components/
    Header.tsx                  # Landing page header
    Footer.tsx                  # Landing page footer
```

## Adding Authentication

The login and signup pages have placeholder forms. The dashboard has hardcoded user data. These are marked with `TODO` comments for easy replacement with a real auth provider.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vibelogin/b2c-saas-starter)
