import { motion } from "framer-motion";

const stats = [
  { label: "Avg. conversion lift", from: 18, to: 62, suffix: "%" },
  { label: "User growth in 6mo", from: 1, to: 4.8, suffix: "x" },
  { label: "Retention improvement", from: 22, to: 64, suffix: "%" },
  { label: "Revenue impact", from: 1, to: 3.2, suffix: "x" },
];

const Bar = ({ from, to }: { from: number; to: number }) => {
  const fromP = Math.min(100, (from / Math.max(to, 1)) * 60);
  const toP = 100;
  return (
    <div className="mt-6 space-y-3">
      <div>
        <div className="flex justify-between mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
          <span>Before</span><span>{from}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div initial={{ width: 0 }} whileInView={{ width: `${fromP}%` }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }} className="h-full bg-muted-foreground/40" />
        </div>
      </div>
      <div>
        <div className="flex justify-between mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1.5">
          <span>After</span><span>{to}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div initial={{ width: 0 }} whileInView={{ width: `${toP}%` }} viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-primary to-primary/60" />
        </div>
      </div>
    </div>
  );
};

const SuccessStories = () => (
  <section className="py-28 md:py-36 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="max-w-2xl mb-16">
        <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Client outcomes</span>
        <h2 className="editorial-heading text-foreground text-5xl md:text-6xl mt-4">
          Design that <span className="italic text-gradient-primary">moves the needle</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-card/60 border border-border p-7 hover:border-primary/40 transition-colors">
            <div className="editorial-heading text-5xl text-gradient-primary">
              {s.to}{s.suffix}
            </div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            <Bar from={s.from} to={s.to} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
