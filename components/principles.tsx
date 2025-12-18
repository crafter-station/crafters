export function Principles() {
  const principles = [
    "Craft over hype",
    "Shipping over talk",
    'Trust and comfort over "growth hacks"',
    "Practical skills over theory",
    "Community support over competition",
    "Public learning, honest progress",
  ]

  return (
    <section className="border-b border-border py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Our principles
          </h2>
          <ul className="mt-8 space-y-4">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-4 border-l-2 border-foreground pl-4 text-lg text-foreground"
              >
                {principle}
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-border pt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">Why this is free</h3>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                We want to generate real impact in society. Many people are locked out of good opportunities because
                learning is expensive, confusing, or full of false promises.
              </p>
              <p>We believe:</p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                  <span>technology can create opportunity</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                  <span>opportunity can break poverty cycles</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-foreground"></span>
                  <span>people deserve access to modern AI and product skills without being scammed</span>
                </li>
              </ul>
              <p className="font-medium text-foreground">We invest our time to help others build real capability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
