import React, { useEffect, useRef } from "react";
import { Target, ClipboardList, Handshake, GraduationCap, Lightbulb, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface StatProps {
  value: number; suffix: string; label: string; sublabel: string;
}

function AnimatedStat({ value, suffix, label, sublabel }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const done   = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done.current) return;
      done.current = true;
      obs.disconnect();
      const dur = 2000;
      const t0  = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        if (el) el.textContent = `${Math.floor(e * value)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix]);

  return (
    <div className="stat-card-bg rounded-sm px-5 py-7 text-center group
      hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 cursor-default">
      <span ref={numRef}
        className="font-display text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold block mb-3"
        style={{
          background: "linear-gradient(135deg,#C9A96E 0%,#E8D4A8 50%,#C9A96E 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
        0{suffix}
      </span>
      <p className="font-body text-cream/80 font-medium text-sm mb-1.5">{label}</p>
      <p className="font-body text-cream/38 text-xs leading-relaxed">{sublabel}</p>
    </div>
  );
}

const achievements = [
  { Icon: Target,        title: "Conversion Excellence",  desc: "Drove 30% increase in conversions and 50% growth in monthly applications at Study Affairs." },
  { Icon: ClipboardList, title: "Process Documentation",  desc: "Authored a comprehensive process manual to standardise and guide all education department activities." },
  { Icon: Handshake,     title: "Strategic Partnerships", desc: "Facilitated successful collaboration with 3 strategic partner institutions to expand university offerings." },
  { Icon: GraduationCap, title: "Training Delivery",      desc: "Ensured 100% completion of all scheduled training programmes across diverse client organisations." },
  { Icon: Lightbulb,     title: "EdTech Innovation",      desc: "Spearheaded procurement of a gamification product enhancing practical learning experiences." },
  { Icon: BarChart3,     title: "KPI Management",         desc: "Ensured 100% of team KPIs identified and in place, creating accountability frameworks across departments." },
];

export default function Impact() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="impact" ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
      style={{ background: "linear-gradient(180deg,#0A0F1E 0%,#0F1729 50%,#0A0F1E 100%)" }}>
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-8">
        {/* Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <span className="text-gold-500/55 font-body text-[10px] tracking-[0.3em] uppercase block mb-3">
            Numbers That Matter
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream">
            Measurable <span className="italic text-gold-400">Impact</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Stats */}
        <div className="animate-on-scroll grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-16">
          <AnimatedStat value={30}  suffix="%" label="Conversion Uplift"    sublabel="Increase in student enrolments" />
          <AnimatedStat value={50}  suffix="%" label="Application Growth"   sublabel="Monthly student applications" />
          <AnimatedStat value={100} suffix="%" label="Training Completion"  sublabel="All scheduled programmes delivered" />
          <AnimatedStat value={3}   suffix="+" label="Partner Institutions" sublabel="Strategic university partnerships" />
        </div>

        {/* Achievements */}
        <div className="animate-on-scroll">
          <h3 className="font-display text-2xl text-cream/65 text-center mb-10 font-light">
            Key <span className="italic text-gold-400">Achievements</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {achievements.map(({ Icon, title, desc }, i) => (
              <div key={title} className="cert-card px-5 py-5 rounded-sm"
                style={{ animationDelay: `${i * 70}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="icon-box w-10 h-10 rounded-sm shrink-0 mt-0.5">
                    <Icon size={17} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-cream/88 text-sm mb-2 leading-snug">
                      {title}
                    </h4>
                    <p className="font-body text-cream/50 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
