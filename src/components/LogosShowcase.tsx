import { motion } from "framer-motion";

const row1 = ["Lumen", "Vantage", "Northstar", "Halcyon", "Orbital", "Quanta"];
const row2 = ["Aperture", "Meridian", "Veridian", "Kairos", "Drift", "Northgrid"];
const grid = ["Lumen", "Vantage", "Northstar", "Halcyon", "Orbital", "Quanta", "Aperture", "Meridian"];

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
  <section className="py-28 md:py-36 relative border-y border-border/40">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-12">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Clients</span>
          <h2 className="editorial-heading text-foreground text-4xl md:text-6xl mt-4">
            Trusted across <span className="italic text-gradient-primary">38 countries</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-[15px] leading-relaxed">
          From early-stage founders to publicly listed scale-ups — a partial list of teams we've shipped with.
        </p>
      </motion.div>
    </div>

    <Marquee items={row1} />
    <Marquee items={row2} reverse />

    <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border">
      {grid.map((g) => (
        <div key={g} className="bg-card/40 h-28 flex items-center justify-center font-display text-2xl text-foreground/60 hover:text-foreground hover:bg-card/80 transition-all duration-500">
          {g}
        </div>
      ))}
    </div>
  </section>
);

export default LogosShowcase;
