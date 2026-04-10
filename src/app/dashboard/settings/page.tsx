export default function SettingsPage() {
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
          {/* Profile fields */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              defaultValue="Jane Doe"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue="user@example.com"
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

      {/* Plan section */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold">Plan</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Free Plan</p>
              <p className="text-sm text-muted">3 projects, 1 team member, 1 GB storage</p>
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
                Permanently delete your account and all data. This cannot be undone.
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
