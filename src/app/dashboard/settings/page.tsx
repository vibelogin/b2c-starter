import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await currentUser();
  if (!user) redirect("/login");
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-muted">
        Manage your account and preferences.
      </p>

      {/* Profile section */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Profile</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              defaultValue={user.name ?? ""}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              disabled
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted outline-none"
            />
            <p className="mt-1 text-xs text-muted">
              Email cannot be changed.
            </p>
          </div>
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark">
            Save changes
          </button>
        </div>
      </section>

      {/* Currency */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Currency</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6">
          <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent">
            <option>USD ($) — US Dollar</option>
            <option>EUR (&euro;) — Euro</option>
            <option>GBP (&pound;) — British Pound</option>
            <option>INR (&rupee;) — Indian Rupee</option>
            <option>JPY (&yen;) — Japanese Yen</option>
            <option>CAD ($) — Canadian Dollar</option>
            <option>AUD ($) — Australian Dollar</option>
          </select>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Expense Categories</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6 space-y-2">
          {["Groceries", "Dining Out", "Transport", "Entertainment", "Health", "Shopping", "Bills", "Other"].map((cat) => (
            <div key={cat} className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm">
              <span>{cat}</span>
              <button className="text-xs text-muted hover:text-danger transition">Remove</button>
            </div>
          ))}
          <button className="mt-2 rounded-lg border border-dashed border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent w-full">
            + Add Category
          </button>
        </div>
      </section>

      {/* Notifications */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6 space-y-3">
          {[
            { label: "Budget alerts (when nearing limit)", checked: true },
            { label: "Weekly spending summary", checked: true },
            { label: "Monthly report", checked: false },
            { label: "Tips & product updates", checked: false },
          ].map((pref) => (
            <label key={pref.label} className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={pref.checked}
                className="h-4 w-4 rounded border-border accent-accent"
              />
              {pref.label}
            </label>
          ))}
        </div>
      </section>

      {/* Plan section */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Plan</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Free Plan</p>
              <p className="text-sm text-muted">100 transactions/month, 3 categories</p>
            </div>
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:bg-surface-hover">
              Upgrade
            </button>
          </div>
        </div>
      </section>

      {/* Danger zone */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-danger">Danger Zone</h2>
        <div className="mt-4 rounded-xl border border-danger/30 bg-danger/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete account</p>
              <p className="text-sm text-muted">
                Permanently delete your account and all financial data. This cannot be undone.
              </p>
            </div>
            <button className="rounded-lg border border-danger/30 px-4 py-2 text-sm font-medium text-danger transition hover:bg-danger/10">
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
