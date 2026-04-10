export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="mt-1 text-sm text-muted">
        Here&apos;s what&apos;s happening with your projects.
      </p>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Projects", value: "12", change: "+2 this month" },
          { label: "Active Tasks", value: "48", change: "6 due today" },
          { label: "Team Members", value: "8", change: "+1 this week" },
          { label: "Completion Rate", value: "87%", change: "+4% vs last month" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-xs font-medium text-muted uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent projects */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Recent Projects</h2>
        <div className="mt-4 rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-medium text-muted">Project</th>
                <th className="px-4 py-3 text-left font-medium text-muted">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted">Tasks</th>
                <th className="px-4 py-3 text-left font-medium text-muted">Updated</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Website Redesign", status: "In Progress", tasks: "12/18", updated: "2 hours ago" },
                { name: "Mobile App v2", status: "Planning", tasks: "0/24", updated: "1 day ago" },
                { name: "API Integration", status: "In Review", tasks: "8/10", updated: "3 hours ago" },
                { name: "Marketing Campaign", status: "Completed", tasks: "15/15", updated: "5 days ago" },
                { name: "Database Migration", status: "In Progress", tasks: "5/8", updated: "1 hour ago" },
              ].map((project) => (
                <tr key={project.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{project.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-success/10 text-success"
                          : project.status === "In Progress"
                          ? "bg-accent/10 text-accent"
                          : project.status === "In Review"
                          ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                          : "bg-muted/10 text-muted"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{project.tasks}</td>
                  <td className="px-4 py-3 text-muted">{project.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
