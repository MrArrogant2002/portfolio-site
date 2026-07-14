import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile, stats } from "@/lib/data";

const exploring = ["Mamba / SSMs", "Advanced RAG", "Multi-agent systems", "Flutter"];

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-ink-mute">{k}</dt>
      <dd className="text-right text-ink">{v}</dd>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <Reveal>
            <SectionHeading index="02" eyebrow="About" title="Research meets shipping." />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="eyebrow">Currently exploring</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exploring.map((x) => (
                  <span
                    key={x}
                    className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-ink-soft"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4">
            <div className="rounded-2xl border border-line bg-surface/40 p-6 font-mono text-sm">
              <p className="eyebrow border-b border-line pb-3">{"// profile"}</p>
              <dl className="mt-4 space-y-3">
                <Row k="role" v={profile.role} />
                <Row k="focus" v={<span className="text-signal">Agentic · LLM · ML</span>} />
                <Row k="based" v={profile.location} />
                <Row k="writes" v="IEEE-style research" />
                <Row k="status" v={<span className="text-signal">available</span>} />
              </dl>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-line bg-surface/40 p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[0.66rem] leading-tight text-ink-mute">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
