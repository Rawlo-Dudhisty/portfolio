"use client";

import { TECH, TYPEWRITER_WORDS } from "./data";
import { useTypewriter, useCountUp } from "./hooks";

export default function Hero({ scrollTo }) {
  const [tw, blink] = useTypewriter(TYPEWRITER_WORDS);
  const counts = useCountUp({ p: 4, c: 3 });

  return (
    <section
      id="home"
      style={{
        minHeight: "100dvh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", textAlign: "center",
        padding: "120px 24px 60px",
      }}
    >
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: 750, height: 600, background: "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 350, height: 350, background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Available badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 24px", borderRadius: 100, border: "1px solid #22d3ee44", background: "#22d3ee0d", marginBottom: 32, animation: "fadeUp 0.5s ease both" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "block", boxShadow: "0 0 10px #22c55e", animation: "breathe 2s ease-in-out infinite" }} />
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#22d3ee", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Open to Freelance Projects</span>
      </div>

      <p style={{ fontFamily: "'Courier New', monospace", fontSize: 20, color: "#64748b", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, animation: "fadeUp 0.5s 0.05s ease both" }}>👋 Hey, I&apos;m</p>

      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(4.5rem,11vw,9rem)", fontWeight: 900, lineHeight: 0.9, marginBottom: 24, animation: "fadeUp 0.6s 0.1s ease both", letterSpacing: "-0.01em", userSelect: "none" }}>
        <span style={{ display: "block", color: "#ffffff" }}>Rawlo</span>
        <span style={{ display: "block", WebkitTextStroke: "2.5px #22d3ee", color: "transparent", fontStyle: "italic" }}>Dudhisty</span>
      </h1>

      <div style={{ maxWidth: 640, marginBottom: 20, animation: "fadeUp 0.6s 0.15s ease both" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.05rem,2.2vw,1.35rem)", color: "#cbd5e1", lineHeight: 1.75, fontStyle: "italic" }}>
          A <span style={{ color: "#22d3ee", fontStyle: "normal", fontWeight: 700 }}>Full-Stack Developer</span> & CSE student at{" "}
          <span style={{ color: "#ffffff", fontWeight: 700 }}>NIST Berhampur</span> who builds real, production-grade web apps — from pixel-perfect frontends to AI-powered backends.
        </p>
      </div>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 8, background: "#0d1829", border: "1px solid #1a2744", marginBottom: 44, animation: "fadeUp 0.6s 0.2s ease both" }}>
        <span style={{ fontSize: 14 }}>🎓</span>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#728399" }}>NIST Berhampur · CSE · Batch 2022-2026</span>
      </div>

      {/* Typewriter */}
      <p
  style={{
    fontFamily: "'Courier New', monospace",
    fontSize: "clamp(0.9rem,2vw,1.15rem)",
    color: "#475569",
    marginBottom: 32,
    minHeight: 32
  }}
>
  I build&nbsp;
  <span style={{ color: "#22d3ee", fontWeight: 700 }}>
    {tw}
    <span className="cursor">|</span>
  </span>
</p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 64, animation: "fadeUp 0.6s 0.27s ease both" }}>
        <button
          onClick={() => scrollTo("Projects")}
          style={{ padding: "15px 36px", borderRadius: 100, background: "#22d3ee", color: "#030711", fontFamily: "'Courier New', monospace", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", boxShadow: "0 0 36px #22d3ee44", transition: "all 0.25s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = "0 0 64px #22d3ee66"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 36px #22d3ee44"; }}
        >
          View My Work ↓
        </button>
        <button
          onClick={() => scrollTo("Contact")}
          style={{ padding: "15px 36px", borderRadius: 100, background: "transparent", color: "#94a3b8", fontFamily: "'Courier New', monospace", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #1e293b", cursor: "pointer", transition: "all 0.25s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee55"; e.currentTarget.style.color = "#22d3ee"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.color = "#94a3b8"; }}
        >
          Book a Free Call
        </button>
        <a
          href="/resume.pdf" download
          style={{ padding: "15px 36px", borderRadius: 100, background: "transparent", color: "#94a3b8", fontFamily: "'Courier New', monospace", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid #1e293b", cursor: "pointer", transition: "all 0.25s", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#a78bfa55"; e.currentTarget.style.color = "#a78bfa"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.color = "#94a3b8"; }}
        >
          ↓ Resume
        </a>
      </div>


      {/* Tech ticker */}
      <div style={{ width: "100%", overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)", animation: "fadeUp 0.6s 0.36s ease both" }}>
        <div style={{ display: "flex", gap: 10, animation: "ticker 20s linear infinite", width: "max-content" }}>
          {[...TECH, ...TECH].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", borderRadius: 100, background: "#0f172a", border: "1px solid #1e293b", whiteSpace: "nowrap", flexShrink: 0 }}>
              <span style={{ fontSize: 13 }}>{t.icon}</span>
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#f1f5f9", fontWeight: 700 }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", animation: "bounceY 2s ease-in-out infinite" }}
        onClick={() => scrollTo("Projects")}
      >
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#1e293b", letterSpacing: "0.2em" }}>SCROLL</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #22d3ee88, transparent)" }} />
      </div>
    </section>
  );
}
