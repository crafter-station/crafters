export function Stats() {
  const stats = [
    {
      label: "6 weeks",
      description: "Practical program",
    },
    {
      label: "100% free",
      description: "No payment, ever",
    },
    {
      label: "Real products",
      description: "Not just tutorials",
    },
    {
      label: "Ship weekly",
      description: "Build in public",
    },
  ]

  return (
    <section className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">{stat.label}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
