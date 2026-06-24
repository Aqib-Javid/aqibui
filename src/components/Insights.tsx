import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featured = {
  category: "Field notes",
  read: "8 min read",
  title: "Designing for trust in financial products",
  desc: "How we re-architected Drift's onboarding around regulatory clarity, micro-affordances and progressive disclosure.",
};

const articles = [
  { category: "Process", read: "5 min", title: "The shortest path from research to ship", desc: "A pragmatic toolkit for studios working with high-velocity product teams." },
  { category: "Systems", read: "7 min", title: "Tokens are a product, not a deliverable", desc: "Why design tokens deserve the same lifecycle treatment as any feature." },
  { category: "Motion", read: "4 min", title: "Motion as hierarchy", desc: "Using easing curves and layering to direct attention without UI clutter." },
];

const Insights = () => (
  <section id="insights" className="py-28 md:py-40 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Journal</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
            Field <span className="italic text-gradient-primary">notes</span>
          </h2>
        </div>
        <a href="#" className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
          All articles <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </a>
      </motion.div>

      <motion.a href="#"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
        className="group grid lg:grid-cols-2 gap-8 lg:gap-14 mb-16 items-center">
        <div className="aspect-[4/3] rounded-[32px] overflow-hidden bg-gradient-to-br from-violet-500/30 to-fuchsia-500/10 border border-white/10 relative">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <motion.div className="absolute inset-0 flex items-center justify-center transition-transform duration-[1200ms] group-hover:scale-105">
            <div className="font-display italic text-7xl text-foreground/40">Trust.</div>
          </motion.div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-primary">{featured.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{featured.read}</span>
          </div>
          <h3 className="editorial-heading text-foreground text-4xl md:text-5xl mb-5 group-hover:text-gradient-primary transition-all">{featured.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">{featured.desc}</p>
        </div>
      </motion.a>

      <div className="grid md:grid-cols-3 gap-5">
        {articles.map((a, i) => (
          <motion.a key={a.title} href="#"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl bg-card/60 border border-border p-6 hover:border-primary/40 transition-colors duration-500">
            <div className="aspect-[5/3] rounded-2xl mb-5 overflow-hidden bg-gradient-to-br from-sky-500/20 to-emerald-500/10 border border-white/5 flex items-center justify-center">
              <span className="font-display italic text-4xl text-foreground/30 group-hover:scale-110 transition-transform duration-[1000ms]">{a.category}.</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-primary">{a.category}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{a.read}</span>
            </div>
            <h3 className="editorial-heading text-2xl text-foreground mb-2 group-hover:text-gradient-primary transition-all">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
