import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative border-y border-line bg-bg-soft/40 py-5">
      <div className="hide-scrollbar flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="animate-marquee flex shrink-0 items-center gap-8 pr-8 font-display text-2xl font-medium text-ink-soft sm:text-3xl">
          {row.map((item, i) => (
            <li key={i} className="flex items-center gap-8 whitespace-nowrap">
              {item}
              <span className="text-coral">/</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
