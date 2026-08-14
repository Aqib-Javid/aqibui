import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/aqib-avatar.png";

const stats = [
  { value: 100, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "+", label: "Years experience" },
  { value: 80, suffix: "+", label: "Happy clients" },
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
  <section id="about" className="py-16 md:py-24 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative rounded-[32px] overflow-hidden border border-border bg-secondary aspect-[4/5] max-w-[420px] mx-auto lg:mx-0">
          <img
            src={avatar}
            alt="Aqib Javid, product designer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[-12px] lg:translate-x-0 glass-card rounded-2xl px-5 py-3 flex items-center gap-2.5 whitespace-nowrap">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">Available for work</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">About me</span>
        <h2 className="editorial-heading text-foreground text-4xl sm:text-5xl md:text-6xl mt-3 leading-[0.95]">
          A designer <span className="italic text-gradient-primary">obsessed</span> with craft.
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
          I'm Aqib — a multi-disciplinary Product Designer with a strong foundation in UX and design
          systems. I embed deeply, ship quickly, and leave teams with a product they can keep evolving.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5 md:p-6">
              <div className="editorial-heading text-3xl md:text-4xl text-foreground">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
