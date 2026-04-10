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
            Know where your
            <br />
            <span className="text-accent">money goes.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Track every expense, set monthly budgets, and finally understand
            your spending habits. Simple, private, and free.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Start Tracking Free
            </Link>
            <Link
              href="#features"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface-hover"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted">
            Free forever. No credit card required.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Take control of your finances
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              No spreadsheets, no complexity. Just a clear picture of your money.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quick Entry",
                  desc: "Add an expense in seconds. Just tap, type the amount, pick a category, done.",
                  icon: "M12 4v16m8-8H4",
                },
                {
                  title: "Monthly Budgets",
                  desc: "Set spending limits for each category. Get notified before you go over.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  title: "Spending Insights",
                  desc: "See where your money goes each month with clear breakdowns by category.",
                  icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
                },
                {
                  title: "Recurring Expenses",
                  desc: "Track subscriptions and bills automatically. Know your fixed costs at a glance.",
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                },
                {
                  title: "Multi-Currency",
                  desc: "Travel or earn in different currencies? Track everything in one place with auto-conversion.",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Private & Secure",
                  desc: "Your financial data stays on your account. We never sell your data or show you ads.",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
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
              Simple pricing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted">
              Start free. Upgrade when you need more.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
              {[
                {
                  name: "Free",
                  price: "$0",
                  desc: "For getting started",
                  features: ["100 transactions/month", "3 budget categories", "Monthly summary", "1 currency", "CSV export"],
                  cta: "Get Started",
                  highlighted: false,
                },
                {
                  name: "Premium",
                  price: "$5",
                  desc: "For serious budgeters",
                  features: [
                    "Unlimited transactions",
                    "Unlimited categories",
                    "Spending insights & trends",
                    "Multi-currency support",
                    "Recurring expense tracking",
                    "Priority support",
                  ],
                  cta: "Start Free Trial",
                  highlighted: true,
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
                      <span className="text-sm text-muted">/month</span>
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
            <h2 className="text-2xl font-bold md:text-3xl">Ready to take control?</h2>
            <p className="mt-3 text-muted">
              Join thousands of people who finally understand where their money goes.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Create Your Free Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
