import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Product Design", desc: "End-to-end product thinking from discovery to ship.", tags: ["Flows", "Prototypes", "Specs"] },
  { n: "02", title: "UX Research", desc: "Interviews, journey mapping and usability testing.", tags: ["Discovery", "Testing"] },
  { n: "03", title: "UI Design", desc: "Pixel-precise interface craft with motion-first detail.", tags: ["Visual", "Motion"] },
  { n: "04", title: "Design Systems", desc: "Token-driven libraries built to scale across teams.", tags: ["Tokens", "Components"] },
  { n: "05", title: "Mobile App Design", desc: "Native iOS & Android experiences that feel inevitable.", tags: ["iOS", "Android"] },
  { n: "06", title: "SaaS Design", desc: "Dashboards, data viz and workflows for complex products.", tags: ["B2B", "Data"] },
  { n: "07", title: "Web Design", desc: "Conversion-focused marketing sites with personality.", tags: ["Marketing", "Webflow"] },
  { n: "08", title: "Product Strategy", desc: "Roadmaps, positioning, and design ops for scaling teams.", tags: ["Strategy", "Ops"] },
];

const Services = () => (
  <section id="services" className="py-28 md:py-40 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">What we do</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
            A full-stack <span className="italic text-gradient-primary">design practice</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
          Eight disciplines, one studio. We embed with your team to design, validate and ship at velocity.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <motion.a
            key={s.n}
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-3xl bg-card/60 border border-border p-7 min-h-[280px] flex flex-col justify-between overflow-hidden hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(255_92%_60%/0.3)] transition-all duration-500"
          >
            <div aria-hidden className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(400px circle at 50% 0%, hsl(255 92% 60% / 0.18), transparent 70%)" }} />
            <div className="relative flex items-start justify-between">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.n}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
            </div>
            <div className="relative">
              <h3 className="editorial-heading text-2xl md:text-3xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border border-border/80 text-foreground/60">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
