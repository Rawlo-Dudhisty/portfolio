"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./data";

export default function Nav({ active, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 16, left: "50%",
        transform: "translateX(-50%)", zIndex: 1000,
        display: "flex", alignItems: "center", gap: 4,
        background: scrolled ? "rgba(3,7,17,0.96)" : "rgba(3,7,17,0.55)",
        backdropFilter: "blur(28px)",
        border: "1px solid #172033",
        borderRadius: 100,
        padding: "8px 8px 8px 22px",
        transition: "background 0.4s",
        maxWidth: "calc(100vw - 32px)",
      }}
    >
      {/* Logo */}
      <svg
  onClick={() => scrollTo("Home")}
  width="42"
  height="42"
  viewBox="0 0 100 100"
  style={{ cursor: "pointer" }}
>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#22d3ee" />
      <stop offset="100%" stopColor="#6366f1" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#grad)" />

  <text
    x="50%"
    y="55%"
    textAnchor="middle"
    fill="#030711"
    fontSize="62"
    fontFamily="monospace"
    fontWeight="900"
  >
    ND
  </text>
</svg>

      {/* Nav items */}
      <div style={{ display: "flex", gap: 2 }}>
        {NAV_ITEMS.map((n) => (
          <button
            key={n}
            onClick={() => scrollTo(n)}
            style={{
              background:   active === n ? "#22d3ee18" : "none",
              border:       active === n ? "1px solid #22d3ee44" : "1px solid transparent",
              borderRadius: 100, cursor: "pointer",
              padding: "12px 24px",
              fontFamily: "'Courier New', monospace",
              fontSize: 14, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: active === n ? "#22d3ee" : "#475569",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { if (active !== n) e.currentTarget.style.color = "#94a3b8"; }}
            onMouseLeave={(e) => { if (active !== n) e.currentTarget.style.color = "#475569"; }}
          >
            {n}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo("Contact")}
        style={{
          marginLeft: 6, padding: "10px 20px", borderRadius: 100,
          background: "#22d3ee", color: "#030711",
          fontFamily: "'Courier New', monospace", fontWeight: 900,
          fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase",
          border: "none", cursor: "pointer", transition: "all 0.2s",
          flexShrink: 0, boxShadow: "0 0 20px #22d3ee33",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 36px #22d3ee66"; e.currentTarget.style.transform = "scale(1.06)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px #22d3ee33"; e.currentTarget.style.transform = "scale(1)"; }}
      >
        Hire Me ↗
      </button>
    </nav>
  );
}
