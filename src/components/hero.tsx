"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const focusTags = ["Agentic AI", "LLMs", "Deep Learning", "RAG", "PyTorch"];

export function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_18%,#000,transparent)]" />
        <div
          className="animate-float-slow absolute -left-24 top-16 size-[42vw] max-w-[520px] rounded-full opacity-25 blur-[110px]"
          style={{ background: "radial-gradient(circle, #bef264, transparent 65%)" }}
        />
        <div
          className="animate-float-slower absolute bottom-4 right-[-10%] size-[40vw] max-w-[520px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #5b8cff, transparent 65%)" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl gap-12 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10"
      >
        {/* text */}
        <div>
          <motion.p variants={item} className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-coral opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-coral" />
              </span>
              Available for work
            </span>
            <span className="text-ink-mute">/ {profile.location}</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl"
          >
            Rapolu
            <br />
            Eswara Balu
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            {profile.role} — {profile.focus}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              View work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-coral hover:text-coral"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {focusTags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-soft"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* photo */}
        <motion.div variants={item} className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div
            aria-hidden
            className="absolute -inset-5 -z-10 rounded-[2rem] opacity-45 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 25% 15%, #bef264, transparent 55%), radial-gradient(circle at 85% 90%, #5b8cff, transparent 55%)",
            }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-bg-soft">
            <div className="relative aspect-[4/5] w-full">
              {imgOk ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  onError={() => setImgOk(false)}
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <span className="text-gradient font-display text-7xl font-bold">REB</span>
                </div>
              )}
              <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
              <div aria-hidden className="absolute left-3 top-3 size-6 border-l-2 border-t-2 border-coral" />
              <div aria-hidden className="absolute bottom-14 right-3 size-6 border-b-2 border-r-2 border-coral" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.2em]">
              <span className="text-ink">Rapolu E. Balu</span>
              <span className="text-signal">AI · ML</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
