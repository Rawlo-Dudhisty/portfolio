"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "./data.jsx";
import Background from "./Background.jsx";
import Nav        from "./Nav.jsx";
import Hero       from "./Hero.jsx";
import Projects   from "./Projects.jsx";
import Skills     from "./Skills.jsx";
import About      from "./About.jsx";
import Contact    from "./Contact.jsx";
import Footer     from "./Footer.jsx";

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  const scrollTo = useCallback((section) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Update active nav on scroll
  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrollY = window.scrollY + 120;
  //     for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
  //       const el = document.getElementById(NAV_ITEMS[i].toLowerCase());
  //       if (el && el.offsetTop <= scrollY) {
  //         setActive(NAV_ITEMS[i]);
  //         break;
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div style={{ background: "#030711", minHeight: "100vh", color: "#f1f5f9", overflowX: "hidden" }}>
      <Background />
      <Nav active={active} scrollTo={scrollTo} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero     scrollTo={scrollTo} />
        <Projects />
        <Skills   />
        <About    />
        <Contact  />
        <Footer   scrollTo={scrollTo} />
      </div>
    </div>
  );
}
