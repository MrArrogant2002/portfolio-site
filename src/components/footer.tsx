import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-ink-mute">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5 text-xs text-ink-soft">
          <a href={`mailto:${profile.email}`} className="hover:text-coral">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-coral">
            GitHub
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-coral">
            Top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
