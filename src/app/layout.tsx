import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapolu-portfolio.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Portfolio of Rapolu Eswara Balu — AI/ML researcher & full-stack engineer building deep-learning models, autonomous agents, RAG systems, and the interfaces around them.",
  keywords: [
    "Rapolu Eswara Balu",
    "AI researcher",
    "machine learning",
    "agentic AI",
    "RAG",
    "full-stack engineer",
    "portfolio",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "AI/ML researcher & full-stack engineer. Five shipped products across UI/UX, web, LLMs, and agentic AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">
        <div className="grain" aria-hidden />
        <CursorGlow />
        <SiteNav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
