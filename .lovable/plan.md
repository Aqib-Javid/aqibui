## Premium Agency Redesign — GoProtoz-Inspired

Transform the current portfolio into a full premium design-agency site. Keep locked tokens (Instrument Serif + Geist, indigo accent, dark bg, Framer Motion). All original content, no copying from GoProtoz.

### Sections (in order)
1. **Header** — sticky, transparent → glass on scroll; nav: Services, Work, Process, About, Insights; right: "Start Project" CTA
2. **Hero** — two-column: left headline word-reveal + dual CTA; right floating layered device mockups (phone + dashboard + tablet) with mouse parallax + continuous float
3. **Trusted By** — infinite marquee of company wordmarks
4. **Services** — 8 rich cards (Product Design, UX Research, UI Design, Design Systems, Mobile App, SaaS, Web, Strategy) with mini previews + CTA
5. **Featured Case Studies** — 4 projects alternating layouts (content-left/mockups-right, mockups-left/content-right, centered, full-width). Each: industry label, name, description, outcome, metrics (Conversion / Growth / Retention / Revenue), layered CSS device mockups
6. **Client Success Stories** — metric/stat cards with mini chart visuals (before/after)
7. **Testimonials** — featured large quote + grid of cards w/ hover rotate + lift
8. **About** — left story; right animated counters (Projects, Countries, Years, Users)
9. **Process** — 4-step horizontal timeline with SVG path that draws on scroll
10. **Client Logos Showcase** — large grid + second infinite scroll row
11. **Insights** — featured article + 3-card grid w/ hover image-zoom
12. **FAQ** — accordion, smooth height, rotating chevron
13. **Contact** — left headline+info; right form (Name, Email, Company, Budget, Message), "Start Your Project" CTA
14. **Footer** — dark, oversized brand wordmark bg, gradient glow, nav/services/social/contact

### Removed/replaced
- Old `Hero`, `Services`, `Work`, `About`, `Experience`, `Testimonials`, `Contact`, `Footer`, `Header` rewritten
- Delete `Experience.tsx` from page flow (replaced by Process + Success Stories)
- No "UX Trendy News, Industry Report, Design Spring, Select Your Designer, Achievements"

### New files
- `src/components/TrustedBy.tsx`
- `src/components/CaseStudies.tsx` (replaces Work)
- `src/components/SuccessStories.tsx`
- `src/components/Process.tsx`
- `src/components/LogosShowcase.tsx`
- `src/components/Insights.tsx`
- `src/components/FAQ.tsx`
- `src/components/DeviceMockup.tsx` (pure CSS phone/tablet/dashboard frames)

### Rewritten
- `Header.tsx`, `Hero.tsx`, `Services.tsx`, `About.tsx`, `Testimonials.tsx`, `Contact.tsx`, `Footer.tsx`, `pages/Index.tsx`, `index.css`

### Tech / motion
- Container `max-w-[1280px]` content / `max-w-[1440px]` outer, `py-32 md:py-40`
- Reveal: opacity 0→1, y 40→0, 0.7s easeOut, 0.08s stagger (use `src/lib/reveal.ts`)
- Cards: scale 1.02 + shadow; buttons: scale 1.03; mockups: translateY(-10) hover + idle float keyframes
- Mouse parallax in hero via `useMotionValue` + `useTransform`
- Process line draws via `useScroll` + `pathLength`
- Counters via `animate()` from framer-motion when in view
- Marquee via CSS keyframes (duplicated track)

### Out of scope
- No backend wiring on contact form (UI + toast on submit)
- No new fonts, no new image generation — use CSS device frames + existing project thumbnails inside mockups
- No blog CMS — Insights are static cards
- No Lighthouse audit pass beyond reasonable lazy-loading

Confirm to proceed and I'll build it.
