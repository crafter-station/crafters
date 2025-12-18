"use client"

import { useEffect, useState } from "react"

export function ScrollFade() {
  const [bottomOpacity, setBottomOpacity] = useState(1)
  const [topOpacity, setTopOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      const scrollBottom = scrollHeight - scrollTop - clientHeight

      // Fade out bottom when near end (within 200px)
      const bottomFade = Math.min(scrollBottom / 200, 1)
      setBottomOpacity(bottomFade)

      // Fade in top when scrolled (within 100px)
      const topFade = Math.min(scrollTop / 100, 1)
      setTopOpacity(topFade)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-20"
        style={{
          background: "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
          opacity: topOpacity,
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-[150px] md:h-[150px]"
        style={{
          background: "linear-gradient(to top, var(--background) 20%, transparent 100%)",
          opacity: bottomOpacity,
          bottom: "0px",
        }}
      />
    </>
  )
}

