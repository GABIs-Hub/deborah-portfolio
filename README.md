# Deborah Ogabi — Portfolio Website

A professional, luxury-editorial portfolio website for **Deborah Ogabi**, Operations Manager and International Education Specialist with 5+ years of experience in international student recruitment and business development across Nigeria.

Built with **React 19 + TypeScript + Tailwind CSS v3**, with a focus on elegant animations, a deep navy/gold aesthetic, and full responsiveness across all devices.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Component Breakdown](#component-breakdown)
- [Animations Reference](#animations-reference)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Adding the Profile Photo](#adding-the-profile-photo)
- [Tailwind v4 Migration Guide](#tailwind-v4-migration-guide)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## Features

- **Luxury editorial aesthetic** — deep navy base (`#0A0F1E`), champagne gold accents (`#C9A96E`), Cormorant Garamond display font paired with DM Sans
- **Fully responsive** — mobile-first layout, tested across phone, tablet, and desktop breakpoints
- **Animated glassmorphism navbar** — transparent on load, frosted glass on scroll, with active section highlighting
- **Morphing hamburger menu** — three bars rotate and collapse into a ✕, mobile overlay with staggered link reveal
- **Scroll-triggered animations** — every section fades and slides into view via `IntersectionObserver`
- **Animated impact counters** — numbers count up from 0 with cubic easing when scrolled into view (30%, 50%, 100%, 3+)
- **Floating avatar** — continuous CSS float animation with conic-gradient glow ring and placeholder monogram
- **Lucide React icons** — consistent scalable SVG icons replacing all emojis throughout
- **Copy to clipboard** — contact details reveal a copy button on hover with a `Check` confirmation state
- **Scroll lock** — `body.overflow = hidden` while the mobile menu is open
- **Custom scrollbar** — 4px gold-accented scrollbar
- **SEO metadata** — descriptive `<title>` and `<meta name="description">` in `index.html`
- **Google Fonts** — Cormorant Garamond + DM Sans loaded via CSS `@import`
- **Zero extra runtime dependencies** — only React and Lucide React

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.6 | UI framework |
| TypeScript | 6.0.2 | Static type checking |
| Tailwind CSS | 3.4.19 | Utility-first styling |
| Vite | 8.0.12 | Build tool and dev server |
| Lucide React | 1.17.0 | SVG icon library |
| PostCSS | 8.5.15 | CSS processing pipeline |
| Autoprefixer | 10.5.0 | Vendor prefix injection |

---

## Project Structure

```
deborah-portfolio/
│
├── src/
│   ├── assets/
│   │   └── Mayorh profile pic.jpg     # Deborah's profile photo (not yet wired up — see below)
│   │
│   ├── components/
│   │   ├── Navbar.tsx                 # Sticky nav — glass effect, hamburger menu, active tracking
│   │   ├── Hero.tsx                   # Landing section — avatar, name, tagline, CTAs, languages
│   │   ├── About.tsx                  # Professional summary, core strengths cards, contact mini-row
│   │   ├── Experience.tsx             # Left-aligned career timeline with bullet highlights
│   │   ├── Impact.tsx                 # Animated stat counters + achievement cards grid
│   │   ├── Skills.tsx                 # Skill tags, language bars, education cards, certifications
│   │   ├── Contact.tsx                # Contact cards with copy-to-clipboard, quote block, email CTA
│   │   └── Footer.tsx                 # Minimal footer — name, copyright, LinkedIn link
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.ts      # Custom IntersectionObserver hook for scroll-reveal animations
│   │
│   ├── App.tsx                        # Root component — assembles all sections in order
│   ├── App.css                        # Vite scaffold default (not used by this project — safe to delete)
│   ├── main.tsx                       # React entry point
│   └── index.css                      # Global styles, design tokens, reusable CSS classes, keyframes
│
├── public/                            # Static assets served at root (favicon, etc.)
│
├── index.html                         # HTML shell — SEO metadata, Google Fonts preconnect
├── tailwind.config.js                 # Custom color palette, fonts, animation keyframes
├── postcss.config.js                  # PostCSS plugins: Tailwind + Autoprefixer
├── vite.config.ts                     # Vite configuration with React plugin
├── tsconfig.json                      # TypeScript project references root
├── tsconfig.app.json                  # App-specific TypeScript config
├── tsconfig.node.json                 # Node/tooling TypeScript config
├── .gitignore                         # Git ignore rules
├── .gitattributes                     # Git line-ending normalization
├── LICENSE                            # Project license
├── package.json                       # Dependencies and npm scripts
├── package-lock.json                  # Locked dependency tree
└── README.md                          # This file
```

> **Note:** `App.css` is a leftover from the Vite scaffold and is not imported or used anywhere in the project. It can safely be deleted.

---

## Design System

### Color Palette

All tokens are defined in `tailwind.config.js` under `theme.extend.colors` and available as Tailwind utility classes (e.g. `bg-navy-900`, `text-gold-500`).

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#04070F` | Deepest background, footer |
| `navy-900` | `#0A0F1E` | Primary page background |
| `navy-800` | `#0F1729` | Card backgrounds |
| `navy-700` | `#162035` | Avatar background |
| `navy-600` | `#1E2C47` | Hover state fills |
| `navy-500` | `#2A3D5C` | Lighter structural surfaces |
| `gold-300` | `#E8D4A8` | Shimmer highlight stop |
| `gold-400` | `#D4B87A` | Skill tags, hover text |
| `gold-500` | `#C9A96E` | Primary gold accent |
| `gold-600` | `#B8944A` | Gold darker variant |
| `gold-700` | `#9A7833` | Shimmer end stop |
| `cream` | `#F7F3EC` | Primary body text |

### Typography

Defined in `tailwind.config.js` under `theme.extend.fontFamily`:

| Token | Font | Role |
|---|---|---|
| `font-display` | Cormorant Garamond, serif | Section headings, name, role labels |
| `font-body` | DM Sans, sans-serif | Body copy, tags, metadata, nav links |

### Reusable CSS Classes

All defined in `src/index.css`. Import is automatic via Tailwind's base layer.

| Class | Description |
|---|---|
| `.gold-shimmer` | Animated gradient text — used on hero surname |
| `.glass-nav` | Frosted-glass navbar background triggered on scroll |
| `.gold-border-card` | Dark card with gold border and `translateY` lift on hover |
| `.cert-card` | Lighter card variant for certifications and achievements |
| `.stat-card-bg` | Semi-transparent background for impact stat cards |
| `.skill-tag` | Gold-tinted pill for skill and language tags |
| `.icon-box` | Consistent square icon container used across all sections |
| `.animate-on-scroll` | Fade-up class — toggled to `.visible` by `useScrollAnimation` |
| `.animate-on-scroll-left` | Slide-in-from-left class — toggled to `.visible` by `useScrollAnimation` |
| `.section-divider` | Horizontal gold gradient rule between sections |
| `.timeline-line` | Vertical gradient line for the experience timeline |
| `.hero-bg` | Composite radial-gradient hero section background |
| `.avatar-glow` | Multi-layer `box-shadow` glow ring on the avatar circle |
| `.nav-link` | Uppercase nav link with animated gold `::after` underline |
| `.animate-float` | Continuous 6s `translateY` float loop — applied to avatar |

---

## Component Breakdown

### `Navbar.tsx`
- Starts transparent; switches to `.glass-nav` (`backdrop-filter: blur(24px)`) after `window.scrollY > 40`
- Active section tracking via `getBoundingClientRect()` — the link matching the visible section gets the `.active` gold underline
- **Hamburger → ✕ morph:** Three `<span>` bars animate with CSS `rotate` + `translateY` and `origin-center`. Bar 1 rotates `+45°`, bar 2 fades and `scaleX(0)`, bar 3 rotates `-45°`
- **Mobile overlay:** Uses `opacity` + `pointer-events: none` instead of `display: none` — this is what allows the CSS transition to play. `display: none` cannot be animated
- **Stagger on open, instant on close:** `transitionDelay: menuOpen ? ${i * 70}ms : "0ms"` — links cascade in on open, all disappear together on close
- `body.style.overflow = "hidden"` freezes background scroll while the menu is open
- A `resize` event listener closes the menu if the viewport expands past 768px (e.g. device rotation)
- `setTimeout(scrollTo, 300)` delays the page scroll after menu close so animations don't collide

### `Hero.tsx`
- Mount animations use `useState(visible)` with a 100ms `setTimeout` to trigger after first paint, then per-element `transitionDelay` values for staggered reveal
- Name `font-size` uses `clamp(2.8rem, 7.5vw, 6rem)` — fluid scaling that adapts from mobile to ultrawide without ever overflowing
- Avatar container has `padding: 40px 44px` — this gives the absolutely-positioned floating badges (`5+ Years Exp.` and `Operations Manager`) guaranteed room without overflowing the viewport on any screen size
- Scroll indicator uses `ChevronDown` from Lucide with Tailwind's `animate-bounce`

### `About.tsx`
- Two-column grid activates at `md:` (768px), not `lg:` — ensures proper layout on tablet
- `MapPin`, `Mail`, `Phone` icons from Lucide inside `.icon-box` containers in the contact mini-row
- Core strengths rendered as `gold-border-card` items with decorative number labels (`01`–`04`)

### `Experience.tsx`
- **Single left-aligned timeline** on all screen sizes — the alternating layout was removed because it broke on tablet widths
- Cards use `pl-14 sm:pl-16` to maintain consistent distance from the vertical timeline line
- The current role dot uses `animate-pulse` on an inner `div` for a live/active indicator feel
- The meta row (date, duration, location) uses `flex-wrap gap-x-5 gap-y-2` so it wraps cleanly on narrow screens without overflow
- `CalendarDays`, `Timer`, `MapPin` icons in the meta row

### `Impact.tsx`
- `AnimatedStat` component uses `IntersectionObserver` + `requestAnimationFrame` for smooth counter animation
- Easing formula: `const eased = 1 - Math.pow(1 - progress, 3)` — cubic ease-out, starts fast and decelerates
- The `hasAnimated` ref prevents the counter from re-triggering if the element is scrolled past and back
- Stats grid: `grid-cols-2` on mobile and tablet → `xl:grid-cols-4` on large screens

### `Skills.tsx`
- `GraduationCap`, `Building2`, `Languages` icons for the education cards
- `CheckCircle2` for certification list items
- Language proficiency bars are CSS `div` elements with hardcoded `width` percentages and a gold gradient fill

### `Contact.tsx`
- Copy-to-clipboard via `navigator.clipboard.writeText()` — `copied` state shows a `Check` icon with 2s auto-reset
- External links (LinkedIn) include `ExternalLink` icon and `target="_blank" rel="noopener noreferrer"`
- The green availability dot uses `animate-pulse` to indicate open-to-work status

### `useScrollAnimation.ts`
- Accepts a `threshold` parameter (default `0.08`) — elements animate when 8% enters the viewport, which fires early enough on tall mobile screens
- Queries all `.animate-on-scroll` and `.animate-on-scroll-left` children inside the ref'd element
- Each child is `unobserve()`d after its first animation — runs once, not on every scroll
- Stagger is applied with `setTimeout(fn, i * 100)` per element index within the same section

---

## Animations Reference

| Animation | Trigger | How it works |
|---|---|---|
| Hero text stagger | Page load | `useState(visible)` + per-element `transitionDelay` |
| Avatar float | Continuous | `@keyframes float` applied via `.animate-float` class |
| Gold shimmer on surname | Continuous | `@keyframes shimmer` + `background-size: 200%` animated |
| Section fade-up reveals | Scroll into view | `IntersectionObserver` adds `.visible` to `.animate-on-scroll` |
| Section slide-right reveals | Scroll into view | `IntersectionObserver` adds `.visible` to `.animate-on-scroll-left` |
| Impact counters | Scroll into view | `IntersectionObserver` + `requestAnimationFrame` + cubic easing |
| Navbar glass transition | Scroll past 40px | `scrollY > 40` toggles `glass-nav` class |
| Hamburger → ✕ morph | Menu toggle | `rotate-45`, `scale-x-0`, `-rotate-45` on three `<span>` bars |
| Mobile overlay open/close | Menu toggle | `opacity` + `translateY` + `pointer-events` (never `display: none`) |
| Nav link stagger | Menu open | `transitionDelay: i * 70ms` (reset to `0ms` on close) |
| Card hover lift | Hover | `translateY(-3px)` + gold `border-color` in `.gold-border-card:hover` |
| Nav link underline | Hover / active | `::after` pseudo-element `width: 0 → 100%` transition |
| Timeline dot pulse | Current role always | Tailwind `animate-pulse` on inner dot `div` |
| Scroll indicator bounce | Continuous | Tailwind `animate-bounce` on `ChevronDown` icon |
| Copy button reveal | Card hover | `opacity-0 group-hover:opacity-100` |

---

## Getting Started

### Prerequisites

- **Node.js** `18+`
- **npm** `9+`

### Installation

```bash
# 1. Clone or unzip the project
cd deborah-portfolio

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Run TypeScript type-check then build for production (output → /dist)
npm run build

# Preview the production build locally before deploying
npm run preview

# Run ESLint across all source files
npm run lint
```

---

## Adding the Profile Photo

The profile photo (`Mayorh profile pic.jpg`) is already in `src/assets/` but has not been wired into the `Hero` component yet. The avatar still shows the `DO` monogram placeholder.

**To connect it:**

**1.** Open `src/components/Hero.tsx`

**2.** Add this import at the top of the file (below the existing imports):

```tsx
import deborahPhoto from "../assets/Mayorh profile pic.jpg";
```

**3.** Find the avatar inner block — it currently looks like this:

```tsx
<div className="w-full h-full flex flex-col items-center justify-center gap-1.5 relative">
  <span className="font-display text-5xl lg:text-6xl font-light text-gold-500/75 select-none">DO</span>
  <span className="font-body text-gold-500/35 text-[10px] tracking-[0.22em] uppercase">Photo Coming</span>
  <div className="absolute inset-0 rounded-full pointer-events-none"
    style={{ background: "radial-gradient(ellipse at 30% 20%,rgba(201,169,110,0.1) 0%,transparent 60%)" }} />
</div>
```

**4.** Replace that entire block with:

```tsx
<img
  src={deborahPhoto}
  alt="Deborah Ogabi"
  className="w-full h-full object-cover object-top rounded-full"
/>
```

**5.** Save the file — the dev server will hot-reload and the photo will appear inside the gold glow ring.

> `object-top` crops from the top of the image frame, which works best for portrait/headshot photos. Change to `object-center` if the subject is centred in the photo.

---

## Tailwind v4 Migration Guide

When you're ready to upgrade from Tailwind CSS v3 to v4:

### Step 1 — Swap packages

```bash
npm uninstall tailwindcss autoprefixer
npm install -D tailwindcss@next @tailwindcss/postcss@next
```

### Step 2 — Update `postcss.config.js`

```js
// v3
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}

// v4
export default {
  plugins: { "@tailwindcss/postcss": {} }
}
```

### Step 3 — Delete `tailwind.config.js`

No longer needed in v4. All configuration moves into CSS.

### Step 4 — Update the top of `src/index.css`

Replace the three `@tailwind` directives with a single import, and move all custom tokens into an `@theme` block:

```css
/* Remove this (v3): */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Replace with this (v4): */
@import "tailwindcss";

@theme {
  --color-navy-950: #04070F;
  --color-navy-900: #0A0F1E;
  --color-navy-800: #0F1729;
  --color-navy-700: #162035;
  --color-navy-600: #1E2C47;
  --color-navy-500: #2A3D5C;

  --color-gold-300: #E8D4A8;
  --color-gold-400: #D4B87A;
  --color-gold-500: #C9A96E;
  --color-gold-600: #B8944A;
  --color-gold-700: #9A7833;

  --color-cream: #F7F3EC;

  --font-display: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;

  --animate-float:   float   6s   ease-in-out infinite;
  --animate-shimmer: shimmer 2.5s linear    infinite;
  --animate-fade-up: fadeUp  0.8s ease      forwards;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

> **No component files need to change.** All class names (`bg-navy-900`, `text-gold-500`, `font-display`, `animate-float`, etc.) remain identical because v4 preserves the same token naming convention.

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Vite and configures everything. Zero additional config needed.

### Netlify

```bash
npm run build
```

Drag and drop the generated `dist/` folder at [app.netlify.com](https://app.netlify.com), or connect the GitHub repo for automatic deploys on every push.

### GitHub Pages

```bash
npm install -D gh-pages
```

Add to `package.json` scripts:

```json
"deploy": "gh-pages -d dist"
```

Then:

```bash
npm run build
npm run deploy
```

> If deploying to a subdirectory (e.g. `username.github.io/deborah-portfolio`), add `base: '/deborah-portfolio/'` to `vite.config.ts` before building.

---

## Future Improvements

- [ ] Wire up the profile photo from `src/assets/` into `Hero.tsx` (instructions above)
- [ ] Implement seamless hamburger menu animations on mobile (see `Navbar.tsx` inline comments)
- [ ] Add a contact form with email delivery (e.g. [EmailJS](https://www.emailjs.com) or [Resend](https://resend.com))
- [ ] Add a downloadable CV/resume button in the Hero section
- [ ] Migrate to Tailwind CSS v4 (migration guide above)
- [ ] Add Open Graph and Twitter Card meta tags for rich social link previews
- [ ] Remove or repurpose `App.css` (currently unused Vite scaffold boilerplate)
- [ ] Add a testimonials or LinkedIn recommendations section
- [ ] Implement a subtle page-load entrance animation

---

## Credits

- **Design & Development** — [GABIs-Hub](https://github.com/GABIs-Hub)
- **Icons** — [Lucide React](https://lucide.dev)
- **Fonts** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- **Subject** — [Deborah Ogabi](https://www.linkedin.com/in/deborahogabi-92335a9a), Operations Manager at Study Affairs, Lagos