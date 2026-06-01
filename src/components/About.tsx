import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactMini = [
  { Icon: MapPin,  label: "Location", value: "Lagos, Nigeria" },
  { Icon: Mail,    label: "Email",    value: "deborahogabi12@gmail.com" },
  { Icon: Phone,   label: "Phone",    value: "+234 907 867 2400" },
];

const strengths = [
  {
    num: "01",
    title: "International Student Recruitment",
    desc: "End-to-end management from prospect to enrolled student, leveraging digital and offline channels.",
  },
  {
    num: "02",
    title: "Operations Management",
    desc: "Process documentation, KPI development, team training, and cross-functional coordination.",
  },
  {
    num: "03",
    title: "Business Development",
    desc: "Building strategic partnerships, developing conversion strategies, and driving sustainable growth.",
  },
  {
    num: "04",
    title: "Client Services & Public Relations",
    desc: "Stakeholder engagement, bespoke proposal writing, and multilingual communication.",
  },
];

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.03]
        rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,#C9A96E 0%,transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-14 text-center">
          <span className="text-gold-500/55 font-body text-[10px] tracking-[0.3em] uppercase block mb-3">
            Who I Am
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream">
            About <span className="italic text-gold-400">Deborah</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: summary ── */}
          <div className="animate-on-scroll-left space-y-5">
            <p className="font-body text-cream/70 text-[15px] lg:text-base leading-[1.95] font-light">
              A dedicated professional with over{" "}
              <span className="text-gold-400 font-medium">5 years of experience</span> within the
              higher education, development, and management consultancy industry — focused on
              international student recruitment, business development, and operational excellence.
            </p>
            <p className="font-body text-cream/58 text-[15px] leading-[1.95] font-light">
              Deborah brings a wealth of experience managing the complete application process for
              students through to enrolment, ensuring they meet all requirements for their desired
              study destination. Highly articulate and an effective communicator, she works fluidly
              with individuals at all levels of an organisation.
            </p>
            <p className="font-body text-cream/58 text-[15px] leading-[1.95] font-light">
              She consistently demonstrates the ability to analyse complex issues, recognise
              problems, and draw logical, actionable conclusions — making her a trusted advisor
              and operational leader in every environment she enters.
            </p>

            {/* Contact mini */}
            <div className="flex flex-col gap-4 pt-7 border-t border-gold-500/10">
              {contactMini.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="icon-box w-9 h-9 rounded-sm shrink-0">
                    <Icon size={15} className="text-gold-500" />
                  </div>
                  <span className="text-cream/32 font-body text-sm w-16 shrink-0 uppercase
                    tracking-wider text-[10px]">{label}</span>
                  <span className="text-cream/70 font-body text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: strengths ── */}
          <div className="animate-on-scroll space-y-3" style={{ transitionDelay: "120ms" }}>
            <h3 className="font-display text-xl text-gold-400/80 mb-7 tracking-wide">
              Core Strengths
            </h3>
            {strengths.map((item, i) => (
              <div key={item.num}
                className="gold-border-card px-6 py-5 rounded-sm flex gap-5 cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}>
                <span className="font-display text-gold-500/22 text-2xl font-semibold
                  shrink-0 leading-none mt-0.5 select-none">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-body font-medium text-cream/88 text-sm mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-body text-cream/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
