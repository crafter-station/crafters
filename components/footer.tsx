import { CrafterStationLogo } from "@/components/logos/crafter-station"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 pt-10 md:px-6 md:pt-16">
      <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <CrafterStationLogo className="h-8 w-8" />
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold tracking-tight">Crafters</span>
              <span className="text-sm text-muted-foreground">by Crafter Station</span>
            </div>
          </div>

          <div className="mt-12 border border-border bg-card p-6">
            {/* <div className="text-sm font-medium text-card-foreground">Trust note</div> */}
            <p className="mt-2 text-sm text-muted-foreground">
              Crafters by Crafter Station is a community learning program. We do not sell &quot;secrets,&quot;
              shortcuts, or unrealistic promises. We only offer practice, support, and honest work.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>&copy; 2025 Crafter Station. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>

          <div className="pointer-events-none select-none pt-12">
            <div className="text-center text-[18vw] leading-none text-[#F4F4F3] dark:text-[#161616] md:text-[180px]">
              crafters
            </div>
          </div>
      </div>
    </footer>
  )
}
