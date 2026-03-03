"use client";

import { useState } from "react";
import { PERSONAL } from "./data";
import { useScrollReveal } from "./hooks";

export default function Contact() {
  const [ref, visible] = useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const inputBase = (field) => ({
    width: "100%",
    padding: "16px 20px",
    borderRadius: 12,
    outline: "none",
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    color: "#e2e8f0",
    background: "#060c18",
    border: `1px solid ${
      errors[field]
        ? "#f87171"
        : focused === field
        ? "#22d3ee55"
        : "#0f1a2e"
    }`,
    transition: "border-color 0.25s",
    boxSizing: "border-box",
    caretColor: "#22d3ee",
  });

  const lbl = (text, req) => (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: 14,
        color: "#334155",
        marginBottom: 6,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
      }}
    >
      {text}
      {req && <span style={{ color: "#22d3ee", marginLeft: 3 }}>*</span>}
    </div>
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !form.email.includes("@")) e.email = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

 const handleSend = async () => {
  if (!validate()) return;

  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSent(true);
    }
  } catch (err) {
  console.log("ERROR:", err); 
  res.status(500).json({ error: "Failed to send" });
 }

  setLoading(false);
};

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "120px 24px 80px", position: "relative",overflowX: "hidden" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 72,
          }}
        >
          {/* LEFT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <h2 className="hero-title">
              Let&apos;s build something great
            </h2>

            <p style={{ color: "#64748b", lineHeight: 1.8 }}>
              Tell me about your idea — I’ll reply within 24 hours with a plan.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: 60 }}>
                <h3 style={{ color: "#22d3ee" }}>Message Sent </h3>
                <button onClick={() => setSent(false)}>Send Again</button>
              </div>
            ) : (
              <div
                style={{
                  borderRadius: 20,
                  padding: "clamp(20px, 5vw, 50px)",
                  background: "#060c18",
                  border: "1px solid #0f1a2e",
                }}
              >
                {/* Name + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    {lbl("Name", true)}
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={inputBase("name")}
                    />
                  </div>

                  <div>
                    {lbl("Email", true)}
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputBase("email")}
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div style={{ marginBottom: 20 }}>
                  {lbl("Project Type")}
                  <select
                    value={form.type}
                    onChange={(e) =>
                      setForm({ ...form, type: e.target.value })
                    }
                    style={{ ...inputBase("type"), cursor: "pointer" }}
                  >
                    <option value="">Select type</option>
                    <option>Website</option>
                    <option>Full Stack App</option>
                    <option>AI Feature</option>
                    <option>Dashboard</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 20 }}>
                  {lbl("Message", true)}
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...inputBase("message") }}
                  />
                </div>

                <button
                  onClick={handleSend}
                  style={{
                    width: "100%",
                    padding: 16,
                    background: "#22d3ee",
                    color: "#000",
                    borderRadius: 12,
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {loading ? "Sending..." : "Send Message 🚀"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}