export default function Footer() {
  return (
    <footer className="py-8 border-t"
      style={{ borderColor: "rgba(201,169,110,0.1)", background: "#04070F" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row
        items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(201,169,110,0.35)" }}>
            <span className="font-display text-gold-500 text-xs font-semibold">D</span>
          </div>
          <span className="font-display text-cream/48 text-sm tracking-wide">
            Deborah Ogabi
          </span>
        </div>
        <p className="font-body text-cream/22 text-xs tracking-wide text-center">
          © {new Date().getFullYear()} Deborah Ogabi. All rights reserved.
        </p>
        <a href="https://www.linkedin.com/in/deborahogabi-92335a9a"
          target="_blank" rel="noopener noreferrer"
          className="font-body text-gold-500/45 text-[10px] tracking-widest uppercase
          hover:text-gold-400 transition-colors duration-200 flex items-center gap-1.5">
          LinkedIn
          <span>↗</span>
        </a>
      </div>
    </footer>
  );
}
