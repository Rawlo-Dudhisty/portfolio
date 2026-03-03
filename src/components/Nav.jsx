"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./data";

export default function Nav({ active, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  // ✅ detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,

        display: "flex",
        flexWrap: "wrap", // ✅ allow wrap

        alignItems: "center",
        justifyContent: "center",

        gap: isMobile ? 6 : 4,

        background: scrolled
          ? "rgba(3,7,17,0.96)"
          : "rgba(3,7,17,0.55)",

        backdropFilter: "blur(20px)",
        border: "1px solid #172033",
        borderRadius: 100,

        padding: isMobile ? "6px 10px" : "8px 8px 8px 22px",

        maxWidth: "calc(100vw - 20px)",
      }}
    >

      {/* Nav items */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // ✅ wrap items
          justifyContent: "center",
          gap: 4,
        }}
      >
        {NAV_ITEMS.map((n) => (
          <button
            key={n}
            onClick={() => scrollTo(n)}
            style={{
              background:
                active === n ? "#22d3ee18" : "none",

              border:
                active === n
                  ? "1px solid #22d3ee44"
                  : "1px solid transparent",

              borderRadius: 100,
              cursor: "pointer",

              padding: isMobile ? "8px 12px" : "12px 24px", // ✅ smaller

              fontSize: isMobile ? 11 : 14, // ✅ smaller text
              fontWeight: 700,

              color: active === n ? "#22d3ee" : "#475569",
            }}
          >
            {n}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo("Contact")}
        style={{
          padding: isMobile ? "8px 12px" : "10px 20px",
          borderRadius: 100,

          background: "#22d3ee",
          color: "#030711",

          fontSize: isMobile ? 11 : 14,
          fontWeight: 900,

          border: "none",
          cursor: "pointer",

          flexShrink: 0,
        }}
      >
        Hire Me ↗
      </button>
    </nav>
  );
}