import "./globals.css";

export const metadata = {
  title: "Rawlo Dudhisty — Full-Stack Developer",
  description:
    "Full-Stack Developer & CSE student at NIST Berhampur. I build real, production-grade web apps — from pixel-perfect frontends to AI-powered backends.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Node.js", "Google API", "Freelance", "NIST Berhampur"],
  authors: [{ name: "Rawlo Dudhisty" }],
  openGraph: {
    title: "Rawlo Dudhisty — Full-Stack Developer",
    description: "Full-Stack Developer & CSE student who ships real web products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
