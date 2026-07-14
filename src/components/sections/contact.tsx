import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line py-28 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-float-slow absolute left-1/2 top-1/3 size-[60vw] max-w-[640px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff6a3d, #8b6cff 55%, transparent 75%)" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-mint" />
              Available for work
            </span>
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">worth shipping.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            Open to roles and freelance work across AI/ML, agentic systems, RAG, and
            full-stack product. If any of this resonates, reach out.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${profile.email}?subject=Let%27s%20work%20together`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-sm text-ink-soft transition-colors hover:text-coral"
            >
              GitHub — @MrArrogant2002
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
