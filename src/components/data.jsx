// ─────────────────────────────────────────────
//  data.js  —  Edit ALL your portfolio content here
// ─────────────────────────────────────────────

export const PERSONAL = {
  name: "Rawlo Dudhisty",
  shortName: "Rawlo",
  role: "Full-Stack Developer · CSE Student",
  college: "NIST Berhampur",
  batch: "CSE 2022–2026",
  location: "Berhampur, Odisha",
  email: "rawlo.dudhisty@gmail.com",
  resumeUrl: "/resume.pdf",          // put your resume PDF in /public/resume.pdf
  githubUrl: "https://github.com/Rawlo-Dudhisty",
  linkedinUrl: "https://linkedin.com/in/",
  twitterUrl: "https://twitter.com/",
  bio1: "I'm Rawlo — a 4th-year CSE student at NIST Berhampur with a serious passion for building full-stack web products. I started because I wanted to create things people actually use.",
  bio2: "I'm honest about being a beginner who ships. Every project is a chance to level up — and clients get someone who is hungry, detail-obsessed, and 100% committed to results.",
};

export const TECH = [
  { name: "React.js",   icon: "⚛",  color: "#61dafb", cat: "Frontend" },
  { name: "Next.js",    icon: "▲",  color: "#e2e8f0", cat: "Frontend" },
  { name: "Tailwind",   icon: "💨", color: "#38bdf8", cat: "Frontend" },
  { name: "TypeScript", icon: "TS", color: "#3b82f6", cat: "Frontend" },
  { name: "Node.js",    icon: "⬡",  color: "#84cc16", cat: "Backend"  },
  { name: "Express",    icon: "⚡", color: "#94a3b8", cat: "Backend"  },
  { name: "Python",     icon: "🐍", color: "#facc15", cat: "Backend"  },
  { name: "REST APIs",  icon: "⇌",  color: "#f97316", cat: "Backend"  },
  { name: "MongoDB",    icon: "🍃", color: "#4ade80", cat: "Database" },
  { name: "PostgreSQL", icon: "🐘", color: "#60a5fa", cat: "Database" },
  { name: "Google API", icon: "◆",  color: "#a78bfa", cat: "AI/ML"   },
  { name: "AI & ML",    icon: "🤖", color: "#e879f9", cat: "AI/ML"   },
];

export const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "CodeAutopsy",
    tag: "AI SaaS Platform",
    emoji: "🔬",
    year: "2025",
    desc: "Full-stack forensic code analysis engine. Paste a GitHub URL — it clones the repo, runs Python static analysis, feeds results to Google API and streams a live security + architecture report with a health score.",
    stack: ["Next.js", " API", "Python", "Node.js", "MongoDB", "WebSocket"],
    color: "rgba(105, 162, 167, 0.93)",
    status: "Live",
    features: [
      "Real-time analysis stream",
      "Security vulnerability detection",
      "Health score tracking",
      "Repo monitoring & alerts",
    ],
    liveUrl: "#",      // 🔗 Replace with your live URL
    githubUrl: "https://github.com/Rawlo-Dudhisty/CA",    // 🔗 Replace with your GitHub URL
  },
  {
    id: 2,
    num: "02",
    title: "AI Study Buddy",
    tag: "EdTech Web App",
    emoji: "🧠",
    year: "2024",
    desc: "Full-stack AI-powered study companion for engineering students. Upload PDFs and notes, get instant explanations, smart Q&A, exam prep summaries, and personalised study plans powered by Google API.",
    stack: ["Next.js", "Google API", "Node.js", "PostgreSQL", "Tailwind"],
    color: "#a78bfa",
    status: "Beta",
    features: [
      "PDF upload & parsing",
      "AI Q&A on your notes",
      "Exam prep mode",
      "Progress tracking",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Rawlo-Dudhisty/SB"
  },
  {
    id: 3,
    num: "03",
    title: "DevPortal",
    tag: "Full-Stack Dashboard",
    emoji: "⚡",
    year: "2024",
    desc: "Personal developer productivity dashboard with real-time task tracking, GitHub activity feed, AI standup generator, and a Pomodoro timer. Full-stack with JWT auth, REST API and a live MongoDB backend.",
    stack: ["React", "Express", "MongoDB", "JWT Auth", "GitHub API"],
    color: "#34d399",
    status: "Live",
    features: [
      "JWT authentication",
      "GitHub integration",
      "AI standups via Google",
      "Real-time task board",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    num: "04",
    title: "ShopSpark",
    tag: "E-Commerce Store",
    emoji: "🛒",
    year: "2024",
    desc: "Responsive e-commerce storefront with product listings, cart, Razorpay payment integration, admin dashboard and order management. Full CRUD with a Node.js + MongoDB backend.",
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind"],
    color: "#fb923c",
    status: "Live",
    features: [
      "Razorpay payments",
      "Admin dashboard",
      "Order management",
      "Mobile-first UI",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Rawlo-Dudhisty/MFS",
  },
];

export const SKILLS_DATA = [
  { name: "React.js & Next.js", pct: 82, color: "#22d3ee" },
  { name: "Tailwind CSS",        pct: 90, color: "#38bdf8" },
  { name: "Node.js & Express",   pct: 74, color: "#84cc16" },
  { name: "Python & FastAPI",    pct: 68, color: "#facc15" },
  { name: "MongoDB & SQL",       pct: 72, color: "#4ade80" },
  { name: "Google API / AI",     pct: 78, color: "#a78bfa" },
  { name: "REST API Design",     pct: 76, color: "#f97316" },
  { name: "Git & Deployment",    pct: 80, color: "#e2e8f0" },
];


export const NAV_ITEMS = ["Home", "Projects", "Skills", "About", "Contact"];

export const TYPEWRITER_WORDS = [
  "Full-Stack Web Apps",
  "AI-Powered Features",
  "Next.js Frontends",
  "Node.js Backends",
  "Google API Integrations",
  "E-Commerce Stores",
];
