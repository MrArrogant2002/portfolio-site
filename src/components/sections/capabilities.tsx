import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Capabilities"
            title={
              <>
                What I can <span className="text-gradient">build for you.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group grid items-baseline gap-3 py-6 transition-colors sm:grid-cols-[auto_1fr_1.4fr] sm:gap-8">
                <span className="font-mono text-sm text-ink-mute">0{i + 1}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-coral">
                  {c.title}
                </h3>
                <p className="text-ink-soft">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
