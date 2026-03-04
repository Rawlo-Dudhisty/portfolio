"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./data";

export default function Nav({ active, scrollTo }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

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

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: showNav ? 10 : -80,
          left: "50%",
          transform: "translateX(-50%)",
          transition: "top 0.35s ease",
          zIndex: 1000,

          background: "rgba(3,7,17,0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid #172033",
          borderRadius: 100,

          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#22d3ee",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 4 }}>
            {NAV_ITEMS.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                style={{
                  background: active === n ? "#22d3ee18" : "none",
                  border:
                    active === n
                      ? "1px solid #22d3ee44"
                      : "1px solid transparent",
                  borderRadius: 100,
                  cursor: "pointer",
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: active === n ? "#22d3ee" : "#475569",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* SIDEBAR MENU */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: menuOpen ? 0 : "-260px",
            width: 260,
            height: "100vh",
            background: "#030711",
            borderRight: "1px solid #172033",
            padding: 24,
            transition: "left 0.3s ease",
            zIndex: 2000,
          }}
        >
          {/* CLOSE BUTTON */}
          <div
            style={{
              fontSize: 22,
              color: "#22d3ee",
              cursor: "pointer",
              marginBottom: 30,
            }}
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </div>

          {/* MENU ITEMS */}
          {NAV_ITEMS.map((n) => (
            <div
              key={n}
              onClick={() => {
                scrollTo(n);
                setMenuOpen(false);
              }}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid #172033",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      )}
    </>
  );
}