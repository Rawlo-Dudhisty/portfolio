"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "./hooks";

const PERSONAL = {
  name: "Rawlo Dudhisty",
  role: "Full Stack Developer"
};

export default function About() {
  const [ref, visible] = useScrollReveal();
  const [tIdx, setTIdx] = useState(0);

  return (
    <section id="about" ref={ref} style={{ padding: "120px 24px", background: "#040810" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>

          {/* Left — Bio */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(28px)", transition: "all 0.7s ease" }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "#22d3ee", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12 }}>// about_me</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 24 }}>
              A CS student<br />who actually<br /><span style={{ color: "#22d3ee", fontStyle: "italic" }}>ships things.</span>
            </h2>

            {/* Profile card */}
            <div style={{ borderRadius: 16, padding: 22, background: "#060c18", border: "1px solid #0f1a2e", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#22d3ee,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontWeight: 900, fontSize: 22, color: "#030711", flexShrink: 0 }}>R</div>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontWeight: 900, fontSize: "1.15rem", color: "#f1f5f9" }}>{PERSONAL.name}</div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 16, color: "#22d3ee", marginTop: 2 }}>{PERSONAL.role}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  ["🎓", "NIST Berhampur", "CSE 2022–2026"],
                  ["📍", "Berhampur, Odisha", "Open to Remote"],
                  ["💼", "Freelance", "Available Now"],
                  ["⚡", "Focus", "Full-Stack + AI"],
                ].map(([ico, lbl, sub]) => (
                  <div key={lbl} style={{ padding: "9px 13px", borderRadius: 9, background: "#0a1525", border: "1px solid #131e30" }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#475569", marginBottom: 2 }}>{ico} {lbl}</div>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#22d3ee" }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#64748b", lineHeight: 1.9, marginBottom: 14 }}>{PERSONAL.bio1}</p>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#64748b", lineHeight: 1.9, marginBottom: 28 }}>
              I&apos;m honest about being a <strong style={{ color: "#22d3ee" }}>beginner who ships</strong>. Every project is a chance to level up — and clients get someone who is hungry, detail-obsessed, and 100% committed to results.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                ["⬡ GitHub",   PERSONAL.githubUrl],
                ["in LinkedIn", PERSONAL.linkedinUrl],
                ["𝕏 Twitter",  PERSONAL.twitterUrl],
                ["@ Email",    `mailto:${PERSONAL.email}`],
              ].map(([lbl, href]) => (
                <a key={lbl} href={href}
                  style={{ padding: "8px 14px", borderRadius: 9, background: "#060c18", border: "1px solid #0f1a2e", cursor: "pointer", fontFamily: "'Courier New', monospace", fontSize: 9.5, color: "#475569", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee44"; e.currentTarget.style.color = "#22d3ee"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#0f1a2e"; e.currentTarget.style.color = "#475569"; }}
                >
                  {lbl}
                </a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 22, padding: 50, borderRadius: 14, background: "#060c18", border: "1px solid #22d3ee1a", opacity: visible ? 1 : 0, transition: "opacity 1.2s 0.8s" }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 17, color: "#22d3ee", fontWeight: 700, marginBottom: 18 }}>🚀 Honest about being a student.</div>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: 17, color: "#5e7eaa", lineHeight: 1.8 }}>I don&apos;t fake seniority. These are real levels — improving every week. You get a developer who learns fast, ships clean code, and treats your project like it&apos;s their own.</p>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 17, color: "#334155", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}></div>
            {[
              ["01", "Discovery", "I understand your business goal — not just the feature list."],
              ["02", "Build",     "Clean code, fast delivery, constant progress updates."],
              ["03", "Launch",    "Tested, deployed, and yours — with 2 weeks of free support."],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                style={{ display: "flex",gap: 14,alignItems: "flex-start",width: "100%", marginBottom: 12, padding: "14px 18px", borderRadius: 12, background: "#060c18", border: "1px solid #0f1a2e", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#22d3ee22"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#0f1a2e"}
              >
                <div style={{ fontFamily: "'Courier New', monospace", fontWeight: 900, fontSize: 14, color: "#22d3ee", flexShrink: 0, minWidth: 20 }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 14, color: "#dfe3e9", marginBottom: 3 }}>{title}</div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, color: "#334155", lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
    </section>
  );
}
