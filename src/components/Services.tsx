import { motion } from "framer-motion";
import {
  Boxes,
  Compass,
  Layers,
  LayoutDashboard,
  MousePointerClick,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

const services = [
  { icon: Compass, title: "Product Design" },
  { icon: Search, title: "UX Research" },
  { icon: Sparkles, title: "UI Design" },
  { icon: Boxes, title: "Design Systems" },
  { icon: Smartphone, title: "Mobile Apps" },
  { icon: LayoutDashboard, title: "SaaS & Dashboards" },
  { icon: Layers, title: "Web Design" },
  { icon: MousePointerClick, title: "Prototyping" },
];

const Services = () => (
  <section id="services" className="py-16 md:py-24 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14"
      >
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">What I do</span>
          <h2 className="editorial-heading text-foreground text-4xl sm:text-5xl md:text-6xl mt-3">
            A full-stack <span className="italic text-gradient-primary">design practice</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-xs text-[15px] leading-relaxed">
          Eight disciplines, one designer — embedded with your team from idea to ship.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl bg-card/60 border border-border p-5 md:p-7 aspect-square flex flex-col justify-between overflow-hidden hover:border-primary/40 transition-colors duration-500"
          >
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(320px circle at 50% 0%, hsl(var(--primary) / 0.14), transparent 70%)" }}
            />
            <span className="relative inline-flex w-11 h-11 md:w-12 md:h-12 rounded-2xl items-center justify-center border border-border bg-background/70 text-primary group-hover:scale-110 transition-transform duration-500">
              <s.icon className="w-5 h-5" strokeWidth={1.5} />
            </span>
            <span className="relative editorial-heading text-xl md:text-2xl text-foreground leading-tight">
              {s.title}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
