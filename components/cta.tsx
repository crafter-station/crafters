import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <div className="border border-border bg-card px-10 py-14 text-center md:px-24 md:py-20">
          <h2 className="text-balance text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            Join Crafters.
          </h2>
          <p className="mt-6 text-pretty text-[#878787]">
            If you want to build real skills, ship a real product, and grow in public with a supportive community,
            you&apos;re in the right place.
          </p>
          <div className="mt-10">
            <Button className="h-12 px-5 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
              Apply / Join
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
