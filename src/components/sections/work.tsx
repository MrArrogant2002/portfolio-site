import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title={
              <>
                Agentic, LLM &amp; <span className="text-gradient">full-stack.</span>
              </>
            }
          />
          <p className="mt-5 max-w-xl text-ink-soft">
            Real, deployed products — heavy on autonomous agents and LLM systems, with
            the engineering to actually ship them. Open any card for the live site.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.08}
              className={i === 2 ? "h-full lg:col-span-2" : "h-full"}
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-line-strong" />
            Also — front-end concepts
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {secondary.map((p) => (
              <a
                key={p.slug}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-line bg-surface/40 px-5 py-4 transition-colors hover:border-line-strong"
              >
                <div>
                  <p className="font-display font-semibold">{p.name}</p>
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-ink-mute">
                    {p.kind}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
