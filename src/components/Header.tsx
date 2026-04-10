import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Acme
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="#features" className="text-muted hover:text-foreground transition">
            Features
          </Link>
          <Link href="#pricing" className="text-muted hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="/login" className="text-muted hover:text-foreground transition">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
