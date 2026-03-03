"use client";

import { NAV_ITEMS } from "./data";

export default function Footer({ scrollTo }) {
  return (
    <footer style={{ padding: "40px 24px 28px", borderTop: "1px solid #0a1020", background: "#030711" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex",
flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontWeight: 900, fontSize: 14, color: "#f1f5f9", marginBottom: 4, letterSpacing: -1 }}>
            Rawlo<span style={{ color: "#22d3ee" }}>.</span>dev
          </div>
          <p style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#586e91" }}>
            © 2025 Rawlo Dudhisty · NIST Berhampur · Built with Next.js & ♥
          </p>
        </div>
        <div style={{ display: "flex",
flexWrap: "wrap", gap: 4, flexWrap: "wrap" }}>
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{ padding: "6px 12px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Courier New', monospace", fontSize: 14, color: "#1e293b", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#22d3ee"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#1e293b"}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
