"use client"

import { useState } from "react"

export function BuiltWithV0() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-[1000] hidden md:flex"
      style={{
        border: "1px solid hsl(0deg 0% 100% / 12%)",
        background: "#121212",
        color: "white",
        padding: "8px 12px",
        borderRadius: "8px",
        fontWeight: 400,
        fontSize: "14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        letterSpacing: "0.02em",
        transition: "all 0.2s",
        alignItems: "center",
        gap: "4px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <a
        href="https://v0.dev"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        Built with
        <svg
          fill="currentColor"
          viewBox="0 0 147 70"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "20px", height: "20px" }}
        >
          <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
          <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
        </svg>
      </a>

      <button
        onClick={() => setVisible(false)}
        className="opacity-70 hover:opacity-100"
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          padding: "2px",
          marginLeft: "4px",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          transition: "opacity 0.2s",
        }}
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

      <span className="sr-only">v0</span>
    </div>
  )
}

