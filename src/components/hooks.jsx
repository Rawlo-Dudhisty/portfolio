import { useState, useEffect, useRef } from "react";

// Scroll reveal hook — triggers once when element enters viewport
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// Typewriter hook — cycles through words with delete animation
export function useTypewriter(words, speed = 85) {
  const [display, setDisplay] = useState("");
  const [wi, setWi]       = useState(0);
  const [ci, setCi]       = useState(0);
  const [del, setDel]     = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 520);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const w = words[wi];
    let timer;
    if (!del && ci < w.length)
      timer = setTimeout(() => { setDisplay(w.slice(0, ci + 1)); setCi((c) => c + 1); }, speed);
    else if (!del && ci === w.length)
      timer = setTimeout(() => setDel(true), 2000);
    else if (del && ci > 0)
      timer = setTimeout(() => { setDisplay(w.slice(0, ci - 1)); setCi((c) => c - 1); }, speed / 2);
    else {
      setDel(false);
      setWi((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [ci, del, wi, words, speed]);

  return [display, blink];
}

// Counter animation hook
export function useCountUp(targets, delay = 600, duration = 1800) {
  const [counts, setCounts] = useState(
    Object.fromEntries(Object.keys(targets).map((k) => [k, 0]))
  );
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const prog = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      setCounts(
        Object.fromEntries(Object.keys(targets).map((k) => [k, Math.round(ease * targets[k])]))
      );
      if (prog < 1) requestAnimationFrame(tick);
    };
    const t = setTimeout(() => requestAnimationFrame(tick), delay);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line
  return counts;
}
