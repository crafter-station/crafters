export function Curriculum() {
  const weeks = [
    {
      week: "Week 1",
      title: "Foundations, purpose, setup",
      items: [
        "Choose a real problem and define a simple product",
        "Next.js setup, GitHub workflow",
        "Design thinking basics",
      ],
      output: "problem statement + product plan + repo",
    },
    {
      week: "Week 2",
      title: "UI and trust",
      items: ["shadcn components and patterns", "Layout, accessibility basics", "Design tokens foundations"],
      output: "core screens + simple design rules",
    },
    {
      week: "Week 3",
      title: "Data and core features",
      items: ["Neon database basics", "ORM basics (Prisma or Drizzle)", "Build one end-to-end product flow"],
      output: "database connected + core feature working",
    },
    {
      week: "Week 4",
      title: "Background tasks and reliability",
      items: ["Trigger.dev for long-running tasks", "Retries, failures, and safe workflows"],
      output: "one background job integrated",
    },
    {
      week: "Week 5",
      title: "Practical AI (optional, useful)",
      items: ["AI SDK basics", "When AI helps (and when it does not)", "UX for AI features: clarity, control, trust"],
      output: "a small AI-assisted feature or a clear decision to skip AI",
    },
    {
      week: "Week 6",
      title: "Launch and share",
      items: ["Deploy with Vercel", "Production checklist", "Launch post and sharing plan"],
      output: "live product + launch post + roadmap",
    },
  ]

  return (
    <section id="curriculum" className="border-b border-border py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            What you&apos;ll learn
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            6 weeks of structured learning and real product development
          </p>
        </div>

        <div className="mt-16 space-y-0">
          {weeks.map((week, index) => (
            <div key={week.week} className="border-t border-border py-8 first:border-t-0">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <div className="text-sm text-muted-foreground">{week.week}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight text-foreground">{week.title}</div>
                </div>

                <div className="lg:col-span-5">
                  <ul className="space-y-2">
                    {week.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-muted-foreground"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Output</div>
                  <div className="mt-2 text-sm font-medium text-foreground">{week.output}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-border bg-card p-8">
          <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
            The weekly rule: build in public
          </h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>Every week you will:</p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                <span>ship a small improvement</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                <span>share a short progress post</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                <span>say what you learned</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                <span>ask for feedback</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                <span>support other builders</span>
              </li>
            </ul>
            <p className="mt-4 font-medium text-foreground">
              {/* This is how you build leverage: skills + visibility + community. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
