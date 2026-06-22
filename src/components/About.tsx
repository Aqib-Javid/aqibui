import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 200, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Happy clients" },
  { value: 10, suffix: "+", label: "Industries served" },
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

const About = () => {
  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">About</span>
            <h2 className="editorial-heading text-5xl md:text-7xl mt-4 text-foreground">
              A designer<br />
              <span className="italic font-light text-gradient-primary">with intent.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-[17px] md:text-lg leading-[1.75] text-muted-foreground"
          >
            <p>
              I've grown from a visual designer to a senior product designer, navigating diverse roles
              and disciplines. My journey spans <span className="text-foreground">fintech, SaaS, mobility,
              edtech and AI</span> — each chapter shaping how I see design as a tool for impact.
            </p>
            <p>
              Today, I approach challenges with a holistic lens — solving the bigger picture by obsessing
              over the tiny details. From research to pixel-perfect execution, I specialize in building
              <span className="text-foreground"> scalable design systems</span> and crafting user-centered
              digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-border/60">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`py-10 md:py-12 px-2 md:px-6 ${i < stats.length - 1 ? "md:border-r" : ""} border-border/60 ${i % 2 === 0 ? "border-r md:border-r" : ""}`}
            >
              <div className="editorial-heading text-5xl md:text-6xl text-foreground mb-3">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
