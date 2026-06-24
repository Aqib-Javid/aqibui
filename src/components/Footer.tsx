import { motion } from "framer-motion";

const columns = [
  { title: "Studio", links: ["About", "Process", "Journal", "Careers"] },
  { title: "Services", links: ["Product Design", "UX Research", "Design Systems", "Mobile Apps"] },
  { title: "Connect", links: ["Twitter / X", "LinkedIn", "Dribbble", "Instagram"] },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-28 pb-10 mt-10 bg-[hsl(0_0%_3%)] border-t border-border/60 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 -top-40 h-[400px] opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, hsl(255 92% 50% / 0.4), transparent 60%)" }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-primary/40" />
              <span className="font-display text-xl text-foreground">Northwave<span className="text-primary">.</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              An independent product design studio crafting digital experiences for ambitious teams.
            </p>
          </motion.div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-foreground/80 hover:text-foreground link-underline text-sm">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative -mb-6 overflow-hidden">
          <h2 aria-hidden className="editorial-heading text-foreground/[0.06] text-[22vw] leading-[0.85] whitespace-nowrap text-center select-none">
            Northwave.
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40">
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">© {year} Northwave Studio · All rights reserved</p>
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Crafted with intent · Lisbon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
