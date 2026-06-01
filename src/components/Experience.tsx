import React from "react";
import { CalendarDays, Timer, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const experiences = [
  {
    company: "Study Affairs", role: "Operations Manager",
    period: "May 2024 – Present", duration: "2 yrs 1 mo", location: "Nigeria", current: true,
    highlights: [
      "Lead full operational strategy across the education division",
      "Manage intern recruitment, selection, and onboarding pipeline",
      "Drive student conversion with measurable 30% uplift in enrolments",
      "Report directly to MD with weekly performance dashboards",
    ],
  },
  {
    company: "Study Affairs", role: "Conversion Manager",
    period: "Aug 2023 – Apr 2024", duration: "9 mos", location: "Nigeria", current: false,
    highlights: [
      "Increased monthly student applications by 50%",
      "Managed applicant pipeline from inquiry to conversion",
      "Coordinated digital campaigns across Instagram, LinkedIn, and Zoom",
    ],
  },
  {
    company: "Study Affairs", role: "Senior Student Advisor",
    period: "Jan 2023 – Jul 2023", duration: "7 mos", location: "Lagos, Nigeria", current: false,
    highlights: [
      "Guided students through entire application and enrollment process",
      "Facilitated collaboration with 3 strategic partner institutions",
      "Documented process manual for education department operations",
    ],
  },
  {
    company: "Trusted Edge Group", role: "International Education Specialist",
    period: "Jan 2022 – Sep 2022", duration: "9 mos", location: "Lagos, Nigeria", current: false,
    highlights: [
      "Developed and initiated student recruitment strategies with strong ROI",
      "Scheduled and hosted online/physical events with students and sponsors",
      "Provided comprehensive support services from application to enrollment",
    ],
  },
  {
    company: "Trusted Edge Group", role: "Learning & Development",
    period: "May 2021 – Dec 2021", duration: "8 mos", location: "Lagos, Nigeria", current: false,
    highlights: [
      "Delivered customised training products tailored to client learning needs",
      "Ensured 100% completion rate of all scheduled training programmes",
      "Spearheaded procurement of a gamification product for practical learning",
    ],
  },
  {
    company: "Trusted Edge Group", role: "Executive Support",
    period: "Jan 2020 – May 2021", duration: "1 yr 5 mos", location: "Lagos, Nigeria", current: false,
    highlights: [
      "Organised sales conferences, workshops, and client-specific meetings",
      "Ensured 100% of team KPIs identified, tracked, and in place",
      "Managed data systems to monitor business growth and maximise profit",
    ],
  },
];

const earlier = [
  { role: "Public Relations Volunteer",  org: "ALDEF – WeCare Club Int'l",        period: "Aug 2019 – Jan 2020", loc: "Ibadan" },
  { role: "Public Information Intern",   org: "United Nations Information Center", period: "Nov 2018 – Jun 2019", loc: "Ikoyi, Lagos" },
  { role: "English Teacher (NYSC)",      org: "Day Secondary School Kutigi",       period: "Aug 2014 – Aug 2015", loc: "Niger State" },
];

export default function Experience() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative overflow-x-hidden"
    >
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 80% at 80% 50%,rgba(201,169,110,1) 0%,transparent 60%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <span className="text-gold-500/55 font-body text-[10px] tracking-[0.3em] uppercase block mb-3">
            Career Journey
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream">
            Professional <span className="italic text-gold-400">Experience</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — left side always */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px timeline-line" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={`${exp.company}-${exp.role}`}
                className="animate-on-scroll relative pl-14 sm:pl-16"
                style={{ transitionDelay: `${i * 70}ms` }}>

                {/* Timeline dot */}
                <div className="absolute left-[18px] top-6 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${exp.current
                      ? "border-gold-500 bg-gold-500/25"
                      : "border-gold-500/40 bg-navy-800"}`}>
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="gold-border-card px-6 py-6 rounded-sm">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <span className="text-gold-500/55 font-body text-[10px] tracking-[0.22em]
                        uppercase block mb-1.5">
                        {exp.company}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-cream font-medium leading-tight">
                        {exp.role}
                      </h3>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1.5 text-[10px] font-body tracking-widest uppercase
                        rounded-sm bg-gold-500/12 text-gold-400 border border-gold-500/30
                        shrink-0 self-start">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
                    <span className="flex items-center gap-1.5 text-cream/40 font-body text-xs">
                      <CalendarDays size={12} className="text-gold-500/50 shrink-0" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-gold-500/60 font-body text-xs">
                      <Timer size={12} className="text-gold-500/50 shrink-0" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-cream/35 font-body text-xs">
                      <MapPin size={12} className="text-gold-500/50 shrink-0" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="h-px bg-gold-500/10 mb-5" />

                  {/* Bullet highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/45 shrink-0 mt-[7px]" />
                        <span className="font-body text-cream/58 text-[13px] leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Earlier experience */}
          <div className="animate-on-scroll mt-8 pl-14 sm:pl-16"
            style={{ transitionDelay: "480ms" }}>
            <div className="gold-border-card px-6 py-6 rounded-sm">
              <h3 className="font-display text-lg text-cream/75 mb-5 tracking-wide">
                Earlier Experience
              </h3>
              <div className="divide-y divide-gold-500/8">
                {earlier.map(item => (
                  <div key={item.role}
                    className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0">
                    <div>
                      <span className="font-body text-cream/75 text-sm font-medium block mb-1">
                        {item.role}
                      </span>
                      <span className="font-body text-cream/35 text-xs">{item.org}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-body text-gold-500/55 text-xs block mb-1">{item.period}</span>
                      <span className="font-body text-cream/28 text-xs">{item.loc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
