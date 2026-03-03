"use client";

import { useState } from "react";
import { PROJECTS } from "./data";
import { useScrollReveal } from "./hooks";

const FILTERS = ["All", "Live", "Beta", "AI", "Full-Stack"];
const FILTER_FN = {
  All:        () => true,
  Live:       (p) => p.status === "Live",
  Beta:       (p) => p.status === "Beta",
  AI:         (p) => p.stack.includes("Google API"),
  "Full-Stack": (p) => p.stack.includes("Node.js"),
};

export default function Projects() {
  const [ref, visible]     = useScrollReveal();
  const [hovered, setHovered]       = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter(FILTER_FN[activeFilter]);

  return (
    <section id="projects" ref={ref} style={{ padding: "120px 24px", background: "#040810", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 20, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "#22d3ee", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 10 }}>// projects</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
              Things I&apos;ve <span style={{ color: "#22d3ee", fontStyle: "italic" }}>actually</span> built.
            </h2>
          </div>
          {/* Filter pills */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{ padding: "7px 16px", borderRadius: 100, fontFamily: "'Courier New', monospace", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", background: activeFilter === f ? "#22d3ee" : "#060c18", color: activeFilter === f ? "#030711" : "#475569", border: activeFilter === f ? "1px solid #22d3ee" : "1px solid #0f1a2e" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="project-card"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 20, padding: 32, cursor: "pointer",
                position: "relative", overflow: "hidden",
                background: hovered === p.id ? "#070d1a" : "#060c18",
                border: `1px solid ${hovered === p.id ? p.color + "55" : "#0f1a2e"}`,
                boxShadow: hovered === p.id ? `0 0 50px ${p.color}14, 0 20px 60px rgba(0,0,0,0.5)` : "none",                transform: hovered === p.id ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.35s ease",
                opacity: visible ? 1 : 0,
                animation: visible ? `fadeUp 0.6s ${i * 0.1}s both` : "none",
              }}
            >
              {/* Inner glow */}
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${p.color}18 0%, transparent 70%)`, pointerEvents: "none", opacity: hovered === p.id ? 1 : 0, transition: "opacity 0.4s" }} />

              {/* Top row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "2rem" }}>{p.emoji}</span>
                  <div>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: p.color, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>{p.tag} · {p.year}</div>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#1e293b", marginTop: 2 }}>{p.num}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: p.status === "Live" ? "#22c55e14" : "#facc1514", border: `1px solid ${p.status === "Live" ? "#22c55e33" : "#facc1533"}` }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.status === "Live" ? "#22c55e" : "#facc15", display: "block", animation: "breathe 2s ease-in-out infinite" }} />
                  <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: p.status === "Live" ? "#22c55e" : "#facc15", fontWeight: 700 }}>{p.status}</span>
                </div>
              </div>

              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "2.1rem", fontWeight: 900, color: "#f1f5f9", marginBottom: 10, letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#64748b", lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 6, marginBottom: 20 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#334155" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 22 }}>
                {p.stack.map((s) => (
                  <span key={s} style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#475569", padding: "3px 9px", borderRadius: 6, background: "#0d1829", border: "1px solid #1a2744" }}>{s}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 10 }}>
                <a href={p.liveUrl}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 10, background: p.color + "18", border: `1px solid ${p.color}44`, textDecoration: "none", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: p.color, transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = p.color + "2e"}
                  onMouseLeave={(e) => e.currentTarget.style.background = p.color + "18"}
                >↗ Live Demo</a>
                <a href={p.githubUrl}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 10, background: "#0d1829", border: "1px solid #1a2744", textDecoration: "none", fontFamily: "'Courier New', monospace", fontSize: 14, color: "#475569", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "#334155"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.borderColor = "#1a2744"; }}
                >⬡ GitHub</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center", opacity: visible ? 1 : 0, transition: "opacity 1.2s 0.5s" }}>
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#1e293b" }}>✦ More projects in progress · Star me on GitHub ✦</span>
        </div>
      </div>
    </section>
  );
}
