import { motion } from "framer-motion";

const columns = [
  { title: "Navigate", links: ["About", "Services", "Work", "Process", "Insights"] },
  { title: "Services", links: ["Product Design", "UX Research", "Design Systems", "Mobile Apps"] },
  { title: "Connect", links: ["Twitter / X", "LinkedIn", "Dribbble", "Behance"] },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-28 pb-10 mt-10 bg-[hsl(222_20%_10%)] text-[hsl(0_0%_98%)] border-t border-border/60 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 -top-40 h-[400px] opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, hsl(255 92% 60% / 0.45), transparent 60%)" }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-display text-background text-sm">A</span>
              <span className="font-display text-xl">Aqib Javid</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              An independent Product Designer crafting digital experiences for ambitious teams worldwide.
            </p>
          </motion.div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-5">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/85 hover:text-white link-underline text-sm">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative -mb-6 overflow-hidden">
          <h2 aria-hidden className="editorial-heading text-white/[0.08] text-[22vw] leading-[0.85] whitespace-nowrap text-center select-none">
            Aqib Javid.
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/15">
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-white/65">© {year} Aqib Javid · All rights reserved</p>
          <p className="mono text-[10px] uppercase tracking-[0.25em] text-white/65">Designed &amp; built with intent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
