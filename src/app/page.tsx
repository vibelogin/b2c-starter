import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Build faster.
            <br />
            <span className="text-accent">Ship smarter.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Acme helps teams manage projects, track progress, and ship products
            on time. The all-in-one productivity platform for modern teams.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface-hover"
            >
              See Features
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted">
            No credit card required. Free for up to 3 projects.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Everything you need to ship
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Simple tools that get out of your way and let you focus on what matters.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Project Boards",
                  desc: "Kanban boards with drag-and-drop. Track tasks from idea to done.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                },
                {
                  title: "Team Chat",
                  desc: "Real-time messaging with threads, reactions, and file sharing.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                },
                {
                  title: "Analytics",
                  desc: "Track velocity, burndown, and team performance in real time.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  title: "File Storage",
                  desc: "Upload, organize, and share files with your team. 10 GB included.",
                  icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                },
                {
                  title: "Integrations",
                  desc: "Connect with GitHub, Slack, Figma, and 50+ other tools.",
                  icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                },
                {
                  title: "API Access",
                  desc: "REST API with webhooks. Build custom workflows and automations.",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border p-6 transition hover:border-accent/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted">
              Start free. Upgrade when you need more.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  name: "Free",
                  price: "$0",
                  desc: "For individuals and side projects",
                  features: ["3 projects", "1 team member", "1 GB storage", "Community support"],
                  cta: "Get Started",
                  highlighted: false,
                },
                {
                  name: "Pro",
                  price: "$12",
                  desc: "For growing teams",
                  features: [
                    "Unlimited projects",
                    "Up to 10 members",
                    "10 GB storage",
                    "Priority support",
                    "Analytics dashboard",
                    "API access",
                  ],
                  cta: "Start Free Trial",
                  highlighted: true,
                },
                {
                  name: "Team",
                  price: "$39",
                  desc: "For larger organizations",
                  features: [
                    "Everything in Pro",
                    "Unlimited members",
                    "100 GB storage",
                    "SSO & SAML",
                    "Audit logs",
                    "Dedicated support",
                  ],
                  cta: "Contact Sales",
                  highlighted: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border p-8 ${
                    plan.highlighted
                      ? "border-accent bg-accent/5 ring-1 ring-accent/20"
                      : "border-border"
                  }`}
                >
                  <h3 className="font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "$0" && (
                      <span className="text-sm text-muted">/mo per member</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-success shrink-0"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`mt-8 block rounded-lg py-2.5 text-center text-sm font-medium transition ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "border border-border hover:bg-surface-hover"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Ready to get started?</h2>
            <p className="mt-3 text-muted">
              Join thousands of teams shipping faster with Acme.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
