import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useScrollAnimation(threshold = 0.15): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(
      ".animate-on-scroll, .animate-on-scroll-left"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add("visible");
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return ref as RefObject<HTMLElement | null>;
}

export function useCounterAnimation(
  end: number,
  duration = 2000,
  suffix = ""
): { ref: RefObject<HTMLElement | null>; displayValue: string } {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start = Math.min(start + step, end);
          if (el) el.textContent = Math.floor(start) + suffix;
          if (start >= end) clearInterval(timer);
        }, 16);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, suffix]);

  return { ref: ref as RefObject<HTMLElement | null>, displayValue: "0" + suffix };
}
