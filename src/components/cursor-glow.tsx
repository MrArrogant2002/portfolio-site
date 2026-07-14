"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** A soft accent glow that trails the cursor (desktop only). */
export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 110, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 110, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 190);
      y.set(e.clientY - 190);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden size-[380px] rounded-full opacity-50 blur-[90px] md:block"
    >
      <div
        className="size-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(190,242,100,0.35), rgba(91,140,255,0.16) 45%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
