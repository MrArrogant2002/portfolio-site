import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-coral">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
