"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-4 transition-all duration-300 sm:px-6",
          scrolled && "py-2.5",
        )}
      >
        <a
          href="#top"
          className={cn(
            "font-mono text-sm font-bold tracking-tight transition-colors",
            scrolled ? "text-ink" : "text-ink",
          )}
        >
          REB<span className="text-coral">.</span>
        </a>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-1 backdrop-blur transition-all duration-300 md:flex",
            scrolled ? "border-line bg-surface/70" : "border-transparent bg-transparent",
          )}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-bg transition-transform hover:scale-[1.03]"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
