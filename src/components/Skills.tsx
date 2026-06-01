import React from "react";
import { GraduationCap, Building2, Languages, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  "Operational Execution", "Operations Management", "International Student Recruitment",
  "Business Development", "Client Services", "Team Leadership", "Public Relations",
  "Stakeholder Management", "Process Documentation", "Training & Development",
  "Microsoft Office", "Google Workspace", "CRM Management", "Digital Marketing",
  "Report Writing", "KPI Development", "Proposal Writing", "Event Planning",
];

const certifications = [
  "Using AI to Enhance your Business",
  "Fundamentals of Digital Marketing",
  "How to Improve your Sales Efficiency",
  "Soft Skills Training",
  "Business Succession Planning",
];

const education = [
  { Icon: GraduationCap, degree: "Master's Degree",     field: "International Relations", institution: "Covenant University",        period: "2016 – 2018" },
  { Icon: Building2,     degree: "Bachelor of Science", field: "International Relations", institution: "Covenant University",        period: "2010 – 2014" },
  { Icon: Languages,     degree: "Diploma (DELF A2 & B1)", field: "French Language",      institution: "Alliance Française d'Ibadan", period: "2015 – 2016" },
];

const langs = [
  { lang: "English", level: "Native / Bilingual",   pct: 100 },
  { lang: "Yoruba",  level: "Native / Bilingual",   pct: 100 },
  { lang: "French",  level: "Professional Working", pct: 70  },
];

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <span className="text-gold-500/55 font-body text-[10px] tracking-[0.3em] uppercase block mb-3">
            Expertise & Credentials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream">
            Skills & <span className="italic text-gold-400">Education</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Left ── */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="animate-on-scroll-left">
              <h3 className="font-display text-xl text-gold-400/80 mb-6 tracking-wide
                flex items-center gap-3">
                <span className="w-7 h-px bg-gold-500/40 shrink-0" />
                Professional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill}
                    className="skill-tag px-3.5 py-2 rounded-sm font-body text-[12px]
                    tracking-wide cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="animate-on-scroll-left" style={{ transitionDelay: "100ms" }}>
              <h3 className="font-display text-xl text-gold-400/80 mb-6 tracking-wide
                flex items-center gap-3">
                <span className="w-7 h-px bg-gold-500/40 shrink-0" />
                Languages
              </h3>
              <div className="space-y-5">
                {langs.map(item => (
                  <div key={item.lang}>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-body text-cream/80 text-sm font-medium">{item.lang}</span>
                      <span className="font-body text-cream/38 text-xs">{item.level}</span>
                    </div>
                    <div className="h-[3px] bg-navy-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full
                        transition-all duration-1000"
                        style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="space-y-12">
            {/* Education */}
            <div className="animate-on-scroll" style={{ transitionDelay: "80ms" }}>
              <h3 className="font-display text-xl text-gold-400/80 mb-6 tracking-wide
                flex items-center gap-3">
                <span className="w-7 h-px bg-gold-500/40 shrink-0" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map(({ Icon, degree, field, institution, period }) => (
                  <div key={degree} className="gold-border-card px-5 py-5 rounded-sm flex gap-4">
                    <div className="icon-box w-10 h-10 rounded-sm shrink-0">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <span className="text-gold-500/55 font-body text-[10px] tracking-widest
                        uppercase block mb-1">{degree}</span>
                      <h4 className="font-body text-cream/88 font-medium text-sm mb-1">{field}</h4>
                      <p className="font-body text-cream/50 text-[13px]">{institution}</p>
                      <p className="font-body text-gold-500/50 text-xs mt-1.5">{period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll" style={{ transitionDelay: "160ms" }}>
              <h3 className="font-display text-xl text-gold-400/80 mb-6 tracking-wide
                flex items-center gap-3">
                <span className="w-7 h-px bg-gold-500/40 shrink-0" />
                Certifications
              </h3>
              <div className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <div key={cert}
                    className="cert-card px-5 py-4 rounded-sm flex items-center gap-4">
                    <CheckCircle2 size={15} className="text-gold-500/55 shrink-0" />
                    <span className="font-body text-cream/72 text-[13px] flex-1 leading-snug">
                      {cert}
                    </span>
                    <span className="text-gold-500/32 font-body text-xs shrink-0 tabular-nums">
                      {i + 1}/5
                    </span>
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
