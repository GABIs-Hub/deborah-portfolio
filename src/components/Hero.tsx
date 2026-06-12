import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import ProfilePic from "../assets/Mayorh profile pic.jpg"

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-x-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,169,110,0.5) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(201,169,110,0.5) 1px,transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />
        <div className="absolute top-24 right-0 w-80 h-80 rounded-full opacity-[0.045]"
          style={{ background: "radial-gradient(circle,#C9A96E 0%,transparent 70%)" }} />
        <div className="absolute bottom-10 -left-10 w-64 h-64 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle,#C9A96E 0%,transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-10 lg:gap-20">
          {/* ── Avatar ── top on mobile, right on desktop */}
          <div className={`order-1 md:order-2 flex-shrink-0 transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
            style={{ transitionDelay: "350ms" }}>
            {/* Outer padding gives room for the floating badges */}
            <div className="relative" style={{ padding: "40px 44px 44px 44px" }}>
              <div className="animate-float">
                {/* Ring */}
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto"
                  style={{
                    background: "conic-gradient(from 180deg,rgba(201,169,110,0.38),rgba(201,169,110,0.04),rgba(201,169,110,0.38))",
                    padding: "2px",
                  }}>
                  <div className="w-full h-full rounded-full overflow-hidden avatar-glow"
                    style={{ background: "linear-gradient(145deg,#162035,#0F1729)" }}>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 relative">
                      <img src={ProfilePic} alt="Deborah Ogabi" className="w-full h-full object-cover rounded-full" />
                      <span className="text-cream/75 font-body text-[11px] tracking-wide absolute -bottom-3">
                        Profile Photo
                      </span>
                      <div className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at 30% 20%,rgba(201,169,110,0.1) 0%,transparent 60%)" }} />
                    </div>
                  </div>
                </div>

                {/* Badge — role (bottom right) */}
                <div className="absolute bottom-0 right-0 px-4 py-3 rounded-sm gold-border-card text-center"
                  style={{ minWidth: "144px" }}>
                  <p className="text-gold-400 font-body text-[9px] tracking-[0.2em] uppercase mb-1">Current Role</p>
                  <p className="text-cream/90 font-body text-[13px] font-medium leading-tight">Operations Manager</p>
                  <p className="text-cream/40 font-body text-xs mt-0.5">Study Affairs</p>
                </div>

                {/* Badge — years (top left) */}
                <div className="absolute top-0 left-0 px-4 py-3 rounded-sm gold-border-card text-center">
                  <p className="text-gold-400 font-display text-[26px] font-semibold leading-none">5+</p>
                  <p className="text-cream/45 font-body text-[10px] tracking-wider mt-1">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="flex-1 order-2 md:order-1 text-center md:text-left min-w-0">
            {/* Eyebrow */}
            <div className={`inline-flex items-center gap-3 mb-5 transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: "200ms" }}>
              <span className="w-6 h-px bg-gold-500/55 hidden sm:block shrink-0" />
              <span className="text-gold-500/75 font-body text-[10px] tracking-[0.22em] uppercase leading-relaxed">
                Operations Manager &amp; International Education Specialist
              </span>
            </div>

            {/* Name */}
            <h1 className={`font-display font-light leading-[1.05] mb-5 transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2.8rem,7.5vw,6rem)", transitionDelay: "320ms" }}>
              <span className="text-cream block">Deborah</span>
              <span className="gold-shimmer font-semibold italic block">Ogabi</span>
            </h1>

            {/* Gold rule */}
            <div className={`h-px bg-gradient-to-r from-gold-500/55 to-transparent mb-6
              transition-all duration-1000 mx-auto md:mx-0
              ${visible ? "opacity-100" : "opacity-0"}`}
              style={{ width: "clamp(100px,18vw,200px)", transitionDelay: "500ms" }} />

            {/* Tagline */}
            <p className={`font-body text-cream/58 font-light leading-[1.85] max-w-md mb-9
              mx-auto md:mx-0 transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontSize: "clamp(0.9rem,1.8vw,1.08rem)", transitionDelay: "600ms" }}>
              5+ years driving{" "}
              <span className="text-gold-400 font-medium">international student recruitment</span>,
              operations excellence, and business growth across Nigeria's education landscape.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-3 justify-center md:justify-start
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "740ms" }}>
              <a href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-3.5 bg-gold-500 text-navy-900 font-body font-semibold text-[10px]
                tracking-widest uppercase hover:bg-gold-400 transition-all duration-300 rounded-sm
                hover:-translate-y-0.5 active:translate-y-0 text-center">
                Get In Touch
              </a>
              <a href="#experience"
                onClick={e => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-3.5 border border-gold-500/40 text-gold-400 font-body font-medium
                text-[10px] tracking-widest uppercase hover:border-gold-400 hover:bg-gold-500/10
                transition-all duration-300 rounded-sm hover:-translate-y-0.5 text-center">
                View Experience
              </a>
            </div>

            {/* Languages */}
            <div className={`mt-8 flex items-center gap-3 justify-center md:justify-start flex-wrap
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "880ms" }}>
              <span className="text-cream/28 font-body text-[10px] tracking-widest uppercase">Languages</span>
              {["English", "Yoruba", "French"].map(lang => (
                <span key={lang}
                  className="skill-tag text-[11px] px-3.5 py-1.5 rounded-sm font-body tracking-wide">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
          gap-1.5 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1100ms" }}>
          <span className="text-cream/28 font-body text-[10px] tracking-[0.22em] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-gold-500/45 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
