import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Linkedin } from "react-bootstrap-icons";

const contactItems = [
  { Icon: Mail,     label: "Email",    value: "deborahogabi12@gmail.com",              href: "mailto:deborahogabi12@gmail.com",               copyable: true  },
  { Icon: Phone,    label: "Phone",    value: "+234 907 867 2400",                     href: "tel:+2349078672400",                             copyable: true  },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/deborahogabi-92335a9a", href: "https://www.linkedin.com/in/deborahogabi-92335a9a", copyable: false },
  { Icon: MapPin,   label: "Location", value: "Lagos, Nigeria",                        href: null,                                             copyable: false },
];

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id="contact" ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#0A0F1E 0%,#04070F 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
        opacity-[0.04] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle,#C9A96E 0%,transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <span className="text-gold-500/55 font-body text-[10px] tracking-[0.3em] uppercase block mb-3">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream">
            Get In <span className="italic text-gold-400">Touch</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
          <p className="font-body text-cream/48 mt-6 max-w-sm mx-auto leading-relaxed text-[13px]">
            Available for new opportunities in international education, operations management,
            and business development roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── Contact cards ── */}
          <div className="animate-on-scroll-left space-y-3">
            {contactItems.map(({ Icon, label, value, href, copyable }) => (
              <div key={label}
                className="gold-border-card px-5 py-5 rounded-sm flex items-center
                justify-between gap-4 group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="icon-box w-10 h-10 rounded-sm shrink-0">
                    <Icon size={16} className="text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-gold-500/55 font-body text-[10px] tracking-widest
                      uppercase block mb-0.5">{label}</span>
                    {href ? (
                      <a href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-body text-cream/78 text-[13px] hover:text-gold-400
                          transition-colors duration-200 truncate flex items-center gap-1.5 group/link">
                        <span className="truncate">{value}</span>
                        {href.startsWith("http") && (
                          <ExternalLink size={11}
                            className="text-gold-500/35 shrink-0 group-hover/link:text-gold-400
                            transition-colors" />
                        )}
                      </a>
                    ) : (
                      <span className="font-body text-cream/78 text-[13px]">{value}</span>
                    )}
                  </div>
                </div>
                {copyable && (
                  <button onClick={() => copy(value, label)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200
                    w-9 h-9 rounded-sm flex items-center justify-center shrink-0
                    border border-gold-500/30 text-gold-500/55 hover:text-gold-400
                    hover:border-gold-400"
                    title={`Copy ${label}`}>
                    {copied === label
                      ? <Check size={14} className="text-green-400" />
                      : <Copy size={14} />}
                  </button>
                )}
              </div>
            ))}

            {/* Availability pill */}
            <div className="flex items-center gap-3 mt-1 px-5 py-4 rounded-sm"
              style={{ background: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.14)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="font-body text-cream/58 text-[13px]">
                Available for new opportunities &amp; partnerships
              </span>
            </div>
          </div>

          {/* ── Quote card ── */}
          <div className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
            <div className="relative px-7 py-8 rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(22,32,53,0.8) 0%,rgba(15,23,41,0.92) 100%)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}>
              <span
                className="absolute top-3 left-6 font-display text-8xl text-gold-500/8
                leading-none select-none pointer-events-none"
                aria-hidden="true">"</span>

              <div className="relative z-10">
                <p className="font-display text-lg lg:text-xl text-cream/78 font-light
                  leading-[1.75] italic mb-7">
                  Highly articulated and effective communicator; working well with individuals
                  at all levels — consistently showcasing the ability to analyse issues,
                  recognise problems, and draw logical conclusions.
                </p>

                <div className="flex items-center gap-4 mb-7">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.28)" }}>
                    <span className="font-display text-gold-500 text-sm">DO</span>
                  </div>
                  <div>
                    <p className="font-body text-cream/80 text-sm font-medium">Deborah Ogabi</p>
                    <p className="font-body text-cream/38 text-xs">Operations Manager, Study Affairs</p>
                  </div>
                </div>

                <a href="mailto:deborahogabi12@gmail.com"
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-sm
                  font-body text-[11px] tracking-widest uppercase transition-all duration-300
                  group hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,rgba(201,169,110,0.92) 0%,rgba(184,148,74,0.92) 100%)",
                    color: "#0A0F1E",
                  }}>
                  <Mail size={14} />
                  <span className="font-semibold">Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
