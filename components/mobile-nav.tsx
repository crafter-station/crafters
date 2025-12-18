"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeSwitcherClassic } from "@/components/elements/theme-switcher-classic"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const activeSection = useActiveSection()
  const [showBadge, setShowBadge] = useState(true)

  return (
    <div className="fixed bottom-4 left-2 right-2 z-50 flex flex-col items-end gap-2 md:hidden">
      {/* Built with v0 badge - above navbar */}
      {showBadge && (
        <div
          className="mr-1 flex items-center gap-1 rounded-lg border border-white/10 bg-[#121212] px-2.5 py-1.5 text-xs text-white shadow-md"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white no-underline"
          >
            Built with
            <svg
              fill="currentColor"
              viewBox="0 0 147 70"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
              <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
            </svg>
          </a>
          <button
            onClick={() => setShowBadge(false)}
            className="ml-1 flex items-center rounded-sm border-none bg-transparent p-0.5 text-white opacity-70 transition-opacity hover:opacity-100"
            aria-label="Close"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Main navbar */}
      <nav className="flex h-[50px] w-full items-center justify-between border border-border bg-background/70 px-4 backdrop-blur-xl">
        <div className="flex items-center gap-5">
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
            Apply
          </Button>
        </div>
      </nav>
    </div>
  )
}

