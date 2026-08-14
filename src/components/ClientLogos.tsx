import { motion } from "framer-motion";

const clients = [
  { name: "NexifyVPN", mark: "N" },
  { name: "Sanialarm", mark: "S" },
  { name: "HairstyleDiscovery", mark: "H" },
  { name: "Quick Swapper", mark: "Q" },
  { name: "MATE", mark: "M" },
  { name: "Rapidos", mark: "R" },
  { name: "Appick", mark: "A" },
  { name: "Algorithm", mark: "AL" },
  { name: "ItecExperts", mark: "IE" },
  { name: "Diet Achiever", mark: "DA" },
];

const LogoChip = ({ name, mark }: { name: string; mark: string }) => (
  <div className="shrink-0 inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card/70 backdrop-blur-sm hover:border-primary/40 transition-colors duration-500 group">
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-background text-[12px] font-semibold tracking-tight"
      style={{ background: "var(--gradient-accent)" }}
      aria-hidden
    >
      {mark}
    </span>
    <span className="text-[15px] md:text-base font-medium text-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="marquee-mask overflow-hidden py-2.5">
    <div
      className={`flex gap-4 md:gap-5 w-max ${reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee-slow"}`}
    >
      {[...clients, ...clients].map((c, i) => (
        <LogoChip key={`${c.name}-${i}`} {...c} />
      ))}
    </div>
  </div>
);

const ClientLogos = () => (
  <section id="clients" className="py-12 md:py-16 relative">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 flex items-center justify-center gap-4"
    >
      <span className="h-px w-8 md:w-12 bg-border" />
      <span className="mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-muted-foreground text-center">
        Trusted by 80+ founders &amp; product teams
      </span>
      <span className="h-px w-8 md:w-12 bg-border" />
    </motion.div>

    <Row />
    <Row reverse />
  </section>
);

export default ClientLogos;
