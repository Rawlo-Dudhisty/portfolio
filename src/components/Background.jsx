"use client";

import { useRef, useEffect, useState } from "react";

export default function Background() {
  const canvas = useRef(null);

  // ✅ Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;

    const ctx = c.getContext("2d");

    let W = (c.width = window.innerWidth);
    let H = (c.height = window.innerHeight);

    const resize = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    // ✅ Fewer stars on mobile
    const stars = Array.from(
      { length: isMobile ? 60 : 140 },
      () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * (isMobile ? 1 : 1.2) + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.007,
      })
    );

    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.a = Math.max(0.04, Math.min(0.75, s.a + s.da));
        if (s.a <= 0.04 || s.a >= 0.75) s.da *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* Base background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#030711",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.02) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(34,211,238,0.02) 1px,transparent 1px)",
          backgroundSize: isMobile ? "40px 40px" : "72px 72px",
        }}
      />

      {/* Stars */}
      <canvas
        ref={canvas}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Glow (center) */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? 300 : 900,
          height: isMobile ? 200 : 600,
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Glow (side) */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: isMobile ? 200 : 450,
          height: isMobile ? 200 : 450,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}