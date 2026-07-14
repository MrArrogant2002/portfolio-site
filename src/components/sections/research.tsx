import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Research"
            title="Where my curiosity lives."
          />
          <p className="mt-5 max-w-xl text-ink-soft">
            Alongside building, I do IEEE-style research across AI and machine
            learning. A few of the directions I care about:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-7 transition-colors hover:border-line-strong">
                <div className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-mint" />
                  <span className="font-mono text-xs text-ink-mute">Focus 0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
