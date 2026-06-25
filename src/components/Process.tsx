import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Discovery", desc: "I immerse in your product, users and market — interviews, audits and opportunity mapping." },
  { n: "02", title: "Strategy", desc: "We frame the problem, set success metrics, and align on the smallest valuable bet." },
  { n: "03", title: "Design", desc: "Architecture, flows, interface and motion — iterated tightly against real prototypes." },
  { n: "04", title: "Launch", desc: "Polished handoff, build collaboration with your engineers, and post-launch iteration." },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

        <div ref={ref} className="relative">
          <svg className="hidden md:block absolute top-8 left-0 w-full h-8 pointer-events-none" viewBox="0 0 1200 32" preserveAspectRatio="none">
            <line x1="40" y1="16" x2="1160" y2="16" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 6" />
            <motion.line x1="40" y1="16" x2="1160" y2="16" stroke="hsl(var(--primary))" strokeWidth="2" style={{ pathLength }} />
          </svg>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative">
                <div className="relative w-4 h-4 rounded-full bg-background border-2 border-primary mx-auto md:mx-0 mb-8">
                  <span className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="rounded-2xl bg-card/60 border border-border p-6 hover:border-primary/40 transition-colors">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-primary">Step {s.n}</span>
                  <h3 className="editorial-heading text-2xl md:text-3xl text-foreground mt-3 mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
