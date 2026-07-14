import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [from, to] = project.gradient;
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-8"
    >
      {/* hover gradient strip */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
      {/* identity orb */}
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: `radial-gradient(circle, ${from}, transparent 70%)` }}
      />

      <div className="relative flex items-center justify-between">
        <span className="eyebrow" style={{ color: from }}>
          {project.kind}
        </span>
        <span className="font-mono text-xs text-ink-mute">
          {String(index + 1).padStart(2, "0")} — {project.year}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-3xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="relative mt-1 text-ink">{project.tagline}</p>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-coral">
        Visit live
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
