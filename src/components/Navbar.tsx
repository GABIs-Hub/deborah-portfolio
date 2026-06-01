import { useState, useEffect } from "react";

const navItems = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Impact",     href: "#impact" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection — glassmorphism + active section tracking
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navItems.map(n => n.href.slice(1));
      const active = ids.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (active) setActiveSection(active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock — prevents background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu if window is resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    // Small delay so the menu close animation plays before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled ? "glass-nav py-3" : "py-5 bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center
              justify-center group-hover:border-gold-400 transition-colors duration-300">
              <span className="font-display text-gold-500 text-sm font-semibold">D</span>
            </div>
            <span className="font-display text-cream/80 text-base tracking-wide
              group-hover:text-cream transition-colors duration-300 hidden sm:block">
              Deborah Ogabi
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-1 px-5 py-2 border border-gold-500/50 text-gold-400 font-body
              text-[10px] tracking-widest uppercase hover:bg-gold-500/10 hover:border-gold-400
              transition-all duration-300 rounded-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Hamburger — morphs into X */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 z-50 relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {/* Bar 1 — rotates to top-right diagonal */}
            <span className={`block w-6 h-px bg-gold-400 transition-all duration-550
              origin-center
              ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            {/* Bar 2 — fades and shrinks away */}
            <span className={`block w-6 h-px bg-gold-400 transition-all duration-200
              ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            {/* Bar 3 — rotates to bottom-right diagonal */}
            <span className={`block w-6 h-px bg-gold-400 transition-all duration-550
              origin-center
              ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center
          justify-center transition-all duration-400
          ${menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        style={{
          background: "rgba(4, 7, 15, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Top decorative line — slides in from top */}
        <div className={`w-12 h-px bg-gold-500/40 mb-8 transition-all duration-500
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
          style={{ transitionDelay: menuOpen ? "100ms" : "0ms" }}
        />

        {/* Nav links — staggered drop-in */}
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`font-display text-4xl font-light tracking-wider
                transition-all duration-500
                ${activeSection === item.href.slice(1)
                  ? "text-gold-400"
                  : "text-cream/70 hover:text-cream"
                }
                ${menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
              style={{
                transitionDelay: menuOpen ? `${i * 70 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom decorative line — slides in from bottom */}
        <div className={`w-12 h-px bg-gold-500/40 mt-8 mb-6 transition-all duration-500
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: menuOpen ? "480ms" : "0ms" }}
        />

        {/* CTA — last to appear */}
        <button
          onClick={() => scrollTo("#contact")}
          className={`px-8 py-3 border border-gold-500/50 text-gold-400 font-body
          text-xs tracking-widest uppercase hover:bg-gold-500/10
          transition-all duration-500 rounded-sm
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: menuOpen ? "520ms" : "0ms" }}
        >
          Get In Touch
        </button>
      </div>
    </>
  );
}