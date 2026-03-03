"use client";

import { useState } from "react";
import { TECH, SKILLS_DATA } from "./data";
import { useScrollReveal } from "./hooks";

const CATS = ["All", "Frontend", "Backend", "Database", "AI/ML"];

export default function Skills() {
  const [ref, visible]       = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [activecat, setActivecat] = useState("All");

  const filtered = activecat === "All" ? TECH : TECH.filter((t) => t.cat === activecat);

  return (
    <section id="skills" ref={ref} style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>

        {/* Skill bars */}
        <div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#22d3ee", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12 }}>// skill_levels</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 40 }}>
            Honestly rated.<br /><span style={{ color: "#475569", fontStyle: "italic" }}>Fast growing.</span>
          </h2>
          {SKILLS_DATA.map((s, i) => (
            <div key={s.name} style={{ marginBottom: 22, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-16px)", transition: `all 0.6s ease ${i * 0.08}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#94a3b8", fontWeight: 700 }}>{s.name}</span>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: s.color, fontWeight: 700 }}>{visible ? s.pct : 0}%</span>
              </div>
              <div style={{ height: 5, borderRadius: 100, background: "#0d1829", overflow: "hidden" }}>
                <div style={{ height: "100%", borderRadius: 100, background: `linear-gradient(90deg,${s.color}99,${s.color})`, width: visible ? `${s.pct}%` : "0%", transition: `width 1.5s cubic-bezier(0.34,1.1,0.64,1) ${i * 90}ms`, boxShadow: visible ? `0 0 12px ${s.color}55` : "none" }} />
              </div>
            </div>
          ))}
          
        </div>

        {/* Tech grid */}
        <div ref={gridRef}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#334155", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>// tech_stack</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActivecat(c)}
                style={{ padding: "6px 14px", borderRadius: 100, fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", background: activecat === c ? "#22d3ee" : "#060c18", color: activecat === c ? "#030711" : "#475569", border: activecat === c ? "1px solid #22d3ee" : "1px solid #0f1a2e" }}
              >
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {filtered.map((t, i) => (
              <div
                key={t.name}
                style={{ borderRadius: 12, padding: "16px 14px", background: "#060c18", border: "1px solid #0f1a2e", textAlign: "center", cursor: "default", opacity: gridVisible ? 1 : 0, transform: gridVisible ? "scale(1)" : "scale(0.85)", transition: `all 0.45s cubic-bezier(0.34,1.2,0.64,1) ${i * 0.05}s` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.color + "55"; e.currentTarget.style.background = "#0a1220"; e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#0f1a2e"; e.currentTarget.style.background = "#060c18"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 7 }}>{t.icon}</div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#64748b", fontWeight: 700, marginBottom: 3 }}>{t.name}</div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: t.color, letterSpacing: "0.05em" }}>{t.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
