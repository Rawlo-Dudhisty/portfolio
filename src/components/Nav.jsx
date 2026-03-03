"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./data";

export default function Nav({ active, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  // ✅ detect mobile
  const [isMobile, setIsMobile] = useState(false);

  // ✅ NEW: auto hide navbar
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 60);

      // 🔥 hide on scroll down, show on scroll up
      if (current > lastScroll && current > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

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

        // 🔥 KEY CHANGE (auto hide)
        top: showNav ? 10 : -80,
        left: "50%",
        transform: "translateX(-50%)",
        transition: "top 0.3s ease",

        zIndex: 1000,

        display: "flex",
        flexWrap: "wrap",
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
          flexWrap: "wrap",
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

              padding: isMobile ? "8px 12px" : "12px 24px",

              fontSize: isMobile ? 11 : 14,
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