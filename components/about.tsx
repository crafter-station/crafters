export function About() {
  return (
    <section id="about" className="border-b border-border py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              What this is
            </h2>
            <ul className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-foreground"></span>
                <span>A guided six-week build track with clear weekly outcomes</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-foreground"></span>
                <span>A community that helps you ship consistently</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-foreground"></span>
                <span>A place to learn modern tools by using them on real problems</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-foreground"></span>
                <span>A program that values trust, design, and real users</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              What this is not
            </h2>
            <ul className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-muted-foreground"></span>
                <span>Not a bootcamp</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-muted-foreground"></span>
                <span>Not a &quot;get rich fast&quot; promise</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-muted-foreground"></span>
                <span>Not a certificate factory</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-muted-foreground"></span>
                <span>Not another chatbot course</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-muted-foreground"></span>
                <span>Not a sales funnel</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Who it&apos;s for
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-border bg-card p-6">
              <div className="text-sm font-medium text-card-foreground">
                People who want to build products, not just tutorials
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="text-sm font-medium text-card-foreground">
                Beginners who can commit to shipping small progress weekly
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="text-sm font-medium text-card-foreground">
                Developers/designers who want real product practice
              </div>
            </div>
            <div className="border border-border bg-card p-6">
              <div className="text-sm font-medium text-card-foreground">
                Anyone preparing for a world shaped by AI and modern web tools
              </div>
            </div>
          </div>
          <p className="mt-8 text-pretty text-muted-foreground">
            You do not need to be an expert. You do need consistency.
          </p>
        </div>
      </div>
    </section>
  )
}
