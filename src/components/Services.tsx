import { motion } from "framer-motion";

const items = [
  { n: "01", title: "Product Design", desc: "End-to-end product thinking from discovery to ship — flows, prototypes, and pixel craft." },
  { n: "02", title: "UX & Research", desc: "User interviews, journey mapping and usability testing that ground decisions in evidence." },
  { n: "03", title: "Design Systems", desc: "Scalable component libraries, tokens, and documentation built to grow with the team." },
  { n: "04", title: "Mobile & Web Apps", desc: "Native iOS / Android and responsive web experiences with motion-first interactions." },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 relative border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">What I do</span>
            <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
              Crafting <span className="italic text-gradient-primary">experiences</span><br />
              that matter.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
            From early-stage discovery to launch — a holistic practice across product, brand and interaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-background p-10 md:p-14 hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.n}</span>
                <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-150 transition-all" />
              </div>
              <h3 className="editorial-heading text-3xl md:text-5xl text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
                {it.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed max-w-md">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
