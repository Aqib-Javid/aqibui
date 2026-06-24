import { motion } from "framer-motion";

const logos = ["Lumen", "Vantage", "Northstar", "Halcyon", "Orbital", "Quanta", "Aperture", "Meridian", "Veridian", "Kairos"];

const TrustedBy = () => (
  <section className="py-16 border-y border-border/40 relative overflow-hidden">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 flex items-center gap-4">
      <span className="h-px w-10 bg-foreground/20" />
      <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Trusted by teams at</span>
    </div>
    <div className="marquee-mask overflow-hidden">
      <motion.div className="flex gap-16 whitespace-nowrap animate-marquee-slow" style={{ width: "max-content" }}>
        {[...logos, ...logos, ...logos].map((l, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl text-foreground/30 hover:text-foreground transition-colors duration-500 tracking-tight">
            {l}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;
