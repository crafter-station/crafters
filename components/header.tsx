"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeSwitcherClassic } from "@/components/elements/theme-switcher-classic"
import { CrafterStationLogo } from "@/components/logos/crafter-station"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

export function Header() {
  const activeSection = useActiveSection()

  return (
    <header className="sticky top-4 z-50 mt-4 px-4 md:flex md:justify-center">
      {/* Mobile: Simple logo only */}
      <Link href="/" className="flex items-center gap-2 md:hidden">
        <CrafterStationLogo className="h-5 w-5" />
        <span className="text-sm font-medium tracking-tight text-foreground">Crafters</span>
      </Link>

      {/* Desktop: Full nav bar */}
      <nav className="mx-auto hidden h-[50px] w-full max-w-5xl items-center justify-between border border-border bg-background/70 px-4 backdrop-blur-xl md:flex">
        <Link href="/" className="flex items-center gap-2">
          <CrafterStationLogo className="h-5 w-5" />
          <span className="text-sm font-medium tracking-tight text-foreground">Crafters</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              activeSection === "about" ? "text-foreground font-medium" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link
            href="#curriculum"
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              activeSection === "curriculum" ? "text-foreground font-medium" : "text-muted-foreground"
            )}
          >
            Curriculum
          </Link>
          <Link
            href="#faq"
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              activeSection === "faq" ? "text-foreground font-medium" : "text-muted-foreground"
            )}
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcherClassic />
          <Button
            size="sm"
            className="bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            Apply Now
          </Button>
        </div>
      </nav>
    </header>
  )
}
