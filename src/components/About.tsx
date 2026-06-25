import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 80, suffix: "+", label: "Projects shipped" },
  { value: 8, suffix: "+", label: "Years experience" },
  { value: 20, suffix: "+", label: "Happy clients" },
  { value: 12, suffix: "", label: "Countries served" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <span ref={ref}>{n}{suffix}</span>;
};

const About = () => (
  <section id="about" className="py-28 md:py-40 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
        <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">About me</span>
        <h2 className="editorial-heading text-foreground text-5xl md:text-7xl mt-4 leading-[0.95]">
          A designer<br />
          <span className="italic text-gradient-primary">obsessed</span> with craft.
        </h2>
        <div className="mt-10 space-y-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
          <p>
            I'm Aqib — a multi-disciplinary Product Designer with a strong foundation in UX
            and design systems. For the last eight years I've partnered with founders and
            product teams who care as much about the details as I do.
          </p>
          <p className="text-foreground/85">
            My practice spans strategy, research, interface design, motion and design systems.
            I embed deeply, ship quickly, and leave teams with a product they can keep evolving
            long after handover.
          </p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}
        className="grid grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-8 md:p-10">
            <div className="editorial-heading text-5xl md:text-6xl text-foreground">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-3">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
