import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", desc: "I immerse in your product, users and market — interviews, audits and opportunity mapping." },
  { n: "02", title: "Strategy", desc: "We frame the problem, set success metrics, and align on the smallest valuable bet." },
  { n: "03", title: "Design", desc: "Architecture, flows, interface and motion — iterated tightly against real prototypes." },
  { n: "04", title: "Launch", desc: "Polished handoff, build collaboration with your engineers, and post-launch iteration." },
];

const Process = () => {
  return (
    <section id="process" className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20">
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">How I work</span>
          <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4">
            A repeatable<br /><span className="italic text-gradient-primary">four-step</span> process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="h-full">
              <div className="h-full rounded-2xl bg-card/60 border border-border p-7 hover:border-primary/40 transition-colors flex flex-col">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-primary">Step {s.n}</span>
                <h3 className="editorial-heading text-2xl md:text-3xl text-foreground mt-3 mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
