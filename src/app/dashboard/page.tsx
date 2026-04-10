export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="mt-1 text-sm text-muted">
            Your spending this month at a glance.
          </p>
        </div>
        <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark">
          + Add Expense
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Spent This Month", value: "$2,340", change: "+12% vs last month", negative: true },
          { label: "Budget Remaining", value: "$660", change: "$3,000 budget", negative: false },
          { label: "Transactions", value: "47", change: "+8 this week", negative: false },
          { label: "Largest Expense", value: "$520", change: "Rent — Apr 1", negative: false },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-xs font-medium text-muted uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className={`mt-1 text-xs ${stat.negative ? "text-danger" : "text-muted"}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Budget progress */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Budget Progress</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { category: "Groceries", spent: 420, budget: 500, color: "bg-accent" },
            { category: "Dining Out", spent: 280, budget: 200, color: "bg-danger" },
            { category: "Transport", spent: 95, budget: 150, color: "bg-accent" },
            { category: "Entertainment", spent: 120, budget: 100, color: "bg-warning" },
          ].map((item) => {
            const pct = Math.min((item.spent / item.budget) * 100, 100);
            const over = item.spent > item.budget;
            return (
              <div key={item.category} className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className={over ? "text-danger font-medium" : "text-muted"}>
                    ${item.spent} / ${item.budget}
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-border">
                  <div
                    className={`h-2 rounded-full transition-all ${over ? "bg-danger" : item.color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {over && (
                  <p className="mt-1 text-xs text-danger">
                    ${item.spent - item.budget} over budget
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent transactions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
        <div className="mt-4 rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left font-medium text-muted">Description</th>
                <th className="px-4 py-3 text-left font-medium text-muted">Category</th>
                <th className="px-4 py-3 text-left font-medium text-muted">Date</th>
                <th className="px-4 py-3 text-right font-medium text-muted">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                { desc: "Whole Foods Market", category: "Groceries", date: "Today", amount: -64.23 },
                { desc: "Uber ride", category: "Transport", date: "Today", amount: -18.50 },
                { desc: "Netflix", category: "Entertainment", date: "Yesterday", amount: -15.99 },
                { desc: "Salary deposit", category: "Income", date: "Apr 1", amount: 4200.00 },
                { desc: "Sushi dinner", category: "Dining Out", date: "Mar 30", amount: -52.00 },
                { desc: "Gym membership", category: "Health", date: "Mar 28", amount: -49.99 },
                { desc: "Coffee shop", category: "Dining Out", date: "Mar 28", amount: -6.75 },
              ].map((tx) => (
                <tr key={`${tx.desc}-${tx.date}`} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{tx.desc}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      tx.category === "Income"
                        ? "bg-success/10 text-success"
                        : "bg-accent/10 text-accent"
                    }`}>
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{tx.date}</td>
                  <td className={`px-4 py-3 text-right font-medium ${
                    tx.amount > 0 ? "text-success" : ""
                  }`}>
                    {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
