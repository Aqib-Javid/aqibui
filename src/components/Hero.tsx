import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const services = ["UX Design", "Product Design", "Design Systems", "Mobile Apps", "SaaS", "Webflow", "Framer"];

const reveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.95, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-15%" }}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-16"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[520px] h-[520px] rounded-full opacity-40 blur-[120px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(255 92% 60% / 0.55), transparent 70%)" }} />
        <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] animate-blob"
             style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.5), transparent 70%)", animationDelay: "4s" }} />
        <div className="absolute inset-0 opacity-[0.025]"
             style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <motion.div custom={0} initial="hidden" animate="show" variants={reveal}
          className="flex items-center gap-3 mb-10">
          <span className="h-px w-12 bg-foreground/30" />
          <span className="mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Aqib Javid — Senior Product Designer · Available
          </span>
        </motion.div>

        <h1 className="editorial-heading text-foreground text-[16vw] md:text-[13vw] lg:text-[11.5rem] xl:text-[14rem] leading-[0.9]">
          <motion.span custom={1} initial="hidden" animate="show" variants={reveal} className="block">
            Designing
          </motion.span>
          <motion.span custom={2} initial="hidden" animate="show" variants={reveal} className="block">
            <span className="italic text-gradient-primary pr-4">human</span>
            <span className="text-foreground/30">·</span>
          </motion.span>
          <motion.span custom={3} initial="hidden" animate="show" variants={reveal} className="block">
            centered products.
          </motion.span>
        </h1>

        <motion.div custom={4} initial="hidden" animate="show" variants={reveal}
          className="mt-12 md:mt-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl font-light">
            A multi-disciplinary product designer with 5+ years crafting scalable systems,
            intuitive interfaces and human-centered products across fintech, SaaS and mobility.
          </p>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {services.map((b, i) => (
              <motion.span key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.5 }}
                whileHover={{ y: -3, borderColor: "hsl(var(--primary))" }}
                className="mono px-3.5 py-1.5 rounded-full border border-border text-[11px] uppercase tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors">
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div custom={5} initial="hidden" animate="show" variants={reveal}
          className="mt-14 md:mt-20 flex flex-wrap items-center gap-4">
          <a href="#work" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary text-primary-foreground hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
            <span className="text-sm font-medium">View selected work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="mailto:contact@aqibjavid.com" className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-primary/50 transition-colors text-sm">
            Let's talk
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
