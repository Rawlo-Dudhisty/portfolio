"use client";

import { useRef, useEffect } from "react";

export default function Background() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let W = (c.width  = window.innerWidth);
    let H = (c.height = window.innerHeight);

    const resize = () => {
      W = c.width  = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 140 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.2 + 0.2,
      a:  Math.random(),
      da: (Math.random() - 0.5) * 0.007,
    }));

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
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      {/* Base dark bg */}
      <div style={{ position: "absolute", inset: 0, background: "#030711" }} />
      {/* Grid lines */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.022) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(34,211,238,0.022) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Animated stars */}
      <canvas ref={canvas} style={{ position: "absolute", inset: 0 }} />
      {/* Glow blobs */}
      <div
        style={{
          position: "absolute", top: "25%", left: "50%",
          transform: "translateX(-50%)", width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(34,211,238,0.055) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: 450, height: 450,
          background: "radial-gradient(circle, rgba(167,139,250,0.045) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
