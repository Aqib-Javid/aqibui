import { motion } from "framer-motion";

const row1 = ["NexifyVPN", "Sanialarm", "HairstyleDiscovery", "Quick Swapper", "MATE", "Rapidos"];
const row2 = ["Appick", "Algorithm", "ItecExperts", "NexifyVPN", "Sanialarm", "MATE"];

const Marquee = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="marquee-mask overflow-hidden py-3">
    <div className={`flex gap-20 whitespace-nowrap ${reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee-slow"}`} style={{ width: "max-content" }}>
      {[...items, ...items, ...items].map((l, i) => (
        <span key={i} className="font-display text-3xl md:text-5xl text-foreground/25 hover:text-foreground transition-colors duration-500 tracking-tight">{l}</span>
      ))}
    </div>
  </div>
);

const LogosShowcase = () => (
  <section className="py-20 md:py-24 relative">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Clients</span>
          <h2 className="editorial-heading text-foreground text-4xl md:text-6xl mt-4">
            Teams I've <span className="italic text-gradient-primary">shipped with</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
          A selection of the founders, startups and product teams I've partnered with over the last eight years.
        </p>
      </motion.div>
    </div>

    <Marquee items={row1} />
    <Marquee items={row2} reverse />
  </section>
);

export default LogosShowcase;

